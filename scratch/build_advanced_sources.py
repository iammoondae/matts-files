import os
import json
import sys

BASE_DIR = "/home/moondae/Antigravity Projects/Matts Files_apk"
DATA_DIR = os.path.join(BASE_DIR, "data", "g3")
SOURCES_DIR = os.path.join(BASE_DIR, "data", "sources", "g3")
REBUILD_SCIENCE_PATH = os.path.join(BASE_DIR, "orphaned_files", "scratch_scripts", "rebuild_science.py")
GEN_ADV_WEEK3_PATH = os.path.join(BASE_DIR, "orphaned_files", "scratch_scripts", "generate_advanced_week3.py")

# Ensure advanced directories exist
for sub in ["science", "english", "filipino", "makabansa", "gmrc", "math"]:
    os.makedirs(os.path.join(SOURCES_DIR, f"{sub}_advanced"), exist_ok=True)

def make_translation(fil, eng):
    eng_escaped = eng.replace('"', '&quot;')
    return f'<span class="fil-sentence" data-translation="{eng_escaped}">{fil}</span>'

def strip_advanced_remarks(text):
    if not isinstance(text, str):
        return text
    import re
    cleaned = re.sub(r'\s*[\[(]Advanced[\])]\s*', ' ', text, flags=re.IGNORECASE)
    return cleaned.strip()

def split_sentences_html(text):
    import re
    tokens = re.split(r'(<[^>]+>)', text)
    sentences = []
    current_sentence = []
    open_spans = 0
    for token in tokens:
        if not token:
            continue
        if token.startswith('<') and token.endswith('>'):
            current_sentence.append(token)
            tag_name_match = re.match(r'^</?([a-zA-Z0-9]+)', token)
            if tag_name_match:
                name = tag_name_match.group(1).lower()
                if name == 'span':
                    if token.startswith('</'):
                        open_spans = max(0, open_spans - 1)
                        if open_spans == 0:
                            sentences.append("".join(current_sentence).strip())
                            current_sentence = []
                    else:
                        open_spans += 1
        else:
            if open_spans > 0:
                current_sentence.append(token)
            else:
                parts = re.split(r'([.!?]+(?:\s+|$))', token)
                for i, part in enumerate(parts):
                    if not part:
                        continue
                    current_sentence.append(part)
                    if i % 2 == 1:
                        sentences.append("".join(current_sentence).strip())
                        current_sentence = []
    if current_sentence:
        remaining = "".join(current_sentence).strip()
        if remaining:
            sentences.append(remaining)
    return sentences

# Smart 8-line slide padding
def expand_to_8_lines(text, title, examples, lang='en'):
    # Clean input text of newlines and double spaces
    clean_text = text.replace('\n', ' ').strip()
    sentences = split_sentences_html(clean_text)
    sentences = [(s + "." if not s.endswith(('.', '!', '?', '>')) else s) for s in sentences]
    
    lines = []
    
    # 1. Distribute available sentences
    for s in sentences:
        lines.append(s)
        
    # Ensure we have at least 2 sentences
    while len(lines) < 2:
        if lang == 'en':
            lines.append(f"This slide introduces key insights about {title}.")
        else:
            lines.append(make_translation(f"Ipinapakita ng slide na ito ang mga detalye tungkol sa {title}.", f"This slide introduces key insights about {title}."))
            
    # 2. Add example 1
    if len(examples) >= 1:
        ex_title = examples[0].get('title', 'Example 1')
        ex_content = examples[0].get('content', '')
        if lang == 'en':
            lines.append(f"For instance, consider the example of {ex_title}:")
            lines.append(f"{ex_content}")
        else:
            lines.append(make_translation(f"Halimbawa, tingnan natin ang tungkol sa {ex_title}:", f"For instance, consider the example of {ex_title}:"))
            lines.append(ex_content)
    else:
        if lang == 'en':
            lines.append("We can observe this principle in our daily observations.")
            lines.append("Look closely at the environment around you to spot it.")
        else:
            lines.append(make_translation("Maaari nating maobserbahan ang prinsipyong ito sa araw-araw.", "We can observe this principle in our daily observations."))
            lines.append(make_translation("Tingnan ang iyong paligid upang mapansin ang halimbawang ito.", "Look closely at the environment around you to spot it."))

    # 3. Add example 2
    if len(examples) >= 2:
        ex_title = examples[1].get('title', 'Example 2')
        ex_content = examples[1].get('content', '')
        if lang == 'en':
            lines.append(f"Another case is the study of {ex_title}:")
            lines.append(f"{ex_content}")
        else:
            lines.append(make_translation(f"Ang isa pang kaso ay ang pag-aaral ng {ex_title}:", f"Another case is the study of {ex_title}:"))
            lines.append(ex_content)
    else:
        if lang == 'en':
            lines.append("Another application is demonstrated in science classrooms.")
            lines.append("Verify these concepts by testing them with simple setups.")
        else:
            lines.append(make_translation("Ang isa pang aplikasyon ay ipinapakita sa ating mga klase.", "Another application is demonstrated in science classrooms."))
            lines.append(make_translation("Suriin ang mga konseptong ito gamit ang simpleng eksperimento.", "Verify these concepts by testing them with simple setups."))
            
    # 4. Add HOTS challenge & encouragement
    if lang == 'en':
        lines.append(f"How does the concept of {title} help us think critically?")
        lines.append("Keep up your curiosity and check your facts as a scientist!")
    else:
        lines.append(make_translation(f"Paano nakakatulong ang konsepto ng {title} sa ating kritikal na pag-iisip?", f"How does the concept of {title} help us think critically?"))
        lines.append(make_translation("Ipagpatuloy ang pagiging masipag at mausisang mag-aaral!", "Continue being an active and curious learner!"))
        
    # Return exactly 8 lines
    return "\n".join(lines[:8])

