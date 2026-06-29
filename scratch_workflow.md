# MLH Workflow Guide

1. **Syllabus Prep**: Place DepEd MATATAG curriculum PDFs in `syllabus/grade 3/`.
2. **Compile Database**: Run `python3 scratch/generate_g3_all_subjects.py` to compile `data/sources/g3/` templates into `data/g3/week{1-4}.json`. This shuffles quiz options, pads slides to 25, expands word count (80–150), and updates `manifest.json`.
3. **Generate Assets**: Run `python3 scratch/generate_all_diagrams.py` to output 72 PNG diagrams in `images/`.
4. **Validation Gate**: Run `python3 scratch/validate_db.py` to verify JSON integrity, slide length constraints, text uniqueness, and quiz distribution.
5. **Sync Assets**: Run `bash scratch/push_data.sh` to commit and push `data/` and `images/` to GitHub.
6. **Package APK**: Run `bash scratch/build_apk.sh` to copy frontend assets to assets directory, exclude large images, inject version metadata, and compile via `./gradlew assembleDebug`.
7. **Commit Code**: Push all codebase additions and releases to GitHub repository.
