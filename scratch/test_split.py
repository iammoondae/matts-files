import re

def split_sentences_html(text):
    # Split the text into HTML tags and text content
    tokens = re.split(r'(<[^>]+>)', text)
    
    sentences = []
    current_sentence = []
    open_spans = 0
    
    for token in tokens:
        if not token:
            continue
            
        if token.startswith('<') and token.endswith('>'):
            # It is a tag
            current_sentence.append(token)
            
            # Check if it is a span tag
            tag_name_match = re.match(r'^</?([a-zA-Z0-9]+)', token)
            if tag_name_match:
                name = tag_name_match.group(1).lower()
                if name == 'span':
                    if token.startswith('</'):
                        open_spans = max(0, open_spans - 1)
                        # Transition to 0: split sentence
                        if open_spans == 0:
                            sentences.append("".join(current_sentence).strip())
                            current_sentence = []
                    else:
                        open_spans += 1
        else:
            # It is plain text
            if open_spans > 0:
                current_sentence.append(token)
            else:
                # We can split on periods, exclamation marks, or question marks
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

text = """<span class="fil-sentence" data-translation="Hello, Grade Three student! Welcome!">Kumusta, mag-aaral sa Grade Three! Maligayang pagdating!</span> <span class="fil-sentence" data-translation="This week, we will study about nouns.">Ngayong linggo, mag-aaral tayo tungkol sa mga pangngalan.</span>"""
clean_text = text.replace("\n", " ").strip()
sentences = split_sentences_html(clean_text)
print("\n--- SENTENCES ---")
for s in sentences:
    print(repr(s))
