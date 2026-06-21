# Games Center - Daily & Weekly Missions Specification
## System Architecture: Missions, Verification, and Resets

Missions provide daily and weekly targets that keep the learner returning regularly to Matteo's Learning Hub. This document defines the missions catalog, tracking keys, and currency reward rates.

---

## 📅 1. Daily Missions

Daily missions reset every night at **12:00 AM (Midnight) local time**. Completing a daily mission rewards Coins and Mascot XP.

| Mission ID | Mission Text | Criteria / Target | Reward | Storage State Key |
| :--- | :--- | :--- | :---: | :--- |
| `daily_study` | **Read a Lesson** | Complete 1 full Study Guide slide deck (reach final slide). | +10 🪙 / +30 XP | `mission_daily_study_done` |
| `daily_quiz` | **Quiz Champion** | Complete a Quiz in any subject with a passing score (>=60%). | +15 🪙 / +40 XP | `mission_daily_quiz_done` |
| `daily_game` | **Playtime Scholar** | Win any 2 Quick Play games in the Games Center. | +10 🪙 / +30 XP | `mission_daily_game_count` |
| `daily_timer` | **Focus Explorer** | Study for at least 10 minutes total (tracked via Pomodoro clock). | +12 🪙 / +35 XP | `mission_daily_timer_seconds` |
| `daily_feed` | **Caring Friend** | Feed Tobi the Owl mascot at least once. | +5 🪙 / +15 XP | `mission_daily_feed_done` |

---

## 🗓️ 2. Weekly Challenges

Weekly challenges are larger, cumulative learning goals that reset every **Sunday at 12:00 AM (Midnight)**.

| Challenge ID | Challenge Text | Criteria / Target | Reward | Storage State Key |
| :--- | :--- | :--- | :---: | :--- |
| `weekly_streak` | **Consistent Learner** | Maintain a 5-day study streak. | +50 🪙 / +150 XP | `streak_days` |
| `weekly_subjects` | **All-Rounder Scholar** | Pass at least one quiz in 4 different subjects. | +60 🪙 / +200 XP | `mission_weekly_subjects_list` |
| `weekly_perfect` | **Perfectionist** | Score 100% on any 3 Quizzes or Challenges. | +75 🪙 / +250 XP | `mission_weekly_perfect_count` |
| `weekly_read` | **Avid Reader** | Complete the Daily Reading stories for Monday to Friday. | +50 🪙 / +150 XP | `mission_weekly_reading_days` |
| `weekly_games` | **Games Master** | Complete 10 Educational Games. | +40 🪙 / +120 XP | `mission_weekly_games_count` |

---

## 🛠️ 3. Verification & Reset Logic

To implement this on the web view runtime:

### A. Reset Listener
On application startup, check the saved date:
```javascript
function checkMissionsReset() {
  const todayStr = new Date().toDateString(); // e.g. "Thu Jun 18 2026"
  const lastResetDate = localStorage.getItem('last_missions_reset_date');
  
  if (lastResetDate !== todayStr) {
    // Perform Daily Reset
    localStorage.setItem('last_missions_reset_date', todayStr);
    resetDailyMissions();
  }
  
  // Weekly check (Sunday check)
  const currentDayOfWeek = new Date().getDay(); // 0 is Sunday
  const lastWeeklyReset = localStorage.getItem('last_weekly_reset_week');
  const currentWeekNum = getTodayAcademicWeek(); // e.g. 1
  
  if (currentDayOfWeek === 0 && lastWeeklyReset !== String(currentWeekNum)) {
    localStorage.setItem('last_weekly_reset_week', String(currentWeekNum));
    resetWeeklyMissions();
  }
}
```

### B. Progression Increment
Whenever an activity completes, invoke the incrementer:
```javascript
function incrementDailyMission(missionId, amount = 1) {
  if (missionId === 'daily_game') {
    let count = parseInt(localStorage.getItem('mission_daily_game_count') || '0');
    count += amount;
    localStorage.setItem('mission_daily_game_count', String(count));
    if (count >= 2) triggerMissionComplete('daily_game');
  }
  // Other missions handled accordingly...
}
```
Completing a mission displays an inline notification banner with sound effects and adds the currency directly to the local storage wallets.
