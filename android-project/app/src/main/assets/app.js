// Safe LocalStorage Wrapper to prevent crashes in restricted frames/sandboxes
const safeStorage = (() => {
  const fallback = {};
  return {
    getItem(key) {
      try {
        return window.localStorage.getItem(key);
      } catch (e) {
        return fallback[key] || null;
      }
    },
    setItem(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch (e) {
        fallback[key] = String(value);
      }
    },
    removeItem(key) {
      try {
        window.localStorage.removeItem(key);
      } catch (e) {
        delete fallback[key];
      }
    },
    key(i) {
      try {
        return window.localStorage.key(i);
      } catch (e) {
        return Object.keys(fallback)[i] || null;
      }
    },
    get length() {
      try {
        return window.localStorage.length;
      } catch (e) {
        return Object.keys(fallback).length;
      }
    }
  };
})();

function stripStoryPrefix(title) {
  if (!title) return '';
  return title.replace(/^(Short Story:|Story:|PERFORMANCE TASK:)\s*/i, '').trim();
}

const PARENT_LEARNER_ACTIVITIES = [
  {
    title: "Everyday Material Tinkering Log",
    objectives: "Identify, categorize, and document materials found in the home based on their state of matter (solid, liquid, or gas).",
    steps: [
      "Gather 5 to 10 different objects from around your house (e.g. key, water bottle, cooking oil, balloon, soap).",
      "Touch and examine each object. Discuss whether it can hold its shape (solid), flow to fill a container (liquid), or disperse into the air (gas).",
      "Create a table in your study log and classify each item under Solid, Liquid, or Gas.",
      "Write down the properties of each material: is it hard, soft, transparent, sticky, or odorless?",
      "Discuss how these properties make the material useful for its purpose (e.g., why is a key made of hard metal instead of liquid?)."
    ]
  },
  {
    title: "Floating and Sinking Investigation Log",
    objectives: "Investigate how shape, weight, and material properties affect whether an object floats or sinks in water.",
    steps: [
      "Fill a clean basin or bucket with room-temperature tap water.",
      "Select 6 test items: a metal spoon, a plastic toy, a dry leaf, a coin, a cork, and a stone.",
      "Before testing, write down your prediction (Float or Sink) for each item.",
      "Drop each item one by one into the water and observe what happens. Write down the actual result.",
      "Take a small piece of aluminum foil. Float it as a flat sheet, then crumple it into a tight ball and drop it again. Discuss why the shape changed its buoyancy."
    ]
  },
  {
    title: "Solid to Liquid Melting Activity",
    objectives: "Observe thermal energy transfer and state changes by melting solid substances under safe supervision.",
    steps: [
      "Collect three test substances: an ice cube, a small block of butter or margarine, and a small piece of chocolate.",
      "Place each substance in a separate saucer or small bowl.",
      "Place them in a warm area (such as under direct sunlight or near a warm stove under parent supervision).",
      "Set a timer and observe how many minutes it takes for each solid substance to turn into liquid.",
      "Compare the melting speeds of the three items and explain why heat is required to break down solid structures."
    ]
  },
  {
    title: "Air Compression and Syringe Investigation Log",
    objectives: "Demonstrate that air occupies physical space and is compressible, unlike water.",
    steps: [
      "Obtain a clean plastic oral medicine syringe (without a needle).",
      "Pull the plunger back to fill the syringe barrel with air, then seal the tip firmly with your thumb.",
      "Try to push the plunger forward. Observe how the trapped air compresses, and how the plunger springs back when released.",
      "Now, fill the syringe with liquid water and seal the tip with your thumb.",
      "Try to push the plunger forward again. Notice how water cannot be compressed compared to air. Discuss how molecules are arranged differently in liquids and gases."
    ]
  },
  {
    title: "Magnets and Magnetic Fields Experiment",
    objectives: "Classify common household items into magnetic and non-magnetic materials, and map out the field of attraction.",
    steps: [
      "Find a refrigerator magnet or any small magnet in your home.",
      "Collect 8 household items: a paperclip, a wooden pencil, a copper coin, an iron nail, a plastic spoon, a key, paper, and aluminum foil.",
      "Touch the magnet to each item and record whether it sticks (magnetic) or does not stick (non-magnetic).",
      "Observe that only metals containing iron, nickel, or cobalt are attracted to magnets.",
      "Place a paperclip on a table. Slowly bring the magnet closer and measure the distance at which the paperclip jumps to the magnet. Write down this distance."
    ]
  },
  {
    title: "Shadow Shape and Size Exploration Log",
    objectives: "Observe how light travels in straight lines and how the size and shape of a shadow change with distance from a light source.",
    steps: [
      "Find a flashlight or use a smartphone flashlight in a dark or dimly lit room.",
      "Select a solid, opaque object (like a toy figure, a cup, or a closed book).",
      "Hold the object 10 centimeters away from a flat wall, shine the flashlight on it, and observe the sharpness and size of the shadow.",
      "Move the object closer to the flashlight (away from the wall) and observe how the shadow grows larger and blurrier.",
      "Move the object closer to the wall (away from the flashlight) and observe how the shadow grows smaller and sharper. Explain how shadows are formed when light is blocked."
    ]
  },
  {
    title: "Family Budgeting and Shopping Math Activity",
    objectives: "Apply addition and multiplication skills to plan a simple family meal within a budget of 500 Pesos.",
    steps: [
      "With a parent, write down a menu for a simple lunch or dinner (e.g., Sinigang or Adobo).",
      "List all the ingredients needed (e.g., pork/chicken, vegetables, tamarind mix, soy sauce, garlic).",
      "Look up or ask your parent for the approximate cost of each ingredient in the local market or store.",
      "Calculate the total cost of all the ingredients using addition. Ensure it does not exceed 500 Pesos.",
      "If the total is below 500 Pesos, calculate how much change you will receive. If it is over, discuss what ingredients can be adjusted."
    ]
  },
  {
    title: "Bilingual Story Translation and Phonics Activity",
    objectives: "Read a short story, identify adjectives and pronouns, and translate key sentences between English and Filipino.",
    steps: [
      "Read a short story or paragraph from your weekly Reading block together with your parent.",
      "Identify at least 3 adjectives (describing words) and 3 pronouns (pointing or replacing words) used in the story.",
      "Write down the identified words in your study log and write their counterparts (e.g. 'he' to 'siya', 'beautiful' to 'maganda').",
      "Select one key sentence from the story and translate it from English to Filipino, ensuring proper grammar and meaning.",
      "Read the translated sentence aloud to your parent and explain how the meaning is preserved across both languages."
    ]
  },
  {
    title: "Mapping Our Community and History Log",
    objectives: "Draw a simple map of your local barangay or neighborhood and interview a parent about the history of its name.",
    steps: [
      "On a clean sheet of paper, draw a simple map of your neighborhood showing your home, the nearest street, and key landmarks (e.g., barangay hall, school, chapel, store).",
      "Identify the cardinal directions (North, South, East, West) and mark them on your map.",
      "Ask your parent or grandparent about the history of your barangay: why was it named that way, and what was it like in the past?",
      "Write a brief 3-sentence summary of the barangay's history next to your map.",
      "Discuss with your parent how the community has changed over time in terms of buildings, roads, and environment."
    ]
  },
  {
    title: "Water Conservation Audit and GMRC Checklist",
    objectives: "Perform a household audit of water usage and create a daily checklist to practice the values of saving resources (pagtitipid).",
    steps: [
      "Inspect all the water faucets, pipes, and toilets in your house with a parent to check for any leaks.",
      "Observe how members of the family wash dishes, take baths, or water plants, and discuss if water is being wasted.",
      "Create a 'Water Saver' checklist in your study log with rules: (a) Turn off the faucet while brushing teeth, (b) Use a basin (palanggana) for washing dishes, (c) Reuse laundry water for flushing toilets.",
      "Track your family's compliance with these rules for three days by marking checkmarks.",
      "Calculate how much water was saved and discuss how conservation shows respect and care for the family and environment."
    ]
  }
];

const REMOTE_UPDATE_URL = "https://raw.githubusercontent.com/iammoondae/matts-files/main";

// PASSING SCORE THRESHOLDS
const QUIZ_PASSING_SCORE = 15;       // 60% of 25
const CHALLENGE_PASSING_SCORE = 3;   // 60% of 5
const SCHOOL_YEAR_START_DATE = '2026-06-22'; // UPDATE each new school year

// PARENTS PIN SECURITY STATE
let isParentUnlocked = false;
let enteredPinBuffer = '';

function clearAllActiveNavButtons() {
  document.querySelectorAll('.mode-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.subject-buttons-list .nav-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.reports-buttons-list .nav-btn').forEach(btn => btn.classList.remove('active'));
}



// POMODORO TIMER STATE
let timerSeconds = 1200; // 20 minutes study
let timerRunning = false;
let timerMode = 'study'; // 'study' or 'break'

// Helper to get learner grade
function getLearnerGrade() {
  return safeStorage.getItem('session_grade_level') || 'g3';
}

function getActiveGradeNumber() {
  const g = getLearnerGrade();
  if (g === 'g1') return 1;
  if (g === 'g2') return 2;
  return 3;
}

// Lightweight IndexedDB wrapper for custom background music
const musicDB = (() => {
  const DB_NAME = 'MusicHubDB';
  const STORE_NAME = 'musicStore';
  const KEY_NAME = 'customBackgroundMusic';

  let dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = (e) => {
      resolve(e.target.result);
    };
    request.onerror = (e) => {
      console.warn("IndexedDB failed to initialize:", e);
      reject(e.target.error);
    };
  });

  return {
    saveMusic(blob) {
      return dbPromise.then(db => {
        return new Promise((resolve, reject) => {
          const tx = db.transaction(STORE_NAME, 'readwrite');
          const store = tx.objectStore(STORE_NAME);
          const req = store.put(blob, KEY_NAME);
          req.onsuccess = () => resolve();
          req.onerror = () => reject(req.error);
        });
      });
    },
    getMusic() {
      return dbPromise.then(db => {
        return new Promise((resolve, reject) => {
          const tx = db.transaction(STORE_NAME, 'readonly');
          const store = tx.objectStore(STORE_NAME);
          const req = store.get(KEY_NAME);
          req.onsuccess = () => resolve(req.result);
          req.onerror = () => reject(req.error);
        });
      });
    },
    clearMusic() {
      return dbPromise.then(db => {
        return new Promise((resolve, reject) => {
          const tx = db.transaction(STORE_NAME, 'readwrite');
          const store = tx.objectStore(STORE_NAME);
          const req = store.delete(KEY_NAME);
          req.onsuccess = () => resolve();
          req.onerror = () => reject(req.error);
        });
      });
    }
  };
})();

// APP STATE
let currentWeek = 1;
let currentSubject = 'math';
let currentMode = 'home'; // 'home', 'study', 'quiz', 'challenge', 'performance', 'checklist', 'reading', 'worksheet'
let currentLevel = 'core'; // 'core' or 'advanced'
let onPinSuccessCallback = null;
let sfxEnabled = false;
let studyImageScale = 1.0; // Zoom factor for study guide slide images
let globalFontScale = 100; // global app font size percentage

let currentSlideIndex = 0;
let currentQuestionIndex = 0;
let quizScore = 0;
let rubricGrades = [3, 3, 3];
let wrongAnswersLog = [];

// Worksheet drawing and stylus tracking state variables
let currentWorksheetPage = 0;
let wsIsDrawing = false;
let wsBrushColor = '#000000';
let wsBrushSize = 2;
let wsIsEraser = false;
let wsHistory = [];
let worksheetZoom = 1.0;
let wsDrawWithFinger = true; // Toggle to allow finger drawing instead of stylus-only
let wsShowAnswers = false;

// Games Center State Variables
let playerCoins = 0;
let playerLifetimeStars = 0;
let mascotLevel = 1;
let mascotXP = 0;
let activeMascotOutfit = 'default';
let tobiHappiness = 100;
let ownedOutfits = ['default'];
let ownedThemes = ['default'];
let ownedSongs = ['default'];

// Daily Reading State Variables
let currentReadingDay = null;
let currentReadingSlide = 0;
let readingTimerInterval = null;
let readingSeconds = 0;
let readingUtterance = null;

// Review date mode variables
window.IS_REVIEW_MODE = false;
window.CURRENT_REVIEW_DATE = null;

// Sidebar navigation helper functions for mobile/tablet portrait modes
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar-nav');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay) {
    const isActive = sidebar.classList.contains('active');
    sidebar.classList.toggle('active', !isActive);
    overlay.classList.toggle('active', !isActive);
    document.body.classList.toggle('sidebar-open', !isActive);
  }
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar-nav');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay) {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('sidebar-open');
  }
}

function setLevel(level) {
  currentLevel = level;

  // Update level button classes
  document.querySelectorAll('.level-selector .level-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`level-${level}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Add/remove class from body for theme overrides
  if (level === 'advanced') {
    document.body.classList.add('advanced-level');
  } else {
    document.body.classList.remove('advanced-level');
  }

  // Reset progress and indices
  currentSlideIndex = 0;
  currentQuestionIndex = 0;
  quizScore = 0;
  wrongAnswersLog = [];

  // Re-evaluate subject under new level
  const weekData = window.CURRENT_WEEK_DATA;
  if (weekData) {
    const data = getActiveLevelData();
    if (data && !data[currentSubject]) {
      const available = Object.keys(data).filter(k => k !== 'checklist');
      if (available.length > 0) {
        currentSubject = ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc'].find(s => data[s]) || available[0];
      }
    }
  }

  setSubject(currentSubject, true);
  updateScoresDisplay();
}

// Audio elements
let bgMusic = null;
let musicEnabled = false;

// Confetti canvas state
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let confettiParticles = [];
let animationId = null;

window.addEventListener('DOMContentLoaded', () => {
  checkAppVersionUpgrade();
  applyLearnerProfile();
  applyProfilePic();
  initGamesCenterState();

  // Pre-load background music from IndexedDB or default to background5.mp3
  musicDB.getMusic().then(blob => {
    if (blob) {
      const audioUrl = URL.createObjectURL(blob);
      setupBgMusic(audioUrl, blob.name || 'custom_music');
    } else {
      setupBgMusic('background5.mp3', 'Default');
    }
  }).catch(() => {
    setupBgMusic('background5.mp3', 'Default');
  });

  // Restore music preference
  musicEnabled = safeStorage.getItem('session_music_enabled') === 'true';
  if (musicEnabled) {
    toggleMusic(true);
  }

  // Restore SFX preference
  sfxEnabled = safeStorage.getItem('session_sfx_enabled') === 'true';

  // Restore worksheet finger drawing preference
  wsDrawWithFinger = safeStorage.getItem('session_wsDrawWithFinger') !== 'false';

  // Check onboarding on startup
  const nickname = safeStorage.getItem('session_nickname');
  const grade = safeStorage.getItem('session_grade_level');
  
  if (!nickname || !grade) {
    const overlay = document.getElementById('onboarding-overlay');
    if (overlay) {
      overlay.style.display = 'flex';
      setTimeout(() => overlay.classList.add('show'), 50);
    }
    // Set up weekly selector anyway, but do not load week data yet
    buildWeekSelector();
  } else {
    buildWeekSelector();
    
    // Restore session if available
    const savedWeek = safeStorage.getItem('session_currentWeek');
    if (savedWeek) {
      currentWeek = parseInt(savedWeek);
      currentLevel = safeStorage.getItem('session_currentLevel') || 'core';
      currentSubject = safeStorage.getItem('session_currentSubject') || 'math';
      currentMode = safeStorage.getItem('session_currentMode');
      window.IS_REVIEW_MODE = safeStorage.getItem('session_IS_REVIEW_MODE') === 'true';
      window.CURRENT_REVIEW_DATE = safeStorage.getItem('session_CURRENT_REVIEW_DATE') || null;
      currentSlideIndex = parseInt(safeStorage.getItem('session_currentSlideIndex') || '0');
      currentQuestionIndex = parseInt(safeStorage.getItem('session_currentQuestionIndex') || '0');
      currentReadingDay = safeStorage.getItem('session_currentReadingDay') || null;
      currentReadingSlide = parseInt(safeStorage.getItem('session_currentReadingSlide') || '0');
      currentWorksheetPage = parseInt(safeStorage.getItem('session_currentWorksheetPage') || '0');
      quizScore = parseInt(safeStorage.getItem('session_quizScore') || '0');
      try {
        wrongAnswersLog = JSON.parse(safeStorage.getItem('session_wrongAnswersLog') || '[]');
      } catch (e) {
        wrongAnswersLog = [];
      }
      wsShowAnswers = safeStorage.getItem('session_wsShowAnswers') === 'true';
      
      // Sync level button styles
      document.querySelectorAll('.level-selector .level-btn').forEach(btn => btn.classList.remove('active'));
      const activeBtn = document.getElementById(`level-${currentLevel}`);
      if (activeBtn) activeBtn.classList.add('active');
      if (currentLevel === 'advanced') {
        document.body.classList.add('advanced-level');
      } else {
        document.body.classList.remove('advanced-level');
      }
      
      // Sync week selector select element
      const select = document.getElementById('week-select');
      if (select) {
        if (window.IS_REVIEW_MODE && window.CURRENT_REVIEW_DATE) {
          select.value = `review_${window.CURRENT_REVIEW_DATE}`;
        } else {
          select.value = currentWeek;
        }
      }
      
      // Sync translation state
      const showTranslation = safeStorage.getItem('session_showTranslation') === 'true';
      if (showTranslation) {
        document.body.classList.add('show-translation');
      } else {
        document.body.classList.remove('show-translation');
      }
      
      if (!currentMode || currentMode === '' || currentMode === 'home') {
        loadWeekData(currentWeek, true);
        setTimeout(() => renderWelcomeDashboard(), 300);
      } else {
        if (window.IS_REVIEW_MODE && window.CURRENT_REVIEW_DATE) {
          loadReviewData(window.CURRENT_REVIEW_DATE, true);
        } else {
          loadWeekData(currentWeek, true);
        }
      }
    } else {
      loadWeekData(1);
    }
  }
  
  // Restore theme setting and status bar color
  const savedTheme = safeStorage.getItem('session_theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
  updateThemeColorMeta();

  // Restore font scale setting
  const savedFontScale = safeStorage.getItem('session_globalFontScale');
  if (savedFontScale) {
    globalFontScale = parseInt(savedFontScale);
  } else {
    globalFontScale = 100;
  }
  document.body.style.zoom = `${globalFontScale}%`;

  // Tick study timer every second if running
  setInterval(() => {
    // Increment daily learning seconds if active and focused in a study/learning mode
    if (document.hasFocus() && currentMode && currentMode !== '' && currentMode !== 'home' && currentMode !== 'parents') {
      const today = new Date().toISOString().split('T')[0];
      const key = `study_time_seconds_${today}`;
      let secs = parseInt(safeStorage.getItem(key) || '0');
      secs++;
      safeStorage.setItem(key, secs.toString());
    }

    if (timerRunning) {
      if (timerSeconds > 0) {
        timerSeconds--;
        updateTimerUI();
      } else {
        handleTimerComplete();
      }
    }
  }, 1000);
  
  resizeCanvas();
  window.addEventListener('resize', () => {
    resizeCanvas();
    if (currentMode === 'worksheet') {
      resizeWorksheet();
    }
  });
  
  // Sync header shortcut buttons on startup
  updateHeaderActionButtons();
});

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// THEME & META HELPER
function updateThemeColorMeta() {
  const isLight = document.body.classList.contains('light-mode');
  const meta = document.getElementById('theme-meta');
  if (meta) {
    meta.setAttribute('content', isLight ? '#f8fafc' : '#0f172a');
  }
}

// STUDY TIMER / POMODORO FOCUS MODE HELPERS
function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function updateTimerUI() {
  const el = document.getElementById('timer-display');
  if (el) {
    el.innerText = formatTime(timerSeconds);
  }
}

function handleTimerComplete() {
  timerRunning = false;
  playTimerAlarm();
  
  if (timerMode === 'study') {
    timerMode = 'break';
    timerSeconds = 300; // 5 minute break
    alert("⏱️ Study session complete! Time for a 5-minute break. ☕");
  } else {
    timerMode = 'study';
    timerSeconds = 1200; // 20 minute study
    alert("⏱️ Break complete! Ready to start studying again? 📚");
  }
  
  updateTimerUI();
  const toggleBtn = document.getElementById('timer-toggle-btn');
  if (toggleBtn) {
    toggleBtn.innerHTML = `⏱️ <span id="timer-display">${formatTime(timerSeconds)}</span>`;
    toggleBtn.style.color = '';
  }
}

function toggleStudyTimer() {
  timerRunning = !timerRunning;
  const btn = document.getElementById('timer-toggle-btn');
  if (btn) {
    if (timerRunning) {
      btn.style.color = 'var(--correct)';
    } else {
      btn.style.color = '';
    }
  }
}

function resetStudyTimer() {
  timerRunning = false;
  timerSeconds = timerMode === 'study' ? 1200 : 300;
  updateTimerUI();
  const btn = document.getElementById('timer-toggle-btn');
  if (btn) {
    btn.style.color = '';
  }
}

// ==========================================================================
// ACADEMIC CALENDAR UTILITIES
// ==========================================================================

function isWeekUnlocked(weekNum) {
  const learnerGrade = getLearnerGrade();
  const localContent = safeStorage.getItem(`local_${learnerGrade}_week_data_${weekNum}`);
  const hasLocalData = localContent !== null && localContent !== "" && localContent !== "undefined" && localContent !== "null";
  return weekNum === 1 || weekNum === 2 || weekNum === 3 || weekNum === 4 || hasLocalData;
}

function getAcademicWeekFromDate(date) {
  const parts = SCHOOL_YEAR_START_DATE.split('-');
  const start = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  const diffMs = target - start;
  if (diffMs < 0) return 1;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const week = Math.floor(diffDays / 7) + 1;
  return Math.min(Math.max(week, 1), 40);
}

function getTodayAcademicWeek() {
  return getAcademicWeekFromDate(new Date());
}

function checkDateWeekAlignment() {
  const banner = document.getElementById('week-alignment-banner');
  if (!banner) return;

  // Only check once per day
  const todayStr = new Date().toLocaleDateString('en-CA');
  const lastChecked = safeStorage.getItem('alignment_last_checked');
  if (lastChecked === todayStr) return;

  const academicWeek = getTodayAcademicWeek();
  if (academicWeek === currentWeek) {
    safeStorage.setItem('alignment_last_checked', todayStr);
    return;
  }
  if (!isWeekUnlocked(academicWeek)) return;

  // Show non-blocking banner
  banner.innerHTML = `
    <span>📅 Today is <strong>Week ${academicWeek}</strong> but you're on Week ${currentWeek}.</span>
    <div class="alignment-banner-btns">
      <button class="alignment-btn-switch" onclick="switchToAcademicWeek(${academicWeek})">Switch to Week ${academicWeek}</button>
      <button class="alignment-btn-stay" onclick="dismissAlignmentBanner()">Stay on Week ${currentWeek}</button>
    </div>
  `;
  banner.style.display = 'flex';
  safeStorage.setItem('alignment_last_checked', todayStr);
}

function switchToAcademicWeek(week) {
  dismissAlignmentBanner();
  const select = document.getElementById('week-select');
  if (select) select.value = week;
  changeWeek(week);
  renderWelcomeDashboard();
}

function dismissAlignmentBanner() {
  const banner = document.getElementById('week-alignment-banner');
  if (banner) banner.style.display = 'none';
}

// ==========================================================================
// UNIFIED TASK COMPLETION CHECKER
// ==========================================================================

function isTaskComplete(week, subject, mode) {
  const grade = getLearnerGrade();
  const level = currentLevel;

  if (mode === 'quiz') {
    const score = safeStorage.getItem(`highscore_${grade}_w${week}_sses_${subject}_${level}_quiz`);
    return score !== null;
  }
  if (mode === 'challenge') {
    const score = safeStorage.getItem(`highscore_${grade}_w${week}_sses_${subject}_${level}_challenge`);
    return score !== null;
  }
  if (mode === 'performance') {
    return safeStorage.getItem(`performance_complete_${grade}_w${week}_${subject}_${level}`) === 'true';
  }
  if (mode === 'reading') {
    // At least one day completed counts as started; all 5 = complete
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    const completed = days.filter(d =>
      safeStorage.getItem(`reading_${grade}_w${week}_${d}`) === 'completed'
    ).length;
    return completed >= 5;
  }
  if (mode === 'study') {
    return safeStorage.getItem(`study_complete_${grade}_w${week}_${subject}_${level}`) === 'true';
  }
  if (mode === 'worksheet') {
    return safeStorage.getItem(`worksheet_complete_${grade}_w${week}_${subject}_${level}`) === 'true';
  }
  return false;
}

function isTaskStarted(week, subject, mode) {
  const grade = getLearnerGrade();
  const level = currentLevel;

  if (mode === 'quiz') {
    return safeStorage.getItem(`quiz_inprogress_${grade}_w${week}_${subject}_${level}`) !== null;
  }
  if (mode === 'reading') {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    return days.some(d =>
      safeStorage.getItem(`reading_${grade}_w${week}_${d}`) === 'completed'
    );
  }
  return false;
}

function getTaskStatus(week, subject, mode) {
  if (isTaskComplete(week, subject, mode)) return 'done';
  if (isTaskStarted(week, subject, mode)) return 'inprogress';
  return 'notstarted';
}

// ==========================================================================
// WEEKLY SCHEDULE CONFIGURATION
// ==========================================================================

const DEFAULT_SCHEDULE_BY_GRADE = {
  g1: {
    monday:    ['math', 'science', 'english'],
    tuesday:   ['filipino', 'makabansa', 'gmrc'],
    wednesday: ['math', 'science', 'english'],
    thursday:  ['filipino', 'makabansa', 'gmrc'],
    friday:    ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc']
  },
  g2: {
    monday:    ['math', 'science', 'english'],
    tuesday:   ['filipino', 'makabansa', 'gmrc'],
    wednesday: ['math', 'science', 'english'],
    thursday:  ['filipino', 'makabansa', 'gmrc'],
    friday:    ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc']
  },
  g3: {
    monday:    ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc'],
    tuesday:   ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc'],
    wednesday: ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc'],
    thursday:  ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc'],
    friday:    ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc']
  }
};

function getScheduleConfig() {
  const saved = safeStorage.getItem('schedule_config');
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  const grade = getLearnerGrade();
  return DEFAULT_SCHEDULE_BY_GRADE[grade] || DEFAULT_SCHEDULE_BY_GRADE['g3'];
}

function saveScheduleConfig(config) {
  safeStorage.setItem('schedule_config', JSON.stringify(config));
}

function getTodaySubjects() {
  const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  const todayName = days[new Date().getDay()];
  const schedule = getScheduleConfig();
  return schedule[todayName] || [];
}

// ==========================================================================
// BADGE & ACHIEVEMENT SYSTEM
// ==========================================================================

const BADGE_DEFINITIONS = [
  // Streak badges
  { id: 'streak_3',      icon: '🔥', name: '3-Day Streak',         desc: 'Complete tasks 3 days in a row',           check: () => getActiveStreak() >= 3 },
  { id: 'streak_7',      icon: '🔥', name: 'Week Warrior',          desc: 'Complete tasks 7 days in a row',           check: () => getActiveStreak() >= 7 },
  { id: 'streak_14',     icon: '🌟', name: 'Fortnight Champion',    desc: 'Complete tasks 14 days in a row',          check: () => getActiveStreak() >= 14 },
  { id: 'streak_30',     icon: '👑', name: 'Monthly Master',        desc: 'Complete tasks 30 days in a row',          check: () => getActiveStreak() >= 30 },

  // Quiz badges
  { id: 'perfect_quiz',  icon: '⭐', name: 'Perfect Score',         desc: 'Get 25/25 on any quiz',                   check: () => _anyScoreEquals('quiz', 25, 25) },
  { id: 'quiz_5',        icon: '✍️', name: 'Quiz Taker',            desc: 'Complete 5 quizzes',                      check: () => _countScores('quiz') >= 5 },
  { id: 'quiz_20',       icon: '🎓', name: 'Quiz Scholar',          desc: 'Complete 20 quizzes',                     check: () => _countScores('quiz') >= 20 },
  { id: 'all_pass_week', icon: '🏅', name: 'All-Pass Week',         desc: 'Pass all 6 subject quizzes in one week',  check: () => _allSubjectsPassedInAnyWeek() },

  // Reading badges
  { id: 'read_5',        icon: '📚', name: 'Bookworm',              desc: 'Complete 5 reading days',                 check: () => _countReadingDays() >= 5 },
  { id: 'read_20',       icon: '📖', name: 'Story Keeper',          desc: 'Complete 20 reading days',                check: () => _countReadingDays() >= 20 },
  { id: 'read_week',     icon: '🗓️', name: 'Full Week Reader',      desc: 'Complete all 5 days of reading in a week',check: () => _fullWeekReading() },

  // Challenge badges
  { id: 'challenge_ace', icon: '🔥', name: 'Challenge Ace',         desc: 'Get 5/5 on any challenge',               check: () => _anyScoreEquals('challenge', 5, 5) },
  { id: 'challenge_10',  icon: '💪', name: 'Challenge Seeker',      desc: 'Complete 10 challenges',                  check: () => _countScores('challenge') >= 10 },

  // Performance badges
  { id: 'perf_1',        icon: '📋', name: 'Performer',             desc: 'Submit your first performance task',      check: () => _countPerformance() >= 1 },
  { id: 'perf_5',        icon: '🎭', name: 'Star Performer',        desc: 'Submit 5 performance tasks',              check: () => _countPerformance() >= 5 },

  // Milestone badges
  { id: 'week_10',       icon: '🏆', name: 'Ten Weeks Strong',      desc: 'Reach Week 10 of the school year',        check: () => currentWeek >= 10 },
  { id: 'week_20',       icon: '🥇', name: 'Halfway There',         desc: 'Reach Week 20 of the school year',        check: () => currentWeek >= 20 },
  { id: 'week_40',       icon: '🎉', name: 'School Year Complete',  desc: 'Reach Week 40 of the school year',        check: () => currentWeek >= 40 },

  // Subject-specific badges
  { id: 'math_streak3',  icon: '🔢', name: 'Math Whiz',             desc: 'Pass Math quiz 3 weeks in a row',         check: () => _subjectStreakPassed('math', 3) },
  { id: 'sci_streak3',   icon: '🔬', name: 'Science Star',          desc: 'Pass Science quiz 3 weeks in a row',      check: () => _subjectStreakPassed('science', 3) },
  { id: 'eng_streak3',   icon: '🙋', name: 'English Expert',        desc: 'Pass English quiz 3 weeks in a row',      check: () => _subjectStreakPassed('english', 3) },
  { id: 'fil_streak3',   icon: '🇵🇭', name: 'Filipino Bida',        desc: 'Pass Filipino quiz 3 weeks in a row',     check: () => _subjectStreakPassed('filipino', 3) },
];

// Badge helper functions (prefixed _ to indicate internal use)
function _anyScoreEquals(mode, score, max) {
  const grade = getLearnerGrade();
  const level = currentLevel;
  const subjects = ['math','science','english','filipino','makabansa','gmrc'];
  for (let w = 1; w <= 40; w++) {
    for (let s of subjects) {
      const val = parseInt(safeStorage.getItem(`highscore_${grade}_w${w}_sses_${s}_${level}_${mode}`) || '-1');
      if (val === score) return true;
    }
  }
  return false;
}

function _countScores(mode) {
  const grade = getLearnerGrade();
  const level = currentLevel;
  const subjects = ['math','science','english','filipino','makabansa','gmrc'];
  let count = 0;
  for (let w = 1; w <= 40; w++) {
    for (let s of subjects) {
      if (safeStorage.getItem(`highscore_${grade}_w${w}_sses_${s}_${level}_${mode}`) !== null) count++;
    }
  }
  return count;
}

function _countReadingDays() {
  const grade = getLearnerGrade();
  const days = ['monday','tuesday','wednesday','thursday','friday'];
  let count = 0;
  for (let w = 1; w <= 40; w++) {
    days.forEach(d => {
      if (safeStorage.getItem(`reading_${grade}_w${w}_${d}`) === 'completed') count++;
    });
  }
  return count;
}

function _fullWeekReading() {
  const grade = getLearnerGrade();
  const days = ['monday','tuesday','wednesday','thursday','friday'];
  for (let w = 1; w <= 40; w++) {
    if (days.every(d => safeStorage.getItem(`reading_${grade}_w${w}_${d}`) === 'completed')) return true;
  }
  return false;
}

function _countPerformance() {
  const grade = getLearnerGrade();
  const level = currentLevel;
  const subjects = ['math','science','english','filipino','makabansa','gmrc'];
  let count = 0;
  for (let w = 1; w <= 40; w++) {
    for (let s of subjects) {
      if (safeStorage.getItem(`performance_complete_${grade}_w${w}_${s}_${level}`) === 'true') count++;
    }
  }
  return count;
}

function _allSubjectsPassedInAnyWeek() {
  const grade = getLearnerGrade();
  const level = currentLevel;
  const subjects = ['math','science','english','filipino','makabansa','gmrc'];
  for (let w = 1; w <= 40; w++) {
    if (subjects.every(s => {
      const score = parseInt(safeStorage.getItem(`highscore_${grade}_w${w}_sses_${s}_${level}_quiz`) || '-1');
      return score >= QUIZ_PASSING_SCORE;
    })) return true;
  }
  return false;
}

function _subjectStreakPassed(subject, streakCount) {
  const grade = getLearnerGrade();
  const level = currentLevel;
  let streak = 0;
  for (let w = 1; w <= 40; w++) {
    const score = parseInt(safeStorage.getItem(`highscore_${grade}_w${w}_sses_${subject}_${level}_quiz`) || '-1');
    if (score >= QUIZ_PASSING_SCORE) {
      streak++;
      if (streak >= streakCount) return true;
    } else {
      streak = 0;
    }
  }
  return false;
}

function getEarnedBadges() {
  return BADGE_DEFINITIONS.filter(b => {
    try { return b.check(); } catch(e) { return false; }
  });
}

function checkAndSaveNewBadges() {
  const earned = getEarnedBadges().map(b => b.id);
  const prev = JSON.parse(safeStorage.getItem('earned_badges') || '[]');
  const newOnes = earned.filter(id => !prev.includes(id));
  if (newOnes.length > 0) {
    safeStorage.setItem('earned_badges', JSON.stringify(earned));
  }
  return newOnes;
}

// ==========================================================================
// MID-SESSION QUIZ PROGRESS TRACKER
// ==========================================================================

function saveQuizProgress() {
  const grade = getLearnerGrade();
  const level = currentLevel;
  const key = `quiz_inprogress_${grade}_w${currentWeek}_${currentSubject}_${level}`;
  if (currentQuestionIndex > 0) {
    safeStorage.setItem(key, JSON.stringify({
      questionIndex: currentQuestionIndex,
      score: quizScore,
      wrongAnswers: wrongAnswersLog,
      mode: currentMode,
      timestamp: Date.now()
    }));
  }
}

function clearQuizProgress() {
  const grade = getLearnerGrade();
  const level = currentLevel;
  const key = `quiz_inprogress_${grade}_w${currentWeek}_${currentSubject}_${level}`;
  safeStorage.removeItem(key);
}

function getQuizProgress(week, subject) {
  const grade = getLearnerGrade();
  const level = currentLevel;
  const key = `quiz_inprogress_${grade}_w${week}_${subject}_${level}`;
  const saved = safeStorage.getItem(key);
  if (!saved) return null;
  try {
    const data = JSON.parse(saved);
    // Expire after 24 hours
    if (Date.now() - data.timestamp > 86400000) {
      safeStorage.removeItem(key);
      return null;
    }
    return data;
  } catch(e) { return null; }
}

function playTimerAlarm() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const playTone = (freq, startTime, duration) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);
      
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.2, startTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + duration);
    };
    
    // Play a pleasant chime arpeggio
    playTone(523.25, audioCtx.currentTime, 0.4);        // C5
    playTone(659.25, audioCtx.currentTime + 0.2, 0.4);   // E5
    playTone(783.99, audioCtx.currentTime + 0.4, 0.6);   // G5
  } catch (e) {
    console.warn("Failed to play synthesized alarm: ", e);
  }
}

