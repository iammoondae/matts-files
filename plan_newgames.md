# Games Center — New Game Designs (Implementation Guide)

This guide specifies three new games for the Games Center, designed to match the existing
codebase conventions exactly:

- A `gameXScore` / `gameXIndex` style set of global state variables per game
- A grade-keyed data pool (same shape as `gameScramblePool[grade]`)
- A `setupXGame(container)` entry point called from `launchGame`
- A `renderXQuestion(container)` function that rebuilds the canvas HTML
- An `answerXQuestion(...)` handler that scores the attempt and advances
- A branch inside `completeGameRewards(gameId)` with a win threshold and summary text
- A card added to the dashboard grid in the Games Center markup
- Cleanup registered in `exitActiveGame()` **only if** the game uses a timer/interval or
  `requestAnimationFrame` loop

Each section below is written so it can be implemented directly without further design work.

---

## 1. Number Builder Blitz (Math — light timed challenge)

### Concept
A target number appears at the top of the screen. Below it is a small set of number and
operator tiles. The child taps tiles in order to build an expression equal to the target
before a countdown bar empties. Five rounds per session, mirroring the "3 sentences" /
"5 questions" pattern used elsewhere.

### Global state variables
```
let gameNumberBuilderScore = 0;          // rounds solved correctly
let gameNumberBuilderRoundIndex = 0;     // 0-4, current round
let gameNumberBuilderRounds = [];        // the 5 rounds chosen for this session
let gameNumberBuilderTarget = 0;         // number to build this round
let gameNumberBuilderTiles = [];         // tile objects for current round
let gameNumberBuilderSelected = [];      // tile ids tapped so far, in order
let gameNumberBuilderTimeLeft = 0;       // seconds left in current round
let gameNumberBuilderTimerInterval = null; // setInterval handle — needs cleanup
```

A tile object looks like:
```
{ id: 0, value: '7', type: 'number', used: false }
{ id: 1, value: '+', type: 'operator', used: false }
```

### Data structure — grade-keyed pool
Same shape convention as `gameScramblePool[grade]`. Each grade maps to an array of round
definitions (provide at least 6-8 per grade so 5 can be randomly sampled per session):

```
const gameNumberBuilderPool = {
  1: [
    { target: 5, tiles: ['2','3','4','1'], timeLimit: 25 },   // tap 2 numbers, no operator needed for g1 (matching mode)
    { target: 8, tiles: ['5','3','2','6'], timeLimit: 25 },
    // ...
  ],
  2: [
    { target: 9, tiles: ['4','5','+','-'], timeLimit: 22 },
    { target: 6, tiles: ['8','2','+','-'], timeLimit: 22 },
    // ...
  ],
  3: [
    { target: 12, tiles: ['4','3','+','x'], timeLimit: 20 },
    { target: 10, tiles: ['2','5','x','-'], timeLimit: 20 },
    // ...
  ],
  4: [
    { target: 24, tiles: ['6','4','x','+'], timeLimit: 18 },
    // ...
  ],
  5: [
    { target: 36, tiles: ['9','4','x','+'], timeLimit: 16 },
    // ...
  ],
  6: [
    { target: 48, tiles: ['8','6','x','-'], timeLimit: 15 },
    // ...
  ]
};
```

Notes on difficulty scaling:
- Grade 1-2: only `+` and `-`, smaller numbers (1-10), longer time limit.
- Grade 3-4: introduce `x`, numbers up to ~12.
- Grade 5-6: introduce two-operator combos, numbers up to ~20, shorter time limit.

Each round's tile set should always contain **at least one valid solution** using some
subset of the tiles in left-to-right tap order (no operator precedence needed — evaluate
strictly left to right as tiles are tapped, since that matches how a child would build it).

### Setup function
```
function setupNumberBuilderGame(container) {
  gameNumberBuilderScore = 0;
  gameNumberBuilderRoundIndex = 0;

  const grade = parseInt(localStorage.getItem('session_grade') || '3');
  const pool = gameNumberBuilderPool[grade] || gameNumberBuilderPool[3];
  gameNumberBuilderRounds = [...pool].sort(() => Math.random() - 0.5).slice(0, 5);

  if (gameNumberBuilderTimerInterval) {
    clearInterval(gameNumberBuilderTimerInterval);
    gameNumberBuilderTimerInterval = null;
  }

  startNumberBuilderRound(container);
}
```

### Round start
```
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
      // Round timed out — treat as a miss, advance without scoring
      gameNumberBuilderRoundIndex++;
      startNumberBuilderRound(container);
    }
  }, 1000);

  renderNumberBuilderRound(container);
}
```

