
App · JS
/* ════════════════════════════════════════════
   HKDSE Chemistry Flashcards — app.js
   ════════════════════════════════════════════ */
 
(function () {
  'use strict';
 
  // ── State ────────────────────────────────────────────────────────────────
  const state = {
    deck:       [],        // filtered + ordered cards
    index:      0,         // current card position
    isFlipped:  false,
    known:      new Set(), // card ids marked "Got It"
    review:     new Set(), // card ids marked "Still Learning"
    filterTopic: 'All',
    filterDiff:  'all',
  };
 
  // ── DOM refs ─────────────────────────────────────────────────────────────
  const $card         = document.getElementById('flashcard');
  const $cardFront    = $card.querySelector('.card-front');
  const $scene        = document.getElementById('card-scene');
  const $question     = document.getElementById('card-question');
  const $answer       = document.getElementById('card-answer');
  const $topicFront   = document.getElementById('card-topic-front');
  const $topicBack    = document.getElementById('card-topic-back');
  const $diffFront    = document.getElementById('card-diff-front');
  const $diffBack     = document.getElementById('card-diff-back');
  const $counter      = document.getElementById('card-counter');
  const $btnPrev      = document.getElementById('btn-prev');
  const $btnNext      = document.getElementById('btn-next');
  const $btnYes       = document.getElementById('btn-yes');
  const $btnNo        = document.getElementById('btn-no');
  const $btnShuffle   = document.getElementById('btn-shuffle');
  const $btnReset     = document.getElementById('btn-reset');
  const $btnRestart   = document.getElementById('btn-restart');
  const $topicSelect  = document.getElementById('topic-select');
  const $chips        = document.querySelectorAll('.chip');
  const $progressFill = document.getElementById('progress-fill');
  const $statTotal    = document.getElementById('stat-total-num');
  const $statKnown    = document.getElementById('stat-known-num');
  const $statReview   = document.getElementById('stat-review-num');
  const $emptyState   = document.getElementById('empty-state');
  const $completionScreen = document.getElementById('completion-screen');
  const $completionSub    = document.getElementById('completion-sub');
  const $completionStats  = document.getElementById('completion-stats');
 
  // ── Initialise ───────────────────────────────────────────────────────────
  function init() {
    buildTopicSelect();
    applyFilters();
    bindEvents();
    loadProgress();
    renderStats();
  }
 
  // ── Topic select ─────────────────────────────────────────────────────────
  function buildTopicSelect() {
    $topicSelect.innerHTML = '';
    allTopics.forEach(topic => {
      const opt = document.createElement('option');
      opt.value = topic;
      opt.textContent = topic;
      $topicSelect.appendChild(opt);
    });
  }
 
  // ── Filter + build deck ──────────────────────────────────────────────────
  function applyFilters() {
    const { filterTopic, filterDiff } = state;
    state.deck = flashcards.filter(card => {
      const topicOk = filterTopic === 'All' || card.topic === filterTopic;
      const diffOk  = filterDiff  === 'all' || card.difficulty === filterDiff;
      return topicOk && diffOk;
    });
    state.index   = 0;
    state.isFlipped = false;
    renderCard(true);
    renderStats();
  }
 
  // ── Render card ──────────────────────────────────────────────────────────
  function renderCard(animate = false) {
    const { deck, index } = state;
 
    // hide/show completion & empty states
    $completionScreen.style.display = 'none';
    $emptyState.style.display       = 'none';
    $scene.style.display            = '';
 
    if (deck.length === 0) {
      $scene.style.display     = 'none';
      $emptyState.style.display = 'block';
      $counter.textContent     = 'No cards';
      updateNavButtons();
      return;
    }
 
    if (index >= deck.length) {
      showCompletion();
      return;
    }
 
    const card = deck[index];
 
    // Unflip without animation if coming from flip
    if (state.isFlipped) {
      $card.style.transition = 'none';
      $card.classList.remove('is-flipped');
      $card.offsetHeight; // force reflow
      $card.style.transition = '';
      state.isFlipped = false;
    }
 
    $question.textContent     = card.question;
    $answer.textContent       = card.answer;
    $topicFront.textContent   = card.topic;
    $topicBack.textContent    = card.topic;
    $diffFront.textContent    = card.difficulty.charAt(0).toUpperCase() + card.difficulty.slice(1);
    $diffBack.textContent     = $diffFront.textContent;
    $diffFront.className      = 'card-diff ' + card.difficulty;
    $diffBack.className       = 'card-diff ' + card.difficulty;
 
    $counter.textContent = `Card ${index + 1} of ${deck.length}`;
 
    if (animate) {
      $scene.classList.remove('entering');
      void $scene.offsetWidth; // reflow
      $scene.classList.add('entering');
    }
 
    updateNavButtons();
  }
 
  // ── Flip ─────────────────────────────────────────────────────────────────
  function flipCard() {
    if (state.deck.length === 0 || state.index >= state.deck.length) return;
    state.isFlipped = !state.isFlipped;
    $card.classList.toggle('is-flipped', state.isFlipped);
  }
 
  // ── Navigation ───────────────────────────────────────────────────────────
  function goNext() {
    if (state.index < state.deck.length) {
      state.index++;
      state.isFlipped = false;
      renderCard(true);
    }
  }
 
  function goPrev() {
    if (state.index > 0) {
      state.index--;
      state.isFlipped = false;
      renderCard(true);
    }
  }
 
  function updateNavButtons() {
    $btnPrev.disabled = state.index === 0;
    $btnNext.disabled = state.index >= state.deck.length;
  }
 
  // ── Mark known / review ──────────────────────────────────────────────────
  function markKnown() {
    if (!state.isFlipped) return;
    const card = state.deck[state.index];
    if (!card) return;
    state.known.add(card.id);
    state.review.delete(card.id);
    saveProgress();
    renderStats();
    goNext();
  }
 
  function markReview() {
    if (!state.isFlipped) return;
    const card = state.deck[state.index];
    if (!card) return;
    state.review.add(card.id);
    state.known.delete(card.id);
    saveProgress();
    renderStats();
    goNext();
  }
 
  // ── Stats & Progress Bar ─────────────────────────────────────────────────
  function renderStats() {
    const total   = state.deck.length;
    const known   = [...state.known].filter(id => state.deck.find(c => c.id === id)).length;
    const review  = [...state.review].filter(id => state.deck.find(c => c.id === id)).length;
    const pct     = total > 0 ? Math.round((known / total) * 100) : 0;
 
    $statTotal.textContent  = total;
    $statKnown.textContent  = known;
    $statReview.textContent = review;
    $progressFill.style.width = pct + '%';
  }
 
  // ── Shuffle ──────────────────────────────────────────────────────────────
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
 
  function shuffleDeck() {
    shuffle(state.deck);
    state.index    = 0;
    state.isFlipped = false;
    renderCard(true);
  }
 
  // ── Completion ───────────────────────────────────────────────────────────
  function showCompletion() {
    $scene.style.display = 'none';
    $completionScreen.style.display = 'flex';
 
    const known  = [...state.known].filter(id => state.deck.find(c => c.id === id)).length;
    const review = [...state.review].filter(id => state.deck.find(c => c.id === id)).length;
    const total  = state.deck.length;
    const pct    = total > 0 ? Math.round((known / total) * 100) : 0;
 
    $completionSub.textContent = `You went through all ${total} cards in this deck.`;
    $completionStats.innerHTML = `
      <div class="completion-stat">
        <span class="completion-stat-num green">${known}</span>
        <span class="completion-stat-label">Got It ✓</span>
      </div>
      <div class="completion-stat">
        <span class="completion-stat-num orange">${review}</span>
        <span class="completion-stat-label">Still Learning</span>
      </div>
      <div class="completion-stat">
        <span class="completion-stat-num">${pct}%</span>
        <span class="completion-stat-label">Mastery</span>
      </div>
    `;
  }
 
  function restartDeck() {
    state.index    = 0;
    state.isFlipped = false;
    $completionScreen.style.display = 'none';
    $scene.style.display = '';
    renderCard(true);
  }
 
  // ── Reset progress ───────────────────────────────────────────────────────
  function resetProgress() {
    if (!confirm('Reset all progress? Your "Got It" and "Still Learning" marks will be cleared.')) return;
    state.known.clear();
    state.review.clear();
    state.index    = 0;
    state.isFlipped = false;
    saveProgress();
    renderStats();
    $completionScreen.style.display = 'none';
    $scene.style.display = '';
    renderCard(true);
  }
 
  // ── LocalStorage persistence ─────────────────────────────────────────────
  function saveProgress() {
    try {
      localStorage.setItem('chem5_known',  JSON.stringify([...state.known]));
      localStorage.setItem('chem5_review', JSON.stringify([...state.review]));
    } catch(e) { /* storage unavailable */ }
  }
 
  function loadProgress() {
    try {
      const k = localStorage.getItem('chem5_known');
      const r = localStorage.getItem('chem5_review');
      if (k) JSON.parse(k).forEach(id => state.known.add(id));
      if (r) JSON.parse(r).forEach(id => state.review.add(id));
    } catch(e) {}
    renderStats();
  }
 
  // ── Event Binding ─────────────────────────────────────────────────────────
  function bindEvents() {
    // Flip only when clicking the front face
    $cardFront.addEventListener('click', flipCard);
 
    // Navigation
    $btnNext.addEventListener('click', e => { e.stopPropagation(); goNext(); });
    $btnPrev.addEventListener('click', e => { e.stopPropagation(); goPrev(); });
 
    // Actions (prevent card flip propagation)
    $btnYes.addEventListener('click', e => { e.stopPropagation(); markKnown(); });
    $btnNo.addEventListener('click',  e => { e.stopPropagation(); markReview(); });
 
    // Shuffle
    $btnShuffle.addEventListener('click', shuffleDeck);
 
    // Reset
    $btnReset.addEventListener('click', resetProgress);
 
    // Restart
    $btnRestart.addEventListener('click', restartDeck);
 
    // Topic filter
    $topicSelect.addEventListener('change', () => {
      state.filterTopic = $topicSelect.value;
      applyFilters();
    });
 
    // Difficulty chips
    $chips.forEach(chip => {
      chip.addEventListener('click', () => {
        $chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.filterDiff = chip.dataset.diff;
        applyFilters();
      });
    });
 
    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
      // Ignore if typing in input
      if (['INPUT','SELECT','TEXTAREA'].includes(e.target.tagName)) return;
 
      switch (e.key) {
        case ' ':
        case 'Enter':
          e.preventDefault();
          flipCard();
          break;
        case 'ArrowRight':
        case 'l':
          goNext();
          break;
        case 'ArrowLeft':
        case 'h':
          goPrev();
          break;
        case 'y':
        case 'Y':
          markKnown();
          break;
        case 'n':
        case 'N':
          markReview();
          break;
      }
    });
  }
 
  // ── Boot ─────────────────────────────────────────────────────────────────
  init();
 
})();
