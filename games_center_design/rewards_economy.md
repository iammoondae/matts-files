# Games Center - Rewards Economy Design
## System Architecture: Earning, Spending, and Level Progression

This document defines the math, tables, and rules governing the **Rewards Economy** for Matteo's Learning Hub. It establishes the earn rates, inventory store items, and progression mechanics to ensure a balanced, motivating environment.

---

## 🪙 1. Economic Currencies

The economy relies on three distinct progression tokens:

| Currency | Symbol | Storage Key | Purpose | Earn Source |
| :--- | :---: | :--- | :--- | :--- |
| **Coins** | 🪙 | `hub_coins` | Purchasable items in the Shop (e.g. outfits, themes, sound tracks). | Game completions, Daily Missions, Streaks. |
| **Stars** | ⭐ | `hub_stars` | Milestone trackers showing total lifetime achievements. Non-spendable. | Perfect quiz scores, completed worksheets. |
| **Mascot XP** | 📈 | `mascot_xp` | Levels up the mascot, unlocking free tier rewards. | Every learning action and game play. |

---

## 📊 2. Earning Rates

To prevent inflation, earn rates are capped and structured:

### A. Learning Core Activities
* **Study Slide Completed**: +2 XP (Max 30 XP per slide deck)
* **Quiz / Challenge Perfect Score (100%)**: +5 Stars, +20 Coins, +50 XP
* **Quiz / Challenge Passing Score (>=60%)**: +2 Stars, +10 Coins, +30 XP
* **Practice Worksheet Marked Complete (Parent Checked)**: +5 Stars, +15 Coins, +40 XP

### B. Educational Games (Quick Play & Quest)
* **Game Win (High Accuracy / Performance)**: +10 Coins, +40 XP
* **Game Pass (Basic Completion)**: +5 Coins, +25 XP
* **Daily First Win Bonus**: +10 Coins, +20 XP

---

## 🛒 3. The Hub Shop Inventory

The Shop is accessible from the Games Center Dashboard. All items are cosmetic-only to keep the learning fair.

### A. Mascot Outfits (Tobi the Owl Cosmetics)

| Outfit Name | Visual Description | Price (Coins) | Unlock Level |
| :--- | :--- | :---: | :---: |
| **Graduation Cap** | Classic black mortarboard with a gold tassel. | 100 🪙 | Level 2 |
| **Explorer Hat** | Khaki safari hat for Science Explorer mode. | 150 🪙 | Level 3 |
| **Barong Tagalog** | Traditional embroidered shirt for Makabansa mode. | 250 🪙 | Level 5 |
| **Cool Sunglasses** | Dark shades giving Tobi a relaxed style. | 80 🪙 | Level 1 |
| **Crown of Wisdom** | Shiny gold crown with ruby gems. | 500 🪙 | Level 10 |

### B. App Themes & UI Backgrounds

| Theme Name | Visual Overrides | Price (Coins) |
| :--- | :--- | :---: |
| **Matutina (Morning)** | Soft pastel blue borders with cloud animations. | 150 🪙 |
| **Catarata (Jungle)** | Emerald green accents with tropical plant details. | 200 🪙 |
| **Bulkan (Volcanic)** | Crimson red accent overrides (High contrast). | 250 🪙 |

### C. Soundtracks (Background Study Music)

| Track Name | Instrument Style | Price (Coins) |
| :--- | :--- | :---: |
| **Lofi Chill** | Relaxing beats for focused reading. | 120 🪙 |
| **Classical Piano** | Mozart melodies (Increases focus). | 100 🪙 |

---

## 📈 4. Mascot Level Progression Table

Mascot Levels determine the learner's rank and unlock Shop items. The XP required to level up increases linearly:

$$\text{XP Required} = \text{Current Level} \times 100$$

| Level | Cumulative XP | Unlocks / Perks |
| :---: | :---: | :--- |
| **Level 1** | 0 XP | Base Mascot, Sunglasses available. |
| **Level 2** | 100 XP | Graduation Cap unlocked. |
| **Level 3** | 300 XP | Explorer Hat unlocked, new Tobi wave animation. |
| **Level 4** | 600 XP | Custom greeting messages in home dashboard. |
| **Level 5** | 1000 XP | Barong Tagalog outfit unlocked. |
| **Level 6** | 1500 XP | Special Tobi flying animation. |
| **Level 7** | 2100 XP | Double Coin Saturday event unlocked. |
| **Level 8** | 2800 XP | Golden Profile Avatar border. |
| **Level 9** | 3600 XP | Rainbow custom nickname tag. |
| **Level 10** | 4500 XP | Crown of Wisdom unlocked, Tobi "Super Scholar" badge. |
