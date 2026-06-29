// Matteo's Learning Hub - Study Guide Module
window.AppModules = window.AppModules || {};

window.AppModules.studyguide = (() => {
  // Swipe gesture tracking variables
  let touchStartX = 0;
  let touchStartY = 0;

  function render(subjectData, qBody) {
    const totalSlides = subjectData.slides.length;
    const slide = subjectData.slides[currentSlideIndex];

    // Update global progress bar
    const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
      progressBar.style.width = `${progressPercent}%`;
    }

    // Update labels
    const slideNumLabel = document.getElementById('slide-num-label');
    if (slideNumLabel) {
      slideNumLabel.innerText = `Slide ${currentSlideIndex + 1} of ${totalSlides}`;
    }
    const slideIndicator = document.getElementById('slide-indicator');
    if (slideIndicator) {
      slideIndicator.innerText = `Slide ${currentSlideIndex + 1} of ${totalSlides}`;
    }

    // Enable/disable navigation buttons
    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) {
      prevBtn.disabled = (currentSlideIndex === 0);
    }
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
      nextBtn.disabled = (currentSlideIndex === totalSlides - 1);
    }

    // Parse examples HTML with elegant cards
    let examplesHTML = '';
    if (slide.examples && slide.examples.length > 0) {
      examplesHTML = `<div class="examples-container">`;
      slide.examples.forEach(ex => {
        examplesHTML += `
          <div class="example-box card-pop-in">
            <div class="example-title">💡 ${formatMarkdown(ex.title)}</div>
            <div class="example-content">${formatMarkdown(ex.content)}</div>
          </div>
        `;
      });
      examplesHTML += `</div>`;
    }

    // Render image with premium scaling controls
    let imageHTML = '';
    if (slide.image) {
      const currentMaxHeight = `${250 * studyImageScale}px`;
      imageHTML = `
        <div class="slide-image-container-wrapper card-pop-in">
          <div class="slide-image-container">
            <img src="${getImageSrc(slide.image)}" alt="${stripHtmlTagsAndQuotes(slide.title)}" class="slide-image" id="study-slide-img" style="max-height: ${currentMaxHeight};">
          </div>
          <div class="image-zoom-toolbar">
            <button class="zoom-btn" onclick="window.AppModules.studyguide.zoom(-0.25)">➖ Zoom Out</button>
            <span id="study-zoom-label" class="zoom-label">${Math.round(studyImageScale * 100)}%</span>
            <button class="zoom-btn" onclick="window.AppModules.studyguide.zoom(0.25)">➕ Zoom In</button>
            <button class="zoom-btn" onclick="window.AppModules.studyguide.resetZoom()">🔄 Reset</button>
          </div>
        </div>
      `;
    }
    
    // Smooth 3D page-flip animation triggers
    const flipClass = slideTransitionDirection ? `flip-${slideTransitionDirection}` : '';
    slideTransitionDirection = null;

    qBody.innerHTML = `
      <div class="slide-flip-container" id="study-swipe-container">
        <div class="slide-card-inner ${flipClass}">
          <h2 class="slide-heading">${formatMarkdown(stripStoryPrefix(slide.title))}</h2>
          ${imageHTML}
          <p class="slide-text">${formatMarkdown(slide.text)}</p>
          ${examplesHTML}
        </div>
      </div>
    `;

    setupSwipeGestures(document.getElementById('study-swipe-container'));
  }

  function zoom(delta) {
    studyImageScale = Math.max(0.5, Math.min(3.0, studyImageScale + delta));
    applyZoom();
  }

  function resetZoom() {
    studyImageScale = 1.0;
    applyZoom();
  }

  function applyZoom() {
    const img = document.getElementById('study-slide-img');
    const label = document.getElementById('study-zoom-label');
    if (img) {
      img.style.maxHeight = `${250 * studyImageScale}px`;
    }
    if (label) {
      label.innerText = `${Math.round(studyImageScale * 100)}%`;
    }
  }

  function prev() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      studyImageScale = 1.0; 
      slideTransitionDirection = 'prev';
      renderCurrentView();
    }
  }

  function next() {
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
      
      // Horizontal swipe threshold
      if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > 60) {
        if (xDiff < 0) {
          next();
        } else {
          prev();
        }
      }
    }, { passive: true });
  }

  return {
    render,
    zoom,
    resetZoom,
    prev,
    next
  };
})();
