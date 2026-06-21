#!/bin/bash
# Automatically commit and push modified weekly data and images to GitHub

WORKSPACE_DIR="/home/moondae/Antigravity Projects/Matts Files_apk"
cd "$WORKSPACE_DIR"

# Check if there are changes in data/ or images/
CHANGES=$(git status --porcelain data/ images/)

if [ -n "$CHANGES" ]; then
    echo "=== Changes detected in data/ or images/ ==="
    echo "$CHANGES"
    
    # Configure local git user info if not already set
    git config --local user.name "iammoondae"
    git config --local user.email "iam.moondae@gmail.com"
    
    # Stage, commit and push
    git add data/ images/
    git commit -m "Auto-update weekly data and images: $(date +'%Y-%m-%d %H:%M:%S')"
    git push origin main
    echo "=== Successfully pushed updates to GitHub ==="
else
    echo "No modifications detected in data/ or images/."
fi
