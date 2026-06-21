# Implementation Plan: Sentence Rain Dual-Input Game & Speech Recognition permissions

This plan outlines the design and implementation details for adding a new game, **Sentence Rain** (🦉), to Kiko's Games Center. The game features dual-input control (Tap or Speak to solve falling words), 5 grade-appropriate configuration modes, dynamic difficulty levels, and native Android speech recording support.

---

## User Review Required

> [!IMPORTANT]
> **Android WebView Speech Permissions**:
> Standard Android WebViews disable microphone recording by default for HTML5 apps. 
> To allow the hybrid app to access speech recognition, we will:
> 1. Request the `RECORD_AUDIO` permission in the AndroidManifest and runtime wrapper.
> 2. Override the `onPermissionRequest` callback in `WebChromeClient` inside [MainActivity.java](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/android-project/app/src/main/java/com/mattsfiles/hub/MainActivity.java) to grant audio resource permission to the Web application.
> 3. If a student denies microphone access on their device, the web application will automatically disable speech recognition and switch to **Tap Mode only** without blocking gameplay.

---

## Proposed Changes

### 1. Android Manifest Permissions

#### [MODIFY] [AndroidManifest.xml](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/android-project/app/src/main/AndroidManifest.xml)
* Add the RECORD_AUDIO permission tag to request microphone access:
  ```xml
  <uses-permission android:name="android.permission.RECORD_AUDIO"/>
  ```

---

### 2. Native Android App Configurations

#### [MODIFY] [MainActivity.java](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/android-project/app/src/main/java/com/mattsfiles/hub/MainActivity.java)
* **Runtime Permission Request**: In `onCreate`, check and request `Manifest.permission.RECORD_AUDIO` from the user if it is not yet granted on device startup.
* **WebView Permission Grant**: Override `onPermissionRequest(PermissionRequest request)` in the `WebChromeClient` instantiation, checking if the requested resource contains `PermissionRequest.RESOURCE_AUDIO_CAPTURE` and granting it:
  ```java
  @Override
  public void onPermissionRequest(final android.webkit.PermissionRequest request) {
      if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
          request.grant(request.getResources());
      }
  }
  ```

---

### 3. Games Center Layout

#### [MODIFY] [app.js](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/app.js)
* Add the "Sentence Rain" game card to the Games Center grid (with a description, details, and 10 coins / 40 XP rewards).
* Register `'sentencerain'` in the `launchGame` selector to direct the user to `setupSentenceRainGame(canvasArea)`.

---

### 4. Sentence Rain HTML & CSS Layout

#### [MODIFY] [index.css](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/index.css)
* Add style classes for the game canvas viewport container (`.rain-game-viewport` - relatively positioned with hidden overflow).
* Style falling word tags (`.falling-word` - absolute positioning, smooth transitions, interactive tap styling, and state changes for correct/incorrect answers).
* Style the target sentence placeholder slots at the bottom or top of the screen (`.target-sentence-box`, `.word-slot`).
* Style the speech control panel, active microphone button, status messages, and audio wave animations.

---

### 5. Sentence Rain Game Engine Logic

#### [MODIFY] [app.js](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/app.js)
* **Sentence Pool Database**: Prepare a rich, grade-specific dataset of English and Filipino sentences:
  * Grade 1: Simple 3-4 word sentences.
  * Grade 2: 4-5 word sentences.
  * Grade 3: 5-7 word sentences.
  * Grade 4: 6-8 word sentences.
  * Grade 5: 8-10 word sentences.
  * Grade 6: 10-12 word sentences.
* **5 Game Modes Configurator**:
  1. *Guided Sentence* (Grades 1-2): Target sentence is visible. Falling words are tapped or spoken in sequential order.
  2. *Missing Sentence* (Grades 2-3): Target sentence has one blank slot. Falling words contain the correct answer and distractors.
  3. *Scrambled Rain* (Grades 3-4): Target sentence is visible but scrambled. Words fall randomly and must be selected in correct sequential order.
  4. *Listen and Build* (Grades 4-6): Target sentence is hidden. An audio text-to-speech voice reads the sentence, and the student builds it from falling words.
  5. *Story Builder* (Grades 5-6): Build a short 3-sentence narrative sequence word-by-word.
* **Falling Animation Loop**: Use `requestAnimationFrame` to animate Y positions of words downward. Speed scales across tiers (Level 1-5: slow; Level 6-10: moderate; Level 11-15: normal; Level 16+: fast) based on levels.
* **Dual Input Solver**:
  * *Tap Mode*: Attaches click handlers to falling word buttons.
  * *Speech Mode*: Instantiates `webkitSpeechRecognition` when the microphone button is pressed. Sets language dynamically (`en-US` for English/Science/Math, `fil-PH` for Filipino/Makabansa). Compares the recognized transcript with the next expected word.
* **Graceful Fallback**: If speech recognition fails twice on a word, Kiko the owl suggests: *"Want to try tapping it instead?"*
* **Scoring & Rewards**:
  * Accuracy (50%), Pronunciation (25%), Speed (25%).
  * Awards coins, XP, and triggers a Kiko congratulatory speech bubble reaction.
  * Safely releases the speech recognition instance and clears animation loops inside `exitActiveGame()`.

---

## Verification Plan

### Automated Tests
* Run `node scratch/test_js.js` or python verification tools to confirm syntax integrity.

### Manual Verification
1. **Device Microphone Permissions**: Run the compiled APK, open the Sentence Rain game, and tap the Microphone button. Verify that Android requests recording permissions.
2. **Speech Recognition**: Speak the falling words and verify they are correctly matched, captured, and filled.
3. **Tap Input Fallback**: Deny microphone permissions, and verify that tapping words works perfectly and allows full completion.
4. **Different Modes**: Test different grade settings (Grade 1, Grade 3, Grade 5) and verify that the game correctly changes mode (Guided, Scrambled, Listen & Build) and word length.
5. **Memory Leak Releases**: Open and exit the game multiple times, verifying that no background audio listeners or animation loops persist.
