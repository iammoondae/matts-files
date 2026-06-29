// Matteo's Learning Hub - Daily Reading Module
window.AppModules = window.AppModules || {};

window.AppModules.reading = (() => {

  function initDefaultDay(data) {
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

  function render(data, qBody) {
    if (!data || !data.reading) {
      qBody.innerHTML = `
        <div class="no-data-card card-pop-in">
          <span style="font-size: 48px; display: block; margin-bottom: 15px;">📚</span>
          Daily Reading is not available for Week ${currentWeek} yet.
        </div>
      `;
      return;
    }
    
    if (!currentReadingDay) {
      currentReadingDay = initDefaultDay(data);
    }
    
    const dayData = data.reading[currentReadingDay];
    if (!dayData) {
      qBody.innerHTML = `
        <div class="no-data-card card-pop-in">
          <span style="font-size: 48px; display: block; margin-bottom: 15px;">⚠️</span>
          Reading data for ${currentReadingDay} is missing.
        </div>
      `;
      return;
    }
    
    const totalSlides = dayData.slides.length;
    const slide = dayData.slides[currentReadingSlide];
    
    // Day Selection Tabs Bar
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let daySelectorHTML = '<div class="day-selector-bar">';
    const learnerGrade = getLearnerGrade();
    days.forEach(d => {
      if (data.reading[d]) {
        const isCompleted = safeStorage.getItem(`reading_${learnerGrade}_w${currentWeek}_${d}`) === 'completed';
        const isActive = d === currentReadingDay;
        const isWeekend = (d === 'saturday' || d === 'sunday');
        const flag = isWeekend ? '🇵🇭' : '🇬🇧';
        const displayLabel = d.charAt(0).toUpperCase() + d.slice(1, 3) + ' ' + flag;
        daySelectorHTML += `
          <button class="day-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
                  onclick="window.AppModules.reading.changeDay('${d}')">
            ${displayLabel}${isCompleted ? ' ✓' : ''}
          </button>
        `;
      }
    });
    daySelectorHTML += '</div>';
    
    const flipClass = slideTransitionDirection ? `flip-${slideTransitionDirection}` : '';
    slideTransitionDirection = null;

    qBody.innerHTML = `
      <div class="reading-view-container">
        <div class="reading-toolbar card-pop-in">
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
          <button class="slide-btn" id="reading-prev-btn" onclick="window.AppModules.reading.changeSlide(-1)" ${currentReadingSlide === 0 ? 'disabled' : ''}>
            ← Previous
          </button>
          <span class="slide-indicator" style="font-weight: 600; color: var(--text-muted); font-size: 14px;">
            Slide ${currentReadingSlide + 1} of ${totalSlides}
          </span>
          ${currentReadingSlide === totalSlides - 1 ? `
            <button class="slide-btn" id="reading-complete-btn" onclick="window.AppModules.reading.completeDay()" style="background: #10b981; color: white; border-color: transparent;">
              🎉 Complete
            </button>
          ` : `
            <button class="slide-btn" id="reading-next-btn" onclick="window.AppModules.reading.changeSlide(1)">
              Next →
            </button>
          `}
        </div>
      </div>
    `;

    // Bind horizontal touch swipe gestures
    window.AppModules.studyguide.setupSwipeGestures ? 
      window.AppModules.studyguide.setupSwipeGestures(document.getElementById('reading-swipe-container')) : 
      setupSwipeGestures(document.getElementById('reading-swipe-container'));
  }

  function changeSlide(dir) {
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

  function changeDay(day) {
    currentReadingDay = day;
    currentReadingSlide = 0;
    renderCurrentView();
  }

  function completeDay() {
    const learnerGrade = getLearnerGrade();
    const storageKey = `reading_${learnerGrade}_w${currentWeek}_${currentReadingDay}`;
    safeStorage.setItem(storageKey, 'completed');
    recordCompletion();
    
    playSFX(true);
    initConfetti();
    
    renderCurrentView();
  }

  return {
    render,
    changeSlide,
    changeDay,
    completeDay,
    initDefaultDay
  };
})();
