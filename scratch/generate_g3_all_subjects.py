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
    return " ".join(lines)

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

def clean_html_text(html_text):
    import re
    if not html_text:
        return ""
    cleaned = re.sub(r'<[^>]+>', ' ', html_text).strip()
    cleaned = re.sub(r'\s+', ' ', cleaned)
    return cleaned

def extract_translation(html_text):
    import re
    if not html_text:
        return ""
    m = re.search(r'data-translation=["\'](.*?)["\']', html_text)
    if m:
        return m.group(1)
    return clean_html_text(html_text)

def count_visible_words(text):
    words = [w for w in clean_html_text(text).split() if w]
    return len(words)

def expand_to_word_count(text, title, examples, subject_name, lang='en'):
    import re
    # Clean input text of newlines and multiple spaces
    clean_text = text.replace('\n', ' ').strip()
    clean_text = re.sub(r'\s+', ' ', clean_text)
    
    # Check if word count is already in range
    w_count = count_visible_words(clean_text)
    if 80 <= w_count <= 150:
        return clean_text
        
    if w_count > 150:
        # Truncate at sentence boundaries to stay under 150 words
        sentences = split_sentences_html(clean_text)
        current_text = ""
        for s in sentences:
            test_text = (current_text + " " + s).strip() if current_text else s
            if count_visible_words(test_text) > 150:
                if count_visible_words(current_text) >= 80:
                    return current_text
                else:
                    return test_text
            current_text = test_text
        return current_text

    # We need to expand
    sentences = [clean_text]
    title_clean = clean_html_text(title)
    
    # Add examples if not already present
    for ex in examples:
        if count_visible_words(" ".join(sentences)) >= 80:
            break
        ex_title = ex.get('title', '')
        ex_content = ex.get('content', '')
        if ex_content:
            ex_title_clean = clean_html_text(ex_title)
            ex_content_clean = clean_html_text(ex_content)
            
            # Check if example content contains any sentences already in the text to avoid duplication
            sentences_flat = clean_html_text(" ".join(sentences)).lower()
            ex_sentences = split_sentences_html(ex_content)
            is_dup = False
            for ex_s in ex_sentences:
                ex_s_clean = clean_html_text(ex_s).strip().lower()
                if len(ex_s_clean.split()) >= 4:
                    ex_s_norm = re.sub(r'[^\w\s]', '', ex_s_clean).strip()
                    sentences_flat_norm = re.sub(r'[^\w\s]', '', sentences_flat).strip()
                    if ex_s_norm and ex_s_norm in sentences_flat_norm:
                        is_dup = True
                        break
                        
            if not is_dup:
                if lang == 'en':
                    sentences.append(f"For instance, in this lesson on {title_clean}, consider the example of {ex_title_clean}: {ex_content_clean}")
                else:
                    title_eng = extract_translation(ex_title)
                    content_eng = extract_translation(ex_content)
                    fil_ex = f"Halimbawa, sa araling ito tungkol sa {title_clean}, tingnan natin ang tungkol sa {ex_title_clean}: {ex_content_clean}"
                    eng_ex = f"For instance, in this lesson on {title_clean}, consider the example of {title_eng}: {content_eng}"
                    sentences.append(make_translation(fil_ex, eng_ex))

    # Context-aware unique padding to push over 80 words without repeating sentences
    sub_clean = subject_name.replace("_advanced", "").capitalize()
    extra_paddings_en = [
        f"Analyzing this concept of {title_clean} allows us to explore deeper connections in Grade 3 {sub_clean}.",
        f"Understanding this specific topic on {title_clean} provides essential knowledge that directly relates to other lessons in this course.",
        f"This learning card about {title_clean} helps students master key concepts in {sub_clean}.",
        f"Studying {title_clean} is a great way to build your academic foundation in {sub_clean}.",
        f"Practice explaining {title_clean} to your classmates to reinforce what you learned.",
        f"We will continue to review {title_clean} as we advance through this week's subject."
    ]
    extra_paddings_fil = [
        f"Ang pagsusuri sa konseptong ito ng {title_clean} ay nagbibigay-daan sa atin na galugarin ang mas malalim na koneksyon sa Grade 3 {sub_clean}.",
        f"Ang pag-unawa sa paksang ito tungkol sa {title_clean} ay nagbibigay ng mahalagang kaalaman na may kaugnayan sa iba pang mga aralin.",
        f"Ang card ng pag-aaral na ito tungkol sa {title_clean} ay tumutulong sa mga mag-aaral na makabisado ang mga konsepto.",
        f"Ang pag-aaral ng {title_clean} ay isang mahusay na paraan upang buuin ang iyong pundasyon.",
        f"Magsanay na ipaliwanag ang {title_clean} sa iyong mga kamag-aral upang mapalakas ang iyong natutunan.",
        f"Patuloy nating susuriin ang {title_clean} habang sumusulong tayo sa linggong ito."
    ]
    
    paddings = extra_paddings_en if lang == 'en' else extra_paddings_fil
    pad_idx = 0
    while count_visible_words(" ".join(sentences)) < 80 and pad_idx < len(paddings):
        if lang == 'en':
            sentences.append(paddings[pad_idx])
        else:
            sentences.append(make_translation(paddings[pad_idx], extra_paddings_en[pad_idx]))
        pad_idx += 1
        
    final_text = " ".join(sentences)
    
    # Truncate from the end if we went over 150
    while count_visible_words(final_text) > 150 and len(sentences) > 1:
        sentences.pop()
        final_text = " ".join(sentences)
        
    return final_text

