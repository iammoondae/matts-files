import os
import re

base_dir = "/home/moondae/Antigravity Projects/Matts Files_apk"
directories_to_scan = [
    os.path.join(base_dir, "data", "sources", "g3"),
    os.path.join(base_dir, "data", "g3")
]

# Replacements list. We sort them by length of key descendingly to avoid partial matching issues.
replacements = [
    # Complex/long names first
    ("Paaralang Elementarya ng Calamba", "Paaralang Elementarya ng Polomolok"),
    ("Calamba Elementary School", "Polomolok Elementary School"),
    ("Bahay ni Rizal sa Calamba", "T'nalak Weaving Center sa Lake Sebu"),
    ("Rizal House in Calamba", "T'nalak Weaving Center in Lake Sebu"),
    ("Ospital ng Laguna", "Ospital ng Timog Cotabato"),
    ("Laguna Hospital", "Ospital ng Timog Cotabato"),
    ("KCC Mall ng Gensan", "KCC Mall ng Gensan"),
    ("KCC Mall of GenSan", "KCC Mall of GenSan"),
    ("SM City Calamba", "KCC Mall ng Gensan"),
    ("Katedral ng San Pablo", "Katedral ng Koronadal"),
    ("San Pablo Cathedral", "Katedral ng Koronadal"),
    ("Enchanted Kingdom", "SG Farm sa Tupi"),
    ("Laguna Plaza", "Koronadal Plaza"),
    ("Leron Leron Sinta sa Laguna", "tradisyonal na awitin sa Timog Cotabato"),
    ("Leron Leron Sinta in Laguna", "traditional song in South Cotabato"),
    ("Leron Leron Sinta", "tradisyonal na awitin"),
    ("Los Baños", "Tupi"),
    ("Los Banos", "Tupi"),
    
    # Mt. Makiling
    ("Bundok Makiling", "Bundok Matutum"),
    ("Mt. Makiling", "Mt. Matutum"),
    ("Mt Makiling", "Mt. Matutum"),
    ("Mount Makiling", "Mount Matutum"),
    ("mount makiling", "mount matutum"),
    ("bundok makiling", "bundok matutum"),
    
    # Pasig River
    ("Ilog Pasig", "Lawa ng Sebu"),
    ("Pasig River", "Lake Sebu"),
    ("pasig river", "lake sebu"),
    ("ilog pasig", "lawa ng sebu"),
    
    # Calamba City
    ("Lungsod ng Calamba", "Lungsod ng Koronadal"),
    ("Lungsod Ng Calamba", "Lungsod ng Koronadal"),
    ("lungsod ng calamba", "lungsod ng koronadal"),
    ("lungsod ng Calamba", "lungsod ng Koronadal"),
    ("City of Calamba", "Koronadal City"),
    ("City Of Calamba", "Koronadal City"),
    ("city of calamba", "koronadal city"),
    ("Calamba City", "Koronadal City"),
    ("calamba city", "koronadal city"),
    
    # Calamba general
    ("Calamba", "Koronadal"),
    ("calamba", "koronadal"),
    
    # Laguna general
    ("Laguna", "Timog Cotabato"),
    ("laguna", "timog cotabato")
]

# We need to be careful with translations, so we will replace both key and value
# and also replace English/Filipino separately depending on context or just replace both.
# Replacing both is safe since the replacement table has both English and Tagalog entries.

def process_file(fpath):
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
        
    original = content
    for old, new in replacements:
        # Case sensitive replacement first
        content = content.replace(old, new)
        # Try case-insensitive replacement if it has letters
        # but standard replace handles most cases since we have all variations listed.
        
    if content != original:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Localized: {fpath}")
        return True
    return False

def main():
    modified_count = 0
    for root_dir in directories_to_scan:
        for root, dirs, files in os.walk(root_dir):
            for file in files:
                if file.endswith(".json"):
                    fpath = os.path.join(root, file)
                    if process_file(fpath):
                        modified_count += 1
                        
    print(f"Total files localized: {modified_count}")

if __name__ == "__main__":
    main()
