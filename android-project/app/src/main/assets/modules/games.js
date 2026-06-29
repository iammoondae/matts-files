// Matteo's Learning Hub - Games Module
// Houses the Gaming Center UI, mascot wardrobe/shop, and the 15 mini-games

function renderGamesDashboard() {
  currentMode = 'games';
  saveSessionState();
  
  // Set header titles
  document.getElementById('header-icon').innerText = '🎮';
  document.getElementById('header-title').innerText = 'Gaming Center';
  document.getElementById('header-subtitle').innerText = 'Play fun and interactive games aligned with MATATAG curriculum';
  
  // Reset UI elements
  document.getElementById('viewport-footer').style.display = 'none';
  document.getElementById('progress-bar').style.width = '0%';
  document.getElementById('slide-num-label').style.display = 'none';
  document.getElementById('slide-mode-label').innerText = 'Gaming Center';
  
  // Apply translation display
  const transBtn = document.getElementById('header-translation-btn');
  if (transBtn) transBtn.style.display = 'none';
  
  const qBody = document.getElementById('viewport-body');
  if (!qBody) return;

  const mascotName = getMascotName();

  // Render Games Center View
  let html = `
    <div class="games-dashboard-container">
      
      <!-- Wallet & Level Header Widget -->
      <div class="games-header-card">
        <div class="games-header-info">
          <h3>🎮 ${mascotName}'s Games Center</h3>
          <p>Reinforce your skills, earn coins, and level up ${mascotName} the Owl!</p>
        </div>
        <div class="games-wallet-widget">
          <span class="wallet-pill">🪙 <span id="wallet-coins-count">${playerCoins}</span> Coins</span>
          <span class="wallet-pill">📈 Lvl <span id="mascot-level-val">${mascotLevel}</span> (<span id="mascot-xp-val">${mascotXP}</span> XP)</span>
          <span class="wallet-pill">❤️ <span id="mascot-happiness-val">${tobiHappiness}</span>% Happy</span>
        </div>
      </div>

      <!-- Quick Play Games Grid -->
      <div class="games-category-title">⚡ Quick Play Games</div>
      <div class="games-grid">
        
        <div class="game-card" onclick="launchGame('memory')">
          <div class="game-card-info">
            <h4>🧠 Memory Match</h4>
            <p>Flip cards to match sense organs, science tools, and definitions. Focus and memorize!</p>
          </div>
          <div class="game-card-meta">
            <span class="game-card-rewards">➕ 10 🪙 / 40 XP</span>
            <button class="game-card-btn">Play Now</button>
          </div>
        </div>

        <div class="game-card" onclick="launchGame('pattern')">
          <div class="game-card-info">
            <h4>🔢 Pattern Finder</h4>
            <p>Complete missing sequence numbers, shapes, and Roman numeral math patterns.</p>
          </div>
          <div class="game-card-meta">
            <span class="game-card-rewards">➕ 10 🪙 / 40 XP</span>
            <button class="game-card-btn">Play Now</button>
          </div>
        </div>

        <div class="game-card" onclick="launchGame('scramble')">
          <div class="game-card-info">
            <h4>🔍 Word Scramble</h4>
            <p>Unscramble important vocabulary words from your science and math lessons!</p>
          </div>
          <div class="game-card-meta">
            <span class="game-card-rewards">➕ 10 🪙 / 40 XP</span>
            <button class="game-card-btn">Play Now</button>
          </div>
        </div>

        <div class="game-card" onclick="launchGame('speedmath')">
          <div class="game-card-info">
            <h4>➕ Speed Math</h4>
            <p>Solve as many arithmetic questions as you can before the 30-second timer runs out!</p>
          </div>
          <div class="game-card-meta">
            <span class="game-card-rewards">➕ 10 🪙 / 40 XP</span>
            <button class="game-card-btn">Play Now</button>
          </div>
        </div>

        <div class="game-card" onclick="launchGame('sentencebuilder')">
          <div class="game-card-info">
            <h4>✍️ Sentence Builder</h4>
            <p>Arrange scrambled words in the correct grammatical order to construct logical sentences!</p>
          </div>
          <div class="game-card-meta">
            <span class="game-card-rewards">➕ 10 🪙 / 40 XP</span>
            <button class="game-card-btn">Play Now</button>
          </div>
        </div>

        <div class="game-card" onclick="launchGame('factorfiction')">
          <div class="game-card-info">
            <h4>🔬 Fact or Fiction</h4>
            <p>Answer rapid-fire True/False scientific statements before the timer runs out!</p>
          </div>
          <div class="game-card-meta">
            <span class="game-card-rewards">➕ 10 🪙 / 40 XP</span>
            <button class="game-card-btn">Play Now</button>
          </div>
        </div>

        <div class="game-card" onclick="launchGame('fractionslice')">
          <div class="game-card-info">
            <h4>🍕 Fraction Slice</h4>
            <p>Look at visual shaded shape grids and select the correct fraction notation!</p>
          </div>
          <div class="game-card-meta">
            <span class="game-card-rewards">➕ 10 🪙 / 40 XP</span>
            <button class="game-card-btn">Play Now</button>
          </div>
        </div>

        <div class="game-card" onclick="launchGame('gooddeedssort')">
          <div class="game-card-info">
            <h4>🧘‍♂️ Good Deeds Sort</h4>
            <p>Sort daily behavioral scenarios into good actions or actions to iwasan (avoid)!</p>
          </div>
          <div class="game-card-meta">
            <span class="game-card-rewards">➕ 10 🪙 / 40 XP</span>
            <button class="game-card-btn">Play Now</button>
          </div>
        </div>

        <div class="game-card" onclick="launchGame('bodyorganmatcher')">
          <div class="game-card-info">
            <h4>🫁 Organ Matcher</h4>
            <p>Match human body organs and sense organs to their correct life functions!</p>
          </div>
          <div class="game-card-meta">
            <span class="game-card-rewards">➕ 10 🪙 / 40 XP</span>
            <button class="game-card-btn">Play Now</button>
          </div>
        </div>

        <div class="game-card" onclick="launchGame('oddoneout')">
          <div class="game-card-info">
            <h4>🧩 Odd One Out</h4>
            <p>Find the word, shape, or number that does not belong to the group!</p>
          </div>
          <div class="game-card-meta">
            <span class="game-card-rewards">➕ 10 🪙 / 40 XP</span>
            <button class="game-card-btn">Play Now</button>
          </div>
        </div>

        <div class="game-card" onclick="launchGame('historytimeline')">
          <div class="game-card-info">
            <h4>⏳ History Timeline</h4>
            <p>Sequence community, historical, and daily events in chronological order!</p>
          </div>
          <div class="game-card-meta">
            <span class="game-card-rewards">➕ 10 🪙 / 40 XP</span>
            <button class="game-card-btn">Play Now</button>
          </div>
        </div>

        <div class="game-card" onclick="launchGame('empathyscenarios')">
          <div class="game-card-info">
            <h4>❤️ Empathy Helper</h4>
            <p>Choose the most kind, polite, and helpful response to support a friend!</p>
          </div>
          <div class="game-card-meta">
            <span class="game-card-rewards">➕ 10 🪙 / 40 XP</span>
            <button class="game-card-btn">Play Now</button>
          </div>
        </div>



        <div class="game-card" onclick="launchGame('numberbuilder')">
          <div class="game-card-info">
            <h4>🔢 Number Builder Blitz</h4>
            <p>Tap number and operator tiles to build the target number before time runs out!</p>
          </div>
          <div class="game-card-meta">
            <span class="game-card-rewards">➕ 10 🪙 / 40 XP</span>
            <button class="game-card-btn">Play Now</button>
          </div>
        </div>

        <div class="game-card" onclick="launchGame('wordgarden')">
          <div class="game-card-info">
            <h4>🌼 Word Garden</h4>
            <p>Match pictures to the correct word and watch your garden bloom — no timer, no pressure!</p>
          </div>
          <div class="game-card-meta">
            <span class="game-card-rewards">➕ 10 🪙 / 40 XP</span>
            <button class="game-card-btn">Play Now</button>
          </div>
        </div>

        <div class="game-card" onclick="launchGame('sciencesort')">
          <div class="game-card-info">
            <h4>🧪 Science Sort Lab</h4>
            <p>Sort animals, materials, and phenomena into the correct science category — no timer needed!</p>
          </div>
          <div class="game-card-meta">
            <span class="game-card-rewards">➕ 10 🪙 / 40 XP</span>
            <button class="game-card-btn">Play Now</button>
          </div>
        </div>

      </div>

      <!-- Mascot Panel -->
      <div class="games-category-title">🦉 Interact with ${mascotName}</div>
      <div class="games-mascot-panel">
        <div class="mascot-interaction-container">
          <div class="tobi-avatar-box">
            <img src="${getMascotImg()}" class="tobi-games-img bouncing" id="tobi-avatar-img" alt="${mascotName}" style="width: 70px; height: 70px; object-fit: contain;">
          </div>
          <div class="mascot-speech-bubble" id="tobi-speech-bubble">
            "Hi! I am ${mascotName}. Feed me fruit or play some games to make me happy!"
          </div>
        </div>
        
        <div class="mascot-controls-box">
          <button class="ws-btn-action" onclick="feedMascot('apple')" style="background: rgba(239, 68, 68, 0.08); border-color: #ef4444; color: #ef4444;">🍎 Feed Apple (10 🪙)</button>
          <button class="ws-btn-action" onclick="feedMascot('banana')" style="background: rgba(234, 179, 8, 0.08); border-color: #eab308; color: #eab308;">🍌 Feed Banana (15 🪙)</button>
          <button class="ws-btn-action" onclick="openMascotWardrobe()" style="background: rgba(59, 130, 246, 0.08); border-color: var(--accent); color: var(--accent);">👕 Wardrobe</button>
          <button class="ws-btn-action" onclick="openHubShopModal()" style="background: rgba(16, 185, 129, 0.08); border-color: #10b981; color: #10b981;">🛒 Shop</button>
        </div>
      </div>

      <!-- Achievements Trophy Showcase -->
      <div class="games-category-title">🏆 Trophy Showcase</div>
      <div class="games-grid" id="trophy-showcase-grid">
        <!-- Filled dynamically -->
      </div>

    </div>
  `;

  qBody.innerHTML = html;
  renderTrophiesGrid();
}

