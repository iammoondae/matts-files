import os

text = """# Matteo's Learning Hub - Full Development & Integration Workflow Guide

This document defines the official end-to-end development, compilation, validation, asset management, and build workflow for **Matteo's Learning Hub** (MLH). Following these steps, specifications, requirements, and rules is mandatory to maintain codebase health, prevent regression of functional features, and enforce the strict quality gates (Moon Standards) established for the platform.

---

## 1. Syllabus Prep & Curriculum Inputs

### A. Major Steps
1. Collect the official Department of Education (DepEd) MATATAG curriculum framework documents and Budget of Work (BOW) guides for target grade levels.
2. Extract the weekly learning competencies, key terms, instructional goals, and recommended activities from the documents.
3. Convert curriculum items into structured raw source data templates (JSON formats) under `data/sources/g3/` for Grade 3 (separated by subjects: math, science, english, filipino, makabansa, gmrc, and their respective advanced tracks).
4. Store the official PDF reference files in `syllabus/grade 3/` for developer documentation and manual verification.

### B. Specifications & Formats
* **Official PDFs & Templates**: Curriculum guides and BOWs stored in `syllabus/grade 3/` (e.g. `G3 BOW Science 3 - Three-Term.pdf`). JSON source templates placed in `data/sources/g3/<subject>/week{1-4}.json` with mirrored +2 grade level tracks in `_advanced` subfolders.
* **Content Mapping**: All database items align with Grade 3 learning goals. Advanced tracks mapped to +2 grade difficulties to stretch learners.

### C. Requirements & Guidelines
* **Bilingual & Production Contexts**: Math/science must be English-based; Filipino/Makabansa/GMRC must use local Cotabato/B'laan context. All template contents must be production-ready and free of placeholders or TODO comments.
* **DepEd Alignment Rules**: All competencies must follow the official DepEd syllabus mappings for Grade 3. Pedagogy must avoid meta-talk and explain abstract ideas using concrete everyday examples.

---

## 2. Database Compilation & Merging Engine

### A. Major Steps
1. Execute the database compiler script: `python3 scratch/generate_g3_all_subjects.py`.
2. The compiler script reads raw source templates from `data/sources/g3/` and compiles them.
3. It merges the compiled subject-week datasets with the existing weekly database files located at `data/g3/week{1-4}.json`.
4. The script applies slide padding engines, word-count expansion helpers, translation span safeguards, and quiz option shufflers.
5. It auto-updates the Grade 3 manifest file `data/g3/manifest.json` with the latest generated timestamp version and the complete registered list of all required image filenames.

### B. Compilation Specifications
* **Database Outputs & Manifest**: Weekly databases output to `data/g3/week{1-4}.json`. Manifest `manifest.json` tracks `"version"` (`YYYY.MM.DD.HHMM`), `"weeks"` (`[1, 2, 3, 4]`), and `"images"` array.

### C. Requirements & Quality Rules
* **Quality Constraints**: Exactly 25 slides per week. Slide texts must be 80-150 words of continuous single-line content (no newline characters) to allow text wrapping, programmatically padded if short using examples. Filipino/Makabansa/GMRC must contain at least 20 translation tags (`data-translation` spans). MCQ choices are shuffled at compile time to balance answer indices.

---

## 3. Professional Diagram Assets Generation

### A. Major Steps
1. Run the PIL-based image generator script `python3 scratch/generate_all_diagrams.py`.
2. The script programmatically renders and outputs vector-style, high-contrast, professional educational diagram PNG files directly into the `images/` folder.
3. For math subjects, the script renders place value charts, line relationships, and grid visuals. For science, it renders states of matter transitions, scale measurements, density tilts, and anatomy schematics.
4. If image updates or modifications are needed, manually run `python3 scratch/resize_images.py` to compress, scale, or transparentize assets.

### B. Image Specifications
* **Image Files**: Named `{subject}_w{week}_img{1-5}.png` in PNG format, located in `/home/moondae/Antigravity Projects/Matts Files_apk/images/`.

### C. Requirements & Style Rules
* **Image Rules**: Exactly 5 unique professional vector-style diagrams per subject-week. Cartoon drawings or cluttered illustrations are forbidden. Diagrams must align coordinates correctly (e.g. density tilts, phase change boxes) and wrap infographic text.

---

## 4. Validation Gate & Quality Control Checkers

### A. Major Steps
1. Run the codebase and database validator script: `python3 scratch/validate_db.py`.
2. The validator script automatically checks the codebase files against the Moon Standards and verifies structural integrity.
3. The script internally invokes `python3 scratch/unique.py` to check for text duplicates and answer key distributions.
4. If any rule is violated, the script prints details to stderr and terminates with exit code 1, blocking the build. If all pass, it exits with code 0.

### B. Validation Rules & Gates
* **Gates**: Subject-weeks require: 25 slides, 25 standard/quiz Qs, 5 challenge Qs, 3 worksheet pages with `.ws-answer` class, and 1 performance task (type `"performance"`, title, desc, 3 rubrics).
* **Scanner Rules**: Rejects `"Advanced"` prefixes/suffixes in subject titles, subtitles, slide titles, texts, and examples.
* **Uniqueness Rules**: Sentences (6+ words) must be unique across slides. MCQ correct indices must have less than 50% skew (size >= 10) or 70% skew (size < 10) to prevent guess-patterns.
* **Bilingual Translation Tag Count**: Filipino/Makabansa/GMRC must have 20 weekly translations (6 per weekend reading day). All referenced image files must exist in the images folder.
* **Onboarding & Theme Gates**: Onboarding logic in `LoginActivity.kt` (Google, Email, Guest) and theme configurations (dark default, CSS variables) in `index.css`/`app.js` must be fully functional.

---

## 5. Data Synchronization & Remote Deployment

### A. Major Steps
1. Execute the synchronizer script: `bash scratch/push_data.sh`.
2. The script runs `git status` on the `data/` and `images/` directories.
3. If changes are detected, it configures local git credentials for the deployment profile.
4. The script stages the updated databases and diagram files, commits them with an automated timestamp message, and pushes the commit directly to the remote GitHub repository.

### B. Deployment Specifications
* **Sync & Specs**: Runs `push_data.sh` to status check, stage, commit, and push `data/` and `images/` modifications to `origin main` using profile `"iammoondae"` / `"iam.moondae@gmail.com"`. Checks remote version to prevent redundant update downloads.

---

## 6. Android Package Compilation & Versioning Pipeline

### A. Major Steps
1. Execute the packaging script: `bash scratch/build_apk.sh`.
2. The script runs `validate_db.py` as a pre-build quality gate check.
3. It cleans previous assets and creates a fresh WebView assets folder at `android-project/app/src/main/assets/`.
4. The script calculates a dynamic version number (e.g. `v26.06.29.2104`) based on current local system clock and date.
5. It copies HTML, CSS, JS, audio, database, worksheet, and mascot image files into the assets folder.
6. The script excludes large weekly diagrams from the assets folder to keep the APK file small (they are fetched from GitHub instead).
7. It replaces `__APP_BUILD_VERSION__` and `__APP_BUILD_DATE__` placeholders in `app.js` with the dynamic version.
8. It updates the `versionName` property inside `android-project/app/build.gradle`.
9. Finally, the script executes `./gradlew clean` followed by `./gradlew assembleDebug` in the Android project.
10. The compiled APK is copied to the workspace root and renamed using the release version.

### B. Build Specifications & Compilation Rules
* **Compilation Rules**: JDK 17 and Android SDK build tools are required. Cleans gradle caches and builds versioned APK and `app-debug.apk` to workspace. Excludes weekly slide diagrams from assets directory to keep package sizes small (fetched remotely). WebView settings in `MainActivity.kt` must allow DOM storage and file schema CORS access.

---

## 7. Codebase Commitment & Release Protocol

### A. Major Steps
1. Verify that the Android build output completed successfully and `app-debug.apk` is updated.
2. Review local file changes using `git status`.
3. Stage all modified code, config files, and the compiled APK versions.
4. Commit the changes with a detailed commit message referencing the dynamic build version.
5. Push the commit to the main branch of the GitHub repository.

### B. Release Specifications & Commit Rules
* **Commit Rules**: Commit final codebase assets and APK updates to main branch. Re-check Android TV D-pad deprecation, confirm `code_map.md` lines are updated for code changes, and ensure PIN gates remain functional.
"""

raw_words = len(text.split())
print(f"Raw word count: {raw_words}")

# Save the file
filepath = "/home/moondae/Antigravity Projects/Matts Files_apk/scratch_workflow_exp.md"
with open(filepath, "w", encoding="utf-8") as f:
    f.write(text)
print("File written successfully!")