### Render
Build tile buttons from `gameNumberBuilderTiles`, a "current expression" readout built from
`gameNumberBuilderSelected`, a Submit button, and a Clear button. Follow the existing inline
style conventions (e.g. `ws-btn-action` class, `var(--accent)`, timer bar matching the
Speed Math timer markup). Each tile's `onclick` calls `tapNumberBuilderTile(id)`.

### Tile tap handler
```
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
```

### Submit / evaluate
Evaluate strictly left to right (no precedence), since tiles were tapped in order:
```
function submitNumberBuilderExpression() {
  if (gameNumberBuilderSelected.length === 0) return;

  let result = parseFloat(gameNumberBuilderSelected[0].value);
  for (let i = 1; i < gameNumberBuilderSelected.length - 1; i += 2) {
    const op = gameNumberBuilderSelected[i].value;
    const next = parseFloat(gameNumberBuilderSelected[i + 1].value);
    if (op === '+') result += next;
    else if (op === '-') result -= next;
    else if (op === 'x') result *= next;
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
    setTimeout(() => startNumberBuilderRound(container), 600);
  } else {
    playIncorrectAudio();
    clearNumberBuilderSelection();
  }
}
```//
Note: `playCorrectAudio` / `playIncorrectAudio` already exist in the codebase (used by
Sentence Rain) and can be reused as-is since they just check `musicEnabled` and play a
sound file.

### Rewards integration
Add to `completeGameRewards`:
```
} else if (gameId === 'numberbuilder') {
  if (gameNumberBuilderScore < 3) win = false;
  summaryText = `You built ${gameNumberBuilderScore} / 5 correct expressions.`;
}
```

### Cleanup
Add to `exitActiveGame()`:
```
if (gameNumberBuilderTimerInterval) {
  clearInterval(gameNumberBuilderTimerInterval);
  gameNumberBuilderTimerInterval = null;
}
```

### Dashboard card
```html
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
```

### `launchGame` dispatch entry
```
} else if (gameId === 'numberbuilder') {
  title.innerText = '🔢 Number Builder Blitz';
  setupNumberBuilderGame(canvasArea);
}
```

---

## 2. Word Garden (English/Filipino vocabulary — calm, low-pressure)

### Concept
Each round shows a picture prompt (emoji or simple description) and 3-4 word cards. The
child taps the word card that matches the picture and "plants" it in the garden. Correct
matches bloom with a small animation; incorrect taps simply bounce back with no penalty
and no timer. Across the session, a small garden grid visually accumulates blooms — purely
cosmetic positive reinforcement, no scoring pressure.

### Global state variables
```
let gameWordGardenScore = 0;       // correct matches
let gameWordGardenIndex = 0;       // current round, 0-4
let gameWordGardenQuestions = [];  // the 5 rounds chosen for this session
let gameWordGardenBlooms = [];     // emoji/labels of blooms planted so far, for the garden display
```

### Data structure — grade-keyed pool
```
const gameWordGardenPool = {
  1: [
    { prompt: '🐶', correctWord: 'dog', distractors: ['cat', 'pig'] },
    { prompt: '☀️', correctWord: 'sun', distractors: ['moon', 'star'] },
    { prompt: '🍎', correctWord: 'apple', distractors: ['banana', 'grape'] },
    // ...
  ],
  2: [
    { prompt: '🌳', correctWord: 'tree', distractors: ['bush', 'flower', 'grass'] },
    // ...
  ],
  3: [
    { prompt: '🏔️', correctWord: 'mountain', distractors: ['valley', 'desert', 'island'] },
    // ...
  ],
  4: [
    // Filipino vocabulary example, mixing languages like other games (e.g. gooddeedssort) do
    { prompt: '🌧️', correctWord: 'ulan', distractors: ['araw', 'hangin', 'lupa'] },
    // ...
  ],
  5: [
    { prompt: '🔬', correctWord: 'microscope', distractors: ['telescope', 'compass', 'magnet'] },
    // ...
  ],
  6: [
    { prompt: '🏛️', correctWord: 'government', distractors: ['economy', 'culture', 'territory'] },
    // ...
  ]
};
```

Provide at least 6-8 entries per grade so 5 can be randomly sampled per session, same as
other pools in the codebase.

