const data = window.SITE_DATA;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function setText(selector, value) {
  const el = $(selector);
  if (el) el.textContent = value;
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

  grid.innerHTML = works.map((work, index) => `
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

  requestAnimationFrame(() => {
    $$('#work-grid .work-card').forEach((el, i) => {
      el.style.animation = `fadeUp .45s ease ${i * 45}ms both`;
    });
  });
}

function initWorkFilters() {
  const categories = ['全部', ...new Set(data.works.map(w => w.category))];
  const wrap = $('#work-filters');
  wrap.innerHTML = categories.map((category, i) => `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${category}">${category}</button>`).join('');
  wrap.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    $$('.filter-btn').forEach(b => b.classList.remove('active'));
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

function renderSeasonButtons() {
  const wrap = $('#season-switcher');
  wrap.innerHTML = data.seasons.map((season, i) => `<button class="season-btn ${i === 0 ? 'active' : ''}" data-year="${season.year}">${season.year}</button>`).join('');
  wrap.addEventListener('click', (e) => {
    const btn = e.target.closest('.season-btn');
    if (!btn) return;
    $$('.season-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSeason(Number(btn.dataset.year));
  });
}

function renderSeason(year) {
  const season = data.seasons.find(s => s.year === year) || data.seasons[0];
  setText('#season-title', season.year);
  setText('#season-status', season.status);
  setText('#season-apps', season.apps);
  setText('#season-goals', season.goals);
  setText('#season-assists', season.assists);
  setText('#season-ga', season.goals + season.assists);
  setText('#season-note', season.note);
}

function renderMatches() {
  const grid = $('#match-grid');
  if (!data.matches.length) {
    grid.innerHTML = `<div class="empty-state">还没有比赛记录。</div>`;
    return;
  }

  const matches = [...data.matches].sort((a,b) => new Date(b.date) - new Date(a.date));
  grid.innerHTML = matches.map(match => `
    <article class="match-card reveal">
      <div class="match-date">${match.date}</div>
      <div class="match-main">
        <h3>${match.title} · ${match.position}</h3>
        <p>${match.note}${match.videoUrl ? ` · <a href="${match.videoUrl}" target="_blank" rel="noreferrer"><u>查看视频</u></a>` : ''}</p>
      </div>
      <div class="match-scoreline">
        <div class="match-pill"><span>GOALS</span><strong>${match.goals}</strong></div>
        <div class="match-pill"><span>ASSISTS</span><strong>${match.assists}</strong></div>
      </div>
    </article>
  `).join('');
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
        <div class="video-cover">
          <div class="play">▶</div>
          <span>${video.type}</span>
        </div>
        <div class="video-body">
          <h3>${video.title}</h3>
          <p>${video.date}${linked ? ' · 点击播放' : ' · 待添加链接'}</p>
        </div>
      </${tag}>
    `;
  }).join('');
}

function updateHeroStats() {
  const goals = data.matches.reduce((sum, m) => sum + Number(m.goals || 0), 0);
  const assists = data.matches.reduce((sum, m) => sum + Number(m.assists || 0), 0);
  setText('#hero-work-count', data.works.length);
  setText('#hero-match-count', data.matches.length);
  setText('#hero-goals', goals);
  setText('#hero-assists', assists);
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

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08 });
  $$('.reveal').forEach(el => observer.observe(el));
}

function init() {
  initProfile();
  initWorkFilters();
  renderWorks();
  renderAttributes();
  renderSeasonButtons();
  renderSeason(data.seasons[0].year);
  renderMatches();
  renderVideos();
  updateHeroStats();
  initTheme();
  initReveal();
}

init();