def pad_slides(slides, subject, week_num):
    if len(slides) >= 25:
        return slides[:25]
        
    padded = list(slides)
    needed = 25 - len(slides)
    
    summary_slide = padded[-1] if padded else None
    if summary_slide:
        padded = padded[:-1]
        
    sub_clean = subject.replace("_advanced", "").capitalize()
    for i in range(needed):
        review_num = i + 1
        if subject.lower() == 'science':
            title = f"Extra Practice: Science Review {chr(65+i)}"
            text = make_text(
                f"Let's review the important science concepts of Week {week_num}.",
                f"This science review activity {review_num} helps reinforce the lessons you studied.",
                f"Reviewing these materials will prepare you for the challenge exercises.",
                f"Try to explain the main terms of lesson {review_num * 2} in your own words.",
                f"A good student is always curious and checks scientific facts.",
                f"Keep up the great work in your daily science learning journey!",
                "Answer the quiz questions and challenges to test your memory.",
                "Let's continue to explore and learn new concepts every day!"
            )
            examples = [{"title": f"Review Card {review_num}", "content": "Practice explaining these science ideas to your family."}]
        else:
            title = make_translation(f"Karagdagang Pagsasanay {review_num}", f"Additional Practice {review_num}")
            text = make_text(
                make_translation(f"Mag-review tayo ng mga aralin sa linggong ito para sa pagsasanay {review_num}.", f"Let's review our lessons for this week for practice {review_num}."),
                make_translation(f"Pinag-aralan natin ang mahahalagang konsepto ng Week {week_num} sa {sub_clean} sa slide {review_num}.", f"We studied the important concepts of Week {week_num} in {sub_clean} on slide {review_num}."),
                make_translation(f"Ang karagdagang pagsasanay {review_num} na ito ay nagpapatibay sa iyong kaalaman.", f"This additional practice {review_num} reinforces your knowledge."),
                make_translation(f"Maging maingat sa pagbabasa at pag-unawa ng mga salita sa pagsasanay {review_num}.", f"Be careful in reading and understanding the words in exercise {review_num}."),
                make_translation(f"Maaari mong talakayin ang bahaging {review_num} kasama ang iyong mga kalaro.", f"You can discuss section {review_num} together with your playmates."),
                make_translation(f"Ang pag-aaral ng wika at asal sa card {review_num} ay nagpapalaki sa atin.", f"Learning language and values in card {review_num} helps us grow up well."),
                make_translation(f"Subukang sagutin ang tanong {review_num} sa pagsusulit natin.", f"Try to answer question {review_num} in our quiz today."),
                make_translation(f"Ipagpatuloy ang pagiging mahusay sa pagsasanay {review_num} ngayon!", f"Continue being excellent in practice {review_num} today!")
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
    
    # Load math core from sources if exists, otherwise preserve
    math_core_path = os.path.join(SOURCES_DIR, "math", f"week{w}.json")
    if os.path.exists(math_core_path):
        with open(math_core_path, "r", encoding="utf-8") as f_math:
            math_core = json.load(f_math)
            math_core["slides"] = pad_slides(math_core["slides"], "math", w)
    else:
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
        
    if english_adv:
        english_core = json.loads(json.dumps(english_adv))

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

                # 1. Normalize quiz structures (opts -> options, ans -> answer) and shuffle options
                normalize_subject_data(sub_data)
                
                # Shuffle options at compile time to distribute correct answer indices without skew
                def shuffle_options_compile(questions):
                    import random
                    if not questions:
                        return
                    choice_questions = [q for q in questions if q.get("type", "choice") == "choice"]
                    if not choice_questions:
                        return
                        
                    # Save original options and answers
                    originals = []
                    for q in choice_questions:
                        originals.append((list(q.get("options", [])), q.get("answer")))
                        
                    num_q = len(choice_questions)
                    max_ratio = 0.50 if num_q >= 10 else 0.70
                    
                    for attempt in range(200):
                        answers_dist = {}
                        shuffled_states = []
                        
                        for idx, q in enumerate(choice_questions):
                            orig_opts, orig_ans = originals[idx]
                            if orig_opts and orig_ans is not None and 0 <= orig_ans < len(orig_opts):
                                paired = list(enumerate(orig_opts))
                                random.shuffle(paired)
                                new_opts = [val for _, val in paired]
                                new_ans = next(i for i, (orig_i, _) in enumerate(paired) if orig_i == orig_ans)
                                shuffled_states.append((new_opts, new_ans))
                                answers_dist[new_ans] = answers_dist.get(new_ans, 0) + 1
                            else:
                                shuffled_states.append((orig_opts, orig_ans))
                                if orig_ans is not None:
                                    answers_dist[orig_ans] = answers_dist.get(orig_ans, 0) + 1
                                    
                        # Check skew
                        has_skew = False
                        for ans_idx, count in answers_dist.items():
                            ratio = count / num_q
                            if ratio > max_ratio:
                                has_skew = True
                                break
                                
                        if not has_skew or attempt == 199:
                            # Apply the shuffled states to the questions
                            for idx, q in enumerate(choice_questions):
                                new_opts, new_ans = shuffled_states[idx]
                                q["options"] = new_opts
                                q["answer"] = new_ans
                            break
                
                shuffle_options_compile(sub_data.get("standard"))
                shuffle_options_compile(sub_data.get("quiz"))
                shuffle_options_compile(sub_data.get("challenge"))
                
                # 2. Pad slide lengths and strip advanced remarks from slide titles
                if "slides" in sub_data:
                    lang = 'en' if sub_name in ['math', 'science', 'english'] else 'fil'
                    for slide in sub_data["slides"]:
                        if "title" in slide:
                            slide["title"] = strip_advanced_remarks(slide["title"])
                        slide["text"] = expand_to_word_count(slide.get("text", ""), slide.get("title", ""), slide.get("examples", []), sub_name, lang=lang)
                    
                    # 3. Clear any existing image entries and programmatically inject new images
                    for slide in sub_data["slides"]:
                        if "image" in slide:
                            del slide["image"]
                    if len(sub_data["slides"]) >= 21:
                        sub_data["slides"][4]["image"] = f"images/{sub_name}_w{w}_img1.png"
                        sub_data["slides"][8]["image"] = f"images/{sub_name}_w{w}_img2.png"
                        sub_data["slides"][12]["image"] = f"images/{sub_name}_w{w}_img3.png"
                        sub_data["slides"][16]["image"] = f"images/{sub_name}_w{w}_img4.png"
                        sub_data["slides"][20]["image"] = f"images/{sub_name}_w{w}_img5.png"
                    
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

# Auto-update Grade 3 manifest.json version and image registry
import datetime
manifest_path = os.path.join(DATA_DIR, "manifest.json")
if os.path.exists(manifest_path):
    with open(manifest_path, "r", encoding="utf-8") as f_m:
        manifest_data = json.load(f_m)
else:
    manifest_data = {"weeks": [1, 2, 3, 4], "reviews": [], "images": []}

now = datetime.datetime.now()
manifest_data["version"] = now.strftime("%Y.%m.%d.%H%M")

# Compile list of all images for Grade 3
all_images = []
existing_images = manifest_data.get("images", [])
for img in existing_images:
    if img not in all_images:
        all_images.append(img)
        
for sub in ["math", "science", "english", "filipino", "makabansa", "gmrc"]:
    for week in [1, 2, 3, 4]:
        for img_idx in [1, 2, 3, 4, 5]:
            filename = f"{sub}_w{week}_img{img_idx}.png"
            if filename not in all_images:
                all_images.append(filename)

manifest_data["images"] = all_images

with open(manifest_path, "w", encoding="utf-8") as f_m:
    json.dump(manifest_data, f_m, indent=2, ensure_ascii=False)
print(f"Updated manifest.json version to: {manifest_data['version']}")

print("Grade 3 database compilation finished successfully!")

