# Matteo's Learning Hub - Codebase Mapping & Debug References

This index maps the main architectural structures, settings systems, layouts, logic components, and files across the codebase. Developers and AI assistants must refer to these lines/sections directly for debugging and edits.

---

## 📱 1. Web Frontend Layer

### A. Main HTML Layout (`index.html`)
* **File Path**: [index.html](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/index.html)
* **Key Components**:
  * **Confetti Canvas**: Line 18 (`#confetti-canvas`)
  * **Sidebar Navigation**: Lines 21-82 (`#sidebar-nav`) - academic level toggles, week dropdown selector, learning mode tabs, subject buttons, and parents dashboard buttons.
  * **Main Content Area**: Lines 88-137 (`main.content`) - toolbar headers, action toggles (Theme, Music, Update, Settings), viewer card viewport (`#viewer-card`), progress bar, and slide controllers footer (`#viewport-footer`).
  * **Settings Drawer**: Lines 141-317 (`#settings-drawer`) - profile avatar config, name inputs, light/dark slider, music toggles, font sliders, parent PIN changers, sign-out button, and updates checkers.
  * **Onboarding Overlay**: Lines 320-341 (`#onboarding-overlay`) - nickname profile naming screen for fresh installs.
  * **Parents PIN Modal**: Lines 344-380 (`#parents-pin-modal`) - custom numerical lock screen keypad with recover PIN link.
  * **Competencies Modal**: Lines 383-401 (`#competencies-modal`) - list of DepEd MATATAG competencies with accessibility scaling buttons.
  * **About Modal**: Lines 404-414 (`#about-modal`) - credits, curriculum statement, developer logs, and privacy statements.
  * **Wardrobe & Shop Modals**: Lines 417-444 (`#hub-shop-modal` and `#mascot-wardrobe-modal`) - shop layout grid and outfit selectors.
  * **Game Play Window**: Lines 447-457 (`#game-play-modal`) - dynamic canvas container for running educational games.
  * **Mascot Interaction Modal**: Lines 460-480 (`#mascot-interactive-modal`) - interactive dashboard feedback pop-up with motivational messages and quick actions.

### B. Core Styling System (`index.css`)
* **File Path**: [index.css](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/index.css)
* **Key Components**:
  * **Default (Dark) variables**: Lines 1-25 (`:root`) - color palette gradients, subject variables, sizes, and borders.
  * **Light mode overrides**: Lines 27-36 (`body.light-mode`) - overrides background gradients, borders, and text colors.
  * **Global Body & Reset**: Lines 38-54
  * **Sidebar Navigation styling**: Lines 55-137 (`nav.sidebar`)
  * **Advanced Level amber styles**: Lines 138-148 (`body.advanced-level`)
  * **Selector & Dropdowns**: Lines 149-213 (`.week-selector-wrapper select`)
  * **Mode selectors**: Lines 223-257 (`.mode-tabs`)
  * **Subject Selection Buttons**: Lines 258-295 (`.subject-buttons-list`)
  * **Main Content Area & header layouts**: Lines 296-349 (`main.content`)
  * **Custom switch toggles**: Lines 350-410 (`.toggle-container`)
  * **Viewer Card**: Lines 411-451 (`.viewer-card`)
  * **Examples container & boxes**: Lines 474-502 (`.example-box`)
  * **Slide footer controls**: Lines 503-547 (`.viewport-footer`)
  * **Quiz Choices Grid**: Lines 548-606 (`.choices-grid`)
  * **Blank inputs**: Lines 607-641
  * **Rubrics rating sliders**: Lines 642-690 (`.rubric-slider`)
  * **Summary view**: Lines 691-744 (`.summary-view`)
  * **Incorrect Answers Review box**: Lines 745-798 (`.review-panel`)
  * **Competency satisfaction checklist**: Lines 799-837 (`.checklist-card`)
  * **Canvas Confetti**: Lines 838-848 (`#confetti-canvas`)
  * **Bilingual translations**: Lines 849-902 (`.fil-phrase`)
  * **Sidebar responsiveness & mobile overrides**: Lines 903-1111 (`.menu-toggle-btn`)
  * **Worksheet paper layouts**: Lines 1112-1153 (`.worksheet-viewport`)
  * **Handwriting paper base lines**: Lines 1154-1203 (`.writing-line-svg`)
  * **Math Grid & drawing block**: Lines 1204-1228 (`.math-grid`)
  * **Worksheet tables**: Lines 1248-1344 (`.ws-table`)
  * **Priority review alert cards & grades table**: Lines 1345-1480 (`.priority-item`)
  * **Daily Reading & Pomodoro widgets**: Lines 1481-1696 (`.reading-container`, `.study-timer-widget`)
  * **Header action buttons & Settings panel styling**: Lines 1697-1921 (`.header-action-btn`, `.settings-drawer`)
  * **Onboarding overlay styling**: Lines 1922-2067 (`.onboarding-card`)
  * **Greeting card & weekly schedule widgets**: Lines 2068-2553 (`.home-greeting-card`, `.schedule-grid`)
  * **Mobile overrides**: Lines 2554-3674 (responsive media queries)

