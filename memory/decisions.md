# Persistent Decisions Log (memory/decisions.md)

This log documents major architectural and strategic decisions to prevent regression.

---

## 1. Monolithic Code Separation (June 2026)
* **Context**: `app.js` reached over 9,300 lines, making it difficult to maintain and edit.
* **Decision**: Split the client script engine into standalone script modules under `modules/` (e.g. `studyguide.js`, `quiz.js`, etc.).
* **Impact**: Improved modularity, context size efficiency for development models, and file maintainability. Modified the packaging script `build_apk.sh` to compile these assets together.

---

## 2. Android TV D-Pad Deprecation (June 2026)
* **Context**: TV layout overrides and D-pad controllers made code overly complex and distracted from tablet/mobile optimization.
* **Decision**: Completely deprecate and remove all D-pad event listeners and TV sticky sidebar styling.
* **Impact**: Restored full focus on touch gestures, sliding cards, and smooth web view performance.

---

## 3. Warm Theme & Mascot Redesign (June 2026)
* **Context**: The user requested a new warm, kid-friendly theme instead of slate-only layout, and active animations for Tobi.
* **Decision**: Implemented radial yellow/cream colors for Light Mode and starry night constellations for Dark Mode. Added keyframe animations for mascot Tobi.
* **Impact**: Boosted child user engagement and created a premium look and feel.
