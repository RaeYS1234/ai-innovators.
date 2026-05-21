// ============ AI INNOVATORS — Shared Course Page Engine ============
(function() {
  // Inject shared SVG icon defs into the page
  const iconDefs = `<svg width="0" height="0" style="position:absolute" xmlns="http://www.w3.org/2000/svg"><defs>
    <symbol id="i-rocket" viewBox="0 0 32 32"><path d="M16 2 C 11 7 8 13 8 18 L 8 24 L 12 22 L 12 26 L 16 24 L 20 26 L 20 22 L 24 24 L 24 18 C 24 13 21 7 16 2 Z" fill="#0ea5e9" stroke="#0284c7" stroke-width="1.5"/><circle cx="16" cy="14" r="3" fill="#fbbf24"/></symbol>
    <symbol id="i-book" viewBox="0 0 32 32"><path d="M4 6 L 16 6 L 16 26 L 4 26 Z" fill="#0ea5e9" stroke="#0284c7" stroke-width="1.5"/><path d="M28 6 L 16 6 L 16 26 L 28 26 Z" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/></symbol>
    <symbol id="i-pencil" viewBox="0 0 32 32"><path d="M22 4 L 28 10 L 12 26 L 4 28 L 6 20 Z" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/></symbol>
    <symbol id="i-quiz" viewBox="0 0 32 32"><circle cx="16" cy="16" r="13" fill="#a855f7" stroke="#7e22ce" stroke-width="1.5"/><path d="M11 13 C 11 10 13 8 16 8 C 19 8 21 10 21 13 C 21 15 19 16 16 17 L 16 19" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="16" cy="23" r="1.5" fill="white"/></symbol>
    <symbol id="i-trophy" viewBox="0 0 32 32"><path d="M10 4 L 22 4 L 22 14 C 22 18 19 21 16 21 C 13 21 10 18 10 14 Z" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/><rect x="13" y="21" width="6" height="4" fill="#d97706"/><rect x="9" y="25" width="14" height="3" rx="1" fill="#92400e"/></symbol>
    <symbol id="i-check" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#22c55e"/><path d="M9 16 L 14 21 L 23 11" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/></symbol>
    <symbol id="i-lock" viewBox="0 0 32 32"><path d="M10 14 L 10 10 C 10 6 13 3 16 3 C 19 3 22 6 22 10 L 22 14" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"/><rect x="6" y="14" width="20" height="14" rx="3" fill="white"/><circle cx="16" cy="20" r="2" fill="#475569"/></symbol>
    <symbol id="i-clock" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 8 L 16 16 L 22 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></symbol>
    <symbol id="i-star" viewBox="0 0 32 32"><path d="M16 3 L 20 12 L 30 13 L 22 20 L 25 30 L 16 24 L 7 30 L 10 20 L 2 13 L 12 12 Z" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/></symbol>
    <symbol id="i-pages" viewBox="0 0 32 32"><rect x="6" y="6" width="18" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><line x1="10" y1="12" x2="20" y2="12" stroke="currentColor" stroke-width="2"/><line x1="10" y1="17" x2="20" y2="17" stroke="currentColor" stroke-width="2"/><line x1="10" y1="22" x2="16" y2="22" stroke="currentColor" stroke-width="2"/></symbol>
    <symbol id="i-arrow" viewBox="0 0 32 32"><path d="M6 16 L 24 16 M 18 10 L 24 16 L 18 22" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/></symbol>
  </defs></svg>`;

  // Inject icons immediately
  if (document.body) {
    document.body.insertAdjacentHTML("afterbegin", iconDefs);
  } else {
    document.addEventListener("DOMContentLoaded", () => document.body.insertAdjacentHTML("afterbegin", iconDefs));
  }

  // Nova mascot SVG
  function novaSVG() {
    return `<svg viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <defs><radialGradient id="nGlare" cx="30%" cy="25%"><stop offset="0%" stop-color="white" stop-opacity="0.7"/><stop offset="100%" stop-color="white" stop-opacity="0"/></radialGradient></defs>
      <ellipse cx="125" cy="295" rx="22" ry="13" fill="#0ea5e9" stroke="#0284c7" stroke-width="3"/>
      <ellipse cx="175" cy="295" rx="22" ry="13" fill="#0ea5e9" stroke="#0284c7" stroke-width="3"/>
      <ellipse cx="150" cy="245" rx="78" ry="55" fill="white"/>
      <ellipse cx="150" cy="245" rx="78" ry="55" fill="none" stroke="#bae6fd" stroke-width="4"/>
      <ellipse cx="78" cy="240" rx="18" ry="22" fill="white" stroke="#bae6fd" stroke-width="4"/>
      <ellipse cx="222" cy="240" rx="18" ry="22" fill="white" stroke="#bae6fd" stroke-width="4"/>
      <circle cx="72" cy="262" r="20" fill="#0ea5e9" stroke="#0284c7" stroke-width="3"/>
      <circle cx="228" cy="262" r="20" fill="#0ea5e9" stroke="#0284c7" stroke-width="3"/>
      <circle cx="150" cy="248" r="20" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>
      <text x="150" y="256" font-size="18" fill="white" text-anchor="middle" font-weight="900" font-family="sans-serif">AI</text>
      <ellipse cx="150" cy="195" rx="85" ry="14" fill="#0ea5e9"/>
      <ellipse cx="150" cy="192" rx="85" ry="10" fill="#38bdf8"/>
      <circle cx="150" cy="125" r="85" fill="white"/>
      <circle cx="150" cy="125" r="85" fill="none" stroke="#bae6fd" stroke-width="4"/>
      <ellipse cx="92" cy="155" rx="14" ry="9" fill="#fda4af" opacity="0.75"/>
      <ellipse cx="208" cy="155" rx="14" ry="9" fill="#fda4af" opacity="0.75"/>
      <ellipse cx="110" cy="128" rx="16" ry="22" fill="#1a1a2e"/>
      <ellipse cx="190" cy="128" rx="16" ry="22" fill="#1a1a2e"/>
      <circle cx="116" cy="120" r="6" fill="white"/>
      <circle cx="105" cy="135" r="3" fill="white"/>
      <circle cx="196" cy="120" r="6" fill="white"/>
      <circle cx="185" cy="135" r="3" fill="white"/>
      <path d="M 138 168 Q 150 178 162 168" stroke="#1a1a2e" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="150" cy="125" r="95" fill="#bae6fd" opacity="0.18"/>
      <circle cx="150" cy="125" r="95" fill="url(#nGlare)"/>
      <circle cx="150" cy="125" r="95" fill="none" stroke="#0ea5e9" stroke-width="5"/>
      <ellipse cx="105" cy="80" rx="18" ry="28" fill="white" opacity="0.7"/>
      <line x1="150" y1="30" x2="150" y2="12" stroke="#0284c7" stroke-width="5" stroke-linecap="round"/>
      <polygon points="150,0 157,14 173,14 160,24 166,40 150,30 134,40 140,24 127,14 143,14" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
    </svg>`;
  }

  function getUser() {
    try { const u = localStorage.getItem("aii_user"); return u ? JSON.parse(u) : null; } catch(e) { return null; }
  }

  window.renderCourse = function(config) {
    const root = document.getElementById("courseRoot");
    if (!root) return;

    const theme = config.theme || "orange";
    const courseId = config.courseId;
    const totalLessons = config.units.reduce((sum, u) => sum + u.lessons.length, 0) + (config.finalTest ? 1 : 0);
    const totalXP = config.units.reduce((sum, u) => sum + u.lessons.reduce((s, l) => s + (l.xp || 5), 0), 0) + (config.finalTest ? (config.finalTest.xp || 10) : 0);

    // Render
    root.innerHTML = `
      <nav>
        <a href="/" class="logo" style="color:inherit;">
          <div class="logo-icon"><svg width="28" height="28"><use href="#i-rocket"/></svg></div>
          <span>AI <span style="color:#fbbf24;">Innovators</span></span>
        </a>
        <div class="nav-links">
          <a href="/">Home</a>
          <a href="/#k5">K-5</a>
          <a href="/#middle">6-8</a>
          <a href="/#high">9-12</a>
          <a href="enroll.html" class="enroll-btn">Enroll</a>
        </div>
      </nav>

      <div class="course-header theme-${theme}">
        <div class="breadcrumb">
          <a href="/">Home</a> <span style="margin:0 6px;">›</span>
          <a href="/#${config.gradeAnchor || 'k5'}">${config.gradeLabel || 'K-5'}</a>
          <span style="margin:0 6px;">›</span> ${config.title}
        </div>
        <div class="course-header-inner">
          <div>
            <div class="course-meta-tag">${config.tag || 'COURSE'}</div>
            <h1>${config.title}</h1>
            <p class="desc">${config.description}</p>
            <div class="course-stats">
              <div class="course-stat">
                <div class="icon-box"><svg width="18" height="18" style="color:white;"><use href="#i-pages"/></svg></div>
                <span>${config.units.length} Units · ${totalLessons} Items</span>
              </div>
              <div class="course-stat">
                <div class="icon-box"><svg width="18" height="18"><use href="#i-star"/></svg></div>
                <span>${totalXP} XP Total</span>
              </div>
              <div class="course-stat">
                <div class="icon-box"><svg width="18" height="18" style="color:white;"><use href="#i-clock"/></svg></div>
                <span>~${config.duration || (totalLessons * 5)} minutes</span>
              </div>
            </div>
          </div>
          <div class="course-mascot">${novaSVG()}</div>
        </div>
      </div>

      <div class="progress-section">
        <div class="progress-info">
          <div class="progress-label">Your Progress</div>
          <div class="progress-percent" id="progressPercent">0% complete</div>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" id="progressFill"></div>
        </div>
        <div class="progress-xp">
          <span class="num" id="progressXP">0</span>
          of ${totalXP} XP
        </div>
      </div>

      <div class="container theme-${theme}">
        ${config.units.map((unit, ui) => `
          <div class="unit ${ui === 0 ? 'expanded' : ''}" data-unit="${ui + 1}">
            <div class="unit-header" onclick="this.parentElement.classList.toggle('expanded')">
              <div class="unit-num">${ui + 1}</div>
              <div class="unit-info">
                <h2>${unit.title}</h2>
                <div class="meta">
                  <span><svg width="14" height="14"><use href="#i-pages"/></svg> ${unit.lessons.length} ${unit.lessons.length === 1 ? 'lesson' : 'items'}</span>
                  <span><svg width="14" height="14"><use href="#i-star"/></svg> ${unit.lessons.reduce((s, l) => s + (l.xp || 5), 0)} XP</span>
                </div>
              </div>
              <div class="unit-toggle"><svg width="16" height="16"><use href="#i-arrow"/></svg></div>
            </div>
            <div class="unit-content">
              <div class="lesson-list">
                ${unit.lessons.map((lesson, li) => {
                  const lid = `${ui + 1}-${li + 1}`;
                  const lessonKey = `${courseId}-${lid}`;
                  const hasFile = !!lesson.file;
                  return `
                    <a href="${hasFile ? lesson.file : '#'}" class="lesson-row${hasFile ? '' : ' locked'}" data-lesson="${lid}" data-key="${lessonKey}">
                      <div class="lesson-icon ${lesson.type || 'read'}"><svg width="24" height="24"><use href="#i-${lesson.type === 'quiz' ? 'quiz' : (lesson.type === 'practice' ? 'pencil' : 'book')}"/></svg></div>
                      <div class="lesson-info">
                        <div class="lesson-title">${lesson.title}</div>
                        <div class="lesson-meta">
                          <span class="lesson-type-tag ${lesson.type || 'read'}">${(lesson.type || 'lesson').toUpperCase()}</span>
                          <span><svg width="12" height="12"><use href="#i-clock"/></svg> ${lesson.time || '5 min'}</span>
                          <span><svg width="12" height="12"><use href="#i-star"/></svg> ${lesson.xp || 5} XP</span>
                        </div>
                      </div>
                      <span class="lesson-action${hasFile ? '' : ' locked'}">${hasFile ? 'Start →' : '<svg width="14" height="14" style="color:white;"><use href="#i-lock"/></svg> Coming Soon'}</span>
                    </a>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        `).join('')}

        ${config.finalTest ? `
          <div class="final-test ${config.finalTest.file ? '' : 'locked'}">
            <div class="final-test-icon"><svg width="48" height="48"><use href="#i-trophy"/></svg></div>
            <div class="final-test-info">
              <h3>${config.finalTest.title || 'Course Challenge'}</h3>
              <p>${config.finalTest.description || 'Take the final test to earn your trophy!'} · ${config.finalTest.xp || 10} XP · ${config.finalTest.time || '5 min'}</p>
            </div>
            <a href="${config.finalTest.file || '#'}" class="start-btn">${config.finalTest.file ? 'Start →' : 'Coming Soon'}</a>
          </div>
        ` : ''}
      </div>

      <footer style="background: #0c1e3e; color: #94a3b8; padding: 30px 20px; text-align: center; margin-top: 40px;">
        <p style="font-size:14px;">© 2026 AI Innovators</p>
      </footer>
    `;

    // Auth + progress
    const user = getUser();
    if (!user) {
      try { localStorage.setItem("aii_redirect_after_signup", window.location.pathname); } catch(e) {}
      window.location.href = "enroll.html";
      return;
    }

    // Update enroll button
    const enrollBtn = document.querySelector(".enroll-btn");
    if (enrollBtn) enrollBtn.textContent = "Hi, " + (user.name || "friend") + "!";

    // Mark completed lessons
    const completed = user.completedLessons || [];
    let totalCompleted = 0;
    document.querySelectorAll(".lesson-row").forEach(row => {
      const key = row.dataset.key;
      // Legacy: business-101-1-1 also marked by "business-101"
      if (completed.includes(key) || (key === "business-101-1-1" && completed.includes("business-101"))) {
        const icon = row.querySelector(".lesson-icon");
        const action = row.querySelector(".lesson-action");
        icon.classList.add("complete");
        icon.innerHTML = '<svg width="24" height="24"><use href="#i-check"/></svg>';
        action.classList.add("complete");
        action.textContent = "Replay";
        totalCompleted++;
      }
    });

    // Final test progress
    if (config.finalTest && completed.includes(`${courseId}-challenge`)) {
      const finalBtn = document.querySelector(".final-test .start-btn");
      if (finalBtn) finalBtn.textContent = "Replay";
      totalCompleted++;
    }

    const percent = Math.round((totalCompleted / totalLessons) * 100);
    document.getElementById("progressPercent").textContent = percent + "% complete";
    document.getElementById("progressFill").style.width = percent + "%";
    document.getElementById("progressXP").textContent = Math.min(user.xp || 0, totalXP);
  };
})();
