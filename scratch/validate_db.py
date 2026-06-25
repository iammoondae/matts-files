import os
import re
import sys
import json

base_dir = "/home/moondae/Antigravity Projects/Matts Files_apk/data"
grades = ["g1", "g2", "g3"]
subjects = ["math", "science", "english", "filipino", "makabansa", "gmrc"]
weeks = [1, 2, 3, 4]

def extract_json_block(text, prefix):
    idx = text.find(prefix)
    if idx == -1:
        return None
    start_pos = idx + len(prefix)
    # Find the opening brace
    brace_start = -1
    for i in range(start_pos, len(text)):
        if text[i] == '{':
            brace_start = i
            break
    if brace_start == -1:
        return None
        
    bracket_count = 0
    in_string = False
    escape = False
    for i in range(brace_start, len(text)):
        char = text[i]
        if escape:
            escape = False
            continue
        if char == '\\':
            escape = True
            continue
        if char == '"':
            in_string = not in_string
            continue
        if not in_string:
            if char == '{':
                bracket_count += 1
            elif char == '}':
                bracket_count -= 1
                if bracket_count == 0:
                    return text[brace_start:i+1]
    return None

def validate_week_file(file_path):
    errors = []
    
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        return [f"File is not valid JSON: {e}"]
        
    is_g3 = "g3" in file_path
    
    targets = [("Core", data.get("core", {}))]
    if is_g3:
        targets.append(("Advanced", data.get("advanced", {})))
        
    # 1. Validate Subjects
    for name, dataset in targets:
        if not dataset:
            errors.append(f"{name} dataset block is missing.")
            continue
            
        for sub in subjects:
            sub_data = dataset.get(sub)
            if not sub_data:
                errors.append(f"{name} subject '{sub}' block is missing.")
                continue
                
            # Slides Check
            slides = sub_data.get('slides', [])
            if len(slides) != 25:
                errors.append(f"{name} subject '{sub}' study guide has {len(slides)} slides (expected 25).")
            else:
                # Forbidden prefix and bracket remarks scanner
                def check_forbidden_text(text):
                    if not isinstance(text, str):
                        return None
                    if re.search(r'[\[(]advanced[\])]', text, re.IGNORECASE):
                        return "bracketed '[Advanced]' or '(Advanced)' remark"
                    pattern = r'\badvanced\s+(math|science|english|filipino|makabansa|gmrc|analysis)(\s+is\s+required)?\s*:'
                    match = re.search(pattern, text, re.IGNORECASE)
                    if match:
                        return f"forbidden prefix '{match.group(0)}'"
                    return None

                referenced_images = set()
                for idx, slide in enumerate(slides):
                    slide_title = slide.get('title', '')
                    slide_text = slide.get('text', '')
                    
                    # Check slide title
                    err_title = check_forbidden_text(slide_title)
                    if err_title:
                        errors.append(f"{name} subject '{sub}' slide {idx + 1} title '{slide_title}' {err_title}.")
                        
                    # Check slide text
                    err_text = check_forbidden_text(slide_text)
                    if err_text:
                        errors.append(f"{name} subject '{sub}' slide {idx + 1} ('{slide_title}') text {err_text}.")
                        
                    # Check examples
                    examples = slide.get('examples', [])
                    for ex_idx, ex in enumerate(examples):
                        ex_title = ex.get('title', '')
                        ex_content = ex.get('content', '')
                        err_ex_title = check_forbidden_text(ex_title)
                        if err_ex_title:
                            errors.append(f"{name} subject '{sub}' slide {idx + 1} example {ex_idx + 1} title '{ex_title}' {err_ex_title}.")
                        err_ex_content = check_forbidden_text(ex_content)
                        if err_ex_content:
                            errors.append(f"{name} subject '{sub}' slide {idx + 1} example {ex_idx + 1} content '{ex_content}' {err_ex_content}.")
                    
                    # Check slide image presence on disk
                    img_path = slide.get('image')
                    if img_path:
                        referenced_images.add(img_path)
                        img_filename = os.path.basename(img_path)
                        img_file_abs = os.path.join(os.path.dirname(base_dir), "images", img_filename)
                        if not os.path.exists(img_file_abs):
                            errors.append(f"{name} subject '{sub}' slide {idx + 1} ('{slide_title}') references missing image file '{img_filename}' at '{img_file_abs}'.")
                    
                    if is_g3:
                        # Calculate visible words by stripping HTML tags
                        visible_text = re.sub(r'<[^>]+>', ' ', slide_text)
                        words = [w for w in visible_text.split() if w]
                        word_count = len(words)
                        if word_count < 125 or word_count > 150:
                            errors.append(f"{name} subject '{sub}' slide {idx + 1} ('{slide_title}') has {word_count} words (expected 125-150 words).")
                        if '\n' in slide_text:
                            errors.append(f"{name} subject '{sub}' slide {idx + 1} ('{slide_title}') contains newlines.")

                if is_g3:
                    if len(referenced_images) < 3 or len(referenced_images) > 5:
                        errors.append(f"{name} subject '{sub}' has {len(referenced_images)} unique images (expected between 3 and 5 images per subject per week, got: {list(referenced_images)}).")

            # Forbidden "Advanced" remarks check in subject titles and subtitles
            sub_title = sub_data.get('title', '')
            sub_subtitle = sub_data.get('subtitle', '')
            err_sub_title = check_forbidden_text(sub_title)
            if err_sub_title:
                errors.append(f"{name} subject '{sub}' title '{sub_title}' {err_sub_title}.")
            err_sub_subtitle = check_forbidden_text(sub_subtitle)
            if err_sub_subtitle:
                errors.append(f"{name} subject '{sub}' subtitle '{sub_subtitle}' {err_sub_subtitle}.")
                
            # Standard/Quiz Check
            quiz = sub_data.get('standard', sub_data.get('quiz', []))
            if len(quiz) != 25:
                errors.append(f"{name} subject '{sub}' quiz has {len(quiz)} questions (expected 25).")
            else:
                for idx, q in enumerate(quiz):
                    answer = q.get('answer', q.get('ans'))
                    if answer is None or (isinstance(answer, str) and answer.strip() == ""):
                        errors.append(f"{name} subject '{sub}' quiz Q{idx + 1} is missing a valid 'answer' value.")
                
            # Challenge Check
            challenge = sub_data.get('challenge', [])
            if len(challenge) != 5:
                errors.append(f"{name} subject '{sub}' challenge has {len(challenge)} questions (expected 5).")
            else:
                for idx, q in enumerate(challenge):
                    answer = q.get('answer', q.get('ans'))
                    if answer is None or (isinstance(answer, str) and answer.strip() == ""):
                        errors.append(f"{name} subject '{sub}' challenge Q{idx + 1} is missing a valid 'answer' value.")
                
            # Worksheet Check
            worksheet = sub_data.get('worksheet', {})
            pages = worksheet.get('pages', [])
            if len(pages) != 3:
                errors.append(f"{name} subject '{sub}' worksheet has {len(pages)} pages (expected 3).")
            else:
                for idx, page in enumerate(pages):
                    if 'ws-answer' not in page:
                        errors.append(f"{name} subject '{sub}' worksheet page {idx + 1} is missing a 'ws-answer' class element.")

            # Performance Task Check (for Grade 3)
            if is_g3:
                perf = sub_data.get('performance')
                if not perf:
                    errors.append(f"{name} subject '{sub}' is missing a performance task block.")
                else:
                    if not isinstance(perf, dict):
                        errors.append(f"{name} subject '{sub}' performance task is not a dictionary.")
                    else:
                        if perf.get('type') != 'performance':
                            errors.append(f"{name} subject '{sub}' performance task type is not 'performance' (got '{perf.get('type')}').")
                        if not perf.get('title') or str(perf.get('title')).strip() == "":
                            errors.append(f"{name} subject '{sub}' performance task has an empty title.")
                        if not perf.get('desc') or str(perf.get('desc')).strip() == "":
                            errors.append(f"{name} subject '{sub}' performance task has an empty description.")
                        labels = perf.get('labels', [])
                        if not isinstance(labels, list) or len(labels) < 3:
                            errors.append(f"{name} subject '{sub}' performance task has {len(labels)} rubric labels (expected at least 3).")

            # Bilingual Translation Check for Filipino, Makabansa, and GMRC (for Grade 3)
            if is_g3 and sub in ['filipino', 'makabansa', 'gmrc']:
                sub_str = json.dumps(sub_data)
                trans_spans = len(re.findall(r'data-translation', sub_str))
                if trans_spans < 20:
                    errors.append(f"{name} subject '{sub}' is missing bilingual translation spans (found only {trans_spans} 'data-translation' tags, expected at least 20).")
                
    # 2. Validate Weekend Reading translations
    core_dataset = data.get("core", {})
    reading_data = core_dataset.get("reading")
    if not reading_data:
        errors.append("Reading block is missing.")
    else:
        for day in ["saturday", "sunday"]:
            if day not in reading_data:
                errors.append(f"Weekend reading '{day}' block is missing.")
            else:
                day_sec = json.dumps(reading_data[day])
                trans_count = len(re.findall(r'data-translation', day_sec))
                if trans_count < 6:
                    errors.append(f"Weekend reading '{day}' is missing translation spans (found only {trans_count} 'data-translation' tags).")
            
    return errors

