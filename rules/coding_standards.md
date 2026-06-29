# Coding Standards - JavaScript & WebView (rules/coding_standards.md)

This module establishes coding standards for JavaScript developers and agents.

---

## 1. Modular Script Structure
* **Separation of Concerns**: Screen rendering, styling hooks, and game engines must not live in `app.js`. They must reside in dedicated script files in the `modules/` directory.
* **Order of Execution**: `app.js` is loaded first, exposing global state variables and helpers. Sub-modules are loaded sequentially afterward.
* **Namespace Protection**: Modules register their functionality under the global namespace `window.AppModules = window.AppModules || {}`.

## 2. Safe State Persistence
* **HTML5 LocalStorage**: Direct calls to `window.localStorage` are prohibited due to sandboxed frame restrictions on WebView. Use the `safeStorage` wrapper:
  * `safeStorage.getItem(key)`
  * `safeStorage.setItem(key, value)`
  * `safeStorage.removeItem(key)`
* **Persistent Sessions**: Save state variables whenever modes or active slides change. Key session identifiers:
  * `session_currentWeek`
  * `session_currentSubject`
  * `session_currentMode`
  * `session_currentSlideIndex`
* **IndexedDB for Audio**: Background audio files loaded by user upload must be stored as binary blobs in IndexedDB via `musicDB` wrapper.

## 3. WebView Compatibility
* **EcmaScript Version**: Use ES6 standard methods (arrow functions, template literals, `const/let`, promises, `async/await`). Avoid modern APIs that might not be supported in older Android system WebView versions.
* **No Node/Build Bundlers**: The app executes in Cordova WebView. We do not use Webpack/Vite/Parcel bundlers for production; scripts are copied directly by the build pipeline. Keep dependencies vanilla.
