/**
 * Practice runner logic.
 *
 * Kept as a standalone module rather than inline in the component so it can be
 * type-checked against the real engine types. An inline <script> in an .astro
 * file loses that checking, and the engine's types are the contract here.
 *
 * Behaviour comes entirely from src/lib/engine.ts. This file only touches the
 * DOM.
 */

import {
  mark,
  record,
  chooseNext,
  emptyState,
  masteryPercent,
  computeStreak,
} from '../lib/engine';
import { normalise, type Attempt, type MasteryState, type Question } from '../lib/types';

/**
 * Shape of a question after JSON round-tripping.
 *
 * Identical to Question in structure, but `math` and `completionStart` are
 * explicitly nullable because the serialiser emits null rather than dropping
 * the key. Structurally compatible with Question, which is what lets us hand
 * it straight to mark() and record() without a cast.
 */
type SerialisedQuestion = Question;

const zone = document.querySelector<HTMLElement>('.practice-zone');
const dataEl = document.getElementById('question-data');

if (zone && dataEl) {
  const COMPETENCY_ID = zone.dataset.competency ?? '';
  const STAGE = zone.dataset.stage ?? 'independent';

  const QUESTIONS = JSON.parse(dataEl.textContent ?? '[]') as SerialisedQuestion[];

  // Keyed by competency so progress is per-topic. If this changes, existing
  // student progress is orphaned, so the version prefix matters.
  const STORAGE_KEY = `mathsguru:v1:${COMPETENCY_ID}`;
  const ATTEMPT_KEY = `mathsguru:v1:${COMPETENCY_ID}:attempts`;

  const el = <T extends HTMLElement>(id: string) =>
    document.getElementById(id) as T;

  const ui = {
    progressText: el<HTMLSpanElement>('progress-text'),
    streakText: el<HTMLSpanElement>('streak-text'),
    progressFill: el<HTMLDivElement>('progress-fill'),
    why: el<HTMLParagraphElement>('why-this-question'),
    stage: el<HTMLParagraphElement>('stage-label'),
    prompt: el<HTMLParagraphElement>('question-prompt'),
    math: el<HTMLParagraphElement>('question-math'),
    completion: el<HTMLDivElement>('completion-start'),
    completionText: el<HTMLParagraphElement>('completion-text'),
    answer: el<HTMLInputElement>('answer'),
    check: el<HTMLButtonElement>('check'),
    hint: el<HTMLButtonElement>('hint'),
    hints: el<HTMLDivElement>('hints'),
    feedback: el<HTMLDivElement>('feedback'),
    nextRow: el<HTMLDivElement>('next-row'),
    next: el<HTMLButtonElement>('next'),
    summary: el<HTMLParagraphElement>('summary'),
    questionCard: el<HTMLDivElement>('question-card'),
  };

  let state: MasteryState = loadState();
  let attempts: Attempt[] = loadAttempts();
  let current: SerialisedQuestion | null = null;
  let usedHint = false;
  let revealedHints = 0;
  let finished = false;

  function loadState(): MasteryState {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as MasteryState;
        // Guard against a half-written or older-shape value.
        if (Array.isArray(parsed.mastered) && Array.isArray(parsed.practiceDates)) {
          return parsed;
        }
      }
    } catch {
      // Private browsing or storage disabled. Fall through to fresh state.
    }
    return emptyState(COMPETENCY_ID);
  }

  function loadAttempts(): Attempt[] {
    try {
      const raw = localStorage.getItem(ATTEMPT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed as Attempt[];
      }
    } catch {
      /* ignore */
    }
    return [];
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      localStorage.setItem(ATTEMPT_KEY, JSON.stringify(attempts.slice(-200)));
    } catch {
      // If we cannot persist, the session still works. Do not crash a student
      // mid-question because their browser blocked storage.
    }
  }

  /** Only independent questions count towards the mastery denominator. */
  function masteryTotal(): number {
    return QUESTIONS.filter((q) => q.stage === 'independent').length;
  }

  function renderProgress() {
    const total = masteryTotal();
    const pct = masteryPercent(state, total);

    ui.progressText.textContent =
      pct === 100 && total > 0
        ? `All ${total} mastered`
        : `${state.mastered.length} of ${total} mastered`;
    ui.progressFill.style.width = `${pct}%`;

    const streak = computeStreak(state.practiceDates);
    ui.streakText.textContent =
      streak > 0 ? `${streak} day${streak === 1 ? '' : 's'} in a row` : '';
  }

  function next() {
    const choice = chooseNext(QUESTIONS, attempts);

    if (!choice) {
      finished = true;
      showSummary();
      return;
    }

    current = choice.question;
    usedHint = false;
    revealedHints = 0;
    ui.questionCard.removeAttribute('hidden');

    ui.why.textContent = choice.because;
    ui.stage.textContent =
      current.stage === 'completion'
        ? 'Completion - we have started this one'
        : 'On your own';
    ui.prompt.textContent = current.prompt;

    // KaTeX auto-render scans the DOM for $...$ and \(...\). Emitting the
    // delimiters here means a client-side render call can pick it up.
    ui.math.innerHTML = current.math ? `$$${current.math}$$` : '';
    ui.math.hidden = !current.math;

    ui.completion.hidden = current.stage !== 'completion';
    ui.completionText.textContent = current.completionStart ?? '';

    ui.answer.value = '';
    ui.answer.disabled = false;
    // check() disables these. Without re-enabling, the student is stuck on the
    // second question with a dead button.
    ui.check.disabled = false;
    ui.hints.innerHTML = '';
    ui.hints.hidden = true;
    ui.hint.hidden = !(current.hints && current.hints.length > 0);
    ui.feedback.innerHTML = '';
    ui.feedback.removeAttribute('data-tone');
    ui.nextRow.hidden = true;
    ui.summary.hidden = true;

    ui.answer.focus();
  }

  function showHints() {
    if (!current) return;
    const list = current.hints ?? [];
    if (revealedHints >= list.length) return;

    const item = document.createElement('li');
    item.textContent = list[revealedHints];
    ui.hints.appendChild(item);
    revealedHints += 1;
    ui.hints.hidden = false;

    // Asking for help means you have not mastered it yet.
    usedHint = true;

    if (revealedHints >= list.length) ui.hint.hidden = true;
    ui.answer.focus();
  }

  function renderFeedback(result: ReturnType<typeof mark>) {
    ui.feedback.setAttribute('data-tone', result.correct ? 'good' : 'nudge');
    ui.feedback.innerHTML = '';

    const title = document.createElement('p');
    title.className = 'feedback-title';
    title.textContent = result.correct ? 'That is right' : 'Not quite yet';
    ui.feedback.appendChild(title);

    const parts = document.createElement('ul');
    parts.className = 'feedback-parts';

    if (result.correct) {
      const li = document.createElement('li');
      li.textContent = result.message;
      parts.appendChild(li);
    } else if (result.diagnosis) {
      // The diagnosis IS the product: what happened, why, what to try instead.
      const rows: [string, string][] = [
        ['What happened', result.diagnosis.say],
        ['Why', result.diagnosis.because],
        ['Try instead', result.diagnosis.instead],
      ];
      for (const [label, value] of rows) {
        const li = document.createElement('li');
        const strong = document.createElement('strong');
        strong.textContent = label;
        li.appendChild(strong);
        li.appendChild(document.createTextNode(value));
        parts.appendChild(li);
      }
    } else {
      // We do not recognise this answer. Be honest rather than inventing a
      // reason, because a wrong diagnosis is worse than none.
      const li = document.createElement('li');
      li.textContent = result.message;
      parts.appendChild(li);
    }

    ui.feedback.appendChild(parts);
  }

  function check() {
    if (!current || finished) return;

    const result = mark(current, ui.answer.value, usedHint);
    renderFeedback(result);

    attempts.push({
      questionId: current.id,
      given: normalise(ui.answer.value),
      correct: result.correct,
      at: Date.now(),
      usedHint,
    });

    state = record(state, current, result);
    save();
    renderProgress();

    ui.answer.disabled = true;
    ui.check.disabled = true;
    ui.hint.hidden = true;
    ui.nextRow.hidden = false;
    ui.next.focus();
  }

  function showSummary() {
    const total = masteryTotal();
    const pct = masteryPercent(state, total);
    ui.summary.hidden = false;
    ui.questionCard?.setAttribute('hidden', '');

    if (pct === 100 && total > 0) {
      ui.summary.innerHTML =
        '<strong>Every question mastered.</strong> Come back tomorrow to keep the streak going. Spacing is what makes this stick, not doing it all in one go.';
    } else {
      const left = total - state.mastered.length;
      ui.summary.innerHTML = `You have mastered <strong>${state.mastered.length} of ${total}</strong>. The other ${left} ${left === 1 ? 'question comes' : 'questions come'} back later, not now. That is on purpose.`;
    }
    ui.nextRow.hidden = true;
  }

  ui.check.addEventListener('click', check);
  ui.hint.addEventListener('click', showHints);
  ui.next.addEventListener('click', next);

  // Students will try Enter constantly.
  ui.answer.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    if (!ui.nextRow.hidden) {
      next();
    } else {
      check();
    }
  });

  renderProgress();
  next();
}
