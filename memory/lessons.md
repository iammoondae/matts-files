# Developer Lessons Log (memory/lessons.md)

This log tracks lessons learned, common mistake patterns, and standard correction strategies.

---

## 1. WebView Environment Restraints
* **Local Storage Safety**: Direct references to `window.localStorage` inside restricted Cordova/Android frames can cause application crashes. Always wrap calls using the standard safety checks:
  ```javascript
  // Always use safeStorage wrapper
  const val = safeStorage.getItem(key);
  ```
* **Asset Pathing**: WebView asset access runs under `file:///` protocols. Avoid absolute root references (e.g. `/images/`) as they fail to resolve locally in the APK. Always use relative path indicators (`images/`, `data/`).

---

## 2. Canvas Drawing Coordinate Sync
* **Resize Coordinates**: When drawing or clearing in Practice Worksheets, canvas viewport height/width bounds must dynamically align with the backing SVG/PDF container size. Ensure `resizeWorksheet` recalibrates coordinates after screen rotations or modal toggles to prevent offset drawings.
