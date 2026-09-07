// Gaplashamiz — app logic
const STORAGE_KEY = 'gaplashamiz_progress_v1';

function loadProgress(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){ return {}; }
}
function saveProgress(p){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }catch(e){}
}
let progress = loadProgress();

const listView = document.getElementById('listView');
const detailView = document.getElementById('detailView');
const lessonListEl = document.getElementById('lessonList');
const overallFill = document.getElementById('overallFill');
const overallLabel = document.getElementById('overallLabel');

const LEVELS = [
  {id:'A1', label:'A1 · Boshlang\'ich'},
  {id:'A2', label:'A2 · Elementar'},
  {id:'B1', label:'B1 · O\'rta'},
  {id:'B2', label:'B2 · Yuqori o\'rta'},
];
let currentLevel = 'A1';

const levelRow = document.getElementById('levelRow');
function renderLevelRow(){
  levelRow.innerHTML = LEVELS.map(lv=>{
    const has = LESSONS.some(l=>l.level===lv.id);
    return `<button class="level-pill ${lv.id===currentLevel?'active':''}" data-level="${lv.id}" ${has?'':'disabled style="opacity:.35"'}>${lv.label}</button>`;
  }).join('');
  levelRow.querySelectorAll('.level-pill').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      currentLevel = btn.dataset.level;
      renderLevelRow();
      renderList();
    });
  });
}

function renderList(){
  lessonListEl.innerHTML = '';
  const levelLessons = LESSONS.filter(l=>l.level===currentLevel);
  let doneCount = 0;
  levelLessons.forEach(lesson=>{
    const isDone = !!progress[lesson.id];
    if(isDone) doneCount++;
    const el = document.createElement('div');
    el.className = 'ticket' + (isDone ? ' done' : '');
    el.innerHTML = `
      <div class="idx">${String(lesson.displayNum).padStart(2,'0')}</div>
      <div class="ticket-body">
        <h3>${lesson.title}</h3>
        <p class="topic">${lesson.topic}</p>
      </div>
      <div class="status ${isDone ? 'done' : ''}">${isDone ? 'Tugallandi' : 'Boshlanmagan'}</div>
    `;
    el.addEventListener('click', ()=> openLesson(lesson.id));
    lessonListEl.appendChild(el);
  });
  const pct = levelLessons.length ? (doneCount/levelLessons.length*100) : 0;
  overallFill.style.width = pct + '%';
  overallLabel.textContent = `${doneCount} / ${levelLessons.length} dars tugallandi (${currentLevel})`;
}

let currentLessonId = null;
let currentTab = 'rules';

const dNum = document.getElementById('dNum');
const dTitle = document.getElementById('dTitle');
const tabs = document.querySelectorAll('.tab');
const panes = document.querySelectorAll('.pane');
const backBtn = document.getElementById('backBtn');
const markDoneBtn = document.getElementById('markDoneBtn');

function openLesson(id){
  currentLessonId = id;
  currentTab = 'rules';
  const lesson = LESSONS.find(l=>l.id===id);
  dNum.textContent = lesson.level + ' · DARS ' + lesson.displayNum;
  dTitle.textContent = lesson.title;
  renderRules(lesson);
  renderExercises(lesson);
  renderDialogue(lesson);
  renderReading(lesson);
  renderVocab(lesson);
  setTab('rules');
  const isDone = !!progress[id];
  markDoneBtn.textContent = isDone ? "✓ Tugallandi — bekor qilish" : 'Darsni tugallangan deb belgilash';
  listView.style.display = 'none';
  detailView.style.display = 'block';
  window.scrollTo(0,0);
}

function closeLesson(){
  detailView.style.display = 'none';
  listView.style.display = 'block';
  renderList();
  window.scrollTo(0,0);
}
backBtn.addEventListener('click', closeLesson);

tabs.forEach(t=>{
  t.addEventListener('click', ()=> setTab(t.dataset.tab));
});
function setTab(tab){
  currentTab = tab;
  tabs.forEach(t=> t.classList.toggle('active', t.dataset.tab===tab));
  panes.forEach(p=> p.classList.toggle('active', p.dataset.pane===tab));
  document.querySelector('.pane.active') && document.querySelector('.pane.active').scrollTo(0,0);
}