// MOTIVATIONAL STUDY STREAK TRACKER HELPERS
function isYesterday(dateStr) {
  if (!dateStr) return false;
  const lastDate = new Date(dateStr + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffTime = today - lastDate;
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  return diffDays === 1;
}

function getActiveStreak() {
  const lastDateStr = safeStorage.getItem('streak_last_date');
  const count = parseInt(safeStorage.getItem('streak_count') || '0');
  if (!lastDateStr) return 0;
  
  const todayStr = new Date().toLocaleDateString('en-CA');
  if (lastDateStr === todayStr) {
    return count;
  }
  
  if (isYesterday(lastDateStr)) {
    return count;
  }
  
  return 0; // Streak broken
}

function recordCompletion() {
  const todayStr = new Date().toLocaleDateString('en-CA');
  const lastDateStr = safeStorage.getItem('streak_last_date');
  let count = parseInt(safeStorage.getItem('streak_count') || '0');
  
  if (lastDateStr === todayStr) {
    // Already logged completion today, keep streak as is
    return;
  }
  
  if (isYesterday(lastDateStr) || !lastDateStr) {
    count = count + 1;
  } else {
    // Streak broken, start anew
    count = 1;
  }
  
  safeStorage.setItem('streak_count', count.toString());
  safeStorage.setItem('streak_last_date', todayStr);
  
  saveSessionState();
}

// Helper to get active level data (handles normal weeks and reviews)
function getActiveLevelData() {
  const isReview = window.IS_REVIEW_MODE;
  if (!window.CURRENT_WEEK_DATA) return null;
  if (currentLevel === 'core') {
    return window.CURRENT_WEEK_DATA;
  } else {
    if (isReview) {
      return window[`REVIEW_${window.CURRENT_REVIEW_DATE}_ADVANCED_DATA`];
    } else {
      return window[`WEEK${currentWeek}_ADVANCED_DATA`];
    }
  }
}

// Helper to format review date strings (e.g. june15 -> June 15)
function formatReviewDate(dateStr) {
  if (!dateStr) return "";
  const match = dateStr.match(/^([a-zA-Z]+)(\d+)$/);
  if (match) {
    const month = match[1];
    const day = match[2];
    const capMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
    return `${capMonth} ${day}`;
  }
  return dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
}

// Helper to get formatted date range for a given academic week
function getWeekDateRange(weekNum) {
  const startDate = new Date(2026, 5, 22); // June 22, 2026 (June is month 5, 0-indexed)
  startDate.setDate(startDate.getDate() + (weekNum - 1) * 7);
  
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 4); // Friday of that week
  
  const months = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];
  const standardMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const startMonth = standardMonths[startDate.getMonth()];
  const startDay = startDate.getDate();
  const endMonth = standardMonths[endDate.getMonth()];
  const endDay = endDate.getDate();
  const startYear = startDate.getFullYear();
  
  if (startMonth === endMonth) {
    return `${startMonth} ${startDay}-${endDay}, ${startYear}`;
  } else {
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`;
  }
}

// Generate the 40 weeks dropdown
function buildWeekSelector() {
  const select = document.getElementById('week-select');
  if (!select) return;
  select.innerHTML = '';
  
  const learnerGrade = getLearnerGrade();
  
  for (let i = 1; i <= 40; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    const dateRange = getWeekDateRange(i);
    // Highlight Weeks 1, 2, and 3 (bundled inside APK assets) or any successfully uploaded local week as unlocked
    if (isWeekUnlocked(i)) {
      opt.innerText = `Week ${i} ${dateRange}`;
      select.appendChild(opt);
    }
  }

  // Scan safeStorage for custom review dates
  const reviewDates = [];
  const reviewPrefix = `local_${learnerGrade}_review_data_`;
  for (let k = 0; k < safeStorage.length; k++) {
    const key = safeStorage.key(k);
    if (key && key.startsWith(reviewPrefix)) {
      const date = key.substring(reviewPrefix.length);
      if (date && !reviewDates.includes(date)) {
        reviewDates.push(date);
      }
    }
  }

  if (reviewDates.length > 0) {
    reviewDates.sort(); // Sort reviews alphabetically/chronologically
    const group = document.createElement('optgroup');
    group.label = "📝 Exam & Coverage Reviews";
    
    reviewDates.forEach(date => {
      const opt = document.createElement('option');
      opt.value = `review_${date}`;
      opt.innerText = `Review: ${formatReviewDate(date)}`;
      group.appendChild(opt);
    });
    
    select.appendChild(group);
  }
}

// Load script file dynamically to bypass local file CORS blocks
// Load weekly database asynchronously using fetch
function loadWeekData(weekIdentifier, isRestore) {
  wsShowAnswers = false;
  const isReview = typeof weekIdentifier === 'string' && weekIdentifier.startsWith('review_');
  
  if (isReview) {
    const reviewDate = weekIdentifier.substring('review_'.length);
    loadReviewData(reviewDate, isRestore);
    return;
  }

  const weekNumber = parseInt(weekIdentifier);
  currentWeek = weekNumber;
  window.IS_REVIEW_MODE = false;
  window.CURRENT_REVIEW_DATE = null;
  updateModeTabsVisibility();
  
  const learnerGrade = getLearnerGrade();

  // Check if we have local uploaded data in safeStorage (remains evaluation for local uploads)
  const localContent = safeStorage.getItem(`local_${learnerGrade}_week_data_${weekNumber}`);
  if (localContent) {
    try {
      if (localContent.trim().startsWith('{')) {
        const parsed = JSON.parse(localContent);
        window[`WEEK${weekNumber}_DATA`] = parsed.core;
        window[`WEEK${weekNumber}_ADVANCED_DATA`] = parsed.advanced;
      } else {
        (0, eval)(localContent);
      }
      
      const data = window[`WEEK${weekNumber}_DATA`];
      const advData = window[`WEEK${weekNumber}_ADVANCED_DATA`];
      if (data) {
        window.CURRENT_WEEK_DATA = currentLevel === 'core' ? data : advData;
        updateMonthlyChecklistVisibility();

        const activeData = getActiveLevelData();
        if (activeData && !activeData[currentSubject]) {
          const available = Object.keys(activeData).filter(k => k !== 'checklist');
          if (available.length > 0) {
            const fallback = ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc'].find(s => activeData[s]) || available[0];
            currentSubject = fallback;
          }
        }

        setSubject(currentSubject, isRestore);
        updateScoresDisplay();
        return;
      }
    } catch (e) {
      console.error("Failed to load local cached week data:", e);
    }
  }
  
  fetch(`data/${learnerGrade}/week${weekNumber}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load week ${weekNumber} database`);
      }
      return response.json();
    })
    .then(data => {
      // Expose globally to maintain backward compatibility with level selectors
      window[`WEEK${weekNumber}_DATA`] = data.core;
      window[`WEEK${weekNumber}_ADVANCED_DATA`] = data.advanced;
      
      window.CURRENT_WEEK_DATA = currentLevel === 'core' ? data.core : data.advanced;
      updateMonthlyChecklistVisibility();

      const activeData = getActiveLevelData();
      if (activeData && !activeData[currentSubject]) {
        const available = Object.keys(activeData).filter(k => k !== 'checklist');
        if (available.length > 0) {
          const fallback = ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc'].find(s => activeData[s]) || available[0];
          currentSubject = fallback;
        }
      }

      setSubject(currentSubject, isRestore);
      updateScoresDisplay();
    })
    .catch(err => {
      console.error("Error loading week data:", err);
      alert(`Week ${weekNumber} data is not generated yet for ${learnerGrade.toUpperCase()}! (Locked 🔒)`);
      const select = document.getElementById('week-select');
      if (select) {
        select.value = currentWeek === weekNumber ? 1 : currentWeek;
      }
    });
}

// Load review database asynchronously using fetch
function loadReviewData(date, isRestore) {
  window.IS_REVIEW_MODE = true;
  window.CURRENT_REVIEW_DATE = date;
  updateModeTabsVisibility();

  const learnerGrade = getLearnerGrade();

  // Check if we have local uploaded data in safeStorage
  const localContent = safeStorage.getItem(`local_${learnerGrade}_review_data_${date}`);
  if (localContent) {
    try {
      if (localContent.trim().startsWith('{')) {
        const parsed = JSON.parse(localContent);
        window[`REVIEW_${date}_DATA`] = parsed.core;
        window[`REVIEW_${date}_ADVANCED_DATA`] = parsed.advanced;
      } else {
        (0, eval)(localContent);
      }
      
      const data = window[`REVIEW_${date}_DATA`];
      const advData = window[`REVIEW_${date}_ADVANCED_DATA`];
      if (data) {
        window.CURRENT_WEEK_DATA = currentLevel === 'core' ? data : advData;
        updateMonthlyChecklistVisibility();

        const activeData = getActiveLevelData();
        if (activeData && !activeData[currentSubject]) {
          const available = Object.keys(activeData).filter(k => k !== 'checklist');
          if (available.length > 0) {
            const fallback = ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc'].find(s => activeData[s]) || available[0];
            currentSubject = fallback;
          }
        }

        setSubject(currentSubject, isRestore);
        updateScoresDisplay();
        return;
      }
    } catch (e) {
      console.error("Failed to load local cached review data:", e);
    }
  }

  fetch(`data/${learnerGrade}/review_${date}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load review ${date} database`);
      }
      return response.json();
    })
    .then(data => {
      // Expose globally to maintain backward compatibility
      window[`REVIEW_${date}_DATA`] = data.core;
      window[`REVIEW_${date}_ADVANCED_DATA`] = data.advanced;
      
      window.CURRENT_WEEK_DATA = currentLevel === 'core' ? data.core : data.advanced;
      updateMonthlyChecklistVisibility();

      const activeData = getActiveLevelData();
      if (activeData && !activeData[currentSubject]) {
        const available = Object.keys(activeData).filter(k => k !== 'checklist');
        if (available.length > 0) {
          const fallback = ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc'].find(s => activeData[s]) || available[0];
          currentSubject = fallback;
        }
      }

      setSubject(currentSubject, isRestore);
      updateScoresDisplay();
    })
    .catch(err => {
      console.error("Error loading review data:", err);
      alert(`Review data for ${formatReviewDate(date)} is not generated yet for ${learnerGrade.toUpperCase()}! 🔒`);
      const select = document.getElementById('week-select');
      if (select) select.value = currentWeek;
      window.IS_REVIEW_MODE = false;
      window.CURRENT_REVIEW_DATE = null;
      updateModeTabsVisibility();
      loadWeekData(currentWeek);
    });
}


function changeWeek(val) {
  loadWeekData(val);
}

// Handler for uploading one or multiple weekX.js or image files manually
function handleWeeklyUpload(files) {
  if (!files || files.length === 0) return;
  
  const learnerGrade = getLearnerGrade();
  let loadedWeeks = [];
  let loadedImages = [];
  let successWeeksCount = 0;
  let successImagesCount = 0;
  let totalFiles = files.length;
  let processedFiles = 0;
  
  for (let i = 0; i < totalFiles; i++) {
    const file = files[i];
    const reader = new FileReader();
    
    const isJS = file.name.endsWith('.js');
    const isImage = /\.(png|jpe?g|gif|webp)$/i.test(file.name);
    
    reader.onload = (e) => {
      const content = e.target.result;
      if (isJS) {
        try {
          (0, eval)(content);
          
          let detectedWeek = null;
          for (let w = 1; w <= 40; w++) {
            if (window[`WEEK${w}_DATA`]) {
              detectedWeek = w;
              break;
            }
          }
          
          if (detectedWeek) {
            safeStorage.setItem(`local_${learnerGrade}_week_data_${detectedWeek}`, content);
            loadedWeeks.push(detectedWeek);
            successWeeksCount++;
            
            if (detectedWeek === currentWeek) {
              loadWeekData(currentWeek);
            }
          } else {
            throw new Error("No valid WEEKx_DATA variable detected in the file.");
          }
        } catch (err) {
          console.error(err);
          alert(`Error loading "${file.name}": ${err.message}`);
        }
      } else if (isImage) {
        try {
          safeStorage.setItem(`local_image_${file.name}`, content);
          loadedImages.push(file.name);
          successImagesCount++;
        } catch (err) {
          console.error(err);
          alert(`Error saving image "${file.name}": ${err.message}`);
        }
      }
      
      processedFiles++;
      if (processedFiles === totalFiles) {
        buildWeekSelector();
        let msg = "Upload results:\n";
        if (successWeeksCount > 0) {
          msg += `• Loaded ${successWeeksCount} weeks to ${learnerGrade.toUpperCase()}: Week ${loadedWeeks.sort((a,b)=>a-b).join(', ')}\n`;
        }
        if (successImagesCount > 0) {
          msg += `• Loaded ${successImagesCount} images: ${loadedImages.join(', ')}\n`;
        }
        if (successWeeksCount > 0 || successImagesCount > 0) {
          alert(msg);
        }
      }
    };
    
    if (isJS) {
      reader.readAsText(file);
    } else if (isImage) {
      reader.readAsDataURL(file);
    } else {
      processedFiles++;
      alert(`Ignored unsupported file format: "${file.name}"`);
    }
  }
}

// Helper to retrieve correct image source (checks safeStorage cache first)
function getImageSrc(imagePath) {
  if (!imagePath) return '';
  const parts = imagePath.split('/');
  const filename = parts[parts.length - 1];
  
  const cachedDataURL = safeStorage.getItem(`local_image_${filename}`);
  if (cachedDataURL) {
    return cachedDataURL;
  }
  
  // If it's a mascot UI image or the app icon, load it locally from assets.
  // Otherwise, fall back to fetching it from GitHub raw contents to reduce APK size.
  if (filename.startsWith('mascot_') || filename === 'icon.png') {
    return imagePath;
  }
  return `${REMOTE_UPDATE_URL}/images/${filename}`;
}


// Function to check online updates from the GitHub repository (Option B)
function checkWeeklyUpdates() {
  const btn = document.getElementById('update-topics-btn');
  const headerBtn = document.getElementById('header-update-btn');
  if (btn) {
    btn.disabled = true;
    btn.innerText = "⏳ Checking Updates...";
  }
  if (headerBtn) {
    headerBtn.disabled = true;
    headerBtn.innerText = "⏳ Updating...";
  }

  const learnerGrade = getLearnerGrade();
  const manifestUrl = `${REMOTE_UPDATE_URL}/data/${learnerGrade}/manifest.json`;

  fetch(manifestUrl, { cache: 'no-store' })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch manifest for ${learnerGrade.toUpperCase()} (HTTP ${response.status})`);
      }
      return response.json();
    })
    .then(manifest => {
      const localVersion = safeStorage.getItem(`local_${learnerGrade}_manifest_version`);
      const remoteVersion = manifest.version || '';
      
      if (localVersion && localVersion === remoteVersion) {
        alert("There is no available update.");
        resetButton();
        return;
      }

      const weeksToDownload = manifest.weeks || [];
      const imagesToDownload = manifest.images || [];
      const reviewsToDownload = manifest.reviews || [];

      if (weeksToDownload.length === 0 && imagesToDownload.length === 0 && reviewsToDownload.length === 0) {
        alert("There is no available update.");
        resetButton();
        return;
      }

      let tasks = [];
      let loadedWeeks = [];
      let loadedImages = [];
      let loadedReviews = [];

      // A. Download week JSON files
      weeksToDownload.forEach(w => {
        const url = `${REMOTE_UPDATE_URL}/data/${learnerGrade}/week${w}.json`;
        const task = fetch(url, { cache: 'no-store' })
          .then(res => {
            if (!res.ok) throw new Error(`Week ${w} download failed (HTTP ${res.status})`);
            return res.json();
          })
          .then(jsonData => {
            safeStorage.setItem(`local_${learnerGrade}_week_data_${w}`, JSON.stringify(jsonData));
            loadedWeeks.push(w);
          });
        tasks.push(task);
      });

      // B. Download review JSON files
      reviewsToDownload.forEach(r => {
        const url = `${REMOTE_UPDATE_URL}/data/${learnerGrade}/review_${r}.json`;
        const task = fetch(url, { cache: 'no-store' })
          .then(res => {
            if (!res.ok) throw new Error(`Review ${r} download failed (HTTP ${res.status})`);
            return res.json();
          })
          .then(jsonData => {
            safeStorage.setItem(`local_${learnerGrade}_review_data_${r}`, JSON.stringify(jsonData));
            loadedReviews.push(r);
          });
        tasks.push(task);
      });

      // C. Download images and convert to Base64 data URLs
      imagesToDownload.forEach(img => {
        const url = `${REMOTE_UPDATE_URL}/images/${img}`;
        const task = fetch(url, { cache: 'no-store' })
          .then(res => {
            if (!res.ok) throw new Error(`Image ${img} download failed (HTTP ${res.status})`);
            return res.blob();
          })
          .then(blob => {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result);
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            });
          })
          .then(base64Data => {
            safeStorage.setItem(`local_image_${img}`, base64Data);
            loadedImages.push(img);
          });
        tasks.push(task);
      });

      return Promise.all(tasks).then(() => {
        if (remoteVersion) {
          safeStorage.setItem(`local_${learnerGrade}_manifest_version`, remoteVersion);
        }
        buildWeekSelector();
        
        if (loadedWeeks.includes(currentWeek)) {
          loadWeekData(currentWeek);
        }

        const gradeNames = { 'g1': 'Grade 1', 'g2': 'Grade 2', 'g3': 'Grade 3' };
        const gradeFriendly = gradeNames[learnerGrade] || learnerGrade.toUpperCase();
        let successMsg = `Update successful for ${gradeFriendly}!\n`;
        if (loadedWeeks.length > 0) {
          successMsg += `\n• Downloaded Weeks: ${loadedWeeks.sort((a,b)=>a-b).join(', ')}`;
        }
        if (loadedReviews.length > 0) {
          successMsg += `\n• Downloaded Reviews: ${loadedReviews.map(formatReviewDate).join(', ')}`;
        }
        if (loadedImages.length > 0) {
          successMsg += `\n• Downloaded Images: ${loadedImages.join(', ')}`;
        }
        alert(successMsg);
        resetButton();
      });
    })
    .catch(err => {
      console.error(err);
      alert(`Update failed: ${err.message}\n\nPlease check your internet connection or GitHub repository setup.`);
      resetButton();
    });

  function resetButton() {
    if (btn) {
      btn.disabled = false;
      btn.innerText = "📥 Update Weekly Topics";
    }
    if (headerBtn) {
      headerBtn.disabled = false;
      headerBtn.innerText = "📥 Update";
    }
  }
}

// Show/hide monthly DepEd Competency checklist button
function updateMonthlyChecklistVisibility() {
  const tabsContainer = document.querySelector('.mode-tabs');
  let checklistBtn = document.getElementById('tab-checklist');
  
  const isReview = window.IS_REVIEW_MODE;
  // Every 4 weeks (end of month 1, 2, etc.) and NOT in review mode
  if (currentWeek % 4 === 0 && !isReview) {
    if (!checklistBtn) {
      checklistBtn = document.createElement('button');
      checklistBtn.className = 'mode-tab-btn';
      checklistBtn.id = 'tab-checklist';
      checklistBtn.innerText = '📋 Competencies';
      checklistBtn.onclick = () => setMode('checklist');
      tabsContainer.appendChild(checklistBtn);
    }
  } else {
    if (checklistBtn) {
      checklistBtn.remove();
    }
    if (currentMode === 'checklist') {
      setMode('study');
    }
  }
}

// Show/hide learning mode tabs based on review mode status (e.g. hide Daily Reading in Review mode)
function updateModeTabsVisibility() {
  const isReview = window.IS_REVIEW_MODE;
  const readingTab = document.getElementById('tab-reading');
  if (readingTab) {
    if (isReview) {
      readingTab.style.display = 'none';
      if (currentMode === 'reading') {
        setMode('study');
      }
    } else {
      readingTab.style.display = 'block';
    }
  }
}
function setMode(mode) {
  if (mode !== 'worksheet') {
    wsShowAnswers = false;
  }

  if (mode !== 'parents') {
    isParentUnlocked = false;
  }

  if (currentMode === 'reading' && mode !== 'reading') {
    document.body.classList.remove('focus-active');
  }

  const wasHome = (currentMode === 'home' || !currentMode);

  currentMode = mode;
  saveSessionState();
  closeSidebar();

  // Clear all sidebar button highlights first
  clearAllActiveNavButtons();

  // Highlight active mode tab
  const activeTab = document.getElementById(`tab-${mode}`);
  if (activeTab) activeTab.classList.add('active');

  // Highlight current subject button unless in Home/Parents/Reading/Competencies/Games
  if (mode !== 'home' && mode !== 'parents' && mode !== 'reading' && mode !== 'competencies' && mode !== 'games') {
    const activeSubBtn = document.getElementById(`btn-${currentSubject}`);
    if (activeSubBtn) activeSubBtn.classList.add('active');
  }

  const footer = document.getElementById('viewport-footer');
  if (footer) {
    footer.style.display = (mode === 'study') ? 'flex' : 'none';
  }

  if (mode === 'home') {
    renderWelcomeDashboard();
    return;
  }

  if (mode === 'parents') {
    renderParentDashboard();
    return;
  }

  if (mode === 'competencies') {
    renderCompetenciesDashboard();
    return;
  }

  if (mode === 'games') {
    renderGamesDashboard();
    return;
  }

  // If we came from home dashboard, we need to highlight the current subject button and update headers
  if (wasHome) {
    safeStorage.setItem('session_has_opened_before', 'true');
    if (mode === 'reading') {
      document.querySelectorAll('.subject-buttons-list .nav-btn').forEach(btn => btn.classList.remove('active'));
    } else {
      setSubject(currentSubject, true);
      return;
    }
  }

  // Reset indices
  currentSlideIndex = 0;
  currentReadingSlide = 0;
  currentQuestionIndex = 0;
  quizScore = 0;
  wrongAnswersLog = [];

  // For all other modes, render current view
  renderCurrentView();
}

function setSubject(subjectKey, isRestore) {
  wsShowAnswers = false;
  
  if (currentMode === 'reading') {
    document.body.classList.remove('focus-active');
    currentMode = 'study';
  }
  
  currentSubject = subjectKey;
  closeSidebar();
  
  // If we were on the dashboard, parents dashboard, competencies, or games, restore 'study' mode
  if (!currentMode || currentMode === 'home' || currentMode === 'parents' || currentMode === 'competencies' || currentMode === 'games') {
    currentMode = 'study';
    if (!isRestore) {
      safeStorage.setItem('session_has_opened_before', 'true');
    }
  }

  clearAllActiveNavButtons();
  
  // Highlight active mode tab
  const activeTab = document.getElementById(`tab-${currentMode}`);
  if (activeTab) activeTab.classList.add('active');
  
  // Show/Hide slide footer control bar
  const footer = document.getElementById('viewport-footer');
  if (footer) {
    footer.style.display = currentMode === 'study' ? 'flex' : 'none';
  }

  // Highlight active subject button
  const activeBtn = document.getElementById(`btn-${subjectKey}`);
  if (activeBtn) activeBtn.classList.add('active');

  const data = getActiveLevelData();
  if (!data || !data[subjectKey]) return;

  const subjectData = data[subjectKey];
  document.documentElement.style.setProperty('--active-subject-color', subjectData.color);

  // Update header text
  document.getElementById('header-icon').innerText = subjectData.icon;
  document.getElementById('header-title').innerText = subjectData.title;
  document.getElementById('header-subtitle').innerText = subjectData.subtitle;

  // Show/hide translation controls and Subject Tools section
  const transSection = document.getElementById('settings-subject-tools-section');
  const transToggle = document.getElementById('settings-trans-row');
  const isTransAvailable = (subjectKey === 'filipino' || subjectKey === 'makabansa');
  if (transSection) {
    transSection.style.display = isTransAvailable ? 'block' : 'none';
  }
  if (transToggle) {
    transToggle.style.display = isTransAvailable ? 'flex' : 'none';
  }
  
  if (!isRestore) {
    document.body.classList.remove('show-translation');
    const toggleEl = document.getElementById('settings-translation-toggle');
    if (toggleEl) toggleEl.checked = false;
    
    // Reset indices
    currentSlideIndex = 0;
    currentQuestionIndex = 0;
    quizScore = 0;
    wrongAnswersLog = [];
  }

  renderCurrentView();
  updateScoresDisplay();
}

