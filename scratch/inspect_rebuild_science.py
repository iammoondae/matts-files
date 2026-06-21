import re

with open("/home/moondae/Antigravity Projects/Matts Files_apk/index.html", "r", encoding="utf-8") as f:
    html = f.read()

with open("/home/moondae/Antigravity Projects/Matts Files_apk/app.js", "r", encoding="utf-8") as f:
    js = f.read()

# Find all occurrences of onclick="..."
onclick_matches = re.findall(r'onclick\s*=\s*"([^"]+)"', html)

# Match all function names in the onclick expressions
# E.g. setMode('home'), closeCompetenciesModal(), if(event.target===this) closeAboutModal()
function_calls = []
for handler in onclick_matches:
    # find all alphabetic function calls followed by parentheses
    calls = re.findall(r'\b([a-zA-Z0-9_]+)\s*\(', handler)
    function_calls.extend(calls)

# Remove duplicates
function_calls = list(set(function_calls))
print(f"Found {len(function_calls)} unique function calls in onclick handlers.")

for func_name in function_calls:
    if func_name in ["alert", "confirm", "history", "location", "toggleTheme", "toggleMusicHeader", "toggleTranslationHeader", "pressPinKey", "clearPin", "submitPinRecovery", "closePinModal", "closeSidebar", "toggleSidebar", "setLevel", "setSubject", "setMode", "event", "typeof", "parseInt", "parseFloat"]:
        continue
    
    # Check if this function is defined in app.js
    pattern = rf'(?:function\s+{func_name}\b|{func_name}\s*=\s*function\b|{func_name}\s*:\s*function\b|const\s+{func_name}\s*=|\bwindow\.{func_name}\b)'
    if not re.search(pattern, js):
        print(f"WARNING: Function '{func_name}' referenced in index.html was not found in app.js!")
