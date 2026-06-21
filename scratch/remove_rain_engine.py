import os

BASE_DIR = "/home/moondae/Antigravity Projects/Matts Files_apk"
APP_JS_PATH = os.path.join(BASE_DIR, "app.js")

if os.path.exists(APP_JS_PATH):
    with open(APP_JS_PATH, "r", encoding="utf-8") as f:
        content = f.read()
        
    target_str = "// 9. Sentence Rain Game Logic"
    idx = content.find(target_str)
    if idx != -1:
        truncated_content = content[:idx] + "// Sentence Rain Game Engine Removed\n"
        with open(APP_JS_PATH, "w", encoding="utf-8") as f_out:
            f_out.write(truncated_content)
        print("[SUCCESS] Truncated app.js from line with comment '// 9. Sentence Rain Game Logic'")
    else:
        print("[ERROR] Could not find target comment in app.js")
else:
    print("[ERROR] app.js does not exist")