function saveSessionState() {
  safeStorage.setItem('session_currentWeek', currentWeek);
  safeStorage.setItem('session_currentLevel', currentLevel);
  safeStorage.setItem('session_currentSubject', currentSubject);
  safeStorage.setItem('session_currentMode', currentMode);
  safeStorage.setItem('session_IS_REVIEW_MODE', window.IS_REVIEW_MODE ? 'true' : 'false');
  safeStorage.setItem('session_CURRENT_REVIEW_DATE', window.CURRENT_REVIEW_DATE || '');
  safeStorage.setItem('session_currentSlideIndex', currentSlideIndex);
  safeStorage.setItem('session_currentQuestionIndex', currentQuestionIndex);
  safeStorage.setItem('session_currentReadingDay', currentReadingDay || '');
  safeStorage.setItem('session_currentReadingSlide', currentReadingSlide);
  safeStorage.setItem('session_currentWorksheetPage', currentWorksheetPage);
  safeStorage.setItem('session_quizScore', quizScore);
  safeStorage.setItem('session_wrongAnswersLog', JSON.stringify(wrongAnswersLog));
  
  const transToggle = document.getElementById('settings-translation-toggle');
  safeStorage.setItem('session_showTranslation', transToggle && transToggle.checked ? 'true' : 'false');
  safeStorage.setItem('session_wsShowAnswers', wsShowAnswers ? 'true' : 'false');
}

function renderCurrentView() {
  const data = getActiveLevelData();
  if (!data) return;
  
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  
  saveSessionState();
  
  const transBtn = document.getElementById('header-trans-btn');
  if (transBtn) {
    if (currentSubject === 'filipino' || currentSubject === 'makabansa' || currentSubject === 'gmrc') {
      transBtn.style.display = 'flex';
      const isShowing = document.body.classList.contains('show-translation');
      transBtn.classList.toggle('active-tool', isShowing);
      if (isShowing) {
        transBtn.style.background = 'var(--accent)';
        transBtn.style.color = 'white';
      } else {
        transBtn.style.background = '';
        transBtn.style.color = '';
      }
    } else {
      transBtn.style.display = 'none';
    }
  }
  
  const progressContainer = document.querySelector('.progress-container');
  if (progressContainer) {
    progressContainer.style.display = (currentMode === 'reading') ? 'none' : 'block';
  }
  
  const qBody = document.getElementById('viewport-body');

  if (currentMode === 'reading') {
    document.getElementById('slide-mode-label').innerText = 'Daily Reading';
    document.getElementById('slide-num-label').style.display = 'none';
    
    document.documentElement.style.setProperty('--active-subject-color', 'var(--accent)');
    document.getElementById('header-icon').innerText = '📚';
    document.getElementById('header-title').innerText = 'Daily Reading';
    document.getElementById('header-subtitle').innerText = '';
    
    document.querySelectorAll('.subject-buttons-list .nav-btn').forEach(btn => btn.classList.remove('active'));

    renderReadingView(data, qBody);
    return;
  }
  
  if (!data || !data[currentSubject]) {
    qBody.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <span style="font-size: 48px; display: block; margin-bottom: 15px;">📚</span>
        No data available for ${currentSubject.toUpperCase()} in the Grade 4-5 level for Week ${currentWeek}.
      </div>
    `;
    return;
  }
  const subjectData = data[currentSubject];
  
  if (currentMode !== 'reading' && currentMode !== 'parents' && currentMode !== 'competencies') {
    document.documentElement.style.setProperty('--active-subject-color', subjectData.color);
    document.getElementById('header-icon').innerText = subjectData.icon;
    document.getElementById('header-title').innerText = subjectData.title;
    document.getElementById('header-subtitle').innerText = subjectData.subtitle;
  }
  
  // Reset progress bar visibility
  document.getElementById('progress-bar').style.width = '0%';
  document.getElementById('slide-num-label').style.display = 'inline';
  
  if (currentMode === 'study') {
    document.getElementById('slide-mode-label').innerText = 'Study Mode';
    renderStudySlide(subjectData, qBody);
  } 
  else if (currentMode === 'quiz') {
    document.getElementById('slide-mode-label').innerText = 'Standard Quiz';
    renderQuizQuestion(subjectData.standard, qBody);
  } 
  else if (currentMode === 'challenge') {
    document.getElementById('slide-mode-label').innerText = 'Challenge Mode';
    renderQuizQuestion(subjectData.challenge, qBody);
  } 
  else if (currentMode === 'checklist') {
    document.getElementById('slide-mode-label').innerText = 'Monthly Competencies Check';
    document.getElementById('slide-num-label').style.display = 'none';
    renderMonthlyChecklist(data, qBody);
  }
  else if (currentMode === 'performance') {
    document.getElementById('slide-mode-label').innerText = 'Performance Task';
    document.getElementById('slide-num-label').style.display = 'none';
    renderPerformanceView(subjectData, qBody);
  }
  else if (currentMode === 'worksheet') {
    document.getElementById('slide-mode-label').innerText = 'Practice Worksheet';
    document.getElementById('slide-num-label').style.display = 'none';
    renderWorksheetView(subjectData, qBody);
  }
}

function formatMarkdown(text) {
  if (!text) return '';
  // Convert double asterisks to bold tags
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Convert single asterisks to italicized emphasis tags
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  return html;
}

// 📖 RENDER STUDY GUIDE SLIDE
function renderStudySlide(subjectData, qBody) {
  const totalSlides = subjectData.slides.length;
  const slide = subjectData.slides[currentSlideIndex];

  // Update progress bar
  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;
  document.getElementById('progress-bar').style.width = `${progressPercent}%`;

  // Update labels
  document.getElementById('slide-num-label').innerText = `Slide ${currentSlideIndex + 1} of ${totalSlides}`;
  document.getElementById('slide-indicator').innerText = `Slide ${currentSlideIndex + 1} of ${totalSlides}`;

  // Enable/disable buttons
  document.getElementById('prev-btn').disabled = (currentSlideIndex === 0);
  document.getElementById('next-btn').disabled = (currentSlideIndex === totalSlides - 1);

  // Parse examples HTML
  let examplesHTML = '';
  if (slide.examples && slide.examples.length > 0) {
    examplesHTML = `<div class="examples-container">`;
    slide.examples.forEach(ex => {
      examplesHTML += `
        <div class="example-box">
          <div class="example-title">💡 ${formatMarkdown(ex.title)}</div>
          <div>${formatMarkdown(ex.content)}</div>
        </div>
      `;
    });
    examplesHTML += `</div>`;
  }

  let imageHTML = '';
  if (slide.image) {
    // Determine the active display style for the zoomed state
    const currentMaxHeight = `${250 * studyImageScale}px`;
    imageHTML = `
      <div class="slide-image-container-wrapper" style="display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%; max-width: 100%;">
        <div class="slide-image-container">
          <img src="${getImageSrc(slide.image)}" alt="${slide.title}" class="slide-image" id="study-slide-img" style="max-height: ${currentMaxHeight}; max-width: 100%; width: auto; height: auto; object-fit: contain; transition: max-height 0.2s ease;">
        </div>
        <div class="image-zoom-toolbar" style="display: flex; justify-content: center; gap: 8px; margin-bottom: 15px;">
          <button class="ws-btn-action" onclick="zoomStudyImage(-0.25)">➖ Zoom Out</button>
          <span id="study-zoom-label" style="font-weight: 700; font-size: 13px; color: var(--text-muted); align-self: center; min-width: 50px; text-align: center;">${Math.round(studyImageScale * 100)}%</span>
          <button class="ws-btn-action" onclick="zoomStudyImage(0.25)">➕ Zoom In</button>
          <button class="ws-btn-action" onclick="resetStudyImageZoom()">🔄 Reset</button>
        </div>
      </div>
    `;
  }
  const flipClass = slideTransitionDirection ? `flip-${slideTransitionDirection}` : '';
  slideTransitionDirection = null;

  qBody.innerHTML = `
    <div class="slide-flip-container" id="study-swipe-container">
      <div class="slide-card-inner ${flipClass}">
        <h2>${formatMarkdown(stripStoryPrefix(slide.title))}</h2>
        ${imageHTML}
        <p>${formatMarkdown(slide.text)}</p>
        ${examplesHTML}
      </div>
    </div>
  `;

  setupSwipeGestures(document.getElementById('study-swipe-container'));
}

// Global Study Guide Image Zoom Helpers
function zoomStudyImage(delta) {
  studyImageScale = Math.max(0.5, Math.min(3.0, studyImageScale + delta));
  applyStudyImageZoom();
}

function resetStudyImageZoom() {
  studyImageScale = 1.0;
  applyStudyImageZoom();
}

function applyStudyImageZoom() {
  const img = document.getElementById('study-slide-img');
  const label = document.getElementById('study-zoom-label');
  if (img) {
    img.style.maxHeight = `${250 * studyImageScale}px`;
  }
  if (label) {
    label.innerText = `${Math.round(studyImageScale * 100)}%`;
  }
}

let slideTransitionDirection = null;

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    studyImageScale = 1.0; // Reset image scale on navigation
    slideTransitionDirection = 'prev';
    renderCurrentView();
  }
}

function nextSlide() {
  const data = getActiveLevelData();
  if (!data || !data[currentSubject]) return;

  const totalSlides = data[currentSubject].slides.length;
  if (currentSlideIndex < totalSlides - 1) {
    currentSlideIndex++;
    studyImageScale = 1.0;
    slideTransitionDirection = 'next';
    renderCurrentView();
  }

  if (currentSlideIndex === totalSlides - 1) {
    const grade = getLearnerGrade();
    const key = `study_complete_${grade}_w${currentWeek}_${currentSubject}_${currentLevel}`;
    if (safeStorage.getItem(key) !== 'true') {
      safeStorage.setItem(key, 'true');
      recordCompletion();
      checkAndSaveNewBadges();
    }
  }
}

let touchStartX = 0;
let touchStartY = 0;

function setupSwipeGestures(element) {
  if (!element) return;
  
  element.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  
  element.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const xDiff = touchEndX - touchStartX;
    const yDiff = touchEndY - touchStartY;
    
    if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > 60) {
      if (xDiff < 0) {
        if (currentMode === 'study') {
          nextSlide();
        } else if (currentMode === 'reading') {
          changeReadingSlide(1);
        }
      } else {
        if (currentMode === 'study') {
          prevSlide();
        } else if (currentMode === 'reading') {
          changeReadingSlide(-1);
        }
      }
    }
  }, { passive: true });
}

// ✍️ RENDER QUIZ / CHALLENGE SLIDE (Auto-advancing, Navigation-free)
function renderQuizQuestion(questionsList, qBody) {
  const totalQuestions = questionsList.length;

  // If completed, show summary screen
  if (currentQuestionIndex >= totalQuestions) {
    showSummaryScreen(questionsList);
    return;
  }

  // Update progress bar
  const progressPercent = (currentQuestionIndex / totalQuestions) * 100;
  document.getElementById('progress-bar').style.width = `${progressPercent}%`;

  // Update labels
  document.getElementById('slide-num-label').innerText = `Question ${currentQuestionIndex + 1} of ${totalQuestions} | Score: ${quizScore}/${totalQuestions}`;

  const q = questionsList[currentQuestionIndex];

  if (q.type === 'choice' || q.type === 'verify') {
    let choicesHTML = '';
    q.options.forEach((opt, idx) => {
      choicesHTML += `
        <button class="choice-btn" id="choice-${idx}" onclick="selectChoice(${idx})">
          <span>${opt}</span>
        </button>
      `;
    });
    
    qBody.innerHTML = `
      <div class="question-text">${q.q}</div>
      <div class="choices-grid">${choicesHTML}</div>
    `;
  } 
  else if (q.type === 'tf') {
    qBody.innerHTML = `
      <div class="question-text">${q.q}</div>
      <div class="choices-grid">
        <button class="choice-btn" id="choice-true" onclick="selectTF(true)">🟢 TAMA (True)</button>
        <button class="choice-btn" id="choice-false" onclick="selectTF(false)">🔴 MALI (False)</button>
      </div>
    `;
  } 
  else if (q.type === 'blank') {
    qBody.innerHTML = `
      <div class="question-text">${q.q}</div>
      <div class="blank-input-wrapper">
        <input type="text" class="blank-input" id="blank-input" placeholder="Type your answer here..." autocomplete="off">
        <button class="blank-submit-btn" id="blank-submit" onclick="submitBlank()">Submit</button>
      </div>
      <div id="blank-feedback" style="margin-top: 15px; font-weight: 600; font-size: 15px;"></div>
    `;
  } 
  else if (q.type === 'performance') {
    let rubricsHTML = '';
    q.labels.forEach((lbl, idx) => {
      rubricsHTML += `
        <div class="rubric-row">
          <div class="rubric-label-container">
            <span>⭐ ${lbl}</span>
            <span class="rubric-value-label" id="rubric-val-${idx}">3 Stars</span>
          </div>
          <input type="range" class="rubric-slider" min="1" max="5" value="3" oninput="updateRubricVal(${idx}, this.value)">
        </div>
      `;
    });

    qBody.innerHTML = `
      <div class="question-text">📋 PERFORMANCE TASK: ${q.title}</div>
      <p style="margin-bottom: 20px; line-height: 1.6; font-size: 15px;">${q.desc}</p>
      <div class="rubrics-score-board">
        <div style="font-weight:700; margin-bottom:15px; font-size: 14px;">GRADING RUBRIC (Teacher/Parent Scoring):</div>
        ${rubricsHTML}
      </div>
      <button class="blank-submit-btn" style="margin-top:20px; width:100%;" onclick="submitPerformance()">Finish Performance Task</button>
    `;
  }
}

// ANSWER CHECKING LOGIC & AUTO-ADVANCING
function selectChoice(index) {
  const modeKey = currentMode === 'quiz' ? 'standard' : currentMode;
  const data = getActiveLevelData();
  if (!data || !data[currentSubject]) return;
  
  const questionsList = data[currentSubject][modeKey];
  const q = questionsList[currentQuestionIndex];
  
  // Disable options
  q.options.forEach((opt, idx) => {
    const btn = document.getElementById(`choice-${idx}`);
    btn.disabled = true;
    if (idx === q.answer) {
      btn.classList.add('correct');
    }
  });

  if (index === q.answer) {
    quizScore++;
    playSFX(true);
  } else {
    document.getElementById(`choice-${index}`).classList.add('incorrect');
    playSFX(false);
    wrongAnswersLog.push({
      q: q.q,
      yourAns: q.options[index],
      correctAns: q.options[q.answer]
    });
  }

  saveQuizProgress();
  // Auto-advance after 800ms
  setTimeout(() => {
    currentQuestionIndex++;
    renderCurrentView();
  }, 800);
}

function selectTF(val) {
  const modeKey = currentMode === 'quiz' ? 'standard' : currentMode;
  const data = getActiveLevelData();
  if (!data || !data[currentSubject]) return;

  const questionsList = data[currentSubject][modeKey];
  const q = questionsList[currentQuestionIndex];
  const trueBtn = document.getElementById('choice-true');
  const falseBtn = document.getElementById('choice-false');

  trueBtn.disabled = true;
  falseBtn.disabled = true;

  if (q.answer === true) {
    trueBtn.classList.add('correct');
  } else {
    falseBtn.classList.add('correct');
  }

  if (val === q.answer) {
    quizScore++;
    playSFX(true);
  } else {
    if (val === true) {
      trueBtn.classList.add('incorrect');
    } else {
      falseBtn.classList.add('incorrect');
    }
    playSFX(false);
    wrongAnswersLog.push({
      q: q.q,
      yourAns: val ? "TAMA (True)" : "MALI (False)",
      correctAns: q.answer ? "TAMA (True)" : "MALI (False)"
    });
  }

  saveQuizProgress();
  setTimeout(() => {
    currentQuestionIndex++;
    renderCurrentView();
  }, 800);
}

function submitBlank() {
  const modeKey = currentMode === 'quiz' ? 'standard' : currentMode;
  const data = getActiveLevelData();
  if (!data || !data[currentSubject]) return;

  const questionsList = data[currentSubject][modeKey];
  const q = questionsList[currentQuestionIndex];
  const userVal = document.getElementById('blank-input').value.trim().toLowerCase();
  const correctVal = q.answer.trim().toLowerCase();

  document.getElementById('blank-input').disabled = true;
  document.getElementById('blank-submit').disabled = true;

  const fb = document.getElementById('blank-feedback');

  if (userVal === correctVal) {
    quizScore++;
    fb.innerText = "🟢 Correct!";
    fb.style.color = "var(--correct)";
    playSFX(true);
  } else {
    fb.innerHTML = `🔴 Incorrect! Correct answer: <strong>${q.answer}</strong>`;
    fb.style.color = "var(--incorrect)";
    playSFX(false);
    wrongAnswersLog.push({
      q: q.q,
      yourAns: userVal || "(empty)",
      correctAns: q.answer
    });
  }

  saveQuizProgress();
  setTimeout(() => {
    currentQuestionIndex++;
    renderCurrentView();
  }, 1000); // 1s for blank so they can read spelling correction
}

function updateRubricVal(idx, val) {
  rubricGrades[idx] = parseInt(val);
  document.getElementById(`rubric-val-${idx}`).innerText = `${val} Stars`;
}

function submitPerformance() {
  // Performance task adds a full score item
  quizScore++;
  playSFX(true);
  currentQuestionIndex++;
  renderCurrentView();
}

// 📋 RENDER PERFORMANCE VIEW & GRADING
function renderPerformanceView(subjectData, qBody) {
  const q = subjectData.performance;
  if (!q) {
    qBody.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <span style="font-size: 48px; display: block; margin-bottom: 15px;">📋</span>
        No performance task is defined for ${subjectData.title} in Week ${currentWeek}.
      </div>
    `;
    return;
  }

  // Load saved grades for this week, level, and subject
  const learnerGrade = getLearnerGrade();
  const storageKey = `performance_${learnerGrade}_w${currentWeek}_sses_${currentSubject}_${currentLevel}`;
  const savedGrades = safeStorage.getItem(storageKey);
  let grades = [];
  if (savedGrades) {
    try {
      grades = JSON.parse(savedGrades);
    } catch(e) {}
  }

  // Ensure dimension matches
  rubricGrades = [];
  for (let idx = 0; idx < q.labels.length; idx++) {
    const savedVal = grades[idx];
    rubricGrades.push(savedVal !== undefined ? savedVal : 3);
  }

  let rubricsHTML = '';
  q.labels.forEach((lbl, idx) => {
    const currentVal = rubricGrades[idx];
    rubricsHTML += `
      <div class="rubric-row">
        <div class="rubric-label-container">
          <span>⭐ ${lbl}</span>
          <span class="rubric-value-label" id="rubric-val-${idx}">${currentVal} Stars</span>
        </div>
        <input type="range" class="rubric-slider" min="1" max="5" value="${currentVal}" oninput="updateRubricVal(${idx}, this.value)">
      </div>
    `;
  });

  qBody.innerHTML = `
    <div class="question-text">📋 ${formatMarkdown(stripStoryPrefix(q.title))}</div>
    <p style="margin-bottom: 20px; line-height: 1.6; font-size: 15px;">${formatMarkdown(q.desc)}</p>
    
    <div style="background: rgba(37, 99, 235, 0.08); border-left: 4px solid var(--accent); padding: 12px 16px; border-radius: 8px; margin-bottom: 20px; font-size: 14px; font-weight: 600; display: flex; align-items: center; gap: 8px; color: var(--text-main);">
      <span>👨‍👩‍👦</span>
      <span>Ask your parent to rate your performance task by moving the rubric sliders below.</span>
    </div>

    <div class="rubrics-score-board">
      <div style="font-weight:700; margin-bottom:15px; font-size: 14px;">GRADING RUBRIC (Teacher/Parent Scoring):</div>
      ${rubricsHTML}
    </div>
    <button class="blank-submit-btn" style="margin-top:20px; width:100%;" onclick="submitPerformanceTask()">Save Rubric & Finish</button>
  `;
}

function submitPerformanceTask() {
  const learnerGrade = getLearnerGrade();
  const storageKey = `performance_${learnerGrade}_w${currentWeek}_sses_${currentSubject}_${currentLevel}`;
  safeStorage.setItem(storageKey, JSON.stringify(rubricGrades));
  
  // Mark performance task as complete
  const completeKey = `performance_complete_${learnerGrade}_w${currentWeek}_${currentSubject}_${currentLevel}`;
  safeStorage.setItem(completeKey, 'true');
  recordCompletion();
  checkAndSaveNewBadges();
  
  playSFX(true);
  initConfetti();

  const qBody = document.getElementById('viewport-body');
  const average = (rubricGrades.reduce((a, b) => a + b, 0) / rubricGrades.length).toFixed(1);
  qBody.innerHTML = `
    <div class="summary-screen">
      <div class="score-circle">
        <span class="score-num">${average}</span>
        <span class="score-label">Average Stars</span>
      </div>
      <h3 style="margin-top:20px;">🎉 Performance Task Completed!</h3>
      <p style="color:var(--text-muted); margin-bottom: 20px;">Your parent/teacher graded this task and saved the score.</p>
      <button class="restart-btn" onclick="renderCurrentView()">🔄 View Rubric again</button>
    </div>
  `;
}

// 🏆 SHOW SUMMARY & WRONG ANSWERS REVIEW
function showSummaryScreen(questionsList) {
  const totalQuestions = questionsList.length;
  document.getElementById('progress-bar').style.width = '100%';

  // Save score to local storage
  const isReview = window.IS_REVIEW_MODE;
  const learnerGrade = getLearnerGrade();
  const storageKey = isReview 
    ? `highscore_${learnerGrade}_review_${window.CURRENT_REVIEW_DATE}_sses_${currentSubject}_${currentLevel}_${currentMode}`
    : `highscore_${learnerGrade}_w${currentWeek}_sses_${currentSubject}_${currentLevel}_${currentMode}`;
  const previousHigh = parseInt(safeStorage.getItem(storageKey)) || 0;
  if (quizScore > previousHigh) {
    safeStorage.setItem(storageKey, quizScore);
    // Maintain standard key compatibility for legacy lookups
    if (!isReview && currentMode === 'quiz') {
      safeStorage.setItem(`highscore_${learnerGrade}_w${currentWeek}_sses_${currentSubject}_${currentLevel}_standard`, quizScore);
    }
    updateScoresDisplay();
  }

  // Save mistakes log permanently for remediation
  if (!isReview) {
    const mistakesKey = `mistakes_${learnerGrade}_w${currentWeek}_sses_${currentSubject}_${currentLevel}_${currentMode}`;
    safeStorage.setItem(mistakesKey, JSON.stringify(wrongAnswersLog));
  }

  recordCompletion();

  const qBody = document.getElementById('viewport-body');

  let reviewHTML = '';
  if (wrongAnswersLog.length > 0) {
    reviewHTML = `
      <div class="review-panel">
        <h3>❌ Let's Review Your Mistakes:</h3>
    `;
    wrongAnswersLog.forEach(item => {
      reviewHTML += `
        <div class="review-item">
          <div class="review-q">${item.q}</div>
          <div class="review-ans-wrapper">
            <span class="review-your-ans">Your answer: ${item.yourAns}</span>
            <span class="review-correct-ans">Correct answer: ${item.correctAns}</span>
          </div>
        </div>
      `;
    });
    reviewHTML += `</div>`;
  } else {
    reviewHTML = `
      <div class="review-panel">
        <div class="review-item correct-summary">
          🎉 Perfect Score! You answered all questions correctly! 🌟
        </div>
      </div>
    `;
  }

  clearQuizProgress();
  qBody.innerHTML = `
    <div class="summary-screen">
      <div class="score-circle">
        <span class="score-num">${quizScore}/${totalQuestions}</span>
        <span class="score-label">Score</span>
      </div>
      <button class="restart-btn" onclick="setSubject('${currentSubject}')">🔄 Try Again</button>
      ${reviewHTML}
    </div>
  `;

  // Trigger confetti if perfect score
  if (quizScore === totalQuestions) {
    initConfetti();
  }
}

// 📋 RENDER MONTHLY DEPED COMPETENCY CHECKLIST
function renderMonthlyChecklist(weekData, qBody) {
  const checklistData = weekData.checklist || {};
  let listHTML = '';

  for (const subjectKey in checklistData) {
    const data = checklistData[subjectKey];
    listHTML += `
      <h3 style="margin-top:20px; border-bottom: 1px solid var(--border-card); padding-bottom:6px; color:var(--sub-${subjectKey});">
        ${data.icon} ${data.title}
      </h3>
    `;
    data.competencies.forEach((comp, idx) => {
      const learnerGrade = getLearnerGrade();
      const storageKey = `checklist_${learnerGrade}_w${currentWeek}_${subjectKey}_${idx}`;
      const checked = safeStorage.getItem(storageKey) === 'true' ? 'checked' : '';
      listHTML += `
        <div class="competency-item">
          <input type="checkbox" id="check-${subjectKey}-${idx}" ${checked} onchange="toggleChecklistValue('${subjectKey}', ${idx}, this.checked)">
          <div>
            <span class="competency-code">${comp.code}</span>
            <span>${formatMarkdown(comp.desc)}</span>
          </div>
        </div>
      `;
    });
  }

  qBody.innerHTML = `
    <div class="competency-checklist-panel">
      <h2>DepEd Competency Satisfaction Check</h2>
      <p style="margin-bottom: 20px; font-size:14px; color:var(--text-muted);">
        Every month (after 4 weeks), parents/teachers use this checklist to verify that competencies expected in this particular period were covered in the study guide and quizzes.
      </p>
      ${listHTML}
    </div>
  `;
}

function toggleChecklistValue(subjectKey, idx, checked) {
  const learnerGrade = getLearnerGrade();
  safeStorage.setItem(`checklist_${learnerGrade}_w${currentWeek}_${subjectKey}_${idx}`, checked);
}

// Score board display updates
function updateScoresDisplay() {
  const subjects = ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc'];
  const data = getActiveLevelData();
  if (!data) return;

  const isReview = window.IS_REVIEW_MODE;
  const learnerGrade = getLearnerGrade();

  subjects.forEach(sub => {
    const el = document.getElementById(`lb-${sub}`);
    if (!el) return; // Safely skip if leaderboard widget is removed from HTML
    const scoreKey = isReview 
      ? `highscore_${learnerGrade}_review_${window.CURRENT_REVIEW_DATE}_sses_${sub}_${currentLevel}_${currentMode}`
      : `highscore_${learnerGrade}_w${currentWeek}_sses_${sub}_${currentLevel}_${currentMode}`;
    const score = safeStorage.getItem(scoreKey) || '-';
    let total = '-';
    if (data[sub] && data[sub][currentMode]) {
      total = Array.isArray(data[sub][currentMode]) ? data[sub][currentMode].length : '-';
    }
    el.innerText = `${data[sub].icon} ${data[sub].title}: ${score === '-' ? '-' : score + '/' + total}`;
  });
}

function clearScores() {
  const subjects = ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc'];
  const isReview = window.IS_REVIEW_MODE;
  const learnerGrade = getLearnerGrade();
  subjects.forEach(sub => {
    if (isReview) {
      safeStorage.removeItem(`highscore_${learnerGrade}_review_${window.CURRENT_REVIEW_DATE}_sses_${sub}_core_quiz`);
      safeStorage.removeItem(`highscore_${learnerGrade}_review_${window.CURRENT_REVIEW_DATE}_sses_${sub}_core_challenge`);
      safeStorage.removeItem(`highscore_${learnerGrade}_review_${window.CURRENT_REVIEW_DATE}_sses_${sub}_advanced_quiz`);
      safeStorage.removeItem(`highscore_${learnerGrade}_review_${window.CURRENT_REVIEW_DATE}_sses_${sub}_advanced_challenge`);
      // Fallback cleanup for old keys
      safeStorage.removeItem(`highscore_review_${window.CURRENT_REVIEW_DATE}_sses_${sub}_g3_quiz`);
      safeStorage.removeItem(`highscore_review_${window.CURRENT_REVIEW_DATE}_sses_${sub}_g3_challenge`);
      safeStorage.removeItem(`highscore_review_${window.CURRENT_REVIEW_DATE}_sses_${sub}_advanced_quiz`);
      safeStorage.removeItem(`highscore_review_${window.CURRENT_REVIEW_DATE}_sses_${sub}_advanced_challenge`);
    } else {
      safeStorage.removeItem(`highscore_${learnerGrade}_w${currentWeek}_sses_${sub}_core_standard`);
      safeStorage.removeItem(`highscore_${learnerGrade}_w${currentWeek}_sses_${sub}_core_quiz`);
      safeStorage.removeItem(`highscore_${learnerGrade}_w${currentWeek}_sses_${sub}_core_challenge`);
      safeStorage.removeItem(`highscore_${learnerGrade}_w${currentWeek}_sses_${sub}_advanced_standard`);
      safeStorage.removeItem(`highscore_${learnerGrade}_w${currentWeek}_sses_${sub}_advanced_quiz`);
      safeStorage.removeItem(`highscore_${learnerGrade}_w${currentWeek}_sses_${sub}_advanced_challenge`);
      // Fallback cleanup for old keys
      safeStorage.removeItem(`highscore_w${currentWeek}_sses_${sub}_g3_standard`);
      safeStorage.removeItem(`highscore_w${currentWeek}_sses_${sub}_g3_quiz`);
      safeStorage.removeItem(`highscore_w${currentWeek}_sses_${sub}_g3_challenge`);
      safeStorage.removeItem(`highscore_w${currentWeek}_sses_${sub}_advanced_standard`);
      safeStorage.removeItem(`highscore_w${currentWeek}_sses_${sub}_advanced_quiz`);
      safeStorage.removeItem(`highscore_w${currentWeek}_sses_${sub}_advanced_challenge`);
    }
  });
  updateScoresDisplay();
}

