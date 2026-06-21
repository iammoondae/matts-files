# Matteo's Learning Hub - Universal Alignment & Context

Welcome! This document serves as the absolute single source of truth (master context) for any AI coding assistant or developer working on **Matteo's Learning Hub**. It catalogs all historical design decisions, business/distribution plans, and architectural guidelines to prevent regression and ensure code alignment.

---

## 📌 1. Project Overview & Target Audience
* **Name**: Matteo's Learning Hub (Matteo's Learning App)
* **Target User**: Grade 1 to Grade 3 learners in the Philippines, as well as their parents.
* **Core Curriculum**: Aligned with the official **DepEd MATATAG Curriculum** (Mathematics, Science, English, Filipino, Makabansa, GMRC).
* **Tech Stack**: Pure hybrid local web view (Vanilla HTML5, CSS3, and ES6 Javascript). Running inside a standard Android WebView via Cordova/Gradle packaging. No frameworks (React/Vue/Tailwind) are used to keep loading times instant and performance extremely high.

---

## 🛍️ 2. Business & Monetization Model (Shopee Philippines)
* **Distribution Strategy**: The app is built to be sold on **Shopee Philippines** as a physical package.
* **Unlock Mechanism**:
  1. The buyer orders the product on Shopee.
  2. The seller ships a physical package containing a printed card.
  3. The card contains a unique **unlock code** or a QR code.
  4. In the app onboarding, the parent enters this unlock code to unlock the full features.
* **Future Implementation Alert**: Under no circumstances should any other monetization method (e.g., Google Play In-App Purchases, Stripe, or web checkouts) be introduced unless explicitly requested. Shopee Philippines physical cards are the primary monetization path.

---

## 📺 3. Major Architectural Reversals (Android TV Removal)
> [!WARNING]
> **DO NOT RE-IMPLEMENT ANDROID TV LAYOUTS OR KEYBOARD NAVIGATION.**
> In June 2026, a comprehensive Android TV D-pad control and landscape sticky navigation layout was implemented. However, to maintain absolute focus on the core touch/tablet experience, **all Android TV specific layout overrides, sticky sidebars, and keyboard D-pad event listeners have been removed.**
> * The app must run exclusively as a touch/swipe-based tablet and phone experience.
> * The manifest retains basic launcher compatibility, but all runtime JavaScript/CSS D-pad hooks are deprecated and deleted. Do not restore them.

---

## 📱 4. Key UX & UI Guidelines

### A. Touch Swipe Gestures
* **Slide Navigation**: Learners can navigate between slides in **Study Guide** and **Daily Reading** by performing horizontal touch swipe gestures (flicking left to go next, flicking right to go previous).
* **3D Page Turn Animation**: Transitions between slides mimic a 3D book page turn using CSS perspective and rotation keyframes (`.slide-flip-container`, `.slide-card-inner`, `.flip-next`, `.flip-prev`).

### B. Parent PIN & Lock System
* **Parental Gate**: Sensitive sections (Settings, Dashboards, Progress resets) are locked behind a Parent PIN.
* **Auto-Revert Answers**: In the Practice Worksheet mode, when a parent unlocks and presses the **Show Answer** button to review the learner's work, the app must automatically hide the answers (`wsShowAnswers = false`) immediately after the parent clicks **✅ Mark This Worksheet Completed** and the completion alert is shown.
* **Rubric Sliders**: In performance tasks, the parent rates the learner by moving rubrics sliders. The text must read: *"Ask your parent to rate your performance task by moving the rubric sliders below."*

### C. Relative Font Scaling in Competencies Modal
* **Modal Accessibility**: Parents can check standard learning competencies per quarter.
* **Controls**: The competencies modal header contains `[A-]` (decrease), `[Reset]` (reset to default), and `[A+]` (increase) buttons.
* **Relative Scaling**: Instead of global document scaling, these buttons adjust the font size of the competencies modal body relative to its base stylesheet settings (`12.5px` base scaled dynamically via the `adjustCompetenciesFontSize()` engine). On closing the modal, the font scale state resets.

### D. Translation Controls
* **Toggle Button**: A translation button is placed in the upper-left (to the left of the theme toggle).
* **Visibility Rule**: This translation button **must only be visible** when the active subject is **Filipino** or **Makabansa**. For all other subjects, it is hidden.

---

## 🎮 5. Educational Games Placeholder
* An **Educational Games** tab exists in the sidebar modes list.
* Clicking it displays a beautiful "Under Construction" welcome dashboard explaining that interactive Math, Science, and spelling games are coming in a future update.

---

*Keep this document updated whenever a major strategic or architectural shift is approved by the user.*