### Setup function
```
function setupWordGardenGame(container) {
  gameWordGardenScore = 0;
  gameWordGardenIndex = 0;
  gameWordGardenBlooms = [];

  const grade = parseInt(localStorage.getItem('session_grade') || '3');
  const pool = gameWordGardenPool[grade] || gameWordGardenPool[3];
  gameWordGardenQuestions = [...pool].sort(() => Math.random() - 0.5).slice(0, 5);

  renderWordGardenQuestion(container);
}
```

### Render
```
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
        style="padding: 14px; font-size: 15px; font-weight: 600; border-radius: 14px;">
        ${word}
      </button>
    `;
  });

  let gardenHTML = gameWordGardenBlooms.map(b => `<span style="font-size:22px;">${b}</span>`).join(' ');

  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 420px; padding: 20px;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 600; margin-bottom: 12px;">
        Round ${gameWordGardenIndex + 1} of 5
      </div>
      <div style="font-size: 64px; margin-bottom: 20px;">${question.prompt}</div>
      <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 18px;">
        Which word matches the picture?
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px;">
        ${choicesHTML}
      </div>
      <div style="min-height: 30px; margin-bottom: 8px;">${gardenHTML}</div>
      <div style="font-size: 12px; color: var(--text-muted);">🌼 Your Garden</div>
    </div>
  `;
}
```

### Answer handler
No penalty on incorrect taps — the card simply doesn't advance, so the child can try again:
```
function answerWordGarden(word) {
  const question = gameWordGardenQuestions[gameWordGardenIndex];
  const container = document.getElementById('game-canvas-area');

  if (word === question.correctWord) {
    gameWordGardenScore++;
    gameWordGardenBlooms.push(['🌸','🌷','🌻','🌹'][gameWordGardenIndex % 4]);
    playCorrectAudio();
    gameWordGardenIndex++;
    setTimeout(() => renderWordGardenQuestion(container), 500);
  } else {
    // Gentle bounce-back, no score penalty, no mistake counter
    playIncorrectAudio();
  }
}
```

### Rewards integration
Since this mode is explicitly low-pressure, keep the win threshold generous or even
treat every completion as a win (no failure framing) — completing the 5 rounds itself is
the goal regardless of any retries along the way:
```
} else if (gameId === 'wordgarden') {
  win = true; // completion-based, not accuracy-based — no penalty framing
  summaryText = `You planted ${gameWordGardenScore} flowers in your Word Garden!`;
}
```

### Cleanup
None needed — no timers or animation frames are used.

### Dashboard card
```html
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
```

### `launchGame` dispatch entry
```
} else if (gameId === 'wordgarden') {
  title.innerText = '🌼 Word Garden';
  setupWordGardenGame(canvasArea);
}
```

---

## 3. Science Sort Lab (Science — puzzle/strategy, no time pressure)

### Concept
The child is shown one item at a time along with 2-3 labeled category bins (e.g.
Living / Non-living, or Solid / Liquid / Gas) and taps the bin the item belongs in.
No timer; immediate gentle feedback per placement. Functionally similar in shape to
"Good Deeds Sort" but generalized to support more than two categories and multiple
classification schemes across grades.

### Global state variables
```
let gameScienceSortScore = 0;     // correct sorts
let gameScienceSortIndex = 0;     // current item, 0-4
let gameScienceSortQuestions = []; // the 5 items chosen for this session
let gameScienceSortCategories = []; // the category labels for the active scheme
```

### Data structure — grade-keyed pool
Each grade maps to one or more **classification schemes**, each with its own category
list and item pool. This supports different sorting tasks per grade level (e.g. younger
grades get a simple binary scheme, older grades get a 3-way scheme):

```
const gameScienceSortPool = {
  1: {
    categories: ['Living', 'Non-living'],
    items: [
      { label: 'Dog', emoji: '🐶', correctCategory: 'Living' },
      { label: 'Rock', emoji: '🪨', correctCategory: 'Non-living' },
      { label: 'Tree', emoji: '🌳', correctCategory: 'Living' },
      { label: 'Chair', emoji: '🪑', correctCategory: 'Non-living' },
      // ...
    ]
  },
  2: {
    categories: ['Living', 'Non-living'],
    items: [ /* slightly trickier items, e.g. 'Coral', 'Cloud' */ ]
  },
  3: {
    categories: ['Solid', 'Liquid', 'Gas'],
    items: [
      { label: 'Ice', emoji: '🧊', correctCategory: 'Solid' },
      { label: 'Juice', emoji: '🧃', correctCategory: 'Liquid' },
      { label: 'Steam', emoji: '💨', correctCategory: 'Gas' },
      // ...
    ]
  },
  4: {
    categories: ['Herbivore', 'Carnivore', 'Omnivore'],
    items: [
      { label: 'Rabbit', emoji: '🐰', correctCategory: 'Herbivore' },
      { label: 'Lion', emoji: '🦁', correctCategory: 'Carnivore' },
      { label: 'Bear', emoji: '🐻', correctCategory: 'Omnivore' },
      // ...
    ]
  },
  5: {
    categories: ['Vertebrate', 'Invertebrate'],
    items: [
      { label: 'Spider', emoji: '🕷️', correctCategory: 'Invertebrate' },
      { label: 'Frog', emoji: '🐸', correctCategory: 'Vertebrate' },
      // ...
    ]
  },
  6: {
    categories: ['Renewable', 'Non-renewable'],
    items: [
      { label: 'Solar Power', emoji: '☀️', correctCategory: 'Renewable' },
      { label: 'Coal', emoji: '⛏️', correctCategory: 'Non-renewable' },
      // ...
    ]
  }
};
```

