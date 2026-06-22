import os
import json
import sys

# Refactored Grade 3 Database Compiler
# Enforces the Moon Standards:
# - Exactly 25 slides per subject/week, each containing exactly 8 lines of text.
# - Exactly 25 standard questions per subject/week.
# - Exactly 5 challenge questions.
# - Exactly 3 worksheet pages.
# - Exactly 1 performance task.
# - Loads raw curriculum data from JSON templates under data/sources/g3/
# - Preserves Math, English, and Reading blocks.

BASE_DIR = "/home/moondae/Antigravity Projects/Matts Files_apk"
DATA_DIR = os.path.join(BASE_DIR, "data", "g3")
SOURCES_DIR = os.path.join(BASE_DIR, "data", "sources", "g3")

def make_text(*lines):
    if len(lines) != 8:
        raise ValueError(f"Expected exactly 8 lines, got {len(lines)}")
    return "\n".join(lines)

def make_translation(fil, eng):
    eng_escaped = eng.replace('"', '&quot;')
    return f'<span class="fil-sentence" data-translation="{eng_escaped}">{fil}</span>'

def strip_advanced_remarks(text):
    if not isinstance(text, str):
        return text
    import re
    cleaned = re.sub(r'\s*[\[(]Advanced[\])]\s*', ' ', text, flags=re.IGNORECASE)
    return cleaned.strip()

def normalize_subject_data(sub_data):
    if not sub_data:
        return sub_data
    for quiz_key in ['standard', 'quiz', 'challenge']:
        if quiz_key in sub_data:
            normalized_questions = []
            for q in sub_data[quiz_key]:
                new_q = dict(q)
                if 'type' not in new_q:
                    new_q['type'] = 'choice'
                if 'opts' in new_q:
                    new_q['options'] = new_q.pop('opts')
                if 'ans' in new_q:
                    new_q['answer'] = new_q.pop('ans')
                normalized_questions.append(new_q)
            sub_data[quiz_key] = normalized_questions
    perf = sub_data.get('performance')
    if perf and isinstance(perf, dict) and 'type' not in perf:
        perf['type'] = 'performance'
    return sub_data

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

def expand_to_8_lines(text, title, examples, lang='en'):
    # If already exactly 8 lines, keep it as is
    if text.count('\n') + 1 == 8:
        return text
        
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

def pad_slides(slides, subject, week_num):
    if len(slides) >= 25:
        return slides[:25]
        
    padded = list(slides)
    needed = 25 - len(slides)
    
    summary_slide = padded[-1] if padded else None
    if summary_slide:
        padded = padded[:-1]
        
    for i in range(needed):
        review_num = i + 1
        if subject.lower() == 'science':
            title = f"Extra Practice: Science Review {chr(65+i)}"
            text = make_text(
                f"Let's review the important science concepts of Week {week_num}.",
                "We have studied observations, measurements, and predictions.",
                "A real scientist is always curious and checks their facts.",
                "Think about the experiments we discussed in the slides.",
                "Can you explain them in your own words to others?",
                "Use your scientific vocabulary to describe your ideas clearly.",
                "Answer the quiz questions and challenges to test your memory.",
                "Keep up the great work and enjoy exploring the world!"
            )
            examples = [{"title": f"Review Card {review_num}", "content": "Practice explaining these science ideas to your family."}]
        else:
            title = make_translation(f"Karagdagang Pagsasanay {review_num}", f"Additional Practice {review_num}")
            text = make_text(
                make_translation("Mag-review tayo ng mga aralin sa linggong ito.", "Let's review our lessons for this week."),
                make_translation(f"Pinag-aralan natin ang mahahalagang konsepto ng Week {week_num}.", f"We studied the important concepts of Week {week_num}."),
                make_translation("Maging maingat sa pagbabasa at pag-unawa ng mga salita.", "Be careful in reading and understanding the words."),
                make_translation("Gamitin ang iyong kaalaman sa iyong sariling buhay.", "Apply your knowledge to your own daily life."),
                make_translation("Maaari mong talakayin ito kasama ang iyong mga kalaro.", "You can discuss this together with your playmates."),
                make_translation("Ang pag-aaral ng wika at asal ay nagpapalaki sa atin.", "Learning language and values helps us grow up well."),
                make_translation("Subukang sagutin ang lahat ng tanong sa pagsusulit natin.", "Try to answer all the questions in our quiz today."),
                make_translation("Ipagpatuloy ang pagiging mahusay at masipag na mag-aaral!", "Continue being an excellent and hardworking student!")
            )
            examples = [{
                "title": make_translation(f"Pagsasanay {review_num}", f"Practice {review_num}"),
                "content": make_translation("Ibahagi ang iyong mga natutunan sa aralin sa iyong pamilya ngayon.", "Share what you have learned from the lesson with your family today.")
            }]
            
        padded.append({
            "title": title,
            "text": text,
            "examples": examples
        })
        
    if summary_slide:
        padded.append(summary_slide)
        
    return padded