function renderRules(lesson){
  const body = document.getElementById('rulesBody');
  let html = '';
  if(lesson.alphabet){
    html += `<div class="card"><div class="rule-num">HARFLAR</div><h4>${lesson.alphabet.title}</h4>
      <div class="alpha-grid">${lesson.alphabet.letters.map(a=>`
        <div class="alpha-cell"><div class="letter">${a.l}</div><div class="sound">${a.s}</div></div>
      `).join('')}</div>
    </div>`;
  }
  html += lesson.rules.map((r,i)=>`
    <div class="card">
      <div class="rule-num">QOIDA ${i+1}</div>
      <h4>${r.h}</h4>
      <p>${r.t}</p>
      <div class="ex">${r.ex.replace(/\n/g,'<br>')}</div>
    </div>
  `).join('');
  body.innerHTML = html;
}

function renderExercises(lesson){
  const body = document.getElementById('exBody');
  body.innerHTML = '';
  lesson.exercises.forEach((ex,i)=>{
    const wrap = document.createElement('div');
    wrap.className = 'exq card';
    if(ex.type === 'fill'){
      wrap.innerHTML = `
        <div class="qn">MASHQ ${i+1}</div>
        <p class="qtext">${ex.q}</p>
        <input type="text" placeholder="Javobingizni yozing..." />
        <button class="checkbtn">Tekshirish</button>
        <div class="fb"></div>
      `;
      const input = wrap.querySelector('input');
      const btn = wrap.querySelector('.checkbtn');
      const fb = wrap.querySelector('.fb');
      btn.addEventListener('click', ()=>{
        const val = input.value.trim().toLowerCase();
        const correct = ex.answer.trim().toLowerCase();
        if(val === correct){
          fb.textContent = '✓ To\'g\'ri!';
          fb.className = 'fb ok';
        }else{
          fb.textContent = '✗ To\'g\'ri javob: ' + ex.answer;
          fb.className = 'fb bad';
        }
      });
    } else if(ex.type === 'choice'){
      wrap.innerHTML = `
        <div class="qn">MASHQ ${i+1}</div>
        <p class="qtext">${ex.q}</p>
        <div class="opts"></div>
        <div class="fb"></div>
      `;
      const optsWrap = wrap.querySelector('.opts');
      ex.options.forEach(opt=>{
        const b = document.createElement('button');
        b.className = 'opt-btn';
        b.textContent = opt;
        b.addEventListener('click', ()=>{
          optsWrap.querySelectorAll('.opt-btn').forEach(x=>x.classList.remove('picked'));
          b.classList.add('picked');
          const fb = wrap.querySelector('.fb');
          if(opt === ex.answer){
            fb.textContent = '✓ To\'g\'ri!';
            fb.className = 'fb ok';
          }else{
            fb.textContent = '✗ To\'g\'ri javob: ' + ex.answer;
            fb.className = 'fb bad';
          }
        });
        optsWrap.appendChild(b);
      });
    }
    body.appendChild(wrap);
  });
}

function renderDialogue(lesson){
  document.getElementById('dlgTitle').textContent = lesson.dialogue.title;
  const body = document.getElementById('dlgBody');
  body.innerHTML = lesson.dialogue.lines.map(l=>`
    <div class="bubble-row ${l.side}">
      <div class="bubble">
        <div class="who">${l.who}</div>
        <div class="ru">${l.ru}</div>
        ${l.tr ? `<div class="tr">[${l.tr}]</div>` : ''}
        <div class="uz">${l.uz}</div>
      </div>
    </div>
  `).join('');
}

function renderReading(lesson){
  document.getElementById('readTitle').textContent = lesson.reading.title;
  document.getElementById('readBodyRu').innerHTML = lesson.reading.ru.split('\n\n').map(p=>`<p style="margin:0 0 10px;">${p}</p>`).join('');
  document.getElementById('readBodyUz').innerHTML = lesson.reading.uz.split('\n\n').map(p=>`<p style="margin:0 0 8px;">${p}</p>`).join('');
}

function renderVocab(lesson){
  const body = document.getElementById('vocabBody');
  body.innerHTML = lesson.vocab.map(v=>`
    <tr>
      <td class="ru">${v.ru}<span class="tr">[${v.tr}]</span></td>
      <td class="uz">${v.uz}</td>
    </tr>
  `).join('');
}

markDoneBtn.addEventListener('click', ()=>{
  if(currentLessonId == null) return;
  const isDone = !!progress[currentLessonId];
  if(isDone){
    delete progress[currentLessonId];
    markDoneBtn.textContent = 'Darsni tugallangan deb belgilash';
  }else{
    progress[currentLessonId] = true;
    markDoneBtn.textContent = "✓ Tugallandi — bekor qilish";
  }
  saveProgress(progress);
});

if('serviceWorker' in navigator && (location.protocol === 'https:' || location.protocol === 'http:')){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  });
}

renderLevelRow();
renderList();
