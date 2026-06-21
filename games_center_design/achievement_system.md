# Games Center - Achievement System Specification
## Trophy Room, Badges, and Local Storage Binding

The Achievement System acts as a permanent record of the learner's academic and gaming milestones. This document specifies the achievement categories, badge tiers, storage keys, and visual trophy showcases.

---

## 🏆 1. Achievement Tiers & Trophies

Achievements are divided into three tiers, each granting a specific trophy style:
* **Bronze Trophy**: Base milestone completion.
* **Silver Trophy**: Intermediate target.
* **Gold Trophy**: Master level completion (unlocks profile border upgrades).

---

## 🎖️ 2. Achievement Registry

| Achievement ID | Category / Name | Criteria / Trigger | Reward | Storage Key |
| :--- | :--- | :--- | :---: | :--- |
| **ACH_STREAK_01** | **Early Bird** | Reach a 3-day study streak. | +20 Coins / +50 XP | `earned_badge_streak_3` |
| **ACH_STREAK_02** | **Daily Scholar** | Reach a 7-day study streak. | +50 Coins / +100 XP | `earned_badge_streak_7` |
| **ACH_STREAK_03** | **Unstoppable** | Reach a 30-day study streak. | +200 Coins / +500 XP | `earned_badge_streak_30` |
| **ACH_MATH_01** | **Math Rookie** | Pass 5 math games. | +15 Coins / +40 XP | `ach_math_count_5` |
| **ACH_MATH_02** | **Math Wizard** | Pass 20 math games. | +40 Coins / +100 XP | `ach_math_count_20` |
| **ACH_WORDS_01** | **Spell Caster** | Spell 50 words correctly in Spelling Bee. | +30 Coins / +80 XP | `ach_spelling_words_50` |
| **ACH_SCIENCE_01** | **Observation Specialist** | Complete 10 qualitative/quantitative sensory games. | +25 Coins / +60 XP | `ach_science_games_10` |
| **ACH_MAP_01** | **Island Navigator** | Assemble the Philippine Map Puzzle in under 90 seconds. | +50 Coins / +120 XP | `ach_philippine_map_fast` |
| **ACH_LEVEL_01** | **Tobi's Companion** | Raise Tobi the Owl to Level 5. | +100 Coins / +250 XP | `ach_mascot_level_5` |
| **ACH_FEED_01** | **Caring Caretaker** | Feed Tobi 20 times. | +20 Coins / +50 XP | `ach_feed_count_20` |

---

## 🏛️ 3. The Trophy Showcase Layout

The Games Center Progress Dashboard contains a **Trophy Showcase** section. It displays unlocked badges in high-contrast colorful icons:

### A. Layout Structure
* A responsive grid of card slots.
* **Locked state**: Displayed as a greyed-out padlock with a descriptive text clue (e.g. *"Complete a 7-day study streak to unlock this trophy"*).
* **Unlocked state**: Fully colored, pulsing animation, showing the date unlocked (e.g. *"Unlocked on June 18, 2026"*).

### B. Confetti & Celebrations
When an achievement is unlocked:
1. Play a royal fanfare sound effect.
2. Trigger the local canvas confetti particle system.
3. Overlay a full-screen card reveal modal showing:
   - The rotating gold trophy.
   - The achievement name and rewards (+Coins, +XP).
   - A button saying: `🌟 Claim Rewards`.