// Audio logic
function setupBgMusic(src, name) {
  const wasPlaying = bgMusic && !bgMusic.paused;
  if (bgMusic) {
    bgMusic.pause();
  }
  bgMusic = new Audio(src);
  bgMusic.loop = true;
  bgMusic.preload = 'auto';
  bgMusic.onerror = (e) => console.warn('Background music failed to load:', e);
  
  // Update music status label
  const statusEl = document.getElementById('custom-music-status');
  if (statusEl) {
    statusEl.innerText = name === 'Default' ? 'Default background music active' : `Playing: ${name}`;
  }
  
  if (wasPlaying && musicEnabled) {
    bgMusic.play().catch(() => {});
  }
}

function toggleMusic(enabled) {
  musicEnabled = enabled;
  safeStorage.setItem('session_music_enabled', enabled ? 'true' : 'false');
  
  const musicToggle = document.getElementById('settings-music-toggle');
  if (musicToggle) musicToggle.checked = enabled;

  if (musicEnabled) {
    if (bgMusic) {
      bgMusic.play().catch(e => {
        console.warn("Audio play blocked or failed: ", e);
        const playOnInteraction = () => {
          if (musicEnabled && bgMusic) {
            bgMusic.play().catch(() => {});
          }
          document.removeEventListener('click', playOnInteraction);
        };
        document.addEventListener('click', playOnInteraction);
      });
    }
  } else {
    if (bgMusic) {
      bgMusic.pause();
    }
  }
  updateHeaderActionButtons();
}

function toggleMusicHeader() {
  toggleMusic(!musicEnabled);
}

function updateHeaderActionButtons() {
  const themeBtn = document.getElementById('header-theme-btn');
  if (themeBtn) {
    const isLight = document.body.classList.contains('light-mode');
    themeBtn.innerHTML = isLight ? '🌙 Theme' : '☀️ Theme';
    themeBtn.title = isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode';
  }
  
  const musicBtn = document.getElementById('header-music-btn');
  if (musicBtn) {
    musicBtn.innerHTML = musicEnabled ? '🔊 Music' : '🔇 Music';
    musicBtn.title = musicEnabled ? 'Mute Music' : 'Play Music';
  }

  const transBtn = document.getElementById('header-trans-btn');
  if (transBtn) {
    const isShowing = document.body.classList.contains('show-translation');
    transBtn.classList.toggle('active-tool', isShowing);
    if (isShowing) {
      transBtn.style.background = 'var(--accent)';
      transBtn.style.color = 'white';
    } else {
      transBtn.style.background = '';
      transBtn.style.color = '';
    }
  }
}

function handleMusicUpload(files) {
  if (!files || files.length === 0) return;
  const file = files[0];
  if (!file.type.startsWith('audio/')) {
    alert("Please upload a valid audio file.");
    return;
  }
  
  musicDB.saveMusic(file).then(() => {
    const audioUrl = URL.createObjectURL(file);
    setupBgMusic(audioUrl, file.name);
    alert("Custom music uploaded successfully!");
  }).catch(err => {
    console.error("Failed to save custom music:", err);
    alert("Failed to save custom music to storage.");
  });
}

function resetDefaultMusic() {
  musicDB.clearMusic().then(() => {
    setupBgMusic('background5.mp3', 'Default');
    alert("Reverted to default background music.");
  }).catch(err => {
    console.error("Failed to clear custom music:", err);
    setupBgMusic('background5.mp3', 'Default');
  });
}

function toggleSFXSettings(enabled) {
  sfxEnabled = enabled;
  safeStorage.setItem('session_sfx_enabled', enabled ? 'true' : 'false');
  
  const sfxToggle = document.getElementById('settings-sfx-toggle');
  if (sfxToggle) sfxToggle.checked = enabled;
}

function playSFX(isCorrect) {
  if (!sfxEnabled) return;
  const sfxFile = isCorrect ? 'correct.wav' : 'incorrect.wav';
  const sfx = new Audio(sfxFile);
  sfx.play().catch(e => console.log("SFX play blocked: ", e));
}

function toggleTranslation(checked) {
  if (checked) {
    document.body.classList.add('show-translation');
  } else {
    document.body.classList.remove('show-translation');
  }
  saveSessionState();
  
  const transToggle = document.getElementById('settings-translation-toggle');
  if (transToggle) transToggle.checked = checked;
}

function toggleTranslationHeader() {
  const isCurrentlyShowing = document.body.classList.contains('show-translation');
  const newChecked = !isCurrentlyShowing;
  toggleTranslation(newChecked);
  updateHeaderActionButtons();
}

function toggleWorksheetAnswers() {
  if (!wsShowAnswers) {
    showPinModal(() => {
      wsShowAnswers = true;
      applyWorksheetAnswersVisibility();
    });
  } else {
    wsShowAnswers = false;
    applyWorksheetAnswersVisibility();
  }
}

function applyWorksheetAnswersVisibility() {
  const data = getActiveLevelData();
  if (data && data[currentSubject]) {
    renderWorksheetView(data[currentSubject], document.getElementById('viewport-body'));
  }
  saveSessionState();
}

function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  safeStorage.setItem('session_theme', isLight ? 'light' : 'dark');
  updateThemeColorMeta();
  
  const themeToggle = document.getElementById('settings-theme-toggle');
  if (themeToggle) themeToggle.checked = isLight;
  
  updateHeaderActionButtons();
}

