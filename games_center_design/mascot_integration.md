# Games Center - Mascot Integration Specification
## Mascot Name: Tobi the Owl

Tobi the Owl is the official mascot of Matteo's Learning Hub. This document specifies Tobi's role, interactive states, animations, feeding mechanics, and dynamic dashboard dialog lines.

---

## 🦉 1. Visual Placement & UI Integration

Tobi is rendered as a responsive SVG/PNG character in the following key views:

1. **Sidebar Header**: A small avatar circle showing Tobi wearing the currently active outfit.
2. **Welcome Dashboard (Home)**: Tobi sits on a branch next to the greeting card. Tapping Tobi plays a random voice line and animation.
3. **Games Center Main view**: Tobi stands in the center, showing his happiness level, inventory clothing, and current level.
4. **Onboarding / Welcomes**: Tobi introduces steps and prompts the child to fill out their name.
5. **Modal Overlays**: Tobi pops up in victory overlays (congratulating perfect scores) or study warnings (reminding them to take a break).

---

## ⚙️ 2. Tobi's States & Interactive Animations

Tobi has five distinct mood states that change based on user actions:

| State | Activation Trigger | Visual Cue / Action |
| :--- | :--- | :--- |
| **Idle (Normal)** | Standard app browsing. | Tobi blinks occasionally and looks around. |
| **Excited (Happy)** | Correct answer input or quiz passed. | Tobi flaps wings, bounces up and down, and opens his eyes wide. |
| **Thinking** | During a quiz or puzzle game. | Tobi taps his beak, tilts his head, and looks thoughtful. |
| **Sleepy / Idle-Out** | 3 minutes of user inactivity. | Tobi closes his eyes, leans forward, and Zzz bubbles float up. |
| **Hungry** | Happiness meter drops below 30%. | Tobi looks sad and holds an empty wooden bowl. |

---

## 🍎 3. Feeding & Happiness Mechanics

To maintain engagement, Tobi has a **Happiness Meter (0-100%)** that decreases by **10% every 12 hours** of real-world time.

* **Snack Store**: Parents/learners can buy food items from the shop using earned coins:
  - `🍎 Red Apple`: +15 Happiness (Cost: 10 Coins)
  - `🍌 Sweet Banana`: +25 Happiness (Cost: 15 Coins)
  - `🥞 Rice Cake (Bibingka)`: +50 Happiness (Cost: 28 Coins)
* **Effects of High Happiness (>=70%)**:
  - Tobi gains a sparkling aura on the home dashboard.
  - Gives +10% bonus Mascot XP on all quiz activities.
* **Effects of Low Happiness (<30%)**:
  - Tobi is sluggish and has a sad expression.
  - XP multipliers are locked.

---

## 💬 4. Dynamic Dashboard Speech Bubble Dialogs

Tobi interacts with the learner using local contextual guidelines. The speech bubble displays text based on time of day, active week, and academic results:

### A. Morning Greetings (6:00 AM - 11:59 AM)
* *"Good morning, Matteo! Ready to explore some Math today?"*
* *"Magandang umaga! Let's start the day with a fun story!"*

### B. Study Motivation (Based on Streaks)
* **On a 3-Day Streak**: *"Awesome! You have studied for 3 days straight! Keep it up!"*
* **After a Perfect Quiz**: *"Fantastic work on that Science quiz, Matteo! You're a superstar!"*

### C. GMRC / Friendly Tips
* *"Remember to say 'Salamat' when someone helps you today!"*
* *"Help clean up your study desk after we finish our slides!"*
* *"Take a deep breath. You can solve any puzzle!"*
