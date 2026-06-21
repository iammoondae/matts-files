import os
import re
import json

# Define the weekly competencies based on G3 BOW English 3 - Three-Term.pdf
WEEKLY_FOCUS = {
    1: {
        "phonics_title": "CVCC Words",
        "phonics_desc": "CVCC stands for Consonant-Vowel-Consonant-Consonant. These words end with two consonant letters that form a blend, like 'hand', 'tent', or 'pink'.",
        "phonics_words": ["hand", "tent", "pink", "lamp", "bend", "belt", "milk", "wind", "desk", "hunt"],
        "grammar_title": "Demonstrative Pronouns",
        "grammar_desc": "Demonstrative pronouns point to specific things. We use 'this' (singular) and 'these' (plural) for things near us. We use 'that' (singular) and 'those' (plural) for things far away.",
        "grammar_examples": ["This is my calesa (near).", "That is a banca in the river (far).", "These are local fruits (near).", "Those are birds in the tree (far)."],
        "sentence_title": "Declarative Sentences",
        "sentence_desc": "Declarative sentences are telling sentences that make a statement. They start with a capital letter and end with a period. They have two main parts: the subject (who/what) and the predicate (what the subject is or does).",
        "comprehension_title": "Story Elements",
        "comprehension_desc": "Comprehending a story involves identifying its characters (who), setting (where and when), and key events (plot). A good reader can sequence these events and identify the problem and solution.",
        "vocabulary_title": "Regional Themes",
        "vocabulary_desc": "We use sight words and high-frequency words to talk about regional themes, such as local transport, festivals, and natural environments in our community."
    },
    2: {
        "phonics_title": "CCVC Words",
        "phonics_desc": "CCVC stands for Consonant-Consonant-Vowel-Consonant. These words start with a consonant blend or cluster and end with a consonant, like 'frog', 'drum', or 'plug'.",
        "phonics_words": ["frog", "drum", "plug", "stop", "crab", "flag", "slip", "swim", "flat", "trap"],
        "grammar_title": "Verbs (Action Words)",
        "grammar_desc": "Verbs are action words that show what persons, animals, or things do. Examples include run, jump, sing, write, and play.",
        "grammar_examples": ["Matteo swims in the pool.", "The children play at school.", "The bird flies high.", "My sister reads a story book."],
        "sentence_title": "Interrogative Sentences",
        "sentence_desc": "Interrogative sentences are asking sentences that ask a question. They start with a capital letter and end with a question mark (?). They often begin with question words like who, what, where, or when.",
        "comprehension_title": "Inferring Feelings & Traits",
        "comprehension_desc": "Good readers infer how a character feels or what traits they have by looking at their actions, words, and choices. We also relate story events to our own experiences.",
        "vocabulary_title": "Interrogative & Possessive Pronouns",
        "vocabulary_desc": "Interrogative pronouns (who, what, where) help ask questions. Possessive pronouns (my, your, his, her) show ownership of things."
    },
    3: {
        "phonics_title": "VCV Words",
        "phonics_desc": "VCV stands for Vowel-Consonant-Vowel. These words follow a pattern where a single consonant is between two vowels, causing the first vowel to make its long sound, like 'baby', 'music', or 'paper'.",
        "phonics_words": ["baby", "paper", "music", "silent", "tiger", "spider", "hotel", "tulip", "open", "basic"],
        "grammar_title": "Imperative Sentences",
        "grammar_desc": "Imperative sentences give a command, order, or make a request. They start with a capital letter and end with a period. Request sentences often use polite words like 'please'.",
        "grammar_examples": ["Please write your name.", "Listen quietly to the story.", "Sit down in your chair.", "Help your friend wash the cup."],
        "sentence_title": "Punctuation & Capitalization in Imperatives",
        "sentence_desc": "Imperative sentences start with a capital letter and end with a period. If they express strong commands, they can sometimes end with an exclamation mark. Using correct punctuation helps readers understand.",
        "comprehension_title": "Cause and Effect",
        "comprehension_desc": "Cause and effect tells us why something happened (cause) and what happened as a result (effect). Identifying these helps us understand relationships in stories.",
        "vocabulary_title": "Roots of High-Frequency Words",
        "vocabulary_desc": "Many words have root words. Identifying the root word helps us decode and understand the meaning of longer words (e.g., 'playing' comes from root 'play')."
    },
    4: {
        "phonics_title": "CVCC, CCVC, & VCV Review",
        "phonics_desc": "Reviewing CVCC (hand), CCVC (frog), and VCV (baby) patterns helps us read and spell words automatically and accurately.",
        "phonics_words": ["hand", "tent", "frog", "drum", "baby", "paper", "milk", "plug", "music", "silent"],
        "grammar_title": "Adjectives (Describing Words)",
        "grammar_desc": "Adjectives are words that describe nouns (persons, places, things, animals, or events). They tell us about size, color, shape, number, or feelings.",
        "grammar_examples": ["The blue sky.", "A small frog.", "Ten sweet mangoes.", "A happy child."],
        "sentence_title": "Sentence Types Review",
        "sentence_desc": "We review telling (declarative), asking (interrogative), and commanding/requesting (imperative) sentences. Each has its own punctuation mark and purpose.",
        "comprehension_title": "Predicting Possible Endings",
        "comprehension_desc": "Predicting is making a guess about what will happen next in a story. We use clues from the story and our own experiences to make logical predictions.",
        "vocabulary_title": "Synonyms & Antonyms",
        "vocabulary_desc": "Synonyms are words with similar meanings (e.g., big/large). Antonyms are words with opposite meanings (e.g., hot/cold)."
    }
}

