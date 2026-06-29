import os
import json
import re

BASE_DIR = "/home/moondae/Antigravity Projects/Matts Files_apk"
SOURCES_DIR = os.path.join(BASE_DIR, "data/sources/g3")

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
    # Lowercase, remove non-alphanumeric, collapse space
    normalized = re.sub(r'[^a-zA-Z0-9\s]', '', sentence.lower())
    normalized = re.sub(r'\s+', ' ', normalized).strip()
    return normalized

def count_words(normalized_sentence):
    return len(normalized_sentence.split())

def clean_json_file(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        print(f"Error loading {file_path}: {e}")
        return

    modified_any = False
    slides = data.get("slides", [])
    
    # We will track normalized sentences seen in this file
    seen_sentences = set()
    
    for idx, slide in enumerate(slides):
        text = slide.get("text", "")
        if not text:
            continue
            
        # Specific Math Week 2 boilerplate cleanup
        old_text = text
        text = re.sub(r'\s*\.?\s*A\s*square\s*centimeter\s*\(sq\.\s*\.\s*A\s*square\s*meter\s*\(sq\.\s*\.\s*\.\s*\.', '', text, flags=re.IGNORECASE)
        text = re.sub(r'\s*\.?\s*A\s*square\s*centimeter\s*\(sq\.\s*\.\s*A\s*square\s*meter\s*\(sq\.\s*\.\s*', '', text, flags=re.IGNORECASE)
        if text != old_text:
            slide["text"] = text
            modified_any = True
            
        # We will split the slide text into HTML-preserving segments (like spans) or clean sentence parts.
        # To preserve spans, we can search for the sentences of 6+ words and replace them.
        # Let's find all sentences in the slide
        slide_sentences = get_sentences(text)
        
        slide_modified = False
        new_text = text
        
        for sentence in slide_sentences:
            norm = normalize_sentence(sentence)
            word_count = count_words(norm)
            
            if word_count >= 6:
                # Exclude standard educational labels
                if "matteo" in norm or "learning hub" in norm or "let us review" in norm:
                    continue
                    
                if norm in seen_sentences:
                    # This is a duplicate sentence! We must remove it from the slide text.
                    # We look for the sentence, optionally wrapped in a span tag
                    # Pattern 1: wrapped in span
                    span_pattern = re.compile(
                        r'\s*<span[^>]*>\s*' + re.escape(sentence) + r'\s*</span>\s*', re.IGNORECASE
                    )
                    # Pattern 2: raw sentence
                    raw_pattern = re.compile(r'\s*' + re.escape(sentence) + r'\s*', re.IGNORECASE)
                    
                    # Try to replace
                    temp_text, count = span_pattern.subn(" ", new_text)
                    if count > 0:
                        new_text = temp_text
                        slide_modified = True
                        print(f"  Removed duplicate span sentence: \"{sentence[:30]}...\" from slide {idx + 1}")
                    else:
                        temp_text, count = raw_pattern.subn(" ", new_text)
                        if count > 0:
                            new_text = temp_text
                            slide_modified = True
                            print(f"  Removed duplicate raw sentence: \"{sentence[:30]}...\" from slide {idx + 1}")
                else:
                    seen_sentences.add(norm)
                    
        if slide_modified:
            new_text = re.sub(r'\s+', ' ', new_text).strip()
            slide["text"] = new_text
            modified_any = True

    if modified_any:
        try:
            with open(file_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            print(f"Updated source file: {file_path}")
        except Exception as e:
            print(f"Error writing {file_path}: {e}")

def main():
    print("Scrubbing duplicate sentences from source templates generically...")
    for root, dirs, files in os.walk(SOURCES_DIR):
        for file in files:
            if file.endswith(".json"):
                full_path = os.path.join(root, file)
                clean_json_file(full_path)

if __name__ == "__main__":
    main()
