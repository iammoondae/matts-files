import re

def fix_localstorage():
    filepath = "/home/moondae/Antigravity Projects/Matts Files_apk/app.js"
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Step 1: Replace stand-alone localStorage (not prefixed by window.) with safeStorage
    # Using negative lookbehind to ensure we don't match window.localStorage
    pattern = r"(?<!window\.)\blocalStorage\b"
    new_content = re.sub(pattern, "safeStorage", content)

    # Let's count how many replacements were made
    differences = len(re.findall(pattern, content))
    print(f"Total occurrences of stand-alone localStorage to replace: {differences}")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)

    print("Successfully replaced all stand-alone localStorage references with safeStorage in app.js.")

if __name__ == "__main__":
    fix_localstorage()
