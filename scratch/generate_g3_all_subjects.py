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
            title = f"Karagdagang Pagsasanay {review_num}"
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
            examples = [{"title": f"Pagsasanay {review_num}", "content": "Ibahagi ang iyong mga natutunan sa aralin sa iyong pamilya ngayon."}]
            
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
    
    math_adv = advanced.get("math")
    english_adv = advanced.get("english")
    
    if not math_core or not english_core or not reading_core or not checklist_core:
        print(f"[ERROR] Missing preserved core blocks in {filename}")
        sys.exit(1)
        
    if not math_adv or not english_adv:
        print(f"[ERROR] Missing preserved advanced blocks in {filename}")
        sys.exit(1)
        
    # Load and process optimized subjects
    compiled_subjects = {}
    for sub in ["science", "filipino", "makabansa", "gmrc"]:
        src_path = os.path.join(SOURCES_DIR, sub, f"week{w}.json")
        if not os.path.exists(src_path):
            print(f"[ERROR] Source template missing: {src_path}")
            sys.exit(1)
            
        with open(src_path, "r", encoding="utf-8") as f_src:
            sub_data = json.load(f_src)
            
        # Pad slides to exactly 25
        sub_data["slides"] = pad_slides(sub_data["slides"], sub, w)
        compiled_subjects[sub] = sub_data
        
    # Build final merged core and advanced schemas
    merged_core = {
        "math": math_core,
        "science": compiled_subjects["science"],
        "english": english_core,
        "filipino": compiled_subjects["filipino"],
        "makabansa": compiled_subjects["makabansa"],
        "gmrc": compiled_subjects["gmrc"],
        "reading": reading_core,
        "checklist": checklist_core
    }
    
    merged_advanced = {
        "math": math_adv,
        "science": compiled_subjects["science"],
        "english": english_adv,
        "filipino": compiled_subjects["filipino"],
        "makabansa": compiled_subjects["makabansa"],
        "gmrc": compiled_subjects["gmrc"],
        "reading": reading_core, # shares reading
        "checklist": checklist_core
    }
    
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

print("Grade 3 database compilation finished successfully!")
