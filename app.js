const data = window.SITE_DATA;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function setText(selector, value) {
  const el = $(selector);
  if (el) el.textContent = value;
}

function safeText(value, fallback = '—') {
  if (value === null || value === undefined || value === '') return fallback;
  return String(value);
}

function numericSum(values) {
  return values.reduce((sum, value) => sum + (typeof value === 'number' ? value : 0), 0);
}

function initProfile() {
  const p = data.profile;
  document.title = `${p.name} — Work & Football`;
  setText('#brand-name', p.brand);
  setText('#hero-kicker', p.heroKicker);
  $('#hero-title').innerHTML = p.heroTitle.replace(/\n/g, '<br>');
  setText('#hero-desc', p.heroDesc);
  setText('#current-focus', p.currentFocus);
  setText('#player-name', p.name);
  setText('#player-position', p.footballPositions);
  setText('#player-style', p.footballStyle);
  setText('#player-number', p.number);
  setText('#about-title', p.aboutTitle);
  setText('#about-text', p.aboutText);
  setText('#footer-name', p.brand);
  setText('#year', new Date().getFullYear());

  const links = $('#social-links');
  links.innerHTML = p.links.map(link => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label} ↗</a>`).join('');
}

function renderWorks(filter = '全部') {
  const works = filter === '全部' ? data.works : data.works.filter(w => w.category === filter);
  const grid = $('#work-grid');
  if (!works.length) {
    grid.innerHTML = `<div class="empty-state">这个分类还没有作品。</div>`;
    return;
  }
  grid.innerHTML = works.map(work => `
    <a class="work-card ${work.featured ? 'featured' : ''}" href="${work.url}" ${work.url !== '#' ? 'target="_blank" rel="noreferrer"' : ''}>
      <div class="work-thumb">
        <div class="work-index">${String(work.id).padStart(2,'0')}</div>
        <div class="work-kind">${work.category.toUpperCase()} / ${work.year}</div>
      </div>
      <div class="work-body">
        <h3>${work.title}</h3>
        <p>${work.summary}</p>
        <div class="work-meta">${work.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      </div>
    </a>
  `).join('');
}

function initWorkFilters() {
  const categories = ['全部', ...new Set(data.works.map(w => w.category))];
  const wrap = $('#work-filters');
  wrap.innerHTML = categories.map((category, i) => `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${category}">${category}</button>`).join('');
  wrap.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    $$('#work-filters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderWorks(btn.dataset.filter);
  });
}

function renderAttributes() {
  $('#attributes').innerHTML = data.playerAttributes.map(attr => `
    <div class="attribute-row">
      <span>${attr.name}</span>
      <div class="attr-track"><div class="attr-fill" style="width:${Math.max(0, Math.min(100, attr.value))}%"></div></div>
      <strong>${attr.value}</strong>
    </div>
  `).join('');
}

function getSeasonYears() {
  return [...new Set((data.seasonSummary || []).map(s => Number(s.year)))].sort((a,b) => b-a);
}

function getSeasonData(year) {
  const matches = data.matches.filter(m => Number(m.date.slice(0,4)) === Number(year));
  const summary = (data.seasonSummary || []).find(s => Number(s.year) === Number(year));
  const foot = { left:0, right:0, other:0, unknown:0 };

  matches.forEach(match => {
    (match.goalEvents || []).forEach(goal => {
      const name = (goal.foot || '').trim();
      if (name === '左脚') foot.left += 1;
      else if (name === '右脚') foot.right += 1;
      else if (name === '头球' || name === '其他') foot.other += 1;
      else foot.unknown += 1;
    });
  });

  const detailedGoals = numericSum(matches.map(m => m.goals));
  const detailedAssists = numericSum(matches.map(m => m.assists));
  const officialGoals = summary ? summary.goals : detailedGoals;
  const officialAssists = summary ? summary.assists : detailedAssists;
  const mismatch = summary && (summary.detailGoals !== summary.goals || summary.detailAssists !== summary.assists);

  let note = summary ? `${summary.source}：${officialGoals} 球 ${officialAssists} 助攻。${summary.note}` :
    `${matches.length} 场已录入，逐场累计 ${detailedGoals} 球 ${detailedAssists} 助攻。`;
  if (mismatch) {
    note += ` 脚法拆分按逐场记录计算，因此脚法合计可能与年度汇总不同，待你后续核对。`;
  }
  if (foot.unknown > 0) {
    note += ` 另有 ${foot.unknown} 粒进球的脚法未明确记录。`;
  }
  note += ` 原始记录未提供开球时间/进球分钟的场次统一标为“未记录”。`;

  return {
    year:Number(year),
    status:summary?.status || (Number(year) === new Date().getFullYear() ? 'ACTIVE' : 'ARCHIVE'),
    apps:summary?.apps ?? matches.length,
    goals:officialGoals,
    assists:officialAssists,
    ga:officialGoals + officialAssists,
    note,
    foot
  };
}

function renderSeasonButtons() {
  const years = getSeasonYears();
  const wrap = $('#season-switcher');
  wrap.innerHTML = years.map((year, i) => `<button class="season-btn ${i === 0 ? 'active' : ''}" data-year="${year}">${year}</button>`).join('');
  wrap.addEventListener('click', (e) => {
    const btn = e.target.closest('.season-btn');
    if (!btn) return;
    $$('.season-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSeason(Number(btn.dataset.year));
  });
}

function renderSeason(year) {
  const season = getSeasonData(year);
  setText('#season-title', season.year);
  setText('#season-status', season.status);
  setText('#season-apps', safeText(season.apps));
  setText('#season-goals', safeText(season.goals));
  setText('#season-assists', safeText(season.assists));
  setText('#season-ga', safeText(season.ga));
  setText('#foot-left', season.foot.left);
  setText('#foot-right', season.foot.right);
  setText('#foot-other', season.foot.other);
  setText('#foot-unknown', season.foot.unknown);
  setText('#season-note', season.note);
}

function renderMatchFilters() {
  const years = [...new Set(data.matches.map(m => m.date.slice(0,4)))].sort((a,b) => Number(b)-Number(a));
  const wrap = $('#match-filters');
  const filters = ['全部', ...years];
  wrap.innerHTML = filters.map((year, i) => `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-match-year="${year}">${year}</button>`).join('');
  wrap.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-match-year]');
    if (!btn) return;
    $$('#match-filters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMatches(btn.dataset.matchYear);
  });
}

