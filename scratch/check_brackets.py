def check_brackets():
    filepath = "/home/moondae/Antigravity Projects/Matts Files_apk/app.js"
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    stack = []
    pairs = {')': '(', '}': '{', ']': '['}
    line = 1
    col = 1
    
    in_string = False
    string_char = None
    in_comment = False
    comment_type = None # 'line' or 'block'
    
    i = 0
    n = len(content)
    
    while i < n:
        char = content[i]
        
        # Track line and column numbers
        if char == '\n':
            line += 1
            col = 1
        else:
            col += 1
            
        # Handle comments
        if in_comment:
            if comment_type == 'line' and char == '\n':
                in_comment = False
            elif comment_type == 'block' and char == '/' and content[i-1] == '*':
                in_comment = False
            i += 1
            continue
            
        if not in_string:
            if char == '/' and i + 1 < n and content[i+1] == '/':
                in_comment = True
                comment_type = 'line'
                i += 2
                col += 1
                continue
            elif char == '/' and i + 1 < n and content[i+1] == '*':
                in_comment = True
                comment_type = 'block'
                i += 2
                col += 1
                continue
                
        # Handle strings (simplistic)
        if in_string:
            # Check for escape
            if char == '\\':
                i += 2
                col += 1
                continue
            if char == string_char:
                in_string = False
            i += 1
            continue
        else:
            if char in ["'", '"', '`']:
                in_string = True
                string_char = char
                i += 1
                continue

        # Handle brackets
        if char in ['(', '{', '[']:
            stack.append((char, line, col))
        elif char in [')', '}', ']']:
            if not stack:
                print(f"Error: Unmatched closing bracket '{char}' at line {line}, col {col}")
                return False
            top_char, top_line, top_col = stack.pop()
            if pairs[char] != top_char:
                print(f"Error: Mismatched brackets. Closed '{char}' at line {line}, col {col} but top was '{top_char}' from line {top_line}, col {top_col}")
                return False
                
        i += 1
        
    if stack:
        for char, line, col in stack:
            print(f"Error: Unclosed bracket '{char}' from line {line}, col {col}")
        return False
        
    print("Brackets/Parentheses are perfectly balanced!")
    return True

if __name__ == "__main__":
    check_brackets()
