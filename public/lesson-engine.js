// ============ AI INNOVATORS — Shared Lesson Engine ============
// Each lesson HTML file calls runLesson(config) to set everything up.

(function() {
  // ---- Nova Mascot SVG ----
  function novaSVG(mood) {
    const eyes = mood === "sad"
      ? `<path d="M 100 130 Q 110 122 120 130" stroke="#1a1a2e" stroke-width="5" fill="none" stroke-linecap="round"/>
         <path d="M 180 130 Q 190 122 200 130" stroke="#1a1a2e" stroke-width="5" fill="none" stroke-linecap="round"/>`
      : mood === "cheer"
      ? `<path d="M 95 125 Q 110 110 125 125" stroke="#1a1a2e" stroke-width="6" fill="none" stroke-linecap="round"/>
         <path d="M 175 125 Q 190 110 205 125" stroke="#1a1a2e" stroke-width="6" fill="none" stroke-linecap="round"/>`
      : `<ellipse cx="110" cy="128" rx="16" ry="22" fill="#1a1a2e"/>
         <ellipse cx="190" cy="128" rx="16" ry="22" fill="#1a1a2e"/>
         <circle cx="116" cy="120" r="6" fill="white"/>
         <circle cx="105" cy="135" r="3" fill="white"/>
         <circle cx="196" cy="120" r="6" fill="white"/>
         <circle cx="185" cy="135" r="3" fill="white"/>`;
    const mouth = mood === "sad"
      ? `<path d="M 138 175 Q 150 165 162 175" stroke="#1a1a2e" stroke-width="4" fill="none" stroke-linecap="round"/>`
      : mood === "cheer"
      ? `<path d="M 125 165 Q 150 195 175 165 Q 165 185 150 188 Q 135 185 125 165 Z" fill="#1a1a2e"/>
         <path d="M 130 168 Q 150 188 170 168 Q 162 184 150 186 Q 138 184 130 168 Z" fill="#fda4af"/>`
      : `<path d="M 138 168 Q 150 178 162 168" stroke="#1a1a2e" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    return `<svg viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <defs><radialGradient id="nGlare-${mood}" cx="30%" cy="25%"><stop offset="0%" stop-color="white" stop-opacity="0.7"/><stop offset="100%" stop-color="white" stop-opacity="0"/></radialGradient></defs>
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
      ${eyes}${mouth}
      <circle cx="150" cy="125" r="95" fill="#bae6fd" opacity="0.18"/>
      <circle cx="150" cy="125" r="95" fill="url(#nGlare-${mood})"/>
      <circle cx="150" cy="125" r="95" fill="none" stroke="#0ea5e9" stroke-width="5"/>
      <ellipse cx="105" cy="80" rx="18" ry="28" fill="white" opacity="0.7"/>
      <line x1="150" y1="30" x2="150" y2="12" stroke="#0284c7" stroke-width="5" stroke-linecap="round"/>
      <polygon points="150,0 157,14 173,14 160,24 166,40 150,30 134,40 140,24 127,14 143,14" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
    </svg>`;
  }
  function setMascot(id, mood) { const el = document.getElementById(id); if (el) el.innerHTML = novaSVG(mood); }

  // ---- Default Badge Icons ----
  const DEFAULT_BADGES = {
    starter: `<svg viewBox="0 0 64 64"><path d="M32 6 C 22 14 16 24 16 36 L 16 46 L 22 42 L 22 50 L 32 46 L 42 50 L 42 42 L 48 46 L 48 36 C 48 24 42 14 32 6 Z" fill="#fbbf24" stroke="#d97706" stroke-width="2.5" stroke-linejoin="round"/><circle cx="32" cy="28" r="6" fill="white" stroke="#d97706" stroke-width="2"/><circle cx="32" cy="28" r="3" fill="#0ea5e9"/></svg>`,
    money: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26" fill="#22c55e" stroke="#15803d" stroke-width="2.5"/><text x="32" y="42" font-size="32" fill="white" text-anchor="middle" font-weight="900" font-family="sans-serif">$</text></svg>`,
    star: `<svg viewBox="0 0 64 64"><polygon points="32,4 38,24 58,28 42,40 48,60 32,48 16,60 22,40 6,28 26,24" fill="#fbbf24" stroke="#d97706" stroke-width="2"/></svg>`,
    perfect: `<svg viewBox="0 0 64 64"><path d="M20 8 L 44 8 L 44 28 C 44 36 38 42 32 42 C 26 42 20 36 20 28 Z" fill="#fbbf24" stroke="#d97706" stroke-width="2.5"/><rect x="26" y="42" width="12" height="8" fill="#d97706"/><rect x="18" y="50" width="28" height="6" rx="2" fill="#92400e"/><text x="32" y="28" font-size="14" fill="white" text-anchor="middle" font-weight="900">★</text></svg>`,
    heart: `<svg viewBox="0 0 64 64"><path d="M32 56 C 12 40 4 28 4 20 C 4 12 10 6 18 6 C 24 6 28 10 32 16 C 36 10 40 6 46 6 C 54 6 60 12 60 20 C 60 28 52 40 32 56 Z" fill="#ec4899" stroke="#be185d" stroke-width="2.5"/></svg>`,
    crown: `<svg viewBox="0 0 64 64"><path d="M 8 36 L 14 18 L 22 28 L 32 14 L 42 28 L 50 18 L 56 36 Z" fill="#fbbf24" stroke="#d97706" stroke-width="2.5"/><rect x="8" y="36" width="48" height="12" fill="#fbbf24" stroke="#d97706" stroke-width="2.5"/><circle cx="14" cy="20" r="3" fill="#ef4444"/><circle cx="32" cy="14" r="3" fill="#0ea5e9"/><circle cx="50" cy="20" r="3" fill="#22c55e"/></svg>`,
    brain: `<svg viewBox="0 0 64 64"><path d="M32 8 C 22 8 14 16 14 26 C 12 28 10 30 10 34 C 10 38 12 40 14 41 C 14 49 22 56 32 56 C 42 56 50 49 50 41 C 52 40 54 38 54 34 C 54 30 52 28 50 26 C 50 16 42 8 32 8 Z" fill="#f472b6" stroke="#be185d" stroke-width="2"/></svg>`,
    target: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26" fill="white" stroke="#ef4444" stroke-width="3"/><circle cx="32" cy="32" r="18" fill="#ef4444"/><circle cx="32" cy="32" r="10" fill="white"/><circle cx="32" cy="32" r="4" fill="#ef4444"/></svg>`,
    trophy: `<svg viewBox="0 0 64 64"><path d="M16 6 L 48 6 L 48 26 C 48 36 41 44 32 44 C 23 44 16 36 16 26 Z" fill="#fbbf24" stroke="#d97706" stroke-width="2.5"/><rect x="26" y="44" width="12" height="8" fill="#d97706"/><rect x="18" y="52" width="28" height="6" rx="2" fill="#92400e"/></svg>`,
    bulb: `<svg viewBox="0 0 64 64"><path d="M32 6 C 22 6 14 14 14 24 C 14 30 18 34 20 38 L 20 44 L 44 44 L 44 38 C 46 34 50 30 50 24 C 50 14 42 6 32 6 Z" fill="#fbbf24" stroke="#d97706" stroke-width="2.5"/><rect x="22" y="46" width="20" height="4" rx="2" fill="#475569"/><rect x="24" y="52" width="16" height="4" rx="2" fill="#475569"/></svg>`
  };

  // ---- Auth ----
  function isLoggedIn() { try { return !!localStorage.getItem("aii_user"); } catch(e) { return false; } }

  // ---- Confetti ----
  function confettiBurst() {
    const colors = ["#0ea5e9", "#38bdf8", "#fbbf24", "#22c55e", "#f0abfc"];
    for (let i = 0; i < 30; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.left = (Math.random() * 100) + "%";
      c.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      document.body.appendChild(c);
      const dur = 1500 + Math.random() * 1500;
      c.animate([
        { transform: `rotate(${Math.random() * 360}deg) translateY(0)`, opacity: 1 },
        { transform: `rotate(${Math.random() * 720}deg) translateY(${window.innerHeight}px)`, opacity: 0 }
      ], { duration: dur, easing: "cubic-bezier(0.4,0,0.6,1)" });
      setTimeout(() => c.remove(), dur);
    }
  }
  function bigConfetti() { for (let i = 0; i < 4; i++) setTimeout(confettiBurst, i * 300); }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---- Main Engine ----
  window.runLesson = function(config) {
    let currentStep = 0;
    let hearts = 3;
    let xp = 0;
    let correct = 0;
    let total = 0;
    let selectedAnswer = null;
    let answered = false;
    let matchSelected = null;
    let matchAnswers = {};
    let mathAnswer = null;

    const STEPS = config.steps || [];
    const lessonId = config.lessonId;
    const courseUrl = config.courseUrl || "course-business-101.html";

    // Set welcome content
    document.getElementById("lesson-tag").textContent = config.tag || "LESSON";
    document.getElementById("welcome-title").textContent = config.title || "Lesson";
    document.getElementById("welcome-subtitle").textContent = config.subtitle || "Let's learn something new!";
    setMascot("welcomeMascot", "happy");

    // Wire up buttons
    document.getElementById("startBtn").onclick = startLesson;
    if (document.getElementById("playAgainBtn")) document.getElementById("playAgainBtn").onclick = startLesson;
    if (document.getElementById("backToCourseBtn")) document.getElementById("backToCourseBtn").onclick = goToCourse;
    if (document.getElementById("retryBtn")) document.getElementById("retryBtn").onclick = startLesson;
    document.getElementById("closeBtn").onclick = function() {
      if (confirm("Leave the lesson? Your progress will be lost.")) goToCourse();
    };

    function startLesson() {
      if (!isLoggedIn()) {
        try { localStorage.setItem("aii_redirect_after_signup", window.location.pathname); } catch(e) {}
        window.location.href = "enroll.html";
        return;
      }
      document.getElementById("topbar").style.display = "flex";
      showScreen("lesson");
      currentStep = 0; hearts = 3; xp = 0; correct = 0; total = 0;
      updateHearts();
      renderStep();
    }

    function goToCourse() { window.location.href = courseUrl; }

    function showScreen(name) {
      document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
      document.getElementById("screen-" + name).classList.add("active");
    }
    function updateHearts() { document.getElementById("heartsCount").textContent = hearts; }
    function updateProgress() { document.getElementById("progressFill").style.width = (currentStep / STEPS.length) * 100 + "%"; }

    function renderStep() {
      if (currentStep >= STEPS.length) { finishLesson(); return; }
      updateProgress();
      answered = false; selectedAnswer = null; matchSelected = null; matchAnswers = {}; mathAnswer = null;
      const step = STEPS[currentStep];
      const c = document.getElementById("screen-lesson");
      c.innerHTML = "";
      if (step.type === "vocab") renderVocab(step, c);
      else if (step.type === "teach") renderTeach(step, c);
      else if (step.type === "mc") renderMC(step, c);
      else if (step.type === "match") renderMatch(step, c);
      else if (step.type === "math") renderMath(step, c);
    }

    function renderVocab(s, c) {
      c.innerHTML = `
        <div class="vocab-card">
          <div class="vocab-badge">VOCAB</div>
          ${s.icon ? `<div class="teach-icon">${s.icon}</div>` : ""}
          <div class="vocab-word">${s.word}</div>
          ${s.pronounce ? `<div class="vocab-pronounce">${s.pronounce}</div>` : ""}
          <div class="vocab-definition">${s.definition}</div>
          ${s.example ? `<div class="vocab-example"><b>Example:</b> ${s.example}</div>` : ""}
        </div>
        <div class="action-bar"><button class="btn go" onclick="window._lessonNext()">Got it!</button></div>`;
    }

    function renderTeach(s, c) {
      const examples = s.examples ? `<div style="margin-top: 16px; display:flex; flex-wrap:wrap; gap:8px; justify-content:center;">${s.examples.map(e => `<div style="background:#e0f2fe;color:#0369a1;padding:8px 14px;border-radius:999px;font-weight:700;font-size:14px;">${e}</div>`).join("")}</div>` : "";
      c.innerHTML = `
        <div class="teach-card">
          ${s.icon ? `<div class="teach-icon">${s.icon}</div>` : ""}
          <div class="teach-title">${s.title}</div>
          <div class="teach-body">${s.body}</div>
          ${examples}
        </div>
        <div class="action-bar"><button class="btn go" onclick="window._lessonNext()">Got it!</button></div>`;
    }

    function renderMC(s, c) {
      total++;
      c.innerHTML = `
        <div class="question-block">
          <div class="question-text">${s.question}</div>
          ${s.hint ? `<div class="question-hint">${s.hint}</div>` : ""}
          <div class="options">
            ${s.options.map((o, i) => `
              <button class="option" onclick="window._lessonSelectMC(${i})" data-idx="${i}">
                <div class="option-letter">${String.fromCharCode(65 + i)}</div>
                <div>${o.text}</div>
              </button>
            `).join("")}
          </div>
        </div>
        <div class="action-bar"><button class="btn go" id="checkBtn" disabled onclick="window._lessonCheckMC()">Check</button></div>`;
    }

    function renderMatch(s, c) {
      total++;
      c.innerHTML = `
        <div class="question-block">
          <div class="question-text">${s.question}</div>
          ${s.hint ? `<div class="question-hint">${s.hint}</div>` : ""}
          <div class="match-area">
            ${s.pairs.map((p, i) => `
              <div class="match-row">
                <div class="match-prompt">${p.prompt}</div>
                <div class="match-drop" id="drop-${i}" data-idx="${i}" onclick="window._lessonPlaceMatch(${i})">Tap an answer →</div>
              </div>
            `).join("")}
          </div>
          <div class="match-bank">
            ${shuffle(s.pairs.map(p => p.answer)).map(a => `
              <button class="match-chip" data-answer="${a}" onclick="window._lessonSelectMatch('${a}', this)">${a}</button>
            `).join("")}
          </div>
        </div>
        <div class="action-bar"><button class="btn go" id="checkBtn" disabled onclick="window._lessonCheckMatch()">Check</button></div>`;
    }

    function renderMath(s, c) {
      total++;
      c.innerHTML = `
        <div class="question-block">
          <div class="question-text">${s.question}</div>
          ${s.hint ? `<div class="question-hint">${s.hint}</div>` : ""}
          <div class="math-problem">
            <div style="font-size:15px; color:#475569; font-weight:600;">${s.story || ""}</div>
            <div class="math-equation">${s.equation}</div>
            <div>$<input class="math-input" id="mathInput" type="number" placeholder="?" autofocus></div>
          </div>
        </div>
        <div class="action-bar"><button class="btn go" id="checkBtn" onclick="window._lessonCheckMath()">Check</button></div>`;
      const input = document.getElementById("mathInput");
      input.oninput = () => { document.getElementById("checkBtn").disabled = !input.value; };
      input.onkeydown = (e) => { if (e.key === "Enter" && input.value) { e.preventDefault(); window._lessonCheckMath(); } };
    }

    // Public actions on window
    window._lessonNext = function() {
      document.getElementById("feedback").classList.remove("show");
      if (hearts <= 0) { setMascot("gameoverMascot", "sad"); showScreen("gameover"); return; }
      currentStep++;
      setTimeout(renderStep, 200);
    };
    window._lessonSelectMC = function(idx) {
      if (answered) return;
      selectedAnswer = idx;
      document.querySelectorAll("[data-idx]").forEach(el => el.classList.remove("selected"));
      document.querySelector(`[data-idx="${idx}"]`).classList.add("selected");
      document.getElementById("checkBtn").disabled = false;
    };
    window._lessonCheckMC = function() {
      if (answered) return;
      answered = true;
      const s = STEPS[currentStep];
      const isCorrect = s.options[selectedAnswer].correct;
      document.querySelectorAll("[data-idx]").forEach((el, i) => {
        el.style.cursor = "default"; el.onclick = null;
        if (s.options[i].correct) el.classList.add("correct");
        else if (i === selectedAnswer) el.classList.add("wrong");
      });
      showFeedback(isCorrect, isCorrect ? s.correctMsg : s.wrongMsg);
    };
    window._lessonSelectMatch = function(answer, el) {
      if (answered || el.classList.contains("used")) return;
      document.querySelectorAll(".match-chip").forEach(c => c.style.outline = "");
      el.style.outline = "3px solid #0ea5e9";
      matchSelected = answer;
    };
    window._lessonPlaceMatch = function(dropIdx) {
      if (answered || !matchSelected) return;
      if (matchAnswers[dropIdx]) {
        const oldChip = document.querySelector(`.match-chip[data-answer="${matchAnswers[dropIdx]}"]`);
        if (oldChip) oldChip.classList.remove("used");
      }
      matchAnswers[dropIdx] = matchSelected;
      const drop = document.getElementById(`drop-${dropIdx}`);
      drop.textContent = matchSelected;
      drop.classList.add("has-item");
      document.querySelectorAll(`.match-chip[data-answer="${matchSelected}"]`).forEach(c => { c.classList.add("used"); c.style.outline = ""; });
      matchSelected = null;
      if (Object.keys(matchAnswers).length === STEPS[currentStep].pairs.length) document.getElementById("checkBtn").disabled = false;
    };
    window._lessonCheckMatch = function() {
      if (answered) return;
      answered = true;
      const s = STEPS[currentStep];
      let allCorrect = true;
      s.pairs.forEach((p, i) => {
        const drop = document.getElementById(`drop-${i}`);
        if (matchAnswers[i] === p.answer) drop.classList.add("correct");
        else { drop.classList.add("wrong"); allCorrect = false; }
      });
      showFeedback(allCorrect, allCorrect ? s.correctMsg : s.wrongMsg);
    };
    window._lessonCheckMath = function() {
      if (answered) return;
      const input = document.getElementById("mathInput");
      const userAns = parseFloat(input.value);
      if (isNaN(userAns)) return;
      answered = true;
      const s = STEPS[currentStep];
      const isCorrect = userAns === s.answer;
      input.style.borderColor = isCorrect ? "#22c55e" : "#ef4444";
      input.style.background = isCorrect ? "#dcfce7" : "#fee2e2";
      input.disabled = true;
      showFeedback(isCorrect, isCorrect ? s.correctMsg : (s.wrongMsg + " The answer is " + s.answer + "."));
    };

    function showFeedback(isCorrect, msg) {
      const fb = document.getElementById("feedback");
      fb.classList.add("show");
      fb.classList.toggle("correct", isCorrect);
      fb.classList.toggle("wrong", !isCorrect);
      document.getElementById("feedbackText").textContent = isCorrect ? "Nice work!" : "Not quite.";
      document.getElementById("feedbackExplain").textContent = msg;
      if (isCorrect) { correct++; xp += 10; confettiBurst(); }
      else { hearts--; updateHearts(); document.querySelector(".mascot")?.classList.add("shake"); }
    }

    function finishLesson() {
      document.getElementById("topbar").style.display = "none";
      setMascot("completeMascot", "cheer");
      showScreen("complete");
      const score = total > 0 ? Math.round((correct / total) * 100) : 100;
      document.getElementById("finalXP").textContent = xp;
      document.getElementById("finalScore").textContent = score + "%";
      document.getElementById("finalHearts").textContent = hearts;

      // Save progress
      try {
        if (isLoggedIn() && lessonId) {
          const user = JSON.parse(localStorage.getItem("aii_user"));
          user.xp = (user.xp || 0) + xp;
          user.completedLessons = user.completedLessons || [];
          if (!user.completedLessons.includes(lessonId)) user.completedLessons.push(lessonId);
          localStorage.setItem("aii_user", JSON.stringify(user));
        }
      } catch(e) {}

      // Render badges
      const badges = (config.badges || [
        { icon: DEFAULT_BADGES.starter, name: "Lesson Complete", earned: true },
        { icon: DEFAULT_BADGES.star, name: "XP Earner", earned: xp > 0 },
        { icon: DEFAULT_BADGES.perfect, name: "Perfect Score", earned: score === 100 },
        { icon: DEFAULT_BADGES.heart, name: "All Hearts", earned: hearts === 3 },
        { icon: DEFAULT_BADGES.crown, name: "Top Scholar", earned: score >= 80 && hearts >= 2 },
        { icon: DEFAULT_BADGES.trophy, name: "Achievement", earned: score >= 60 }
      ]).map(b => {
        // Resolve any string icons (like "money") to default icons
        if (typeof b.icon === "string" && DEFAULT_BADGES[b.icon]) {
          return { ...b, icon: DEFAULT_BADGES[b.icon] };
        }
        return b;
      });
      // Evaluate `earned` if it's a function
      const evaluated = badges.map(b => ({
        ...b,
        earned: typeof b.earned === "function" ? b.earned({ correct, total, score, hearts, xp }) : b.earned
      }));
      document.getElementById("badgeGrid").innerHTML = evaluated.map(b => `
        <div class="badge ${b.earned ? "earned" : "locked"}">
          <div class="badge-icon-svg">${b.icon}</div>
          <div class="badge-name">${b.name}</div>
        </div>`).join("");

      if (score >= 80) bigConfetti();
    }
  };
})();