Provide at least 6-8 items per grade's item pool so 5 can be randomly sampled per session.

### Setup function
```
function setupScienceSortGame(container) {
  gameScienceSortScore = 0;
  gameScienceSortIndex = 0;

  const grade = parseInt(localStorage.getItem('session_grade') || '3');
  const scheme = gameScienceSortPool[grade] || gameScienceSortPool[3];
  gameScienceSortCategories = scheme.categories;
  gameScienceSortQuestions = [...scheme.items].sort(() => Math.random() - 0.5).slice(0, 5);

  renderScienceSortQuestion(container);
}
```

### Render
Bin buttons are generated dynamically from `gameScienceSortCategories` so the same render
function supports 2-bin and 3-bin schemes without branching:
```
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
        style="flex: 1; padding: 16px 8px; font-size: 13px; font-weight: 700; border-radius: 12px;">
        ${cat}
      </button>
    `;
  });

  container.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 420px; padding: 20px;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 600; margin-bottom: 12px;">
        Item ${gameScienceSortIndex + 1} of 5
      </div>
      <div style="min-height: 100px; border: 2.5px dashed var(--accent); border-radius: 16px;
        padding: 20px; margin-bottom: 24px; display: flex; flex-direction: column;
        align-items: center; justify-content: center; background: rgba(59,130,246,0.03);">
        <div style="font-size: 48px; margin-bottom: 6px;">${item.emoji}</div>
        <div style="font-size: 16px; font-weight: 700; color: var(--text-main);">${item.label}</div>
      </div>
      <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">
        Sort this item into the correct bin:
      </p>
      <div style="display: flex; gap: 10px; margin-bottom: 20px;">
        ${binsHTML}
      </div>
      <div style="font-size: 13px; color: var(--text-muted);">
        Score: ${gameScienceSortScore} / ${gameScienceSortIndex}
      </div>
    </div>
  `;
}
```

### Answer handler
```
function answerScienceSort(chosenCategory) {
  const item = gameScienceSortQuestions[gameScienceSortIndex];
  const container = document.getElementById('game-canvas-area');

  if (chosenCategory === item.correctCategory) {
    gameScienceSortScore++;
    playCorrectAudio();
  } else {
    playIncorrectAudio();
  }

  gameScienceSortIndex++;
  renderScienceSortQuestion(container);
}
```

### Rewards integration
```
} else if (gameId === 'sciencesort') {
  if (gameScienceSortScore < 4) win = false;
  summaryText = `You sorted ${gameScienceSortScore} / 5 items correctly.`;
}
```

### Cleanup
None needed — no timers or animation frames are used.

### Dashboard card
```html
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
```

### `launchGame` dispatch entry
```
} else if (gameId === 'sciencesort') {
  title.innerText = '🧪 Science Sort Lab';
  setupScienceSortGame(canvasArea);
}
```

---

## Summary of integration points per game

| Game | New globals | Timer/RAF cleanup needed? | `completeGameRewards` win condition |
|---|---|---|---|
| Number Builder Blitz | 7 vars (incl. timer interval) | Yes — `gameNumberBuilderTimerInterval` | `score >= 3` of 5 |
| Word Garden | 4 vars | No | Always a win (completion-based) |
| Science Sort Lab | 4 vars | No | `score >= 4` of 5 |

All three follow the same `setup -> render -> answer -> completeGameRewards` loop already
used throughout the file, so no changes to `launchGame`'s overall structure, the rewards
modal, or `exitActiveGame`'s general shape are required beyond the additions listed above.