def validate_codebase_standards():
    errors = []
    
    # 1. Check required documentation files
    doc_files = {
        "master_context.md": "/home/moondae/Antigravity Projects/Matts Files_apk/master_context.md",
        "moon_standards_mlh.md": "/home/moondae/Antigravity Projects/Matts Files_apk/moon_standards_mlh.md",
        "code_map.md": "/home/moondae/Antigravity Projects/Matts Files_apk/code_map.md"
    }
    for name, path in doc_files.items():
        if not os.path.exists(path):
            errors.append(f"Documentation file '{name}' is missing at: {path}")
        elif os.path.getsize(path) < 100:
            errors.append(f"Documentation file '{name}' is abnormally small or empty.")

    # 2. Check required assets
    asset_files = {
        "icon.png": "/home/moondae/Antigravity Projects/Matts Files_apk/icon.png",
        "correct.wav": "/home/moondae/Antigravity Projects/Matts Files_apk/correct.wav",
        "incorrect.wav": "/home/moondae/Antigravity Projects/Matts Files_apk/incorrect.wav",
        "background5.mp3": "/home/moondae/Antigravity Projects/Matts Files_apk/background5.mp3"
    }
    for name, path in asset_files.items():
        if not os.path.exists(path):
            errors.append(f"Asset file '{name}' is missing at: {path}")
        elif os.path.getsize(path) < 100:
            errors.append(f"Asset file '{name}' is abnormally small (possibly corrupted).")

    # 3. Validate LoginActivity.kt onboarding requirements
    login_path = "/home/moondae/Antigravity Projects/Matts Files_apk/android-project/app/src/main/java/dev/matteo/learninghub/LoginActivity.kt"
    if not os.path.exists(login_path):
        errors.append(f"LoginActivity.kt is missing at: {login_path}")
    else:
        with open(login_path, "r", encoding="utf-8") as f:
            login_content = f.read()
        
        login_checks = {
            "Google Login": ["GoogleSignInOptions", "GoogleAuthProvider.getCredential"],
            "Email Sign-in": ["signInWithEmailAndPassword"],
            "Email Sign-up": ["createUserWithEmailAndPassword"],
            "Guest Anonymous Sign-in": ["signInAnonymously"]
        }
        for feature, patterns in login_checks.items():
            missing = [pat for pat in patterns if pat not in login_content]
            if missing:
                errors.append(f"Onboarding standard '{feature}' implementation might be broken. Missing patterns: {missing}")

    # 4. Validate index.css theme requirements
    css_path = "/home/moondae/Antigravity Projects/Matts Files_apk/index.css"
    if not os.path.exists(css_path):
        errors.append(f"index.css is missing at: {css_path}")
    else:
        with open(css_path, "r", encoding="utf-8") as f:
            css_content = f.read()
        
        css_checks = ["--bg-gradient", "--bg-card", "--border-card", "--text-main", "--text-muted"]
        # Check in :root
        root_match = re.search(r':root\s*\{([^}]+)\}', css_content)
        if not root_match:
            errors.append("index.css is missing :root theme variables block.")
        else:
            root_block = root_match.group(1)
            missing = [var for var in css_checks if var not in root_block]
            if missing:
                errors.append(f"index.css :root is missing theme variables: {missing}")
                
        # Check in body.light-mode
        light_match = re.search(r'body\.light-mode\s*\{([^}]+)\}', css_content)
        if not light_match:
            errors.append("index.css is missing body.light-mode variables block.")
        else:
            light_block = light_match.group(1)
            missing = [var for var in css_checks if var not in light_block]
            if missing:
                errors.append(f"index.css body.light-mode is missing theme variables: {missing}")

    # 5. Validate app.js theme requirements
    js_path = "/home/moondae/Antigravity Projects/Matts Files_apk/app.js"
    if not os.path.exists(js_path):
        errors.append(f"app.js is missing at: {js_path}")
    else:
        with open(js_path, "r", encoding="utf-8") as f:
            js_content = f.read()
        
        js_checks = ["session_theme", "light-mode"]
        missing = [pat for pat in js_checks if pat not in js_content]
        if missing:
            errors.append(f"app.js theme toggle implementation might be broken. Missing patterns: {missing}")

    return errors