function goalEventMarkup(goal, index, location) {
  const foot = safeText(goal.foot, '未记录');
  const minuteRaw = safeText(goal.minute, '未记录');
  const minute = minuteRaw === '未记录' ? '时间未记录' : minuteRaw;
  const zone = safeText(goal.zone, '未记录');
  const type = safeText(goal.type, '未单独记录');
  const footClass = foot === '左脚' ? 'left' : foot === '右脚' ? 'right' : 'unknown';
  return `
    <div class="goal-event">
      <span class="goal-no">G${String(index+1).padStart(2,'0')}</span>
      <span class="goal-foot ${footClass}">${foot}</span>
      <span class="goal-minute">${minute}</span>
      <span class="goal-detail">${zone} · ${type}</span>
      <span class="goal-location">${safeText(location, '未单独记录')}</span>
    </div>
  `;
}

function renderMatches(filter = '全部') {
  const grid = $('#match-grid');
  const source = filter === '全部' ? data.matches : data.matches.filter(m => m.date.startsWith(String(filter)));
  if (!source.length) {
    grid.innerHTML = `<div class="empty-state">这个年份还没有比赛记录。</div>`;
    return;
  }
  const matches = [...source].sort((a,b) => new Date(b.date)-new Date(a.date));
  grid.innerHTML = matches.map(match => {
    const meta = [safeText(match.format,''), safeText(match.position,'')].filter(Boolean).join(' · ');
    const goalEvents = (match.goalEvents || []).length
      ? `<div class="goal-events"><div class="goal-events-title">进球记录 · 时间与地点按原记录</div>${match.goalEvents.map((g,i) => goalEventMarkup(g,i,match.location)).join('')}</div>`
      : '';
    return `
      <article class="match-card reveal">
        <div class="match-card-top">
          <div class="match-date-block">
            <span class="match-date">${match.date}</span>
            <span class="record-status verified">${safeText(match.status,'源数据')}</span>
          </div>
        </div>

        <div class="match-content-row">
          <div class="match-main">
            <div class="match-kicker">${meta || '足球记录'}</div>
            <h3>${safeText(match.event,'比赛')}</h3>
            <div class="match-info-grid">
              <div><span>比赛时间</span><strong>${safeText(match.time,'未记录')}</strong></div>
              <div><span>地点</span><strong>${safeText(match.location,'未单独记录')}</strong></div>
              <div><span>位置</span><strong>${safeText(match.position,'未记录')}</strong></div>
              <div><span>跑动</span><strong>${safeText(match.runDistance,'未记录')}</strong></div>
            </div>
            <p class="match-note">${safeText(match.note,'')}${match.videoUrl ? ` · <a href="${match.videoUrl}" target="_blank" rel="noreferrer"><u>查看视频</u></a>` : ''}</p>
          </div>
          <div class="match-scoreline">
            <div class="match-pill"><span>GOALS</span><strong>${safeText(match.goals,0)}</strong></div>
            <div class="match-pill"><span>ASSISTS</span><strong>${safeText(match.assists,0)}</strong></div>
          </div>
        </div>
        ${goalEvents}
      </article>
    `;
  }).join('');
  initReveal();
}

function renderVideos() {
  const grid = $('#video-grid');
  if (!data.videos.length) {
    grid.innerHTML = `<div class="empty-state">还没有视频。</div>`;
    return;
  }
  grid.innerHTML = data.videos.map(video => {
    const linked = Boolean(video.url);
    const tag = linked ? 'a' : 'article';
    const href = linked ? `href="${video.url}" target="_blank" rel="noreferrer"` : '';
    return `
      <${tag} class="video-card ${linked ? '' : 'disabled'} reveal" ${href}>
        <div class="video-cover"><div class="play">▶</div><span>${video.type}</span></div>
        <div class="video-body"><h3>${video.title}</h3><p>${video.date}${linked ? ' · 点击播放' : ' · 待添加链接'}</p></div>
      </${tag}>
    `;
  }).join('');
}

function updateHeroStats() {
  const summaries = data.seasonSummary || [];
  const careerGoals = numericSum(summaries.map(s => s.goals));
  const careerAssists = numericSum(summaries.map(s => s.assists));
  setText('#hero-work-count', data.works.length);
  setText('#hero-match-count', data.matches.length);
  setText('#hero-goals', careerGoals);
  setText('#hero-assists', careerAssists);
}

function initTheme() {
  const saved = localStorage.getItem('site-theme');
  if (saved) document.documentElement.dataset.theme = saved;
  $('#theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = current;
    localStorage.setItem('site-theme', current);
  });
}

let revealObserver;
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    $$('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold:.08 });
  }
  $$('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

function init() {
  initProfile();
  initWorkFilters();
  renderWorks();
  renderAttributes();
  renderSeasonButtons();
  renderSeason(getSeasonYears()[0]);
  renderMatchFilters();
  renderMatches();
  renderVideos();
  updateHeroStats();
  initTheme();
  initReveal();
}

init();
