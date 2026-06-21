# Games Center - Implementation & Integration Guide
## Technical Design for Matteo's Learning Hub (WebView Context)

This document provides the technical guidelines for integrating the **Games Center** into the active HTML/CSS/JS codebase of Matteo's Learning Hub. It details the DOM structure, CSS layout directives, JS state variables, and local storage mappings.

---

## 🛠️ 1. DOM Architecture (`index.html`)

The Games Center is integrated as a new core viewport screen. In [index.html](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/index.html), we append a main view panel within the `#viewport-body` container or as a standalone screen section:

```html
<!-- Games Center Viewport Container -->
<div id="games-center-view" class="mode-view-panel" style="display: none;">
  <!-- Games Dashboard Header -->
  <div class="games-header-card">
    <div class="games-header-info">
      <h3>🎮 Games Center</h3>
      <p>Reinforce your skills, earn coins, and level up Kiko the Owl!</p>
    </div>
    <!-- Wallet Indicator -->
    <div class="games-wallet-widget">
      <span class="wallet-pill">🪙 <span id="wallet-coins-count">0</span> Coins</span>
      <span class="wallet-pill">📈 Lvl <span id="mascot-level-val">1</span> (<span id="mascot-xp-val">0</span> XP)</span>
    </div>
  </div>

  <!-- Games Category Carousel / Grid -->
  <div class="games-category-title">🎯 Subject Quests</div>
  <div class="games-grid" id="games-subject-quests-list">
    <!-- Rendered dynamically via app.js -->
  </div>

  <!-- Quick Play Section -->
  <div class="games-category-title">⚡ Quick Play Games</div>
  <div class="games-grid" id="games-quick-play-list">
    <!-- Memory Match, Puzzle Tiles, Pattern Finder -->
  </div>

  <!-- Tobi the Owl Mascot interaction panel -->
  <div class="games-mascot-panel">
    <div class="mascot-interaction-container">
      <div id="games-tobi-character-container">
        <!-- SVG / Image animations -->
        <img src="images/tobi_idle.png" id="tobi-games-avatar" alt="Tobi">
      </div>
      <div class="mascot-bubble-talk" id="tobi-speech-bubble">
        "Hello Matteo! Let's play a game to earn some tasty apples!"
      </div>
    </div>
    
    <!-- Feeding & Dress-up Controls -->
    <div class="mascot-controls-box">
      <button class="ws-btn-action" onclick="feedMascot('apple')">🍎 Feed Apple (10 🪙)</button>
      <button class="ws-btn-action" onclick="feedMascot('banana')">🍌 Feed Banana (15 🪙)</button>
      <button class="ws-btn-action" onclick="openMascotWardrobe()">👕 Dress Up</button>
    </div>
  </div>
</div>
```

---

## 🎨 2. Styling Directives (`index.css`)

To ensure premium looks, we define the styling for cards, grids, and progress indicators:

```css
/* Games Grid layout */
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

/* Premium Card with Glassmorphism and Hover Micro-animations */
.game-card {
  background: var(--card-bg);
  border: 1.5px solid var(--border-color);
  border-radius: 16px;
  padding: 16px;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 140px;
}
.game-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}

/* Wallet widget styling */
.games-wallet-widget {
  display: flex;
  gap: 8px;
  align-self: center;
}
.wallet-pill {
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid var(--accent);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  color: var(--accent);
}
```

---

## ⚙️ 3. JavaScript State Management (`app.js`)

State variables are initialized and persistent:

```javascript
// Games Center State Models
let playerCoins = 0;
let playerLifetimeStars = 0;
let mascotLevel = 1;
let mascotXP = 0;
let activeMascotOutfit = 'default';
let tobiHappiness = 100;

// Local Storage Initializers
function initGamesCenterState() {
  playerCoins = parseInt(localStorage.getItem('hub_coins') || '0');
  playerLifetimeStars = parseInt(localStorage.getItem('hub_stars') || '0');
  mascotLevel = parseInt(localStorage.getItem('mascot_level') || '1');
  mascotXP = parseInt(localStorage.getItem('mascot_xp') || '0');
  activeMascotOutfit = localStorage.getItem('mascot_active_outfit') || 'default';
  tobiHappiness = parseInt(localStorage.getItem('mascot_happiness') || '100');
  
  updateWalletUI();
}

function updateWalletUI() {
  const coinsEl = document.getElementById('wallet-coins-count');
  const levelEl = document.getElementById('mascot-level-val');
  const xpEl = document.getElementById('mascot-xp-val');
  
  if (coinsEl) coinsEl.innerText = playerCoins;
  if (levelEl) levelEl.innerText = mascotLevel;
  if (xpEl) xpEl.innerText = mascotXP;
}

function addCoins(amount) {
  playerCoins += amount;
  localStorage.setItem('hub_coins', String(playerCoins));
  updateWalletUI();
}

function addXP(amount) {
  mascotXP += amount;
  const xpNeeded = mascotLevel * 100;
  if (mascotXP >= xpNeeded) {
    mascotXP -= xpNeeded;
    mascotLevel++;
    localStorage.setItem('mascot_level', String(mascotLevel));
    triggerLevelUpEvent();
  }
  localStorage.setItem('mascot_xp', String(mascotXP));
  updateWalletUI();
}
```

---

## 🏆 4. Integrating the Custom Games Screen in `setMode`

To activate the view cleanly:
* Inside `setMode(mode)`:
  * Exclude `games` from subject button highlights.
  * Hide other views, clean the workspace container, and load the dynamic UI templates by calling `renderGamesDashboard()`.