function renderTrophiesGrid() {
  const grid = document.getElementById('trophy-showcase-grid');
  if (!grid) return;

  const streakVal = parseInt(safeStorage.getItem('streak_days') || '0');
  const gamesPlayed = parseInt(safeStorage.getItem('games_played_count') || '0');

  const trophies = [
    { id: 'streak_3', name: 'Early Bird 🐦', desc: 'Reach a 3-day study streak.', target: 3, current: streakVal, type: 'streak' },
    { id: 'streak_7', name: 'Daily Scholar 📚', desc: 'Reach a 7-day study streak.', target: 7, current: streakVal, type: 'streak' },
    { id: 'games_5', name: 'Game Rookie 🎮', desc: 'Play 5 games in the Gaming Center.', target: 5, current: gamesPlayed, type: 'games' },
    { id: 'games_10', name: 'Game Master 🏆', desc: 'Play 10 games in the Gaming Center.', target: 10, current: gamesPlayed, type: 'games' }
  ];

  let html = '';
  trophies.forEach(t => {
    const isUnlocked = t.current >= t.target;
    const isClaimed = safeStorage.getItem(`claimed_trophy_${t.id}`) === 'true';

    html += `
      <div class="game-card" style="min-height: 120px; opacity: ${isUnlocked ? '1' : '0.6'}; border-color: ${isClaimed ? '#10b981' : (isUnlocked ? '#eab308' : 'var(--border-color)')};">
        <div class="game-card-info">
          <h4>${t.name} ${isUnlocked ? '🔓' : '🔒'}</h4>
          <p>${t.desc} (Progress: ${t.current}/${t.target})</p>
        </div>
        <div class="game-card-meta" style="margin-top: 10px;">
          <span class="game-card-rewards" style="color: ${isUnlocked ? '#eab308' : 'var(--text-muted)'}">🎁 +50 🪙</span>
          ${isClaimed 
            ? `<span style="font-size: 12px; color: #10b981; font-weight: 700;">✅ Claimed</span>`
            : (isUnlocked 
                ? `<button class="game-card-btn" onclick="claimTrophyReward('${t.id}')" style="background: #eab308; color: white;">Claim</button>`
                : `<button class="game-card-btn" style="background: var(--border-color); color: var(--text-muted); cursor: not-allowed;" disabled>Locked</button>`
              )
          }
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
}

function claimTrophyReward(achId) {
  safeStorage.setItem(`claimed_trophy_${achId}`, 'true');
  addCoins(50);
  initConfetti();
  renderTrophiesGrid();
  
  if (musicEnabled) {
    const sfx = new Audio('correct.wav');
    sfx.play().catch(() => {});
  }
}

// Feeding Matteo helper
function feedMascot(snack) {
  const cost = snack === 'apple' ? 10 : 15;
  const happinessBoost = snack === 'apple' ? 15 : 25;
  
  if (playerCoins < cost) {
    alert("❌ Not enough coins! Play games or score well on quizzes to earn coins!");
    return;
  }
  
  playerCoins -= cost;
  safeStorage.setItem('hub_coins', String(playerCoins));
  tobiHappiness = Math.min(100, tobiHappiness + happinessBoost);
  safeStorage.setItem('mascot_happiness', String(tobiHappiness));
  
  // Save custom bubble message
  const speech = document.getElementById('tobi-speech-bubble');
  if (speech) {
    speech.innerText = snack === 'apple' 
      ? "😋 Crunch! Thank you for the yummy apple!" 
      : "🍌 Mmm! Bananas are my favorite! Thank you, Matteo!";
  }
  
  // Play sound
  if (musicEnabled) {
    const sfx = new Audio('correct.wav');
    sfx.play().catch(() => {});
  }
  
  updateWalletUI();
  
  const happinessEl = document.getElementById('mascot-happiness-val');
  if (happinessEl) happinessEl.innerText = String(tobiHappiness);
}

// Shop Modals Integration
function openHubShopModal() {
  const modal = document.getElementById('hub-shop-modal');
  if (!modal) return;
  
  modal.style.display = 'flex';
  const coinsEl = document.getElementById('shop-wallet-coins');
  if (coinsEl) coinsEl.innerText = `🪙 ${playerCoins} Coins`;
  
  const listEl = document.getElementById('hub-shop-items-list');
  if (!listEl) return;
  
  const mName = getMascotName();
  let html = '';
  SHOP_ITEMS.forEach(item => {
    const isOwned = ownedOutfits.includes(item.id);
    const displayName = item.name.replace(/Kiko|Tobi/g, mName);
    const displayDesc = item.desc.replace(/Kiko|Tobi/g, mName);
    html += `
      <div class="shop-item-row">
        <div class="shop-item-info">
          <h4>${displayName}</h4>
          <p>${displayDesc}</p>
        </div>
        <div>
          ${isOwned 
            ? `<button class="shop-buy-btn owned">Owned</button>`
            : `<button class="shop-buy-btn" onclick="buyShopItem('${item.id}', ${item.cost})">${item.cost} 🪙</button>`
          }
        </div>
      </div>
    `;
  });
  listEl.innerHTML = html;
}

function closeHubShopModal() {
  const modal = document.getElementById('hub-shop-modal');
  if (modal) modal.style.display = 'none';
}

function buyShopItem(itemId, cost) {
  if (playerCoins < cost) {
    alert("❌ Not enough coins! Keep studying to earn more coins!");
    return;
  }
  
  playerCoins -= cost;
  safeStorage.setItem('hub_coins', String(playerCoins));
  ownedOutfits.push(itemId);
  safeStorage.setItem('hub_owned_outfits', JSON.stringify(ownedOutfits));
  
  closeHubShopModal();
  openHubShopModal();
  updateWalletUI();
  
  if (musicEnabled) {
    const sfx = new Audio('correct.wav');
    sfx.play().catch(() => {});
  }
}

// Wardrobe Modal Integration
function openMascotWardrobe() {
  const modal = document.getElementById('mascot-wardrobe-modal');
  if (!modal) return;
  
  modal.style.display = 'flex';
  const mascotName = getMascotName();
  const titleEl = modal.querySelector('h2');
  if (titleEl) {
    titleEl.innerText = `👕 ${mascotName}'s Wardrobe`;
  }
  
  const listEl = document.getElementById('mascot-wardrobe-list');
  if (!listEl) return;
  
  let html = '';
  const allOutfits = [
    { id: 'default', name: 'Default 🦉', emoji: '🦉' },
    { id: 'glasses', name: 'Glasses 🕶️', emoji: '🦉🕶️' },
    { id: 'grad', name: 'Grad Cap 🎓', emoji: '🦉🎓' },
    { id: 'explorer', name: 'Explorer 🤠', emoji: '🦉🤠' },
    { id: 'barong', name: 'Barong 👕', emoji: '🦉👕' },
    { id: 'crown', name: 'Crown 👑', emoji: '🦉👑' }
  ];
  
  allOutfits.forEach(outfit => {
    const isOwned = ownedOutfits.includes(outfit.id);
    if (isOwned) {
      const isActive = activeMascotOutfit === outfit.id;
      html += `
        <div class="wardrobe-item-card ${isActive ? 'active' : ''}" onclick="equipOutfit('${outfit.id}')">
          <div style="font-size: 32px; margin-bottom: 8px;">${outfit.emoji}</div>
          <div style="font-size: 12px; font-weight: 600;">${outfit.name}</div>
        </div>
      `;
    }
  });
  listEl.innerHTML = html;
}

function closeMascotWardrobe() {
  const modal = document.getElementById('mascot-wardrobe-modal');
  if (modal) modal.style.display = 'none';
}

function equipOutfit(outfitId) {
  activeMascotOutfit = outfitId;
  safeStorage.setItem('mascot_active_outfit', outfitId);
  
  const avatar = document.getElementById('tobi-avatar-img');
  if (avatar) avatar.src = getMascotImg();
  
  closeMascotWardrobe();
  openMascotWardrobe();
}

// Games Engines Integration (Memory Match, Pattern Finder, Word Scramble, Speed Math)
let activeGame = null;
let gameMemoryCards = [];
let gameMemoryFlipped = [];
let gameMemoryMatches = 0;

let gamePatternQuestionIdx = 0;
let gamePatternScore = 0;

let gameScrambleWord = "";
let gameScrambleOriginal = "";
let gameScrambleGuesses = [];
let gameScrambleScore = 0;
let gameScrambleWordIdx = 0;
let gameScrambleWordsActive = [];
const gameScramblePool = {
  1: ["EYE", "EAR", "NOSE", "HAND", "PLANT", "SUN", "RAIN", "WATER", "FOOD", "BODY", "DOG", "CAT", "BOY", "GIRL", "BOOK", "TREE", "FISH", "MOON", "STAR", "HOME"],
  2: ["SENSES", "SIGHT", "HEAR", "TASTE", "SMELL", "TOUCH", "FLOWER", "LEAVES", "ROOTS", "ANIMAL", "FRUIT", "SEED", "LIGHT", "SOIL", "GRASS", "BIRD", "FROG", "INSECT", "STONE", "RIVER"],
  3: ["POLYGON", "ANGLE", "MIXTURE", "SOLID", "LIQUID", "GAS", "SCIENCE", "MATTER", "SQUARE", "TRIANGLE", "OXYGEN", "VOLUME", "WEIGHT", "VERTEX", "SOLUTE", "SOLVENT", "FREEZING", "MELTING", "STEAM", "SHADOW"],
  4: ["FRACTION", "DECIMAL", "HABITAT", "ORGANISM", "VOLTAGE", "GRAVITY", "PRODUCER", "CONSUMER", "ENERGY", "FOREST", "ECOLOGY", "PREDATOR", "COMPASS", "CLIMATE", "WEATHER", "NUCLEUS", "FOSSIL", "GLACIER", "MINERAL", "DISEASE"],
  5: ["ECOSYSTEM", "PREDATOR", "SPECIES", "ATMOSPHERE", "FRICTION", "PHOTOSYNTHESIS", "REPRODUCTION", "SOLUTION", "VELOCITY", "NUTRITION", "HUMIDITY", "PRESSURE", "BAROMETER", "ESTUARY", "COMBUSTION", "CORROSION", "MUTATION", "HEREDITY", "ELECTRON", "MOLECULE"],
  6: ["BIODIVERSITY", "ADAPTATION", "GEOTHERMAL", "CONSERVATION", "EVAPORATION", "CONDENSATION", "PRECIPITATION", "GENERATOR", "RESPIRATION", "CIRCULATION", "POLLINATION", "GERMINATION", "CONVECTION", "RADIATION", "CONDUCTION", "COMMUNITY", "SATELLITE", "BIOSPHERE", "EARTHQUAKE", "SEISMOGRAPH"]
};

let gameSpeedMathTimer = 30;
let gameSpeedMathScore = 0;
let gameSpeedMathTotal = 0;
let gameSpeedMathTimerInterval = null;
let gameSpeedMathQuestion = {};
const gamePatternQuestions = [
  { q: "2, 4, 6, 8, __", choices: ["9", "10", "11", "12"], ans: 1 },
  { q: "25, 50, 75, __", choices: ["80", "90", "100", "120"], ans: 2 },
  { q: "100, 200, 300, __", choices: ["350", "400", "500", "600"], ans: 1 },
  { q: "I, II, III, IV, __", choices: ["V", "VI", "X", "XV"], ans: 0 },
  { q: "1, 3, 5, 7, __", choices: ["8", "9", "10", "11"], ans: 1 },
  { q: "5, 10, 15, 20, __", choices: ["22", "24", "25", "30"], ans: 2 },
  { q: "10, 20, 30, 40, __", choices: ["45", "50", "60", "70"], ans: 1 },
  { q: "3, 6, 9, 12, __", choices: ["13", "14", "15", "16"], ans: 2 },
  { q: "4, 8, 12, 16, __", choices: ["18", "20", "22", "24"], ans: 1 },
  { q: "50, 45, 40, 35, __", choices: ["25", "30", "32", "34"], ans: 1 },
  { q: "20, 18, 16, 14, __", choices: ["10", "12", "13", "15"], ans: 1 },
  { q: "100, 90, 80, 70, __", choices: ["50", "60", "65", "70"], ans: 1 },
  { q: "A, C, E, G, __", choices: ["H", "I", "J", "K"], ans: 1 },
  { q: "Z, Y, X, W, __", choices: ["U", "V", "T", "S"], ans: 1 },
  { q: "1, 2, 4, 8, __", choices: ["10", "12", "14", "16"], ans: 3 },
  { q: "10, 15, 20, 25, __", choices: ["26", "28", "30", "35"], ans: 2 },
  { q: "11, 22, 33, 44, __", choices: ["50", "55", "60", "66"], ans: 3 },
  { q: "8, 16, 24, 32, __", choices: ["36", "38", "40", "42"], ans: 2 },
  { q: "30, 60, 90, 120, __", choices: ["130", "140", "150", "160"], ans: 2 },
  { q: "9, 18, 27, 36, __", choices: ["40", "42", "45", "48"], ans: 2 }
];


// Game 5: Sentence Builder
let gameSentenceBuilderScore = 0;
let gameSentenceBuilderIndex = 0;
let gameSentenceBuilderSelected = [];
let gameSentenceBuilderQuestion = {};
const gameSentenceBuilderPool = {
  1: [
    "The dog runs.", "I love school.", "She is kind.", "We play games.", "A cat sleeps.",
    "Sun is hot.", "Rain is cold.", "Birds can sing.", "Fish swim fast.", "Apple is red.",
    "This is big.", "I can jump.", "See the tree.", "Like my mom.", "A red pen.",
    "The blue sky.", "Play with me.", "My book is here.", "Eat the food.", "The clean water."
  ],
  2: [
    "My teacher is nice.", "Plants need water daily.", "We see with eyes.", "Matteo loves sweet apples.", "Please speak polite words.",
    "Matteo plays clean games.", "Bears sleep in winter.", "Earth goes round sun.", "Bees make sweet honey.", "Frogs jump very high.",
    "The river water flows.", "Always wash dirty hands.", "Stars shine at night.", "We read funny books.", "The moon looks bright.",
    "Respect all other people.", "Birds build warm nests.", "Seeds grow in soil.", "A triangle has three sides.", "Keep your desk clean."
  ],
  3: [
    "Bantay is a loyal dog.", "We will visit Luneta Park.", "She speaks kind words gently.", "Matteo studies his math lessons.", "Clean water is very important.",
    "Our school plaza is clean.", "They walk home together safely.", "Good children respect their elders.", "Healthy food gives us energy.", "Science helps us understand nature.",
    "A polygon has straight closed lines.", "Lungs help us breathe fresh air.", "Always speak the truth clearly.", "The sun rises in the east.", "We use subtraction to find differences.",
    "Matter can be solid or liquid.", "Spiders have eight legs and spin webs.", "The solar system has eight planets.", "Recycle plastic bottles to save energy.", "A healthy mind is very important."
  ]
};

// Game 6: Fact or Fiction
let gameFactOrFictionScore = 0;
let gameFactOrFictionTotal = 0;
let gameFactOrFictionTimer = 30;
let gameFactOrFictionTimerInterval = null;
let gameFactOrFictionQuestion = {};
const gameFactOrFictionPool = {
  1: [
    { q: "Fish live in water.", a: true },
    { q: "Dogs can fly in the sky.", a: false },
    { q: "The sun is hot.", a: true },
    { q: "Plants eat ice cream.", a: false },
    { q: "Water is wet.", a: true },
    { q: "Birds have four legs.", a: false },
    { q: "Cats say meow.", a: true },
    { q: "Fire is very cold.", a: false },
    { q: "We sleep at night.", a: true },
    { q: "Apples grow on rocks.", a: false },
    { q: "Frogs can jump.", a: true },
    { q: "Ice is very hot.", a: false },
    { q: "Bananas are yellow.", a: true },
    { q: "Pencils can talk.", a: false },
    { q: "We have two eyes.", a: true },
    { q: "Pigs have wings.", a: false },
    { q: "Milk is white.", a: true },
    { q: "A ball is square.", a: false },
    { q: "Trees are living things.", a: true },
    { q: "Cars sleep in beds.", a: false }
  ],
  2: [
    { q: "Plants need sunlight to grow.", a: true },
    { q: "We taste food with our nose.", a: false },
    { q: "Stones can grow bigger.", a: false },
    { q: "Birds have feathers.", a: true },
    { q: "Roots absorb water from soil.", a: true },
    { q: "Ice melts when heated.", a: true },
    { q: "Spiders have ten legs.", a: false },
    { q: "Wind is moving air.", a: true },
    { q: "Human teeth are made of wood.", a: false },
    { q: "Heavy rocks float on water.", a: false },
    { q: "Cows eat green grass.", a: true },
    { q: "The sun goes around the moon.", a: false },
    { q: "Fish use gills to breathe.", a: true },
    { q: "Rain comes from clouds.", a: true },
    { q: "Books are made of steel.", a: false },
    { q: "Seeds grow into new plants.", a: true },
    { q: "Salt tastes sweet.", a: false },
    { q: "Dolphins live in the ocean.", a: true },
    { q: "An insect has six legs.", a: true },
    { q: "Paper is made from trees.", a: true }
  ],
  3: [
    { q: "Lungs help us breathe air.", a: true },
    { q: "A solid shape is always liquid.", a: false },
    { q: "The heart pumps blood.", a: true },
    { q: "Condensation turns gas to liquid.", a: true },
    { q: "Water boils at zero degrees.", a: false },
    { q: "The moon makes its own light.", a: false },
    { q: "Magnets pull iron objects.", a: true },
    { q: "Sound travels through air.", a: true },
    { q: "Stems support leaves and flowers.", a: true },
    { q: "Plastic comes from outer space.", a: false },
    { q: "A triangle has three internal angles.", a: true },
    { q: "Evaporation turns liquid to gas.", a: true },
    { q: "A square has five corners.", a: false },
    { q: "Photosynthesis makes plant food.", a: true },
    { q: "Our skeleton has zero bones.", a: false },
    { q: "Lava is hot melted rock.", a: true },
    { q: "A polygon can have curved sides.", a: false },
    { q: "Light travels slower than sound.", a: false },
    { q: "Oxygen is gas that we breathe in.", a: true },
    { q: "Gravity pulls things down to Earth.", a: true }
  ]
};

// Game 7: Fraction Slice
let gameFractionSliceScore = 0;
let gameFractionSliceIndex = 0;
let gameFractionSliceQuestion = {};

// Game 8: Good Deeds Sort
let gameGoodDeedsSortScore = 0;
let gameGoodDeedsSortIndex = 0;
let gameGoodDeedsSortQuestion = {};
const gameGoodDeedsSortPool = {
  good: [
    "Saying Po and Opo", "Helping mom clean", "Sharing your toys", "Listening to teacher", "Greeting elders politely",
    "Planting small seeds", "Saying thank you", "Sweeping the floor", "Returning lost items", "Waiting for your turn",
    "Feeding street dogs", "Saying sorry when wrong", "Opening door for someone", "Conserving clean water", "Giving seat to elderly",
    "Turning off unused lights", "Picking up fallen trash", "Comforting a crying friend", "Doing homework early", "Speaking in a gentle voice"
  ],
  bad: [
    "Leaving toys scattered", "Shouting at friends", "Throwing trash anywhere", "Talking with mouth full", "Wasting clean water",
    "Drawing on walls", "Sneaking out to play", "Interrupting elders", "Tearing book pages", "Taking things without asking",
    "Laughing at classmates", "Teasing street animals", "Pushing in the queue", "Playing during class time", "Wasting food during meals",
    "Slamming the wooden door", "Scribbling on library books", "Hiding broken items", "Ignoring parents' calls", "Telling lies to friends"
  ]
};

// Game 9: Body Organ Matcher
let gameBodyOrganMatcherScore = 0;
let gameBodyOrganMatcherIndex = 0;
let gameBodyOrganMatcherQuestion = {};
const gameBodyOrganMatcherPool = [
  { item: "🧠 Brain", match: "Thinking & control" },
  { item: "❤️ Heart", match: "Pumps blood" },
  { item: "🫁 Lungs", match: "Breathing air" },
  { item: "👁️ Eyes", match: "Seeing colors" },
  { item: "👂 Ears", match: "Hearing sounds" },
  { item: "👃 Nose", match: "Smelling flowers" },
  { item: "👅 Tongue", match: "Tasting food" },
  { item: "👋 Skin", match: "Feeling temperature" },
  { item: "🦴 Bones", match: "Body support" },
  { item: "🥩 Muscles", match: "Body movement" },
  { item: "🦷 Teeth", match: "Chewing food" },
  { item: "🥤 Stomach", match: "Digesting meals" },
  { item: "🩸 Blood Vessels", match: "Carrying nutrients" },
  { item: "🦿 Joints", match: "Bending limbs" },
  { item: "🧴 Sweat Glands", match: "Cooling body" },
  { item: "🥛 Liver", match: "Cleaning blood toxins" },
  { item: "🧽 Kidneys", match: "Filtering water wastes" },
  { item: "🧼 Small Intestine", match: "Absorbing food nutrients" },
  { item: "🪱 Large Intestine", match: "Absorbing water wastes" },
  { item: "🚪 Throat", match: "Swallowing food" }
];

// Game 10: Odd One Out
let gameOddOneOutScore = 0;
let gameOddOneOutIndex = 0;
let gameOddOneOutQuestion = {};
const gameOddOneOutPool = [
  { list: ["Apple", "Banana", "Grapes", "Dog"], ans: 3, label: "Fruit" },
  { list: ["Dog", "Cat", "Lion", "Car"], ans: 3, label: "Animal" },
  { list: ["Car", "Bus", "Train", "Apple"], ans: 3, label: "Vehicle" },
  { list: ["Red", "Blue", "Green", "Chair"], ans: 3, label: "Color" },
  { list: ["2", "4", "6", "3"], ans: 3, label: "Even Number" },
  { list: ["Square", "Circle", "Triangle", "Pencil"], ans: 3, label: "Shape" },
  { list: ["1", "3", "5", "8"], ans: 3, label: "Odd Number" },
  { list: ["Doctor", "Teacher", "Nurse", "Tree"], ans: 3, label: "Profession" },
  { list: ["Sun", "Star", "Moon", "Fish"], ans: 3, label: "Sky Object" },
  { list: ["Water", "Milk", "Juice", "Stone"], ans: 3, label: "Liquid" },
  { list: ["Ruler", "Eraser", "Pencil", "Bird"], ans: 3, label: "School Supply" },
  { list: ["Shirt", "Pants", "Socks", "Apple"], ans: 3, label: "Clothing" },
  { list: ["Violin", "Guitar", "Piano", "Car"], ans: 3, label: "Musical Instrument" },
  { list: ["Desk", "Table", "Bed", "Bird"], ans: 3, label: "Furniture" },
  { list: ["Rose", "Tulip", "Daisy", "Dog"], ans: 3, label: "Flower" },
  { list: ["Bed", "Pillow", "Blanket", "Stove"], ans: 3, label: "Bedroom Item" },
  { list: ["Pan", "Knife", "Fork", "Pencil"], ans: 3, label: "Kitchen Utensil" },
  { list: ["Hammer", "Screwdriver", "Wrench", "Apple"], ans: 3, label: "Hardware Tool" },
  { list: ["Eagle", "Sparrow", "Pigeon", "Cat"], ans: 3, label: "Bird" },
  { list: ["Mercury", "Venus", "Mars", "Sun"], ans: 3, label: "Planet" }
];

// Game 11: History Timeline
let gameHistoryTimelineScore = 0;
let gameHistoryTimelineIndex = 0;
let gameHistoryTimelineQuestion = {};
const gameHistoryTimelinePool = [
  { events: ["Morning breakfast", "Morning classes begin", "Afternoon school dismissal"], ans: [0, 1, 2] },
  { events: ["First day of school", "Midterm exam week", "Summer graduation ceremony"], ans: [0, 1, 2] },
  { events: ["Sow seed in soil", "Sprout starts growing", "Harvest sweet fruits"], ans: [0, 1, 2] },
  { events: ["Put on uniform", "Ride school bus", "Enter the classroom"], ans: [0, 1, 2] },
  { events: ["Mix ingredients", "Bake in hot oven", "Eat delicious cake"], ans: [0, 1, 2] },
  { events: ["Buy raw food", "Cook on stove", "Wash dirty plates"], ans: [0, 1, 2] },
  { events: ["Sun rises up", "Sun high in sky", "Sun sets down"], ans: [0, 1, 2] },
  { events: ["Wear socks first", "Put on sneakers", "Tie shoelaces tight"], ans: [0, 1, 2] },
  { events: ["Baby starts crawling", "Toddler starts walking", "Child starts running"], ans: [0, 1, 2] },
  { events: ["Collect dry wood", "Light campfire spark", "Extinguish embers safely"], ans: [0, 1, 2] },
  { events: ["Caterpillar hatches", "Cocoon is formed", "Butterfly flies out"], ans: [0, 1, 2] },
  { events: ["Open blank book", "Read clean pages", "Close book cover"], ans: [0, 1, 2] },
  { events: ["Wet your hands", "Apply soapy foam", "Rinse off bubbles"], ans: [0, 1, 2] },
  { events: ["Water drops evaporate", "Clouds form condensation", "Rain falls down"], ans: [0, 1, 2] },
  { events: ["Put paper in printer", "Print color pages", "Staple papers together"], ans: [0, 1, 2] },
  { events: ["Peel yellow banana", "Eat soft fruit", "Discard banana peel"], ans: [0, 1, 2] },
  { events: ["Choose nice card", "Write sweet message", "Give card to mom"], ans: [0, 1, 2] },
  { events: ["Draw basic outline", "Color inside lines", "Frame finished drawing"], ans: [0, 1, 2] },
  { events: ["Buy cinema ticket", "Watch funny movie", "Leave theater lobby"], ans: [0, 1, 2] },
  { events: ["Boil hot water", "Steep tea leaves", "Drink warm tea"], ans: [0, 1, 2] }
];

// Game 12: Empathy Scenarios
let gameEmpathyScenariosScore = 0;
let gameEmpathyScenariosIndex = 0;
let gameEmpathyScenariosQuestion = {};
const gameEmpathyScenariosPool = [
  {
    q: "A classmate drops their pencil case and all pencils spill out on the floor.",
    choices: ["Laugh at them", "Ignore and keep writing", "Help them pick up the pencils", "Kick a pencil away"],
    ans: 2
  },
  {
    q: "Your friend is crying because they lost their lunch box at school.",
    choices: ["Tell them it is funny", "Share half of your sandwich", "Walk away to play", "Call them a crybaby"],
    ans: 1
  },
  {
    q: "An elderly neighbor is struggling to carry a light trash bag to the bin.",
    choices: ["Offer to carry it for them", "Run past them quickly", "Make fun of their speed", "Watch them from far away"],
    ans: 0
  },
  {
    q: "A new student sits alone during lunch, looking sad and shy.",
    choices: ["Throw paper at them", "Invite them to sit with you", "Stare at them in silence", "Whisper secrets about them"],
    ans: 1
  },
  {
    q: "You accidentally bump into a classmate and their drawing gets wrinkled.",
    choices: ["Say 'Sorry, it was an accident' and help flatten it", "Blame them for standing there", "Run away so they don't know", "Laugh at the wrinkled paper"],
    ans: 0
  },
  {
    q: "A classmate doesn't understand a math problem and feels frustrated.",
    choices: ["Tease them for not knowing", "Explain the step-by-step problem kindly", "Tell everyone they are slow", "Do it yourself without showing them"],
    ans: 1
  },
  {
    q: "Someone falls down on the playground and scrapes their knee.",
    choices: ["Point and laugh", "Keep running and ignore them", "Ask if they are okay and call a teacher", "Tell them to stop crying"],
    ans: 2
  },
  {
    q: "A classmate has no crayons left to color their school drawing.",
    choices: ["Hide your crayons", "Offer to share your color box", "Break their remaining pencil", "Show off your coloring skills"],
    ans: 1
  },
  {
    q: "Your younger brother is afraid of the dark and cannot sleep.",
    choices: ["Make scary ghost sounds", "Tell him he is silly", "Turn on a nightlight and sit with him", "Lock him in his room"],
    ans: 2
  },
  {
    q: "Your classmate is wearing glasses for the first time and looks self-conscious.",
    choices: ["Call them four-eyes", "Tell them they look smart and cool", "Stare at them all day", "Hide their glasses as a joke"],
    ans: 1
  },
  {
    q: "A friend is sad because their pet cat passed away.",
    choices: ["Tell them it was just a cat", "Listen to them and say you are sorry for their loss", "Tell them to get over it", "Talk about your own happy pet instead"],
    ans: 1
  },
  {
    q: "A classmate is being teased by other students during recess.",
    choices: ["Join in the teasing", "Stand with the classmate and tell a teacher", "Walk away and ignore it", "Record a video of it"],
    ans: 1
  },
  {
    q: "Your mother comes home looking exhausted after a long day at work.",
    choices: ["Demand she cooks immediately", "Offer her a glass of water and help tidy up", "Scream that you want to play games", "Make a mess in the kitchen"],
    ans: 1
  },
  {
    q: "A classmate drops their lunch tray and spills food on the floor.",
    choices: ["Laugh out loud with others", "Point and make a joke", "Help them clean up and offer some of your food", "Step over the food and walk away"],
    ans: 2
  },
  {
    q: "Your friend forgot their pencil on exam day and is panicking.",
    choices: ["Lend them your spare pencil", "Tell them it is their own fault", "Hide your pencils so they can't borrow one", "Tell the teacher they are irresponsible"],
    ans: 0
  },
  {
    q: "A classmate is struggling to read a sentence out loud in class.",
    choices: ["Giggle at their mistakes", "Whisper the word to help them gently", "Imitate their reading style", "Scream the correct word out loud"],
    ans: 1
  },
  {
    q: "A child loses their balloon and it floats away into the sky.",
    choices: ["Laugh at their sad face", "Tell them balloons are cheap anyway", "Comfort them and say it will be okay", "Pop another balloon in front of them"],
    ans: 2
  },
  {
    q: "Your grandmother is trying to read a label but cannot find her glasses.",
    choices: ["Help her search for her glasses", "Tell her she is too old", "Walk away and play outside", "Read the label for her in an angry voice"],
    ans: 0
  },
  {
    q: "A classmate sits alone on the bench because nobody wants to play with them.",
    choices: ["Kick a ball at them", "Ask them to join your game of tag", "Tell them they are not invited", "Walk past them in silence"],
    ans: 1
  },
  {
    q: "A classmate is nervous before giving a presentation to the class.",
    choices: ["Make funny faces to distract them", "Give them a thumbs up and smile supportively", "Boo them before they start", "Scream that they will fail"],
    ans: 1
  }
];

function launchGame(gameId) {
  activeGame = gameId;
  const modal = document.getElementById('game-play-modal');
  if (!modal) return;
  
  modal.style.display = 'flex';
  const title = document.getElementById('game-title-header');
  const canvasArea = document.getElementById('game-canvas-area');
  
  if (gameId === 'memory') {
    title.innerText = '🧠 Memory Match Game';
    setupMemoryGame(canvasArea);
  } else if (gameId === 'pattern') {
    title.innerText = '🔢 Pattern Finder Challenge';
    setupPatternGame(canvasArea);
  } else if (gameId === 'scramble') {
    title.innerText = '🔍 Word Scramble';
    setupScrambleGame(canvasArea);
  } else if (gameId === 'speedmath') {
    title.innerText = '➕ Speed Math Challenge';
    setupSpeedMathGame(canvasArea);
  } else if (gameId === 'sentencebuilder') {
    title.innerText = '✍️ Sentence Builder';
    setupSentenceBuilderGame(canvasArea);
  } else if (gameId === 'factorfiction') {
    title.innerText = '🔬 Fact or Fiction';
    setupFactOrFictionGame(canvasArea);
  } else if (gameId === 'fractionslice') {
    title.innerText = '🍕 Fraction Slice';
    setupFractionSliceGame(canvasArea);
  } else if (gameId === 'gooddeedssort') {
    title.innerText = '🧘‍♂️ Good Deeds Sort';
    setupGoodDeedsSortGame(canvasArea);
  } else if (gameId === 'bodyorganmatcher') {
    title.innerText = '🫁 Organ Matcher';
    setupBodyOrganMatcherGame(canvasArea);
  } else if (gameId === 'oddoneout') {
    title.innerText = '🧩 Odd One Out';
    setupOddOneOutGame(canvasArea);
  } else if (gameId === 'historytimeline') {
    title.innerText = '⏳ History Timeline';
    setupHistoryTimelineGame(canvasArea);
  } else if (gameId === 'empathyscenarios') {
    title.innerText = '❤️ Empathy Helper';
    setupEmpathyScenariosGame(canvasArea);

  } else if (gameId === 'numberbuilder') {
    title.innerText = '🔢 Number Builder Blitz';
    setupNumberBuilderGame(canvasArea);
  } else if (gameId === 'wordgarden') {
    title.innerText = '🌼 Word Garden';
    setupWordGardenGame(canvasArea);
  } else if (gameId === 'sciencesort') {
    title.innerText = '🧪 Science Sort Lab';
    setupScienceSortGame(canvasArea);
  }
}

function exitActiveGame() {
  const modal = document.getElementById('game-play-modal');
  if (modal) modal.style.display = 'none';
  activeGame = null;
  
  if (gameSpeedMathTimerInterval) {
    clearInterval(gameSpeedMathTimerInterval);
    gameSpeedMathTimerInterval = null;
  }
  if (gameFactOrFictionTimerInterval) {
    clearInterval(gameFactOrFictionTimerInterval);
    gameFactOrFictionTimerInterval = null;
  }
  if (gameNumberBuilderTimerInterval) {
    clearInterval(gameNumberBuilderTimerInterval);
    gameNumberBuilderTimerInterval = null;
  }
  // Sentence Rain cleanup removed

  renderGamesDashboard();
}

// 1. Memory Game Logic
function setupMemoryGame(container) {
  gameMemoryCards = [];
  gameMemoryFlipped = [];
  gameMemoryMatches = 0;
  
  const allPossiblePairs = [
    { value: '👁️', label: 'Sight' },
    { value: '👂', label: 'Hearing' },
    { value: '👃', label: 'Smell' },
    { value: '👅', label: 'Taste' },
    { value: '👋', label: 'Touch' },
    { value: '🔬', label: 'Inspect' },
    { value: '🌡️', label: 'Heat' },
    { value: '💡', label: 'Logic' },
    { value: '🍎', label: 'Apple' },
    { value: '🐱', label: 'Cat' },
    { value: '🚗', label: 'Car' },
    { value: '✈️', label: 'Plane' },
    { value: '🏫', label: 'School' },
    { value: '🌳', label: 'Tree' },
    { value: '☀️', label: 'Sun' },
    { value: '🌙', label: 'Moon' },
    { value: '⭐', label: 'Star' },
    { value: '🌧️', label: 'Rain' },
    { value: '📚', label: 'Book' },
    { value: '✏️', label: 'Pencil' }
  ];
  
  const chosenPairs = [...allPossiblePairs].sort(() => Math.random() - 0.5).slice(0, 8);
  const pairs = [];
  chosenPairs.forEach(p => {
    pairs.push({ value: p.value, label: p.label });
    pairs.push({ value: p.value, label: p.label });
  });
  
  // Shuffle cards
  pairs.sort(() => Math.random() - 0.5);
  
  let gridHTML = '<div class="game-memory-grid">';
  pairs.forEach((card, idx) => {
    gridHTML += `
      <div class="memory-card" id="mem-card-${idx}" onclick="flipMemoryCard(${idx}, '${card.value}')">
        ❓
      </div>
    `;
  });
  gridHTML += '</div>';
  
  container.innerHTML = `
    <div style="text-align: center; width: 100%;">
      <p style="font-size: 13.5px; color: var(--text-muted); margin-top: 0;">Match sensory symbols to verify pairs!</p>
      <div style="display: flex; justify-content: center; width: 100%;">
        ${gridHTML}
      </div>
      <div id="memory-game-status" style="font-weight: 700; margin-top: 15px; font-size: 14px; color: var(--accent);">Matches Found: 0 / 8</div>
    </div>
  `;
  
  // Initialize card trackers
  pairs.forEach((c, idx) => {
    gameMemoryCards.push({ value: c.value, isMatched: false, isFlipped: false });
  });
}

function flipMemoryCard(idx, value) {
  const card = gameMemoryCards[idx];
  if (card.isMatched || card.isFlipped || gameMemoryFlipped.length >= 2) return;
  
  const cardEl = document.getElementById(`mem-card-${idx}`);
  if (!cardEl) return;
  
  cardEl.innerText = value;
  cardEl.classList.add('flipped');
  card.isFlipped = true;
  gameMemoryFlipped.push(idx);
  
  if (gameMemoryFlipped.length === 2) {
    const idx1 = gameMemoryFlipped[0];
    const idx2 = gameMemoryFlipped[1];
    
    if (gameMemoryCards[idx1].value === gameMemoryCards[idx2].value) {
      // MATCH!
      setTimeout(() => {
        const c1 = document.getElementById(`mem-card-${idx1}`);
        const c2 = document.getElementById(`mem-card-${idx2}`);
        if (c1 && c2) {
          c1.classList.add('matched');
          c2.classList.add('matched');
        }
        gameMemoryCards[idx1].isMatched = true;
        gameMemoryCards[idx2].isMatched = true;
        gameMemoryFlipped = [];
        gameMemoryMatches++;
        
        const statusEl = document.getElementById('memory-game-status');
        if (statusEl) statusEl.innerText = `Matches Found: ${gameMemoryMatches} / 8`;
        
        if (musicEnabled) {
          const sfx = new Audio('correct.wav');
          sfx.play().catch(() => {});
        }
        
        if (gameMemoryMatches === 8) {
          completeGameRewards('memory');
        }
      }, 500);
    } else {
      // MISMATCH
      setTimeout(() => {
        const c1 = document.getElementById(`mem-card-${idx1}`);
        const c2 = document.getElementById(`mem-card-${idx2}`);
        if (c1 && c2) {
          c1.innerText = '❓';
          c1.classList.remove('flipped');
          c2.innerText = '❓';
          c2.classList.remove('flipped');
        }
        gameMemoryCards[idx1].isFlipped = false;
        gameMemoryCards[idx2].isFlipped = false;
        gameMemoryFlipped = [];
      }, 1000);
    }
  }
}

// 2. Pattern Game Logic
function setupPatternGame(container) {
  gamePatternQuestionIdx = 0;
  gamePatternScore = 0;
  renderPatternQuestion(container);
}

function renderPatternQuestion(container) {
  if (gamePatternQuestionIdx >= gamePatternQuestions.length) {
    completeGameRewards('pattern');
    return;
  }
  
  const question = gamePatternQuestions[gamePatternQuestionIdx];
  const originalIndices = question.choices.map((_, idx) => idx);
  for (let i = originalIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [originalIndices[i], originalIndices[j]] = [originalIndices[j], originalIndices[i]];
  }
  
  let choicesHTML = '';
  originalIndices.forEach((origIdx) => {
    choicesHTML += `
      <button class="ws-btn-action" onclick="answerPatternQuestion(${origIdx})" style="padding: 14px 20px; font-size: 16px; min-width: 120px; border-radius: 12px;">
        ${question.choices[origIdx]}
      </button>
    `;
  });
  
  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 400px; padding: 20px;">
      <div style="font-size: 14px; font-weight: 700; color: var(--accent); margin-bottom: 10px;">
        Question ${gamePatternQuestionIdx + 1} of ${gamePatternQuestions.length}
      </div>
      <h3 style="font-size: 32px; margin-bottom: 30px; color: var(--text-main); font-family: 'Outfit', sans-serif;">
        ${question.q}
      </h3>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 20px;">
        ${choicesHTML}
      </div>
      <div style="font-size: 13px; color: var(--text-muted);">Score: ${gamePatternScore} / ${gamePatternQuestions.length}</div>
    </div>
  `;
}

function answerPatternQuestion(idx) {
  const question = gamePatternQuestions[gamePatternQuestionIdx];
  const container = document.getElementById('game-canvas-area');
  
  if (idx === question.ans) {
    gamePatternScore++;
    if (musicEnabled) {
      const sfx = new Audio('correct.wav');
      sfx.play().catch(() => {});
    }
  } else {
    if (musicEnabled) {
      const sfx = new Audio('incorrect.wav');
      sfx.play().catch(() => {});
    }
  }
  
  gamePatternQuestionIdx++;
  renderPatternQuestion(container);
}

function completeGameRewards(gameId) {
  const container = document.getElementById('game-canvas-area');
  if (!container) return;
  
  // Increment games count
  let count = parseInt(safeStorage.getItem('games_played_count') || '0');
  count++;
  safeStorage.setItem('games_played_count', String(count));
  
  let win = true;
  let summaryText = "";
  if (gameId === 'pattern') {
    if (gamePatternScore < 3) win = false;
    summaryText = `You scored ${gamePatternScore} / 5.`;
  } else if (gameId === 'scramble') {
    if (gameScrambleScore < 3) win = false;
    summaryText = `You solved ${gameScrambleScore} / 3 words.`;
  } else if (gameId === 'speedmath') {
    if (gameSpeedMathScore < 10) win = false;
    summaryText = `You answered ${gameSpeedMathScore} questions correctly.`;
  } else if (gameId === 'sentencebuilder') {
    if (gameSentenceBuilderScore < 3) win = false;
    summaryText = `You solved ${gameSentenceBuilderScore} / 3 sentences.`;
  } else if (gameId === 'factorfiction') {
    if (gameFactOrFictionScore < 8) win = false;
    summaryText = `You answered ${gameFactOrFictionScore} questions correctly.`;
  } else if (gameId === 'fractionslice') {
    if (gameFractionSliceScore < 4) win = false;
    summaryText = `You scored ${gameFractionSliceScore} / 5.`;
  } else if (gameId === 'gooddeedssort') {
    if (gameGoodDeedsSortScore < 4) win = false;
    summaryText = `You sorted ${gameGoodDeedsSortScore} / 5 behaviors correctly.`;
  } else if (gameId === 'bodyorganmatcher') {
    if (gameBodyOrganMatcherScore < 4) win = false;
    summaryText = `You matched ${gameBodyOrganMatcherScore} / 5 organs correctly.`;
  } else if (gameId === 'oddoneout') {
    if (gameOddOneOutScore < 4) win = false;
    summaryText = `You scored ${gameOddOneOutScore} / 5 odd ones.`;
  } else if (gameId === 'historytimeline') {
    if (gameHistoryTimelineScore < 3) win = false;
    summaryText = `You ordered ${gameHistoryTimelineScore} / 3 timelines correctly.`;
  } else if (gameId === 'empathyscenarios') {
    if (gameEmpathyScenariosScore < 4) win = false;
    summaryText = `You solved ${gameEmpathyScenariosScore} / 5 empathy scenarios correctly.`;
  } else if (gameId === 'numberbuilder') {
    if (gameNumberBuilderScore < 3) win = false;
    summaryText = `You built ${gameNumberBuilderScore} / 5 correct expressions.`;
  } else if (gameId === 'wordgarden') {
    win = true; // Always win / completion based
    summaryText = `You planted ${gameWordGardenScore} flowers in your Word Garden!`;
  } else if (gameId === 'sciencesort') {
    if (gameScienceSortScore < 4) win = false;
    summaryText = `You sorted ${gameScienceSortScore} / 5 items correctly.`;
  }
  
  const coinsEarned = win ? 10 : 5;
  const xpEarned = win ? 40 : 25;
  
  addCoins(coinsEarned);
  addXP(xpEarned);
  initConfetti();
  
  container.innerHTML = `
    <div style="text-align: center; padding: 20px;">
      <div style="font-size: 72px; margin-bottom: 20px;">🏆</div>
      <h2 style="font-family: 'Outfit', sans-serif; font-size: 26px; color: var(--text-main); margin-bottom: 8px;">Game Completed!</h2>
      <p style="font-size: 15px; color: var(--text-muted); margin-bottom: 8px;">
        ${summaryText}
      </p>
      <p style="font-size: 15px; color: var(--text-muted); margin-bottom: 24px;">
        ${win ? 'Fantastic job! You won the challenge!' : 'Keep practicing! You completed the game!'}
      </p>
      <div style="display: flex; justify-content: center; gap: 16px; margin-bottom: 24px;">
        <span class="wallet-pill" style="font-size: 14px; font-weight: 700; color: #10b981; border-color: #10b981;">🪙 +${coinsEarned} Coins</span>
        <span class="wallet-pill" style="font-size: 14px; font-weight: 700; color: var(--accent);">📈 +${xpEarned} XP</span>
      </div>
      <button class="ws-btn-action" onclick="exitActiveGame()" style="padding: 10px 24px; font-size: 14px;">Return to Games Center</button>
    </div>
  `;
}

// 3. Word Scramble Game Logic
function getScrambleWords() {
  const grade = getActiveGradeNumber();
  const pool = gameScramblePool[grade] || gameScramblePool[3];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

function setupScrambleGame(container) {
  gameScrambleScore = 0;
  gameScrambleWordIdx = 0;
  gameScrambleWordsActive = getScrambleWords();
  startScrambleWord(container);
}

function startScrambleWord(container) {
  if (gameScrambleWordIdx >= gameScrambleWordsActive.length) {
    completeGameRewards('scramble');
    return;
  }
  
  gameScrambleOriginal = gameScrambleWordsActive[gameScrambleWordIdx];
  gameScrambleGuesses = [];
  
  let scrambled = gameScrambleOriginal.split('').sort(() => Math.random() - 0.5).join('');
  while (scrambled === gameScrambleOriginal && gameScrambleOriginal.length > 1) {
    scrambled = gameScrambleOriginal.split('').sort(() => Math.random() - 0.5).join('');
  }
  
  gameScrambleWord = scrambled;
  renderScrambleWord(container);
}

function renderScrambleWord(container) {
  let lettersHTML = '';
  const originalLetters = gameScrambleWord.split('');
  
  originalLetters.forEach((letter, idx) => {
    const isClicked = gameScrambleGuesses.includes(idx);
    lettersHTML += `
      <button class="ws-btn-action" 
              ${isClicked ? 'disabled style="opacity: 0.2; background: transparent; cursor: default; pointer-events: none;"' : ''} 
              onclick="clickScrambleLetter(${idx})" 
              style="padding: 10px 14px; font-size: 20px; font-weight: 700; width: 45px; height: 45px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center;">
        ${letter}
      </button>
    `;
  });
  
  let spelledWord = gameScrambleGuesses.map(idx => gameScrambleWord[idx]).join('');
  
  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 450px; padding: 20px; display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <div style="font-size: 14px; font-weight: 700; color: var(--accent);">
        Word ${gameScrambleWordIdx + 1} of ${gameScrambleWordsActive.length}
      </div>
      
      <div style="font-size: 13px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 2px;">Scrambled Letters:</div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-bottom: 10px;">
        ${lettersHTML}
      </div>
      
      <div style="font-size: 13px; color: var(--text-muted);">Your Spelled Guess:</div>
      <div style="font-size: 32px; font-weight: 800; font-family: 'Outfit', sans-serif; border-bottom: 2px dashed var(--accent); min-width: 180px; height: 45px; display: flex; align-items: center; justify-content: center; color: var(--text-main); letter-spacing: 4px;">
        ${spelledWord}
      </div>
      
      <div style="display: flex; gap: 12px; margin-top: 10px;">
        <button class="ws-btn-action" onclick="resetScrambleWord()" style="background: rgba(239, 68, 68, 0.08); border-color: #ef4444; color: #ef4444; padding: 8px 16px; font-size: 13px;">
          Clear ❌
        </button>
        <button class="ws-btn-action" onclick="submitScrambleGuess()" style="background: rgba(16, 185, 129, 0.08); border-color: #10b981; color: #10b981; padding: 8px 20px; font-size: 13px; font-weight: 700;">
          Check Guess ✔️
        </button>
      </div>
      
      <div style="font-size: 13px; color: var(--text-muted); margin-top: 15px;">Words Solved: ${gameScrambleScore} / ${gameScrambleWordsActive.length}</div>
    </div>
  `;
}

function clickScrambleLetter(idx) {
  if (!gameScrambleGuesses.includes(idx)) {
    gameScrambleGuesses.push(idx);
    const container = document.getElementById('game-canvas-area');
    if (container) renderScrambleWord(container);
  }
}

function resetScrambleWord() {
  gameScrambleGuesses = [];
  const container = document.getElementById('game-canvas-area');
  if (container) renderScrambleWord(container);
}

function submitScrambleGuess() {
  const container = document.getElementById('game-canvas-area');
  if (!container) return;
  const spelledWord = gameScrambleGuesses.map(idx => gameScrambleWord[idx]).join('');
  
  if (spelledWord === gameScrambleOriginal) {
    gameScrambleScore++;
    gameScrambleWordIdx++;
    if (musicEnabled) {
      const sfx = new Audio('correct.wav');
      sfx.play().catch(() => {});
    }
    
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--correct);">
        <div style="font-size: 48px; margin-bottom: 12px;">🌟</div>
        <h3 style="font-size: 24px; font-weight: 700;">Correct!</h3>
        <p style="font-size: 14px; color: var(--text-muted); margin-top: 8px;">"${gameScrambleOriginal}" is correct!</p>
      </div>
    `;
    
    setTimeout(() => {
      startScrambleWord(container);
    }, 1200);
  } else {
    if (musicEnabled) {
      const sfx = new Audio('incorrect.wav');
      sfx.play().catch(() => {});
    }
    alert("❌ Not quite! Try unscrambling it a different way!");
    resetScrambleWord();
  }
}

// 4. Speed Math Game Logic
function generateSpeedMathQuestion() {
  const grade = getActiveGradeNumber();
  let num1, num2, op, ans;
  
  if (grade <= 2) {
    op = Math.random() > 0.5 ? '+' : '-';
    if (op === '+') {
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      ans = num1 + num2;
    } else {
      num1 = Math.floor(Math.random() * 12) + 6;
      num2 = Math.floor(Math.random() * num1);
      ans = num1 - num2;
    }
  } else if (grade <= 4) {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
      op = '+';
      num1 = Math.floor(Math.random() * 40) + 10;
      num2 = Math.floor(Math.random() * 40) + 10;
      ans = num1 + num2;
    } else if (choice === 1) {
      op = '-';
      num1 = Math.floor(Math.random() * 80) + 20;
      num2 = Math.floor(Math.random() * 50) + 10;
      ans = num1 - num2;
    } else {
      op = '×';
      num1 = Math.floor(Math.random() * 8) + 2;
      num2 = Math.floor(Math.random() * 9) + 2;
      ans = num1 * num2;
    }
  } else {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
      op = '×';
      num1 = Math.floor(Math.random() * 12) + 3;
      num2 = Math.floor(Math.random() * 12) + 2;
      ans = num1 * num2;
    } else if (choice === 1) {
      op = '÷';
      num2 = Math.floor(Math.random() * 8) + 2;
      ans = Math.floor(Math.random() * 10) + 2;
      num1 = ans * num2;
    } else {
      op = '-';
      num1 = Math.floor(Math.random() * 500) + 100;
      num2 = Math.floor(Math.random() * 300) + 50;
      ans = num1 - num2;
    }
  }
  
  const choices = [ans];
  while (choices.length < 4) {
    const diff = Math.floor(Math.random() * 10) - 5;
    const fake = ans + (diff === 0 ? 3 : diff);
    if (!choices.includes(fake) && fake >= 0) {
      choices.push(fake);
    }
  }
  choices.sort(() => Math.random() - 0.5);
  
  return {
    text: `${num1} ${op} ${num2} = ?`,
    choices: choices,
    ans: choices.indexOf(ans)
  };
}

function setupSpeedMathGame(container) {
  gameSpeedMathScore = 0;
  gameSpeedMathTotal = 0;
  gameSpeedMathTimer = 30;
  
  if (gameSpeedMathTimerInterval) {
    clearInterval(gameSpeedMathTimerInterval);
  }
  
  gameSpeedMathQuestion = generateSpeedMathQuestion();
  
  gameSpeedMathTimerInterval = setInterval(() => {
    gameSpeedMathTimer--;
    const timerValEl = document.getElementById('speed-math-timer-val');
    const timerBarEl = document.getElementById('speed-math-timer-bar');
    
    if (timerValEl) timerValEl.innerText = gameSpeedMathTimer;
    if (timerBarEl) timerBarEl.style.width = `${(gameSpeedMathTimer / 30) * 100}%`;
    
    if (gameSpeedMathTimer <= 0) {
      clearInterval(gameSpeedMathTimerInterval);
      gameSpeedMathTimerInterval = null;
      completeGameRewards('speedmath');
    }
  }, 1000);
  
  renderSpeedMathQuestion(container);
}

function renderSpeedMathQuestion(container) {
  let choicesHTML = '';
  gameSpeedMathQuestion.choices.forEach((choice, idx) => {
    choicesHTML += `
      <button class="ws-btn-action" onclick="answerSpeedMathQuestion(${idx})" style="padding: 12px 16px; font-size: 18px; font-weight: 600; min-width: 100px; border-radius: 12px;">
        ${choice}
      </button>
    `;
  });
  
  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 400px; padding: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 13px; color: var(--text-muted); font-weight: 600;">⏱️ Time Left: <span id="speed-math-timer-val">${gameSpeedMathTimer}</span>s</span>
        <span style="font-size: 13px; color: var(--accent); font-weight: 700;">Target: 10 Correct</span>
      </div>
      <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.05); border-radius: 10px; margin-bottom: 24px; overflow: hidden;">
        <div id="speed-math-timer-bar" style="height: 100%; background: var(--accent); width: ${(gameSpeedMathTimer / 30) * 100}%; transition: width 1s linear;"></div>
      </div>
      
      <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px;">Solve to earn points!</div>
      <h3 style="font-size: 38px; font-weight: 800; font-family: 'Outfit', sans-serif; margin-bottom: 30px; color: var(--text-main); letter-spacing: 1px;">
        ${gameSpeedMathQuestion.text}
      </h3>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 24px;">
        ${choicesHTML}
      </div>
      
      <div style="font-size: 14px; font-weight: 600; color: var(--text-main);">
        Score: <span style="color: var(--correct);">${gameSpeedMathScore}</span> / ${gameSpeedMathTotal}
      </div>
    </div>
  `;
}

function answerSpeedMathQuestion(idx) {
  const container = document.getElementById('game-canvas-area');
  if (!container) return;
  gameSpeedMathTotal++;
  
  if (idx === gameSpeedMathQuestion.ans) {
    gameSpeedMathScore++;
    if (musicEnabled) {
      const sfx = new Audio('correct.wav');
      sfx.play().catch(() => {});
    }
  } else {
    if (musicEnabled) {
      const sfx = new Audio('incorrect.wav');
      sfx.play().catch(() => {});
    }
  }
  
  gameSpeedMathQuestion = generateSpeedMathQuestion();
  renderSpeedMathQuestion(container);
}


// ==========================================================================
// SCHEDULE SETTINGS PANEL
// ==========================================================================
// ==========================================================================

function openScheduleSettings() {
  openSettings();
  // Scroll to schedule section after drawer opens
  setTimeout(() => {
    const section = document.getElementById('settings-schedule-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }, 200);
}

function renderScheduleGrid() {
  const schedule = getScheduleConfig();
  const days = ['monday','tuesday','wednesday','thursday','friday'];
  const dayLabels = { monday:'Monday', tuesday:'Tuesday', wednesday:'Wednesday', thursday:'Thursday', friday:'Friday' };
  const subjects = [
    { key:'math', label:'🔢 Math' },
    { key:'science', label:'🔬 Science' },
    { key:'english', label:'🙋 English' },
    { key:'filipino', label:'🇵🇭 Filipino' },
    { key:'makabansa', label:'🏘️ Makabansa' },
    { key:'gmrc', label:'🧘 GMRC' }
  ];

  let gridHTML = '<div class="sched-settings-grid">';
  // Header row
  gridHTML += '<div class="sched-settings-cell sched-settings-header"></div>';
  days.forEach(d => {
    gridHTML += `<div class="sched-settings-cell sched-settings-header">${dayLabels[d].slice(0,3)}</div>`;
  });

  // Subject rows
  subjects.forEach(sub => {
    gridHTML += `<div class="sched-settings-cell sched-settings-subject">${sub.label}</div>`;
    days.forEach(d => {
      const checked = (schedule[d] || []).includes(sub.key);
      gridHTML += `
        <div class="sched-settings-cell">
          <input type="checkbox" class="sched-check"
            ${checked ? 'checked' : ''}
            onchange="toggleScheduleCell('${d}','${sub.key}',this.checked)">
        </div>
      `;
    });
  });

  gridHTML += '</div>';
  const container = document.getElementById('schedule-grid-container');
  if (container) container.innerHTML = gridHTML;
}

function toggleScheduleCell(day, subject, checked) {
  const config = getScheduleConfig();
  if (!config[day]) config[day] = [];
  if (checked) {
    if (!config[day].includes(subject)) config[day].push(subject);
  } else {
    config[day] = config[day].filter(s => s !== subject);
  }
  saveScheduleConfig(config);
}

function resetScheduleToDefault() {
  saveScheduleConfig(DEFAULT_SCHEDULE);
  renderScheduleGrid();
}

function openFeedbackForm() {
  const nickname = safeStorage.getItem('session_nickname') || 'Matteo';
  const gradeCode = getLearnerGrade();
  const gradeNames = { 'g1': 'Grade 1', 'g2': 'Grade 2', 'g3': 'Grade 3' };
  const gradeName = gradeNames[gradeCode] || gradeCode;
  
  const context = `Subject: ${currentSubject.toUpperCase()}, Mode: ${currentMode.toUpperCase()}, Week: ${currentWeek}`;
  
  const baseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdBPboeAx5IznV5KF_1hp66RX7sSYYNv0xg7NpfowWafK-0GQ/viewform?usp=pp_url";
  const finalUrl = `${baseUrl}&entry.556925236=${encodeURIComponent(nickname)}&entry.283570414=${encodeURIComponent(gradeName)}&entry.1808401=${encodeURIComponent(context)}`;
  
  window.open(finalUrl, '_system');
}

function initGamesCenterState() {
  playerCoins = parseInt(safeStorage.getItem('hub_coins') || '0');
  playerLifetimeStars = parseInt(safeStorage.getItem('hub_stars') || '0');
  mascotLevel = parseInt(safeStorage.getItem('mascot_level') || '1');
  mascotXP = parseInt(safeStorage.getItem('mascot_xp') || '0');
  activeMascotOutfit = safeStorage.getItem('mascot_active_outfit') || 'default';
  tobiHappiness = parseInt(safeStorage.getItem('mascot_happiness') || '100');
  
  try {
    ownedOutfits = JSON.parse(safeStorage.getItem('hub_owned_outfits') || '["default"]');
    ownedThemes = JSON.parse(safeStorage.getItem('hub_owned_themes') || '["default"]');
    ownedSongs = JSON.parse(safeStorage.getItem('hub_owned_songs') || '["default"]');
  } catch(e) {
    ownedOutfits = ['default'];
    ownedThemes = ['default'];
    ownedSongs = ['default'];
  }
  
  // Clean up happiness based on time decay
  const lastDecay = safeStorage.getItem('mascot_last_decay_time');
  const now = Date.now();
  if (lastDecay) {
    const hoursElapsed = (now - parseInt(lastDecay)) / (1000 * 60 * 60);
    if (hoursElapsed >= 12) {
      const decaySteps = Math.floor(hoursElapsed / 12);
      tobiHappiness = Math.max(0, tobiHappiness - decaySteps * 10);
      safeStorage.setItem('mascot_happiness', String(tobiHappiness));
      safeStorage.setItem('mascot_last_decay_time', String(now));
    }
  } else {
    safeStorage.setItem('mascot_last_decay_time', String(now));
  }
  
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
  safeStorage.setItem('hub_coins', String(playerCoins));
  updateWalletUI();
}

function addXP(amount) {
  let mult = 1.0;
  if (tobiHappiness >= 70) mult = 1.1; // Happy Tobi gives 10% bonus
  
  mascotXP += Math.round(amount * mult);
  const xpNeeded = mascotLevel * 100;
  if (mascotXP >= xpNeeded) {
    mascotXP -= xpNeeded;
    mascotLevel++;
    safeStorage.setItem('mascot_level', String(mascotLevel));
    setTimeout(() => {
      const mName = getMascotName();
      alert(`🎉 Level Up! ${mName} is now Level ${mascotLevel}!`);
    }, 500);
  }
  safeStorage.setItem('mascot_xp', String(mascotXP));
  updateWalletUI();
}

// ==========================================================================
// 8 NEW QUICK PLAY GAMES ENGINE AND DYNAMIC PROCEDURAL GENERATORS
// ==========================================================================

// 1. Sentence Builder Game Logic
let gameSentenceBuilderQuestions = [];
function setupSentenceBuilderGame(container) {
  gameSentenceBuilderScore = 0;
  gameSentenceBuilderIndex = 0;
  const grade = getActiveGradeNumber();
  const pool = gameSentenceBuilderPool[grade] || gameSentenceBuilderPool[3];
  gameSentenceBuilderQuestions = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
  gameSentenceBuilderQuestion = {};
  renderSentenceBuilderQuestion(container);
}

function renderSentenceBuilderQuestion(container) {
  if (gameSentenceBuilderIndex >= gameSentenceBuilderQuestions.length) {
    completeGameRewards('sentencebuilder');
    return;
  }
  
  const original = gameSentenceBuilderQuestions[gameSentenceBuilderIndex];
  const cleanStr = original.replace(/\.$/, '');
  const correctWords = cleanStr.split(' ');
  
  if (!gameSentenceBuilderQuestion.words || gameSentenceBuilderQuestion.original !== original) {
    let scrambled = [...correctWords].sort(() => Math.random() - 0.5);
    while (scrambled.join(' ') === correctWords.join(' ') && correctWords.length > 1) {
      scrambled.sort(() => Math.random() - 0.5);
    }
    gameSentenceBuilderQuestion = {
      original: original,
      correctWords: correctWords,
      scrambledWords: scrambled
    };
    gameSentenceBuilderSelected = [];
  }
  
  let scrambledButtons = '';
  gameSentenceBuilderQuestion.scrambledWords.forEach((word, idx) => {
    const isSelected = gameSentenceBuilderSelected.includes(idx);
    scrambledButtons += `
      <button class="ws-btn-action" onclick="selectSentenceBuilderWord(${idx})" ${isSelected ? 'disabled style="opacity: 0.4; margin: 4px;"' : 'style="margin: 4px;"'}>
        ${word}
      </button>
    `;
  });
  
  const selectedText = gameSentenceBuilderSelected.map(idx => gameSentenceBuilderQuestion.scrambledWords[idx]).join(' ');
  
  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 500px; padding: 16px;">
      <div style="font-size: 14px; font-weight: 700; color: var(--accent); margin-bottom: 10px;">
        Question ${gameSentenceBuilderIndex + 1} of 3
      </div>
      <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 15px;">Tap the words in the correct order to build the sentence:</p>
      
      <div style="min-height: 50px; border: 2px dashed var(--border-color); border-radius: 12px; padding: 10px; margin-bottom: 20px; font-size: 18px; font-weight: 600; color: var(--text-main); display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.02); font-family: 'Outfit', sans-serif;">
        ${selectedText || '<span style="color: var(--text-muted); font-weight: 400; font-size: 14px;">(Your sentence will appear here)</span>'}
      </div>
      
      <div style="margin-bottom: 30px; display: flex; flex-wrap: wrap; justify-content: center;">
        ${scrambledButtons}
      </div>
      
      <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 15px;">
        <button class="ws-btn-action" onclick="clearSentenceBuilderSelection()" style="background: rgba(239, 68, 68, 0.08); border-color: #ef4444; color: #ef4444;">Clear</button>
        <button class="ws-btn-action" onclick="checkSentenceBuilderAnswer()" style="background: var(--accent); color: white; border-color: var(--accent);" ${gameSentenceBuilderSelected.length === gameSentenceBuilderQuestion.scrambledWords.length ? '' : 'disabled'}>Submit</button>
      </div>
      <div style="font-size: 13px; color: var(--text-muted);">Score: ${gameSentenceBuilderScore} / 3</div>
    </div>
  `;
}

function selectSentenceBuilderWord(idx) {
  if (gameSentenceBuilderSelected.includes(idx)) return;
  gameSentenceBuilderSelected.push(idx);
  const container = document.getElementById('game-canvas-area');
  renderSentenceBuilderQuestion(container);
}

function clearSentenceBuilderSelection() {
  gameSentenceBuilderSelected = [];
  const container = document.getElementById('game-canvas-area');
  renderSentenceBuilderQuestion(container);
}

function checkSentenceBuilderAnswer() {
  const selectedText = gameSentenceBuilderSelected.map(idx => gameSentenceBuilderQuestion.scrambledWords[idx]).join(' ').toLowerCase();
  const correctText = gameSentenceBuilderQuestion.correctWords.join(' ').toLowerCase();
  const container = document.getElementById('game-canvas-area');
  
  if (selectedText === correctText) {
    gameSentenceBuilderScore++;
    if (musicEnabled) {
      const sfx = new Audio('correct.wav');
      sfx.play().catch(() => {});
    }
  } else {
    if (musicEnabled) {
      const sfx = new Audio('incorrect.wav');
      sfx.play().catch(() => {});
    }
    alert(`Incorrect! The correct sentence was:\n"${gameSentenceBuilderQuestion.original}"`);
  }
  
  gameSentenceBuilderIndex++;
  gameSentenceBuilderQuestion = {};
  renderSentenceBuilderQuestion(container);
}

// 2. Fact or Fiction Game Logic
let gameFactOrFictionQuestions = [];
function setupFactOrFictionGame(container) {
  gameFactOrFictionScore = 0;
  gameFactOrFictionTotal = 0;
  gameFactOrFictionTimer = 30;
  const grade = getActiveGradeNumber();
  const pool = gameFactOrFictionPool[grade] || gameFactOrFictionPool[3];
  gameFactOrFictionQuestions = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
  
  if (gameFactOrFictionTimerInterval) {
    clearInterval(gameFactOrFictionTimerInterval);
  }
  
  gameFactOrFictionTimerInterval = setInterval(() => {
    gameFactOrFictionTimer--;
    const timerValEl = document.getElementById('fact-fiction-timer-val');
    const timerBarEl = document.getElementById('fact-fiction-timer-bar');
    if (timerValEl) timerValEl.innerText = gameFactOrFictionTimer;
    if (timerBarEl) timerBarEl.style.width = `${(gameFactOrFictionTimer / 30) * 100}%`;
    
    if (gameFactOrFictionTimer <= 0) {
      clearInterval(gameFactOrFictionTimerInterval);
      gameFactOrFictionTimerInterval = null;
      completeGameRewards('factorfiction');
    }
  }, 1000);
  
  renderFactOrFictionQuestion(container);
}

function renderFactOrFictionQuestion(container) {
  if (gameFactOrFictionTotal >= gameFactOrFictionQuestions.length) {
    clearInterval(gameFactOrFictionTimerInterval);
    gameFactOrFictionTimerInterval = null;
    completeGameRewards('factorfiction');
    return;
  }
  
  const question = gameFactOrFictionQuestions[gameFactOrFictionTotal];
  
  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 450px; padding: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; width: 100%;">
        <span style="font-size: 13px; color: var(--text-muted); font-weight: 600;">⏱️ Time: <span id="fact-fiction-timer-val">${gameFactOrFictionTimer}</span>s</span>
        <span style="font-size: 13px; color: var(--text-muted); font-weight: 600;">Question ${gameFactOrFictionTotal + 1} of 10</span>
      </div>
      <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; margin-bottom: 25px;">
        <div id="fact-fiction-timer-bar" style="height: 100%; background: var(--accent); width: ${(gameFactOrFictionTimer / 30) * 100}%; transition: width 1s linear;"></div>
      </div>
      
      <div style="min-height: 100px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px;">
        <h3 style="font-size: 22px; color: var(--text-main); font-family: 'Outfit', sans-serif; line-height: 1.5; margin: 0;">
          "${question.q}"
        </h3>
      </div>
      
      <div style="display: flex; gap: 16px; justify-content: center; margin-bottom: 20px; width: 100%;">
        <button class="ws-btn-action" onclick="answerFactOrFiction(true)" style="flex: 1; padding: 15px; font-size: 16px; font-weight: 700; border-radius: 12px; background: rgba(16, 185, 129, 0.08); border-color: #10b981; color: #10b981;">✔️ FACT</button>
        <button class="ws-btn-action" onclick="answerFactOrFiction(false)" style="flex: 1; padding: 15px; font-size: 16px; font-weight: 700; border-radius: 12px; background: rgba(239, 68, 68, 0.08); border-color: #ef4444; color: #ef4444;">❌ FICTION</button>
      </div>
      <div style="font-size: 13px; color: var(--text-muted);">Score: ${gameFactOrFictionScore} / ${gameFactOrFictionTotal}</div>
    </div>
  `;
}

function answerFactOrFiction(isTrue) {
  const question = gameFactOrFictionQuestions[gameFactOrFictionTotal];
  const container = document.getElementById('game-canvas-area');
  
  if (isTrue === question.a) {
    gameFactOrFictionScore++;
    if (musicEnabled) {
      const sfx = new Audio('correct.wav');
      sfx.play().catch(() => {});
    }
  } else {
    if (musicEnabled) {
      const sfx = new Audio('incorrect.wav');
      sfx.play().catch(() => {});
    }
  }
  
  gameFactOrFictionTotal++;
  renderFactOrFictionQuestion(container);
}

// 3. Fraction Slice Game Logic
let gameFractionSliceQuestions = [];
function setupFractionSliceGame(container) {
  gameFractionSliceScore = 0;
  gameFractionSliceIndex = 0;
  gameFractionSliceQuestions = [];
  
  for (let i = 0; i < 5; i++) {
    const den = Math.floor(Math.random() * 5) + 2; 
    const num = Math.floor(Math.random() * (den - 1)) + 1; 
    const correctLabel = `${num}/${den}`;
    const choices = [correctLabel];
    
    while (choices.length < 4) {
      const fDen = Math.floor(Math.random() * 5) + 2;
      const fNum = Math.floor(Math.random() * (fDen - 1)) + 1;
      const fLabel = `${fNum}/${fDen}`;
      if (!choices.includes(fLabel)) {
        choices.push(fLabel);
      }
    }
    choices.sort(() => Math.random() - 0.5);
    
    gameFractionSliceQuestions.push({
      num: num,
      den: den,
      choices: choices,
      ans: choices.indexOf(correctLabel)
    });
  }
  renderFractionSliceQuestion(container);
}

function renderFractionSliceQuestion(container) {
  if (gameFractionSliceIndex >= gameFractionSliceQuestions.length) {
    completeGameRewards('fractionslice');
    return;
  }
  
  const question = gameFractionSliceQuestions[gameFractionSliceIndex];
  
  let blocksHTML = '';
  for (let i = 0; i < question.den; i++) {
    const isShaded = i < question.num;
    blocksHTML += `
      <div style="flex: 1; height: 45px; border: 2px solid var(--border-color); border-radius: 6px; background: ${isShaded ? 'var(--accent)' : 'transparent'}; transition: background 0.3s ease;"></div>
    `;
  }
  
  let choicesHTML = '';
  question.choices.forEach((choice, idx) => {
    choicesHTML += `
      <button class="ws-btn-action" onclick="answerFractionSlice(${idx})" style="padding: 14px; font-size: 16px; font-weight: 600; min-width: 100px; border-radius: 12px;">
        ${choice}
      </button>
    `;
  });
  
  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 450px; padding: 20px;">
      <div style="font-size: 14px; font-weight: 700; color: var(--accent); margin-bottom: 10px;">
        Question ${gameFractionSliceIndex + 1} of 5
      </div>
      <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 25px;">Look at the shaded bar below and choose the matching fraction:</p>
      
      <div style="display: flex; gap: 8px; width: 100%; margin-bottom: 30px; background: rgba(255,255,255,0.03); padding: 12px; border-radius: 12px; border: 1.5px solid var(--border-color);">
        ${blocksHTML}
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 20px;">
        ${choicesHTML}
      </div>
      <div style="font-size: 13px; color: var(--text-muted);">Score: ${gameFractionSliceScore} / ${gameFractionSliceIndex}</div>
    </div>
  `;
}

function answerFractionSlice(idx) {
  const question = gameFractionSliceQuestions[gameFractionSliceIndex];
  const container = document.getElementById('game-canvas-area');
  
  if (idx === question.ans) {
    gameFractionSliceScore++;
    if (musicEnabled) {
      const sfx = new Audio('correct.wav');
      sfx.play().catch(() => {});
    }
  } else {
    if (musicEnabled) {
      const sfx = new Audio('incorrect.wav');
      sfx.play().catch(() => {});
    }
  }
  
  gameFractionSliceIndex++;
  renderFractionSliceQuestion(container);
}

// 4. Good Deeds Sort Game Logic
let gameGoodDeedsSortQuestions = [];
function setupGoodDeedsSortGame(container) {
  gameGoodDeedsSortScore = 0;
  gameGoodDeedsSortIndex = 0;
  gameGoodDeedsSortQuestions = [];
  
  const goodPool = [...gameGoodDeedsSortPool.good].sort(() => Math.random() - 0.5);
  const badPool = [...gameGoodDeedsSortPool.bad].sort(() => Math.random() - 0.5);
  
  for (let i = 0; i < 5; i++) {
    const isGood = Math.random() > 0.5;
    const itemText = isGood ? goodPool.pop() : badPool.pop();
    gameGoodDeedsSortQuestions.push({ text: itemText, isGood: isGood });
  }
  renderGoodDeedsSortQuestion(container);
}

function renderGoodDeedsSortQuestion(container) {
  if (gameGoodDeedsSortIndex >= gameGoodDeedsSortQuestions.length) {
    completeGameRewards('gooddeedssort');
    return;
  }
  
  const question = gameGoodDeedsSortQuestions[gameGoodDeedsSortIndex];
  
  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 450px; padding: 20px;">
      <div style="font-size: 14px; font-weight: 700; color: var(--accent); margin-bottom: 10px;">
        Question ${gameGoodDeedsSortIndex + 1} of 5
      </div>
      <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 25px;">Is this a Good Habit (Mabuting Asal) or something to Avoid (Dapat Iwasan)?</p>
      
      <div style="min-height: 100px; border: 2.5px dashed var(--accent); border-radius: 16px; padding: 20px; margin-bottom: 30px; display: flex; align-items: center; justify-content: center; background: rgba(59,130,246,0.03);">
        <h3 style="font-size: 20px; color: var(--text-main); font-family: 'Outfit', sans-serif; line-height: 1.5; margin: 0;">
          "${question.text}"
        </h3>
      </div>
      
      <div style="display: flex; gap: 16px; justify-content: center; margin-bottom: 20px; width: 100%;">
        <button class="ws-btn-action" onclick="answerGoodDeedsSort(true)" style="flex: 1; padding: 15px; font-size: 14px; font-weight: 700; border-radius: 12px; background: rgba(16, 185, 129, 0.08); border-color: #10b981; color: #10b981;">😇 Mabuting Asal (Good)</button>
        <button class="ws-btn-action" onclick="answerGoodDeedsSort(false)" style="flex: 1; padding: 15px; font-size: 14px; font-weight: 700; border-radius: 12px; background: rgba(239, 68, 68, 0.08); border-color: #ef4444; color: #ef4444;">⚠️ Dapat Iwasan (Avoid)</button>
      </div>
      <div style="font-size: 13px; color: var(--text-muted);">Score: ${gameGoodDeedsSortScore} / ${gameGoodDeedsSortIndex}</div>
    </div>
  `;
}

function answerGoodDeedsSort(isGoodChoice) {
  const question = gameGoodDeedsSortQuestions[gameGoodDeedsSortIndex];
  const container = document.getElementById('game-canvas-area');
  
  if (isGoodChoice === question.isGood) {
    gameGoodDeedsSortScore++;
    if (musicEnabled) {
      const sfx = new Audio('correct.wav');
      sfx.play().catch(() => {});
    }
  } else {
    if (musicEnabled) {
      const sfx = new Audio('incorrect.wav');
      sfx.play().catch(() => {});
    }
  }
  
  gameGoodDeedsSortIndex++;
  renderGoodDeedsSortQuestion(container);
}

// 5. Body Organ Matcher Game Logic
let gameBodyOrganMatcherQuestions = [];
function setupBodyOrganMatcherGame(container) {
  gameBodyOrganMatcherScore = 0;
  gameBodyOrganMatcherIndex = 0;
  gameBodyOrganMatcherQuestions = [...gameBodyOrganMatcherPool].sort(() => Math.random() - 0.5).slice(0, 5);
  renderBodyOrganMatcherQuestion(container);
}

function renderBodyOrganMatcherQuestion(container) {
  if (gameBodyOrganMatcherIndex >= gameBodyOrganMatcherQuestions.length) {
    completeGameRewards('bodyorganmatcher');
    return;
  }
  
  const question = gameBodyOrganMatcherQuestions[gameBodyOrganMatcherIndex];
  const correctLabel = question.match;
  const choices = [correctLabel];
  
  while (choices.length < 4) {
    const randItem = gameBodyOrganMatcherPool[Math.floor(Math.random() * gameBodyOrganMatcherPool.length)].match;
    if (!choices.includes(randItem)) {
      choices.push(randItem);
    }
  }
  choices.sort(() => Math.random() - 0.5);
  
  let choicesHTML = '';
  choices.forEach((choice, idx) => {
    choicesHTML += `
      <button class="ws-btn-action" onclick="answerBodyOrganMatcher(${idx}, ${choices.indexOf(correctLabel)})" style="padding: 12px; font-size: 14px; text-align: left; width: 100%; border-radius: 10px; margin-bottom: 8px;">
        👉 ${choice}
      </button>
    `;
  });
  
  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 450px; padding: 20px;">
      <div style="font-size: 14px; font-weight: 700; color: var(--accent); margin-bottom: 10px;">
        Question ${gameBodyOrganMatcherIndex + 1} of 5
      </div>
      <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 25px;">What is the primary function of this organ?</p>
      
      <h2 style="font-size: 40px; margin-bottom: 25px; font-family: 'Outfit', sans-serif; margin-top: 0;">
        ${question.item}
      </h2>
      
      <div style="display: flex; flex-direction: column; width: 100%;">
        ${choicesHTML}
      </div>
      <div style="font-size: 13px; color: var(--text-muted); margin-top: 15px;">Score: ${gameBodyOrganMatcherScore} / ${gameBodyOrganMatcherIndex}</div>
    </div>
  `;
}

function answerBodyOrganMatcher(idx, correctIdx) {
  const container = document.getElementById('game-canvas-area');
  
  if (idx === correctIdx) {
    gameBodyOrganMatcherScore++;
    if (musicEnabled) {
      const sfx = new Audio('correct.wav');
      sfx.play().catch(() => {});
    }
  } else {
    if (musicEnabled) {
      const sfx = new Audio('incorrect.wav');
      sfx.play().catch(() => {});
    }
  }
  
  gameBodyOrganMatcherIndex++;
  renderBodyOrganMatcherQuestion(container);
}

// 6. Odd One Out Game Logic
let gameOddOneOutQuestions = [];
function setupOddOneOutGame(container) {
  gameOddOneOutScore = 0;
  gameOddOneOutIndex = 0;
  gameOddOneOutQuestions = [...gameOddOneOutPool].sort(() => Math.random() - 0.5).slice(0, 5);
  renderOddOneOutQuestion(container);
}

function renderOddOneOutQuestion(container) {
  if (gameOddOneOutIndex >= gameOddOneOutQuestions.length) {
    completeGameRewards('oddoneout');
    return;
  }
  
  const question = gameOddOneOutQuestions[gameOddOneOutIndex];
  
  const originalIndices = question.list.map((_, idx) => idx);
  for (let i = originalIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [originalIndices[i], originalIndices[j]] = [originalIndices[j], originalIndices[i]];
  }
  
  let choicesHTML = '';
  originalIndices.forEach((origIdx) => {
    choicesHTML += `
      <button class="ws-btn-action" onclick="answerOddOneOut(${origIdx})" style="padding: 14px; font-size: 16px; font-weight: 600; width: 100%; border-radius: 12px;">
        ${question.list[origIdx]}
      </button>
    `;
  });
  
  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 450px; padding: 20px;">
      <div style="font-size: 14px; font-weight: 700; color: var(--accent); margin-bottom: 10px;">
        Question ${gameOddOneOutIndex + 1} of 5
      </div>
      <p style="font-size: 15px; font-weight: bold; color: var(--text-main); margin-bottom: 25px;">Find the odd one out that is NOT in this category:</p>
      
      <div style="display: inline-block; background: rgba(59,130,246,0.1); border: 1.5px solid var(--accent); padding: 6px 14px; border-radius: 20px; font-size: 15px; font-weight: 700; color: var(--accent); margin-bottom: 30px; text-transform: uppercase; letter-spacing: 0.5px;">
        ⭐ ${question.label}
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 20px; width: 100%;">
        ${choicesHTML}
      </div>
      <div style="font-size: 13px; color: var(--text-muted);">Score: ${gameOddOneOutScore} / ${gameOddOneOutIndex}</div>
    </div>
  `;
}

function answerOddOneOut(idx) {
  const question = gameOddOneOutQuestions[gameOddOneOutIndex];
  const container = document.getElementById('game-canvas-area');
  
  if (idx === question.ans) {
    gameOddOneOutScore++;
    if (musicEnabled) {
      const sfx = new Audio('correct.wav');
      sfx.play().catch(() => {});
    }
  } else {
    if (musicEnabled) {
      const sfx = new Audio('incorrect.wav');
      sfx.play().catch(() => {});
    }
  }
  
  gameOddOneOutIndex++;
  renderOddOneOutQuestion(container);
}

// 7. History Timeline Game Logic
let gameHistoryTimelineQuestions = [];
let gameHistoryTimelineSelected = [];
function setupHistoryTimelineGame(container) {
  gameHistoryTimelineScore = 0;
  gameHistoryTimelineIndex = 0;
  gameHistoryTimelineQuestions = [...gameHistoryTimelinePool].sort(() => Math.random() - 0.5).slice(0, 3);
  gameHistoryTimelineQuestion = {};
  gameHistoryTimelineSelected = [];
  renderHistoryTimelineQuestion(container);
}

function renderHistoryTimelineQuestion(container) {
  if (gameHistoryTimelineIndex >= gameHistoryTimelineQuestions.length) {
    completeGameRewards('historytimeline');
    return;
  }
  
  const question = gameHistoryTimelineQuestions[gameHistoryTimelineIndex];
  
  if (!gameHistoryTimelineQuestion.events || gameHistoryTimelineQuestion.originalIndex !== gameHistoryTimelineIndex) {
    let scrambled = [0, 1, 2].sort(() => Math.random() - 0.5);
    while (scrambled.join(',') === "0,1,2") {
      scrambled.sort(() => Math.random() - 0.5);
    }
    gameHistoryTimelineQuestion = {
      originalIndex: gameHistoryTimelineIndex,
      scrambledIndices: scrambled
    };
    gameHistoryTimelineSelected = [];
  }
  
  let scrambledButtons = '';
  gameHistoryTimelineQuestion.scrambledIndices.forEach((origIdx, idx) => {
    const isSelected = gameHistoryTimelineSelected.includes(idx);
    scrambledButtons += `
      <button class="ws-btn-action" onclick="selectHistoryTimelineEvent(${idx})" ${isSelected ? 'disabled style="opacity: 0.4; text-align: left; padding: 12px; margin-bottom: 8px; width:100%;"' : 'style="text-align: left; padding: 12px; margin-bottom: 8px; width:100%;"'}>
        📌 ${question.events[origIdx]}
      </button>
    `;
  });
  
  let slotsHTML = '';
  for (let i = 0; i < 3; i++) {
    const selIdx = gameHistoryTimelineSelected[i];
    const text = selIdx !== undefined ? question.events[gameHistoryTimelineQuestion.scrambledIndices[selIdx]] : '';
    slotsHTML += `
      <div style="min-height: 40px; border: 1.5px dashed var(--border-color); border-radius: 8px; padding: 8px 12px; margin-bottom: 8px; text-align: left; font-size: 14px; font-weight: 600; display: flex; align-items: center; background: rgba(255,255,255,0.01); font-family: 'Outfit', sans-serif;">
        <span style="color: var(--accent); font-weight: 700; margin-right: 8px;">Step ${i+1}:</span> 
        <span>${text || '<span style="color: var(--text-muted); font-weight: 400; font-style: italic;">(Empty)</span>'}</span>
      </div>
    `;
  }
  
  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 450px; padding: 16px;">
      <div style="font-size: 14px; font-weight: 700; color: var(--accent); margin-bottom: 10px;">
        Question ${gameHistoryTimelineIndex + 1} of 3
      </div>
      <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 20px;">Arrange the events in order from first to last by tapping them:</p>
      
      <div style="margin-bottom: 20px; display: flex; flex-direction: column; width: 100%;">
        ${slotsHTML}
      </div>
      
      <div style="margin-bottom: 25px; width: 100%;">
        ${scrambledButtons}
      </div>
      
      <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 15px;">
        <button class="ws-btn-action" onclick="clearHistoryTimelineSelection()" style="background: rgba(239, 68, 68, 0.08); border-color: #ef4444; color: #ef4444;">Clear Order</button>
        <button class="ws-btn-action" onclick="checkHistoryTimelineAnswer()" style="background: var(--accent); color: white; border-color: var(--accent);" ${gameHistoryTimelineSelected.length === 3 ? '' : 'disabled'}>Check Order</button>
      </div>
      <div style="font-size: 13px; color: var(--text-muted);">Score: ${gameHistoryTimelineScore} / 3</div>
    </div>
  `;
}

function selectHistoryTimelineEvent(idx) {
  if (gameHistoryTimelineSelected.includes(idx)) return;
  gameHistoryTimelineSelected.push(idx);
  const container = document.getElementById('game-canvas-area');
  renderHistoryTimelineQuestion(container);
}

function clearHistoryTimelineSelection() {
  gameHistoryTimelineSelected = [];
  const container = document.getElementById('game-canvas-area');
  renderHistoryTimelineQuestion(container);
}

function checkHistoryTimelineAnswer() {
  const container = document.getElementById('game-canvas-area');
  const selectedOriginalIndices = gameHistoryTimelineSelected.map(idx => gameHistoryTimelineQuestion.scrambledIndices[idx]);
  const isCorrect = selectedOriginalIndices.join(',') === "0,1,2";
  
  if (isCorrect) {
    gameHistoryTimelineScore++;
    if (musicEnabled) {
      const sfx = new Audio('correct.wav');
      sfx.play().catch(() => {});
    }
  } else {
    if (musicEnabled) {
      const sfx = new Audio('incorrect.wav');
      sfx.play().catch(() => {});
    }
    const question = gameHistoryTimelineQuestions[gameHistoryTimelineIndex];
    alert(`Incorrect Order! The correct sequence was:\n1. ${question.events[0]}\n2. ${question.events[1]}\n3. ${question.events[2]}`);
  }
  
  gameHistoryTimelineIndex++;
  gameHistoryTimelineQuestion = {};
  renderHistoryTimelineQuestion(container);
}

// 8. Empathy Scenarios Game Logic
let gameEmpathyScenariosQuestions = [];
function setupEmpathyScenariosGame(container) {
  gameEmpathyScenariosScore = 0;
  gameEmpathyScenariosIndex = 0;
  gameEmpathyScenariosQuestions = [...gameEmpathyScenariosPool].sort(() => Math.random() - 0.5).slice(0, 5);
  renderEmpathyScenariosQuestion(container);
}

function renderEmpathyScenariosQuestion(container) {
  if (gameEmpathyScenariosIndex >= gameEmpathyScenariosQuestions.length) {
    completeGameRewards('empathyscenarios');
    return;
  }
  
  const question = gameEmpathyScenariosQuestions[gameEmpathyScenariosIndex];
  
  const originalIndices = question.choices.map((_, idx) => idx);
  for (let i = originalIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [originalIndices[i], originalIndices[j]] = [originalIndices[j], originalIndices[i]];
  }
  
  let choicesHTML = '';
  originalIndices.forEach((origIdx) => {
    choicesHTML += `
      <button class="ws-btn-action" onclick="answerEmpathyScenarios(${origIdx})" style="padding: 12px; font-size: 14px; text-align: left; width: 100%; border-radius: 10px; margin-bottom: 8px;">
        ❤️ ${question.choices[origIdx]}
      </button>
    `;
  });
  
  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 450px; padding: 20px;">
      <div style="font-size: 14px; font-weight: 700; color: var(--accent); margin-bottom: 10px;">
        Question ${gameEmpathyScenariosIndex + 1} of 5
      </div>
      <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 25px;">What is the most polite, kind, and helpful thing to do?</p>
      
      <div style="min-height: 100px; border: 2.5px solid #8b5cf6; border-radius: 16px; padding: 20px; margin-bottom: 25px; display: flex; align-items: center; justify-content: center; background: rgba(139,92,246,0.03);">
        <h3 style="font-size: 16px; color: var(--text-main); font-family: 'Outfit', sans-serif; line-height: 1.6; margin: 0;">
          "${question.q}"
        </h3>
      </div>
      
      <div style="display: flex; flex-direction: column; width: 100%;">
        ${choicesHTML}
      </div>
      <div style="font-size: 13px; color: var(--text-muted); margin-top: 15px;">Score: ${gameEmpathyScenariosScore} / ${gameEmpathyScenariosIndex}</div>
    </div>
  `;
}

function answerEmpathyScenarios(idx) {
  const question = gameEmpathyScenariosQuestions[gameEmpathyScenariosIndex];
  const container = document.getElementById('game-canvas-area');
  
  if (idx === question.ans) {
    gameEmpathyScenariosScore++;
    if (musicEnabled) {
      const sfx = new Audio('correct.wav');
      sfx.play().catch(() => {});
    }
  } else {
    if (musicEnabled) {
      const sfx = new Audio('incorrect.wav');
      sfx.play().catch(() => {});
    }
  }
  
  gameEmpathyScenariosIndex++;
  renderEmpathyScenariosQuestion(container);
}


// ==========================================
// 1. NUMBER BUILDER BLITZ
// ==========================================
let gameNumberBuilderScore = 0;
let gameNumberBuilderRoundIndex = 0;
let gameNumberBuilderRounds = [];
let gameNumberBuilderTarget = 0;
let gameNumberBuilderTiles = [];
let gameNumberBuilderSelected = [];
let gameNumberBuilderTimeLeft = 0;
let gameNumberBuilderTimerInterval = null;

const gameNumberBuilderPool = {
  1: [
    { target: 5, tiles: ['2','3','1','4'], timeLimit: 25 },
    { target: 8, tiles: ['5','3','2','6'], timeLimit: 25 },
    { target: 4, tiles: ['1','3','2','5'], timeLimit: 25 },
    { target: 7, tiles: ['4','3','1','6'], timeLimit: 25 },
    { target: 6, tiles: ['2','4','3','5'], timeLimit: 25 },
    { target: 9, tiles: ['5','4','2','7'], timeLimit: 25 },
    { target: 3, tiles: ['1','2','4','5'], timeLimit: 25 },
    { target: 10, tiles: ['6','4','3','8'], timeLimit: 25 },
    { target: 2, tiles: ['1','1','3','4'], timeLimit: 25 },
    { target: 5, tiles: ['1','4','2','6'], timeLimit: 25 },
    { target: 6, tiles: ['1','5','3','4'], timeLimit: 25 },
    { target: 7, tiles: ['5','2','1','8'], timeLimit: 25 },
    { target: 8, tiles: ['4','4','2','9'], timeLimit: 25 },
    { target: 9, tiles: ['6','3','1','7'], timeLimit: 25 },
    { target: 4, tiles: ['2','2','1','5'], timeLimit: 25 },
    { target: 10, tiles: ['5','5','4','3'], timeLimit: 25 },
    { target: 3, tiles: ['2','1','5','6'], timeLimit: 25 },
    { target: 7, tiles: ['3','4','2','9'], timeLimit: 25 },
    { target: 8, tiles: ['6','2','3','7'], timeLimit: 25 },
    { target: 9, tiles: ['8','1','2','4'], timeLimit: 25 }
  ],
  2: [
    { target: 9, tiles: ['4','5','+','-'], timeLimit: 22 },
    { target: 6, tiles: ['8','2','+','-'], timeLimit: 22 },
    { target: 7, tiles: ['3','4','+','-'], timeLimit: 22 },
    { target: 12, tiles: ['7','5','+','-'], timeLimit: 22 },
    { target: 8, tiles: ['9','1','+','-'], timeLimit: 22 },
    { target: 5, tiles: ['2','3','+','-'], timeLimit: 22 },
    { target: 10, tiles: ['6','4','+','-'], timeLimit: 22 },
    { target: 4, tiles: ['9','5','-','+'], timeLimit: 22 },
    { target: 11, tiles: ['8','3','+','-'], timeLimit: 22 },
    { target: 3, tiles: ['7','4','-','+'], timeLimit: 22 },
    { target: 13, tiles: ['9','4','+','-'], timeLimit: 22 },
    { target: 2, tiles: ['6','4','-','+'], timeLimit: 22 },
    { target: 14, tiles: ['8','6','+','-'], timeLimit: 22 },
    { target: 5, tiles: ['8','3','-','+'], timeLimit: 22 },
    { target: 15, tiles: ['9','6','+','-'], timeLimit: 22 },
    { target: 6, tiles: ['10','4','-','+'], timeLimit: 22 },
    { target: 16, tiles: ['9','7','+','-'], timeLimit: 22 },
    { target: 7, tiles: ['12','5','-','+'], timeLimit: 22 },
    { target: 17, tiles: ['9','8','+','-'], timeLimit: 22 },
    { target: 8, tiles: ['15','7','-','+'], timeLimit: 22 }
  ],
  3: [
    { target: 12, tiles: ['4','3','+','x'], timeLimit: 20 },
    { target: 10, tiles: ['2','5','x','-'], timeLimit: 20 },
    { target: 15, tiles: ['5','3','x','+'], timeLimit: 20 },
    { target: 8, tiles: ['2','4','x','-'], timeLimit: 20 },
    { target: 18, tiles: ['6','3','x','+'], timeLimit: 20 },
    { target: 14, tiles: ['2','7','x','-'], timeLimit: 20 },
    { target: 9, tiles: ['3','3','x','+'], timeLimit: 20 },
    { target: 20, tiles: ['4','5','x','-'], timeLimit: 20 },
    { target: 16, tiles: ['4','4','x','+'], timeLimit: 20 },
    { target: 6, tiles: ['2','3','x','-'], timeLimit: 20 },
    { target: 25, tiles: ['5','5','x','+'], timeLimit: 20 },
    { target: 12, tiles: ['2','6','x','-'], timeLimit: 20 },
    { target: 24, tiles: ['8','3','x','+'], timeLimit: 20 },
    { target: 10, tiles: ['2','5','x','+'], timeLimit: 20 },
    { target: 30, tiles: ['6','5','x','-'], timeLimit: 20 },
    { target: 18, tiles: ['3','6','x','+'], timeLimit: 20 },
    { target: 21, tiles: ['3','7','x','-'], timeLimit: 20 },
    { target: 28, tiles: ['4','7','x','+'], timeLimit: 20 },
    { target: 15, tiles: ['3','5','x','+'], timeLimit: 20 },
    { target: 32, tiles: ['8','4','x','+'], timeLimit: 20 }
  ],
  4: [
    { target: 24, tiles: ['6','4','x','+'], timeLimit: 18 },
    { target: 15, tiles: ['3','5','x','-'], timeLimit: 18 },
    { target: 30, tiles: ['5','6','x','+'], timeLimit: 18 },
    { target: 18, tiles: ['2','9','x','-'], timeLimit: 18 },
    { target: 28, tiles: ['4','7','x','+'], timeLimit: 18 },
    { target: 32, tiles: ['8','4','x','-'], timeLimit: 18 },
    { target: 21, tiles: ['3','7','x','+'], timeLimit: 18 },
    { target: 25, tiles: ['5','5','x','-'], timeLimit: 18 },
    { target: 27, tiles: ['3','9','x','+'], timeLimit: 18 },
    { target: 16, tiles: ['4','5','x','-'], timeLimit: 18 },
    { target: 40, tiles: ['8','5','x','+'], timeLimit: 18 },
    { target: 12, tiles: ['2','7','x','-'], timeLimit: 18 },
    { target: 35, tiles: ['5','7','x','+'], timeLimit: 18 },
    { target: 14, tiles: ['2','8','x','-'], timeLimit: 18 },
    { target: 45, tiles: ['9','5','x','+'], timeLimit: 18 },
    { target: 10, tiles: ['2','6','x','-'], timeLimit: 18 },
    { target: 36, tiles: ['4','9','x','+'], timeLimit: 18 },
    { target: 20, tiles: ['3','8','x','-'], timeLimit: 18 },
    { target: 42, tiles: ['6','7','x','+'], timeLimit: 18 },
    { target: 30, tiles: ['5','7','x','-'], timeLimit: 18 }
  ],
  5: [
    { target: 36, tiles: ['9','4','x','+'], timeLimit: 16 },
    { target: 45, tiles: ['5','9','x','-'], timeLimit: 16 },
    { target: 42, tiles: ['6','7','x','+'], timeLimit: 16 },
    { target: 54, tiles: ['9','6','x','-'], timeLimit: 16 },
    { target: 40, tiles: ['8','5','x','+'], timeLimit: 16 },
    { target: 48, tiles: ['6','8','x','-'], timeLimit: 16 },
    { target: 63, tiles: ['7','9','x','+'], timeLimit: 16 },
    { target: 35, tiles: ['5','7','x','-'], timeLimit: 16 },
    { target: 24, tiles: ['3','8','x','+'], timeLimit: 16 },
    { target: 18, tiles: ['2','10','x','-'], timeLimit: 16 },
    { target: 50, tiles: ['5','10','x','+'], timeLimit: 16 },
    { target: 32, tiles: ['4','9','x','-'], timeLimit: 16 },
    { target: 56, tiles: ['8','7','x','+'], timeLimit: 16 },
    { target: 28, tiles: ['4','8','x','-'], timeLimit: 16 },
    { target: 72, tiles: ['9','8','x','+'], timeLimit: 16 },
    { target: 45, tiles: ['5','10','x','-'], timeLimit: 16 },
    { target: 81, tiles: ['9','9','x','+'], timeLimit: 16 },
    { target: 40, tiles: ['6','8','x','-'], timeLimit: 16 },
    { target: 60, tiles: ['6','10','x','+'], timeLimit: 16 },
    { target: 54, tiles: ['8','8','x','-'], timeLimit: 16 }
  ],
  6: [
    { target: 48, tiles: ['8','6','x','-'], timeLimit: 15 },
    { target: 72, tiles: ['9','8','x','+'], timeLimit: 15 },
    { target: 56, tiles: ['7','8','x','-'], timeLimit: 15 },
    { target: 64, tiles: ['8','8','x','+'], timeLimit: 15 },
    { target: 81, tiles: ['9','9','x','-'], timeLimit: 15 },
    { target: 32, tiles: ['4','8','x','+'], timeLimit: 15 },
    { target: 49, tiles: ['7','7','x','-'], timeLimit: 15 },
    { target: 90, tiles: ['9','10','x','+'], timeLimit: 15 },
    { target: 42, tiles: ['6','7','x','-'], timeLimit: 15 },
    { target: 63, tiles: ['9','7','x','+'], timeLimit: 15 },
    { target: 35, tiles: ['5','8','x','-'], timeLimit: 15 },
    { target: 80, tiles: ['8','10','x','+'], timeLimit: 15 },
    { target: 27, tiles: ['3','10','x','-'], timeLimit: 15 },
    { target: 54, tiles: ['9','6','x','+'], timeLimit: 15 },
    { target: 30, tiles: ['4','9','x','-'], timeLimit: 15 },
    { target: 100, tiles: ['10','10','x','+'], timeLimit: 15 },
    { target: 72, tiles: ['8','10','x','-'], timeLimit: 15 },
    { target: 88, tiles: ['8','11','x','+'], timeLimit: 15 },
    { target: 99, tiles: ['9','11','x','-'], timeLimit: 15 },
    { target: 120, tiles: ['10','12','x','+'], timeLimit: 15 }
  ]
};

function setupNumberBuilderGame(container) {
  gameNumberBuilderScore = 0;
  gameNumberBuilderRoundIndex = 0;

  const grade = getActiveGradeNumber();
  const pool = gameNumberBuilderPool[grade] || gameNumberBuilderPool[3];
  gameNumberBuilderRounds = [...pool].sort(() => Math.random() - 0.5).slice(0, 5);

  if (gameNumberBuilderTimerInterval) {
    clearInterval(gameNumberBuilderTimerInterval);
    gameNumberBuilderTimerInterval = null;
  }

  startNumberBuilderRound(container);
}

function startNumberBuilderRound(container) {
  if (gameNumberBuilderRoundIndex >= gameNumberBuilderRounds.length) {
    completeGameRewards('numberbuilder');
    return;
  }

  const round = gameNumberBuilderRounds[gameNumberBuilderRoundIndex];
  gameNumberBuilderTarget = round.target;
  gameNumberBuilderSelected = [];
  gameNumberBuilderTimeLeft = round.timeLimit;

  gameNumberBuilderTiles = round.tiles.map((value, id) => ({
    id,
    value,
    type: (value === '+' || value === '-' || value === 'x') ? 'operator' : 'number',
    used: false
  }));

  if (gameNumberBuilderTimerInterval) clearInterval(gameNumberBuilderTimerInterval);
  gameNumberBuilderTimerInterval = setInterval(() => {
    gameNumberBuilderTimeLeft--;
    const valEl = document.getElementById('nb-timer-val');
    const barEl = document.getElementById('nb-timer-bar');
    if (valEl) valEl.innerText = gameNumberBuilderTimeLeft;
    if (barEl) barEl.style.width = `${(gameNumberBuilderTimeLeft / round.timeLimit) * 100}%`;

    if (gameNumberBuilderTimeLeft <= 0) {
      clearInterval(gameNumberBuilderTimerInterval);
      gameNumberBuilderTimerInterval = null;
      playIncorrectAudio();
      gameNumberBuilderRoundIndex++;
      startNumberBuilderRound(container);
    }
  }, 1000);

  renderNumberBuilderRound(container);
}

function renderNumberBuilderRound(container) {
  if (gameNumberBuilderRoundIndex >= gameNumberBuilderRounds.length) {
    completeGameRewards('numberbuilder');
    return;
  }

  const round = gameNumberBuilderRounds[gameNumberBuilderRoundIndex];
  
  let tilesHTML = '';
  gameNumberBuilderTiles.forEach(tile => {
    tilesHTML += `
      <button class="ws-btn-action" onclick="tapNumberBuilderTile(${tile.id})"
        style="padding: 16px; font-size: 20px; font-weight: 700; border-radius: 12px; min-width: 60px; ${tile.used ? 'opacity: 0.4; pointer-events: none;' : ''}">
        ${tile.value}
      </button>
    `;
  });
  
  let exprHTML = '';
  if (gameNumberBuilderSelected.length === 0) {
    exprHTML = '<span style="color: var(--text-muted); font-style: italic;">Tap tiles to build...</span>';
  } else {
    exprHTML = gameNumberBuilderSelected.map(t => `<span style="font-size: 24px; font-weight: 700; color: var(--accent); margin: 0 4px;">${t.value}</span>`).join('');
  }

  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 420px; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 600; margin-bottom: 8px; width: 100%; display: flex; justify-content: space-between;">
        <span>Round ${gameNumberBuilderRoundIndex + 1} of 5</span>
        <span>Time: <span id="nb-timer-val" style="font-weight: 700; color: var(--accent);">${gameNumberBuilderTimeLeft}</span>s</span>
      </div>
      
      <div style="width: 100%; height: 8px; background: rgba(59, 130, 246, 0.1); border-radius: 4px; overflow: hidden; margin-bottom: 20px;">
        <div id="nb-timer-bar" style="width: ${(gameNumberBuilderTimeLeft / round.timeLimit) * 100}%; height: 100%; background: var(--accent); transition: width 1s linear;"></div>
      </div>
      
      <div id="nb-target-display" style="width: 110px; height: 110px; border: 3px solid var(--accent); border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 20px; background: rgba(59, 130, 246, 0.05); transition: all 0.3s;">
        <span style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Target</span>
        <span style="font-size: 34px; font-weight: 800; color: var(--text-main);">${gameNumberBuilderTarget}</span>
      </div>
      
      <div style="width: 100%; min-height: 50px; background: rgba(15, 23, 42, 0.03); border: 2px dashed rgba(15, 23, 42, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; padding: 10px; margin-bottom: 20px;">
        ${exprHTML}
      </div>
      
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 24px;">
        ${tilesHTML}
      </div>
      
      <div style="display: flex; gap: 10px; width: 100%;">
        <button class="ws-btn-action" onclick="clearNumberBuilderSelection()"
          style="flex: 1; padding: 12px; font-weight: 600; background: var(--text-muted); color: white; border-radius: 12px; border: none;">
          🧹 Clear
        </button>
        <button class="ws-btn-action" onclick="submitNumberBuilderExpression()"
          style="flex: 2; padding: 12px; font-weight: 700; background: var(--accent); color: white; border-radius: 12px; border: none;">
          ✔️ Submit
        </button>
      </div>
    </div>
  `;
}

function tapNumberBuilderTile(id) {
  const tile = gameNumberBuilderTiles.find(t => t.id === id);
  if (!tile || tile.used) return;
  tile.used = true;
  gameNumberBuilderSelected.push(tile);
  renderNumberBuilderRound(document.getElementById('game-canvas-area'));
}

function clearNumberBuilderSelection() {
  gameNumberBuilderTiles.forEach(t => t.used = false);
  gameNumberBuilderSelected = [];
  renderNumberBuilderRound(document.getElementById('game-canvas-area'));
}

function submitNumberBuilderExpression() {
  if (gameNumberBuilderSelected.length === 0) return;

  const grade = getActiveGradeNumber();
  let result = 0;
  
  if (grade === 1) {
    gameNumberBuilderSelected.forEach(tile => {
      result += parseFloat(tile.value);
    });
  } else {
    result = parseFloat(gameNumberBuilderSelected[0].value);
    for (let i = 1; i < gameNumberBuilderSelected.length - 1; i += 2) {
      const op = gameNumberBuilderSelected[i].value;
      const next = parseFloat(gameNumberBuilderSelected[i + 1].value);
      if (op === '+') result += next;
      else if (op === '-') result -= next;
      else if (op === 'x') result *= next;
    }
  }

  const container = document.getElementById('game-canvas-area');
  if (result === gameNumberBuilderTarget) {
    gameNumberBuilderScore++;
    playCorrectAudio();
    if (gameNumberBuilderTimerInterval) {
      clearInterval(gameNumberBuilderTimerInterval);
      gameNumberBuilderTimerInterval = null;
    }
    gameNumberBuilderRoundIndex++;
    const targetEl = document.getElementById('nb-target-display');
    if (targetEl) {
      targetEl.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
      targetEl.style.borderColor = 'var(--correct)';
    }
    setTimeout(() => startNumberBuilderRound(container), 800);
  } else {
    playIncorrectAudio();
    const targetEl = document.getElementById('nb-target-display');
    if (targetEl) {
      targetEl.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
      targetEl.style.borderColor = 'var(--incorrect)';
      setTimeout(() => {
        targetEl.style.backgroundColor = '';
        targetEl.style.borderColor = 'var(--accent)';
      }, 500);
    }
    clearNumberBuilderSelection();
  }
}

// ==========================================
// 2. WORD GARDEN
// ==========================================
let gameWordGardenScore = 0;
let gameWordGardenIndex = 0;
let gameWordGardenQuestions = [];
let gameWordGardenBlooms = [];

const gameWordGardenPool = {
  1: [
    { prompt: '🐶', correctWord: 'dog', distractors: ['cat', 'pig', 'cow'] },
    { prompt: '☀️', correctWord: 'sun', distractors: ['moon', 'star', 'cloud'] },
    { prompt: '🍎', correctWord: 'apple', distractors: ['banana', 'grape', 'orange'] },
    { prompt: '🚗', correctWord: 'car', distractors: ['bike', 'plane', 'boat'] },
    { prompt: '🐟', correctWord: 'fish', distractors: ['bird', 'frog', 'crab'] },
    { prompt: '📖', correctWord: 'book', distractors: ['pen', 'bag', 'desk'] },
    { prompt: '🥛', correctWord: 'milk', distractors: ['water', 'juice', 'soda'] },
    { prompt: '🌳', correctWord: 'tree', distractors: ['flower', 'leaf', 'grass'] },
    { prompt: '🐱', correctWord: 'cat', distractors: ['dog', 'bird', 'mouse'] },
    { prompt: '🐸', correctWord: 'frog', distractors: ['fish', 'duck', 'snail'] },
    { prompt: '🦆', correctWord: 'duck', distractors: ['hen', 'bird', 'swan'] },
    { prompt: '🥚', correctWord: 'egg', distractors: ['milk', 'bread', 'cake'] },
    { prompt: '🐝', correctWord: 'bee', distractors: ['fly', 'ant', 'wasp'] },
    { prompt: '🐜', correctWord: 'ant', distractors: ['bee', 'worm', 'spider'] },
    { prompt: '🏠', correctWord: 'home', distractors: ['tent', 'cave', 'room'] },
    { prompt: '🪟', correctWord: 'door', distractors: ['wall', 'roof', 'floor'] },
    { prompt: '🥣', correctWord: 'soup', distractors: ['rice', 'meat', 'fish'] },
    { prompt: '👞', correctWord: 'shoe', distractors: ['sock', 'pant', 'coat'] },
    { prompt: '🧢', correctWord: 'hat', distractors: ['ring', 'belt', 'sock'] },
    { prompt: '🔑', correctWord: 'key', distractors: ['lock', 'ring', 'door'] }
  ],
  2: [
    { prompt: '🌳', correctWord: 'tree', distractors: ['bush', 'flower', 'grass', 'rock'] },
    { prompt: '🏠', correctWord: 'house', distractors: ['tent', 'cave', 'castle', 'hotel'] },
    { prompt: '🦜', correctWord: 'bird', distractors: ['fish', 'snake', 'rabbit', 'frog'] },
    { prompt: '🍌', correctWord: 'banana', distractors: ['mango', 'melon', 'cherry', 'apple'] },
    { prompt: '🎒', correctWord: 'bag', distractors: ['shoe', 'shirt', 'hat', 'coat'] },
    { prompt: '✏️', correctWord: 'pencil', distractors: ['ruler', 'paper', 'eraser', 'sharpener'] },
    { prompt: '🚲', correctWord: 'bicycle', distractors: ['motorcycle', 'truck', 'train', 'bus'] },
    { prompt: '⚽', correctWord: 'ball', distractors: ['bat', 'net', 'ring', 'field'] },
    { prompt: '🥕', correctWord: 'carrot', distractors: ['onion', 'potato', 'tomato', 'cabbage'] },
    { prompt: '🪑', correctWord: 'chair', distractors: ['table', 'desk', 'sofa', 'shelf'] },
    { prompt: '🛏️', correctWord: 'bed', distractors: ['mat', 'pillow', 'blanket', 'cot'] },
    { prompt: '💡', correctWord: 'bulb', distractors: ['lamp', 'torch', 'sun', 'wire'] },
    { prompt: '🍊', correctWord: 'orange', distractors: ['apple', 'lemon', 'peach', 'plum'] },
    { prompt: '🍇', correctWord: 'grapes', distractors: ['berry', 'cherry', 'melon', 'fig'] },
    { prompt: '🦷', correctWord: 'teeth', distractors: ['bone', 'nail', 'skin', 'hair'] },
    { prompt: '🧴', correctWord: 'soap', distractors: ['water', 'shampoo', 'brush', 'towel'] },
    { prompt: '🧼', correctWord: 'towel', distractors: ['mat', 'cloth', 'sheet', 'bag'] },
    { prompt: '🥄', correctWord: 'spoon', distractors: ['fork', 'knife', 'plate', 'bowl'] },
    { prompt: '🍽️', correctWord: 'plate', distractors: ['cup', 'glass', 'dish', 'tray'] },
    { prompt: '🥛', correctWord: 'water', distractors: ['milk', 'juice', 'soda', 'tea'] }
  ],
  3: [
    { prompt: '🏔️', correctWord: 'mountain', distractors: ['valley', 'desert', 'island', 'forest'] },
    { prompt: '🦋', correctWord: 'butterfly', distractors: ['spider', 'beetle', 'ant', 'worm'] },
    { prompt: '🍍', correctWord: 'pineapple', distractors: ['coconut', 'papaya', 'strawberry', 'peach'] },
    { prompt: '👟', correctWord: 'sneakers', distractors: ['slippers', 'boots', 'sandals', 'heels'] },
    { prompt: '🪟', correctWord: 'window', distractors: ['door', 'wall', 'floor', 'ceiling'] },
    { prompt: '🛶', correctWord: 'boat', distractors: ['submarine', 'ship', 'yacht', 'canoe'] },
    { prompt: '⛈️', correctWord: 'thunderstorm', distractors: ['rainbow', 'sunshine', 'snowfall', 'breeze'] },
    { prompt: '🖥️', correctWord: 'computer', distractors: ['telephone', 'television', 'radio', 'camera'] },
    { prompt: '🦁', correctWord: 'predator', distractors: ['prey', 'insect', 'reptile', 'mammal'] },
    { prompt: '🍉', correctWord: 'watermelon', distractors: ['cantaloupe', 'papaya', 'coconut', 'pumpkin'] },
    { prompt: '🧥', correctWord: 'jacket', distractors: ['shirt', 'sweater', 'scarf', 'gloves'] },
    { prompt: '🪜', correctWord: 'ladder', distractors: ['stairs', 'elevator', 'escalator', 'ramp'] },
    { prompt: '🪁', correctWord: 'kite', distractors: ['balloon', 'airplane', 'glider', 'drone'] },
    { prompt: '🧲', correctWord: 'magnet', distractors: ['iron', 'copper', 'plastic', 'glass'] },
    { prompt: '🔭', correctWord: 'telescope', distractors: ['microscope', 'compass', 'scale', 'ruler'] },
    { prompt: '🌵', correctWord: 'cactus', distractors: ['fern', 'moss', 'pine', 'palm'] },
    { prompt: '🍁', correctWord: 'autumn', distractors: ['spring', 'summer', 'winter', 'monsoon'] },
    { prompt: '🕯️', correctWord: 'candle', distractors: ['match', 'torch', 'bulb', 'fire'] },
    { prompt: '🧺', correctWord: 'basket', distractors: ['box', 'bucket', 'bag', 'can'] },
    { prompt: '🪞', correctWord: 'mirror', distractors: ['glass', 'frame', 'picture', 'lens'] }
  ],
  4: [
    { prompt: '🌧️', correctWord: 'ulan', distractors: ['araw', 'hangin', 'lupa', 'ulap'] },
    { prompt: '🔥', correctWord: 'apoy', distractors: ['tubig', 'kahoy', 'bato', 'abo'] },
    { prompt: '🥬', correctWord: 'gulay', distractors: ['prutas', 'karne', 'kanin', 'tinapay'] },
    { prompt: '🦅', correctWord: 'agila', distractors: ['maya', 'pato', 'manok', 'pabo'] },
    { prompt: '🌺', correctWord: 'bulaklak', distractors: ['dahon', 'sanga', 'ugat', 'buto'] },
    { prompt: '🌊', correctWord: 'dagat', distractors: ['ilog', 'lawa', 'sapa', 'talon'] },
    { prompt: '🏹', correctWord: 'pana', distractors: ['sibat', 'itak', 'kalasag', 'baril'] },
    { prompt: '🛖', correctWord: 'kubo', distractors: ['gusali', 'bahay-na-bato', 'simbahan', 'paaralan'] },
    { prompt: '🧼', correctWord: 'sabon', distractors: ['tubig', 'tuwalya', 'suklay', 'salamin'] },
    { prompt: '✏️', correctWord: 'lapis', distractors: ['papel', 'aklat', 'pambura', 'tisa'] },
    { prompt: '🪑', correctWord: 'upuan', distractors: ['mesa', 'aparador', 'kama', 'pinto'] },
    { prompt: '📖', correctWord: 'aklat', distractors: ['lapis', 'kuwaderno', 'papel', 'tinta'] },
    { prompt: '🐕', correctWord: 'aso', distractors: ['pusa', 'ibon', 'daga', 'kabayo'] },
    { prompt: '🐈', correctWord: 'pusa', distractors: ['aso', 'baboy', 'baka', 'kambing'] },
    { prompt: '🌾', correctWord: 'palay', distractors: ['mais', 'trigo', 'tubo', 'niyog'] },
    { prompt: '🥥', correctWord: 'niyog', distractors: ['saging', 'mangga', 'pinya', 'suha'] },
    { prompt: '🪵', correctWord: 'kahoy', distractors: ['bato', 'bakal', 'lupa', 'tanso'] },
    { prompt: '🪨', correctWord: 'bato', distractors: ['kahoy', 'lupa', 'buhangin', 'putik'] },
    { prompt: '🏡', correctWord: 'bahay', distractors: ['daan', 'tulay', 'bakod', 'bintana'] },
    { prompt: '🚲', correctWord: 'bisikleta', distractors: ['kotse', 'trak', 'motor', 'tren'] }
  ],
  5: [
    { prompt: '🔬', correctWord: 'microscope', distractors: ['telescope', 'compass', 'magnet', 'thermometer'] },
    { prompt: '🧬', correctWord: 'dna', distractors: ['rna', 'cell', 'protein', 'enzyme'] },
    { prompt: '🦖', correctWord: 'dinosaur', distractors: ['mammoth', 'reptile', 'fossil', 'volcano'] },
    { prompt: '🪐', correctWord: 'saturn', distractors: ['jupiter', 'mars', 'venus', 'neptune'] },
    { prompt: '🔋', correctWord: 'battery', distractors: ['wire', 'switch', 'bulb', 'generator'] },
    { prompt: '🧲', correctWord: 'magnet', distractors: ['iron', 'copper', 'glass', 'plastic'] },
    { prompt: '🌡️', correctWord: 'thermometer', distractors: ['barometer', 'scale', 'clock', 'compass'] },
    { prompt: '🌋', correctWord: 'volcano', distractors: ['earthquake', 'tsunami', 'tornado', 'avalanche'] },
    { prompt: '🧪', correctWord: 'beaker', distractors: ['flask', 'tube', 'funnel', 'dropper'] },
    { prompt: '🧫', correctWord: 'petri', distractors: ['slide', 'beaker', 'flask', 'cover'] },
    { prompt: '🧭', correctWord: 'compass', distractors: ['ruler', 'scale', 'clock', 'map'] },
    { prompt: '🌍', correctWord: 'earth', distractors: ['mars', 'venus', 'mercury', 'sun'] },
    { prompt: '☄️', correctWord: 'comet', distractors: ['asteroid', 'meteor', 'star', 'satellite'] },
    { prompt: '🛰️', correctWord: 'satellite', distractors: ['comet', 'rocket', 'balloon', 'drone'] },
    { prompt: '🚀', correctWord: 'rocket', distractors: ['plane', 'helicopter', 'balloon', 'train'] },
    { prompt: '🕸️', correctWord: 'spiderweb', distractors: ['cocoon', 'nest', 'hive', 'shell'] },
    { prompt: '🍄', correctWord: 'fungus', distractors: ['moss', 'fern', 'algae', 'lichen'] },
    { prompt: '🦷', correctWord: 'calcium', distractors: ['iron', 'zinc', 'sodium', 'potassium'] },
    { prompt: '🩻', correctWord: 'xray', distractors: ['scan', 'photo', 'video', 'lens'] },
    { prompt: '🧠', correctWord: 'neuron', distractors: ['cell', 'muscle', 'blood', 'skin'] }
  ],
  6: [
    { prompt: '🏛️', correctWord: 'government', distractors: ['economy', 'culture', 'territory', 'constitution'] },
    { prompt: '⚖️', correctWord: 'justice', distractors: ['liberty', 'equality', 'sovereignty', 'democracy'] },
    { prompt: '🗳️', correctWord: 'election', distractors: ['campaign', 'poll', 'ballot', 'inauguration'] },
    { prompt: '🪙', correctWord: 'currency', distractors: ['inflation', 'trade', 'budget', 'tax'] },
    { prompt: '📜', correctWord: 'charter', distractors: ['treaty', 'decree', 'bill', 'proclamation'] },
    { prompt: '🧭', correctWord: 'navigation', distractors: ['exploration', 'cartography', 'astronomy', 'meteorology'] },
    { prompt: '🤝', correctWord: 'diplomacy', distractors: ['alliance', 'conflict', 'treaty', 'negotiation'] },
    { prompt: '⚔️', correctWord: 'revolution', distractors: ['independence', 'colonization', 'federation', 'annexation'] },
    { prompt: '🏰', correctWord: 'feudalism', distractors: ['capitalism', 'socialism', 'democracy', 'anarchy'] },
    { prompt: '🏭', correctWord: 'industry', distractors: ['agriculture', 'forestry', 'fishery', 'crafts'] },
    { prompt: '🌾', correctWord: 'agriculture', distractors: ['industry', 'commerce', 'finance', 'service'] },
    { prompt: '🚢', correctWord: 'commerce', distractors: ['industry', 'defense', 'education', 'welfare'] },
    { prompt: '🛡️', correctWord: 'defense', distractors: ['offense', 'treaty', 'trade', 'alliance'] },
    { prompt: '🗺️', correctWord: 'cartography', distractors: ['geography', 'geology', 'astronomy', 'history'] },
    { prompt: '📡', correctWord: 'telecommunication', distractors: ['navigation', 'broadcasting', 'aviation', 'shipping'] },
    { prompt: '🔌', correctWord: 'infrastructure', distractors: ['superstructure', 'architecture', 'monument', 'landmark'] },
    { prompt: '🎓', correctWord: 'education', distractors: ['employment', 'recreation', 'retirement', 'residence'] },
    { prompt: '🏥', correctWord: 'healthcare', distractors: ['sanitation', 'welfare', 'insurance', 'hospitality'] },
    { prompt: '⛪', correctWord: 'monastery', distractors: ['palace', 'fortress', 'guild', 'market'] },
    { prompt: '🛖', correctWord: 'colony', distractors: ['empire', 'republic', 'kingdom', 'province'] }
  ]
};

function setupWordGardenGame(container) {
  gameWordGardenScore = 0;
  gameWordGardenIndex = 0;
  gameWordGardenBlooms = [];

  const grade = getActiveGradeNumber();
  const pool = gameWordGardenPool[grade] || gameWordGardenPool[3];
  gameWordGardenQuestions = [...pool].sort(() => Math.random() - 0.5).slice(0, 5);

  renderWordGardenQuestion(container);
}

function renderWordGardenQuestion(container) {
  if (gameWordGardenIndex >= gameWordGardenQuestions.length) {
    completeGameRewards('wordgarden');
    return;
  }

  const question = gameWordGardenQuestions[gameWordGardenIndex];
  const choices = [question.correctWord, ...question.distractors];
  choices.sort(() => Math.random() - 0.5);

  let choicesHTML = '';
  choices.forEach(word => {
    choicesHTML += `
      <button class="ws-btn-action" onclick="answerWordGarden('${word}')"
        style="padding: 14px; font-size: 15px; font-weight: 600; border-radius: 14px; border: 1.5px solid var(--border-color); background: var(--bg-card); color: var(--text-main); transition: all 0.2s;">
        ${word}
      </button>
    `;
  });

  let gardenHTML = gameWordGardenBlooms.map(b => `<span style="font-size: 28px; margin: 0 4px; animation: bounce 0.4s ease-out;">${b}</span>`).join(' ');

  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 420px; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 600; margin-bottom: 12px; width: 100%; text-align: left;">
        Round ${gameWordGardenIndex + 1} of 5
      </div>
      
      <div style="font-size: 72px; margin-bottom: 15px; filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.1));">${question.prompt}</div>
      
      <p style="font-size: 15px; color: var(--text-main); font-weight: 700; margin-bottom: 20px;">
        Which word matches the picture?
      </p>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; width: 100%; margin-bottom: 24px;">
        ${choicesHTML}
      </div>
      
      <div style="min-height: 45px; margin-bottom: 10px; display: flex; justify-content: center; align-items: center;">
        ${gardenHTML || '<span style="color: var(--text-muted); font-size: 13px; font-style: italic;">Garden is waiting for blooms...</span>'}
      </div>
      
      <div style="font-size: 12px; color: var(--text-muted); font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase;">🌼 Your Garden Plot</div>
    </div>
  `;
}

function answerWordGarden(word) {
  const question = gameWordGardenQuestions[gameWordGardenIndex];
  const container = document.getElementById('game-canvas-area');

  if (word === question.correctWord) {
    gameWordGardenScore++;
    gameWordGardenBlooms.push(['🌸','🌷','🌻','🌹'][gameWordGardenIndex % 4]);
    playCorrectAudio();
    gameWordGardenIndex++;
    
    const correctBtn = Array.from(document.querySelectorAll('.ws-btn-action')).find(btn => btn.innerText.trim() === word);
    if (correctBtn) {
      correctBtn.style.backgroundColor = 'var(--correct)';
      correctBtn.style.color = 'white';
      correctBtn.style.borderColor = 'var(--correct)';
    }
    
    setTimeout(() => renderWordGardenQuestion(container), 600);
  } else {
    playIncorrectAudio();
    
    const wrongBtn = Array.from(document.querySelectorAll('.ws-btn-action')).find(btn => btn.innerText.trim() === word);
    if (wrongBtn) {
      wrongBtn.style.backgroundColor = 'var(--incorrect)';
      wrongBtn.style.color = 'white';
      wrongBtn.style.borderColor = 'var(--incorrect)';
      setTimeout(() => {
        wrongBtn.style.backgroundColor = '';
        wrongBtn.style.color = '';
        wrongBtn.style.borderColor = '';
      }, 500);
    }
  }
}

// ==========================================
// 3. SCIENCE SORT LAB
// ==========================================
let gameScienceSortScore = 0;
let gameScienceSortIndex = 0;
let gameScienceSortQuestions = [];
let gameScienceSortCategories = [];

const gameScienceSortPool = {
  1: {
    categories: ['Living', 'Non-living'],
    items: [
      { label: 'Dog', emoji: '🐶', correctCategory: 'Living' },
      { label: 'Rock', emoji: '🪨', correctCategory: 'Non-living' },
      { label: 'Tree', emoji: '🌳', correctCategory: 'Living' },
      { label: 'Chair', emoji: '🪑', correctCategory: 'Non-living' },
      { label: 'Fish', emoji: '🐟', correctCategory: 'Living' },
      { label: 'Water Bottle', emoji: '🍼', correctCategory: 'Non-living' },
      { label: 'Butterfly', emoji: '🦋', correctCategory: 'Living' },
      { label: 'Pencil', emoji: '✏️', correctCategory: 'Non-living' },
      { label: 'Cat', emoji: '🐱', correctCategory: 'Living' },
      { label: 'Book', emoji: '📖', correctCategory: 'Non-living' },
      { label: 'Frog', emoji: '🐸', correctCategory: 'Living' },
      { label: 'Coin', emoji: '🪙', correctCategory: 'Non-living' },
      { label: 'Bird', emoji: '🐦', correctCategory: 'Living' },
      { label: 'Spoon', emoji: '🥄', correctCategory: 'Non-living' },
      { label: 'Flower', emoji: '🌸', correctCategory: 'Living' },
      { label: 'Desk', emoji: '🖥️', correctCategory: 'Non-living' },
      { label: 'Plant', emoji: '🌱', correctCategory: 'Living' },
      { label: 'Paper', emoji: '📄', correctCategory: 'Non-living' },
      { label: 'Ant', emoji: '🐜', correctCategory: 'Living' },
      { label: 'Car', emoji: '🚗', correctCategory: 'Non-living' }
    ]
  },
  2: {
    categories: ['Living', 'Non-living'],
    items: [
      { label: 'Cat', emoji: '🐱', correctCategory: 'Living' },
      { label: 'Toy Car', emoji: '🚗', correctCategory: 'Non-living' },
      { label: 'Bird', emoji: '🐦', correctCategory: 'Living' },
      { label: 'Book', emoji: '📖', correctCategory: 'Non-living' },
      { label: 'Plant', emoji: '🌱', correctCategory: 'Living' },
      { label: 'Spoon', emoji: '🥄', correctCategory: 'Non-living' },
      { label: 'Frog', emoji: '🐸', correctCategory: 'Living' },
      { label: 'Coin', emoji: '🪙', correctCategory: 'Non-living' },
      { label: 'Butterfly', emoji: '🦋', correctCategory: 'Living' },
      { label: 'Pencil', emoji: '✏️', correctCategory: 'Non-living' },
      { label: 'Worm', emoji: '🪱', correctCategory: 'Living' },
      { label: 'Computer', emoji: '🖥️', correctCategory: 'Non-living' },
      { label: 'Snail', emoji: '🐌', correctCategory: 'Living' },
      { label: 'Key', emoji: '🔑', correctCategory: 'Non-living' },
      { label: 'Mushroom', emoji: '🍄', correctCategory: 'Living' },
      { label: 'Glass', emoji: '🥛', correctCategory: 'Non-living' },
      { label: 'Bee', emoji: '🐝', correctCategory: 'Living' },
      { label: 'Phone', emoji: '📱', correctCategory: 'Non-living' },
      { label: 'Rabbit', emoji: '🐰', correctCategory: 'Living' },
      { label: 'Clock', emoji: '⏰', correctCategory: 'Non-living' }
    ]
  },
  3: {
    categories: ['Solid', 'Liquid', 'Gas'],
    items: [
      { label: 'Ice Cube', emoji: '🧊', correctCategory: 'Solid' },
      { label: 'Water', emoji: '💧', correctCategory: 'Liquid' },
      { label: 'Steam', emoji: '💨', correctCategory: 'Gas' },
      { label: 'Wood Block', emoji: '🪵', correctCategory: 'Solid' },
      { label: 'Milk', emoji: '🥛', correctCategory: 'Liquid' },
      { label: 'Smoke', emoji: '💨', correctCategory: 'Gas' },
      { label: 'Rock', emoji: '🪨', correctCategory: 'Solid' },
      { label: 'Juice', emoji: '🧃', correctCategory: 'Liquid' },
      { label: 'Air', emoji: '🌬️', correctCategory: 'Gas' },
      { label: 'Iron Nail', emoji: '🔩', correctCategory: 'Solid' },
      { label: 'Oil', emoji: '🛢️', correctCategory: 'Liquid' },
      { label: 'Helium', emoji: '🎈', correctCategory: 'Gas' },
      { label: 'Plastic Toy', emoji: '🧸', correctCategory: 'Solid' },
      { label: 'Honey', emoji: '🍯', correctCategory: 'Liquid' },
      { label: 'Oxygen', emoji: '🌬️', correctCategory: 'Gas' },
      { label: 'Glass Cup', emoji: '🥛', correctCategory: 'Solid' },
      { label: 'Vinegar', emoji: '🧪', correctCategory: 'Liquid' },
      { label: 'Carbon Dioxide', emoji: '💨', correctCategory: 'Gas' },
      { label: 'Paper Book', emoji: '📖', correctCategory: 'Solid' },
      { label: 'Rainwater', emoji: '🌧️', correctCategory: 'Liquid' }
    ]
  },
  4: {
    categories: ['Herbivore', 'Carnivore', 'Omnivore'],
    items: [
      { label: 'Rabbit', emoji: '🐰', correctCategory: 'Herbivore' },
      { label: 'Lion', emoji: '🦁', correctCategory: 'Carnivore' },
      { label: 'Bear', emoji: '🐻', correctCategory: 'Omnivore' },
      { label: 'Cow', emoji: '🐄', correctCategory: 'Herbivore' },
      { label: 'Wolf', emoji: '🐺', correctCategory: 'Carnivore' },
      { label: 'Pig', emoji: '🐷', correctCategory: 'Omnivore' },
      { label: 'Deer', emoji: '🦌', correctCategory: 'Herbivore' },
      { label: 'Eagle', emoji: '🦅', correctCategory: 'Carnivore' },
      { label: 'Chicken', emoji: '🐔', correctCategory: 'Omnivore' },
      { label: 'Sheep', emoji: '🐑', correctCategory: 'Herbivore' },
      { label: 'Shark', emoji: '🦈', correctCategory: 'Carnivore' },
      { label: 'Human', emoji: '🧑', correctCategory: 'Omnivore' },
      { label: 'Goat', emoji: '🐐', correctCategory: 'Herbivore' },
      { label: 'Tiger', emoji: '🐯', correctCategory: 'Carnivore' },
      { label: 'Crow', emoji: '🐦', correctCategory: 'Omnivore' },
      { label: 'Horse', emoji: '🐴', correctCategory: 'Herbivore' },
      { label: 'Crocodile', emoji: '🐊', correctCategory: 'Carnivore' },
      { label: 'Mouse', emoji: '🐭', correctCategory: 'Omnivore' },
      { label: 'Elephant', emoji: '🐘', correctCategory: 'Herbivore' },
      { label: 'Owl', emoji: '🦉', correctCategory: 'Carnivore' }
    ]
  },
  5: {
    categories: ['Vertebrate', 'Invertebrate'],
    items: [
      { label: 'Frog', emoji: '🐸', correctCategory: 'Vertebrate' },
      { label: 'Spider', emoji: '🕷️', correctCategory: 'Invertebrate' },
      { label: 'Snake', emoji: '🐍', correctCategory: 'Vertebrate' },
      { label: 'Butterfly', emoji: '🦋', correctCategory: 'Invertebrate' },
      { label: 'Fish', emoji: '🐟', correctCategory: 'Vertebrate' },
      { label: 'Crab', emoji: '🦀', correctCategory: 'Invertebrate' },
      { label: 'Dog', emoji: '🐶', correctCategory: 'Vertebrate' },
      { label: 'Octopus', emoji: '🐙', correctCategory: 'Invertebrate' },
      { label: 'Bird', emoji: '🐦', correctCategory: 'Vertebrate' },
      { label: 'Earthworm', emoji: '🪱', correctCategory: 'Invertebrate' },
      { label: 'Monkey', emoji: '🐒', correctCategory: 'Vertebrate' },
      { label: 'Snail', emoji: '🐌', correctCategory: 'Invertebrate' },
      { label: 'Lizard', emoji: '🦎', correctCategory: 'Vertebrate' },
      { label: 'Jellyfish', emoji: '🪼', correctCategory: 'Invertebrate' },
      { label: 'Turtle', emoji: '🐢', correctCategory: 'Vertebrate' },
      { label: 'Starfish', emoji: '⭐', correctCategory: 'Invertebrate' },
      { label: 'Cat', emoji: '🐱', correctCategory: 'Vertebrate' },
      { label: 'Ant', emoji: '🐜', correctCategory: 'Invertebrate' },
      { label: 'Whale', emoji: '🐋', correctCategory: 'Vertebrate' },
      { label: 'Mosquito', emoji: '🦟', correctCategory: 'Invertebrate' }
    ]
  },
  6: {
    categories: ['Renewable', 'Non-renewable'],
    items: [
      { label: 'Solar Power', emoji: '☀️', correctCategory: 'Renewable' },
      { label: 'Coal', emoji: '⛏️', correctCategory: 'Non-renewable' },
      { label: 'Wind Power', emoji: '🌬️', correctCategory: 'Renewable' },
      { label: 'Gasoline', emoji: '⛽', correctCategory: 'Non-renewable' },
      { label: 'Hydropower', emoji: '🌊', correctCategory: 'Renewable' },
      { label: 'Natural Gas', emoji: '🔥', correctCategory: 'Non-renewable' },
      { label: 'Biomass', emoji: '🪵', correctCategory: 'Renewable' },
      { label: 'Nuclear Ore', emoji: '☢️', correctCategory: 'Non-renewable' },
      { label: 'Geothermal', emoji: '🌋', correctCategory: 'Renewable' },
      { label: 'Petroleum Oil', emoji: '🛢️', correctCategory: 'Non-renewable' },
      { label: 'Tidal Energy', emoji: '🌊', correctCategory: 'Renewable' },
      { label: 'Propane Gas', emoji: '🔥', correctCategory: 'Non-renewable' },
      { label: 'Solar Heat', emoji: '☀️', correctCategory: 'Renewable' },
      { label: 'Diesel Fuel', emoji: '⛽', correctCategory: 'Non-renewable' },
      { label: 'Wind Turbine', emoji: '🌬️', correctCategory: 'Renewable' },
      { label: 'Uranium Fuel', emoji: '☢️', correctCategory: 'Non-renewable' },
      { label: 'Wood Energy', emoji: '🪵', correctCategory: 'Renewable' },
      { label: 'Lignite Coal', emoji: '⛏️', correctCategory: 'Non-renewable' },
      { label: 'Ocean Thermal', emoji: '🌊', correctCategory: 'Renewable' },
      { label: 'Oil Sands', emoji: '🛢️', correctCategory: 'Non-renewable' }
    ]
  }
};

function setupScienceSortGame(container) {
  gameScienceSortScore = 0;
  gameScienceSortIndex = 0;

  const grade = getActiveGradeNumber();
  const pool = gameScienceSortPool[grade] || gameScienceSortPool[3];
  gameScienceSortCategories = pool.categories;
  gameScienceSortQuestions = [...pool.items].sort(() => Math.random() - 0.5).slice(0, 5);

  renderScienceSortQuestion(container);
}

function renderScienceSortQuestion(container) {
  if (gameScienceSortIndex >= gameScienceSortQuestions.length) {
    completeGameRewards('sciencesort');
    return;
  }

  const item = gameScienceSortQuestions[gameScienceSortIndex];

  let binsHTML = '';
  gameScienceSortCategories.forEach(cat => {
    binsHTML += `
      <button class="ws-btn-action" onclick="answerScienceSort('${cat}')"
        style="flex: 1; padding: 16px 8px; font-size: 14px; font-weight: 700; border-radius: 12px; border: 1.5px solid var(--border-color); background: var(--bg-card); color: var(--text-main); transition: all 0.2s;">
        ${cat}
      </button>
    `;
  });

  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 420px; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 600; margin-bottom: 12px; width: 100%; text-align: left;">
        Item ${gameScienceSortIndex + 1} of 5
      </div>
      
      <div id="sc-item-box" style="width: 100%; min-height: 120px; border: 2.5px dashed var(--accent); border-radius: 16px; padding: 20px; margin-bottom: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(59,130,246,0.03); transition: all 0.3s;">
        <div style="font-size: 52px; margin-bottom: 6px;">${item.emoji}</div>
        <div style="font-size: 18px; font-weight: 800; color: var(--text-main);">${item.label}</div>
      </div>
      
      <p style="font-size: 14px; color: var(--text-muted); font-weight: 600; margin-bottom: 18px;">
        Sort this item into the correct bin:
      </p>
      
      <div style="display: flex; gap: 10px; width: 100%; margin-bottom: 24px;">
        ${binsHTML}
      </div>
      
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Score: ${gameScienceSortScore} / ${gameScienceSortIndex}
      </div>
    </div>
  `;
}

function answerScienceSort(chosenCategory) {
  const item = gameScienceSortQuestions[gameScienceSortIndex];
  const container = document.getElementById('game-canvas-area');

  const correctBtn = Array.from(document.querySelectorAll('.ws-btn-action')).find(btn => btn.innerText.trim() === chosenCategory);

  if (chosenCategory === item.correctCategory) {
    gameScienceSortScore++;
    playCorrectAudio();
    if (correctBtn) {
      correctBtn.style.backgroundColor = 'var(--correct)';
      correctBtn.style.borderColor = 'var(--correct)';
      correctBtn.style.color = 'white';
    }
  } else {
    playIncorrectAudio();
    if (correctBtn) {
      correctBtn.style.backgroundColor = 'var(--incorrect)';
      correctBtn.style.borderColor = 'var(--incorrect)';
      correctBtn.style.color = 'white';
    }
    
    const correctBinBtn = Array.from(document.querySelectorAll('.ws-btn-action')).find(btn => btn.innerText.trim() === item.correctCategory);
    if (correctBinBtn) {
      correctBinBtn.style.backgroundColor = 'var(--correct)';
      correctBinBtn.style.borderColor = 'var(--correct)';
      correctBinBtn.style.color = 'white';
    }
  }

  gameScienceSortIndex++;
  setTimeout(() => renderScienceSortQuestion(container), 800);
}





// Sentence Rain Game Engine Removed
