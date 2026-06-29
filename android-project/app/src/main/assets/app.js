// Matteo's Learning Hub - Core Orchestrator
// Manages state variables, weekly data downloading/caching, theme, settings, and main router

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

function stripHtmlTagsAndQuotes(text) {
  if (!text) return '';
  return text.replace(/<[^>]*>/g, '').replace(/"/g, '&quot;').trim();
}

async function calculateSHA256(text) {
  const msgBuffer = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

async function verifyFileHash(text, expectedHash) {
  if (!expectedHash) return false;
  const calculated = await calculateSHA256(text);
  return calculated.toLowerCase() === expectedHash.toLowerCase();
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

const REMOTE_UPDATE_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? window.location.origin
  : "https://raw.githubusercontent.com/iammoondae/matts-files/main";

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
let slideTransitionDirection = null;

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
        console.warn("Legacy .js database format is no longer supported for security reasons.");
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
        console.warn("Legacy .js review database format is no longer supported for security reasons.");
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

// Handler for uploading one or multiple weekX.json or image files manually
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
    const isJSON = file.name.endsWith('.json');
    const isImage = /\.(png|jpe?g|gif|webp)$/i.test(file.name);
    
    reader.onload = (e) => {
      const content = e.target.result;
      if (isJSON) {
        try {
          const parsed = JSON.parse(content);
          const weekMatch = file.name.match(/^week(\d+)\.json$/i);
          const reviewMatch = file.name.match(/^review_(.+)\.json$/i);
          
          if (weekMatch) {
            const w = parseInt(weekMatch[1]);
            safeStorage.setItem(`local_${learnerGrade}_week_data_${w}`, JSON.stringify(parsed));
            loadedWeeks.push(w);
            successWeeksCount++;
            
            if (w === currentWeek) {
              loadWeekData(currentWeek);
            }
          } else if (reviewMatch) {
            const rDate = reviewMatch[1];
            safeStorage.setItem(`local_${learnerGrade}_review_data_${rDate}`, JSON.stringify(parsed));
            successWeeksCount++;
          } else {
            throw new Error("Invalid JSON filename. Must be 'weekX.json' or 'review_DATE.json'.");
          }
        } catch (err) {
          console.error(err);
          alert(`Error loading "${file.name}": ${err.message}`);
        }
      } else if (isJS) {
        alert(`Legacy .js uploads are deprecated for security. Please convert "${file.name}" to .json format.`);
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
          msg += `• Loaded ${successWeeksCount} data sets to ${learnerGrade.toUpperCase()}\n`;
        }
        if (successImagesCount > 0) {
          msg += `• Loaded ${successImagesCount} images: ${loadedImages.join(', ')}\n`;
        }
        if (successWeeksCount > 0 || successImagesCount > 0) {
          alert(msg);
        }
      }
    };
    
    if (isJS || isJSON) {
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


// Unified function to download and verify weekly topics, reviews, and images
async function downloadWeeklyTopics(reporter) {
  if (reporter && typeof reporter.onStart === 'function') {
    reporter.onStart();
  }

  const learnerGrade = getLearnerGrade();
  const manifestUrl = `${REMOTE_UPDATE_URL}/data/${learnerGrade}/manifest.json`;

  try {
    const response = await fetch(manifestUrl, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to fetch manifest for ${learnerGrade.toUpperCase()} (HTTP ${response.status})`);
    }
    const manifest = await response.json();
    const localVersion = safeStorage.getItem(`local_${learnerGrade}_manifest_version`);
    const remoteVersion = manifest.version || '';

    if (localVersion && localVersion === remoteVersion) {
      if (reporter && typeof reporter.onNoUpdate === 'function') {
        reporter.onNoUpdate();
      }
      return;
    }

    const weeksToDownload = manifest.weeks || [];
    const imagesToDownload = manifest.images || [];
    const reviewsToDownload = manifest.reviews || [];

    if (weeksToDownload.length === 0 && imagesToDownload.length === 0 && reviewsToDownload.length === 0) {
      if (reporter && typeof reporter.onNoUpdate === 'function') {
        reporter.onNoUpdate();
      }
      return;
    }

    const totalTasks = weeksToDownload.length + reviewsToDownload.length + imagesToDownload.length;
    let completedCount = 0;

    const reportProgress = () => {
      completedCount++;
      if (reporter && typeof reporter.onProgress === 'function') {
        reporter.onProgress(completedCount, totalTasks);
      }
    };

    if (reporter && typeof reporter.onProgress === 'function') {
      reporter.onProgress(0, totalTasks);
    }

    const loadedWeeks = [];
    const loadedReviews = [];
    const loadedImages = [];

    // Helper for downloading a single file with optional SHA-256 hash verification
    const downloadAndVerifyFile = async (url, expectedHash, filename) => {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) {
        throw new Error(`Download failed for ${filename} (HTTP ${res.status})`);
      }
      const text = await res.text();
      
      if (expectedHash) {
        const isValid = await verifyFileHash(text, expectedHash);
        if (!isValid) {
          throw new Error(`Content verification failed: Hash mismatch for file ${filename}.`);
        }
      }
      return text;
    };

    const tasks = [];

    // 1. Download week JSON files
    weeksToDownload.forEach(item => {
      let w = typeof item === 'object' ? (item.week || item.file.match(/\d+/)[0]) : item;
      let expectedHash = typeof item === 'object' ? item.sha256 : null;
      w = parseInt(w);
      const filename = `week${w}.json`;
      const url = `${REMOTE_UPDATE_URL}/data/${learnerGrade}/${filename}`;

      tasks.push(
        downloadAndVerifyFile(url, expectedHash, filename)
          .then(text => {
            JSON.parse(text); // validate JSON syntax
            safeStorage.setItem(`local_${learnerGrade}_week_data_${w}`, text);
            loadedWeeks.push(w);
            reportProgress();
          })
      );
    });

    // 2. Download review JSON files
    reviewsToDownload.forEach(item => {
      let r = typeof item === 'object' ? (item.review || item.file.match(/review_(.+)\.json/)[1]) : item;
      let expectedHash = typeof item === 'object' ? item.sha256 : null;
      const filename = `review_${r}.json`;
      const url = `${REMOTE_UPDATE_URL}/data/${learnerGrade}/${filename}`;

      tasks.push(
        downloadAndVerifyFile(url, expectedHash, filename)
          .then(text => {
            JSON.parse(text); // validate JSON syntax
            safeStorage.setItem(`local_${learnerGrade}_review_data_${r}`, text);
            loadedReviews.push(r);
            reportProgress();
          })
      );
    });

    // 3. Download image files
    imagesToDownload.forEach(item => {
      let img = typeof item === 'object' ? item.file : item;
      let expectedHash = typeof item === 'object' ? item.sha256 : null;
      const url = `${REMOTE_UPDATE_URL}/images/${img}`;

      tasks.push(
        fetch(url, { cache: 'no-store' })
          .then(res => {
            if (!res.ok) throw new Error(`Image ${img} download failed (HTTP ${res.status})`);
            return res.blob();
          })
          .then(async blob => {
            if (expectedHash) {
              const arrayBuffer = await blob.arrayBuffer();
              const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
              const hashArray = Array.from(new Uint8Array(hashBuffer));
              const calculated = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
              if (calculated.toLowerCase() !== expectedHash.toLowerCase()) {
                throw new Error(`Content verification failed: Hash mismatch for image ${img}.`);
              }
            }

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
            reportProgress();
          })
      );
    });

    await Promise.all(tasks);

    if (remoteVersion) {
      safeStorage.setItem(`local_${learnerGrade}_manifest_version`, remoteVersion);
    }
    buildWeekSelector();
    
    if (loadedWeeks.includes(currentWeek)) {
      loadWeekData(currentWeek);
    }

    if (reporter && typeof reporter.onSuccess === 'function') {
      reporter.onSuccess({
        learnerGrade,
        loadedWeeks,
        loadedReviews,
        loadedImages
      });
    }
  } catch (err) {
    console.error(err);
    if (reporter && typeof reporter.onError === 'function') {
      reporter.onError(err);
    }
  }
}

// Function to check online updates from the GitHub repository (Option B)
function checkWeeklyUpdates() {
  const btn = document.getElementById('update-topics-btn');
  const headerBtn = document.getElementById('header-update-btn');

  const settingsReporter = {
    onStart() {
      if (btn) {
        btn.disabled = true;
        btn.innerText = "⏳ Checking Updates...";
      }
      if (headerBtn) {
        headerBtn.disabled = true;
        headerBtn.innerText = "⏳ Updating...";
      }
    },
    onNoUpdate() {
      alert("There is no available update.");
      this.onFinished();
    },
    onProgress(completed, total) {
      if (btn) {
        btn.innerText = `⏳ Updating (${completed}/${total})...`;
      }
      if (headerBtn) {
        headerBtn.innerText = `⏳ (${completed}/${total})...`;
      }
    },
    onSuccess(details) {
      const { learnerGrade, loadedWeeks, loadedReviews, loadedImages } = details;
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
      this.onFinished();
    },
    onError(err) {
      alert(`Update failed: ${err.message || err}\n\nPlease check your internet connection or GitHub repository setup.`);
      this.onFinished();
    },
    onFinished() {
      if (btn) {
        btn.disabled = false;
        btn.innerText = "📥 Update Weekly Topics";
      }
      if (headerBtn) {
        headerBtn.disabled = false;
        headerBtn.innerText = "📥 Update";
      }
    }
  };

  downloadWeeklyTopics(settingsReporter);
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

    window.AppModules.reading.render(data, qBody);
    return;
  }
  
  if (!data || !data[currentSubject]) {
    qBody.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <span style="font-size: 48px; display: block; margin-bottom: 15px;">📚</span>
        No data available for ${currentSubject.toUpperCase()} in the ${currentLevel === 'core' ? 'Grade 3' : 'Grade 4-5'} level for Week ${currentWeek}.
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
    window.AppModules.studyguide.render(subjectData, qBody);
  } 
  else if (currentMode === 'quiz') {
    document.getElementById('slide-mode-label').innerText = 'Standard Quiz';
    window.AppModules.quiz.render(subjectData.standard, qBody);
  } 
  else if (currentMode === 'challenge') {
    document.getElementById('slide-mode-label').innerText = 'Challenge Mode';
    window.AppModules.quiz.render(subjectData.challenge, qBody);
  } 
  else if (currentMode === 'checklist') {
    document.getElementById('slide-mode-label').innerText = 'Monthly Competencies Check';
    document.getElementById('slide-num-label').style.display = 'none';
    window.AppModules.home_dash.renderMonthlyChecklist(data, qBody);
  }
  else if (currentMode === 'performance') {
    document.getElementById('slide-mode-label').innerText = 'Performance Task';
    document.getElementById('slide-num-label').style.display = 'none';
    window.AppModules.performance.render(subjectData, qBody);
  }
  else if (currentMode === 'worksheet') {
    document.getElementById('slide-mode-label').innerText = 'Practice Worksheet';
    document.getElementById('slide-num-label').style.display = 'none';
    window.AppModules.worksheet.render(subjectData, qBody);
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
const RAW_APP_VERSION = "__APP_BUILD_VERSION__";
const RAW_BUILD_DATE = "__APP_BUILD_DATE__";

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

function getMascotName() {
  return 'Matteo';
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

function prevSlide() {
  if (currentMode === 'study') {
    if (window.AppModules && window.AppModules.studyguide) {
      window.AppModules.studyguide.prev();
    }
  } else if (currentMode === 'reading') {
    if (window.AppModules && window.AppModules.reading) {
      window.AppModules.reading.prev();
    }
  }
}

function nextSlide() {
  if (currentMode === 'study') {
    if (window.AppModules && window.AppModules.studyguide) {
      window.AppModules.studyguide.next();
    }
  } else if (currentMode === 'reading') {
    if (window.AppModules && window.AppModules.reading) {
      window.AppModules.reading.next();
    }
  }
}