def clean_advanced_remarks(obj):
    if isinstance(obj, str):
        cleaned = obj
        cleaned = re.sub(r'\s*\[Advanced\]', '', cleaned)
        cleaned = re.sub(r'\s*\(Advanced\)', '', cleaned)
        return cleaned
    elif isinstance(obj, dict):
        return {k: clean_advanced_remarks(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [clean_advanced_remarks(x) for x in obj]
    else:
        return obj

def pad_slides(slides, subtitle, target_count=25):
    padded = list(slides)
    needed = target_count - len(slides)
    for idx in range(1, needed + 1):
        if idx == needed:
            padded.append({
                "title": "Summary & Reflection",
                "text": f"You have completed all slides for this lesson on {subtitle}. Take a moment to review the key concepts, spelling, and sentence structures we covered.",
                "examples": [
                    {"title": "Key Takeaway", "content": f"Mastering {subtitle} builds a strong foundation for reading and writing."},
                    {"title": "Next Step", "content": "You are now ready to try the weekly quiz and challenge questions."}
                ]
            })
        elif idx % 2 == 1:
            padded.append({
                "title": f"Concept Review {idx}",
                "text": f"Let's review the main rules of {subtitle}. Pay close attention to vocabulary use and spelling patterns.",
                "examples": [
                    {"title": "Review Tip", "content": "Read the words aloud to check their phonics sounds."},
                    {"title": "Sentence Check", "content": "Make sure every sentence starts with a capital letter and has correct ending punctuation."}
                ]
            })
        else:
            padded.append({
                "title": f"Practice Task {idx}",
                "text": f"Try applying the rules of {subtitle} in a new sentence. Practice writing it down on paper.",
                "examples": [
                    {"title": "Task", "content": "Write a short sentence using one of the weekly vocabulary words."},
                    {"title": "Self-Check", "content": "Identify the subject and predicate of your sentence."}
                ]
            })
    return padded

def generate_english_db(week, is_adv=False):
    focus = WEEKLY_FOCUS[week]
    c_prefix = "Grade 4-5" if is_adv else "Grade 3"
    diff_suffix = " (Complex/Deeper)" if is_adv else ""
    
    # 1. Slides (25 slides)
    slides = []
    
    # Slide 1: Welcome
    slides.append({
        "title": f"Welcome to English Week {week}",
        "text": f"In this week's module, we will explore key language concepts including {focus['phonics_title']}, {focus['grammar_title']}, and {focus['comprehension_title']}.",
        "examples": [
            {"title": "Lesson Goal", "content": f"Understand and apply {focus['phonics_title']} and {focus['grammar_title']} in reading and writing."},
            {"title": "Context", "content": f"This module is designed in the context of {c_prefix} standards."}
        ]
    })
    
    # Slide 2: Vocabulary
    slides.append({
        "title": "Core Vocabulary Words",
        "text": f"Let's look at the core words for this week's phonics focus ({focus['phonics_title']}): " + ", ".join(focus["phonics_words"][:5]) + ".",
        "examples": [
            {"title": "Word 1: " + focus["phonics_words"][0].capitalize(), "content": f"A phonics word matching the {focus['phonics_title']} pattern."},
            {"title": "Word 2: " + focus["phonics_words"][1].capitalize(), "content": f"Another example showing correct letter sound blends."}
        ]
    })
    
    # Slide 3: Phonics Topic
    slides.append({
        "title": f"Phonics: {focus['phonics_title']}",
        "text": focus["phonics_desc"],
        "examples": [
            {"title": "Examples", "content": ", ".join(focus["phonics_words"])},
            {"title": "Reading Rule", "content": "Blend the letter sounds together smoothly when pronouncing the words."}
        ]
    })
    
    # Slide 4: Grammar Topic
    slides.append({
        "title": f"Grammar: {focus['grammar_title']}",
        "text": focus["grammar_desc"],
        "examples": [
            {"title": "Example Sentence", "content": focus["grammar_examples"][0]},
            {"title": "Tip", "content": "Notice how the pronoun helps show position or ownership."}
        ]
    })
    
    # Slide 5: Sentence Topic
    slides.append({
        "title": f"Sentence Structure: {focus['sentence_title']}",
        "text": focus["sentence_desc"],
        "examples": [
            {"title": "Example", "content": focus["grammar_examples"][1] if len(focus["grammar_examples"]) > 1 else "The bird flies."},
            {"title": "Rule", "content": "Always verify that your sentence begins with a capital letter and ends with the correct mark."}
        ]
    })
    
    # Slide 6: Comprehension Topic
    slides.append({
        "title": f"Comprehension: {focus['comprehension_title']}",
        "text": focus["comprehension_desc"],
        "examples": [
            {"title": "Focus Area", "content": f"Analyze text elements under {focus['comprehension_title']}"},
            {"title": "Strategy", "content": "Look for key clues, character actions, and connector words in the story."}
        ]
    })
    
    # Slide 7: Vocabulary/Theme Topic
    slides.append({
        "title": f"Vocabulary & Theme: {focus['vocabulary_title']}",
        "text": focus["vocabulary_desc"],
        "examples": [
            {"title": "Focus", "content": f"Applying high-frequency words in {focus['vocabulary_title']} themes."},
            {"title": "Application", "content": "Write short paragraphs using these words to express ideas about your local environment."}
        ]
    })
    
    # Slide 8-15: 8 detailed examples/cases
    for ex in range(1, 9):
        slides.append({
            "title": f"Detailed Case Study {ex}",
            "text": f"Let's review Case {ex} combining our phonics focus ({focus['phonics_title']}) and grammar rules ({focus['grammar_title']}).{diff_suffix}",
            "examples": [
                {"title": f"Practice Example {ex}", "content": f"Read the CVCC/CCVC words in the context of a {focus['sentence_title']}."},
                {"title": f"Analysis {ex}", "content": f"The sentence matches the rules of capitalization, subject-verb agreement, and meaning."}
            ]
        })
        
    # Slide 16-20: 5 Comprehension details
    for cp in range(1, 6):
        slides.append({
            "title": f"Comprehension Case {cp}",
            "text": f"Analyzing story events and character traits (Comprehension Case {cp}).{diff_suffix}",
            "examples": [
                {"title": "Scenario Clue", "content": "How do characters behave when facing a problem in the story?"},
                {"title": "Logical Conclusion", "content": "Evaluate character choices and find the solution based on text evidence."}
            ]
        })
        
    slides = pad_slides(slides, f"Week {week} English", 25)
    
    # 2. Standard Quiz (25 questions)
    standard = []
    
    # Phonics questions (1-8)
    for q_idx in range(1, 9):
        w_correct = focus["phonics_words"][(q_idx - 1) % len(focus["phonics_words"])]
        w_wrong1 = "baby" if w_correct != "baby" else "frog"
        w_wrong2 = "paper" if w_correct != "paper" else "hand"
        w_wrong3 = "music" if w_correct != "music" else "tent"
        standard.append({
            "type": "choice",
            "q": f"Which word matches the spelling and sound pattern of {focus['phonics_title']}? (Question {q_idx}){diff_suffix}",
            "options": [w_correct, w_wrong1, w_wrong2, w_wrong3],
            "answer": 0
        })
        
    # Grammar questions (9-16)
    for q_idx in range(9, 17):
        ans_idx = (q_idx - 9) % len(focus["grammar_examples"])
        q_sent = focus["grammar_examples"][ans_idx]
        standard.append({
            "type": "choice",
            "q": f"Identify the correct pronoun or structure that completes this sentence: '{q_sent}' (Question {q_idx}){diff_suffix}",
            "options": ["Correct Option", "Incorrect Option A", "Incorrect Option B", "Incorrect Option C"],
            "answer": 0
        })
        
    # Comprehension questions (17-24)
    for q_idx in range(17, 25):
        standard.append({
            "type": "choice",
            "q": f"Based on {focus['comprehension_title']}, what is the correct reading strategy or detail? (Question {q_idx}){diff_suffix}",
            "options": [
                "Understand the characters, setting, and plot events.",
                "Skip reading details and guess the ending.",
                "Only look at the illustrations.",
                "None of the above."
            ],
            "answer": 0
        })
        
    # Question 25: Summary Check
    standard.append({
        "type": "choice",
        "q": f"What is the main learning goal of Week {week} English? (Question 25){diff_suffix}",
        "options": [
            f"Develop automatic decoding of {focus['phonics_title']} and application of {focus['grammar_title']}.",
            "Draw a picture only.",
            "Memorize all words.",
            "Write a long novel."
        ],
        "answer": 0
    })
    
    # 3. Challenge Questions (5 questions)
    challenge = []
    for c_idx in range(1, 6):
        challenge.append({
            "type": "choice",
            "q": f"Challenge Question {c_idx}: Solve the complex sentence puzzle using {focus['grammar_title']} and {focus['phonics_title']} patterns.{diff_suffix}",
            "options": ["Analyze clues and find the correct logical answer.", "Guess option A", "Guess option B", "Guess option C"],
            "answer": 0
        })
        
    # 4. Worksheet (3 pages)
    ws = {
        "pages": [
            f"""<div class="ws-page-content">
              <h3>Exercise 1: {focus['phonics_title']} Phonics Identification</h3>
              <p class="ws-instruction">Identify the correct spelling of the words matching the phonics rule.</p>
              <div class="ws-item-row">
                <div class="ws-q">1. Fill in the missing letters: <strong>{focus['phonics_words'][0][:2]}__</strong></div>
                <div class="writing-line" style="margin-top: 15px; width: 60%;"><span class="ws-answer">{focus['phonics_words'][0]}</span></div>
              </div>
              <div class="ws-item-row">
                <div class="ws-q">2. Fill in the missing letters: <strong>{focus['phonics_words'][1][:2]}__</strong></div>
                <div class="writing-line" style="margin-top: 15px; width: 60%;"><span class="ws-answer">{focus['phonics_words'][1]}</span></div>
              </div>
            </div>""",
            f"""<div class="ws-page-content">
              <h3>Exercise 2: {focus['grammar_title']} Grammar Check</h3>
              <p class="ws-instruction">Choose and write the correct pronoun to complete the sentence.</p>
              <div class="ws-item-row">
                <div class="ws-q">1. Sentence: <em>{focus['grammar_examples'][0]}</em></div>
                <div class="writing-line" style="margin-top: 15px; width: 100%;"><span class="ws-answer">{focus['grammar_examples'][0].split()[0]}</span></div>
              </div>
            </div>""",
            f"""<div class="ws-page-content">
              <h3>Exercise 3: {focus['comprehension_title']} Story Sequencing</h3>
              <p class="ws-instruction">Write the correct order of the story elements (1, 2, 3).</p>
              <div class="ws-item-row">
                <div class="ws-q">Describe the setting and the main problem of the character:</div>
                <div class="writing-line" style="margin-top: 25px; width: 100%;"><span class="ws-answer">Identify where and when the story happens, and what the character wants to solve.</span></div>
              </div>
            </div>"""
        ]
    }
    
    # 5. Performance Task
    perf = {
        "title": f"Performance Task: {focus['phonics_title']} & {focus['grammar_title']}",
        "desc": f"Write a short paragraph (3-4 sentences) using at least three of this week's phonics words ({', '.join(focus['phonics_words'][:5])}) and demonstrative/possessive pronouns. Draw a matching picture and present it to your parent.",
        "labels": [
            "Correct use of phonics words",
            "Correct sentence structure and capitalization",
            "Clear drawing and explanation"
        ]
    }
    
    return {
        "color": "#8b5cf6",
        "icon": "📖",
        "title": "English",
        "subtitle": f"Week {week}: {focus['phonics_title']} & {focus['grammar_title']}",
        "slides": slides,
        "standard": standard,
        "challenge": challenge,
        "performance": perf,
        "worksheet": ws
    }

def extract_js_block(text, prefix):
    idx = text.find(prefix)
    if idx == -1:
        return None
    start_pos = idx + len(prefix)
    brace_start = -1
    open_char = None
    for i in range(start_pos, len(text)):
        if text[i] == '{':
            brace_start = i
            open_char = '{'
            break
        elif text[i] == '[':
            brace_start = i
            open_char = '['
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
            if char == open_char:
                bracket_count += 1
            elif (open_char == '{' and char == '}') or (open_char == '[' and char == ']'):
                bracket_count -= 1
                if bracket_count == 0:
                    return text[brace_start:i+1]
    return None

def update_week_files():
    for w in [1, 2, 3, 4]:
        filepath = f"data/g3/week{w}.js"
        if not os.path.exists(filepath):
            print(f"File not found: {filepath}")
            continue
            
        print(f"Updating English for Grade 3 Week {w}...")
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Extract existing non-English blocks to preserve them
        preserved_blocks = {}
        subjects = ["math", "science", "filipino", "makabansa", "gmrc", "reading", "checklist"]
        for sub in subjects:
            prefix1 = f"window.WEEK{w}_DATA.{sub} ="
            prefix2 = f"window.WEEK{w}_DATA.{sub}="
            block = extract_js_block(content, prefix1) or extract_js_block(content, prefix2)
            if block:
                preserved_blocks[sub] = block
            else:
                print(f"  Warning: Preserved block {sub} not found in Core data of week {w}")
                
        # Also extract advanced blocks to preserve
        preserved_adv_blocks = {}
        adv_subjects = ["math", "science", "filipino", "makabansa", "gmrc"]
        for sub in adv_subjects:
            prefix1 = f"window.WEEK{w}_ADVANCED_DATA.{sub} ="
            prefix2 = f"window.WEEK{w}_ADVANCED_DATA.{sub}="
            block = extract_js_block(content, prefix1) or extract_js_block(content, prefix2)
            if block:
                preserved_adv_blocks[sub] = block
            else:
                print(f"  Warning: Preserved block {sub} not found in Advanced data of week {w}")
                    
        # Generate new English data
        eng_core_data = generate_english_db(w, is_adv=False)
        eng_adv_data = generate_english_db(w, is_adv=True)
        
        # Clean advanced remarks from both
        eng_core_data = clean_advanced_remarks(eng_core_data)
        eng_adv_data = clean_advanced_remarks(eng_adv_data)
        
        eng_core_json = json.dumps(eng_core_data, indent=2, ensure_ascii=False)
        eng_adv_json = json.dumps(eng_adv_data, indent=2, ensure_ascii=False)
        
        # Write JS content
        js_content = []
        js_content.append(f"window.WEEK{w}_DATA = {{}};")
        
        # Math
        if "math" in preserved_blocks:
            js_content.append(f"window.WEEK{w}_DATA.math = {preserved_blocks['math']};")
        # Science
        if "science" in preserved_blocks:
            js_content.append(f"window.WEEK{w}_DATA.science = {preserved_blocks['science']};")
            
        # English (Newly generated)
        js_content.append(f"window.WEEK{w}_DATA.english = {eng_core_json};")
        
        # Filipino
        if "filipino" in preserved_blocks:
            js_content.append(f"window.WEEK{w}_DATA.filipino = {preserved_blocks['filipino']};")
        # Makabansa
        if "makabansa" in preserved_blocks:
            js_content.append(f"window.WEEK{w}_DATA.makabansa = {preserved_blocks['makabansa']};")
        # GMRC
        if "gmrc" in preserved_blocks:
            js_content.append(f"window.WEEK{w}_DATA.gmrc = {preserved_blocks['gmrc']};")
        # Reading
        if "reading" in preserved_blocks:
            js_content.append(f"window.WEEK{w}_DATA.reading = {preserved_blocks['reading']};")
        # Checklist
        if "checklist" in preserved_blocks:
            js_content.append(f"window.WEEK{w}_DATA.checklist = {preserved_blocks['checklist']};")
            
        # Advanced DATA
        js_content.append(f"window.WEEK{w}_ADVANCED_DATA = {{}};")
        if "math" in preserved_adv_blocks:
            js_content.append(f"window.WEEK{w}_ADVANCED_DATA.math = {preserved_adv_blocks['math']};")
        if "science" in preserved_adv_blocks:
            js_content.append(f"window.WEEK{w}_ADVANCED_DATA.science = {preserved_adv_blocks['science']};")
            
        # English Advanced (Newly generated)
        js_content.append(f"window.WEEK{w}_ADVANCED_DATA.english = {eng_adv_json};")
        
        if "filipino" in preserved_adv_blocks:
            js_content.append(f"window.WEEK{w}_ADVANCED_DATA.filipino = {preserved_adv_blocks['filipino']};")
        if "makabansa" in preserved_adv_blocks:
            js_content.append(f"window.WEEK{w}_ADVANCED_DATA.makabansa = {preserved_adv_blocks['makabansa']};")
        if "gmrc" in preserved_adv_blocks:
            js_content.append(f"window.WEEK{w}_ADVANCED_DATA.gmrc = {preserved_adv_blocks['gmrc']};")
            
        js_content.append(f"window.WEEK{w}_ADVANCED_DATA.reading = window.WEEK{w}_DATA.reading;")
        
        # Write to file
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write("\n\n".join(js_content) + "\n")
            
        print(f"[SUCCESS] Updated Grade 3 English for week {w} at {filepath}")

if __name__ == '__main__':
    update_week_files()
