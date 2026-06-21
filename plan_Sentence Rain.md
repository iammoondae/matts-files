# Sentence Rain — Implementation Guide

A step-by-step plan for building the dual-input (speak + tap) word-catching reading game, plus the home/progress-dashboard owl mascot, for your Android learning hub app.

---

## 0. Overview of What You're Building

**Sentence Rain** (🦉) is a falling-words game where students complete sentences by either speaking or tapping words before they reach the bottom of the screen.

Core decisions already locked in from planning:

- **Dual input**: every word can be solved by 🎤 speaking OR 👆 tapping. Same scoring engine underneath.
- **Word-by-word recognition**, not full-sentence recognition — far more reliable, especially for children's voices.
- **5 game modes** scaling from Grade 1 to Grade 6.
- **Scoring**: Accuracy 50%, Pronunciation 25%, Speed 25%.
- **Tiered falling speed** (not linear) across 21+ levels.
- **Owl mascot** gives feedback during the game, and also appears as a smaller persistent character on the **Home** and **Progress Dashboard** screens.
- **No AI/cloud STT needed initially** — use Android's built-in `SpeechRecognizer`.

This guide is organized so you can build and test in stages, even without deep Android experience.

---

## Part A: Project Setup

### Step 1: Confirm Your Project Type

Before writing code, confirm:

- Is your app built in **Kotlin/Java with Android Views (XML layouts)**, or **Jetpack Compose**, or something like **Flutter/React Native**?

The permission and STT steps below use native Android (Kotlin) examples, since that's the most direct path. If your app is Flutter or React Native, the same logic applies but you'll use a plugin (e.g. `speech_to_text` for Flutter) instead of calling Android APIs directly — flag this if you need the translated version.

### Step 2: Add the Microphone Permission

In `AndroidManifest.xml`, add:

```xml
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
```

### Step 3: Request Permission at Runtime

Microphone access must be requested when the app runs, not just declared in the manifest. Add a runtime permission request before the game screen loads:

```kotlin
private val RECORD_AUDIO_PERMISSION_CODE = 1

private fun checkAudioPermission() {
    if (ContextCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO)
        != PackageManager.PERMISSION_GRANTED) {
        ActivityCompat.requestPermissions(
            this,
            arrayOf(Manifest.permission.RECORD_AUDIO),
            RECORD_AUDIO_PERMISSION_CODE
        )
    }
}
```

**Important UX note:** If the student denies the permission, don't block the game. Fall back to **Tap Mode only** automatically. This keeps the dual-input promise intact even without mic access.

---

## Part B: Building the Dual-Input Engine

### Step 4: Design the Core Data Model

Keep it simple. Each falling word is an object with:

```kotlin
data class FallingWord(
    val id: String,
    val text: String,
    var yPosition: Float,
    var isSolved: Boolean = false,
    var inputMethod: String? = null // "speech" or "tap"
)
```

This lets your scoring system later check *how* each word was solved (useful for the future Pronunciation Challenge Mode bonus).

### Step 5: Build the Falling Animation

Use a `ValueAnimator` or a simple game loop (e.g. with `Choreographer` or a `CountDownTimer`) to move each word's Y-position downward over time. Render words as draggable/tappable views (TextViews or custom Composables) inside a `ConstraintLayout` or `Canvas`.

Keep the falling logic separate from the input logic — this is what makes dual-input possible without duplicating code.

### Step 6: Implement Tap Input (Build This First)

Tap is simpler and has no permission requirements, so build and test it before adding speech.

```kotlin
wordView.setOnClickListener {
    checkWord(fallingWord, inputMethod = "tap")
}
```

`checkWord()` compares the tapped word against the expected next word in sequence and marks it solved/incorrect accordingly.

**Test your entire game loop, scoring, and level progression using tap-only first.** This isolates bugs in your core game logic from any speech recognition issues later.

### Step 7: Implement Speech Input (Android SpeechRecognizer)

Once tap mode works end-to-end, layer in speech:

```kotlin
val speechRecognizer = SpeechRecognizer.createSpeechRecognizer(context)
val intent = Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).apply {
    putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL,
        RecognizerIntent.LANGUAGE_MODEL_FREE_FORM)
    putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, true)
}

speechRecognizer.setRecognitionListener(object : RecognitionListener {
    override fun onResults(results: Bundle?) {
        val matches = results?.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION)
        val spokenWord = matches?.firstOrNull()?.lowercase()?.trim()
        checkWord(fallingWord, inputMethod = "speech", spokenText = spokenWord)
    }
    // onError, onReadyForSpeech, etc. also need handling
})

speechRecognizer.startListening(intent)
```