# ----------------------------------------------------
# STEP A: Extract Advanced Science from rebuild_science.py
# ----------------------------------------------------
print("Extracting Science advanced from rebuild_science.py...")
with open(REBUILD_SCIENCE_PATH, "r", encoding="utf-8") as f:
    science_code = f.read()

# Remove the side effect execution loop at the end of rebuild_science.py
execution_loop_start = science_code.find("for w in range(1, 5):")
if execution_loop_start != -1:
    science_code = science_code[:execution_loop_start]

# Execute the code to populate WEEKS_DATA in a local namespace
science_namespace = {}
exec(science_code, {}, science_namespace)
WEEKS_DATA = science_namespace["WEEKS_DATA"]

for w in range(1, 5):
    adv_data = WEEKS_DATA[w]["topics"]["advanced"]
    subtitle = strip_advanced_remarks(WEEKS_DATA[w]["subtitle"])
    
    # Process slides
    slides = []
    for slide in adv_data["slides_data"]:
        title, text, examples = slide
        ex_dicts = [{"title": ex[0], "content": ex[1]} for ex in examples]
        expanded_text = expand_to_8_lines(text, title, ex_dicts, lang='en')
        slides.append({
            "title": strip_advanced_remarks(title),
            "text": expanded_text,
            "examples": ex_dicts
        })
        
    # Process standard and challenge quizzes
    def format_quiz(quiz_list):
        formatted = []
        for q in quiz_list:
            if len(q) == 3:
                q_text, opts, ans = q
                q_type = "verify" if ("Statement" in q_text or "True or False" in q_text) else "choice"
                formatted.append({
                    "type": q_type,
                    "q": q_text,
                    "options": opts,
                    "answer": ans
                })
        return formatted

    standard_quiz = format_quiz(adv_data["quiz_data"])
    challenge_quiz = format_quiz(adv_data["challenge_data"])
    
    # Performance task
    perf = adv_data["performance_task"]
    performance_task = {
        "type": "performance",
        "title": perf["title"],
        "desc": perf["desc"],
        "labels": perf["labels"]
    }
    
    # Worksheet
    worksheet = {
        "pages": adv_data["worksheets_html"]
    }
    
    science_json = {
        "color": "#10b981",
        "icon": "🔬",
        "title": "Science",
        "subtitle": subtitle,
        "slides": slides,
        "standard": standard_quiz,
        "challenge": challenge_quiz,
        "performance": performance_task,
        "worksheet": worksheet
    }
    
    dest_path = os.path.join(SOURCES_DIR, "science_advanced", f"week{w}.json")
    with open(dest_path, "w", encoding="utf-8") as f_out:
        json.dump(science_json, f_out, indent=2, ensure_ascii=False)
    print(f"[SUCCESS] Generated science_advanced/week{w}.json")


# ----------------------------------------------------
# STEP B: Extract Week 3 Advanced from generate_advanced_week3.py
# ----------------------------------------------------
with open(GEN_ADV_WEEK3_PATH, "r", encoding="utf-8") as f:
    adv_week3_code = f.read()

