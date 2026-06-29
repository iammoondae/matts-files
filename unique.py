import os
import re
import sys
import json

BASE_DIR = "/home/moondae/Antigravity Projects/Matts Files_apk"
DATA_DIR = os.path.join(BASE_DIR, "data")
GRADES = ["g3"]
SUBJECTS = ["math", "science", "english", "filipino", "makabansa", "gmrc"]

def clean_html(text):
    if not text:
        return ""
    # Strip HTML tags
    cleaned = re.sub(r'<[^>]+>', ' ', text)
    # Strip multiple spaces
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    return cleaned

def get_sentences(text):
    cleaned = clean_html(text)
    # Split by sentence endings (. ! ?)
    sentences = re.split(r'[.!?]+', cleaned)
    result = []
    for s in sentences:
        s = s.strip()
        if s:
            result.append(s)
    return result

def normalize_sentence(sentence):
    # Lowercase, remove non-alphanumeric characters, and collapse spaces
    normalized = re.sub(r'[^a-zA-Z0-9\s]', '', sentence.lower())
    normalized = re.sub(r'\s+', ' ', normalized).strip()
    return normalized

def count_words(normalized_sentence):
    return len(normalized_sentence.split())

def check_file_uniqueness(file_path):
    errors = []
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        return [f"Could not load JSON: {e}"]

    is_g3 = "g3" in file_path
    targets = [("core", data.get("core", {}))]
    if is_g3:
        targets.append(("advanced", data.get("advanced", {})))

    for block_name, dataset in targets:
        if not dataset:
            continue

        for sub in SUBJECTS:
            sub_data = dataset.get(sub)
            if not sub_data:
                continue

            # 1. Slide Uniqueness Check
            slides = sub_data.get("slides", [])
            seen_sentences = {}
            for idx, slide in enumerate(slides):
                slide_title = slide.get("title", "")
                slide_text = slide.get("text", "")
                
                # Check for repeating sentences within the subject-week
                sentences = get_sentences(slide_text)
                for sentence in sentences:
                    norm = normalize_sentence(sentence)
                    word_count = count_words(norm)
                    
                    # We check sentences that are reasonably long (6+ words)
                    if word_count >= 6:
                        # Exclude standard learning hub names or generic keywords
                        if "matteo" in norm or "learning hub" in norm or "let us review" in norm:
                            continue
                            
                        if norm in seen_sentences:
                            prev_idx = seen_sentences[norm]
                            errors.append(
                                f"[{block_name.upper()} {sub}] Slide {idx + 1} ('{slide_title}') has repeating content. "
                                f"Sentence: \"{sentence}\" was already seen in Slide {prev_idx + 1}."
                            )
                        else:
                            seen_sentences[norm] = idx

            # 2. Quiz Answer Index Skew & Duplicate Choices Check
            for quiz_key in ["standard", "quiz", "challenge"]:
                questions = sub_data.get(quiz_key, [])
                if not questions:
                    continue

                mcq_answers = []
                for q_idx, q in enumerate(questions):
                    q_type = q.get("type", "choice")
                    
                    # We only check multiple choice questions
                    if q_type == "choice":
                        options = q.get("options", q.get("choices", []))
                        answer = q.get("answer", q.get("ans"))

                        if len(options) > 1:
                            mcq_answers.append(answer)

                            # Check for duplicate options
                            seen_opts = set()
                            for opt in options:
                                opt_clean = clean_html(opt).strip()
                                if opt_clean in seen_opts:
                                    errors.append(
                                        f"[{block_name.upper()} {sub}] {quiz_key} Q{q_idx + 1} has duplicate option: \"{opt}\"."
                                    )
                                else:
                                    seen_opts.add(opt_clean)

                # Skew detection: if we have MCQ questions and the correct answer index distribution is skewed
                if mcq_answers:
                    total_mcqs = len(mcq_answers)
                    # Count frequency of each answer index
                    counts = {}
                    for ans in mcq_answers:
                        counts[ans] = counts.get(ans, 0) + 1

                    # Check if all MCQ answers are the same index
                    if len(counts) == 1:
                        common_idx = list(counts.keys())[0]
                        errors.append(
                            f"[{block_name.upper()} {sub}] {quiz_key} has major skew! All {total_mcqs} correct answers "
                            f"point to index {common_idx} (e.g., Option {chr(65 + common_idx) if isinstance(common_idx, int) else common_idx})."
                        )
                    else:
                        # Fail if any single index covers:
                        # - > 50% of questions in quizzes of size >= 10
                        # - > 70% of questions in quizzes of size < 10
                        for idx_val, count in counts.items():
                            percentage = count / total_mcqs
                            if total_mcqs >= 10 and percentage > 0.50:
                                errors.append(
                                    f"[{block_name.upper()} {sub}] {quiz_key} has answer index skew! Option index {idx_val} "
                                    f"constitutes {percentage*100:.1f}% ({count}/{total_mcqs}) of correct answers."
                                )
                            elif total_mcqs < 10 and percentage > 0.70:
                                errors.append(
                                    f"[{block_name.upper()} {sub}] {quiz_key} has answer index skew! Option index {idx_val} "
                                    f"constitutes {percentage*100:.1f}% ({count}/{total_mcqs}) of correct answers."
                                )

    return errors

def main():
    has_errors = False
    print("Running Slide Uniqueness and Quiz Answer Distribution Checks...")

    for grade in GRADES:
        grade_dir = os.path.join(DATA_DIR, grade)
        if not os.path.exists(grade_dir):
            continue

        for w in range(1, 5):
            filename = f"week{w}.json"
            file_path = os.path.join(grade_dir, filename)
            if not os.path.exists(file_path):
                continue

            errors = check_file_uniqueness(file_path)
            if errors:
                print(f"FAIL: {grade}/{filename} has the following uniqueness/distribution errors:")
                for err in errors:
                    print(f"  - {err}")
                has_errors = True
            else:
                print(f"PASS: {grade}/{filename} has unique slides and distributed quiz answers.")

    if has_errors:
        print("\nUniqueness check gate: FAILED.")
        sys.exit(1)
    else:
        print("\nUniqueness check gate: PASSED!")
        sys.exit(0)

if __name__ == "__main__":
    main()
