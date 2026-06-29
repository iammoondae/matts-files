// Matteo's Learning Hub - Parent Dashboard Module
window.AppModules = window.AppModules || {};

window.AppModules.parent_dash = (() => {

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

  function tryOpen(callback) {
    closeSidebar();
    if (isParentUnlocked) {
      if (callback) callback();
      else setMode('parents');
    } else {
      showPinModal(callback || (() => setMode('parents')));
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

  function forgotPin(event) {
    if (event) event.preventDefault();
    
    const num1 = Math.floor(Math.random() * 9) + 11; // 11 to 19
    const num2 = Math.floor(Math.random() * 4) + 6;  // 6 to 9
    const correctAnswer = num1 * num2;
    
    const response = prompt(`🔑 Parental Gate Recovery:\nSolve this multiplication problem to prove you are an adult and reset the PIN to '0000':\n\nWhat is ${num1} × ${num2}?`);
    
    if (response === null) return;
    
    if (parseInt(response.trim()) === correctAnswer) {
      safeStorage.setItem('parent_pin', '0000');
      alert("Verification successful!\nYour Parent PIN has been reset to the default '0000'.");
      clearPin();
    } else {
      alert("Incorrect answer. PIN was not reset.");
    }
  }

  function changePin() {
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
    render();
  }

  function parentsResetWorksheet(wNum, subjectKey) {
    const grade = getLearnerGrade();
    const storageKey = `worksheet_${grade}_w${wNum}_sses_${subjectKey}_${currentLevel}_completed`;
    safeStorage.removeItem(storageKey);
    render();
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

  function render() {
    currentMode = 'parents';
    saveSessionState();
    
    document.getElementById('header-icon').innerText = '👨‍👩‍👦';
    document.getElementById('header-title').innerText = "Parent's Dashboard";
    document.getElementById('header-subtitle').innerText = 'Secure dashboard for progress tracking and parental oversight';
    
    document.getElementById('viewport-footer').style.display = 'none';
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('slide-num-label').style.display = 'none';
    document.getElementById('slide-mode-label').innerText = 'Parents';
    
    clearAllActiveNavButtons();
    const parentsBtn = document.getElementById('btn-parents-dashboard');
    if (parentsBtn) parentsBtn.classList.add('active');

    const qBody = document.getElementById('viewport-body');
    if (!qBody) return;

    const learnerGrade = getLearnerGrade();
    const nickname = safeStorage.getItem('session_nickname') || 'Matteo';
    const streak = getActiveStreak();
    const timeLog = getActiveLearningTimeLast7Days();
    
    const remediationItems = [];
    const subjectsConfig = {
      math: { name: 'Mathematics', color: 'var(--accent)' },
      science: { name: 'Science', color: '#10b981' },
      english: { name: 'English', color: '#a855f7' },
      filipino: { name: 'Filipino', color: '#f43f5e' },
      makabansa: { name: 'Makabansa', color: '#3b82f6' },
      gmrc: { name: 'GMRC', color: '#eab308' }
    };

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
        } catch (e) {}
      }
    }

    const masteryScores = [];
    const subjectsKeys = ['math', 'science', 'english', 'filipino', 'makabansa', 'gmrc'];
    let overallSum = 0;
    let overallMax = 0;
    
    subjectsKeys.forEach(sub => {
      let quizSum = 0;
      let quizCount = 0;
      
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
              ? `<button class="parents-action-btn complete" onclick="window.AppModules.parent_dash.parentsResetWorksheet(${currentWeek}, '${sub}')">✅ Approved</button>`
              : `<button class="parents-action-btn" onclick="window.AppModules.parent_dash.parentsCompleteWorksheet(${currentWeek}, '${sub}')">✏️ Approve</button>`
            }
          </div>
        </div>
      `;
    });

    let html = `
      <div class="parents-dashboard-container">
        
        <div class="parents-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
          <div class="parents-section-card card-pop-in" style="text-align: center; padding: 20px;">
            <div style="font-size: 32px; margin-bottom: 6px;">🔥</div>
            <div style="font-size: 24px; font-weight: 800; color: var(--accent);">${streak} days</div>
            <div style="font-size: 12px; color: var(--text-muted); font-weight:600; text-transform: uppercase;">Study Streak</div>
          </div>
          <div class="parents-section-card card-pop-in" style="text-align: center; padding: 20px;">
            <div style="font-size: 32px; margin-bottom: 6px;">⏱️</div>
            <div style="font-size: 24px; font-weight: 800; color: #10b981;">${timeLog.totalMins} mins</div>
            <div style="font-size: 12px; color: var(--text-muted); font-weight:600; text-transform: uppercase;">Time Logged (7d)</div>
          </div>
          <div class="parents-section-card card-pop-in" style="text-align: center; padding: 20px;">
            <div style="font-size: 32px; margin-bottom: 6px;">🎓</div>
            <div style="font-size: 24px; font-weight: 800; color: #a855f7;">${overallAverage > 0 ? overallAverage + '%' : 'N/A'}</div>
            <div style="font-size: 12px; color: var(--text-muted); font-weight:600; text-transform: uppercase;">Average Grade</div>
          </div>
        </div>

        <div class="parents-section-card card-pop-in" style="margin-bottom: 20px; cursor: pointer; background: rgba(99, 102, 241, 0.08); border: 2px dashed var(--accent); transition: transform 0.2s; padding: 15px;" onclick="window.AppModules.parent_dash.renderParentLearnerActivities()">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 15px;">
              <span style="font-size: 32px;">🧪</span>
              <div style="text-align: left;">
                <h3 style="margin: 0; font-size: 15px; font-weight: 700; color: var(--accent);">Parent-Learner Activities</h3>
                <p style="margin: 3px 0 0 0; font-size: 12.5px; color: var(--text-muted);">Explore 10 hands-on experiments to perform together at home!</p>
              </div>
            </div>
            <span style="font-size: 20px; color: var(--accent); font-weight: bold;">➔</span>
          </div>
        </div>

        <div class="parents-grid">
          <div style="display:flex; flex-direction:column; gap:20px;">
            <div class="report-card-container card-pop-in">
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

            <div class="parents-section-card card-pop-in">
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

          <div style="display:flex; flex-direction:column; gap:20px;">
            <div class="parents-section-card card-pop-in">
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
            <button class="remediation-review-btn" onclick="window.AppModules.parent_dash.launchRemediation('${item.subjectKey}', ${item.week})">🎯 Review</button>
          </div>
        `;
      });
    }

    html += `
              </div>
            </div>

            <div class="parents-section-card card-pop-in">
              <div class="parents-section-title">📝 Worksheet Completion Override</div>
              <div class="parents-worksheet-list">
                ${worksheetsHTML}
              </div>
            </div>

            <div class="parents-section-card card-pop-in">
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
      act.steps.forEach(step => {
        stepsHTML += `<li style="margin-bottom: 8px; line-height: 1.5;">${step}</li>`;
      });
      
      activitiesHTML += `
        <div class="parents-section-card card-pop-in" style="padding: 20px; text-align: left; margin-bottom: 20px;">
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
          <button class="settings-btn-primary" onclick="window.AppModules.parent_dash.render()" style="margin: 0; padding: 6px 14px; width: auto; font-size: 13px;">
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

  // Bind to window context for backward compatibility
  window.tryOpenParentDashboard = tryOpen;
  window.showPinModal = showPinModal;
  window.closePinModal = closePinModal;
  window.pressPinKey = pressPinKey;
  window.clearPin = clearPin;
  window.handleForgotPin = forgotPin;
  window.parentsCompleteWorksheet = parentsCompleteWorksheet;
  window.parentsResetWorksheet = parentsResetWorksheet;
  window.launchRemediation = launchRemediation;
  window.changeParentPIN = changePin;

  return {
    render,
    tryOpen,
    showPinModal,
    closePinModal,
    updatePinDots,
    pressPinKey,
    clearPin,
    validateEnteredPin,
    forgotPin,
    parentsCompleteWorksheet,
    parentsResetWorksheet,
    launchRemediation,
    changePin,
    renderParentLearnerActivities,
    PARENT_LEARNER_ACTIVITIES
  };
})();
