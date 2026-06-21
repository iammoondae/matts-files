import os
import json
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
    translation_cache = {
        "tama": "True",
        "mali": "False",
        "opo": "Yes",
        "hindi po": "No",
        "tama o mali": "True or False",
        "heograpiya": "geography",
        "kasaysayan": "history",
        "matematika": "mathematics",
        "sining": "art",
        "tao": "people",
        "lugar": "place",
        "panahon": "time",
        "laruan": "toy",
        "bata": "child",
        "guro": "teacher"
    }

def save_cache():
    with open(CACHE_PATH, "w", encoding="utf-8") as f:
        json.dump(translation_cache, f, indent=2, ensure_ascii=False)

def translate_text(text):
    text_clean = text.strip()
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
        
    # Translate
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
                    time.sleep(0.1) # Be polite
                    return translated
        except Exception as e:
            print(f"Attempt {attempt+1} failed for {text_clean}: {e}")
            time.sleep(1)
            
    # Fallback to original if translation fails
    return text_clean

def wrap_translation(fil, eng):
    if not eng or eng.lower() == fil.lower():
        return fil
    # Escape quotes for HTML attribute
    eng_escaped = html.escape(eng).replace('"', '&quot;')
    return f'<span class="fil-sentence" data-translation="{eng_escaped}">{fil}</span>'

def process_file(filepath):
    print(f"Processing {filepath}...")
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    changed = False
    
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
                            
    if changed:
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"[UPDATED] {filepath}")
    else:
        print(f"[NO CHANGES] {filepath}")

# Iterate over subject directories
subjects = ["filipino", "filipino_advanced", "makabansa", "makabansa_advanced"]
for sub in subjects:
    sub_dir = os.path.join(SOURCES_DIR, sub)
    if os.path.exists(sub_dir):
        for w in range(1, 5):
            filepath = os.path.join(sub_dir, f"week{w}.json")
            if os.path.exists(filepath):
                process_file(filepath)
                
print("All quizzes translated successfully!")
