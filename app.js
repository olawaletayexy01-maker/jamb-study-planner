const STORAGE_KEY = 'jambStudyPlanner.v1';
const todayISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};
const defaultState = () => ({ checked: {}, target: 2, studyLog: {}, lastStudyDates: {}, bestScores: {} });
let state;
try { state = { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }; }
catch { state = defaultState(); }
state.checked ||= {}; state.studyLog ||= {}; state.lastStudyDates ||= {}; state.bestScores ||= {};
let activeSubject = null;
let activeQuiz = null;
let toastTimer;
const $ = selector => document.querySelector(selector);
const views = { home: $('#home-view'), subject: $('#subject-view'), quiz: $('#quiz-view'), settings: $('#settings-view') };
const icons = { english: 'Aa', mathematics: '∑', physics: 'ϟ', chemistry: '⚗' };
const topicRows = subject => subject.sections.flatMap((section, sectionIndex) => section.topics.map((topic, topicIndex) => ({ section: section.name, topic, id: `${sectionIndex}-${topicIndex}` })));
function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function isChecked(key, id) { return Boolean(state.checked[`${key}:${id}`]); }
function countDone(key) { return topicRows(window.JAMB_SYLLABUS[key]).filter(row => isChecked(key, row.id)).length; }
function recordStudy(key, storageId) {
  const today = todayISO();
  state.studyLog[today] ||= [];
  if (!state.studyLog[today].includes(storageId)) state.studyLog[today].push(storageId);
  state.lastStudyDates[key] = today;
}
function streak(key) {
  const dates = new Set(Object.entries(state.studyLog).filter(([, topics]) => key ? topics.some(item => item.startsWith(`${key}:`)) : topics.length > 0).map(([date]) => date));
  let day = new Date();
  if (!dates.has(todayISO())) day.setDate(day.getDate() - 1);
  let count = 0;
  while (dates.has(`${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}`)) { count++; day.setDate(day.getDate() - 1); }
  return count;
}
function switchView(name) {
  Object.entries(views).forEach(([key, node]) => node.classList.toggle('hidden', key !== name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'home') renderHome();
  if (name === 'settings') $('#daily-target').value = state.target;
  $('#main').focus({ preventScroll: true });
}
function renderHome() {
  const grid = $('#subject-grid'); grid.innerHTML = '';
  let totalTopics = 0, totalDone = 0;
  Object.entries(window.JAMB_SYLLABUS).forEach(([key, subject]) => {
    const rows = topicRows(subject), done = countDone(key), percent = rows.length ? Math.round(done / rows.length * 100) : 0;
    totalTopics += rows.length; totalDone += done;
    const card = document.createElement('button'); card.type = 'button'; card.className = 'subject-card';
    card.setAttribute('aria-label', `${subject.name}, ${done} of ${rows.length} topics studied, ${percent} percent`);
    card.innerHTML = `<span class="subject-card-top"><span class="subject-icon icon-${key}" aria-hidden="true">${icons[key]}</span><span class="card-arrow" aria-hidden="true">↗</span></span><span class="subject-name"></span><span class="subject-meta">${done} of ${rows.length} topics <b aria-hidden="true">·</b> ${percent}%</span><span class="card-track" aria-hidden="true"><span style="width:${percent}%"></span></span>`;
    card.querySelector('.subject-name').textContent = subject.name;
    card.addEventListener('click', () => openSubject(key)); grid.append(card);
  });
  const target = Math.max(1, Number(state.target) || 2);
  const markedToday = new Set(state.studyLog[todayISO()] || []).size;
  $('#today-progress').innerHTML = `${markedToday} <span>/ ${target} ${target === 1 ? 'topic' : 'topics'}</span>`;
  $('#daily-fill').style.width = `${Math.min(100, Math.round(markedToday / target * 100))}%`;
  const percent = totalTopics ? Math.round(totalDone / totalTopics * 100) : 0;
  $('#overall-percent').textContent = `${percent}%`;
  $('#overall-fill').style.width = `${percent}%`;
  $('#overall-caption').textContent = `${totalDone} of ${totalTopics} syllabus topics studied`;
}
function openSubject(key) {
  activeSubject = key;
  const subject = window.JAMB_SYLLABUS[key], rows = topicRows(subject), done = countDone(key), percent = rows.length ? Math.round(done / rows.length * 100) : 0;
  $('#subject-title').textContent = subject.name;
  $('#subject-code').textContent = `${subject.short} · UTME SYLLABUS`;
  $('#subject-icon').textContent = icons[key]; $('#subject-icon').className = `subject-icon large icon-${key}`;
  $('#subject-count-studied').innerHTML = `${done} <small>/ ${rows.length}</small>`;
  $('#subject-percent').textContent = `${percent}%`;
  $('#subject-streak').innerHTML = `${streak(key)} <small>${streak(key) === 1 ? 'day' : 'days'}</small>`;
  $('#subject-progress-fill').style.width = `${percent}%`;
  $('.progress-track').setAttribute('aria-valuenow', percent);
  $('#topic-total').textContent = `${rows.length} topics`;
  const list = $('#topic-list'); list.innerHTML = '';
  subject.sections.forEach((section, sectionIndex) => {
    const wrap = document.createElement('section'); wrap.className = 'topic-section';
    const heading = document.createElement('h3'); heading.textContent = section.name; wrap.append(heading);
    section.topics.forEach((topic, topicIndex) => {
      const id = `${sectionIndex}-${topicIndex}`, inputId = `topic-${key}-${id}`;
      const label = document.createElement('label'); label.className = 'topic-row'; label.htmlFor = inputId;
      const box = document.createElement('input'); box.type = 'checkbox'; box.id = inputId; box.checked = isChecked(key, id);
      box.setAttribute('aria-label', `Mark ${topic} as studied in ${subject.name}`);
      const visual = document.createElement('span'); visual.className = 'custom-check'; visual.setAttribute('aria-hidden', 'true');
      const text = document.createElement('span'); text.className = 'topic-text'; text.textContent = topic;
      label.append(box, visual, text); wrap.append(label);
      if (state.bestScores[`${key}:${id}`] !== undefined) {
        const score = document.createElement('span'); score.className = 'topic-best-score';
        score.textContent = `Best: ${state.bestScores[`${key}:${id}`]}/5`; score.setAttribute('aria-label', `Best practice score ${state.bestScores[`${key}:${id}`]} out of 5`); wrap.append(score);
      }
      if (box.checked && window.JAMB_QUESTIONS[`${key}:${id}`]?.length >= 5) {
        const practice = document.createElement('button'); practice.type = 'button'; practice.className = 'practice-button'; practice.textContent = 'Practice';
        practice.setAttribute('aria-label', `Practice questions for ${topic}`); practice.addEventListener('click', () => startQuiz(key, id)); wrap.append(practice);
      }
      box.addEventListener('change', () => toggleTopic(key, id, box.checked));
    });
    list.append(wrap);
  });
  switchView('subject');
}
function toggleTopic(key, id, checked) {
  const storageId = `${key}:${id}`;
  if (checked) { state.checked[storageId] = true; recordStudy(key, storageId); }
  else delete state.checked[storageId];
  save(); renderHome();
  const subject = window.JAMB_SYLLABUS[key], rows = topicRows(subject), done = countDone(key), percent = rows.length ? Math.round(done / rows.length * 100) : 0;
  $('#subject-count-studied').innerHTML = `${done} <small>/ ${rows.length}</small>`;
  $('#subject-percent').textContent = `${percent}%`;
  const days = streak(key); $('#subject-streak').innerHTML = `${days} <small>${days === 1 ? 'day' : 'days'}</small>`;
  $('#subject-progress-fill').style.width = `${percent}%`; $('.progress-track').setAttribute('aria-valuenow', percent);
  showToast(checked ? 'Topic marked as studied' : 'Topic unchecked');
  openSubject(key);
}
function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 1800); }
function startQuiz(key, id) {
  const questions = window.JAMB_QUESTIONS[`${key}:${id}`];
  if (!questions || questions.length < 5) return;
  const row = topicRows(window.JAMB_SYLLABUS[key]).find(item => item.id === id);
  activeQuiz = { key, id, topic: row.topic, questions: questions.slice(0, 5), index: 0, score: 0, answered: false };
  $('#quiz-title').textContent = row.topic;
  $('#quiz-topic-label').textContent = `${window.JAMB_SYLLABUS[key].name.toUpperCase()} · PRACTICE`;
  renderQuizQuestion(); switchView('quiz');
}
function renderQuizQuestion() {
  const quiz = activeQuiz, host = $('#quiz-content'); host.innerHTML = '';
  if (quiz.index >= quiz.questions.length) {
    const result = document.createElement('div'); result.className = 'quiz-result';
    const heading = document.createElement('h2'); heading.textContent = `You scored ${quiz.score} out of ${quiz.questions.length}`;
    const previous = state.bestScores[`${quiz.key}:${quiz.id}`] ?? 0;
    const best = Math.max(previous, quiz.score); state.bestScores[`${quiz.key}:${quiz.id}`] = best; save();
    const note = document.createElement('p'); note.textContent = quiz.score >= previous ? `New best score: ${best}/5` : `Best score: ${best}/5`;
    const retake = document.createElement('button'); retake.type = 'button'; retake.className = 'quiz-next'; retake.textContent = 'Retake quiz'; retake.addEventListener('click', () => startQuiz(quiz.key, quiz.id));
    const back = document.createElement('button'); back.type = 'button'; back.className = 'quiz-secondary'; back.textContent = 'Back to topics'; back.addEventListener('click', () => openSubject(quiz.key));
    result.append(heading, note, retake, back); host.append(result); return;
  }
  const question = quiz.questions[quiz.index];
  const count = document.createElement('p'); count.className = 'quiz-count'; count.textContent = `Question ${quiz.index + 1} of ${quiz.questions.length}`;
  const prompt = document.createElement('h2'); prompt.className = 'quiz-prompt'; prompt.textContent = question.prompt;
  const options = document.createElement('div'); options.className = 'quiz-options';
  const feedback = document.createElement('p'); feedback.className = 'quiz-feedback'; feedback.setAttribute('role', 'status');
  question.options.forEach((option, index) => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'quiz-option'; button.textContent = option;
    button.addEventListener('click', () => {
      if (quiz.answered) return;
      quiz.answered = true;
      const correct = index === question.answer; if (correct) quiz.score++;
      button.classList.add(correct ? 'correct' : 'incorrect');
      if (!correct) options.children[question.answer].classList.add('correct');
      feedback.textContent = correct ? 'Correct.' : `Not quite. The correct answer is: ${question.options[question.answer]}`;
      next.disabled = false;
    });
    options.append(button);
  });
  const next = document.createElement('button'); next.type = 'button'; next.className = 'quiz-next'; next.textContent = quiz.index === quiz.questions.length - 1 ? 'See score' : 'Next question'; next.disabled = true;
  next.addEventListener('click', () => { quiz.index++; quiz.answered = false; renderQuizQuestion(); });
  host.append(count, prompt, options, feedback, next);
}
$('#quiz-back').addEventListener('click', () => openSubject(activeQuiz.key));
$('#back-home').addEventListener('click', () => switchView('home'));
$('#back-home-bottom').addEventListener('click', () => switchView('home'));
$('#settings-open').addEventListener('click', () => switchView('settings'));
$('#settings-back').addEventListener('click', () => switchView('home'));
$('#daily-target').addEventListener('change', event => { state.target = Math.min(20, Math.max(1, Number(event.target.value) || 1)); event.target.value = state.target; save(); showToast('Daily target saved'); });
$('#target-minus').addEventListener('click', () => { state.target = Math.max(1, Number(state.target) - 1); $('#daily-target').value = state.target; save(); });
$('#target-plus').addEventListener('click', () => { state.target = Math.min(20, Number(state.target) + 1); $('#daily-target').value = state.target; save(); });
$('#reset-progress').addEventListener('click', () => {
  if (!window.confirm('Reset all studied topics and streak history? This cannot be undone.')) return;
  state = { ...defaultState(), target: state.target }; save(); switchView('home'); showToast('Progress reset');
});
function updateConnection() { const online = navigator.onLine; const node = $('#connection-status'); node.classList.toggle('offline', !online); node.querySelector('span:last-child').textContent = online ? 'online' : 'offline'; }
window.addEventListener('online', updateConnection); window.addEventListener('offline', updateConnection);
updateConnection(); renderHome();
