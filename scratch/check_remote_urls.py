import json
import urllib.request
import urllib.error

MANIFEST_URL = "https://raw.githubusercontent.com/iammoondae/matts-files/main/data/g3/manifest.json"
BASE_URL = "https://raw.githubusercontent.com/iammoondae/matts-files/main"

try:
    req = urllib.request.urlopen(MANIFEST_URL)
    manifest = json.loads(req.read().decode("utf-8"))
except Exception as e:
    print(f"Failed to fetch remote manifest: {e}")
    exit(1)

weeks = manifest.get("weeks", [])
images = manifest.get("images", [])
reviews = manifest.get("reviews", [])

urls_to_check = []
for w in weeks:
    urls_to_check.append((f"data/g3/week{w}.json", f"{BASE_URL}/data/g3/week{w}.json"))
for r in reviews:
    urls_to_check.append((f"data/g3/review_{r}.json", f"{BASE_URL}/data/g3/review_{r}.json"))
for img in images:
    urls_to_check.append((f"images/{img}", f"{BASE_URL}/images/{img}"))

print(f"Checking {len(urls_to_check)} URLs...")
failed = []

for filename, url in urls_to_check:
    # URL encode spaces
    url_encoded = url.replace(" ", "%20")
    try:
        req = urllib.request.Request(url_encoded, method="HEAD")
        with urllib.request.urlopen(req) as resp:
            if resp.status != 200:
                print(f"Fail: {filename} (Status {resp.status})")
                failed.append((filename, url, resp.status))
    except urllib.error.HTTPError as e:
        print(f"Fail: {filename} (HTTP Error {e.code})")
        failed.append((filename, url, e.code))
    except Exception as e:
        print(f"Fail: {filename} (Error {e})")
        failed.append((filename, url, str(e)))

print("\n--- Summary ---")
print(f"Total checked: {len(urls_to_check)}")
print(f"Failed count: {len(failed)}")
for f in failed:
    print(f"  - {f[0]}: {f[2]}")
