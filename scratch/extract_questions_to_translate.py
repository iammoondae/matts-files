import os
import json

BASE_DIR = "/home/moondae/Antigravity Projects/Matts Files_apk"
SOURCES_DIR = os.path.join(BASE_DIR, "data", "sources", "g3")

questions_to_translate = []

for sub in ["filipino", "makabansa"]:
    for w in range(1, 5):
        path = os.path.join(SOURCES_DIR, sub, f"week{w}.json")
        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as f:
                data = json.load(f)
            for q_type in ["standard", "challenge"]:
                for idx, q in enumerate(data.get(q_type, [])):
                    questions_to_translate.append({
                        "subject": sub,
                        "week": w,
                        "type": q_type,
                        "index": idx,
                        "q": q["q"],
                        "options": q.get("options", [])
                    })

print(f"Found {len(questions_to_translate)} questions in standard subjects.")

# Save to a temporary file
out_path = os.path.join(BASE_DIR, "scratch", "questions_extracted.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(questions_to_translate, f, indent=2, ensure_ascii=False)
print(f"Extracted to {out_path}")
