// Matteo's Learning Hub - Worksheet Module
window.AppModules = window.AppModules || {};

window.AppModules.worksheet = (() => {
  // stylus/drawing state variables
  let activePointers = new Map();
  let initialPinchDistance = 0;
  let initialPinchZoom = 1.0;
  let initialPinchMidpoint = { x: 0, y: 0 };
  let initialScroll = { left: 0, top: 0 };

  function render(subjectData, qBody) {
    const pages = subjectData.worksheet ? subjectData.worksheet.pages : [];
    
    if (pages.length === 0) {
      qBody.innerHTML = `
        <div class="no-data-card card-pop-in">
          <span style="font-size: 48px; display: block; margin-bottom: 15px;">📝</span>
          No worksheet available for ${subjectData.title} in the ${currentLevel === 'core' ? 'Grade 3' : 'Grade 4-5'} level for Week ${currentWeek}.
        </div>
      `;
      return;
    }
    
    // Bounds check
    if (currentWorksheetPage >= pages.length) {
      currentWorksheetPage = 0;
    }
    
    worksheetZoom = 1.0; // Reset zoom on page load to prevent coordinate jumps
    
    const grade = getLearnerGrade();
    const isComplete = safeStorage.getItem(`worksheet_complete_${grade}_w${currentWeek}_${currentSubject}_${currentLevel}`) === 'true';
    const isLastPage = (currentWorksheetPage === pages.length - 1);

    let completedBannerHTML = '';
    if (isComplete) {
      completedBannerHTML = `
        <div class="ws-completed-banner text-emerald font-bold card-pop-in">
          <span>✅ This worksheet was marked completed and recorded.</span>
        </div>
      `;
    }

    let bannerHTML = '';
    if (!wsShowAnswers) {
      bannerHTML = `
        <div class="ws-instruction-banner card-pop-in">
          📝 Get a pen and paper, and write your answers. To check your work, ask a parent to press Show Answer button and enter their PIN.
          ${completedBannerHTML}
        </div>
      `;
    } else {
      if (isLastPage) {
        if (isComplete) {
          bannerHTML = `
            <div class="ws-instruction-banner card-pop-in border-emerald bg-emerald-light">
              <div class="text-center text-emerald font-bold" style="font-size: 15px;">
                🎉 This worksheet is marked as complete!
              </div>
              ${completedBannerHTML}
            </div>
          `;
        } else {
          bannerHTML = `
            <div class="ws-instruction-banner card-pop-in border-emerald bg-emerald-light">
              <span style="font-size:13px; color:var(--text-muted); display: block; margin-bottom: 8px; font-weight: 600; text-align: center;">👨‍👩‍👦 Parent: Tap below when worksheet is done</span>
              <button class="blank-submit-btn hover-bounce" style="width:100%; background: #10b981; padding: 10px; border-radius: 8px; font-weight: bold; color: white; border: none; cursor: pointer;"
                onclick="window.AppModules.worksheet.submitComplete()">
                ✅ Mark This Worksheet Completed
              </button>
            </div>
          `;
        }
      } else {
        if (isComplete) {
          bannerHTML = `
            <div class="ws-instruction-banner card-pop-in">
              ${completedBannerHTML}
            </div>
          `;
        }
      }
    }

    let submitBarHTML = '';
    if (!wsShowAnswers && isComplete && isLastPage) {
      submitBarHTML = `
        <div class="worksheet-parent-submit-bar card-pop-in" id="worksheet-parent-bar" style="display: block;">
          <div style="text-align: center; color: #10b981; font-weight: bold; font-size: 15px; padding: 12px; border: 1.5px solid #10b981; border-radius: 8px; background: rgba(16, 185, 129, 0.08);">
            🎉 This worksheet is marked as complete!
          </div>
        </div>
      `;
    }
    
    qBody.innerHTML = `
      <div class="worksheet-outer-container">
        ${bannerHTML}

        <div class="ws-toolbar card-pop-in">
          <div class="ws-tool-group">
            <button class="ws-btn-action ${wsShowAnswers ? 'active-tool' : ''}" id="ws-answers-btn" onclick="window.AppModules.worksheet.toggleAnswers()">${wsShowAnswers ? '🔑 Hide Answer' : '🔑 Show Answer'}</button>
          </div>

          <div class="ws-tool-group">
            <span class="ws-group-label">Zoom:</span>
            <button class="ws-btn-action" onclick="window.AppModules.worksheet.zoom(-0.1)">➖</button>
            <span class="ws-page-indicator" id="ws-zoom-label" style="min-width: 50px; text-align: center;">100%</span>
            <button class="ws-btn-action" onclick="window.AppModules.worksheet.zoom(0.1)">➕</button>
            <button class="ws-btn-action" onclick="window.AppModules.worksheet.resetZoom()">🔄 Fit</button>
          </div>

          <div class="ws-tool-group ws-page-group" style="margin-left: auto; display: flex; align-items: center; gap: 8px;">
            <button class="ws-btn-action" id="ws-toolbar-prev-btn" onclick="window.AppModules.worksheet.changePage(-1)">← Previous</button>
            <span class="ws-page-indicator" id="ws-toolbar-page-label">Page ${currentWorksheetPage + 1} of ${pages.length}</span>
            <button class="ws-btn-action" id="ws-toolbar-next-btn" onclick="window.AppModules.worksheet.changePage(1)">Next →</button>
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
    
    // Update pagination buttons
    const prevBtn = document.getElementById('ws-toolbar-prev-btn');
    if (prevBtn) prevBtn.disabled = (currentWorksheetPage === 0);
    const nextBtn = document.getElementById('ws-toolbar-next-btn');
    if (nextBtn) nextBtn.disabled = (currentWorksheetPage === pages.length - 1);

    // Apply scaling and configure answers overlay visibility
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
      
      // Initialize drawing canvas if it happens to be present in template pages
      initCanvas();
      loadDrawing();
    }, 50);
  }

  function submitComplete() {
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
      render(data[currentSubject], document.getElementById('viewport-body'));
    }
  }

  function zoom(delta) {
    worksheetZoom = Math.max(0.5, Math.min(2.5, worksheetZoom + delta));
    const label = document.getElementById('ws-zoom-label');
    if (label) {
      label.innerText = `${Math.round(worksheetZoom * 100)}%`;
    }
    resizeWorksheet();
  }

  function resetZoom() {
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
    
    if (worksheetZoom > 1.0) {
      wrapper.style.overflow = 'auto';
      wrapper.style.justifyContent = 'flex-start';
    } else {
      wrapper.style.overflow = 'hidden';
      wrapper.style.justifyContent = 'center';
    }
  }

  function changePage(dir) {
    currentWorksheetPage += dir;
    const data = getActiveLevelData();
    if (data && data[currentSubject]) {
      render(data[currentSubject], document.getElementById('viewport-body'));
    }
  }

  function toggleAnswers() {
    if (!wsShowAnswers) {
      // Parents gate check before showing answers
      tryOpenParentDashboard(() => {
        wsShowAnswers = true;
        saveSessionState();
        const data = getActiveLevelData();
        if (data && data[currentSubject]) {
          render(data[currentSubject], document.getElementById('viewport-body'));
        }
      });
    } else {
      wsShowAnswers = false;
      saveSessionState();
      const data = getActiveLevelData();
      if (data && data[currentSubject]) {
        render(data[currentSubject], document.getElementById('viewport-body'));
      }
    }
  }

  function setBrushColor(color) {
    wsIsEraser = false;
    wsBrushColor = color;
  }

  function setBrushSize(size) {
    wsBrushSize = size;
  }

  function toggleEraser() {
    wsIsEraser = !wsIsEraser;
  }

  function toggleFingerDraw() {
    wsDrawWithFinger = !wsDrawWithFinger;
    safeStorage.setItem('session_wsDrawWithFinger', wsDrawWithFinger ? 'true' : 'false');
    const canvas = document.getElementById('worksheet-canvas');
    if (canvas) {
      canvas.style.touchAction = wsDrawWithFinger ? 'none' : 'auto';
    }
  }

  function initCanvas() {
    const canvas = document.getElementById('worksheet-canvas');
    if (!canvas) return;
    
    canvas.style.touchAction = wsDrawWithFinger ? 'none' : 'auto';
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    wsHistory = [];
    activePointers.clear();
    
    const wrapper = document.getElementById('worksheet-viewport-wrapper');
    
    const getCoordinates = (e) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (e.clientX - rect.left) * (canvas.width / rect.width),
        y: (e.clientY - rect.top) * (canvas.height / rect.height)
      };
    };
    
    const startDrawing = (e) => {
      if (e.pointerType === 'touch' && !wsDrawWithFinger) return;
      
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
      if (e.pointerType === 'touch' && !wsDrawWithFinger) return;
      
      const coords = getCoordinates(e);
      ctx.lineWidth = wsBrushSize;
      if (wsIsEraser) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = wsBrushSize * 5;
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
        saveDrawing();
      }
    };

    canvas.onpointerdown = (e) => {
      activePointers.set(e.pointerId, { clientX: e.clientX, clientY: e.clientY });
      
      if (wsDrawWithFinger || activePointers.size >= 2) {
        canvas.style.touchAction = 'none';
      } else {
        canvas.style.touchAction = 'auto';
      }
      
      if (activePointers.size === 1) {
        startDrawing(e);
      } else if (activePointers.size === 2) {
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
          initialScroll = { left: wrapper.scrollLeft, top: wrapper.scrollTop };
        }
      }
    };

    canvas.onpointermove = (e) => {
      if (!activePointers.has(e.pointerId)) return;
      activePointers.set(e.pointerId, { clientX: e.clientX, clientY: e.clientY });
      
      if (activePointers.size === 1) {
        draw(e);
      } else if (activePointers.size === 2) {
        const pointers = Array.from(activePointers.values());
        const p1 = pointers[0];
        const p2 = pointers[1];
        
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

    canvas.onpointerup = (e) => {
      if (activePointers.has(e.pointerId)) {
        activePointers.delete(e.pointerId);
      }
      if (activePointers.size < 2) {
        initialPinchDistance = 0;
      }
      canvas.style.touchAction = (wsDrawWithFinger || activePointers.size >= 2) ? 'none' : 'auto';
      stopDrawing(e);
    };

    canvas.onpointerleave = canvas.onpointerup;
    canvas.onpointercancel = canvas.onpointerup;
  }

  function saveDrawing() {
    const canvas = document.getElementById('worksheet-canvas');
    if (!canvas) return;
    const learnerGrade = getLearnerGrade();
    const key = `drawings_${learnerGrade}_w${currentWeek}_${currentLevel}_${currentSubject}_p${currentWorksheetPage}`;
    safeStorage.setItem(key, canvas.toDataURL());
  }

  function loadDrawing() {
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

  function undoStroke() {
    const canvas = document.getElementById('worksheet-canvas');
    if (!canvas || wsHistory.length === 0) return;
    
    const ctx = canvas.getContext('2d');
    const previousState = wsHistory.pop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'source-over';
    ctx.putImageData(previousState, 0, 0);
    saveDrawing();
  }

  function clearCanvas() {
    const canvas = document.getElementById('worksheet-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (wsHistory.length >= 15) {
      wsHistory.shift();
    }
    wsHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    saveDrawing();
  }

  return {
    render,
    submitComplete,
    zoom,
    resetZoom,
    resizeWorksheet,
    changePage,
    toggleAnswers,
    setBrushColor,
    setBrushSize,
    toggleEraser,
    toggleFingerDraw,
    initCanvas,
    saveDrawing,
    loadDrawing,
    undoStroke,
    clearCanvas
  };
})();
