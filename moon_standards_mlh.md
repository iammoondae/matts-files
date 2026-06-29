# Matteo's Learning Hub - Quality Control Standards (Moon Standards)

This document establishes the official quality gate guidelines for development and integration within **Matteo's Learning Hub**. All changes, modifications, and updates must pass these standards before the code is compiled, tested, or deployed.

---

## 📋 0. General Development & Plan Standards
* **Implementation Plan Quality Rule**: In every implementation plan, the developer/AI assistant must always check the Moon Standards to ensure full compliance. This check is mandatory before execution starts.
* **Image Generation & Approval**: The developer/AI assistant must explicitly inform the user when image generation has completed, specifying the directories where the images are saved, and request approval before proceeding with final integration or packaging.
* **Direct Image Prompt Rule**: Weekly image generation prompts must be passed directly to the generator exactly as defined in the prompts database, with no additional hidden global style rules or wrapper layers. The prompt must be a direct visual interpretation of the slide description, and the negative prompt must only contain standard exclusions (`text, words, letters, numbers, labels, 3D, photorealistic, watermarks`) without over-constraining terms like "shadows" or "busy background" to allow for rich, cozy, and detailed backgrounds where appropriate (like bedrooms or scenic lakes).

---

## 🔒 1. Onboarding & Login Standards
The application is a hybrid Android app powered by Firebase Authentication. To maintain full cross-device capability and seamless user access, four (4) distinct onboarding login options must remain implemented, functioning, and un-compromised:

### A. Google Sign-In
* **Implementation Requirement**: Must use native `GoogleSignInOptions` and exchange token ID credentials (`GoogleAuthProvider.getCredential(idToken, null)`) with `FirebaseAuth`.
* **Configuration**: The `default_web_client_id` client credential must be correctly configured in res values.

### B. Email Login
* **Implementation Requirement**: Must support email/password sign-in using `auth.signInWithEmailAndPassword(email, password)`.
* **Validation**:
  * Mandatory validation of email syntax patterns (`Patterns.EMAIL_ADDRESS`).
  * Explicit validation of password length (minimum 6 characters).
* **Feedback**: Friendly dialog error messages when authentication fails (e.g. incorrect password, user not found).

### C. Sign Up
* **Implementation Requirement**: Must support account creation using `auth.createUserWithEmailAndPassword(email, password)`.
* **User Profile**: Profile initialization must successfully save metadata (email, displayName, registration timestamp) into the Firestore `users` collection.

### D. Guest Mode (Anonymous Sign-In)
* **Implementation Requirement**: Must support anonymous entry using `auth.signInAnonymously()`.
* **User Warning**: A warning dialog must show explaining that progress is local-only and will be lost on uninstall/device switch unless they sign in later.

---

## 🎨 2. Theme & Accessibility Standards
The app must support a fully responsive, high-contrast, premium light/dark layout. Dark mode is the application's default state.

### A. Theme Mappings
* **CSS Custom Properties**: Global styles must use CSS variables mapping color tokens under `:root` (dark mode) and `body.light-mode` overrides.
  ```css
  :root {
    --bg-gradient: radial-gradient(circle at top left, #090e1f, #020409);
    --bg-card: rgba(18, 25, 47, 0.65);
    --text-main: #f1f5f9;
    --text-muted: #94a3b8;
  }
  body.light-mode {
    --bg-gradient: radial-gradient(circle at top left, #fdfbf7, #f5eccf);
    --bg-card: rgba(255, 255, 255, 0.82);
    --text-main: #3e3223;
    --text-muted: #7d6e5a;
  }
  ```
* **Readability Gate**:
  * Main text in dark mode must use bright colors (e.g. `#f1f5f9` or higher) to avoid low contrast.
  * Main text in light mode must use dark charcoal (e.g. `#3e3223` or `#1e293b`).
  * Text element contrast must satisfy high readability (WCAG AA standard guidelines) on all backgrounds.

### B. Transition Mechanics
* Theme toggles must execute smoothly without layout shift.
* The state of the selected theme must persist across restarts using the local storage key `session_theme`.

---

## 🌍 3. Global Context Guidelines
To ensure all AI models, coding assistants, and engineers maintain complete strategic alignment, two reference files govern the context:

### A. Strategic alignment (`master_context.md`)
* The document [master_context.md](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/master_context.md) acts as the source of truth for:
  * DepEd MATATAG curriculum requirements (Mathematics, Science, English, Filipino, Makabansa, GMRC).
  * Shopee Philippines physical card unlock codes monetization path.
  * Complete deprecation and removal of Android TV D-pad keyboard navigation.

### B. Codebase Index (`code_map.md`)
* The document [code_map.md](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/code_map.md) provides exact line mappings for key functions (e.g. swipe gestures, PIN recovery, settings, Firebase auth client overrides).
* **AI Rule**: If a code symbol or region is not found in `code_map.md`, developers must locate it elsewhere in the workspace and immediately append it to `code_map.md` to avoid full-file read operations in future sessions.

---

## 📦 4. Asset & Functional Integrity Standards

### A. Core Assets Presence
* The following files must be present at all times to prevent crash exceptions:
  * `icon.png` (app/profile launcher logo)
  * `correct.wav` / `incorrect.wav` (interactive quiz feedback SFX)
  * `background5.mp3` (ambient study music)

### B. Parental Control Security
* Access to settings, resets, and dashboards must be secured with the Parent PIN.
* The forgot PIN recovery multiplication puzzle (e.g. `num1 * num2` challenge proving adult user) must remain operational.

