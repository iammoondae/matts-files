# Section Workflows & Render Sequences (workflows/sections.md)

This blueprint outlines the rendering steps and completion triggers for each of the core learning modes.

---

## 📖 1. Study Guide Section
1. **Curriculum Lookup**: Fetch the slides array for the active subject-week.
2. **State Sync**: Load `currentSlideIndex` from memory. Set progress bar width.
3. **Card Presentation**: Render slide title, image block, word wrap description text, and example lists.
4. **Touch & Gestures**: Bind horizontal swipe events (swipe left = next, swipe right = previous) with 3D card-flip CSS transition classes.
5. **Completion Gate**: Reaching the final slide sets the local storage flag `study_complete_...` to true and awards Tobi mascot XP.

---

## ✍️ 2. Quiz & Challenge Sections
1. **Question Selection**: Load the questions array (`standard` or `challenge`).
2. **Screen Rendering**: Clear the viewport and display the current question description.
   - **MCQ choice**: Render option list with large target buttons.
   - **True/False**: Render dual-button panel.
   - **Blanks**: Render text input box and submit button.
3. **Validation & Sound**:
   - Correct: Play `correct.wav`, highlight green, and trigger Tobi's success shake animation.
   - Incorrect: Play `incorrect.wav`, highlight red, and log question in `wrongAnswersLog`.
4. **Auto-Advance**: Delay 1.5s, increment question index, and render the next question.
5. **Summary View**: Once index matches array size, show score circle, count coins earned, and list items in the incorrect answers review box. Update highest score flag.

---

## 📝 3. Practice Worksheet Section
1. **Worksheet Generation**: Fetch compiled HTML strings for the active subject-week.
2. **Canvas Setup**: Overlay an transparent drawing canvas matching worksheet bounds. Initialize stylus pressure and tracking.
3. **Drawing Toolbars**: Provide brush color chips, brush size inputs, eraser controls, and undo action queue triggers.
4. **Parent Grade Mode**: When parental gate is unlocked, parent clicks the "Show Answers" button to overlay answers (`.ws-answer`). Tapping "Mark Complete" toggles answers visibility to hidden, increments coins, and saves completion.

---

## 📚 4. Daily Reading Section
1. **Day Tabs Selection**: Display five buttons (Monday to Friday) matching story logs.
2. **Text-To-Speech Playback**: Tap speaker button to trigger Web Speech API TTS synthesis. Highlight active words.
3. **Daily Checklist Tracker**: Complete stories to unlock badges and populate parent reporting logs.

---

## 🎮 5. Gaming Center Section
1. **Mascot Interaction**: Display animated mascot Tobi with XP meters, happiness ratings, and outfit wardrobes.
2. **Outfit Shop**: Spend earned coins to buy outfits or custom background songs.
3. **Mini-Game Engines**: Launch Word Scramble, Speed Math, Word Garden, or Science Sort canvases. Save high scores.
