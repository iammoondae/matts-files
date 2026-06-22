import os
import json
import re
import urllib.request
import urllib.parse
import time
import html

BASE_DIR = "/home/moondae/Antigravity Projects/Matts Files_apk"
SOURCES_DIR = os.path.join(BASE_DIR, "data", "sources", "g3")
CACHE_PATH = os.path.join(BASE_DIR, "scratch", "translation_cache.json")

# Load existing cache if any
if os.path.exists(CACHE_PATH):
    with open(CACHE_PATH, "r", encoding="utf-8") as f:
        translation_cache = json.load(f)
else:
    translation_cache = {}

def save_cache():
    with open(CACHE_PATH, "w", encoding="utf-8") as f:
        json.dump(translation_cache, f, indent=2, ensure_ascii=False)

def clean_html_tags(text):
    # Strip HTML tags like <u>, <strong>, etc. for translation query
    clean = re.sub(r'<[^>]+>', '', text)
    # Remove leading/trailing non-alphanumeric punctuation
    return clean.strip()

def translate_text(text):
    text_clean = clean_html_tags(text)
    if not text_clean:
        return text
    
    # If already a span
    if text_clean.startswith('<span class="fil-sentence"') or text_clean.startswith('<span class="fil-phrase"'):
        return text
    
    # If it's just a number
    if text_clean.isdigit():
        return text
        
    cache_key = text_clean.lower()
    if cache_key in translation_cache:
        return translation_cache[cache_key]
        
    # Translate using Google Translate API
    for attempt in range(5):
        try:
            url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=tl&tl=en&dt=t&q=" + urllib.parse.quote(text_clean)
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=5) as response:
                res = json.loads(response.read().decode('utf-8'))
                translated = "".join([part[0] for part in res[0] if part[0]])
                if translated:
                    translation_cache[cache_key] = translated
                    save_cache()
                    time.sleep(0.05) # Be polite
                    return translated
        except Exception as e:
            print(f"Attempt {attempt+1} failed for {text_clean}: {e}")
            time.sleep(1)
            
    return text_clean

def wrap_translation(fil, eng):
    if not eng or eng.lower() == fil.lower():
        return fil
    eng_escaped = html.escape(eng).replace('"', '&quot;')
    return f'<span class="fil-sentence" data-translation="{eng_escaped}">{fil}</span>'

def translate_and_wrap(text):
    if not text or not isinstance(text, str):
        return text
    text_clean = text.strip()
    if not text_clean:
        return text
    if text_clean.startswith('<span class="fil-sentence"') or text_clean.startswith('<span class="fil-phrase"'):
        return text
    if text_clean.isdigit():
        return text
    eng = translate_text(text)
    if eng == text_clean:
        return text
    return wrap_translation(text, eng)

# Helper to translate worksheet HTML strings
def translate_worksheet_html(html_content):
    # 1. First replace empty span patterns like:
    # <div>1. bansa <span class="fil-sentence" data-translation="(country)"></span></div>
    # <li>bansa <span class="fil-sentence" data-translation="(country)"></span></li>
    # <div class="ws-q">1. Bundok Makiling <span class="fil-sentence" data-translation="(Mount Makiling)"></span></div>
    def repl_span(m):
        prefix = m.group(1) or ""
        filipino_text = m.group(2).strip()
        english_translation = m.group(3).strip()
        wrapped = wrap_translation(filipino_text, english_translation)
        return f"{prefix}{wrapped}"

    # Match: (optional prefix number like 1. or A. )(text)<span class="fil-sentence" data-translation="(translation)"></span>
    # We match it carefully
    pattern_empty_span = r'([\d\w]+\.\s+|[A-Za-z]\)\s+)?([^<]+?)\s*<span class="fil-sentence" data-translation="\((.*?)\)"></span>'
    html_content = re.sub(pattern_empty_span, repl_span, html_content)

    # 2. Translate h3 headings
    # <h3>Pagsasanay 1: Elemento ng Kasaysayan</h3>
    def repl_h3(m):
        tag = m.group(1) # e.g. h3
        content = m.group(2)
        if content.startswith('<span'):
            return m.group(0)
        translated = translate_and_wrap(content)
        return f"<{tag}>{translated}</{tag}>"
    
    html_content = re.sub(r'<(h[1-6])>(.*?)</\1>', repl_h3, html_content)

    # 3. Translate ws-instruction paragraph
    # <p class="ws-instruction">Tukuyin ang elemento...</p>
    def repl_instruction(m):
        attrs = m.group(1)
        content = m.group(2)
        if content.startswith('<span'):
            return m.group(0)
        translated = translate_and_wrap(content)
        return f'<p {attrs}>{translated}</p>'
        
    html_content = re.sub(r'<p (class=["\']ws-instruction["\'].*?)>(.*?)</p>', repl_instruction, html_content)

    # 4. Translate questions in ws-q
    # <div class="ws-q">1. Ipinanganak si ...</div>
    def repl_wsq(m):
        content = m.group(1)
        # Check if already wrapped
        # Split by <br> in case there are multiple lines
        parts = re.split(r'(<br\s*/?>)', content, flags=re.IGNORECASE)
        new_parts = []
        for part in parts:
            if not part.strip() or part.lower().startswith('<br'):
                new_parts.append(part)
                continue
            # Extract optional item number/letter prefix like "1. " or "A. " or "A) "
            m_prefix = re.match(r'^(\s*[\d\w]+[\.\)]\s+)?(.*)$', part, re.DOTALL)
            prefix = m_prefix.group(1) or ""
            text_to_trans = m_prefix.group(2)
            if text_to_trans.startswith('<span'):
                new_parts.append(part)
                continue
            translated = translate_and_wrap(text_to_trans)
            new_parts.append(f"{prefix}{translated}")
        return f'<div class="ws-q">{"".join(new_parts)}</div>'

    html_content = re.sub(r'<div class="ws-q">(.*?)</div>', repl_wsq, html_content)

    # 5. Translate bold labels inside lists or columns
    # <strong>Pangkalahatan (Pambalana):</strong>
    def repl_strong(m):
        content = m.group(1)
        if content.startswith('<span'):
            return m.group(0)
        translated = translate_and_wrap(content)
        return f'<strong>{translated}</strong>'
    html_content = re.sub(r'<strong>(?!Tao|Lugar|Panahon|Pangyayari|Hilig|Kakayahan|Mabuti|Mali|Primary|Secondary|Pambalana|Pantangi)(.*?)</strong>', repl_strong, html_content)

    return html_content

