# Matteo's Learning Hub - Quality Control Standards (Moon Standards)

This document establishes the official quality gate guidelines for development and integration within **Matteo's Learning Hub**. All changes, modifications, and updates must pass these standards before the code is compiled, tested, or deployed.

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
    --bg-gradient: radial-gradient(circle at top left, #0f172a, #020617);
    --bg-card: rgba(30, 41, 59, 0.45);
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
  }
  body.light-mode {
    --bg-gradient: radial-gradient(circle at top left, #f8fafc, #e2e8f0);
    --bg-card: rgba(255, 255, 255, 0.85);
    --text-main: #0f172a;
    --text-muted: #64748b;
  }
  ```
* **Readability Gate**:
  * Main text in dark mode must use bright colors (e.g. `#f8fafc` or higher) to avoid low contrast.
  * Main text in light mode must use dark charcoal (e.g. `#0f172a` or `#1e293b`).
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
  * `background2.mp3` / `background5.mp3` (ambient study music)

### B. Parental Control Security
* Access to settings, resets, and dashboards must be secured with the Parent PIN.
* The forgot PIN recovery multiplication puzzle (e.g. `num1 * num2` challenge proving adult user) must remain operational.

### C. Bilingual Translation Tags
* The Filipino and Makabansa modules must have responsive English/Filipino translation features.
* All daily and weekend reading slides must contain high-density `<span data-translation="...">` spans (minimum 6 per day) for tap-to-translate functionality.

---

## 📚 5. Curriculum & Study Guide Standards
To maintain high educational quality and detail across all modules, the weekly content databases must follow these guidelines:

### A. Slide Content Length (8-Line Rule)
* **Requirement**: Each study guide slide (`slides` array objects) must contain at least eight (8) lines of rich, detailed, student-facing content in the `text` field (approximately 40 to 60 words).
* **Scope**: This rule applies universally to all subjects: Mathematics, Science, English, Filipino, Makabansa, and GMRC.
* **Goal**: This prevents brief, superficial definitions and ensures children receive thorough, narrative explanations, real-world examples, and step-by-step guidance.

### B. Student-Facing Active Pedagogy
* No teacher-facing instructions or pedagogical meta-talk.
* Explain abstract principles using concrete physical observations and everyday local analogies.
* Incorporate SSES (Special Science Elementary School) extension tasks and HOTS (Higher-Order Thinking Skills) questions directly into standard and challenge quizzes.

