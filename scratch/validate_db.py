import os
import re
import sys
import json

base_dir = "/home/moondae/Antigravity Projects/Matts Files_apk/data"
grades = ["g1", "g2", "g3"]
subjects = ["math", "science", "english", "filipino", "makabansa", "gmrc"]
weeks = [1, 2, 3, 4, 5]

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
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    errors = []
    
    # Extract week number from file name
    week_match = re.search(r'week(\d+)\.js', file_path)
    w = int(week_match.group(1)) if week_match else 1
    
    # Identify if Grade 3 (has separate advanced subjects)
    is_g3 = "g3" in file_path
    
    # List of targets to validate: (target_name, prefix_template)
    targets = [("Core", f"window.WEEK{w}_DATA.{{sub}}")]
    if is_g3:
        targets.append(("Advanced", f"window.WEEK{w}_ADVANCED_DATA.{{sub}}"))
        
    # 1. Validate Subjects
    for name, prefix_tmpl in targets:
        for sub in subjects:
            pref1 = prefix_tmpl.format(sub=sub) + " ="
            pref2 = prefix_tmpl.format(sub=sub) + "="
            
            block = extract_json_block(content, pref1)
            if not block:
                block = extract_json_block(content, pref2)
                
            if not block:
                errors.append(f"{name} subject '{sub}' block is missing.")
                continue
                
            try:
                sub_data = json.loads(block)
            except Exception as e:
                errors.append(f"{name} subject '{sub}' block is not valid JSON: {e}")
                continue
                
            # Slides Check
            slides = sub_data.get('slides', [])
            if len(slides) != 25:
                errors.append(f"{name} subject '{sub}' study guide has {len(slides)} slides (expected 25).")
                
            # Standard/Quiz Check
            quiz = sub_data.get('standard', sub_data.get('quiz', []))
            if len(quiz) != 25:
                errors.append(f"{name} subject '{sub}' quiz has {len(quiz)} questions (expected 25).")
                
            # Challenge Check
            challenge = sub_data.get('challenge', [])
            if len(challenge) != 5:
                errors.append(f"{name} subject '{sub}' challenge has {len(challenge)} questions (expected 5).")
                
            # Worksheet Check
            worksheet = sub_data.get('worksheet', {})
            pages = worksheet.get('pages', [])
            if len(pages) != 3:
                errors.append(f"{name} subject '{sub}' worksheet has {len(pages)} pages (expected 3).")
                
    # 2. Validate Weekend Reading translations
    reading_pref1 = f"window.WEEK{w}_DATA.reading ="
    reading_pref2 = f"window.WEEK{w}_DATA.reading="
    reading_block = extract_json_block(content, reading_pref1)
    if not reading_block:
        reading_block = extract_json_block(content, reading_pref2)
        
    if not reading_block:
        errors.append("Reading block is missing.")
    else:
        try:
            reading_data = json.loads(reading_block)
            for day in ["saturday", "sunday"]:
                if day not in reading_data:
                    errors.append(f"Weekend reading '{day}' block is missing.")
                else:
                    day_sec = json.dumps(reading_data[day])
                    trans_count = len(re.findall(r'data-translation', day_sec))
                    if trans_count < 6:
                        errors.append(f"Weekend reading '{day}' is missing translation spans (found only {trans_count} 'data-translation' tags).")
        except Exception as e:
            errors.append(f"Reading block is not valid JSON: {e}")
            
    return errors

def main():
    has_errors = False
    for grade in grades:
        grade_dir = os.path.join(base_dir, grade)
        if not os.path.exists(grade_dir):
            print(f"Directory missing: {grade_dir}")
            continue
            
        for w in weeks:
            file_name = f"week{w}.js"
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