Add a 🎤 button the student holds or taps to start listening for the current word, so the mic isn't always-on (saves battery, avoids picking up classroom noise unintentionally).

### Step 8: Handle Speech Recognition Errors Gracefully

This is the step most learning apps get wrong. When `onError` fires (no match, network issue, low confidence), **never just mark it wrong silently.** Instead:

1. Show the owl: 🦉 "Try that word again."
2. After 2 failed speech attempts on the same word, automatically suggest: "Want to tap it instead?"

This directly addresses the "cat" → "cap"/"cut" misrecognition problem from your planning notes, and keeps frustration low for Grade 1–2 learners.

### Step 9: Build the Word-by-Word Checking Logic

Since the design avoids full-sentence recognition, `checkWord()` only ever evaluates one word at a time against the current expected word in the sequence:

```kotlin
fun checkWord(word: FallingWord, inputMethod: String, spokenText: String? = null) {
    val isCorrect = when (inputMethod) {
        "tap" -> word.text.equals(currentExpectedWord, ignoreCase = true)
        "speech" -> spokenText?.equals(word.text, ignoreCase = true) == true
        else -> false
    }

    if (isCorrect) {
        word.isSolved = true
        word.inputMethod = inputMethod
        advanceToNextWord()
        owlReact("correct")
    } else {
        owlReact("retry")
    }
}
```

---

## Part C: Game Modes, Scoring, and Progression

### Step 10: Implement the 5 Modes as Configuration, Not Separate Code

Rather than writing five different game engines, build **one engine** and configure each mode with parameters:

| Mode | Sentence Visible? | Word Order | Grades |
|---|---|---|---|
| Guided Sentence | Yes | Sequential | 1–2 |
| Missing Sentence | Yes (with blank) | Single word | 2–3 |
| Scrambled Rain | Yes | Randomized | 3–4 |
| Listen and Build | No (audio only) | Randomized | 4–6 |
| Story Builder | Yes, multi-sentence | Sequential per sentence | 5–6 |

A config object like this keeps your codebase maintainable:

```kotlin
data class ModeConfig(
    val showSentence: Boolean,
    val scrambleWords: Boolean,
    val useAudioPrompt: Boolean,
    val sentenceCount: Int,
    val defaultInput: String // "tap", "tap+speech", "speech"
)
```

### Step 11: Implement the Scoring Formula

```kotlin
fun calculateScore(accuracy: Float, pronunciationConfidence: Float, speedSeconds: Float, maxSeconds: Float): Float {
    val accuracyScore = accuracy * 0.50f
    val pronunciationScore = pronunciationConfidence * 0.25f
    val speedScore = (1 - (speedSeconds / maxSeconds)).coerceIn(0f, 1f) * 0.25f
    return accuracyScore + pronunciationScore + speedScore
}
```

For tap-only solves, set `pronunciationConfidence` to a flat neutral value (e.g. 1.0) so tap-mode players aren't penalized for not using speech — this preserves the accessibility goal of dual-input.

### Step 12: Implement Level → Sentence Length Progression

Store this as simple data, not hardcoded logic:

```kotlin
val levelConfig = mapOf(
    1 to 2, // word count
    2 to 3,
    3 to 4,
    4 to 5,
    5 to 8 // range 6-8, pick randomly
)
```

### Step 13: Implement Tiered Falling Speed

```kotlin
fun getFallSpeed(level: Int): Float {
    return when (level) {
        in 1..5 -> 0.5f   // Very Slow
        in 6..10 -> 0.75f // Slow
        in 11..15 -> 1.0f // Normal
        in 16..20 -> 1.5f // Fast
        else -> 2.0f      // Expert (21+)
    }
}
```

Using tiers instead of a linear formula avoids sudden unfair difficulty spikes — exactly as discussed.

---

## Part D: Owl Mascot — In-Game Feedback

### Step 14: Build a Reusable Owl Reaction Component

Create one `OwlMascotView` (an ImageView/animated character + speech-bubble TextView) that the whole app can reuse — both inside Sentence Rain and on Home/Progress screens.

```kotlin
fun owlReact(eventType: String) {
    val message = when (eventType) {
        "correct" -> listOf("Great reading!", "Excellent pronunciation!").random()
        "retry" -> "Try that word again."
        "streak5" -> "Five correct words in a row!"
        else -> ""
    }
    owlMascotView.showSpeechBubble(message)
}
```