### C. Bilingual Translation Tags
* The Filipino, Makabansa, and GMRC modules must have responsive English/Filipino translation features.
* All daily and weekend reading slides must contain high-density `<span data-translation="...">` spans (minimum 6 per day) for tap-to-translate functionality.
* Every text line and HTML element in Filipino, Makabansa, and GMRC (including slide titles, slide examples, worksheets, and performance tasks) must contain bilingual English translations.

---

## 📚 5. Curriculum & Study Guide Standards
To maintain high educational quality and detail across all modules, the weekly content databases must follow these guidelines:

### A. Slide Content Length (80-150 Word Rule)
* **Requirement**: Each study guide slide (`slides` array objects) must contain between 80 and 150 words of rich, detailed, student-facing content in the `text` field.
* **Scope**: This rule applies universally to all Grade 3 subjects: Mathematics, Science, English, Filipino, Makabansa, and GMRC.
* **Goal**: This prevents brief, superficial definitions, ensures thorough narrative explanations, and guarantees rich, comprehensive reading material for the student.
* **Slide Uniqueness**: All slide content must be unique, contextually rich, and directly relevant to the topic. Static padding sentences, boilerplate text, or repeated placeholder paragraphs are strictly prohibited.
* **Paragraph Wrap**: The slide text must be formatted as a continuous block of text without separating sentences into new lines (no newlines). The slide paragraph element `.slide-card-inner p` should wrap normally to display as a unified block of text.

### B. Student-Facing Active Pedagogy
* No teacher-facing instructions or pedagogical meta-talk.
* Explain abstract principles using concrete physical observations and everyday local analogies.
* Incorporate SSES (Special Science Elementary School) extension tasks and HOTS (Higher-Order Thinking Skills) questions directly into standard and challenge quizzes.

### C. Database Completeness & Validation Checks (Gate Checks)
To ensure complete and error-free content delivery, the database validation compiler and checks (`validate_db.py`) enforce the following gates for Grade 3 (Weeks 1-4) subjects:
* **Completeness of Learning Modes**: Each subject must define all 5 interactive modes:
  * `slides`: exactly 25 slides, each containing 80 to 150 words of text.
  * `standard` (or `quiz`): exactly 25 questions.
  * `challenge`: exactly 5 questions.
  * `worksheet`: exactly 3 pages.
  * `performance`: exactly 1 parent-graded performance task.
* **Performance Task Schema**: The performance task block must be a valid JSON dictionary containing:
  * `"type": "performance"`
  * Non-empty `"title"` and `"desc"` strings.
  * `"labels"`: an array containing at least 3 parent/teacher-scoring rubric labels.
* **Worksheet Answer Elements**: Every worksheet page HTML string must contain at least one `.ws-answer` class element (e.g. `<span class="ws-answer">...</span>`) to store correct answer keys and facilitate parent grading features.
* **Bilingual Translation Density**: The `filipino`, `makabansa`, and `gmrc` databases must contain a minimum of 20 `data-translation` spans per week to ensure comprehensive English-Filipino bilingual support.
* **Quiz/Challenge Answer Fields**: Every quiz and challenge question must contain a valid, non-empty `"answer"` value matching its correct option/choice index or text input.
* **Forbidden 'Advanced' Remarks & Prefix Placeholders**: Subject titles, subtitles, individual slide titles, slide texts, and all example fields (titles and contents) must never include brackets/suffix remarks like `(Advanced)` or `[Advanced]` (case-insensitive). They are also strictly prohibited from containing prefix placeholders such as `Advanced math:`, `Advanced science:`, `Advanced english:`, `Advanced filipino:`, `Advanced makabansa:`, `Advanced gmrc:`, `Advanced analysis:`, or `Advanced analysis is required:` (case-insensitive). All content must remain clean, student-facing, and fully integrated.
* **Professional Diagram Images**: Each subject-week in all Grade 3 databases must contain exactly 5 unique educational images referenced in its slides, and all referenced image files must exist on disk in the `images/` directory. All images must be professional, clear, vector-style diagrams, schematics, or charts (non-cartoonish) that support learning.

---

## 🔄 6. Database Update & Synchronization Standards
* **Version comparison**: The update system (onboarding and settings button) must fetch the remote `manifest.json` first and compare its `version` field with `localStorage.getItem('local_' + learnerGrade + '_manifest_version')`.
* **Conditional Download**: Redundant downloads are prohibited. If the versions match, the app must report "There is no available update." and stop execution.
* **State Updates**: Upon successful download of weekly topic JSON databases, the local storage manifest version key must be updated to match the remote version.

---

## 📂 7. Project Backup and Versioning Standards
* **Backup Trigger**: A developer or AI agent must run `python3 backup.py "<one-sentence description>"` before implementing significant architectural changes, content refactoring, or compiling release-ready APK packages.
* **Version String Format**: The backup protocol must name directories strictly in the format `YY.MM.DD_HHMMSS` (representing local system time, e.g., `26.06.30_213351`).
* **Rotation Policy**: The active backups count is strictly capped at a maximum of 30. Older backup directories must be automatically deleted once this capacity is exceeded.
* **Log Documentation**: Every backup must log its version and its description in `backups/versionlog.txt`, sorted with the newest entries at the top. Pruned (deleted) versions must also be removed from this log to keep it synchronized with the directories on disk.
* **Backup Inclusions & Exclusions**:
  * **Excluded**: Large build caches and binaries (`.git/`, `backups/`, `build-tools/`, `android-project/.gradle/`, `android-project/app/build/`, and all output `*.apk` packages).
  * **Included**: All source assets, worksheets, HTML/CSS/JS files, database templates (`data/`), and static media assets (including audio files `background5.mp3`, `correct.wav`, `incorrect.wav` and mascot icons).
