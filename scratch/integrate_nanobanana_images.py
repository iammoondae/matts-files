import os
import shutil
import json

WORKSPACE_DIR = "/home/moondae/Antigravity Projects/Matts Files_apk"
NANOBANANA_DIR = os.path.join(WORKSPACE_DIR, "images/nanobanana")
IMAGES_DIR = os.path.join(WORKSPACE_DIR, "images")
WEEK1_JSON_PATH = os.path.join(WORKSPACE_DIR, "data/g3/week1.json")
MANIFEST_JSON_PATH = os.path.join(WORKSPACE_DIR, "data/g3/manifest.json")

# Define target slides for images 4 and 5 for each subject
TARGET_SLIDES = {
    "math": {
        4: 16,
        5: 22
    },
    "science": {
        4: 12,
        5: 9
    },
    "english": {
        4: 9,
        5: 13
    },
    "filipino": {
        4: 7,
        5: 10
    },
    "makabansa": {
        4: 6,
        5: 13
    },
    "gmrc": {
        4: 3,
        5: 6
    }
}

def copy_images():
    print("=== Copying images from nanobanana folder to main images/ folder ===")
    if not os.path.exists(NANOBANANA_DIR):
        print(f"Error: nanobanana folder not found at {NANOBANANA_DIR}")
        return False
    
    files_copied = 0
    for filename in os.listdir(NANOBANANA_DIR):
        if filename.endswith(".png"):
            src_path = os.path.join(NANOBANANA_DIR, filename)
            dest_path = os.path.join(IMAGES_DIR, filename)
            shutil.copy2(src_path, dest_path)
            print(f"Copied: {filename} -> {dest_path}")
            files_copied += 1
            
    print(f"Successfully copied {files_copied} PNG files.")
    return True

def update_week1_json():
    print("=== Modifying data/g3/week1.json ===")
    if not os.path.exists(WEEK1_JSON_PATH):
        print(f"Error: week1.json not found at {WEEK1_JSON_PATH}")
        return False
        
    with open(WEEK1_JSON_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    for mode in ["core", "advanced"]:
        for subject, slides_map in TARGET_SLIDES.items():
            if subject not in data[mode]:
                print(f"Warning: Subject {subject} not found in {mode} section")
                continue
                
            slides = data[mode][subject]["slides"]
            for img_num, slide_idx in slides_map.items():
                if slide_idx < len(slides):
                    # Set image path
                    image_filename = f"{subject}_w1_img{img_num}.png"
                    image_path = f"images/{image_filename}"
                    slides[slide_idx]["image"] = image_path
                    print(f"[{mode}] Set slide {slide_idx} of {subject} to use image {image_path}")
                else:
                    print(f"Error: Slide index {slide_idx} out of range for {subject} ({len(slides)} slides)")
                    
    with open(WEEK1_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        
    print("Successfully updated data/g3/week1.json")
    return True

def update_manifest_json():
    print("=== Modifying data/g3/manifest.json ===")
    if not os.path.exists(MANIFEST_JSON_PATH):
        print(f"Error: manifest.json not found at {MANIFEST_JSON_PATH}")
        return False
        
    with open(MANIFEST_JSON_PATH, "r", encoding="utf-8") as f:
        manifest = json.load(f)
        
    images_list = manifest.get("images", [])
    
    new_images_added = 0
    for subject in TARGET_SLIDES.keys():
        for img_num in [4, 5]:
            img_filename = f"{subject}_w1_img{img_num}.png"
            if img_filename not in images_list:
                images_list.append(img_filename)
                print(f"Added {img_filename} to manifest images list")
                new_images_added += 1
                
    manifest["images"] = sorted(images_list)
    
    with open(MANIFEST_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
        
    print(f"Successfully updated manifest.json (added {new_images_added} new images)")
    return True

if __name__ == "__main__":
    if copy_images():
        if update_week1_json():
            update_manifest_json()
            print("All integration steps completed successfully!")