### C. Client Script Engine (`app.js`)
* **File Path**: [app.js](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/app.js)
* **Key Components**:
  * **Global configurations & thresholds**: Lines 43-49 (remote update URL, passing scores, school start date).
  * **Parents PIN security state**: Lines 50-61 (`isParentUnlocked`, `enteredPinBuffer`, `clearAllActiveNavButtons`).
  * **Pomodoro timer state & grade level modifiers**: Lines 62-78 (`timerSeconds`, `getLearnerGrade`, `getActiveGradeNumber`).
  * **IndexedDB music helper**: Lines 79-138 (`musicDB`).
  * **Global APP states**: Lines 139-187 (week, subject, mode, slide variables, coins, wardrobe states).
  * **Sidebar navigation controllers**: Lines 188-209 (`toggleSidebar`, `closeSidebar`).
  * **Grade level modifiers**: Lines 210-221 (`setLevel`).
  * **Profile settings and avatar uploader**: Lines 222-344 (`updateProfileName`, `handleProfilePicUpload`, `removeProfilePic`).
  * **On startup settings loader**: Lines 345-422 (`loadSettings`).
  * **Theme managers**: Lines 423-431 (`updateThemeColorMeta`) and Lines 2556-2567 (`toggleTheme`).
  * **Pomodoro timer handlers**: Lines 432-519 (`formatTime`, `updateTimerUI`, Pomodoro ticks).
  * **Calendar alignment checkers**: Lines 1000-1034 (`getTodayAcademicWeek`, `checkDateWeekAlignment`).
  * **Curriculum database loader**: Lines 1035-1120 (`loadWeekData`).
  * **Review data loaders**: Lines 1121-1180 (`loadReviewData`).
  * **Unified completion checklist utilities**: Lines 1300-1467 (`isTaskComplete`).
  * **Mode selectors and routing dispatcher**: Lines 1468-1639 (`setMode`, `setSubject`).
  * **Main viewport renderer**: Lines 1640-1751 (`renderCurrentView`).
  * **Subject modes content generators**:
    * **Study Guide Slide Renderer**: Lines 1752-1841 (`renderStudySlide`).
    * **Slide navigators**: Lines 1842-1876 (`prevSlide`, `nextSlide`).
    * **Touch gesture recognizers**: Lines 1877-1910 (`setupSwipeGestures`).
    * **Quiz Question Renderer**: Lines 1911-1989 (`renderQuizQuestion`).
    * **Quiz action handlers**: Lines 1990-2122 (`selectChoice`, `selectTF`, `submitBlank`).
    * **Performance Task Renderer**: Lines 2123-2290 (`renderPerformanceView`).
    * **Competencies checklist renderer**: Lines 2291-2392 (`renderMonthlyChecklist`).
  * **Ambient sound helpers**: Lines 2393-2516 (`setupBgMusic`, `toggleMusic`).
  * **Bilingual translation selectors**: Lines 2517-2535 (`toggleTranslation`, `toggleTranslationHeader`).
  * **Worksheet parent check & verification logic**: Lines 2536-2555 (`toggleWorksheetAnswers`, `applyWorksheetAnswersVisibility`).
  * **Practice Worksheet layout renderer**: Lines 2619-2773 (`renderWorksheetView`).
  * **Practice Worksheet parent complete submitter**: Lines 2774-2841 (`submitWorksheetComplete`).
  * **Daily Reading text-to-speech module**: Lines 3139-3300 (`renderReadingView`).
  * **Welcome Dashboard (Home) generator**: Lines 3609-3905 (`renderWelcomeDashboard`).
  * **Mascot interaction overlay manager**: Lines 3906-3945 (`interactMascotDashboard`, `closeMascotInteractiveModal`).
  * **Task launcher navigation helper**: Lines 3946-3975 (`launchTask`).
  * **Parent Gate authentication challenge**: Lines 4018-4113 (`showPinModal`, `validateEnteredPin`).
  * **PIN recovery verification**: Lines 4114-4134 (`handleForgotPin`).
  * **Parent's Dashboard reporting layout**: Lines 4186-4455 (`renderParentDashboard`).
  * **DepEd Competencies viewer**: Lines 4478-4530 (`renderCompetenciesDashboard`).
  * **Gaming Center core launcher dashboard**: Lines 4606-4660 (`renderGamesDashboard`).
  * **Trophies & achievement system**: Lines 4864-4900 (`renderTrophiesGrid`).
  * **Educational Quick Play Games Engines**:
    * **Word Scramble**: Lines 5810-6001 (`setupScrambleGame`, `renderScrambleWord`)
    * **Speed Math**: Lines 6002-6103 (`setupSpeedMathGame`, `renderSpeedMathQuestion`)
    * **Word Garden**: Lines 8820-9074 (`setupWordGardenGame`, `renderWordGardenQuestion`)
    * **Science Sort**: Lines 9075-9262 (`setupScienceSortGame`, `renderScienceSortQuestion`)

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

## ⚙️ 3. Quality Gate, Context & Build Layer

### A. Quality Control Standards (`moon_standards_mlh.md`)
* **File Path**: [moon_standards_mlh.md](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/moon_standards_mlh.md)
* **Role**: Quality gate guidelines establishing requirements for onboarding login options, theme mappings, accessibility guides, and the 8-line slide content rule.

### B. Alignment Reference (`master_context.md`)
* **File Path**: [master_context.md](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/master_context.md)
* **Role**: Primary context store defining curriculum alignment, unlock card logic, and Android TV deprecation statements.

### C. Curriculum Database Compiler (`generate_g3_all_subjects.py`)
* **File Path**: [generate_g3_all_subjects.py](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/scratch/generate_g3_all_subjects.py)
* **Role**: Python builder script extracting raw curriculum structures and compiling them into weekly JSON formats.

### D. Database Validator (`validate_db.py`)
* **File Path**: [validate_db.py](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/scratch/validate_db.py)
* **Role**: Python verification script checking completeness, formatting, and structural integrity of the compiled databases.

### E. Native Build Script (`build_apk.sh`)
* **File Path**: [build_apk.sh](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/scratch/build_apk.sh)
* **Role**: Android build orchestration script compiling assets, managing version numbers, and building debug/release APK files.