// Confetti physics engine
function initConfetti() {
  confettiParticles = [];
  for (let i = 0; i < 150; i++) {
    confettiParticles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 6,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
      speedY: Math.random() * 4 + 3,
      speedX: Math.random() * 2 - 1,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 4 - 2
    });
  }
  if (animationId) cancelAnimationFrame(animationId);
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let active = false;

  confettiParticles.forEach(p => {
    p.y += p.speedY;
    p.x += p.speedX;
    p.rotation += p.rotationSpeed;

    if (p.y < canvas.height) {
      active = true;
    }

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    ctx.restore();
  });

  if (active) {
    animationId = requestAnimationFrame(animateConfetti);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// ==========================================================================
// INTERACTIVE WORKSHEETS DRAWING ENGINE
// ==========================================================================

function renderWorksheetView(subjectData, qBody) {
  const pages = subjectData.worksheet ? subjectData.worksheet.pages : [];
  
  if (pages.length === 0) {
    qBody.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <span style="font-size: 48px; display: block; margin-bottom: 15px;">📝</span>
        No worksheet available for ${subjectData.title} in the ${currentLevel === 'core' ? 'Grade 3' : 'Grade 4-5'} level for Week ${currentWeek}.
      </div>
    `;
    return;
  }
  
  // Bounds check for current page
  if (currentWorksheetPage >= pages.length) {
    currentWorksheetPage = 0;
  }
  
  // Reset worksheet zoom on loading a new worksheet/page to prevent layout scaling jumps
  worksheetZoom = 1.0;
  
  const grade = getLearnerGrade();
  const isComplete = safeStorage.getItem(`worksheet_complete_${grade}_w${currentWeek}_${currentSubject}_${currentLevel}`) === 'true';
  const isLastPage = (currentWorksheetPage === pages.length - 1);

  let completedMsgHTML = '';
  if (isComplete) {
    completedMsgHTML = `
      <div class="ws-completed-banner" style="margin-top: 8px; color: #10b981; font-weight: bold; font-size: 13px; display: flex; align-items: center; gap: 6px;">
        ✅ This worksheet was marked completed and recorded.
      </div>
    `;
  }

  let bannerHTML = '';
  if (!wsShowAnswers) {
    // Answers are hidden: show standard instructions + completion msg if complete
    bannerHTML = `
      <div class="ws-instruction-banner" style="background: rgba(59, 130, 246, 0.08); border-left: 4px solid var(--accent); padding: 10px 16px; border-radius: 4px; margin-bottom: 12px; font-size: 13px; line-height: 1.4; color: var(--text-main); font-weight: 500;">
        📝 Get a pen and paper, and write your answers. To check your work, ask a parent to press Show Answer button and enter their PIN.
        ${completedMsgHTML}
      </div>
    `;
  } else {
    // Answers are shown: hide the pen-and-paper instruction text
    if (isLastPage) {
      // On the last slide of the worksheet with answers, show completion button/banner at the top (where instructions banner occupied)
      if (isComplete) {
        bannerHTML = `
          <div class="ws-instruction-banner" style="background: rgba(16, 185, 129, 0.08); border-left: 4px solid #10b981; padding: 12px 16px; border-radius: 8px; margin-bottom: 12px;">
            <div style="text-align: center; color: #10b981; font-weight: bold; font-size: 15px;">
              🎉 This worksheet is marked as complete!
            </div>
            ${completedMsgHTML}
          </div>
        `;
      } else {
        bannerHTML = `
          <div class="ws-instruction-banner" style="background: rgba(16, 185, 129, 0.08); border-left: 4px solid #10b981; padding: 12px 16px; border-radius: 8px; margin-bottom: 12px;">
            <span style="font-size:13px; color:var(--text-muted); display: block; margin-bottom: 8px; font-weight: 600; text-align: center;">👨‍👩‍👦 Parent: Tap below when worksheet is done</span>
            <button class="blank-submit-btn" style="width:100%; background: #10b981; padding: 10px; border-radius: 8px; font-weight: bold; color: white; border: none; cursor: pointer;"
              onclick="submitWorksheetComplete()">
              ✅ Mark This Worksheet Completed
            </button>
          </div>
        `;
      }
    } else {
      // Answers are shown, but it is not the last slide.
      // Hide standard instructions completely. If complete, still show completion status at the top.
      if (isComplete) {
        bannerHTML = `
          <div class="ws-instruction-banner" style="background: rgba(16, 185, 129, 0.08); border-left: 4px solid #10b981; padding: 10px 16px; border-radius: 8px; margin-bottom: 12px;">
            ${completedMsgHTML}
          </div>
        `;
      } else {
        bannerHTML = '';
      }
    }
  }

  let submitBarHTML = '';
  // Show bottom complete status ONLY on the last slide when answers are hidden and it is complete
  if (!wsShowAnswers && isComplete && isLastPage) {
    submitBarHTML = `
      <div class="worksheet-parent-submit-bar" id="worksheet-parent-bar" style="display: block;">
        <div style="text-align: center; color: #10b981; font-weight: bold; font-size: 15px; padding: 12px; border: 1.5px solid #10b981; border-radius: 8px; background: rgba(16, 185, 129, 0.08);">
          🎉 This worksheet is marked as complete!
        </div>
      </div>
    `;
  }
  
  // Render drawing toolbar, worksheet container, and page controls in the toolbar
  qBody.innerHTML = `
    <div class="worksheet-outer-container">
      ${bannerHTML}

      <div class="ws-toolbar">
        <div class="ws-tool-group">
          <button class="ws-btn-action ${wsShowAnswers ? 'active-tool' : ''}" id="ws-answers-btn" onclick="toggleWorksheetAnswers()">${wsShowAnswers ? '🔑 Hide Answer' : '🔑 Show Answer'}</button>
        </div>

        <div class="ws-tool-group">
          <span class="ws-group-label">Zoom:</span>
          <button class="ws-btn-action" onclick="zoomWorksheet(-0.1)">➖</button>
          <span class="ws-page-indicator" id="ws-zoom-label" style="min-width: 50px; text-align: center;">100%</span>
          <button class="ws-btn-action" onclick="zoomWorksheet(0.1)">➕</button>
          <button class="ws-btn-action" onclick="resetWorksheetZoom()">🔄 Fit</button>
        </div>

        <div class="ws-tool-group ws-page-group" style="margin-left: auto; display: flex; align-items: center; gap: 8px;">
          <button class="ws-btn-action" id="ws-toolbar-prev-btn" onclick="changeWorksheetPage(-1)">← Previous</button>
          <span class="ws-page-indicator" id="ws-toolbar-page-label">Page ${currentWorksheetPage + 1} of ${pages.length}</span>
          <button class="ws-btn-action" id="ws-toolbar-next-btn" onclick="changeWorksheetPage(1)">Next →</button>
        </div>
      </div>
      
      <div class="worksheet-viewport-wrapper" id="worksheet-viewport-wrapper">
        <div class="worksheet-viewport" id="worksheet-viewport-el">
          <div class="worksheet-paper ${wsShowAnswers ? 'show-ws-answers' : ''}" id="worksheet-paper-content">
            ${pages[currentWorksheetPage]}
          </div>
        </div>
      </div>
      ${submitBarHTML}
    </div>
  `;
  
  // Update pagination button active state
  document.getElementById('ws-toolbar-prev-btn').disabled = (currentWorksheetPage === 0);
  document.getElementById('ws-toolbar-next-btn').disabled = (currentWorksheetPage === pages.length - 1);

  // Apply initial scaling and show/hide answers dynamically on load
  setTimeout(() => {
    resizeWorksheet();
    const paper = document.getElementById('worksheet-paper-content');
    if (paper) {
      const answers = paper.querySelectorAll('.ws-answer');
      answers.forEach(ans => {
        if (wsShowAnswers) {
          if (ans.closest('.writing-line')) {
            ans.style.setProperty('display', 'block', 'important');
          } else {
            ans.style.setProperty('display', 'inline-block', 'important');
          }
        } else {
          ans.style.setProperty('display', 'none', '');
        }
      });
    }
  }, 0);
}

function submitWorksheetComplete() {
  const grade = getLearnerGrade();
  const key = `worksheet_complete_${grade}_w${currentWeek}_${currentSubject}_${currentLevel}`;
  safeStorage.setItem(key, 'true');
  recordCompletion();
  checkAndSaveNewBadges();
  playSFX(true);
  initConfetti();
  
  wsShowAnswers = false;
  
  const data = getActiveLevelData();
  if (data && data[currentSubject]) {
    renderWorksheetView(data[currentSubject], document.getElementById('viewport-body'));
  }
}

// Global Worksheet Zooming & Layout Scaling Helpers
function zoomWorksheet(delta) {
  worksheetZoom = Math.max(0.5, Math.min(2.5, worksheetZoom + delta));
  const label = document.getElementById('ws-zoom-label');
  if (label) {
    label.innerText = `${Math.round(worksheetZoom * 100)}%`;
  }
  resizeWorksheet();
}

function resetWorksheetZoom() {
  worksheetZoom = 1.0;
  const label = document.getElementById('ws-zoom-label');
  if (label) {
    label.innerText = '100%';
  }
  resizeWorksheet();
}

function resizeWorksheet() {
  const wrapper = document.getElementById('worksheet-viewport-wrapper');
  const viewport = document.getElementById('worksheet-viewport-el');
  if (!wrapper || !viewport) return;

  const parentWidth = wrapper.clientWidth;
  const fitScale = parentWidth / 1000;
  const finalScale = fitScale * worksheetZoom;
  
  viewport.style.transform = `scale(${finalScale})`;
  viewport.style.transformOrigin = 'top center';
  wrapper.style.height = `${680 * finalScale}px`;
  
  // If zoomed in (wider/taller than parent frame), enable standard touch scroll panning.
  if (worksheetZoom > 1.0) {
    wrapper.style.overflow = 'auto';
    wrapper.style.justifyContent = 'flex-start';
  } else {
    wrapper.style.overflow = 'hidden';
    wrapper.style.justifyContent = 'center';
  }
}

function changeWorksheetPage(dir) {
  currentWorksheetPage += dir;
  const data = getActiveLevelData();
  if (data && data[currentSubject]) {
    renderWorksheetView(data[currentSubject], document.getElementById('viewport-body'));
  }
}

function setWorksheetColor(color) {
  wsIsEraser = false;
  const eraserBtn = document.getElementById('ws-eraser-btn');
  if (eraserBtn) eraserBtn.classList.remove('active-tool');
  wsBrushColor = color;
  const select = document.getElementById('ws-color-select');
  if (select) select.value = color;
}

function setWorksheetSize(size) {
  wsBrushSize = size;
  const select = document.getElementById('ws-size-select');
  if (select) select.value = size;
}

function toggleWorksheetEraser() {
  wsIsEraser = !wsIsEraser;
  document.getElementById('ws-eraser-btn').classList.toggle('active-tool', wsIsEraser);
}

function toggleWorksheetFingerDraw() {
  wsDrawWithFinger = !wsDrawWithFinger;
  safeStorage.setItem('session_wsDrawWithFinger', wsDrawWithFinger ? 'true' : 'false');
  
  const btn = document.getElementById('ws-finger-btn');
  if (btn) {
    btn.classList.toggle('active-tool', wsDrawWithFinger);
    btn.innerText = `👆 Finger Draw: ${wsDrawWithFinger ? 'On' : 'Off'}`;
  }
  const canvas = document.getElementById('worksheet-canvas');
  if (canvas) {
    canvas.style.touchAction = wsDrawWithFinger ? 'none' : 'auto';
  }
}

function initWorksheetCanvas() {
  const canvas = document.getElementById('worksheet-canvas');
  if (!canvas) return;
  
  // Apply correct touch action based on current toggle state
  canvas.style.touchAction = wsDrawWithFinger ? 'none' : 'auto';
  
  const ctx = canvas.getContext('2d');
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  wsHistory = [];
  
  const activePointers = new Map();
  let initialPinchDistance = 0;
  let initialPinchZoom = 1.0;
  let initialPinchMidpoint = { x: 0, y: 0 };
  let initialScroll = { left: 0, top: 0 };
  
  const wrapper = document.getElementById('worksheet-viewport-wrapper');
  
  const getCoordinates = (e) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height)
    };
  };
  
  const startDrawing = (e) => {
    if (e.pointerType === 'touch' && !wsDrawWithFinger) return; // Ignore finger drawing unless explicitly toggled
    
    // Save state for undo
    if (wsHistory.length >= 15) {
      wsHistory.shift();
    }
    wsHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    
    const coords = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
    wsIsDrawing = true;
  };
  
  const draw = (e) => {
    if (!wsIsDrawing) return;
    if (e.pointerType === 'touch' && !wsDrawWithFinger) return; // Ignore finger drawing unless explicitly toggled
    
    const coords = getCoordinates(e);
    
    ctx.lineWidth = wsBrushSize;
    if (wsIsEraser) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = wsBrushSize * 5; // Make eraser larger
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = wsBrushColor;
    }
    
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
  };
  
  const stopDrawing = (e) => {
    if (wsIsDrawing) {
      ctx.closePath();
      wsIsDrawing = false;
      saveWorksheetDrawing();
    }
  };

  const handlePointerDown = (e) => {
    activePointers.set(e.pointerId, {
      clientX: e.clientX,
      clientY: e.clientY
    });
    
    // Set touch action to prevent page scrolling/zooming natively when we want to pan/draw
    if (wsDrawWithFinger || activePointers.size >= 2) {
      canvas.style.touchAction = 'none';
    } else {
      canvas.style.touchAction = 'auto';
    }
    
    if (activePointers.size === 1) {
      startDrawing(e);
    } else if (activePointers.size === 2) {
      // Cancel drawing if it was active
      if (wsIsDrawing) {
        ctx.closePath();
        wsIsDrawing = false;
      }
      
      const pointers = Array.from(activePointers.values());
      const p1 = pointers[0];
      const p2 = pointers[1];
      
      initialPinchDistance = Math.hypot(p2.clientX - p1.clientX, p2.clientY - p1.clientY);
      initialPinchZoom = worksheetZoom;
      initialPinchMidpoint = {
        x: (p1.clientX + p2.clientX) / 2,
        y: (p1.clientY + p2.clientY) / 2
      };
      
      if (wrapper) {
        initialScroll = {
          left: wrapper.scrollLeft,
          top: wrapper.scrollTop
        };
      }
    }
  };

  const handlePointerMove = (e) => {
    if (!activePointers.has(e.pointerId)) return;
    
    activePointers.set(e.pointerId, {
      clientX: e.clientX,
      clientY: e.clientY
    });
    
    if (activePointers.size === 1) {
      draw(e);
    } else if (activePointers.size === 2) {
      const pointers = Array.from(activePointers.values());
      const p1 = pointers[0];
      const p2 = pointers[1];
      
      // 1. Pinch to Zoom
      const currentDistance = Math.hypot(p2.clientX - p1.clientX, p2.clientY - p1.clientY);
      if (initialPinchDistance > 10 && currentDistance > 10) {
        const scaleFactor = currentDistance / initialPinchDistance;
        let newZoom = initialPinchZoom * scaleFactor;
        
        newZoom = Math.max(0.5, Math.min(2.5, newZoom));
        worksheetZoom = newZoom;
        
        const zoomLabel = document.getElementById('ws-zoom-label');
        if (zoomLabel) {
          zoomLabel.innerText = `${Math.round(worksheetZoom * 100)}%`;
        }
        resizeWorksheet();
      }
      
      // 2. Drag to Pan
      if (wrapper) {
        const currentMidpoint = {
          x: (p1.clientX + p2.clientX) / 2,
          y: (p1.clientY + p2.clientY) / 2
        };
        
        const dx = currentMidpoint.x - initialPinchMidpoint.x;
        const dy = currentMidpoint.y - initialPinchMidpoint.y;
        
        wrapper.scrollLeft = initialScroll.left - dx;
        wrapper.scrollTop = initialScroll.top - dy;
      }
    }
  };

  const handlePointerUp = (e) => {
    if (activePointers.has(e.pointerId)) {
      activePointers.delete(e.pointerId);
    }
    
    if (activePointers.size < 2) {
      initialPinchDistance = 0;
    }
    
    if (wsDrawWithFinger || activePointers.size >= 2) {
      canvas.style.touchAction = 'none';
    } else {
      canvas.style.touchAction = 'auto';
    }
    
    stopDrawing(e);
  };
  
  canvas.addEventListener('pointerdown', handlePointerDown);
  canvas.addEventListener('pointermove', handlePointerMove);
  canvas.addEventListener('pointerup', handlePointerUp);
  canvas.addEventListener('pointerleave', handlePointerUp);
  canvas.addEventListener('pointercancel', handlePointerUp);
}

function saveWorksheetDrawing() {
  const canvas = document.getElementById('worksheet-canvas');
  if (!canvas) return;
  const learnerGrade = getLearnerGrade();
  const key = `drawings_${learnerGrade}_w${currentWeek}_${currentLevel}_${currentSubject}_p${currentWorksheetPage}`;
  safeStorage.setItem(key, canvas.toDataURL());
}

function loadWorksheetDrawing() {
  const canvas = document.getElementById('worksheet-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const learnerGrade = getLearnerGrade();
  const key = `drawings_${learnerGrade}_w${currentWeek}_${currentLevel}_${currentSubject}_p${currentWorksheetPage}`;
  const dataURL = safeStorage.getItem(key);
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (dataURL) {
    const img = new Image();
    img.onload = () => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.drawImage(img, 0, 0);
    };
    img.src = dataURL;
  }
}

function undoWorksheetStroke() {
  const canvas = document.getElementById('worksheet-canvas');
  if (!canvas || wsHistory.length === 0) return;
  
  const ctx = canvas.getContext('2d');
  const previousState = wsHistory.pop();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'source-over';
  ctx.putImageData(previousState, 0, 0);
  
  saveWorksheetDrawing();
}

function clearWorksheetCanvas() {
  const canvas = document.getElementById('worksheet-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  // Save state before clearing
  if (wsHistory.length >= 15) {
    wsHistory.shift();
  }
  wsHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  saveWorksheetDrawing();
}

// ==========================================================================
// DAILY READING CONTROLLER
// ==========================================================================

function initDefaultReadingDay(data) {
  if (!data || !data.reading) return 'monday';
  const learnerGrade = getLearnerGrade();
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  for (let day of days) {
    if (safeStorage.getItem(`reading_${learnerGrade}_w${currentWeek}_${day}`) !== 'completed') {
      return day;
    }
  }
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const todayIndex = new Date().getDay();
  const todayName = daysOfWeek[todayIndex];
  if (data.reading[todayName]) {
    return todayName;
  }
  return 'monday';
}

function renderReadingView(data, qBody) {
  if (!data || !data.reading) {
    qBody.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <span style="font-size: 48px; display: block; margin-bottom: 15px;">📚</span>
        Daily Reading is not available for Week ${currentWeek} yet.
      </div>
    `;
    return;
  }
  
  if (!currentReadingDay) {
    currentReadingDay = initDefaultReadingDay(data);
  }
  
  const dayData = data.reading[currentReadingDay];
  if (!dayData) {
    qBody.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <span style="font-size: 48px; display: block; margin-bottom: 15px;">⚠️</span>
        Reading data for ${currentReadingDay} is missing.
      </div>
    `;
    return;
  }
  
  const totalSlides = dayData.slides.length;
  const slide = dayData.slides[currentReadingSlide];
  
  // Build Day Selector Calendar Bar
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  let daySelectorHTML = '<div class="day-selector-bar">';
  const learnerGrade = getLearnerGrade();
  days.forEach(d => {
    if (data.reading[d]) {
      const isCompleted = safeStorage.getItem(`reading_${learnerGrade}_w${currentWeek}_${d}`) === 'completed';
      const isActive = d === currentReadingDay;
      const isWeekend = (d === 'saturday' || d === 'sunday');
      const flag = isWeekend ? '🇵🇭' : '🇬🇧';
      const displayLabel = d.charAt(0).toUpperCase() + d.slice(1, 3) + ' ' + flag; // Mon 🇬🇧, Sat 🇵🇭, etc.
      daySelectorHTML += `
        <button class="day-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
                onclick="changeReadingDay('${d}')">
          ${displayLabel}${isCompleted ? ' ✓' : ''}
        </button>
      `;
    }
  });
  daySelectorHTML += '</div>';
  
  // Progress bar removed for daily reading
    const flipClass = slideTransitionDirection ? `flip-${slideTransitionDirection}` : '';
  slideTransitionDirection = null;

  // Render
  qBody.innerHTML = `
    <div class="reading-view-container">
      <div class="reading-toolbar">
        <span style="font-weight: 700; color: var(--accent); font-family: 'Outfit', sans-serif;">
          📖 ${dayData.type}: ${dayData.title}
        </span>
        <div class="study-timer-widget" id="study-timer">
          <button class="timer-control-btn" id="timer-toggle-btn" onclick="toggleStudyTimer()" style="color: ${timerRunning ? 'var(--correct)' : ''};">
            ⏱️ <span id="timer-display">${formatTime(timerSeconds)}</span>
          </button>
          <button class="timer-reset-btn" id="timer-reset-btn" onclick="resetStudyTimer()">🔄</button>
        </div>
      </div>
      
      ${daySelectorHTML}
      
      <div class="slide-flip-container" id="reading-swipe-container">
        <div class="slide-card-inner ${flipClass}">
          <div class="reading-slide-deck">
            <h3>${formatMarkdown(stripStoryPrefix(slide.title))}</h3>
            <p class="reading-text-body">${formatMarkdown(slide.text)}</p>
          </div>
        </div>
      </div>
      
      <div class="viewport-footer" id="reading-footer" style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
        <button class="slide-btn" id="reading-prev-btn" onclick="changeReadingSlide(-1)" ${currentReadingSlide === 0 ? 'disabled' : ''}>
          ← Previous
        </button>
        <span class="slide-indicator" style="font-weight: 600; color: var(--text-muted); font-size: 14px;">
          Slide ${currentReadingSlide + 1} of ${totalSlides}
        </span>
        ${currentReadingSlide === totalSlides - 1 ? `
          <button class="slide-btn" id="reading-complete-btn" onclick="completeReadingDay()" style="background: #10b981; color: white; border-color: transparent;">
            🎉 Complete
          </button>
        ` : `
          <button class="slide-btn" id="reading-next-btn" onclick="changeReadingSlide(1)">
            Next →
          </button>
        `}
      </div>
    </div>
  `;

  setupSwipeGestures(document.getElementById('reading-swipe-container'));
}
function changeReadingSlide(dir) {
  const activeReading = getActiveLevelData();
  if (!activeReading || !activeReading.reading || !currentReadingDay) return;
  
  const dayData = activeReading.reading[currentReadingDay];
  if (!dayData) return;
  
  const totalSlides = dayData.slides.length;
  const targetSlide = currentReadingSlide + dir;
  if (targetSlide >= 0 && targetSlide < totalSlides) {
    currentReadingSlide = targetSlide;
    slideTransitionDirection = dir > 0 ? 'next' : 'prev';
    renderCurrentView();
  }
}
function changeReadingDay(day) {
  currentReadingDay = day;
  currentReadingSlide = 0;
  renderCurrentView();
}

function completeReadingDay() {
  const learnerGrade = getLearnerGrade();
  const storageKey = `reading_${learnerGrade}_w${currentWeek}_${currentReadingDay}`;
  safeStorage.setItem(storageKey, 'completed');
  recordCompletion();
  
  playSFX(true);
  initConfetti();
  
  renderCurrentView();
}

// ==========================================================================
// PARENT & TEACHER PROGRESS DASHBOARD
// ==========================================================================

function showProgressDashboard() {
  currentMode = ''; // Clear active mode
  saveSessionState();
  
  // Clear active sidebar buttons
  clearAllActiveNavButtons();
  
  // Highlight dashboard button
  const dashBtn = document.getElementById('btn-dashboard');
  if (dashBtn) dashBtn.classList.add('active');
  
  // Set header
  document.getElementById('header-icon').innerText = '📊';
  document.getElementById('header-title').innerText = 'Progress Dashboard';
  
  const learnerGrade = getLearnerGrade();
  let gradeLabel = 'Grade 3';
  if (learnerGrade === 'g1') gradeLabel = 'Grade 1';
  else if (learnerGrade === 'g2') gradeLabel = 'Grade 2';
  
  document.getElementById('header-subtitle').innerText = `Learner Progress Report for ${currentLevel === 'core' ? gradeLabel : 'Grade 4-5'} Level`;
  
  // Hide translation toggle settings row representation in header (if it was there, now safe null check)
  const transToggleEl = document.getElementById('settings-trans-row');
  if (transToggleEl) transToggleEl.style.display = 'none';
  document.body.classList.remove('show-translation');
  const toggleEl = document.getElementById('settings-translation-toggle');
  if (toggleEl) toggleEl.checked = false;
  
  // Reset progress bar
  document.getElementById('progress-bar').style.width = '0%';
  document.getElementById('slide-num-label').style.display = 'none';
  document.getElementById('slide-mode-label').innerText = 'Reports';
  document.getElementById('viewport-footer').style.display = 'none';
  
  const qBody = document.getElementById('viewport-body');
  
  // Gather metrics
  const subjects = [
    { key: 'math', name: 'Mathematics', color: '#3b82f6' },
    { key: 'science', name: 'Science', color: '#10b981' },
    { key: 'english', name: 'English', color: '#a855f7' },
    { key: 'filipino', name: 'Filipino', color: '#f43f5e' },
    { key: 'makabansa', name: 'Araling Panlipunan', color: '#3b82f6' },
    { key: 'gmrc', name: 'GMRC', color: '#eab308' }
  ];
  
  // Determine dynamically how many weeks to display in the grid
  let maxWeekWithProgress = 1;
  for (let i = 0; i < safeStorage.length; i++) {
    const key = safeStorage.key(i);
    const match = key.match(/^(?:highscore|performance|checklist|drawings)_.*_w(\d+)_/);
    if (match) {
      const wNum = parseInt(match[1]);
      if (!isNaN(wNum) && wNum > maxWeekWithProgress && wNum <= 40) {
        maxWeekWithProgress = wNum;
      }
    }
  }
  const totalWeeks = Math.max(2, maxWeekWithProgress, currentWeek);

  let totalQuizzesAttempted = 0;
  let totalQuizScore = 0;
  let totalQuizMax = 0;
  let totalTasksCompleted = 0;
  let priorityReviewItems = [];
  
  let subjectsGradesData = {};
  
  subjects.forEach(sub => {
    subjectsGradesData[sub.key] = [];
    
    for (let w = 1; w <= totalWeeks; w++) {
      const quizKey = `highscore_${learnerGrade}_w${w}_sses_${sub.key}_${currentLevel}_quiz`;
      const challengeKey = `highscore_${learnerGrade}_w${w}_sses_${sub.key}_${currentLevel}_challenge`;
      const perfKey = `performance_${learnerGrade}_w${w}_sses_${sub.key}_${currentLevel}`;
      
      const quizScore = safeStorage.getItem(quizKey);
      const challengeScore = safeStorage.getItem(challengeKey);
      const perfScore = safeStorage.getItem(perfKey);
      
      const record = {
        week: w,
        quiz: quizScore !== null ? parseInt(quizScore) : null,
        challenge: challengeScore !== null ? parseInt(challengeScore) : null,
        performance: perfScore !== null ? true : false
      };
      
      subjectsGradesData[sub.key].push(record);
      
      if (record.quiz !== null) {
        totalQuizzesAttempted++;
        totalQuizScore += record.quiz;
        totalQuizMax += 25;
        
        // Flag priority review if score is low
        if (record.quiz < QUIZ_PASSING_SCORE) {
          priorityReviewItems.push({
            subject: sub.name,
            color: sub.color,
            week: w,
            score: record.quiz,
            max: 25,
            reason: `Quiz score below passing (${Math.round(QUIZ_PASSING_SCORE/25*100)}%)`
          });
        }
      }
      
      if (record.challenge !== null) {
        if (record.challenge < CHALLENGE_PASSING_SCORE) {
          priorityReviewItems.push({
            subject: sub.name,
            color: sub.color,
            week: w,
            score: record.challenge,
            max: 5,
            reason: `Challenge score below passing (${Math.round(CHALLENGE_PASSING_SCORE/5*100)}%)`
          });
        }
      }
      
      if (record.performance) {
        totalTasksCompleted++;
      }
    }
  });
  
  const averagePercentage = totalQuizMax > 0 ? Math.round((totalQuizScore / totalQuizMax) * 100) : 0;
  
  // Render dashboard layout
  let prioritySectionHTML = '';
  if (priorityReviewItems.length > 0) {
    let itemsHTML = '';
    priorityReviewItems.forEach(item => {
      itemsHTML += `
        <div class="priority-item">
          <div>
            <span class="priority-subject-badge" style="background: ${item.color};">${item.subject}</span>
            <span style="margin-left: 10px; font-weight: 600;">Week ${item.week}</span>
          </div>
          <div class="priority-reason">${item.reason} (${item.score}/${item.max})</div>
        </div>
      `;
    });
    
    prioritySectionHTML = `
      <div class="priority-review-container">
        <div class="priority-title">⚠️ Priority Review Required</div>
        <div class="priority-list">${itemsHTML}</div>
      </div>
    `;
  } else {
    prioritySectionHTML = `
      <div class="priority-review-container" style="background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.2); display: flex; align-items: center; gap: 16px;">
        <div style="flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: rgba(16, 185, 129, 0.08); border-radius: 50%; border: 2px dashed var(--correct); width: 65px; height: 65px;">
          <img src="${getMascotImg()}" class="tobi-games-img bouncing" alt="Matteo" style="width: 50px; height: 50px; object-fit: contain;">
        </div>
        <div>
          <div class="priority-title" style="color: var(--correct); margin-bottom: 4px;">✨ Great Job!</div>
          <div style="font-size: 14px; color: var(--text-muted); line-height: 1.4;">No subjects currently require priority review. All scores meet target passing levels. Keep it up!</div>
        </div>
      </div>
    `;
  }
  
  // Build grades table
  let tableRowsHTML = '';
  subjects.forEach(sub => {
    let colsHTML = '';
    for (let w = 1; w <= totalWeeks; w++) {
      const record = subjectsGradesData[sub.key][w - 1];
      let badgeHTML = '';
      if (record.quiz !== null) {
        const isPassed = record.quiz >= QUIZ_PASSING_SCORE;
        badgeHTML += `
          <div class="score-badge ${isPassed ? 'passed' : 'low'}">
            Q: ${record.quiz}/25
          </div>
        `;
      } else {
        badgeHTML += `<div class="score-badge pending">-</div>`;
      }
      
      if (record.challenge !== null) {
        const isPassed = record.challenge >= CHALLENGE_PASSING_SCORE;
        badgeHTML += `
          <div class="score-badge ${isPassed ? 'passed' : 'low'}" style="margin-left: 4px;">
            C: ${record.challenge}/5
          </div>
        `;
      }
      
      if (record.performance) {
        badgeHTML += `
          <div class="score-badge passed" style="margin-left: 4px; padding: 4px 6px; font-size:10px;">
            📋 Task
          </div>
        `;
      }
      
      colsHTML += `<td><div style="display:flex; align-items:center;">${badgeHTML}</div></td>`;
    }
    
    tableRowsHTML += `
      <tr>
        <td class="subject-cell" style="border-left: 4px solid ${sub.color};">${sub.name}</td>
        ${colsHTML}
      </tr>
    `;
  });

  // Add Daily Reading row at the bottom of the table
  let readingRowCols = '';
  for (let w = 1; w <= totalWeeks; w++) {
    let completedCount = 0;
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    days.forEach(day => {
      if (safeStorage.getItem(`reading_${learnerGrade}_w${w}_${day}`) === 'completed') {
        completedCount++;
      }
    });
    
    let badgeHTML = '';
    if (completedCount > 0) {
      const isAllDone = completedCount === 7;
      badgeHTML = `
        <div class="score-badge ${isAllDone ? 'passed' : 'pending'}" style="padding: 4px 8px;">
          Read: ${completedCount}/7
        </div>
      `;
    } else {
      badgeHTML = `<div class="score-badge pending">-</div>`;
    }
    readingRowCols += `<td><div style="display:flex; align-items:center;">${badgeHTML}</div></td>`;
  }
  tableRowsHTML += `
    <tr>
      <td class="subject-cell" style="border-left: 4px solid var(--accent);">📚 Daily Reading</td>
      ${readingRowCols}
    </tr>
  `;

  // Build table headers dynamically based on totalWeeks
  let headerColsHTML = '<th>Subject</th>';
  for (let w = 1; w <= totalWeeks; w++) {
    headerColsHTML += `<th>Week ${w}</th>`;
  }
  
  qBody.innerHTML = `
    <div class="dashboard-container">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value primary">${averagePercentage}%</div>
          <div class="stat-label">Average Score</div>
        </div>
        <div class="stat-card">
          <div class="stat-value success">${totalQuizzesAttempted}</div>
          <div class="stat-label">Quizzes Taken</div>
        </div>
        <div class="stat-card">
          <div class="stat-value warning">${totalTasksCompleted}</div>
          <div class="stat-label">Tasks Done</div>
        </div>
        <div class="stat-card">
          <div class="stat-value danger">🔥 ${getActiveStreak()}</div>
          <div class="stat-label">Daily Streak</div>
        </div>
      </div>
      
      ${prioritySectionHTML}
      
      <div>
        <div class="dashboard-section-title">Academic Record Grid</div>
        <div class="dashboard-table-wrapper">
          <table class="dashboard-table">
            <thead>
              <tr>
                ${headerColsHTML}
              </tr>
            </thead>
            <tbody>
              ${tableRowsHTML}
            </tbody>
          </table>
        </div>
      </div>
      
      <button class="clear-data-btn" onclick="confirmClearAllProgress()">
        🗑️ Clear All Student Progress Records
      </button>
    </div>
  `;
}

function confirmClearAllProgress() {
  showPinModal(() => {
    const firstConfirm = confirm("⚠️ Are you sure you want to clear all student progress? This will delete all quiz scores, daily reading records, checklist completions, and drawing progress. This action is permanent and NOT recoverable!");
    if (!firstConfirm) return;
    
    const secondConfirm = confirm("🚨 DOUBLE CONFIRMATION REQUIRED:\n\nAre you absolutely sure you want to delete all student records? This data cannot be recovered after clearing.");
    if (!secondConfirm) return;
    
    // Clear high scores, drawings, readings, and streaks safely by querying keys by index
    const keysToClear = [];
    for (let i = 0; i < safeStorage.length; i++) {
      const key = safeStorage.key(i);
      if (key && (
        key.startsWith('highscore_') || 
        key.startsWith('performance_') || 
        key.startsWith('drawings_') || 
        key.startsWith('reading_') ||
        key.startsWith('streak_') ||
        key.startsWith('checklist_')
      )) {
        keysToClear.push(key);
      }
    }
    keysToClear.forEach(key => {
      safeStorage.removeItem(key);
    });
    alert("All student progress has been cleared.");
    
    closeSettings();
    showProgressDashboard();
  });
}

// ==========================================================================
// WELCOME DASHBOARD
// ==========================================================================

// setMode(mode) is defined above

function renderWelcomeDashboard() {
  currentMode = 'home';
  saveSessionState();

  // Update header
  const nickname = safeStorage.getItem('session_nickname') || 'Matteo';
  const mascotName = getMascotName();
  document.getElementById('header-icon').innerText = '🏠';
  document.getElementById('header-title').innerText = 'Welcome Dashboard';
  document.getElementById('header-subtitle').innerText = `Hi ${nickname}! Here\'s your study plan.`;

  // Hide slide footer, progress bar
  document.getElementById('viewport-footer').style.display = 'none';
  document.getElementById('progress-bar').style.width = '0%';
  document.getElementById('slide-num-label').style.display = 'none';
  document.getElementById('slide-mode-label').innerText = 'Home';

  // Update sidebar active states
  clearAllActiveNavButtons();
  const homeTab = document.getElementById('tab-home');
  if (homeTab) homeTab.classList.add('active');

  const qBody = document.getElementById('viewport-body');

  // --- Build dashboard sections ---
  const grade = getLearnerGrade();
  const subjects = [
    { key: 'math',      icon: '🔢', name: 'Mathematics' },
    { key: 'science',   icon: '🔬', name: 'Science' },
    { key: 'english',   icon: '🙋‍♂️', name: 'English' },
    { key: 'filipino',  icon: '🇵🇭', name: 'Filipino' },
    { key: 'makabansa', icon: '🏘️',  name: 'Makabansa' },
    { key: 'gmrc',      icon: '🧘‍♂️', name: 'GMRC' }
  ];
  const modes = ['study','quiz','challenge','performance','reading','worksheet'];
  const modeIcons = { study:'📖', quiz:'✍️', challenge:'🔥', performance:'📋', reading:'📚', worksheet:'📝' };

  // --- SECTION 1: Greeting ---
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const greetEmoji = hour < 12 ? '☀️' : hour < 17 ? '🌤️' : '🌙';
  const dateStr = new Date().toLocaleDateString('en-PH', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  const streak = getActiveStreak();
  const academicWeek = getTodayAcademicWeek();

  // --- SECTION 2: Task List for current week ---
  const data = window.CURRENT_WEEK_DATA;
  const weekTopic = data ? (data.math ? data.math.title : `Week ${currentWeek}`) : `Week ${currentWeek}`;

  let taskCardsHTML = '';
  subjects.forEach(sub => {
    let pillsHTML = '';
    modes.forEach(m => {
      const status = getTaskStatus(currentWeek, sub.key, m);
      const statusIcon = status === 'done' ? '✅' : status === 'inprogress' ? '🔄' : '⬜';
      const statusClass = status === 'done' ? 'pill-done' : status === 'inprogress' ? 'pill-progress' : 'pill-todo';
      pillsHTML += `
        <button class="task-pill ${statusClass}"
          onclick="launchTask('${sub.key}','${m}')">
          ${modeIcons[m]} ${m.charAt(0).toUpperCase()+m.slice(1)} ${statusIcon}
        </button>
      `;
    });

    const doneCount = modes.filter(m => isTaskComplete(currentWeek, sub.key, m)).length;
    const pct = Math.round((doneCount / modes.length) * 100);

    taskCardsHTML += `
      <div class="home-subject-card subject-border-${sub.key}">
        <div class="home-subject-header">
          <span class="home-subject-icon">${sub.icon}</span>
          <span class="home-subject-name">${sub.name}</span>
          <span class="home-subject-pct">${pct}%</span>
        </div>
        <div class="home-pill-row">${pillsHTML}</div>
        <div class="home-mini-bar-wrap">
          <div class="home-mini-bar" style="width:${pct}%; background: var(--sub-${sub.key});"></div>
        </div>
      </div>
    `;
  });

  // --- SECTION 3: Review Alerts (max 2) ---
  let reviewAlertsHTML = '';
  let reviewCount = 0;
  for (let w = currentWeek - 1; w >= Math.max(1, currentWeek - 4) && reviewCount < 2; w--) {
    for (let sub of subjects) {
      if (reviewCount >= 2) break;
      const quizScore = safeStorage.getItem(`highscore_${grade}_w${w}_sses_${sub.key}_${currentLevel}_quiz`);
      if (quizScore !== null) {
        const score = parseInt(quizScore);
        const pct = Math.round((score / 25) * 100);
        if (pct < 60) {
          const severity = pct < 40 ? 'alert-critical' : 'alert-moderate';
          reviewAlertsHTML += `
            <div class="review-alert-card ${severity}">
              <span>${pct < 40 ? '🔴' : '🟡'} ${sub.icon} <strong>${sub.name}</strong> — Week ${w} Quiz: ${score}/25 (${pct}%)</span>
              <button class="review-alert-btn" onclick="launchTask('${sub.key}','study',${w})">
                📖 Review Week ${w}
              </button>
            </div>
          `;
          reviewCount++;
        }
      }
    }
  }

  // --- SECTION 4: Advanced Week Suggestion ---
  const allDone = subjects.every(sub =>
    modes.every(m => isTaskComplete(currentWeek, sub.key, m))
  );
  const advancedSuggestionHTML = allDone && currentWeek < 40 ? `
    <div class="home-advanced-card">
      <span>🌟 You finished everything this week! Want a head start?</span>
      <button class="home-advanced-btn" onclick="launchAdvancedPreview(${currentWeek + 1})">
        Preview Week ${currentWeek + 1} — Grade 4-5 Mode
      </button>
    </div>
  ` : '';

  // --- SECTION 5: Catch-up (previous weeks, max 2) ---
  let catchupHTML = '';
  let catchupCount = 0;
  const catchupItems = [];
  for (let w = currentWeek - 1; w >= Math.max(1, currentWeek - 2) && catchupCount < 2; w--) {
    for (let sub of subjects) {
      for (let m of modes) {
        if (catchupCount >= 2) break;
        const dismissed = safeStorage.getItem(`catchup_dismissed_${grade}_w${w}_${sub.key}_${m}`);
        if (!dismissed && !isTaskComplete(w, sub.key, m)) {
          catchupItems.push({ w, sub, m });
          catchupCount++;
        }
      }
    }
  }
  if (catchupItems.length > 0) {
    const itemsHTML = catchupItems.map(item => `
      <div class="catchup-item">
        <span>📌 Week ${item.w} ${item.sub.icon} ${item.sub.name} — ${modeIcons[item.m]} ${item.m}</span>
        <div style="display:flex; gap:6px; margin-top:6px;">
          <button class="catchup-go-btn" onclick="launchTask('${item.sub.key}','${item.m}',${item.w})">Go</button>
          <button class="catchup-dismiss-btn"
            onclick="dismissCatchup('${grade}',${item.w},'${item.sub.key}','${item.m}')">Dismiss</button>
        </div>
      </div>
    `).join('');
    catchupHTML = `
      <details class="catchup-section">
        <summary>⏮️ Catch-up Tasks (${catchupItems.length})</summary>
        ${itemsHTML}
      </details>
    `;
  }

  // --- SECTION 6: Weekly Progress Snapshot ---
  const totalTasks = subjects.length * modes.length;
  const completedTasks = subjects.reduce((acc, sub) =>
    acc + modes.filter(m => isTaskComplete(currentWeek, sub.key, m)).length, 0);
  const overallPct = Math.round((completedTasks / totalTasks) * 100);

  const subjectBarsHTML = subjects.map(sub => {
    const done = modes.filter(m => isTaskComplete(currentWeek, sub.key, m)).length;
    const p = Math.round((done / modes.length) * 100);
    return `
      <div class="snapshot-row">
        <span class="snapshot-label">${sub.icon} ${sub.name}</span>
        <div class="snapshot-bar-wrap">
          <div class="snapshot-bar-fill" style="width:${p}%; background:var(--sub-${sub.key});"></div>
        </div>
        <span class="snapshot-pct">${p}%</span>
      </div>
    `;
  }).join('');

  // --- SECTION 7: Badges Strip ---
  const earned = getEarnedBadges();
  const earnedIds = earned.map(b => b.id);
  const badgesHTML = BADGE_DEFINITIONS.map(b => {
    const isEarned = earnedIds.includes(b.id);
    return `
      <div class="badge-chip ${isEarned ? 'badge-earned' : 'badge-locked'}"
           title="${b.desc}">
        <span class="badge-icon">${isEarned ? b.icon : '🔒'}</span>
        <span class="badge-label">${b.name}</span>
      </div>
    `;
  }).join('');

  // --- SECTION 8: Weekly Schedule Preview ---
  const dayNames = ['monday','tuesday','wednesday','thursday','friday'];
  const dayLabels = ['Mon','Tue','Wed','Thu','Fri'];
  const schedule = getScheduleConfig();
  const todayDayName = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][new Date().getDay()];

  const scheduleCols = dayNames.map((d, i) => {
    const subs = schedule[d] || [];
    const isToday = d === todayDayName;
    const shortNames = { math: 'Math', science: 'Sci', english: 'Eng', filipino: 'Fil', makabansa: 'Maka', gmrc: 'GMRC' };
    return `
      <div class="sched-col ${isToday ? 'sched-today' : ''}">
        <div class="sched-day-label">${dayLabels[i]}${isToday ? ' 📍' : ''}</div>
        ${subs.map(s => {
          const subObj = subjects.find(x => x.key === s);
          const label = subObj ? `${subObj.icon} ${shortNames[s] || subObj.name}` : '';
          return subObj ? `<div class="sched-chip" style="background:var(--sub-${s})20; color:var(--sub-${s}); border:1px solid var(--sub-${s})40;">${label}</div>` : '';
        }).join('')}
      </div>
    `;
  }).join('');

  // --- SECTION 9: Notifications ---
  const notifItems = [];
  // Check incomplete quizzes
  subjects.forEach(sub => {
    const prog = getQuizProgress(currentWeek, sub.key);
    if (prog && !isTaskComplete(currentWeek, sub.key, prog.mode)) {
      notifItems.push(`🔔 You have an unfinished ${prog.mode} for ${sub.name} — Q${prog.questionIndex + 1} of ${prog.mode === 'quiz' ? 25 : 5} (Score: ${prog.score})`);
    }
  });
  // Streak at risk
  const lastDate = safeStorage.getItem('streak_last_date');
  const todayStr = new Date().toLocaleDateString('en-CA');
  if (streak > 0 && lastDate !== todayStr) {
    notifItems.push(`⚡ Complete a task today to keep your 🔥 ${streak}-day streak!`);
  }

  const notifHTML = notifItems.length > 0 ? `
    <div class="notif-panel">
      <div class="notif-title">🔔 Reminders</div>
      ${notifItems.map(n => `<div class="notif-item">${n}</div>`).join('')}
    </div>
  ` : '';

  // --- ASSEMBLE ---
  qBody.innerHTML = `
    <div class="welcome-dashboard">

      <!-- Week Alignment Banner (hidden by default, shown by checkDateWeekAlignment) -->
      <div id="week-alignment-banner" class="alignment-banner" style="display:none;"></div>

      <!-- Greeting -->
      <div class="home-greeting-card" style="display: flex; justify-content: space-between; align-items: stretch; position: relative; gap: 16px; padding: 20px;">
        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 4px;">
          <div class="home-greeting-main" style="margin-bottom: 0;">${greeting}, ${nickname}! ${greetEmoji}</div>
          <div class="home-greeting-sub">${dateStr}</div>
          <div class="home-greeting-meta" style="margin-top: 2px;">
            <span class="home-week-badge">📅 Week ${currentWeek}</span>
            ${streak > 0 ? `<span class="home-streak-badge">🔥 ${streak}-day streak</span>` : ''}
          </div>
          <div class="home-overall-progress" style="margin-top: 8px;">
            <div class="home-overall-bar-wrap">
              <div class="home-overall-bar" style="width:${overallPct}%"></div>
            </div>
            <span class="home-overall-label">Week ${currentWeek}: ${completedTasks}/${totalTasks} tasks complete (${overallPct}%)</span>
          </div>
        </div>
        <div class="home-mascot-interactive-panel" style="display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; position: relative; width: 90px; flex-shrink: 0; transition: transform 0.2s ease;" onclick="interactMascotDashboard()" title="Talk to ${mascotName}">
          <img src="${getMascotImg()}" class="tobi-games-img bouncing" alt="${mascotName}" style="height: 90px; width: 90px; object-fit: contain;">
        </div>
      </div>

      ${notifHTML}
      ${reviewAlertsHTML ? `<div class="home-section-title">⚠️ Review Needed</div>${reviewAlertsHTML}` : ''}
      ${catchupHTML}
      ${advancedSuggestionHTML}

      <!-- This Week Tasks -->
      <div class="home-section-title">📋 Week ${currentWeek} Tasks</div>
      <div class="home-task-cards">${taskCardsHTML}</div>

      <!-- Progress Snapshot -->
      <div class="home-section-title">📊 Progress Snapshot</div>
      <div class="snapshot-panel">
        ${subjectBarsHTML}
        <button class="home-link-btn" onclick="showProgressDashboard()">View Full Progress Dashboard →</button>
      </div>

      <!-- Weekly Schedule -->
      <div class="home-section-title">📅 This Week's Schedule</div>
      <div class="sched-grid">${scheduleCols}</div>
      <button class="home-link-btn" onclick="openScheduleSettings()">⚙️ Edit Schedule</button>

      <!-- Badges -->
      <div class="home-section-title">🏅 Badges & Achievements</div>
      <div class="badge-strip">${badgesHTML}</div>

    </div>
  `;

  closeSidebar();
  checkDateWeekAlignment();
}

function interactMascotDashboard() {
  const nickname = safeStorage.getItem('session_nickname') || 'Matteo';
  const mascotName = getMascotName();
  const modal = document.getElementById('mascot-interactive-modal');
  const img = document.getElementById('dashboard-mascot-modal-img');
  const speech = document.getElementById('dashboard-mascot-modal-speech');
  if (!modal || !img || !speech) return;

  img.src = getMascotImg();

  // Pick a random motivational message or greeting
  const messages = [
    `Hi ${nickname}! 🦉 Ready to learn something amazing today? What would you like to do?`,
    `Hello ${nickname}! 🌟 Remember, practice makes progress. Where should we start?`,
    `Hey ${nickname}! 🔥 Your study streak is looking awesome! Let's keep it up!`,
    `Hi ${nickname}! 🎯 Set a small goal and crush it today! Choose a quick action below.`,
    `Hey ${nickname}! 🚀 You are doing great! Let's explore some subjects or play games!`
  ];
  const randMsg = messages[Math.floor(Math.random() * messages.length)];
  speech.innerHTML = `"${randMsg}"`;

  modal.style.display = 'flex';
}

function closeMascotInteractiveModal() {
  const modal = document.getElementById('mascot-interactive-modal');
  if (modal) modal.style.display = 'none';
}

function launchDashboardTask(target, subMode) {
  closeMascotInteractiveModal();
  if (target === 'games') {
    setMode('games');
  } else if (target === 'progress') {
    showProgressDashboard();
  } else {
    launchTask(target, subMode);
  }
}

function launchTask(subject, mode, week) {
  wsShowAnswers = false;
  if (week && week !== currentWeek) {
    currentWeek = week;
    const select = document.getElementById('week-select');
    if (select) select.value = week;
    loadWeekData(week);
    setTimeout(() => { launchTask(subject, mode); }, 300);
    return;
  }
  currentSubject = subject;
  currentMode = mode;
  currentSlideIndex = 0;
  currentQuestionIndex = 0;
  quizScore = 0;
  wrongAnswersLog = [];

  // Update subject button active state
  document.querySelectorAll('.subject-buttons-list .nav-btn').forEach(btn => btn.classList.remove('active'));
  const subBtn = document.getElementById(`btn-${subject}`);
  if (subBtn) subBtn.classList.add('active');

  // Update mode tab active state
  document.querySelectorAll('.mode-tab-btn').forEach(btn => btn.classList.remove('active'));
  const modeTab = document.getElementById(`tab-${mode}`);
  if (modeTab) modeTab.classList.add('active');

  // Restore subject header
  const subjectMeta = {
    math:      { icon: '🔢', name: 'Mathematics' },
    science:   { icon: '🔬', name: 'Science' },
    english:   { icon: '🙋‍♂️', name: 'English' },
    filipino:  { icon: '🇵🇭', name: 'Filipino' },
    makabansa: { icon: '🏘️',  name: 'Makabansa' },
    gmrc:      { icon: '🧘‍♂️', name: 'GMRC' }
  };
  const meta = subjectMeta[subject] || { icon: '📚', name: subject };
  document.getElementById('header-icon').innerText = meta.icon;
  document.getElementById('header-title').innerText = meta.name;

  // Show slide footer for study mode
  const footer = document.getElementById('viewport-footer');
  if (footer) footer.style.display = (mode === 'study') ? 'flex' : 'none';
  document.getElementById('slide-num-label').style.display = 'inline';

  saveSessionState();
  renderCurrentView();
  closeSidebar();
}

function launchAdvancedPreview(week) {
  setLevel('advanced');
  currentWeek = week;
  const select = document.getElementById('week-select');
  if (select) select.value = week;
  loadWeekData(week);
  setTimeout(() => {
    currentSubject = 'math';
    currentMode = 'study';
    renderCurrentView();
  }, 300);
}

function dismissCatchup(grade, week, subject, mode) {
  safeStorage.setItem(`catchup_dismissed_${grade}_w${week}_${subject}_${mode}`, 'true');
  renderWelcomeDashboard();
}

// ==========================================================================
// PARENTS PIN SECURITY & PARENTS DASHBOARD
// ==========================================================================

function tryOpenParentDashboard() {
  closeSidebar();
  if (isParentUnlocked) {
    setMode('parents');
  } else {
    showPinModal(() => {
      setMode('parents');
    });
  }
}

function showPinModal(callback) {
  onPinSuccessCallback = callback || null;
  const modal = document.getElementById('parents-pin-modal');
  if (modal) {
    enteredPinBuffer = '';
    updatePinDots();
    modal.style.display = 'flex';
  }
}

function closePinModal() {
  const modal = document.getElementById('parents-pin-modal');
  if (modal) {
    modal.style.display = 'none';
    enteredPinBuffer = '';
    onPinSuccessCallback = null;
  }
}

function updatePinDots() {
  const dots = document.querySelectorAll('#parents-pin-modal .pin-dot');
  dots.forEach((dot, idx) => {
    if (idx < enteredPinBuffer.length) {
      dot.classList.add('filled');
    } else {
      dot.classList.remove('filled');
    }
  });
}

function pressPinKey(num) {
  if (enteredPinBuffer.length < 4) {
    enteredPinBuffer += num;
    updatePinDots();
  }
  
  if (enteredPinBuffer.length === 4) {
    // Wait slightly to let the last dot animate, then validate
    setTimeout(() => {
      validateEnteredPin(enteredPinBuffer);
    }, 150);
  }
}

function clearPin() {
  enteredPinBuffer = '';
  updatePinDots();
}

function validateEnteredPin(pin) {
  const savedPin = safeStorage.getItem('parent_pin') || '0000';
  if (pin === savedPin) {
    isParentUnlocked = true;
    const callback = onPinSuccessCallback;
    closePinModal();
    if (callback) {
      callback();
    } else {
      setMode('parents');
    }
  } else {
    // Incorrect PIN
    const card = document.querySelector('#parents-pin-modal .pin-card');
    if (card) {
      card.classList.add('shake');
      setTimeout(() => card.classList.remove('shake'), 400);
    }
    playSFX(false);
    alert("Incorrect Parent PIN. Please try again.");
    clearPin();
  }
}

function handleForgotPin(event) {
  if (event) event.preventDefault();
  
  // Math Challenge Parental Gate
  const num1 = Math.floor(Math.random() * 9) + 11; // 11 to 19
  const num2 = Math.floor(Math.random() * 4) + 6;  // 6 to 9
  const correctAnswer = num1 * num2;
  
  const response = prompt(`🔑 Parental Gate Recovery:\nSolve this multiplication problem to prove you are an adult and reset the PIN to '0000':\n\nWhat is ${num1} × ${num2}?`);
  
  if (response === null) return; // cancelled
  
  if (parseInt(response.trim()) === correctAnswer) {
    safeStorage.setItem('parent_pin', '0000');
    alert("Verification successful!\nYour Parent PIN has been reset to the default '0000'.");
    clearPin();
  } else {
    alert("Incorrect answer. PIN was not reset.");
  }
}

function getActiveLearningTimeLast7Days() {
  const learningTimeByDay = [];
  let totalSecs = 0;
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
    const key = `study_time_seconds_${dateStr}`;
    const secs = parseInt(safeStorage.getItem(key) || '0');
    totalSecs += secs;
    learningTimeByDay.push({
      dateStr: dateStr,
      dayName: dayName,
      mins: Math.round(secs / 60)
    });
  }
  return {
    dailyList: learningTimeByDay,
    totalMins: Math.round(totalSecs / 60)
  };
}

function parentsCompleteWorksheet(wNum, subjectKey) {
  const grade = getLearnerGrade();
  const storageKey = `worksheet_${grade}_w${wNum}_sses_${subjectKey}_${currentLevel}_completed`;
  safeStorage.setItem(storageKey, 'true');
  playSFX(true);
  initConfetti();
  renderParentDashboard();
}

function parentsResetWorksheet(wNum, subjectKey) {
  const grade = getLearnerGrade();
  const storageKey = `worksheet_${grade}_w${wNum}_sses_${subjectKey}_${currentLevel}_completed`;
  safeStorage.removeItem(storageKey);
  renderParentDashboard();
}

function launchRemediation(subjectKey, weekNum) {
  currentWeek = weekNum;
  const select = document.getElementById('week-select');
  if (select) select.value = weekNum;
  loadWeekData(weekNum);
  setTimeout(() => {
    currentSubject = subjectKey;
    currentMode = 'study';
    renderCurrentView();
  }, 300);
}

function renderParentDashboard() {
  currentMode = 'parents';
  saveSessionState();
  
  // Set header
  document.getElementById('header-icon').innerText = '👨‍👩‍👦';
  document.getElementById('header-title').innerText = "Parent's Dashboard";
  document.getElementById('header-subtitle').innerText = 'Secure dashboard for progress tracking and parental oversight';
  
  // Reset UI elements
  document.getElementById('viewport-footer').style.display = 'none';
  document.getElementById('progress-bar').style.width = '0%';
  document.getElementById('slide-num-label').style.display = 'none';
  document.getElementById('slide-mode-label').innerText = 'Parents';
  
  // Highlight Parent's Dashboard button
  clearAllActiveNavButtons();
  const parentsBtn = document.getElementById('btn-parents-dashboard');
  if (parentsBtn) parentsBtn.classList.add('active');

  const qBody = document.getElementById('viewport-body');
  if (!qBody) return;

  const learnerGrade = getLearnerGrade();
  const nickname = safeStorage.getItem('session_nickname') || 'Matteo';
  const streak = getActiveStreak();
  const timeLog = getActiveLearningTimeLast7Days();
  
  // 1. Gather all mistakes for remediation
  const remediationItems = [];
  const subjectsConfig = {
    math: { name: 'Mathematics', color: 'var(--accent)' },
    science: { name: 'Science', color: '#10b981' },
    english: { name: 'English', color: '#a855f7' },
    filipino: { name: 'Filipino', color: '#f43f5e' },
    makabansa: { name: 'Makabansa', color: '#3b82f6' },
    gmrc: { name: 'GMRC', color: '#eab308' }
  };

  // Find all mistake keys in safeStorage
  for (let i = 0; i < safeStorage.length; i++) {
    const key = safeStorage.key(i);
    const match = key.match(/^mistakes_([a-z0-9]+)_w(\d+)_sses_([a-z]+)_([a-z]+)_(quiz|challenge)$/);
    if (match) {
      const wNum = parseInt(match[2]);
      const subKey = match[3];
      const modeKey = match[5];
      try {
        const mistakesList = JSON.parse(safeStorage.getItem(key) || '[]');
        if (mistakesList.length > 0) {
          remediationItems.push({
            subjectKey: subKey,
            subjectName: subjectsConfig[subKey] ? subjectsConfig[subKey].name : subKey.toUpperCase(),
            color: subjectsConfig[subKey] ? subjectsConfig[subKey].color : '#64748b',
            week: wNum,
            mode: modeKey,
            count: mistakesList.length,
            key: key
          });
        }
      } catch (e) {
        console.error("Error parsing mistakes key", key, e);
      }
    }
  }

  // 2. Gather subject mastery statistics
  const masteryScores = [];
  const subjectsKeys = ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc'];
  let overallSum = 0;
  let overallMax = 0;
  
  // Calculate average score per subject
  subjectsKeys.forEach(sub => {
    let quizSum = 0;
    let quizCount = 0;
    
    // We check all weeks (up to 40)
    for (let w = 1; w <= 40; w++) {
      const quizKey = `highscore_${learnerGrade}_w${w}_sses_${sub}_${currentLevel}_quiz`;
      const val = safeStorage.getItem(quizKey);
      if (val !== null) {
        quizSum += parseInt(val);
        quizCount++;
      }
    }
    
    const pct = quizCount > 0 ? Math.round((quizSum / (quizCount * 25)) * 100) : 0;
    if (quizCount > 0) {
      overallSum += quizSum;
      overallMax += (quizCount * 25);
    }
    masteryScores.push({
      key: sub,
      name: subjectsConfig[sub].name,
      color: subjectsConfig[sub].color,
      percent: pct,
      attempted: quizCount > 0
    });
  });

  const overallAverage = overallMax > 0 ? Math.round((overallSum / overallMax) * 100) : 0;

  // 3. Gather Worksheets checklist for current week
  let worksheetsHTML = '';
  subjectsKeys.forEach(sub => {
    const wsKey = `worksheet_${learnerGrade}_w${currentWeek}_sses_${sub}_${currentLevel}_completed`;
    const isCompleted = safeStorage.getItem(wsKey) === 'true';
    worksheetsHTML += `
      <div class="parents-worksheet-item">
        <div>
          <span style="font-weight:600;">${subjectsConfig[sub].name}</span>
          <span style="font-size:11px; color:var(--text-muted); margin-left:6px;">Week ${currentWeek}</span>
        </div>
        <div class="parents-worksheet-actions">
          ${isCompleted 
            ? `<button class="parents-action-btn complete" onclick="parentsResetWorksheet(${currentWeek}, '${sub}')">✅ Approved</button>`
            : `<button class="parents-action-btn" onclick="parentsCompleteWorksheet(${currentWeek}, '${sub}')">✏️ Approve</button>`
          }
        </div>
      </div>
    `;
  });

  // Compile layout
  let html = `
    <div class="parents-dashboard-container">
      

      <!-- Greeting and KPI cards -->
      <div class="parents-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
        
        <div class="parents-section-card" style="text-align: center; padding: 20px;">
          <div style="font-size: 32px; margin-bottom: 6px;">🔥</div>
          <div style="font-size: 24px; font-weight: 800; color: var(--accent);">${streak} days</div>
          <div style="font-size: 12px; color: var(--text-muted); font-weight:600; text-transform: uppercase;">Study Streak</div>
        </div>

        <div class="parents-section-card" style="text-align: center; padding: 20px;">
          <div style="font-size: 32px; margin-bottom: 6px;">⏱️</div>
          <div style="font-size: 24px; font-weight: 800; color: #10b981;">${timeLog.totalMins} mins</div>
          <div style="font-size: 12px; color: var(--text-muted); font-weight:600; text-transform: uppercase;">Time Logged (7d)</div>
        </div>

        <div class="parents-section-card" style="text-align: center; padding: 20px;">
          <div style="font-size: 32px; margin-bottom: 6px;">🎓</div>
          <div style="font-size: 24px; font-weight: 800; color: #a855f7;">${overallAverage > 0 ? overallAverage + '%' : 'N/A'}</div>
          <div style="font-size: 12px; color: var(--text-muted); font-weight:600; text-transform: uppercase;">Average Grade</div>
        </div>

      </div>

      <!-- Parent-Learner Activities Link -->
      <div class="parents-section-card" style="margin-bottom: 20px; cursor: pointer; background: rgba(99, 102, 241, 0.08); border: 2px dashed var(--accent); transition: transform 0.2s; padding: 15px;" onclick="renderParentLearnerActivities()">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 15px;">
            <span style="font-size: 32px;">🧪</span>
            <div style="text-align: left;">
              <h3 style="margin: 0; font-size: 15px; font-weight: 700; color: var(--accent);">Parent-Learner Activities</h3>
              <p style="margin: 3px 0 0 0; font-size: 12.5px; color: var(--text-muted);">Explore 4 interactive science experiments to perform together at home!</p>
            </div>
          </div>
          <span style="font-size: 20px; color: var(--accent); font-weight: bold;">➔</span>
        </div>
      </div>

      <!-- Main Columns Grid -->
      <div class="parents-grid">
        
        <!-- COLUMN 1: Curriculum Mastery & Report Card -->
        <div style="display:flex; flex-direction:column; gap:20px;">
          
          <!-- Report Card -->
          <div class="report-card-container">
            <div class="report-card-header">
              <h2>📖 ASSESSMENT REPORT CARD</h2>
              <p>Academic Assessment for ${nickname} (Week ${currentWeek})</p>
            </div>
            <table class="report-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Quiz Score</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
  `;

  subjectsKeys.forEach(sub => {
    const quizKey = `highscore_${learnerGrade}_w${currentWeek}_sses_${sub}_${currentLevel}_quiz`;
    const scoreVal = safeStorage.getItem(quizKey);
    const score = scoreVal !== null ? parseInt(scoreVal) : null;
    let scoreDisplay = 'No Exam';
    let statusClass = 'background: rgba(100,116,139,0.08); color: var(--text-muted);';
    let statusLabel = 'Pending';
    
    if (score !== null) {
      scoreDisplay = `${score}/25`;
      const pass = score >= QUIZ_PASSING_SCORE;
      statusClass = pass 
        ? 'background: rgba(16,185,129,0.08); color: var(--correct);'
        : 'background: rgba(244,63,94,0.08); color: var(--incorrect);';
      statusLabel = pass ? 'Passed' : 'Needs Practice';
    }

    html += `
      <tr>
        <td style="font-weight:600;">${subjectsConfig[sub].name}</td>
        <td>${scoreDisplay}</td>
        <td><span class="report-grade-badge" style="${statusClass}">${statusLabel}</span></td>
      </tr>
    `;
  });

  html += `
              </tbody>
            </table>
          </div>

          <!-- Subject Mastery Dashboard -->
          <div class="parents-section-card">
            <div class="parents-section-title">📊 Subject Mastery Levels</div>
            <div class="mastery-list">
  `;

  masteryScores.forEach(sub => {
    html += `
      <div class="mastery-item">
        <div class="mastery-info">
          <span>${sub.name}</span>
          <span>${sub.attempted ? sub.percent + '%' : 'No Quizzes'}</span>
        </div>
        <div class="mastery-bar-container">
          <div class="mastery-bar" style="width: ${sub.percent}%; background: ${sub.color};"></div>
        </div>
      </div>
    `;
  });

  html += `
            </div>
          </div>

        </div>

        <!-- COLUMN 2: Remediation & Worksheet Management -->
        <div style="display:flex; flex-direction:column; gap:20px;">
          
          <!-- Remediation Panel -->
          <div class="parents-section-card">
            <div class="parents-section-title">🎯 Remediation ("Needs Practice")</div>
            <div class="remediation-list">
  `;

  if (remediationItems.length === 0) {
    html += `
      <div style="text-align: center; padding: 30px; color: var(--text-muted); font-size: 13px;">
        ✨ Great job! There are no logged mistakes requiring remediation.
      </div>
    `;
  } else {
    remediationItems.forEach(item => {
      html += `
        <div class="remediation-card">
          <div class="remediation-info">
            <span style="font-weight:700; color: ${item.color};">${item.subjectName}</span>
            <span style="font-size:11px; color: var(--text-muted);">Week ${item.week} (${item.mode.toUpperCase()}) — ${item.count} Mistake(s)</span>
          </div>
          <button class="remediation-review-btn" onclick="launchRemediation('${item.subjectKey}', ${item.week})">🎯 Review Lesson</button>
        </div>
      `;
    });
  }

  html += `
            </div>
          </div>

          <!-- Worksheets oversight -->
          <div class="parents-section-card">
            <div class="parents-section-title">📝 Worksheet Completion Override</div>
            <div class="parents-worksheet-list">
              ${worksheetsHTML}
            </div>
          </div>

          <!-- Attendance history -->
          <div class="parents-section-card">
            <div class="parents-section-title">📅 Daily Study Log (Past 7 Days)</div>
            <div class="attendance-list">
  `;

  timeLog.dailyList.forEach(day => {
    html += `
      <div class="attendance-item">
        <span style="font-weight:600;">${day.dayName} (${day.dateStr})</span>
        <span style="color: ${day.mins > 0 ? '#10b981' : 'var(--text-muted)'}; font-weight: 700;">
          ${day.mins > 0 ? day.mins + ' mins' : 'Inactive'}
        </span>
      </div>
    `;
  });

  html += `
            </div>
          </div>

        </div>

      </div>

    </div>
  `;

  qBody.innerHTML = html;
}

function renderParentLearnerActivities() {
  currentMode = 'parents';
  saveSessionState();
  
  const qBody = document.getElementById('viewport-body');
  if (!qBody) return;
  
  let activitiesHTML = '';
  PARENT_LEARNER_ACTIVITIES.forEach((act, idx) => {
    let stepsHTML = '';
    act.steps.forEach((step, sIdx) => {
      stepsHTML += `<li style="margin-bottom: 8px; line-height: 1.5;">${step}</li>`;
    });
    
    activitiesHTML += `
      <div class="parents-section-card" style="padding: 20px; text-align: left; margin-bottom: 20px;">
        <h3 style="margin: 0 0 10px 0; color: var(--accent); font-size: 16px; font-weight: 700; border-bottom: 1px dashed var(--border-color); padding-bottom: 8px;">
          ${idx + 1}. ${act.title}
        </h3>
        <p style="font-size: 13.5px; line-height: 1.5; margin: 0 0 15px 0; background: rgba(99, 102, 241, 0.03); padding: 10px; border-left: 3px solid var(--accent); border-radius: 4px;">
          <strong>🎯 Objective:</strong> ${act.objectives}
        </p>
        <div style="font-size: 13px;">
          <strong style="display: block; margin-bottom: 8px;">📋 Step-by-Step Instructions:</strong>
          <ol style="margin: 0; padding-left: 20px;">
            ${stepsHTML}
          </ol>
        </div>
      </div>
    `;
  });
  
  qBody.innerHTML = `
    <div class="parents-dashboard-container">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
        <h2 style="margin: 0; font-size: 18px; font-weight: 800;">🧪 Parent-Learner Activities</h2>
        <button class="settings-btn-primary" onclick="renderParentDashboard()" style="margin: 0; padding: 6px 14px; width: auto; font-size: 13px;">
          🔙 Back to Dashboard
        </button>
      </div>
      <p style="font-size: 13.5px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px; text-align: left;">
        These hands-on science activities are designed for parents and children to explore together. They require simple materials easily found in the home and align with Grade 3 basic sciences.
      </p>
      ${activitiesHTML}
    </div>
  `;
}

function renderCompetenciesDashboard() {
  currentMode = 'competencies';
  saveSessionState();
  
  // Set header
  document.getElementById('header-icon').innerText = '📋';
  document.getElementById('header-title').innerText = 'DepEd Competencies';
  document.getElementById('header-subtitle').innerText = 'DepEd MATATAG standard learning competencies for your grade level';
  
  // Reset UI elements
  document.getElementById('viewport-footer').style.display = 'none';
  document.getElementById('progress-bar').style.width = '0%';
  document.getElementById('slide-num-label').style.display = 'none';
  document.getElementById('slide-mode-label').innerText = 'Competencies';
  
  const qBody = document.getElementById('viewport-body');
  if (!qBody) return;
  
  const learnerGrade = getLearnerGrade();
  const gradeLabel = learnerGrade === 'g1' ? 'Grade 1' : learnerGrade === 'g2' ? 'Grade 2' : 'Grade 3';

  let html = `
    <div class="parents-dashboard-container" style="padding: 10px 0;">
      <!-- Main Intro Card -->
      <div class="parents-section-card" style="margin-bottom: 20px; padding: 18px; background: rgba(59, 130, 246, 0.05); border-color: rgba(59, 130, 246, 0.2);">
        <p style="margin: 0; font-size: 14px; font-weight: 500; line-height: 1.6; color: var(--text-main);">
          Below are the official <strong>DepEd MATATAG Curriculum Competencies</strong> for <strong>${gradeLabel}</strong>. Click on any subject card below to view the standard learning requirements organized by Quarter.
        </p>
      </div>

      <!-- Competencies Subject Cards Grid -->
      <div class="parents-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 20px;">
        
        <div class="parents-section-card" tabindex="0" onclick="showCompetencies('math')" style="cursor: pointer; transition: transform 0.2s, border-color 0.2s; border: 1.5px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; min-height: 120px;" onmouseover="this.style.borderColor='var(--accent)';" onmouseout="this.style.borderColor='var(--border-color)';">
          <div>
            <div style="font-size: 24px; margin-bottom: 8px;">🔢</div>
            <div style="font-size: 16px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Mathematics</div>
            <div style="font-size: 12px; color: var(--text-muted);">Numbers, patterns, shapes, measurement, and problem solving.</div>
          </div>
          <button class="parents-competency-btn" style="margin-top: 12px; width: 100%; pointer-events: none; background: var(--accent); color: white; border: none;">View Competencies</button>
        </div>

        <div class="parents-section-card" tabindex="0" onclick="showCompetencies('science')" style="cursor: pointer; transition: transform 0.2s, border-color 0.2s; border: 1.5px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; min-height: 120px;" onmouseover="this.style.borderColor='#10b981';" onmouseout="this.style.borderColor='var(--border-color)';">
          <div>
            <div style="font-size: 24px; margin-bottom: 8px;">🔬</div>
            <div style="font-size: 16px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Science</div>
            <div style="font-size: 12px; color: var(--text-muted);">Scientific inquiry, living things, materials, force and motion.</div>
          </div>
          <button class="parents-competency-btn" style="margin-top: 12px; width: 100%; pointer-events: none; background: #10b981; color: white; border: none;">View Competencies</button>
        </div>

        <div class="parents-section-card" tabindex="0" onclick="showCompetencies('english')" style="cursor: pointer; transition: transform 0.2s, border-color 0.2s; border: 1.5px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; min-height: 120px;" onmouseover="this.style.borderColor='#a855f7';" onmouseout="this.style.borderColor='var(--border-color)';">
          <div>
            <div style="font-size: 24px; margin-bottom: 8px;">🙋‍♂️</div>
            <div style="font-size: 16px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">English</div>
            <div style="font-size: 12px; color: var(--text-muted);">Oral language, reading, listening, writing, and grammar.</div>
          </div>
          <button class="parents-competency-btn" style="margin-top: 12px; width: 100%; pointer-events: none; background: #a855f7; color: white; border: none;">View Competencies</button>
        </div>

        <div class="parents-section-card" tabindex="0" onclick="showCompetencies('filipino')" style="cursor: pointer; transition: transform 0.2s, border-color 0.2s; border: 1.5px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; min-height: 120px;" onmouseover="this.style.borderColor='#f43f5e';" onmouseout="this.style.borderColor='var(--border-color)';">
          <div>
            <div style="font-size: 24px; margin-bottom: 8px;">🇵🇭</div>
            <div style="font-size: 16px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Filipino</div>
            <div style="font-size: 12px; color: var(--text-muted);">Wika, pagbasa, pagsulat, at pakikipagtalastasan sa sariling wika.</div>
          </div>
          <button class="parents-competency-btn" style="margin-top: 12px; width: 100%; pointer-events: none; background: #f43f5e; color: white; border: none;">View Competencies</button>
        </div>

        <div class="parents-section-card" tabindex="0" onclick="showCompetencies('makabansa')" style="cursor: pointer; transition: transform 0.2s, border-color 0.2s; border: 1.5px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; min-height: 120px;" onmouseover="this.style.borderColor='#3b82f6';" onmouseout="this.style.borderColor='var(--border-color)';">
          <div>
            <div style="font-size: 24px; margin-bottom: 8px;">🏘️</div>
            <div style="font-size: 16px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Makabansa</div>
            <div style="font-size: 12px; color: var(--text-muted);">Civics, local history, community engagement, and culture.</div>
          </div>
          <button class="parents-competency-btn" style="margin-top: 12px; width: 100%; pointer-events: none; background: #3b82f6; color: white; border: none;">View Competencies</button>
        </div>

        <div class="parents-section-card" tabindex="0" onclick="showCompetencies('gmrc')" style="cursor: pointer; transition: transform 0.2s, border-color 0.2s; border: 1.5px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; min-height: 120px;" onmouseover="this.style.borderColor='#eab308';" onmouseout="this.style.borderColor='var(--border-color)';">
          <div>
            <div style="font-size: 24px; margin-bottom: 8px;">🧘</div>
            <div style="font-size: 16px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">GMRC</div>
            <div style="font-size: 12px; color: var(--text-muted);">Good Manners and Right Conduct, character building, respect.</div>
          </div>
          <button class="parents-competency-btn" style="margin-top: 12px; width: 100%; pointer-events: none; background: #eab308; color: white; border: none;">View Competencies</button>
        </div>

      </div>
    </div>
  `;
  
  qBody.innerHTML = html;
}

const SHOP_ITEMS = [
  { id: 'glasses', name: 'Cool Sunglasses 🕶️', desc: 'Make Matteo look cool!', cost: 80, type: 'outfit', emoji: '🕶️' },
  { id: 'grad', name: 'Graduation Cap 🎓', desc: 'Matteo becomes a graduate!', cost: 100, type: 'outfit', emoji: '🎓' },
  { id: 'explorer', name: 'Explorer Hat 🤠', desc: 'For Science exploration!', cost: 150, type: 'outfit', emoji: '🤠' },
  { id: 'barong', name: 'Barong Tagalog 👕', desc: 'Celebrate Filipino pride!', cost: 250, type: 'outfit', emoji: '👕' },
  { id: 'crown', name: 'Crown of Wisdom 👑', desc: 'For the ultimate scholar!', cost: 500, type: 'outfit', emoji: '👑' }
];

function getMascotName() {
  return 'Matteo';
}

function getMascotEmoji() {
  switch (activeMascotOutfit) {
    case 'glasses': return '🦉🕶️';
    case 'grad': return '🦉🎓';
    case 'explorer': return '🦉🤠';
    case 'barong': return '🦉👕';
    case 'crown': return '🦉👑';
    default: return '🦉';
  }
}

function getMascotImg() {
  if (tobiHappiness < 30) {
    return 'images/mascot_owl_sleepy.png';
  }
  switch (activeMascotOutfit) {
    case 'grad': return 'images/mascot_owl_scholar.png';
    case 'crown': return 'images/mascot_owl_professor.png';
    default: return 'images/mascot_owl_standard.png';
  }
}

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
  let choicesHTML = '';
  question.choices.forEach((choice, idx) => {
    choicesHTML += `
      <button class="ws-btn-action" onclick="answerPatternQuestion(${idx})" style="padding: 14px 20px; font-size: 16px; min-width: 120px; border-radius: 12px;">
        ${choice}
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

// Onboarding & settings drawer logic
function applyLearnerProfile() {
  const nickname = safeStorage.getItem('session_nickname') || 'Matteo';
  const grade = getLearnerGrade();
  
  // Update brand title text (without overwriting the avatar image)
  const brandTitleText = document.getElementById('brand-title-text');
  if (brandTitleText) {
    brandTitleText.innerText = `${nickname}'s Learning Hub`;
  }
  
  // Update level selector buttons text contents
  const coreBtn = document.getElementById('level-core');
  const advBtn = document.getElementById('level-advanced');
  if (coreBtn && advBtn) {
    if (grade === 'g1') {
      coreBtn.innerText = 'Grade 1';
    } else if (grade === 'g2') {
      coreBtn.innerText = 'Grade 2';
    } else {
      coreBtn.innerText = 'Grade 3';
    }
    advBtn.innerText = 'Advanced';
  }
}

function submitOnboarding() {
  const nicknameInput = document.getElementById('onboarding-nickname');
  const gradeSelect = document.getElementById('onboarding-grade');
  
  if (!nicknameInput) return;
  const nickname = nicknameInput.value.trim();
  const grade = gradeSelect ? gradeSelect.value : 'g3';
  
  if (nickname === "") {
    alert("Please enter your nickname!");
    return;
  }

  safeStorage.setItem('session_nickname', nickname);
  safeStorage.setItem('session_grade_level', grade);
  safeStorage.setItem('session_currentLevel', 'core');
  currentLevel = 'core';
  applyLearnerProfile();

  // Show schedule step before closing onboarding
  showOnboardingScheduleStep();
}

function showOnboardingScheduleStep() {
  const card = document.querySelector('.onboarding-card');
  if (!card) return;
  card.innerHTML = `
    <div class="onboarding-logo">📅</div>
    <h2>Set Your Class Schedule</h2>
    <p>Tick the subjects you have each day. This helps arrange your weekly study tasks. You can change this anytime in Settings.</p>
    <div id="onboarding-schedule-grid"></div>
    <div style="display:flex; gap:10px; margin-top:20px;">
      <button class="onboarding-submit-btn" style="background:var(--text-muted); flex:1;"
        onclick="showOnboardingUpdateStep()">Skip for now</button>
      <button class="onboarding-submit-btn" style="flex:1;"
        onclick="showOnboardingUpdateStep()">Save Schedule ✅</button>
    </div>
  `;
  renderOnboardingScheduleGrid();
}

function showOnboardingUpdateStep() {
  const card = document.querySelector('.onboarding-card');
  if (!card) return;
  card.innerHTML = `
    <div class="onboarding-logo">🔄</div>
    <h2>Update Weekly Topics</h2>
    <p style="color: var(--accent); font-weight: 700; margin-bottom: 8px;">⚠️ Needs Internet Connection</p>
    <p>Would you like to check for and download the latest weekly topics, lessons, and quizzes? (Highly recommended to get the newest curriculum updates)</p>
    <div id="onboarding-update-status" style="margin: 15px 0; font-weight: 600; font-size: 14px; min-height: 20px; text-align: center;"></div>
    <div style="display:flex; gap:10px; margin-top:20px;">
      <button class="onboarding-submit-btn" id="onboarding-update-skip-btn" style="background:var(--text-muted); flex:1;"
        onclick="showOnboardingPINStep()">Skip for now</button>
      <button class="onboarding-submit-btn" id="onboarding-update-now-btn" style="flex:1;"
        onclick="runOnboardingUpdate()">Yes, Update Now</button>
    </div>
  `;
}

function runOnboardingUpdate() {
  const statusEl = document.getElementById('onboarding-update-status');
  const skipBtn = document.getElementById('onboarding-update-skip-btn');
  const updateBtn = document.getElementById('onboarding-update-now-btn');
  
  if (updateBtn) updateBtn.disabled = true;
  if (skipBtn) skipBtn.disabled = true;
  if (statusEl) {
    statusEl.innerHTML = "⏳ Checking for updates...";
    statusEl.style.color = "var(--text-main)";
  }

  const learnerGrade = getLearnerGrade();
  const manifestUrl = `${REMOTE_UPDATE_URL}/data/${learnerGrade}/manifest.json`;

  fetch(manifestUrl, { cache: 'no-store' })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch manifest for ${learnerGrade.toUpperCase()} (HTTP ${response.status})`);
      }
      return response.json();
    })
    .then(manifest => {
      const localVersion = safeStorage.getItem(`local_${learnerGrade}_manifest_version`);
      const remoteVersion = manifest.version || '';

      if (localVersion && localVersion === remoteVersion) {
        if (statusEl) {
          statusEl.style.color = "var(--correct)";
          statusEl.innerHTML = "✅ There is no available update.";
        }
        setTimeout(() => showOnboardingPINStep(), 1500);
        return;
      }

      const weeksToDownload = manifest.weeks || [];
      const imagesToDownload = manifest.images || [];
      const reviewsToDownload = manifest.reviews || [];

      if (weeksToDownload.length === 0 && imagesToDownload.length === 0 && reviewsToDownload.length === 0) {
        if (statusEl) {
          statusEl.style.color = "var(--correct)";
          statusEl.innerHTML = "✅ There is no available update.";
        }
        setTimeout(() => showOnboardingPINStep(), 1500);
        return;
      }

      let totalTasks = weeksToDownload.length + reviewsToDownload.length + imagesToDownload.length;
      if (statusEl) {
        statusEl.innerHTML = `⏳ Downloading content (0/${totalTasks})...`;
      }

      let tasks = [];
      let loadedWeeks = [];
      let completedCount = 0;

      function updateProgress() {
        completedCount++;
        if (statusEl) {
          statusEl.innerHTML = `⏳ Downloading content (${completedCount}/${totalTasks})...`;
        }
      }

      // Download week JSON files
      weeksToDownload.forEach(w => {
        const url = `${REMOTE_UPDATE_URL}/data/${learnerGrade}/week${w}.json`;
        const task = fetch(url, { cache: 'no-store' })
          .then(res => {
            if (!res.ok) throw new Error(`Week ${w} download failed`);
            return res.json();
          })
          .then(jsonData => {
            safeStorage.setItem(`local_${learnerGrade}_week_data_${w}`, JSON.stringify(jsonData));
            loadedWeeks.push(w);
            updateProgress();
          });
        tasks.push(task);
      });

      // Download review JSON files
      reviewsToDownload.forEach(r => {
        const url = `${REMOTE_UPDATE_URL}/data/${learnerGrade}/review_${r}.json`;
        const task = fetch(url, { cache: 'no-store' })
          .then(res => {
            if (!res.ok) throw new Error(`Review ${r} download failed`);
            return res.json();
          })
          .then(jsonData => {
            safeStorage.setItem(`local_${learnerGrade}_review_data_${r}`, JSON.stringify(jsonData));
            updateProgress();
          });
        tasks.push(task);
      });

      // Download images
      imagesToDownload.forEach(img => {
        const url = `${REMOTE_UPDATE_URL}/images/${img}`;
        const task = fetch(url, { cache: 'no-store' })
          .then(res => {
            if (!res.ok) throw new Error(`Image ${img} download failed`);
            return res.blob();
          })
          .then(blob => {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result);
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            });
          })
          .then(base64Data => {
            safeStorage.setItem(`local_image_${img}`, base64Data);
            updateProgress();
          });
        tasks.push(task);
      });

      return Promise.all(tasks).then(() => {
        if (remoteVersion) {
          safeStorage.setItem(`local_${learnerGrade}_manifest_version`, remoteVersion);
        }
        buildWeekSelector();
        if (statusEl) {
          statusEl.style.color = "var(--correct)";
          statusEl.innerHTML = "✅ Update successful!";
        }
        setTimeout(() => showOnboardingPINStep(), 1500);
      });
    })
    .catch(err => {
      console.error(err);
      if (statusEl) {
        statusEl.style.color = "var(--incorrect)";
        statusEl.innerHTML = `❌ Update failed: ${err.message || 'No connection'}`;
      }
      if (updateBtn) updateBtn.disabled = false;
      if (skipBtn) skipBtn.disabled = false;
    });
}

function renderOnboardingScheduleGrid() {
  const schedule = getScheduleConfig();
  const days = ['monday','tuesday','wednesday','thursday','friday'];
  const dayLabels = ['Mon','Tue','Wed','Thu','Fri'];
  const subjects = [
    { key:'math', label:'🔢 Math' },
    { key:'science', label:'🔬 Science' },
    { key:'english', label:'🙋 English' },
    { key:'filipino', label:'🇵🇭 Filipino' },
    { key:'makabansa', label:'🏘️ Makabansa' },
    { key:'gmrc', label:'🧘 GMRC' }
  ];

  let html = '<div class="sched-settings-grid" style="margin-top:16px;">';
  html += '<div class="sched-settings-cell sched-settings-header"></div>';
  days.forEach((d,i) => {
    html += `<div class="sched-settings-cell sched-settings-header">${dayLabels[i]}</div>`;
  });
  subjects.forEach(sub => {
    html += `<div class="sched-settings-cell sched-settings-subject">${sub.label}</div>`;
    days.forEach(d => {
      const checked = (schedule[d] || []).includes(sub.key);
      html += `
        <div class="sched-settings-cell">
          <input type="checkbox" class="sched-check"
            ${checked ? 'checked' : ''}
            onchange="toggleScheduleCell('${d}','${sub.key}',this.checked)">
        </div>
      `;
    });
  });
  html += '</div>';

  const container = document.getElementById('onboarding-schedule-grid');
  if (container) container.innerHTML = html;
}

function showOnboardingPINStep() {
  const card = document.querySelector('.onboarding-card');
  if (!card) return;
  card.innerHTML = `
    <div class="onboarding-logo">🔑</div>
    <h2>Set Parent PIN</h2>
    <p>Set a secure 4-digit PIN to access the <strong>Parent's Dashboard</strong>, where you can view performance analytics, student remediation recommendations, and override worksheet grading.</p>
    <div class="form-group" style="margin-top: 20px;">
      <label for="onboarding-pin" style="display:block; margin-bottom:8px; font-weight:600;">👨‍👩‍👦 Enter 4-Digit Parent PIN:</label>
      <input type="text" id="onboarding-pin" maxlength="4" pattern="[0-9]*" inputmode="numeric" placeholder="e.g. 1234" 
        style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-main); font-size: 20px; text-align: center; letter-spacing: 10px; font-weight: 700;">
    </div>
    <div style="display:flex; gap:10px; margin-top:25px;">
      <button class="onboarding-submit-btn" style="background:var(--text-muted); flex:1;"
        onclick="saveOnboardingPIN('0000')">Skip / Default (0000)</button>
      <button class="onboarding-submit-btn" style="flex:1;"
        onclick="saveOnboardingPIN(document.getElementById('onboarding-pin').value)">Set PIN & Finish</button>
    </div>
  `;
}

function saveOnboardingPIN(pin) {
  let finalPin = pin ? pin.trim() : '';
  if (finalPin === '') {
    alert("Please enter a 4-digit PIN, or tap 'Skip' to use the default '0000'.");
    return;
  }
  if (!/^\d{4}$/.test(finalPin)) {
    alert("Parent PIN must be exactly 4 digits.");
    return;
  }
  safeStorage.setItem('parent_pin', finalPin);
  finishOnboarding();
}

function finishOnboarding() {
  initConfetti();
  const overlay = document.getElementById('onboarding-overlay');
  if (overlay) {
    overlay.classList.remove('show');
    setTimeout(() => overlay.style.display = 'none', 400);
  }
  loadWeekData(1);
  setTimeout(() => renderWelcomeDashboard(), 300);
}

function updateProfileName(value) {
  const val = value.trim();
  if (val === '') return;
  safeStorage.setItem('session_nickname', val);
  applyLearnerProfile();
}

function updateProfileGrade(value) {
  safeStorage.setItem('session_grade_level', value);
  applyLearnerProfile();
  // Re-load week data for the current week using the new grade
  loadWeekData(currentWeek);
}

function adjustFontScale(delta) {
  let newScale = globalFontScale + delta;
  newScale = Math.max(70, Math.min(150, newScale));
  globalFontScale = newScale;
  safeStorage.setItem('session_globalFontScale', globalFontScale.toString());
  
  // Apply zoom factor
  document.body.style.zoom = `${globalFontScale}%`;
  
  // Update status label
  const lbl = document.getElementById('settings-font-scale-label');
  if (lbl) lbl.innerText = `${globalFontScale}%`;
}

function resetFontScale() {
  globalFontScale = 100;
  safeStorage.setItem('session_globalFontScale', '100');
  
  // Apply default zoom
  document.body.style.zoom = '100%';
  
  // Update status label
  const lbl = document.getElementById('settings-font-scale-label');
  if (lbl) lbl.innerText = '100%';
}

function changeParentPIN() {
  const currentPinInput = document.getElementById('settings-current-pin');
  const pinInput = document.getElementById('settings-parent-pin');
  if (!currentPinInput || !pinInput) return;

  const currentPin = currentPinInput.value.trim();
  const newPin = pinInput.value.trim();

  if (currentPin === '') {
    alert("Please enter your current 4-digit PIN.");
    return;
  }

  const activePin = safeStorage.getItem('parent_pin') || '0000';
  if (currentPin !== activePin) {
    alert("Incorrect current PIN. Please try again.");
    return;
  }

  if (newPin === '') {
    alert("Please enter a new 4-digit PIN.");
    return;
  }
  if (!/^\d{4}$/.test(newPin)) {
    alert("New PIN must be exactly 4 digits.");
    return;
  }

  safeStorage.setItem('parent_pin', newPin);
  alert("Parent PIN updated successfully!");
  currentPinInput.value = '';
  pinInput.value = '';
}

function openSettings() {
  const drawer = document.getElementById('settings-drawer');
  const overlay = document.getElementById('settings-overlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
  }
  
  // Refresh account settings display
  refreshAccountSettings();
  
  // Sync settings inputs with current state
  const nicknameInput = document.getElementById('settings-nickname');
  if (nicknameInput) nicknameInput.value = safeStorage.getItem('session_nickname') || '';
  
  const gradeSelect = document.getElementById('settings-grade');
  if (gradeSelect) gradeSelect.value = getLearnerGrade();
  
  const themeToggle = document.getElementById('settings-theme-toggle');
  if (themeToggle) themeToggle.checked = document.body.classList.contains('light-mode');
  
  const musicToggle = document.getElementById('settings-music-toggle');
  if (musicToggle) musicToggle.checked = musicEnabled;
  
  const sfxToggle = document.getElementById('settings-sfx-toggle');
  if (sfxToggle) sfxToggle.checked = sfxEnabled;
  
  const transToggle = document.getElementById('settings-translation-toggle');
  if (transToggle) transToggle.checked = document.body.classList.contains('show-translation');

  const fontLabel = document.getElementById('settings-font-scale-label');
  if (fontLabel) fontLabel.innerText = `${globalFontScale}%`;
  
  const transSection = document.getElementById('settings-subject-tools-section');
  const transRow = document.getElementById('settings-trans-row');
  const isTransAvailable = (currentSubject === 'filipino' || currentSubject === 'makabansa' || currentSubject === 'gmrc');
  if (transSection) {
    transSection.style.display = isTransAvailable ? 'block' : 'none';
  }
  if (transRow) {
    transRow.style.display = isTransAvailable ? 'flex' : 'none';
  }

  // Render schedule grid
  renderScheduleGrid();
}

function closeSettings() {
  const drawer = document.getElementById('settings-drawer');
  const overlay = document.getElementById('settings-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  }
}

function applyProfilePic() {
  const picData = safeStorage.getItem('session_profile_pic');
  const brandPic = document.getElementById('brand-profile-pic');
  const settingsPic = document.getElementById('settings-profile-pic');
  
  const src = picData || 'icon.png';
  if (brandPic) brandPic.src = src;
  if (settingsPic) settingsPic.src = src;
}

function handleProfilePicUpload(files) {
  if (!files || files.length === 0) return;
  const file = files[0];
  if (!file.type.startsWith('image/')) {
    alert("Please upload a valid image file.");
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      safeStorage.setItem('session_profile_pic', e.target.result);
      applyProfilePic();
      alert("Profile avatar updated successfully!");
    } catch (err) {
      console.error("Failed to save profile avatar:", err);
      alert("Failed to save avatar (file may be too large). Please choose a smaller image.");
    }
  };
  reader.readAsDataURL(file);
}

function removeProfilePic() {
  safeStorage.removeItem('session_profile_pic');
  applyProfilePic();
  alert("Profile avatar removed.");
}

// ==========================================================================
// APP VERSION, BUILD INFO & CHANGELOG TIMELINE
// ==========================================================================
const RAW_APP_VERSION = "v26.06.25.1401";
const RAW_BUILD_DATE = "June 25, 2026";

function isPlaceholder(val) {
  return !val || val.startsWith("__APP_") || val.startsWith("__") || val.includes("PLACEHOLDER");
}

function getFormattedCurrentDate() {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return new Date().toLocaleDateString('en-US', options);
}

function getDynamicVersion() {
  const d = new Date();
  const yy = String(d.getFullYear()).slice(-2);
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const hh = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  return `v${yy}.${mm}.${dd}.${hh}${min}`;
}

const APP_VERSION = isPlaceholder(RAW_APP_VERSION) ? getDynamicVersion() : RAW_APP_VERSION;
const BUILD_DATE = isPlaceholder(RAW_BUILD_DATE) ? getFormattedCurrentDate() : RAW_BUILD_DATE;

function checkAppVersionUpgrade() {
  const lastVersion = safeStorage.getItem('app_installed_version');
  if (lastVersion !== APP_VERSION) {
    console.log(`New app version detected: ${lastVersion} -> ${APP_VERSION}. Clearing weekly database cache...`);
    const keysToClear = [];
    for (let i = 0; i < safeStorage.length; i++) {
      const key = safeStorage.key(i);
      if (key && key.startsWith('local_')) {
        keysToClear.push(key);
      }
    }
    keysToClear.forEach(key => {
      safeStorage.removeItem(key);
    });
    safeStorage.setItem('app_installed_version', APP_VERSION);
  }
}



function refreshAccountSettings() {
  const accountLabel = document.getElementById('settings-active-account');
  const loginBtn = document.getElementById('settings-login-btn');
  const logoutBtn = document.getElementById('settings-logout-btn');
  if (!accountLabel) return;
  
  if (typeof AndroidAuth !== 'undefined') {
    const isGuest = AndroidAuth.isGuest() === 'true';
    if (isGuest) {
      accountLabel.innerText = 'Guest Mode';
      if (loginBtn) loginBtn.style.display = 'block';
      if (logoutBtn) logoutBtn.style.display = 'none';
    } else {
      const email = AndroidAuth.getUserEmail();
      accountLabel.innerText = email || 'Signed In';
      if (loginBtn) loginBtn.style.display = 'none';
      if (logoutBtn) logoutBtn.style.display = 'block';
    }
  } else {
    accountLabel.innerText = 'Guest Mode (Web Preview)';
    if (loginBtn) loginBtn.style.display = 'block';
    if (logoutBtn) logoutBtn.style.display = 'none';
  }
}

function loginAccount() {
  if (typeof AndroidAuth !== 'undefined') {
    AndroidAuth.logout();
  } else {
    alert("Login is only available in the Android application.");
  }
}

function logoutAccount() {
  if (typeof AndroidAuth !== 'undefined') {
    if (confirm("Are you sure you want to sign out?")) {
      AndroidAuth.logout();
    }
  } else {
    alert("Logout is only available in the Android application.");
  }
}

function showAbout() {
  const modal = document.getElementById('about-modal');
  const body = document.getElementById('about-modal-body');
  if (!modal || !body) return;

  const versionLabel = APP_VERSION;
  const buildDateLabel = BUILD_DATE;

  let html = `
    <!-- App Description Card -->
    <div class="parents-section-card" style="padding: 16px; background: rgba(59, 130, 246, 0.05); border-color: rgba(59, 130, 246, 0.2);">
      <p style="margin: 0; font-size: 13.5px; font-weight: 500; line-height: 1.6; color: var(--text-main);">
        <strong>Matteo's Learning Hub</strong> is a personalized learning companion designed for Filipino Grades 1, 2, and 3 students following the DepEd K–12 curriculum. It delivers structured weekly lessons, interactive quizzes, daily reading sessions, performance tasks, and practice worksheets across six core subjects — Mathematics, Science, English, Filipino, Makabansa, and GMRC — in a focused, distraction-free environment built for young learners.
      </p>
    </div>

    <!-- Section 1: Version & Build Info -->
    <div class="parents-section-card">
      <div class="parents-section-title" style="margin-bottom: 10px; font-size: 14px; font-weight: 700;">⚙️ Version & Build Information</div>
      <div style="display: flex; flex-direction: column; gap: 6px; font-size: 12.5px;">
        <div style="display: flex; justify-content: space-between;"><strong>App Name:</strong> <span>Matteo's Learning Hub</span></div>
        <div style="display: flex; justify-content: space-between;"><strong>App Version:</strong> <span style="font-family: monospace; font-weight: bold; color: var(--accent);">${versionLabel}</span></div>
        <div style="display: flex; justify-content: space-between;"><strong>Build Date:</strong> <span>${buildDateLabel}</span></div>
        <div style="display: flex; justify-content: space-between;"><strong>Academic Year:</strong> <span>SY 2026–2027</span></div>
        <div style="display: flex; justify-content: space-between;"><strong>Week Coverage:</strong> <span>Weeks 1–40 (Full School Year)</span></div>
        <div style="display: flex; justify-content: space-between;"><strong>Platform:</strong> <span>Android 7.0 (API 24) and above</span></div>
        <div style="display: flex; justify-content: space-between;"><strong>Package ID (not final):</strong> <span style="font-family: monospace; color: var(--text-muted);">com.matteohub.app</span></div>
      </div>
    </div>

    <!-- Section 2: Creator Credit -->
    <div class="parents-section-card">
      <div class="parents-section-title" style="margin-bottom: 10px; font-size: 14px; font-weight: 700;">👤 Developer & Creator Credit</div>
      <p style="margin: 0 0 10px 0; font-size: 12.5px;">
        Developed by: <strong>moondae</strong><br>
        Designed for: <strong>Matteo</strong>
      </p>
      <div style="background: rgba(100,116,139,0.06); border-radius: 8px; padding: 10px; font-size: 12px; border: 1px solid var(--border-color);">
        <strong style="display: block; margin-bottom: 4px;">Support & Contact:</strong>
        Facebook Page: <span style="color: var(--text-muted);">[contact developer - this will change in the future]</span><br>
        Email: <span style="color: var(--text-muted);">[contact developer - this will change in the future]</span>
      </div>
      <p style="margin: 10px 0 0 0; font-size: 12px; font-style: italic; color: var(--text-muted); text-align: center;">
        "This app was built with love for one student, with the hope that it helps many more."
      </p>
    </div>

    <!-- Section 3: Curriculum Alignment Statement -->
    <div class="parents-section-card">
      <div class="parents-section-title" style="margin-bottom: 10px; font-size: 14px; font-weight: 700;">📜 Curriculum Alignment Statement</div>
      <p style="margin: 0 0 10px 0; font-size: 12.5px; line-height: 1.5;">
        All lessons, quizzes, reading materials, and performance tasks in Matteo's Learning Hub are aligned with the official <strong>Department of Education (DepEd) Most Essential Learning Competencies (MELCs)</strong> for Grades 1, 2, and 3, School Year 2026–2027.
      </p>
      <p style="margin: 0 0 10px 0; font-size: 12.5px; line-height: 1.5;">
        Content is organized by academic week following the official DepEd school calendar and covers all six core subject areas mandated for the primary grade level.
      </p>
      <p style="margin: 0; font-size: 12px; line-height: 1.5; color: var(--text-muted); font-style: italic; padding: 8px; border-left: 3px solid var(--border-color); background: rgba(100,116,139,0.03);">
        This app is an independent educational tool developed by a private individual and is not officially affiliated with, endorsed by, or produced by the Department of Education of the Republic of the Philippines.
      </p>
    </div>

    <!-- Section 4: Subjects Covered -->
    <div class="parents-section-card">
      <div class="parents-section-title" style="margin-bottom: 10px; font-size: 14px; font-weight: 700;">📚 Subjects Covered</div>
      <p style="margin: 0 0 12px 0; font-size: 12.5px; color: var(--text-muted);">
        The following six DepEd core subjects are covered across all 40 academic weeks of the school year:
      </p>
      <div style="display: flex; flex-direction: column; gap: 10px; font-size: 12.5px;">
        <div><strong>🔢 Mathematics:</strong> Numbers and number sense, geometry, measurement, patterns and algebra, statistics and probability.</div>
        <div><strong>🔬 Science:</strong> Living things and their environment, force, motion and energy, Earth and space, matter.</div>
        <div><strong>🙋 English:</strong> Oral language, phonological awareness, reading comprehension, vocabulary, writing and composition, grammar and usage.</div>
        <div><strong>🇵🇭 Filipino:</strong> Pakikinig, pagsasalita, pagbabasa, pagsulat, at wika at gramatika sa Filipino.</div>
        <div><strong>🏘️ Makabansa:</strong> Araling Panlipunan — kasaysayan, heograpiya, ekonomiya, at pagkamamamayan.</div>
        <div><strong>🧘 GMRC:</strong> Good Manners and Right Conduct — pagpapahalaga sa sarili, pamilya, paaralan, at komunidad.</div>
      </div>
    </div>

    <!-- Section 5: Learning Modes -->
    <div class="parents-section-card">
      <div class="parents-section-title" style="margin-bottom: 10px; font-size: 14px; font-weight: 700;">🕹️ Learning Modes</div>
      <p style="margin: 0 0 12px 0; font-size: 12.5px; color: var(--text-muted);">
        Matteo's Learning Hub offers six distinct learning modes for each subject every week:
      </p>
      <div style="display: flex; flex-direction: column; gap: 12px; font-size: 12.5px;">
        <div>
          <strong>📖 Study Guide:</strong> Illustrated lesson slides presenting the week's topic in clear, age-appropriate language. Completed when the learner reaches the last slide.
        </div>
        <div>
          <strong>✍️ Take Quiz:</strong> A 25-item multiple choice and true-or-false assessment covering the week's lesson content. Progress is saved automatically after each answer. Passing score: 60% (15 out of 25 items).
        </div>
        <div>
          <strong>🔥 Challenge:</strong> A 5-item rapid-fire challenge for quick recall and mastery reinforcement. Designed to be completed in under 3 minutes. Passing score: 60% (3 out of 5 items).
        </div>
        <div>
          <strong>📋 Performance Task:</strong> A rubric-based graded output activity where the learner demonstrates mastery through an applied task. Marked complete upon rubric submission and save.
        </div>
        <div>
          <strong>📚 Daily Reading:</strong> Structured reading sessions from Monday to Friday, with one reading passage per day. Marked complete by the learner using the Complete button on the final slide of each day's reading.
        </div>
        <div>
          <strong>📝 Practice Worksheet:</strong> Finger-draw practice sheets for handwriting, diagram labeling, and written exercises. Marked complete by a parent or guardian using the Parent Submit button.
        </div>
      </div>
    </div>

    <!-- Section 6: Privacy Statement -->
    <div class="parents-section-card">
      <div class="parents-section-title" style="margin-bottom: 10px; font-size: 14px; font-weight: 700;">🛡️ Privacy Statement</div>
      <div style="background: rgba(16,185,129,0.05); border: 1.5px solid rgba(16,185,129,0.2); border-radius: 12px; padding: 14px; margin-bottom: 14px; font-size: 12.5px; line-height: 1.6;">
        <strong style="color: var(--correct); display: block; margin-bottom: 6px; font-size: 13px;">🔒 Child-Safe & Offline Data Privacy</strong>
        Matteo's Learning Hub does not collect, share, or transmit any personal information to any third party. All student data — including quiz scores, reading progress, streak records, badge achievements, and profile details — is stored only on this device and is never uploaded to external servers.<br><br>
        No advertising networks, analytics platforms, or third-party tracking tools are integrated into this application.<br><br>
        This app is designed for a child user and complies with child data privacy principles consistent with the <strong>Republic Act No. 10173 (Data Privacy Act of 2012)</strong> of the Philippines and international COPPA standards.
      </div>
      <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 10px;">
        <strong>Full Privacy Policy:</strong> Available at: [page - this will change in the future]
      </div>
      <div style="font-size: 12.5px;">
        <strong style="display: block; margin-bottom: 6px;">What Data is Stored Locally on this Device:</strong>
        <ul style="margin: 0; padding-left: 18px; line-height: 1.5;">
          <li>Learner nickname and grade level</li>
          <li>Profile photo (optional, stored locally only)</li>
          <li>Quiz and challenge scores per subject per week</li>
          <li>Study guide completion records</li>
          <li>Reading completion records per day per week</li>
          <li>Worksheet completion records</li>
          <li>Performance task rubric submissions</li>
          <li>Daily study streak counter</li>
          <li>Badge and achievement records</li>
          <li>Weekly class schedule configuration</li>
          <li>App theme and audio preferences</li>
          <li>Background music (if custom audio is uploaded)</li>
        </ul>
      </div>
      <div style="font-size: 12.5px; margin-top: 10px;">
        <strong style="display: block; margin-bottom: 6px;">What Data is Never Collected:</strong>
        <ul style="margin: 0; padding-left: 18px; line-height: 1.5; color: var(--text-muted);">
          <li>Full legal name</li>
          <li>Date of birth</li>
          <li>Location or GPS data</li>
          <li>Device identifiers for advertising purposes</li>
          <li>Contacts or communication data</li>
          <li>Financial information</li>
          <li>Biometric data</li>
        </ul>
      </div>
      <p style="margin: 12px 0 0 0; font-size: 12px; color: var(--text-muted);">
        <strong>Data Deletion:</strong> All locally stored data can be permanently deleted at any time by navigating to Settings → Maintenance → Clear All Student Progress.
      </p>
    </div>

    <!-- Section 7: Credits -->
    <div class="parents-section-card">
      <div class="parents-section-title" style="margin-bottom: 10px; font-size: 14px; font-weight: 700;">🤝 Credits & Open Source</div>
      <div style="display: flex; flex-direction: column; gap: 8px; font-size: 12.5px;">
        <div>
          <strong>Fonts:</strong>
          <ul style="margin: 4px 0 0 0; padding-left: 18px;">
            <li><strong>Inter:</strong> SIL Open Font License 1.1 (Rasmus Andersson)</li>
            <li><strong>Outfit:</strong> SIL Open Font License 1.1 (On Brand Investments Ltd)</li>
          </ul>
        </div>
        <div>
          <strong>Icons & Emoji:</strong> All subject icons and interface symbols use standard Unicode emoji characters. No third-party libraries are bundled.
        </div>
        <div>
          <strong>Audio:</strong>
          <ul style="margin: 4px 0 0 0; padding-left: 18px;">
            <li><strong>Background Music:</strong> background5.mp3 (Original instrumental loop)</li>
            <li><strong>Correct SFX:</strong> correct.wav (Original synthesized audio)</li>
            <li><strong>Incorrect SFX:</strong> incorrect.wav (Original synthesized audio)</li>
          </ul>
        </div>
        <div>
          <strong>Animation:</strong> Confetti Animation uses a custom HTML5 Canvas implementation. No third-party animation libraries are used.
        </div>
        <div>
          <strong>Content Delivery:</strong> Weekly lesson content is optionally fetched via jsDelivr CDN (MIT License) for serving raw curriculum files hosted on GitHub.
        </div>
        <div>
          <strong>Development Tools:</strong> Native Android SDK wrapper and Gradle Build Tools under standard Apache License 2.0 / Google Terms.
        </div>
      </div>
    </div>

    <!-- Section 8: Legal -->
    <div class="parents-section-card">
      <div class="parents-section-title" style="margin-bottom: 10px; font-size: 14px; font-weight: 700;">⚖️ Legal & Terms of Use</div>
      <div style="font-size: 12.5px; line-height: 1.6; display: flex; flex-direction: column; gap: 8px;">
        <p style="margin: 0; font-weight: 600;">TERMS OF USE</p>
        <div style="font-size: 12px; color: var(--text-main);">
          1. This application and all its content — including lesson slides, quiz questions, reading passages, worksheets, and performance tasks — are the intellectual property of <strong>moondae</strong> unless otherwise credited.<br>
          2. Curriculum content, lesson materials, and quiz items may not be reproduced, distributed, modified, resold, or used outside of this application without the express written permission of the developer.<br>
          3. The app is provided \"as is\" without warranty of any kind. The developer is not liable for any learning outcomes, data loss, or device compatibility issues.<br>
          4. The app is designed for use by children under parental or guardian supervision. Parents and guardians are responsible for monitoring usage.<br>
          5. Unauthorized distribution, resale, or reverse engineering of this application or its content is strictly prohibited.<br>
          6. Lesson content is aligned with DepEd MELCs but this app is an independent product and is not officially endorsed by or affiliated with the Department of Education of the Philippines.
        </div>
        <p style="margin: 8px 0 0 0; font-weight: 600; border-top: 1px dashed var(--border-color); padding-top: 8px;">COPYRIGHT NOTICE</p>
        <div style="font-size: 12px; color: var(--text-muted);">
          © 2026 moondae. All rights reserved.<br><br>
          Matteo's Learning Hub, including all lesson content, quiz items, reading passages, worksheets, performance tasks, and application code, is protected under <strong>Republic Act No. 8293 (Intellectual Property Code of the Philippines)</strong> and applicable international copyright law.<br><br>
          Curriculum competency references (MELCs) are public domain documents issued by the Department of Education, Republic of the Philippines.
        </div>
      </div>
    </div>

    <div style="text-align: center; font-size: 11px; color: var(--text-muted); margin-top: 8px; margin-bottom: 8px;">
      © 2026 moondae. All rights reserved.
    </div>
  `;

  body.innerHTML = html;
  modal.style.display = 'flex';
  closeSettings();
}

function closeAboutModal() {
  const modal = document.getElementById('about-modal');
  if (modal) modal.style.display = 'none';
}

// ==========================================================================
// MATATAG CURRICULUM EXPECTED LEARNING COMPETENCIES DATABASE
// ==========================================================================
const MATATAG_COMPETENCIES = {
  g1: {
    math: {
      "Quarter 1": [
        "M1NS-Ia-1: Visualize and represent whole numbers up to 100",
        "M1NS-Ib-2: Identify the place value (tens, ones) of 2-digit numbers",
        "M1NS-Ic-3: Compare numbers up to 100 using relation symbols (>, <, =)",
        "M1NS-Id-4: Arrange numbers up to 100 in ascending and descending order",
        "M1NS-Ie-5: Read and write ordinal numbers from 1st to 10th"
      ],
      "Quarter 2": [
        "M1NS-IIa-1: Visualize and represent addition of whole numbers up to 100",
        "M1NS-IIb-2: Add 2-digit numbers with sums up to 100 without regrouping",
        "M1NS-IIc-3: Visualize and represent subtraction of numbers up to 100",
        "M1NS-IId-4: Subtract 2-digit numbers from minuends up to 100 without regrouping",
        "M1NS-IIe-5: Solve simple one-step word problems involving addition or subtraction"
      ],
      "Quarter 3": [
        "M1GE-IIIa-1: Identify and describe basic 2D shapes (triangle, square, rectangle, circle)",
        "M1GE-IIIb-2: Compose and decompose 2D shapes using blocks or cutouts",
        "M1ME-IIIc-3: Tell and write time (hour and half-hour) using analog clock",
        "M1ME-IIId-4: Compare lengths, mass, and capacity using non-standard units"
      ],
      "Quarter 4": [
        "M1AL-IVa-1: Complete repeating patterns using shapes, colors, or sizes",
        "M1SP-IVb-2: Collect, organize, and present data in simple tables",
        "M1SP-IVc-3: Interpret data in simple pictographs without scales"
      ]
    },
    science: {
      "Quarter 1": [
        "S1MT-Ia-1: Identify the parts of the human body and their basic functions",
        "S1MT-Ib-2: Use the five sense organs to observe and describe objects",
        "S1MT-Ic-3: Describe healthy habits to protect and care for sense organs"
      ],
      "Quarter 2": [
        "S1LT-IIa-1: Identify common animals in the local environment and their parts",
        "S1LT-IIb-2: Identify common plants in the local environment and their parts",
        "S1LT-IIc-3: Classify plants and animals as living things"
      ],
      "Quarter 3": [
        "S1FE-IIIa-1: Describe how things move (push, pull, roll, slide)",
        "S1FE-IIIb-2: Identify sources of light, heat, and sound in the home",
        "S1FE-IIIc-3: Demonstrate safe habits in handling warm or bright items"
      ],
      "Quarter 4": [
        "S1ES-IVa-1: Observe and describe the weather daily",
        "S1ES-IVb-2: Identify basic landforms and water forms near the school",
        "S1ES-IVc-3: Describe the importance of the Sun to people, plants, and animals"
      ]
    },
    english: {
      "Quarter 1": [
        "LL1OL-Ia-1: Introduce oneself and family using simple greetings",
        "LL1OL-Ib-2: Follow simple 1-to-2 step directions in class routines",
        "LL1PA-Ic-3: Recognize and produce rhyming words in songs and chants"
      ],
      "Quarter 2": [
        "LL1PWS-IIa-1: Identify letters of the alphabet (uppercase and lowercase)",
        "LL1PWS-IIb-2: Associate alphabet letter names with their basic letter sounds",
        "LL1V-IIc-3: Use simple vocabulary words describing common classroom objects"
      ],
      "Quarter 3": [
        "LL1PWS-IIIa-1: Blend sounds to read simple CVC words (e.g., cat, pin, hop)",
        "LL1G-IIIb-2: Use singular and plural nouns with helper words (this/these)",
        "LL1RC-IIIc-3: Retell a story listened to, identifying characters and setting"
      ],
      "Quarter 4": [
        "LL1G-IVa-1: Use simple action words (verbs) to describe daily activities",
        "LL1RC-IVb-2: Make predictions about what happens next in stories",
        "LL1W-IVc-3: Write one's own name and simple high-frequency sight words"
      ]
    },
    filipino: {
      "Quarter 1": [
        "F1PN-Ia-1: Nasasagot ang mga simpleng tanong tungkol sa napakinggang kwento",
        "F1PS-Ib-2: Naipakikilala ang sarili gamit ang magalang na pananalita (po/opo)",
        "F1WG-Ic-3: Natutukoy ang ngalan ng tao, bagay, hayop, o lugar (pangngalan)"
      ],
      "Quarter 2": [
        "F1AL-IIa-1: Kilalanin ang mga titik ng alpabetong Filipino at ang kanilang tunog",
        "F1KP-IIb-2: Nababaybay at nababasa ang mga simpleng salita na may dalawang pantig",
        "F1WG-IIc-3: Nagagamit ang panghalip panao (ako, ikaw, siya) sa pakikipag-usap"
      ],
      "Quarter 3": [
        "F1PB-IIIa-1: Nasusundan ang simpleng nakasulat na panuto na may 1-2 hakbang",
        "F1WG-IIIb-2: Natutukoy ang kasarian ng pangngalan (panlalaki at pambabae)",
        "F1PU-IIIc-3: Naisusulat nang maayos sa papel ang mga titik at simpleng salita"
      ],
      "Quarter 4": [
        "F1WG-IVa-1: Natutukoy ang pandiwa o salitang-kilos sa mga simpleng pangungusap",
        "F1PB-IVb-2: Napagsusunod-sunod ang tatlong pangyayari sa binasang kwento",
        "F1PU-IVc-3: Nakasusulat ng simpleng pangungusap na may tamang espasyo ng mga salita"
      ]
    },
    makabansa: {
      "Quarter 1": [
        "MAK1-Ia-1: Nailalarawan ang sariling pagkakakilanlan (pangalan, edad, gusto)",
        "MAK1-Ib-2: Naipaliliwanag ang konsepto ng pamilya at ang mga kasapi nito",
        "MAK1-Ic-3: Naipakikita ang koordinasyon ng katawan sa kilos lokomotor (lakad, takbo)"
      ],
      "Quarter 2": [
        "MAK1-IIa-1: Natutukoy ang mga tungkulin at karapatan ng bawat bata sa pamilya",
        "MAK1-IIb-2: Nailalarawan ang sariling paaralan (pangalan, lokasyon, mga guro)",
        "MAK1-IIc-3: Nakalilikha ng sining gamit ang mga kulay at linya mula sa kalikasan"
      ],
      "Quarter 3": [
        "MAK1-IIIa-1: Natutukoy ang mga kasapi at tungkulin ng mga katulong sa pamayanan",
        "MAK1-IIIb-2: Naipaliliwanag ang mga simpleng patakaran sa kaligtasan sa paaralan",
        "MAK1-IIIc-3: Nakalalahok sa mga tradisyonal na laro tulad ng piko o tumbang preso"
      ],
      "Quarter 4": [
        "MAK1-IVa-1: Nakikilala ang mga pambansang simbolo (watawat, pambansang ibon)",
        "MAK1-IVb-2: Naipakikita ang pangangalaga sa mga halaman at hayop sa kapaligiran",
        "MAK1-IVc-3: Nakikibahagi sa simpleng pagtatanghal ng musika o sayaw ng rehiyon"
      ]
    },
    gmrc: {
      "Quarter 1": [
        "GMRC1-Ia-1: Naisasagawa ang mga gawi sa kalinisan sa sarili (paghuhugas ng kamay)",
        "GMRC1-Ib-2: Naipakikita ang disiplina sa pag-aayos ng personal na gamit sa silid",
        "GMRC1-Ic-3: Pagsasabi ng totoo sa mga magulang sa lahat ng oras (katapatan)"
      ],
      "Quarter 2": [
        "GMRC1-IIa-1: Paggamit ng magagalang na salita tulad ng po at opo sa nakatatanda",
        "GMRC1-IIb-2: Pagbabahagi ng mga laruan o pagkain sa mga kalaro at kapatid",
        "GMRC1-IIc-3: Pag-iwas sa pananakit o pakikipag-away sa mga kaklase"
      ],
      "Quarter 3": [
        "GMRC1-IIIa-1: Pagsunod sa mga panuto at tuntunin ng guro sa silid-aralan",
        "GMRC1-IIIb-2: Pangangalaga sa mga aklat at kagamitan sa loob ng paaralan",
        "GMRC1-IIIc-3: Pagiging mahinahon sa pakikipag-usap sa kalaro kapag may alitan"
      ],
      "Quarter 4": [
        "GMRC1-IVa-1: Hindi pagsasayang ng pagkain, tubig, at kuryente sa tahanan",
        "GMRC1-IVb-2: Pagtatapon ng basura sa tamang basurahan sa loob ng bahay",
        "GMRC1-IVc-3: Pagtayo nang tuwid habang inaawit ang Lupang Hinirang"
      ]
    }
  },
  g2: {
    math: {
      "Quarter 1": [
        "M2NS-Ia-1: Visualize and represent numbers up to 1,000",
        "M2NS-Ib-2: Identify the place value and value of digits in a 3-digit number",
        "M2NS-Ic-3: Compare and order numbers up to 1,000 using relation symbols",
        "M2NS-Id-4: Round numbers to the nearest tens and hundreds",
        "M2NS-Ie-5: Read and write ordinal numbers from 1st to 20th"
      ],
      "Quarter 2": [
        "M2NS-IIa-1: Add 3-digit numbers with sums up to 1,000 with and without regrouping",
        "M2NS-IIb-2: Subtract 3-digit numbers with and without regrouping",
        "M2NS-IIc-3: Solve multi-step word problems involving addition and subtraction",
        "M2NS-IId-4: Visualize and represent multiplication as repeated addition"
      ],
      "Quarter 3": [
        "M2NS-IIIa-1: Multiply 1-to-2-digit numbers by 1-digit numbers",
        "M2NS-IIIb-2: Visualize and represent division as equal sharing",
        "M2NS-IIIc-3: State division facts for numbers up to 10",
        "M2NS-IIId-4: Read and write unit fractions with denominators up to 10"
      ],
      "Quarter 4": [
        "M2GE-IVa-1: Identify and draw lines of symmetry in 2D shapes",
        "M2ME-IVb-2: Tell time in hours and minutes using analog clock",
        "M2ME-IVc-3: Solve word problems involving elapsed time in minutes",
        "M2ME-IVd-4: Compare mass in grams (g) and kilograms (kg)"
      ]
    },
    science: {
      "Quarter 1": [
        "S2MT-Ia-1: Classify objects as solid, liquid, or gas based on shape and flow",
        "S2MT-Ib-2: Describe changes in objects when bent, stretched, or pressed",
        "S2MT-Ic-3: Practice safety precautions in handling household chemicals"
      ],
      "Quarter 2": [
        "S2LT-IIa-1: Identify the main external parts and functions of human body",
        "S2LT-IIb-2: Identify animal body coverings and how they help them survive",
        "S2LT-IIc-3: Classify plants by habitat (terrestrial, aquatic) and stem type"
      ],
      "Quarter 3": [
        "S2FE-IIIa-1: Describe how force affects the shape or movement of objects",
        "S2FE-IIIb-2: Identify natural and artificial sources of light and sound",
        "S2FE-IIIc-3: Demonstrate how shadows change shape during the day"
      ],
      "Quarter 4": [
        "S2ES-IVa-1: Identify different types of soil and their uses in gardening",
        "S2ES-IVb-2: Describe water sources in the community and water safety",
        "S2ES-IVc-3: Record daily temperature and weather using basic charts"
      ]
    },
    english: {
      "Quarter 1": [
        "EN2OL-Ia-1: Ask and answer simple questions about oneself, family, and peers",
        "EN2PWS-Ib-2: Read words with short vowel sounds in CVC pattern",
        "EN2G-Ic-3: Classify common and proper nouns in simple sentences"
      ],
      "Quarter 2": [
        "EN2PWS-IIa-1: Decode words with long vowel sounds (CVCe pattern)",
        "EN2G-IIb-2: Use singular and plural nouns with correct be-verbs (is/are)",
        "EN2RC-IIc-3: Sequence three events in a story read aloud"
      ],
      "Quarter 3": [
        "EN2OL-IIIa-1: Express feelings and opinions in class discussions",
        "EN2G-IIIb-2: Use personal pronouns (I, you, he, she, it, we, they) correctly",
        "EN2RC-IIIc-3: Identify the cause and effect in simple sentences"
      ],
      "Quarter 4": [
        "EN2G-IVa-1: Use simple present tense of verbs in matching subjects",
        "EN2G-IVb-2: Identify and use common adjectives (describing words)",
        "EN2W-IVc-3: Write a 2-sentence description of an object or animal"
      ]
    },
    filipino: {
      "Quarter 1": [
        "F2PN-Ia-1: Nasasagot ang mga tanong tungkol sa napakinggang balita o tula",
        "F2WG-Ib-2: Nagagamit ang pangngalang pantangi at pambalana sa pangungusap",
        "F2KP-Ic-3: Natutukoy ang mga salitang magkakatugma sa tula o awit"
      ],
      "Quarter 2": [
        "F2WG-IIa-1: Nagagamit ang mga panghalip pamatlig (ito, iyan, iyon) sa pagtukoy",
        "F2PB-IIb-2: Napagsusunod-sunod ang apat na pangyayari sa kwento",
        "F2PT-IIc-3: Nabibigyang-kahulugan ang mga salita gamit ang context clues"
      ],
      "Quarter 3": [
        "F2WG-IIIa-1: Nagagamit ang mga pandiwa sa kasalukuyan, naganap, at gaganapin",
        "F2PB-IIIb-2: Nakapagbibigay ng sariling wakas sa napakinggan o binasang kwento",
        "F2PU-IIIc-3: Nakasusulat nang maayos sa kabit-kabit (cursive) na paraan"
      ],
      "Quarter 4": [
        "F2WG-IVa-1: Natutukoy at nagagamit ang mga pang-uri sa paglalarawan",
        "F2PB-IVb-2: Naibibigay ang paksa o kaisipan ng isang binasang talata",
        "F2PU-IVc-3: Nakasusulat ng isang simpleng liham-paanyaya gamit ang bantas"
      ]
    },
    makabansa: {
      "Quarter 1": [
        "MAK2-Ia-1: Naipaliliwanag ang konsepto ng sariling komunidad at lokasyon nito",
        "MAK2-Ib-2: Nailalarawan ang pisikal na kapaligiran ng sariling komunidad",
        "MAK2-Ic-3: Naipakikita ang sapat na kontrol sa kilos lokomotor sa paglalaro"
      ],
      "Quarter 2": [
        "MAK2-IIa-1: Natutukoy ang mga mahahalagang tao at landmarks sa komunidad",
        "MAK2-IIb-2: Naipaliliwanag ang kahalagahan ng pakikipagtulungan sa komunidad",
        "MAK2-IIc-3: Nakalilikha ng sining gamit ang mga katutubong disenyo ng komunidad"
      ],
      "Quarter 3": [
        "MAK2-IIIa-1: Nailalarawan ang iba't ibang kultura at tradisyon sa sariling pamayanan",
        "MAK2-IIIb-2: Naipakikita ang pagsunod sa mga batas trapiko at kaligtasan sa kalsada",
        "MAK2-IIIc-3: Nakalalahok sa mga tradisyonal na sayaw ng komunidad"
      ],
      "Quarter 4": [
        "MAK2-IVa-1: Natutukoy ang mga pangunahing kabuhayan at produkto sa pamayanan",
        "MAK2-IVb-2: Nailalarawan ang tamang pag-aalaga sa mga likas na yaman ng komunidad",
        "MAK2-IVc-3: Nakikibahagi sa pagtatanghal ng dula tungkol sa isang lokal na bayani"
      ]
    },
    gmrc: {
      "Quarter 1": [
        "GMRC2-Ia-1: Paglilinis ng katawan at pag-aayos ng sariling higaan (kaayusan)",
        "GMRC2-Ib-2: Pagliligpit ng personal na kagamitan pagkatapos gamitin",
        "GMRC2-Ic-3: Pagsasabi ng katotohanan kahit na may takot sa parusa (katapatan)"
      ],
      "Quarter 2": [
        "GMRC2-IIa-1: Paggamit ng po/opo, pakisuyo, at salamat sa pakikipag-usap",
        "GMRC2-IIb-2: Pagbibigay-daan at pagtulong sa may kapansanan o matatanda",
        "GMRC2-IIc-3: Pagpapakita ng pag-unawa sa kalaro kapag natalo sa laro (sportsmanship)"
      ],
      "Quarter 3": [
        "GMRC2-IIIa-1: Pagsunod sa mga rules sa silid-aralan at sa pagpila (disiplina)",
        "GMRC2-IIIb-2: Pag-iingat sa mga halaman sa hardin at pampublikong lugar",
        "GMRC2-IIIc-3: Mahinahong pakikipag-ayos kapag nagkaroon ng hindi pagkakaunawaan"
      ],
      "Quarter 4": [
        "GMRC2-IVa-1: Pagtitipid sa paggamit ng papel, lapis, at baong pera",
        "GMRC2-IVb-2: Pagsasagawa ng 3Rs (Reduce, Reuse, Recycle) sa paaralan",
        "GMRC2-IVc-3: Paggalang sa watawat at pagkanta nang may galang sa Lupang Hinirang"
      ]
    }
  },
  g3: {
    math: {
      "Term 1": [
        "M3NS-T1-W1-2: Illustrate, estimate, and derive formulas for the area of squares and rectangles using square tile units",
        "M3NS-T1-W2: Find the areas of squares and rectangles in sq. cm and sq. m, solve area word problems, and recognize points, lines, segments, and rays",
        "M3NS-T1-W3: Recognize and draw parallel, intersecting, and perpendicular lines; draw line segments of equal length using a ruler",
        "M3NS-T1-W4: Represent whole numbers up to 10,000 using pictorial models and numerals",
        "M3NS-T1-W5: Read and write numbers up to 10,000 in numerals and in words",
        "M3NS-T1-W6: Describe the position of objects using ordinal numbers up to 100th",
        "M3NS-T1-W7-8: Determine place value, value, and digit of a 4-digit number",
        "M3NS-T1-W9: Round whole numbers to the nearest ten, hundred, or thousand; compare numbers using relation symbols",
        "M3NS-T1-W10: Order whole numbers up to 10,000 from smallest to largest and vice versa"
      ],
      "Term 2": [
        "M3NS-T2-W1: Measure, estimate, and compare mass of objects in grams, kilograms, and milligrams",
        "M3NS-T2-W2: Measure, estimate, and compare capacity in liters and milliliters",
        "M3NS-T2-W3: Read, write, and add money up to ₱10,000, with and without regrouping",
        "M3NS-T2-W4: Estimate the sum of addends with up to 4 digits",
        "M3NS-T2-W5: Solve problems involving addition of numbers with sums up to 10,000, including money",
        "M3NS-T2-W6: Subtract numbers up to 10,000, with and without regrouping",
        "M3NS-T2-W7: Estimate difference of two numbers, and perform addition/subtraction of 3 to 4 numbers",
        "M3NS-T2-W8: Solve problems involving addition and subtraction, and collect data from experiments",
        "M3NS-T2-W9: Present and interpret data in tables and single bar graphs",
        "M3NS-T2-W10: Solve problems using data in single bar graphs, and describe/compare outcomes of events"
      ],
      "Term 3": [
        "M3NS-T3-W1: Multiply numbers using the 6, 7, 8, and 9 multiplication tables",
        "M3NS-T3-W2: Illustrate and apply properties of multiplication for the 6, 7, 8, and 9 tables",
        "M3NS-T3-W3: Multiply numbers with/without regrouping (2 to 4 digits), and estimate products",
        "M3NS-T3-W4: Solve 1-to-2 step multiplication problems, and determine missing terms in patterns",
        "M3NS-T3-W5: Illustrate division through equal jumps on number line and as inverse of multiplication",
        "M3NS-T3-W6: Divide numbers using the 6, 7, 8, and 9 multiplication tables, and solve missing numbers",
        "M3NS-T3-W7: Divide numbers (2 to 4 digits) with and without remainder, including by 10, 100, 1000",
        "M3NS-T3-W8-9: Estimate quotients, solve division problems, represent fractions, and add/subtract similar fractions",
        "M3ME-T3-W9: Describe and draw the effect of a two-direction multi-step slide (translation) in basic shapes",
        "M3ME-T3-W10: Identify shapes with line symmetry, and complete symmetric figures"
      ]
    },
    science: {
      "Term 1": [
        "S3MT-T1-W1-3: Identify objects, activities, or natural events in the local environment, participate in guided activities, describe uses of science equipment, and explain science process skills",
        "S3MT-T1-W4: Describe physical properties of solid materials (hard, shiny, stretchable), explain phase changes, handle/dispose of materials properly, and identify properties and uses of metals"
      ],
      "Term 2": [
        "S3LT-T2-W1-4: Observe and describe the difference between living and non-living things, their characteristics (grow, respond, reproduce), and describe outer body parts of animals and plants",
        "S3LT-T2-W5-7: Identify basic needs of all living things, explain dependencies on the environment, recognize the need to protect the environment, explore object movement, and measure position changes"
      ],
      "Term 3": [
        "S3FE-T3-W1-3: Explore and describe how sound is made and transferred, describe sources of light and their uses, explore light behavior, and explain safety measures for light and sound",
        "S3ES-T3-W4-6: Locate and describe non-living things, identify useful things made from earth materials, record weather changes and their effects, observe sky objects, and describe sun safety"
      ]
    },
    english: {
      "Term 1": [
        "EN3-T1-W1-5: Identify sight words and read words accurately according to patterns (CVCC, CCVC), identify high-frequency words, and use content-specific words",
        "EN3-T1-W6-10: Use simple sentences to express ideas, identify parts of sentences (subject/predicate), use capitalization and punctuation, and comprehend stories (characters, setting, plot)"
      ],
      "Term 2": [
        "EN3-T2-W1-5: Decode words with long vowels (CVCe) and vowel digraphs, identify compound words and homonyms, and use personal and possessive pronouns",
        "EN3-T2-W6-10: Sequence events, identify main ideas, write compound sentences, make inferences, and write short paragraphs"
      ],
      "Term 3": [
        "EN3-T3-W1-5: Decode words with diphthongs and r-controlled vowels, use action and linking verbs, and write descriptive sentences",
        "EN3-T3-W6-10: Form degrees of comparison of adjectives, use prepositions, identify cause-and-effect, and write simple letters or journal entry"
      ]
    },
    filipino: {
      "Term 1": [
        "F3-T1-W1-5: Nasasagot ang mga tanong tungkol sa napakinggang kwento, naipakikilala ang sarili gamit ang magalang na pananalita, at nagagamit ang pangngalang pantangi at pambalana",
        "F3-T1-W6-10: Natutukoy ang kasarian ng pangngalan, elemento ng kwento (tauhan, tagpuan, banghay), at nabibigyang-kahulugan ang mga salita"
      ],
      "Term 2": [
        "F3-T2-W1-5: Nagagamit ang panghalip panao at pamatlig sa pakikipag-usap, at nasusunod ang 2-3 hakbang na panuto",
        "F3-T2-W6-10: Napagsusunod-sunod ang mga pangyayari sa kwento, natutukoy ang paksang diwa, at nakasusulat na may tamang bantas"
      ],
      "Term 3": [
        "F3-T3-W1-5: Natutukoy at nagagamit ang pandiwa sa iba't ibang aspekto, at nakikilala ang mga salitang magkasingkahulugan at magkasalungat",
        "F3-T3-W6-10: Naiuugnay ang sariling karanasan sa binasa, napag-iiba ang katotohanan sa opinyon, at nakasusulat ng talaarawan o liham-pangkaibigan"
      ]
    },
    makabansa: {
      "Term 1": [
        "MAK3-T1-W1-5: Natatalakay ang mahahalagang tao, lugar, at pangyayari na bahagi ng kasaysayan ng pook na kinabibilangan",
        "MAK3-T1-W6-8: Naipaliliwanag ang mga pagbabagong naganap sa kinabibilangang komunidad",
        "MAK3-T1-W9-10: Napahahalagahan ang kasaysayan at pagbabagong nagaganap sa kinabibilangang komunidad"
      ],
      "Term 2": [
        "MAK3-T2-W1-2: Naipaliliwanag ang ugnayan ng kapaligiran at kultura",
        "MAK3-T2-W3-5: Natatalakay ang kahulugan ng pagkakakilanlan at sagisag ng kinabibilangang komunidad tulad ng himno, coat of arms, bayaning lokal at iba pa",
        "MAK3-T2-W6-8: Naiuugnay ang kultura sa sariling pagkakakilanlan",
        "MAK3-T2-W9-10: Napahahalagahan ang sining at kultura ng mas malawak na komunidad (bayan, lungsod, lalawigan, rehiyon)"
      ],
      "Term 3": [
        "MAK3-T3-W1: Naipaliliwanag ang konsepto at mga kaugnay na kaisipan ng pagka-Pilipino",
        "MAK3-T3-W2-3: Naiuugnay ang sariling katangian sa pagiging isang Pilipino",
        "MAK3-T3-W4: Napahahalagahan ang pagkakakilanlan bilang isang Pilipino",
        "MAK3-T3-W5-6: Natutukoy ang papel ng pagiging aktibong Pilipino",
        "MAK3-T3-W7-8: Napahahalagahan ang papel ng pagiging aktibong Pilipino",
        "MAK3-T3-W9-10: Naipamamalas ang pagiging isang aktibo at responsableng batang Pilipino (Pagsasakatuparan ng Panatang Makabayan)"
      ]
    },
    gmrc: {
      "Term 1": [
        "GMRC3-T1-W1-5: Naipakikita ang tiwala sa sarili, pagiging mapagmalasakit sa pag-iingat ng pera/gamit, at pagiging responsable sa tungkulin",
        "GMRC3-T1-W6-10: Naipakikita ang pananalig sa Diyos sa pamamagitan ng pagsunod sa Kaniyang aral, disiplina sa kapaligiran, at magalang na pakikitungo"
      ],
      "Term 2": [
        "GMRC3-T2-W1-5: Naipakikita ang pagiging mapagpasensiya sa kapuwa, maingat na paghuhusga sa impormasyon, at pagiging totoo sa pakikipag-ugnayan",
        "GMRC3-T2-W6-10: Naipakikita ang pagkukusa sa gawain, pagtulong sa kapuwa, pagiging masunurin, at paggalang sa Persons with Disability (PWD)"
      ],
      "Term 3": [
        "GMRC3-T3-W1-5: Nakapagsasanay sa pagiging madasalin, pagiging masinop sa paglikha ng gamit, at pagmamahal sa bayan sa angkop na kilos",
        "GMRC3-T3-W6-10: Nakikipagtulungan sa pangkatang gawain (bayanihan), pangangalaga sa kalikasan, paghihiwalay ng basura, at paggalang sa watawat"
      ]
    }
  }
};

function formatCompetencyText(item, subjectKey) {
  if (!item.includes(':')) return item;
  
  const parts = item.split(':');
  const code = parts[0].trim();
  const text = parts.slice(1).join(':').trim();
  
  let category = '';
  
  if (subjectKey === 'math') {
    if (code.includes('NS')) category = 'Number Sense';
    else if (code.includes('GE')) category = 'Geometry';
    else if (code.includes('ME')) category = 'Measurement';
    else if (code.includes('AL')) category = 'Patterns & Algebra';
    else if (code.includes('SP')) category = 'Statistics & Probability';
    else category = 'Mathematics';
  } else if (subjectKey === 'science') {
    if (code.includes('MT')) category = 'Matter';
    else if (code.includes('LT')) category = 'Life Science';
    else if (code.includes('FE')) category = 'Force, Motion & Energy';
    else if (code.includes('ES')) category = 'Earth & Space';
    else category = 'Science';
  } else if (subjectKey === 'english') {
    if (code.includes('OL')) category = 'Oral Language';
    else if (code.includes('PWS')) category = 'Phonics & Word Study';
    else if (code.includes('V')) category = 'Vocabulary';
    else if (code.includes('G')) category = 'Grammar';
    else if (code.includes('RC')) category = 'Reading Comprehension';
    else if (code.includes('W')) category = 'Writing';
    else category = 'English';
  } else if (subjectKey === 'filipino') {
    if (code.includes('PN')) category = 'Pakikinig (Listening)';
    else if (code.includes('PS')) category = 'Pagsasalita (Speaking)';
    else if (code.includes('WG')) category = 'Wika at Gramatika (Grammar)';
    else if (code.includes('AL')) category = 'Panitikan (Literature)';
    else if (code.includes('KP')) category = 'Kamalayang Ponolohika';
    else if (code.includes('PT')) category = 'Talasalitaan (Vocabulary)';
    else if (code.includes('PB')) category = 'Pagbasa (Reading)';
    else if (code.includes('PU')) category = 'Pagsulat (Writing)';
    else category = 'Filipino';
  } else if (subjectKey === 'makabansa') {
    category = 'Makabansa';
  } else if (subjectKey === 'gmrc') {
    category = 'GMRC';
  } else {
    category = subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1);
  }
  
  return `<strong>${category}:</strong> ${text}`;
}

let competenciesFontScale = 1.0;

function adjustCompetenciesFontSize(direction) {
  const bodyEl = document.getElementById('competencies-modal-body');
  if (!bodyEl) return;
  if (direction === 0) {
    competenciesFontScale = 1.0;
  } else {
    competenciesFontScale = Math.max(0.7, Math.min(2.0, competenciesFontScale + direction * 0.1));
  }
  bodyEl.style.fontSize = `${12.5 * competenciesFontScale}px`;
}

function showCompetencies(subjectKey) {
  // Reset font scale
  competenciesFontScale = 1.0;
  const bodyEl = document.getElementById('competencies-modal-body');
  if (bodyEl) {
    bodyEl.style.fontSize = '12.5px';
  }

  const grade = getLearnerGrade();
  const subjectNameMap = {
    math: 'Mathematics',
    science: 'Science',
    english: 'English',
    filipino: 'Filipino',
    makabansa: 'Makabansa',
    gmrc: 'GMRC'
  };

  const subjectName = subjectNameMap[subjectKey] || subjectKey.toUpperCase();
  const gradeLabel = grade === 'g1' ? 'Grade 1' : grade === 'g2' ? 'Grade 2' : 'Grade 3';
  
  const titleEl = document.getElementById('competencies-modal-title');
  if (titleEl) {
    titleEl.innerText = `${subjectName} Competencies (${gradeLabel})`;
  }

  const gradeData = MATATAG_COMPETENCIES[grade] || {};
  const subjectData = gradeData[subjectKey] || {};

  if (!bodyEl) return;

  let contentHTML = '';
  const quarters = (grade === 'g3') ? ["Term 1", "Term 2", "Term 3"] : ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"];
  
  let hasData = false;
  quarters.forEach(q => {
    const list = subjectData[q] || [];
    if (list.length > 0) {
      hasData = true;
      contentHTML += `
        <div class="competencies-quarter-section">
          <div class="competencies-quarter-title">📅 ${q}</div>
          <ul class="competencies-list">
            ${list.map(item => `<li class="competencies-item">${formatCompetencyText(item, subjectKey)}</li>`).join('')}
          </ul>
        </div>
      `;
    }
  });

  if (!hasData) {
    contentHTML = `
      <div style="text-align: center; padding: 30px; color: var(--text-muted); font-size: 13px;">
        📭 No competencies found for this subject and grade level.
      </div>
    `;
  }

  bodyEl.innerHTML = contentHTML;

  const modal = document.getElementById('competencies-modal');
  if (modal) modal.style.display = 'flex';
}

function closeCompetenciesModal() {
  const modal = document.getElementById('competencies-modal');
  if (modal) modal.style.display = 'none';
  const bodyEl = document.getElementById('competencies-modal-body');
  if (bodyEl) {
    bodyEl.style.fontSize = '';
  }
  competenciesFontScale = 1.0;
}

function toggleCompetenciesGrid() {
  const grid = document.getElementById('parents-competencies-grid');
  const chevron = document.getElementById('competencies-toggle-chevron');
  if (!grid) return;
  if (grid.style.display === 'none') {
    grid.style.display = 'grid';
    if (chevron) chevron.innerText = '▼';
  } else {
    grid.style.display = 'none';
    if (chevron) chevron.innerText = '▶';
  }
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
  
  let choicesHTML = '';
  question.list.forEach((choice, idx) => {
    choicesHTML += `
      <button class="ws-btn-action" onclick="answerOddOneOut(${idx})" style="padding: 14px; font-size: 16px; font-weight: 600; width: 100%; border-radius: 12px;">
        ${choice}
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
  
  let choicesHTML = '';
  question.choices.forEach((choice, idx) => {
    choicesHTML += `
      <button class="ws-btn-action" onclick="answerEmpathyScenarios(${idx})" style="padding: 12px; font-size: 14px; text-align: left; width: 100%; border-radius: 10px; margin-bottom: 8px;">
        ❤️ ${choice}
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
