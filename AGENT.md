# Matteo's Learning Hub - Core Developer Guidelines (AGENT.md)

Welcome! This document is the single source of truth for the developer environment, architecture rules, and safety boundaries of Matteo's Learning Hub.

---

## 📌 1. Project Overview & Target Audience
* **Name**: Matteo's Learning Hub
* **Target Audience**: Grade 1 to Grade 3 learners in the Philippines, and their parents.
* **Core Curriculum**: DepEd MATATAG Curriculum (Math, Science, English, Filipino, Makabansa, GMRC).
* **Tech Stack**: Vanilla HTML5, CSS3, and modular ES6 Javascript. Executed inside a standard Android WebView via Cordova/Gradle packaging. No frameworks (React/Vue/Tailwind) allowed.

## 🛍️ 2. Business & Unlock Model
* **Monetization**: Physical scratch card packages sold exclusively via Shopee Philippines.
* **Unlock Mechanism**: Parents enter a unique order/unlock code during onboarding to access lessons.
* **Rule**: No alternative payment methods (Stripe, Play Store IAP) are permitted.

## 📺 3. Architectural Boundaries (Touch-Only)
> [!WARNING]
> **Android TV layout and D-Pad keyboard event handling are completely deprecated and deleted.**
> The app must remain exclusively a touch-based tablet and mobile experience. Do not re-implement sticky sidebars or TV navigation.

## 📱 4. Key UX/UI Design Principles
* **Color Themes**: Warm Cream/Yellow palette for Light Mode, Deep Starry Sky/Constellations for Dark Mode.
* **Fonts**: Outfit (headers, buttons) and Inter (body content).
* **Touch Targets**: Min 48px x 48px, optimized for children's motor skills. Use bouncing click animations.
* **Mascot (Tobi)**: Tobi the owl has idle breathing, hover bouncing, and success celebration animations.
* **Relative Font Scaling**: Font scale buttons (`[A-]`, `[Reset]`, `[A+]`) scale the competencies modal text size relative to its stylesheet bases, and reset upon closing.
* **Bilingual Translation**: Translation buttons must only show when the active subject is Filipino, Makabansa, or GMRC. The lessons/readings use `data-translation` spans for tap-to-translate.

## 🛠️ 5. Development & Code Conventions
* **Monolithic Splitting**: All rendering screens are split into separate scripts under `modules/` (e.g., `modules/studyguide.js`, `modules/quiz.js`, etc.) and loaded in order in `index.html`.
* **State Persistence**: Progress, high scores, coins, wardrobe outfits, settings (theme, font scale, audio) are stored in `localStorage` via the `safeStorage` wrapper, or IndexedDB for custom background music.
* **File Renaming**: When editing any core files, rename the original version to `basename_old.extension` first to maintain backup history.
* **Parental Gates**: Settings adjustments, progress resets, and reports are locked behind a parent PIN gate (recovering PIN triggers a multiplication math puzzle).
* **Image Prompts**: Weekly visual diagram prompts are sent directly to the generator with standard negative tags (`text, words, labels, 3D, photorealistic, watermarks`) only, allowing rich scenic backgrounds.
* **80-150 Word Rule**: Each study guide slide must have between 80 and 150 words of rich student-facing text without linebreaks.
* **Automated Gates**: All code changes must pass validation gates: uniqueness checks (`unique.py`) and database schema verification (`validate_db.py`).
