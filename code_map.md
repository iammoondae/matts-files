# Matteo's Learning Hub - Codebase Mapping & Debug References

This index maps the main architectural structures, settings systems, layouts, and logic components across the codebase. Developers and AI assistants should refer to these lines/sections directly for debugging and edits.

---

## 📱 1. Web Frontend Layer

### A. Main HTML Layout (`index.html`)
* **File Path**: [index.html](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/index.html)
* **Key Components**:
  * **Confetti Canvas**: Line 18 (`#confetti-canvas`)
  * **Sidebar Navigation**: Lines 20-82 (`#sidebar-nav`) - includes level selector, week selector, learning modes list, subject keys, and diagnostic report buttons.
  * **Main Content Area**: Lines 87-137 (`main.content`) - includes toolbar header, subject title wrapper, action toggles, main viewer card (`#viewer-card`), progress bar, and slide controllers footer (`#viewport-footer`).
  * **Settings Drawer**: Lines 140-317 (`#settings-drawer`) - includes nickname profile input, grade levels, avatar image upload, light mode slider, background music toggle, custom audio upload, accessibility global font scales, weekly schedule table, parental PIN config, and account sign-out panel.
  * **Onboarding Overlay**: Lines 320-341 (`#onboarding-overlay`) - shown to new users to prompt profile naming.
  * **Parents PIN Modal**: Lines 344-380 (`#parents-pin-modal`) - custom numerical keypad lock screen with PIN reset link.
  * **Competencies Modal**: Lines 382-401 (`#competencies-modal`) - accessibility font controls (`[A+]`, `[A-]`, `[Reset]`) and content body.
  * **Wardrobe & Shop Modals**: Lines 416-444 (`#hub-shop-modal` and `#mascot-wardrobe-modal`)
  * **Game Play Window**: Lines 446-457 (`#game-play-modal`) - holds canvas areas for interactive learning games.
  * **Mascot Interaction Modal**: Lines 459-480 (`#mascot-interactive-modal`) - dialog bubble for character feedback.

### B. Core Styling System (`index.css`)
* **File Path**: [index.css](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/index.css)
* **Key Components**:
  * **Default (Dark) variables**: Lines 1-25 (`:root`) - defines default variables for gradients, border cards, primary colors, and subject variables.
  * **Light mode overrides**: Lines 27-36 (`body.light-mode`) - overrides background gradients, borders, and text colors.
  * **Global Body & Reset**: Lines 38-54
  * **Sidebar navigation**: Lines 56-137 (`nav.sidebar`)
  * **Advanced mode amber styles**: Lines 138-148
  * **Select/Dropdowns styling**: Lines 149-213
  * **Mode tabs & navigation buttons**: Lines 214-295
  * **Viewer Card**: Lines 412-450 (`.viewer-card`)
  * **Slide transition effects**: Lines 451-503 (includes `.example-box`)
  * **Quiz controls & buttons**: Lines 504-606 (includes choice selection buttons with correct/incorrect feedback states)
  * **Blank inputs & submit**: Lines 607-641
  * **Rubric rating sliders**: Lines 642-690 (`.rubric-slider`)
  * **Review Panel**: Lines 745-798

### C. Client Script Engine (`app.js`)
* **File Path**: [app.js](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/app.js)
* **Key Components**:
  * **Global states**: Lines 50-200 (includes PIN buffers, nicknames, theme configs, wallet coins, levels, modes, and subjects).
  * **Session Restorers**: Lines 365-385 (retrieves saved themes, volume configurations, and loads active week session data).
  * **Theme Helpers**: Lines 423-435 (`updateThemeColorMeta`) and Lines 2568-2580 (`toggleTheme`).
  * **Mascot Interface**: Lines 170-178 and Lines 3918-3957 (`interactMascotDashboard`).
  * **Touch Gestures Engine**: Lines 1886-1920 (`setupSwipeGestures`) - registers swipe event listeners to handle horizontal page flips for study/reading cards.
  * **Bilingual Translation**: Lines 2529-2547 (`toggleTranslation` & `toggleTranslationHeader`) - toggles class `show-translation` on body elements.
  * **Worksheet Mark / Parent Gate**: Lines 2548-2565 (`toggleWorksheetAnswers` & `applyWorksheetAnswersVisibility`).
  * **Parent PIN Validation**: Lines 4030-4113 (`tryOpenParentDashboard`, `showPinModal`, `validateEnteredPin`).
  * **Forgot PIN Arithmetic Gate**: Lines 4114-4134 (`handleForgotPin`) - prompts user with multiplication equation to verify age and resets PIN to default (`0000`).
  * **Parent Dashboard & Remediation**: Lines 4186-4455 (`renderParentDashboard`) - reports user quiz history, compiles worksheet override checkboxes, logs mistake databases, and lists remediation triggers.
  * **Competencies Modal Font scaling**: Lines 7568-7580 (`adjustCompetenciesFontSize`) - scales fonts between `0.7` and `2.0` dynamically inside the modal block.

---

## 🤖 2. Native Android Platform Layer

### A. Login Activity (`LoginActivity.kt`)
* **File Path**: [LoginActivity.kt](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/android-project/app/src/main/java/dev/matteo/learninghub/LoginActivity.kt)
* **Key Components**:
  * **Firebase Initializers**: Lines 50-79 (configures Google Sign-in API options and references button views).
  * **Google Login**: Lines 90-130 (`signInWithGoogle` intent launchers, `onActivityResult` handlers, and Firebase credential exchanges).
  * **Email Login/Signup Dialog**: Lines 134-261 (`showEmailDialog`) - toggles dialog layout, validates fields, and invokes `createUserWithEmailAndPassword` or `signInWithEmailAndPassword`.
  * **Guest Anonymous Entrance**: Lines 265-292 (`showGuestWarning` and `signInAsGuest`).
  * **Firestore Profile Sync**: Lines 296-310 (`saveUserProfile`).
  * **System UI overrides**: Lines 335-360 (`hideSystemUI`).

### B. Main Activity WebView Handler (`MainActivity.kt`)
* **File Path**: [MainActivity.kt](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/android-project/app/src/main/java/dev/matteo/learninghub/MainActivity.kt)
* **Key Components**:
  * **WebView settings overrides**: Lines 45-68 - enables DOM storage, allows file access protocols, overrides universal file scheme CORS check.
  * **JavaScript Interface Binding**: Line 70 (`mWebView.addJavascriptInterface(AuthBridge(), "AndroidAuth")`)
  * **URL redirect handlers**: Lines 72-92 (WebView override protocols directing external requests to mobile browser intents).
  * **WebView Resource permissions**: Lines 94-97 (`onPermissionRequest` - grants Web resource permissions for features like audio input/camera).
  * **Local File Upload interface**: Lines 99-121 (`onShowFileChooser`).
  * **Guest Banner Controller**: Lines 132-158 (`setupGuestBanner`).
  * **AuthBridge API**: Lines 174-224 - functions called directly by WebView JavaScript to retrieve UID, nickname, login status, or trigger native Firebase logout.

---

## ⚙️ 3. Quality Gate & Context Layer

### A. Alignment Reference (`master_context.md`)
* **File Path**: [master_context.md](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/master_context.md)
* **Role**: Primary context store defining curriculum alignment, unlock card logic, and Android TV removal.

### B. Database Validator (`validate_db.py`)
* **File Path**: [validate_db.py](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/scratch/validate_db.py)
* **Role**: Python script verifying completeness and JSON structure of subject weeks.
