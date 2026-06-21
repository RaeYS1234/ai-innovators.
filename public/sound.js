// ============ AI INNOVATORS — Sound Module ============
// Generates cute, game-like sounds using Web Audio API.
// No mp3 downloads — sounds are built on the fly, work offline.
// Respects user mute preference stored in localStorage.

(function() {
  "use strict";

  // ---- Audio context (created lazily on first user interaction) ----
  let ctx = null;
  let unlocked = false;

  function getCtx() {
    if (!ctx) {
      try {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch(e) { return null; }
    }
    // Resume if suspended (mobile/iOS rule)
    if (ctx && ctx.state === "suspended") {
      try { ctx.resume(); } catch(e) {}
    }
    return ctx;
  }

  // ---- iOS audio unlock ----
  // iOS Safari/PWA requires the AudioContext to be created AND a silent
  // sound played within the very first user interaction. We hook into the
  // first touch/click anywhere on the page to prime the audio system.
  function unlockAudio() {
    if (unlocked) return;
    const audio = getCtx();
    if (!audio) return;
    // Play a tiny silent buffer to satisfy iOS's "must play during gesture" rule
    try {
      const buf = audio.createBuffer(1, 1, 22050);
      const src = audio.createBufferSource();
      src.buffer = buf;
      src.connect(audio.destination);
      src.start(0);
      unlocked = true;
    } catch(e) {}
  }

  // Auto-prime on first user interaction (one-time)
  function primeOnce() {
    unlockAudio();
    document.removeEventListener("touchstart", primeOnce, true);
    document.removeEventListener("touchend", primeOnce, true);
    document.removeEventListener("click", primeOnce, true);
    document.removeEventListener("keydown", primeOnce, true);
  }
  if (typeof document !== "undefined") {
    document.addEventListener("touchstart", primeOnce, true);
    document.addEventListener("touchend", primeOnce, true);
    document.addEventListener("click", primeOnce, true);
    document.addEventListener("keydown", primeOnce, true);
  }

  // ---- Mute preference ----
  function isMuted() {
    try { return localStorage.getItem("aii_muted") === "1"; } catch(e) { return false; }
  }
  function setMuted(muted) {
    try { localStorage.setItem("aii_muted", muted ? "1" : "0"); } catch(e) {}
  }
  function toggleMute() {
    const newState = !isMuted();
    setMuted(newState);
    return newState;
  }

  // ---- Core tone player ----
  // Plays a single tone with envelope (fade in/out so it doesn't click)
  function playTone(freq, duration, opts) {
    if (isMuted()) return;
    const audio = getCtx();
    if (!audio) return;
    opts = opts || {};
    const type = opts.type || "sine";
    const volume = opts.volume != null ? opts.volume : 0.15;
    const delay = opts.delay || 0;

    const t0 = audio.currentTime + delay;
    const osc = audio.createOscillator();
    const gain = audio.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);

    // If a slide is provided, glide to that freq
    if (opts.slideTo) {
      osc.frequency.exponentialRampToValueAtTime(opts.slideTo, t0 + duration);
    }

    // Envelope: quick attack, smooth release
    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(volume, t0 + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);

    osc.connect(gain);
    gain.connect(audio.destination);
    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
  }

  // ---- Music note → frequency helper ----
  // Each note in Hz, easy to remember names
  const NOTES = {
    C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
    C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00, B5: 987.77,
    C6: 1046.50, D6: 1174.66, E6: 1318.51, G6: 1567.98
  };

  // ============ SOUND EFFECTS ============

  // Cute tick on button press
  function playClick() {
    playTone(800, 0.06, { type: "square", volume: 0.06 });
  }

  // Happy "ding!" for correct answers — ascending major chord
  function playCorrect() {
    playTone(NOTES.C5, 0.12, { type: "triangle", volume: 0.18, delay: 0 });
    playTone(NOTES.E5, 0.12, { type: "triangle", volume: 0.18, delay: 0.08 });
    playTone(NOTES.G5, 0.22, { type: "triangle", volume: 0.20, delay: 0.16 });
  }

  // Soft "uh-oh" for wrong answers — two-note descending
  function playWrong() {
    playTone(NOTES.A4, 0.16, { type: "sine", volume: 0.18 });
    playTone(NOTES.F4, 0.28, { type: "sine", volume: 0.16, delay: 0.14 });
  }

  // Lesson complete — triumphant 4-note fanfare
  function playComplete() {
    playTone(NOTES.C5, 0.18, { type: "triangle", volume: 0.22, delay: 0 });
    playTone(NOTES.E5, 0.18, { type: "triangle", volume: 0.22, delay: 0.15 });
    playTone(NOTES.G5, 0.18, { type: "triangle", volume: 0.22, delay: 0.30 });
    playTone(NOTES.C6, 0.50, { type: "triangle", volume: 0.26, delay: 0.45 });
  }

  // PERFECT score! — extra-fancy celebration
  function playPerfect() {
    // First a quick fanfare
    playTone(NOTES.C5, 0.12, { type: "triangle", volume: 0.22, delay: 0 });
    playTone(NOTES.G5, 0.12, { type: "triangle", volume: 0.22, delay: 0.10 });
    playTone(NOTES.C6, 0.12, { type: "triangle", volume: 0.22, delay: 0.20 });
    playTone(NOTES.E6, 0.12, { type: "triangle", volume: 0.22, delay: 0.30 });
    playTone(NOTES.G6, 0.45, { type: "triangle", volume: 0.26, delay: 0.40 });
    // Sparkle high notes layered on top
    playTone(NOTES.C6, 0.08, { type: "sine", volume: 0.12, delay: 0.55 });
    playTone(NOTES.E6, 0.08, { type: "sine", volume: 0.12, delay: 0.65 });
    playTone(NOTES.G6, 0.20, { type: "sine", volume: 0.14, delay: 0.75 });
  }

  // Magical "new word" chime for vocab cards
  function playVocab() {
    playTone(NOTES.E5, 0.10, { type: "triangle", volume: 0.14, delay: 0 });
    playTone(NOTES.G5, 0.10, { type: "triangle", volume: 0.14, delay: 0.07 });
    playTone(NOTES.C6, 0.25, { type: "triangle", volume: 0.16, delay: 0.14 });
  }

  // Nova arrives — gentle two-note rising
  function playNova() {
    playTone(NOTES.G4, 0.10, { type: "sine", volume: 0.12, delay: 0 });
    playTone(NOTES.C5, 0.20, { type: "sine", volume: 0.14, delay: 0.08 });
  }

  // Level up / streak milestone — rising glissando
  function playLevelUp() {
    playTone(NOTES.C5, 0.50, { type: "triangle", volume: 0.20, slideTo: NOTES.C6 });
    playTone(NOTES.E5, 0.40, { type: "sine", volume: 0.12, delay: 0.15 });
  }

  // Heart lost — quick downward "pew"
  function playHeartLost() {
    playTone(NOTES.E5, 0.20, { type: "sawtooth", volume: 0.10, slideTo: NOTES.C4 });
  }

  // ============ PUBLIC API ============
  window.AIISound = {
    correct: playCorrect,
    wrong: playWrong,
    click: playClick,
    complete: playComplete,
    perfect: playPerfect,
    vocab: playVocab,
    nova: playNova,
    levelUp: playLevelUp,
    heartLost: playHeartLost,
    isMuted: isMuted,
    setMuted: setMuted,
    toggleMute: toggleMute
  };
})();
