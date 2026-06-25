import os
from PIL import Image

WORKSPACE_DIR = "/home/moondae/Antigravity Projects/Matts Files_apk"
IMAGES_DIR = os.path.join(WORKSPACE_DIR, "images")
NANOBANANA_DIR = os.path.join(IMAGES_DIR, "nanobanana")

def resize_image(file_path):
    try:
        with Image.open(file_path) as img:
            orig_width, orig_height = img.size
            if orig_width > 1024 or orig_height > 1024:
                # Determine resampling method dynamically based on Pillow version
                try:
                    resample_method = Image.Resampling.LANCZOS
                except AttributeError:
                    resample_method = Image.ANTIALIAS
                
                # Use thumbnail to resize in-place maintaining aspect ratio
                img.thumbnail((1024, 1024), resample_method)
                img.save(file_path, "PNG", optimize=True)
                new_width, new_height = img.size
                file_size = os.path.getsize(file_path) / 1024.0
                print(f"Resized {os.path.basename(file_path)}: {orig_width}x{orig_height} -> {new_width}x{new_height} ({file_size:.1f} KB)")
                return True
            else:
                print(f"Skipped {os.path.basename(file_path)} (already small: {orig_width}x{orig_height})")
                return False
    except Exception as e:
        print(f"Error resizing {file_path}: {e}")
        return False

def main():
    print("=== Starting Image Resizing Process ===")
    
    # Process images directly in the images/ directory
    processed_count = 0
    if os.path.exists(IMAGES_DIR):
        for filename in os.listdir(IMAGES_DIR):
            if filename.endswith(".png") and "_w1_img" in filename:
                file_path = os.path.join(IMAGES_DIR, filename)
                if resize_image(file_path):
                    processed_count += 1
                    
    # Process images in the images/nanobanana/ directory
    if os.path.exists(NANOBANANA_DIR):
        for filename in os.listdir(NANOBANANA_DIR):
            if filename.endswith(".png"):
                file_path = os.path.join(NANOBANANA_DIR, filename)
                if resize_image(file_path):
                    processed_count += 1
                    
    print(f"=== Resizing completed! Processed {processed_count} large images. ===")

if __name__ == "__main__":
    main()
