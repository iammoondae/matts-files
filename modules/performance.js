// Matteo's Learning Hub - Performance Task Module
window.AppModules = window.AppModules || {};

window.AppModules.performance = (() => {

  function render(subjectData, qBody) {
    const q = subjectData.performance;
    if (!q) {
      qBody.innerHTML = `
        <div class="no-data-card card-pop-in">
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

    // Initialize/sync dimensions
    rubricGrades = [];
    for (let idx = 0; idx < q.labels.length; idx++) {
      const savedVal = grades[idx];
      rubricGrades.push(savedVal !== undefined ? savedVal : 3);
    }

    let rubricsHTML = '';
    q.labels.forEach((lbl, idx) => {
      const currentVal = rubricGrades[idx];
      rubricsHTML += `
        <div class="rubric-row card-pop-in">
          <div class="rubric-label-container">
            <span>⭐ ${lbl}</span>
            <span class="rubric-value-label" id="rubric-val-${idx}">${currentVal} Stars</span>
          </div>
          <input type="range" class="rubric-slider" min="1" max="5" value="${currentVal}" oninput="window.AppModules.performance.updateVal(${idx}, this.value)">
        </div>
      `;
    });

    qBody.innerHTML = `
      <div class="question-text">📋 ${formatMarkdown(stripStoryPrefix(q.title))}</div>
      <p style="margin-bottom: 20px; line-height: 1.6; font-size: 15px;">${formatMarkdown(q.desc)}</p>
      
      <div class="parent-audit-banner card-pop-in">
        <span>👨‍👩‍👦</span>
        <span>Ask your parent to rate your performance task by moving the rubric sliders below.</span>
      </div>

      <div class="rubrics-score-board card-pop-in">
        <div style="font-weight:700; margin-bottom:15px; font-size: 14px;">GRADING RUBRIC (Teacher/Parent Scoring):</div>
        ${rubricsHTML}
      </div>
      <button class="blank-submit-btn hover-bounce" style="margin-top:20px; width:100%;" onclick="window.AppModules.performance.submit()">Save Rubric & Finish</button>
    `;
  }

  function updateVal(idx, val) {
    rubricGrades[idx] = parseInt(val);
    const label = document.getElementById(`rubric-val-${idx}`);
    if (label) {
      label.innerText = `${val} Stars`;
    }
  }

  function submit() {
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
        <div class="score-circle card-pop-in">
          <span class="score-num">${average}</span>
          <span class="score-label">Average Stars</span>
        </div>
        <h3 style="margin-top:20px;">🎉 Performance Task Completed!</h3>
        <p style="color:var(--text-muted); margin-bottom: 20px;">Your parent/teacher graded this task and saved the score.</p>
        <button class="restart-btn hover-bounce" onclick="renderCurrentView()">🔄 View Rubric again</button>
      </div>
    `;
  }

  return {
    render,
    updateVal,
    submit
  };
})();
