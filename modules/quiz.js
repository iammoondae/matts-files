// Matteo's Learning Hub - Quiz Module
window.AppModules = window.AppModules || {};

window.AppModules.quiz = (() => {
  let activeQuestionShuffledIndices = [];

  function render(questionsList, qBody) {
    const totalQuestions = questionsList.length;

    // If completed, show summary screen
    if (currentQuestionIndex >= totalQuestions) {
      showSummaryScreen(questionsList);
      return;
    }

    // Update progress bar
    const progressPercent = (currentQuestionIndex / totalQuestions) * 100;
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
      progressBar.style.width = `${progressPercent}%`;
    }

    // Update labels
    const slideNumLabel = document.getElementById('slide-num-label');
    if (slideNumLabel) {
      slideNumLabel.innerText = `Question ${currentQuestionIndex + 1} of ${totalQuestions} | Score: ${quizScore}/${totalQuestions}`;
    }

    const q = questionsList[currentQuestionIndex];

    if (q.type === 'choice' || q.type === 'verify') {
      // Shuffled indices so children don't memorize button positions
      activeQuestionShuffledIndices = q.options.map((_, idx) => idx);
      for (let i = activeQuestionShuffledIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [activeQuestionShuffledIndices[i], activeQuestionShuffledIndices[j]] = [activeQuestionShuffledIndices[j], activeQuestionShuffledIndices[i]];
      }

      let choicesHTML = '';
      activeQuestionShuffledIndices.forEach((origIdx) => {
        choicesHTML += `
          <button class="choice-btn card-pop-in" id="choice-${origIdx}" onclick="window.AppModules.quiz.selectChoice(${origIdx})">
            <span>${q.options[origIdx]}</span>
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
          <button class="choice-btn card-pop-in text-center" id="choice-true" onclick="window.AppModules.quiz.selectTF(true)">🟢 TAMA (True)</button>
          <button class="choice-btn card-pop-in text-center" id="choice-false" onclick="window.AppModules.quiz.selectTF(false)">🔴 MALI (False)</button>
        </div>
      `;
    } 
    else if (q.type === 'blank') {
      qBody.innerHTML = `
        <div class="question-text">${q.q}</div>
        <div class="blank-input-wrapper card-pop-in">
          <input type="text" class="blank-input" id="blank-input" placeholder="Type your answer here..." autocomplete="off">
          <button class="blank-submit-btn" id="blank-submit" onclick="window.AppModules.quiz.submitBlank()">Submit</button>
        </div>
        <div id="blank-feedback" style="margin-top: 15px; font-weight: 600; font-size: 15px;"></div>
      `;
      // Allow enter key press on input to submit
      const input = document.getElementById('blank-input');
      if (input) {
        input.addEventListener('keyup', (e) => {
          if (e.key === 'Enter') {
            submitBlank();
          }
        });
      }
    } 
  }

  function selectChoice(index) {
    const modeKey = currentMode === 'quiz' ? 'standard' : currentMode;
    const data = getActiveLevelData();
    if (!data || !data[currentSubject]) return;
    
    const questionsList = data[currentSubject][modeKey];
    const q = questionsList[currentQuestionIndex];
    
    // Disable all options
    q.options.forEach((opt, idx) => {
      const btn = document.getElementById(`choice-${idx}`);
      if (btn) {
        btn.disabled = true;
        if (idx === q.answer) {
          btn.classList.add('correct');
        }
      }
    });

    const activeBtn = document.getElementById(`choice-${index}`);

    if (index === q.answer) {
      quizScore++;
      playSFX(true);
      triggerMascotCelebration(); // Bounces Tobi mascot on correct answer
    } else {
      if (activeBtn) activeBtn.classList.add('incorrect');
      playSFX(false);
      wrongAnswersLog.push({
        q: q.q,
        yourAns: q.options[index],
        correctAns: q.options[q.answer]
      });
    }

    saveQuizProgress();
    setTimeout(() => {
      currentQuestionIndex++;
      renderCurrentView();
    }, 1000);
  }

  function selectTF(val) {
    const modeKey = currentMode === 'quiz' ? 'standard' : currentMode;
    const data = getActiveLevelData();
    if (!data || !data[currentSubject]) return;

    const questionsList = data[currentSubject][modeKey];
    const q = questionsList[currentQuestionIndex];
    const trueBtn = document.getElementById('choice-true');
    const falseBtn = document.getElementById('choice-false');

    if (trueBtn) trueBtn.disabled = true;
    if (falseBtn) falseBtn.disabled = true;

    if (q.answer === true) {
      if (trueBtn) trueBtn.classList.add('correct');
    } else {
      if (falseBtn) falseBtn.classList.add('correct');
    }

    if (val === q.answer) {
      quizScore++;
      playSFX(true);
      triggerMascotCelebration();
    } else {
      if (val === true) {
        if (trueBtn) trueBtn.classList.add('incorrect');
      } else {
        if (falseBtn) falseBtn.classList.add('incorrect');
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
    }, 1000);
  }

  function submitBlank() {
    const modeKey = currentMode === 'quiz' ? 'standard' : currentMode;
    const data = getActiveLevelData();
    if (!data || !data[currentSubject]) return;

    const questionsList = data[currentSubject][modeKey];
    const q = questionsList[currentQuestionIndex];
    const inputEl = document.getElementById('blank-input');
    const submitBtn = document.getElementById('blank-submit');
    if (!inputEl) return;

    const userVal = inputEl.value.trim().toLowerCase();
    const correctVal = q.answer.trim().toLowerCase();

    inputEl.disabled = true;
    if (submitBtn) submitBtn.disabled = true;

    const fb = document.getElementById('blank-feedback');

    if (userVal === correctVal) {
      quizScore++;
      if (fb) {
        fb.innerText = "🟢 Correct!";
        fb.style.color = "var(--correct)";
      }
      playSFX(true);
      triggerMascotCelebration();
    } else {
      if (fb) {
        fb.innerHTML = `🔴 Incorrect! Correct answer: <strong>${q.answer}</strong>`;
        fb.style.color = "var(--incorrect)";
      }
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
    }, 1500); 
  }

  function saveQuizProgress() {
    safeStorage.setItem('session_currentQuestionIndex', currentQuestionIndex);
    safeStorage.setItem('session_quizScore', quizScore);
    safeStorage.setItem('session_wrongAnswersLog', JSON.stringify(wrongAnswersLog));
  }

  function clearQuizProgress() {
    safeStorage.removeItem('session_currentQuestionIndex');
    safeStorage.removeItem('session_quizScore');
    safeStorage.removeItem('session_wrongAnswersLog');
  }

  function showSummaryScreen(questionsList) {
    const totalQuestions = questionsList.length;
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
      progressBar.style.width = '100%';
    }

    // Save score to local storage
    const isReview = window.IS_REVIEW_MODE;
    const learnerGrade = getLearnerGrade();
    const storageKey = isReview 
      ? `highscore_${learnerGrade}_review_${window.CURRENT_REVIEW_DATE}_sses_${currentSubject}_${currentLevel}_${currentMode}`
      : `highscore_${learnerGrade}_w${currentWeek}_sses_${currentSubject}_${currentLevel}_${currentMode}`;
    
    const previousHigh = parseInt(safeStorage.getItem(storageKey)) || 0;
    if (quizScore > previousHigh) {
      safeStorage.setItem(storageKey, quizScore);
      if (!isReview && currentMode === 'quiz') {
        safeStorage.setItem(`highscore_${learnerGrade}_w${currentWeek}_sses_${currentSubject}_${currentLevel}_standard`, quizScore);
      }
      updateScoresDisplay();
    }

    // Save mistakes log permanently for parent review
    if (!isReview) {
      const mistakesKey = `mistakes_${learnerGrade}_w${currentWeek}_sses_${currentSubject}_${currentLevel}_${currentMode}`;
      safeStorage.setItem(mistakesKey, JSON.stringify(wrongAnswersLog));
    }

    recordCompletion();

    const qBody = document.getElementById('viewport-body');

    let reviewHTML = '';
    if (wrongAnswersLog.length > 0) {
      reviewHTML = `
        <div class="review-panel card-pop-in">
          <h3>❌ Let's Review Your Mistakes:</h3>
      `;
      wrongAnswersLog.forEach(item => {
        reviewHTML += `
          <div class="review-item">
            <div class="review-q">${item.q}</div>
            <div class="review-ans-wrapper">
              <span class="review-your-ans">Your answer: ${item.yourAns}</span>
              <span class="review-correct-ans">Correct: ${item.correctAns}</span>
            </div>
          </div>
        `;
      });
      reviewHTML += `</div>`;
    } else {
      reviewHTML = `
        <div class="review-panel card-pop-in">
          <div class="review-item correct-summary">
            🎉 Perfect Score! You answered all questions correctly! 🌟
          </div>
        </div>
      `;
    }

    clearQuizProgress();
    qBody.innerHTML = `
      <div class="summary-screen">
        <div class="score-circle card-pop-in">
          <span class="score-num">${quizScore}/${totalQuestions}</span>
          <span class="score-label">Score</span>
        </div>
        <button class="restart-btn hover-bounce" onclick="setSubject('${currentSubject}')">🔄 Try Again</button>
        ${reviewHTML}
      </div>
    `;

    // Trigger perfect score feedback
    if (quizScore === totalQuestions) {
      initConfetti();
      playSFX(true);
    }
  }

  // Private helper to trigger mascot animation on success
  function triggerMascotCelebration() {
    const mascot = document.getElementById('brand-profile-pic');
    if (mascot) {
      mascot.classList.add('celebrating');
      setTimeout(() => {
        mascot.classList.remove('celebrating');
      }, 1000);
    }
  }

  return {
    render,
    selectChoice,
    selectTF,
    submitBlank
  };
})();