# Remove the side effect file merge at the end of generate_advanced_week3.py
execution_loop_start = adv_week3_code.find("# Now, read week3.js")
if execution_loop_start != -1:
    adv_week3_code = adv_week3_code[:execution_loop_start]

adv_week3_namespace = {}
exec(adv_week3_code, {}, adv_week3_namespace)

subjects_mapping = {
    "math": "math_advanced",
    "english": "english_advanced",
    "filipino": "filipino_advanced",
    "makabansa": "makabansa_advanced",
    "gmrc": "gmrc_advanced"
}

for sub_key, var_name in subjects_mapping.items():
    if var_name in adv_week3_namespace:
        sub_data = adv_week3_namespace[var_name]
        if "subtitle" in sub_data:
            sub_data["subtitle"] = strip_advanced_remarks(sub_data["subtitle"])
        if "title" in sub_data:
            sub_data["title"] = strip_advanced_remarks(sub_data["title"])
        
        # Enforce 8-line rule on slides
        lang = 'en' if sub_key in ['math', 'english'] else 'fil'
        for slide in sub_data["slides"]:
            slide["title"] = strip_advanced_remarks(slide["title"])
            slide["text"] = expand_to_8_lines(slide["text"], slide["title"], slide["examples"], lang=lang)
            
        dest_path = os.path.join(SOURCES_DIR, f"{sub_key}_advanced", "week3.json")
        with open(dest_path, "w", encoding="utf-8") as f_out:
            json.dump(sub_data, f_out, indent=2, ensure_ascii=False)
        print(f"[SUCCESS] Generated {sub_key}_advanced/week3.json")


# ----------------------------------------------------
# STEP C: Programmatically Generate Weeks 1, 2, 4 Advanced for Other Subjects
# ----------------------------------------------------
print("Programmatically cloning standard templates for weeks 1, 2, 4 advanced...")

for w in [1, 2, 4]:
    # 1. English (loaded from core block of data/g3/week{w}.json)
    db_path = os.path.join(DATA_DIR, f"week{w}.json")
    if os.path.exists(db_path):
        with open(db_path, "r", encoding="utf-8") as f_db:
            db_data = json.load(f_db)
        
        english_std = db_data["core"]["english"]
        
        # Clone and modify
        english_adv = json.loads(json.dumps(english_std))
        english_adv["subtitle"] = strip_advanced_remarks(english_adv["subtitle"])
        
        for slide in english_adv["slides"]:
            slide["title"] = strip_advanced_remarks(slide["title"])
            # Inject HOTS Challenge into examples
            slide["examples"].append({
                "title": "HOTS Challenge",
                "content": "How would you apply this linguistic pattern to create a complex sentence?"
            })
            slide["text"] = expand_to_8_lines(slide["text"], slide["title"], slide["examples"], lang='en')
            
        dest_path = os.path.join(SOURCES_DIR, "english_advanced", f"week{w}.json")
        with open(dest_path, "w", encoding="utf-8") as f_out:
            json.dump(english_adv, f_out, indent=2, ensure_ascii=False)
        print(f"[SUCCESS] Generated english_advanced/week{w}.json")
        
    # 2. Filipino, Makabansa, GMRC (loaded from standard templates)
    for sub in ["filipino", "makabansa", "gmrc"]:
        std_path = os.path.join(SOURCES_DIR, sub, f"week{w}.json")
        if os.path.exists(std_path):
            with open(std_path, "r", encoding="utf-8") as f_std:
                std_data = json.load(f_std)
                
            adv_data = json.loads(json.dumps(std_data))
            adv_data["subtitle"] = strip_advanced_remarks(adv_data["subtitle"])
            
            for slide in adv_data["slides"]:
                slide["title"] = strip_advanced_remarks(slide["title"])
                # Inject HOTS Challenge
                slide["examples"].append({
                    "title": make_translation("HOTS Hamon", "HOTS Challenge"),
                    "content": make_translation("Paano mo gagamitin ang konseptong ito sa iyong pang-araw-araw na pagpapasiya?", "How will you apply this concept to your daily decision-making?")
                })
                slide["text"] = expand_to_8_lines(slide["text"], slide["title"], slide["examples"], lang='fil')
                
            dest_path = os.path.join(SOURCES_DIR, f"{sub}_advanced", f"week{w}.json")
            with open(dest_path, "w", encoding="utf-8") as f_out:
                json.dump(adv_data, f_out, indent=2, ensure_ascii=False)
            print(f"[SUCCESS] Generated {sub}_advanced/week{w}.json")

print("All advanced subject sources created successfully!")