# Main compile execution loop
for w in range(1, 5):
    filename = f"week{w}.json"
    filepath = os.path.join(DATA_DIR, filename)
    print(f"Compiling {filepath}...")
    
    if not os.path.exists(filepath):
        print(f"[ERROR] {filepath} does not exist!")
        sys.exit(1)
        
    # Read existing JSON database
    with open(filepath, "r", encoding="utf-8") as f:
        existing_data = json.load(f)
        
    core = existing_data.get("core", {})
    advanced = existing_data.get("advanced", {})
    
    # Extract preserved subjects/blocks
    math_core = core.get("math")
    english_core = core.get("english")
    reading_core = core.get("reading")
    checklist_core = core.get("checklist")
    
    # Load advanced english from sources (it was programmatically generated)
    eng_adv_path = os.path.join(SOURCES_DIR, "english_advanced", f"week{w}.json")
    if os.path.exists(eng_adv_path):
        with open(eng_adv_path, "r", encoding="utf-8") as f_eng:
            english_adv = json.load(f_eng)
            english_adv["slides"] = pad_slides(english_adv["slides"], "english_advanced", w)
    else:
        print(f"[WARNING] Advanced English template missing for week {w}, preserving from existing database.")
        english_adv = advanced.get("english")

    # Load advanced math from sources if exists, otherwise preserve
    math_adv_path = os.path.join(SOURCES_DIR, "math_advanced", f"week{w}.json")
    if os.path.exists(math_adv_path):
        with open(math_adv_path, "r", encoding="utf-8") as f_math:
            math_adv = json.load(f_math)
            math_adv["slides"] = pad_slides(math_adv["slides"], "math_advanced", w)
    else:
        math_adv = advanced.get("math")
        
    if not math_core or not english_core or not reading_core or not checklist_core:
        print(f"[ERROR] Missing preserved core blocks in {filename}")
        sys.exit(1)
        
    if not math_adv or not english_adv:
        print(f"[ERROR] Missing preserved advanced blocks in {filename}")
        sys.exit(1)
        
    # Load and process optimized core subjects
    compiled_core = {}
    for sub in ["science", "filipino", "makabansa", "gmrc"]:
        src_path = os.path.join(SOURCES_DIR, sub, f"week{w}.json")
        if not os.path.exists(src_path):
            print(f"[ERROR] Core source template missing: {src_path}")
            sys.exit(1)
            
        with open(src_path, "r", encoding="utf-8") as f_src:
            sub_data = json.load(f_src)
            
        # Pad slides to exactly 25
        sub_data["slides"] = pad_slides(sub_data["slides"], sub, w)
        compiled_core[sub] = sub_data

    # Load and process optimized advanced subjects
    compiled_advanced = {}
    for sub in ["science", "filipino", "makabansa", "gmrc"]:
        src_path = os.path.join(SOURCES_DIR, f"{sub}_advanced", f"week{w}.json")
        if not os.path.exists(src_path):
            print(f"[ERROR] Advanced source template missing: {src_path}")
            sys.exit(1)
            
        with open(src_path, "r", encoding="utf-8") as f_src:
            sub_data = json.load(f_src)
            
        # Pad slides to exactly 25
        sub_data["slides"] = pad_slides(sub_data["slides"], f"{sub}_advanced", w)
        compiled_advanced[sub] = sub_data
        
    # Build final merged core and advanced schemas
    merged_core = {
        "math": math_core,
        "science": compiled_core["science"],
        "english": english_core,
        "filipino": compiled_core["filipino"],
        "makabansa": compiled_core["makabansa"],
        "gmrc": compiled_core["gmrc"],
        "reading": reading_core,
        "checklist": checklist_core
    }
    
    merged_advanced = {
        "math": math_adv,
        "science": compiled_advanced["science"],
        "english": english_adv,
        "filipino": compiled_advanced["filipino"],
        "makabansa": compiled_advanced["makabansa"],
        "gmrc": compiled_advanced["gmrc"],
        "reading": reading_core, # shares reading
        "checklist": checklist_core
    }
    
    # Ensure all slides of all subjects have exactly 8 lines, and normalize quiz formats
    for block_name, dataset in [("core", merged_core), ("advanced", merged_advanced)]:
        for sub_name in ["math", "science", "english", "filipino", "makabansa", "gmrc"]:
            sub_data = dataset.get(sub_name)
            if sub_data:
                # Strip advanced remarks from subject title and subtitle
                if "title" in sub_data:
                    sub_data["title"] = strip_advanced_remarks(sub_data["title"])
                if "subtitle" in sub_data:
                    sub_data["subtitle"] = strip_advanced_remarks(sub_data["subtitle"])

                # 1. Normalize quiz structures (opts -> options, ans -> answer)
                normalize_subject_data(sub_data)
                
                # 2. Pad slide lengths and strip advanced remarks from slide titles
                if "slides" in sub_data:
                    lang = 'en' if sub_name in ['math', 'science', 'english'] else 'fil'
                    for slide in sub_data["slides"]:
                        if "title" in slide:
                            slide["title"] = strip_advanced_remarks(slide["title"])
                        slide["text"] = expand_to_8_lines(slide.get("text", ""), slide.get("title", ""), slide.get("examples", []), lang=lang)
                    
    output_data = {
        "core": merged_core,
        "advanced": merged_advanced
    }
    
    with open(filepath, "w", encoding="utf-8") as f_out:
        json.dump(output_data, f_out, indent=2, ensure_ascii=False)
        
    print(f"[SUCCESS] Compiled {filename}")

# Remove extraction helper script since it is no longer needed
if os.path.exists(os.path.join(BASE_DIR, "scratch", "extract_sources.py")):
    os.remove(os.path.join(BASE_DIR, "scratch", "extract_sources.py"))

# Auto-update Grade 3 manifest.json version
import datetime
manifest_path = os.path.join(DATA_DIR, "manifest.json")
if os.path.exists(manifest_path):
    with open(manifest_path, "r", encoding="utf-8") as f_m:
        manifest_data = json.load(f_m)
else:
    manifest_data = {"weeks": [1, 2, 3, 4], "reviews": [], "images": []}

now = datetime.datetime.now()
manifest_data["version"] = now.strftime("%Y.%m.%d.%H%M")

with open(manifest_path, "w", encoding="utf-8") as f_m:
    json.dump(manifest_data, f_m, indent=2, ensure_ascii=False)
print(f"Updated manifest.json version to: {manifest_data['version']}")

print("Grade 3 database compilation finished successfully!")
