import urllib.request
import urllib.parse
import json

def translate_tl_to_en(text):
    try:
        url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=tl&tl=en&dt=t&q=" + urllib.parse.quote(text)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            res = json.loads(response.read().decode('utf-8'))
            return "".join([part[0] for part in res[0] if part[0]])
    except Exception as e:
        print(f"Error translating {text}: {e}")
        return None

test_text = "Ano ang tawag sa pag-aaral ng may-saysay na nakaraang pangyayari sa komunidad?"
translated = translate_tl_to_en(test_text)
print(f"Original: {test_text}")
print(f"Translated: {translated}")