Trigger `"streak5"` from a simple counter that tracks consecutive correct words and resets on any mistake.

---

## Part E: Owl Mascot on Home & Progress Dashboard

This answers your original question: how to make the mascot appear *only* on Home and Progress Dashboard, not everywhere.

### Step 15: Create One Shared Mascot Component

Build `OwlMascotView` as a standalone, reusable custom view or Composable — not tied to any single screen. It should accept a "context" or "mode" parameter so it knows what to say:

```kotlin
class OwlMascotView(context: Context) : LinearLayout(context) {
    fun setContext(screen: String) {
        val greeting = when (screen) {
            "home" -> "Welcome back! Ready to learn today?"
            "progress" -> "Look how far you've come!"
            else -> ""
        }
        showSpeechBubble(greeting)
    }
}
```

### Step 16: Add the Mascot Only to the Two Specific Screen Layouts

Rather than adding global logic to show/hide the mascot, simply **only include the `OwlMascotView` in the XML/Compose layout files for Home and Progress Dashboard** — and don't include it anywhere else. This is the simplest and most reliable approach for a non-pro-coder: there's no conditional logic to get wrong, since the component just doesn't exist on other screens.

```xml
<!-- home_screen.xml -->
<com.yourapp.OwlMascotView
    android:id="@+id/owlMascot"
    android:layout_width="120dp"
    android:layout_height="120dp" />
```

```xml
<!-- progress_dashboard.xml -->
<com.yourapp.OwlMascotView
    android:id="@+id/owlMascot"
    android:layout_width="100dp"
    android:layout_height="100dp" />
```

Then in each screen's code, call `owlMascot.setContext("home")` or `owlMascot.setContext("progress")` so the same component gives screen-appropriate messages.

### Step 17: (Optional) Make the Mascot Tappable for Extra Engagement

```kotlin
owlMascot.setOnClickListener {
    owlMascot.showSpeechBubble(encouragementPool.random())
}
```

This gives the mascot a light interactive feel without needing animation expertise — a tap-triggered speech bubble is enough for a first version.

---

## Part F: Rewards System

### Step 18: Implement Stars, Coins, Owl XP, and Badges

Keep these as simple counters tied to game events, stored locally first (e.g. `SharedPreferences` or a local database like Room) before considering any backend sync:

```kotlin
fun onSentenceComplete(score: Float) {
    starsEarned += 1
    coinsEarned += (score * 10).toInt()
    owlXP += 5
    checkBadgeUnlocks()
}

fun checkBadgeUnlocks() {
    if (sentencesCompleted == 1) unlockBadge("Sentence Starter")
    if (totalCorrectReads >= 50) unlockBadge("Reading Rookie")
    if (averagePronunciationScore >= 0.9) unlockBadge("Pronunciation Pro")
    if (storiesCompleted >= 1) unlockBadge("Story Master")
}
```

---

## Part G: Build & Test Order (Recommended Sequence)

Follow this order so you always have something testable:

1. Tap-only Mode 1 (Guided Sentence), single hardcoded sentence, no scoring.
2. Add scoring formula and level progression (still tap-only).
3. Add falling speed tiers.
4. Add Modes 2–5 as config variants of the same engine.
5. Add speech input alongside tap (Step 7–9).
6. Add owl in-game reactions.
7. Add rewards (stars/coins/XP/badges).
8. Add the Home and Progress Dashboard mascot (independent of the game itself — can be done in parallel with steps 1–7 if you want a visible quick win early).
9. Test in a noisy environment to confirm Tap fallback works smoothly when speech struggles.

---

## Part H: Future Add-On (Not v1)

Once the dual-input core is stable and tested:

- **Pronunciation Challenge Mode**: speech becomes mandatory, awards bonus stars for high pronunciation confidence scores. Reuses the same scoring engine — just changes `defaultInput` to `"speech"` and raises the weight/bonus for the pronunciation component.

---

## Quick Reference: What NOT to Do

- Don't require speech recognition before tap mode is solid — debug game logic on the reliable input method first.
- Don't use full-sentence speech recognition — word-by-word is significantly more forgiving and easier to score.
- Don't make falling speed increase linearly — use the tier table to avoid sudden unfair jumps.
- Don't add the mascot via global app-wide logic — just place the component only in the two relevant screen layouts.
- Don't penalize tap-mode players in the pronunciation score component — neutralize it so dual-input stays genuinely equal.