def process_file(filepath):
    print(f"Processing {filepath}...")
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    changed = False
    
    # 1. Slide Examples
    if "slides" in data:
        for slide in data["slides"]:
            # Translate slide title if not wrapped
            if "title" in slide and slide["title"] and not slide["title"].startswith('<span'):
                # We only wrap it if it's Filipino and not already translated
                orig_title = slide["title"]
                eng_title = translate_text(orig_title)
                if eng_title != orig_title:
                    slide["title"] = wrap_translation(orig_title, eng_title)
                    changed = True
                    
            if "examples" in slide and slide["examples"]:
                for ex in slide["examples"]:
                    # Translate example title
                    if "title" in ex and ex["title"] and not ex["title"].startswith('<span'):
                        orig_t = ex["title"]
                        eng_t = translate_text(orig_t)
                        if eng_t != orig_t:
                            ex["title"] = wrap_translation(orig_t, eng_t)
                            changed = True
                    # Translate example content
                    if "content" in ex and ex["content"] and not ex["content"].startswith('<span'):
                        orig_c = ex["content"]
                        eng_c = translate_text(orig_c)
                        if eng_c != orig_c:
                            ex["content"] = wrap_translation(orig_c, eng_c)
                            changed = True
                            
    # 2. Quiz / Challenge
    for q_type in ["standard", "challenge"]:
        if q_type not in data:
            continue
        for q in data[q_type]:
            # Translate question
            original_q = q.get("q", "")
            if original_q and not original_q.startswith('<span'):
                eng_q = translate_text(original_q)
                if eng_q and eng_q != original_q:
                    q["q"] = wrap_translation(original_q, eng_q)
                    changed = True
                    
            # Translate options
            options = q.get("options", [])
            if options:
                for idx, opt in enumerate(options):
                    if isinstance(opt, str) and opt and not opt.startswith('<span'):
                        eng_opt = translate_text(opt)
                        if eng_opt and eng_opt != opt:
                            options[idx] = wrap_translation(opt, eng_opt)
                            changed = True

    # 3. Performance Task
    if "performance" in data and data["performance"]:
        perf = data["performance"]
        # Title
        if "title" in perf and perf["title"] and not perf["title"].startswith('<span'):
            orig_t = perf["title"]
            eng_t = translate_text(orig_t)
            if eng_t != orig_t:
                perf["title"] = wrap_translation(orig_t, eng_t)
                changed = True
        # Desc
        if "desc" in perf and perf["desc"] and not perf["desc"].startswith('<span'):
            orig_d = perf["desc"]
            eng_d = translate_text(orig_d)
            if eng_d != orig_d:
                perf["desc"] = wrap_translation(orig_d, eng_d)
                changed = True
        # Rubric Labels
        if "labels" in perf and perf["labels"]:
            labels = perf["labels"]
            for idx, lbl in enumerate(labels):
                if lbl and not lbl.startswith('<span'):
                    orig_l = lbl
                    eng_l = translate_text(orig_l)
                    if eng_l != orig_l:
                        labels[idx] = wrap_translation(orig_l, eng_l)
                        changed = True

    # 4. Worksheets
    if "worksheet" in data and data["worksheet"] and "pages" in data["worksheet"]:
        pages = data["worksheet"]["pages"]
        for idx, page_html in enumerate(pages):
            new_html = translate_worksheet_html(page_html)
            if new_html != page_html:
                pages[idx] = new_html
                changed = True

    if changed:
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"[UPDATED] {filepath}")
    else:
        print(f"[NO CHANGES] {filepath}")

# Iterate over subject directories
subjects = ["filipino", "filipino_advanced", "makabansa", "makabansa_advanced", "gmrc", "gmrc_advanced"]
for sub in subjects:
    sub_dir = os.path.join(SOURCES_DIR, sub)
    if os.path.exists(sub_dir):
        for w in range(1, 5):
            filepath = os.path.join(sub_dir, f"week{w}.json")
            if os.path.exists(filepath):
                process_file(filepath)

print("Translation pass finished successfully!")
