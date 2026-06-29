#!/usr/bin/env python3
import os
import sys
import shutil
import datetime
import re

# Target directories
WORKSPACE_DIR = os.path.dirname(os.path.abspath(__file__))
BACKUPS_DIR = os.path.join(WORKSPACE_DIR, "backups")
VERSION_LOG_FILE = os.path.join(BACKUPS_DIR, "versionlog.txt")

# Regex to match version directory format YY.MM.DD_HHMMSS
VERSION_PATTERN = re.compile(r"^\d{2}\.\d{2}\.\d{2}_\d{6}$")

# Directories/files to exclude from copying
EXCLUDE_PATTERNS = {
    ".git",
    "backups",
    "build-tools",
    "build",
    ".gradle",
    "__pycache__",
    ".idea",
    ".cxx",
    ".gitattributes",
    "brave_user_data",
}

EXCLUDE_EXTENSIONS = {
    ".apk",
    ".pyc",
    ".log",
}

MAX_BACKUPS = 10

def get_description():
    """Get the one-sentence description of changes from arguments or interactive input."""
    # Check if passed via command line arguments
    if len(sys.argv) > 1:
        desc = " ".join(sys.argv[1:]).strip()
        if desc:
            return desc
            
    # Interactive prompt if not provided in CLI
    print("No backup description provided in command line arguments.")
    while True:
        try:
            desc = input("Please enter a one-sentence description of updates/changes: ").strip()
            if desc:
                return desc
            print("Description cannot be empty. Please try again.")
        except (KeyboardInterrupt, EOFError):
            print("\nBackup cancelled by user.")
            sys.exit(1)

def backup_ignore(directory, contents):
    """Custom ignore function for shutil.copytree to filter out unwanted folders/files."""
    ignored = []
    for item in contents:
        # Check against folder/file patterns
        if item in EXCLUDE_PATTERNS:
            ignored.append(item)
            continue
            
        # Check file extension
        _, ext = os.path.splitext(item)
        if ext.lower() in EXCLUDE_EXTENSIONS:
            ignored.append(item)
            continue
            
    return ignored

def run_backup():
    # 1. Get description of changes
    description = get_description()
    
    # 2. Generate version name using YY.MM.DD_HHMMSS format
    now = datetime.datetime.now()
    version_name = now.strftime("%y.%m.%d_%H%M%S")
    print(f"\nStarting backup sequence for version: {version_name}")
    print(f"Description: \"{description}\"")
    
    # Ensure backups folder exists
    os.makedirs(BACKUPS_DIR, exist_ok=True)
    
    # 3. Define target destination directory
    dest_dir = os.path.join(BACKUPS_DIR, version_name)
    if os.path.exists(dest_dir):
        print(f"Error: Backup directory {version_name} already exists. Wait a second and try again.")
        sys.exit(1)
        
    # 4. Copy files using custom copytree ignoring build-tools, .git, builds, and APKs
    print("Copying project files (excluding large build caches, build-tools, git history, and APKs)...")
    try:
        shutil.copytree(WORKSPACE_DIR, dest_dir, ignore=backup_ignore, symlinks=True)
        print(f"Successfully copied project files to: {dest_dir}")
    except Exception as e:
        print(f"Error occurred during file copying: {e}")
        # Clean up partial directory if copying failed
        if os.path.exists(dest_dir):
            shutil.rmtree(dest_dir)
        sys.exit(1)
        
    # 5. Read existing version log and update it
    log_entries = {}
    if os.path.exists(VERSION_LOG_FILE):
        try:
            with open(VERSION_LOG_FILE, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if not line:
                        continue
                    if ":" in line:
                        parts = line.split(":", 1)
                        v_key = parts[0].strip()
                        v_desc = parts[1].strip()
                        if VERSION_PATTERN.match(v_key):
                            log_entries[v_key] = v_desc
        except Exception as e:
            print(f"Warning: Could not read existing versionlog.txt: {e}")
            
    # Add new entry
    log_entries[version_name] = description
    
    # 6. Check rotation: Find all versioned backup directories on disk
    existing_backups = []
    for item in os.listdir(BACKUPS_DIR):
        item_path = os.path.join(BACKUPS_DIR, item)
        if os.path.isdir(item_path) and VERSION_PATTERN.match(item):
            existing_backups.append(item)
            
    # Sort backups chronologically (oldest to newest)
    existing_backups.sort()
    
    # Rotate if count exceeds limit
    if len(existing_backups) > MAX_BACKUPS:
        to_delete_count = len(existing_backups) - MAX_BACKUPS
        print(f"\nFound {len(existing_backups)} backups. Maximum allowed is {MAX_BACKUPS}.")
        print(f"Pruning {to_delete_count} oldest backup(s)...")
        
        for i in range(to_delete_count):
            oldest_backup = existing_backups[i]
            oldest_path = os.path.join(BACKUPS_DIR, oldest_backup)
            print(f"Deleting older version directory: {oldest_backup}")
            try:
                shutil.rmtree(oldest_path)
                # Remove from log entries list
                if oldest_backup in log_entries:
                    del log_entries[oldest_backup]
            except Exception as e:
                print(f"Warning: Failed to delete {oldest_path}: {e}")
                
        # Re-fetch active backups to update log entries accurately
        existing_backups = existing_backups[to_delete_count:]
        
    # Write updated logs back to versionlog.txt (sorted reverse-chronologically: newest on top)
    try:
        # Filter entries to only write active ones present on disk
        active_entries = {k: v for k, v in log_entries.items() if k in existing_backups or k == version_name}
        sorted_keys = sorted(active_entries.keys(), reverse=True)
        
        with open(VERSION_LOG_FILE, "w", encoding="utf-8") as f:
            for k in sorted_keys:
                f.write(f"{k}: {active_entries[k]}\n")
        print("Updated versionlog.txt successfully.")
    except Exception as e:
        print(f"Error writing to versionlog.txt: {e}")
        
    print("\nBackup protocol completed successfully!")

if __name__ == "__main__":
    run_backup()