def main():
    has_errors = False
    
    print("Running Codebase & Moon Standards Checks...")
    codebase_errors = validate_codebase_standards()
    if codebase_errors:
        print("FAIL: Codebase does not satisfy quality standards:")
        for err in codebase_errors:
            print(f"  - {err}")
        has_errors = True
    else:
        print("PASS: Codebase satisfies Moon Standards.")

    print("\nRunning Database JSON Checks...")
    for grade in grades:
        grade_dir = os.path.join(base_dir, grade)
        if not os.path.exists(grade_dir):
            print(f"Directory missing: {grade_dir}")
            continue
            
        manifest_path = os.path.join(grade_dir, "manifest.json")
        if os.path.exists(manifest_path):
            try:
                with open(manifest_path, "r", encoding="utf-8") as mf:
                    manifest_data = json.load(mf)
                grade_weeks = manifest_data.get("weeks", [])
            except Exception as e:
                print(f"Warning: Failed to load manifest {manifest_path}: {e}")
                grade_weeks = [1, 2, 3, 4]
        else:
            grade_weeks = [1, 2, 3, 4]
            
        for w in grade_weeks:
            file_name = f"week{w}.json"
            file_path = os.path.join(grade_dir, file_name)
            if not os.path.exists(file_path):
                print(f"FAIL: File '{file_path}' is missing.")
                has_errors = True
                continue
                
            errors = validate_week_file(file_path)
            if errors:
                print(f"FAIL: {grade}/{file_name} has the following quality errors:")
                for err in errors:
                    print(f"  - {err}")
                has_errors = True
            else:
                print(f"PASS: {grade}/{file_name} satisfies the quality gate.")
                
    if has_errors:
        print("\nQuality check gate: FAILED.")
        sys.exit(1)
    else:
        print("\nQuality check gate: PASSED! All databases strictly meet the requirements.")
        sys.exit(0)

if __name__ == '__main__':
    main()
