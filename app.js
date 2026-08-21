const data = window.SITE_DATA;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

let activeTrendMetric = 'goals';
let activeTrendYear = null;
let activeSeasonMetric = 'goals';
let currentSeasonYear = null;
let activeMatchYear = null;

function setText(selector, value) {
  const el = $(selector);
  if (el) el.textContent = value;
}

function safeText(value, fallback = '—') {
  if (value === null || value === undefined || value === '') return fallback;
  return String(value);
}

function numericSum(values) {
  return values.reduce((sum, value) => sum + Number(value || 0), 0);
}

function matchKey(match) {
  return `${match.date}|${match.event}`;
}

function matchDetailUrl(match) {
  return `match.html?key=${encodeURIComponent(matchKey(match))}`;
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
  return [...new Set(data.matches.map(m => Number(m.date.slice(0, 4))))].sort((a,b) => b-a);
}

function getMatchesForYear(year) {
  return data.matches.filter(m => Number(m.date.slice(0,4)) === Number(year));
}

function getMonthlyValues(year, metric) {
  const values = Array(12).fill(0);
  getMatchesForYear(year).forEach(match => {
    const month = Number(match.date.slice(5,7));
    if (month >= 1 && month <= 12) values[month - 1] += Number(match[metric] || 0);
  });
  return values;
}

function getDetailedAnnualValue(year, metric) {
  return numericSum(getMatchesForYear(year).map(m => m[metric]));
}

function getSummary(year) {
  return (data.seasonSummary || []).find(s => Number(s.year) === Number(year));
}

function getSeasonData(year) {
  const matches = getMatchesForYear(year);
  const summary = getSummary(year);
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

  const detailedGoals = getDetailedAnnualValue(year, 'goals');
  const detailedAssists = getDetailedAnnualValue(year, 'assists');

  const goalMatches = matches.filter(m => Number(m.goals || 0) > 0);
  const maxGoal = goalMatches.length ? Math.max(...goalMatches.map(m => Number(m.goals || 0))) : 0;
  const monthlyGoals = getMonthlyValues(year, 'goals');
  const maxMonthGoal = Math.max(0, ...monthlyGoals);
  const maxGoalMonthIndex = monthlyGoals.indexOf(maxMonthGoal);

  const assistMatches = matches.filter(m => Number(m.assists || 0) > 0);
  const maxAssist = assistMatches.length ? Math.max(...assistMatches.map(m => Number(m.assists || 0))) : 0;
  const monthlyAssists = getMonthlyValues(year, 'assists');
  const maxMonthAssist = Math.max(0, ...monthlyAssists);
  const maxAssistMonthIndex = monthlyAssists.indexOf(maxMonthAssist);

  let note = `按逐场比赛相加：${detailedGoals} 球 ${detailedAssists} 助攻。`;
  if (summary) {
    note += ` 原文年度汇总：${summary.goals} 球 ${summary.assists} 助攻。`;
    if (summary.goals !== detailedGoals || summary.assists !== detailedAssists) {
      note += ` 两者存在差异，本页交互数据统一采用逐场相加，原年度汇总仅保留作参考。`;
    }
  }
  if (foot.unknown > 0) note += ` 另有 ${foot.unknown} 粒进球脚法未明确记录。`;

  return {
    year:Number(year),
    status:summary?.status || (Number(year) === new Date().getFullYear() ? 'ACTIVE' : 'ARCHIVE'),
    apps:matches.length,
    goals:detailedGoals,
    assists:detailedAssists,
    ga:detailedGoals + detailedAssists,
    note,
    foot,
    goalProfile: {
      total:detailedGoals,
      matches:goalMatches.length,
      max:maxGoal,
      bestMonth:maxMonthGoal > 0 ? `${maxGoalMonthIndex + 1}月 · ${maxMonthGoal}` : '—',
      monthly:monthlyGoals
    },
    assistProfile: {
      total:detailedAssists,
      matches:assistMatches.length,
      max:maxAssist,
      bestMonth:maxMonthAssist > 0 ? `${maxAssistMonthIndex + 1}月 · ${maxMonthAssist}` : '—',
      monthly:monthlyAssists
    }
  };
}

function renderSeasonButtons() {
  const years = getSeasonYears();
  currentSeasonYear = years[0];
  const wrap = $('#season-switcher');
  wrap.innerHTML = years.map((year, i) => `<button class="season-btn ${i === 0 ? 'active' : ''}" data-year="${year}">${year}</button>`).join('');
  wrap.addEventListener('click', (e) => {
    const btn = e.target.closest('.season-btn');
    if (!btn) return;
    $$('.season-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSeasonYear = Number(btn.dataset.year);
    renderSeason(currentSeasonYear);
    activeTrendYear = currentSeasonYear;
    activeMatchYear = currentSeasonYear;
    renderTrendCharts();
    renderMatchFilters();
    renderMatches(activeMatchYear);
  });
}

function renderSeasonMetricDetail(season) {
  const stats = $('#season-detail-stats');
  const mini = $('#season-metric-monthly');
  const goalBtn = $('#season-goals-button');
  const assistBtn = $('#season-assists-button');

  [goalBtn, assistBtn].forEach(btn => {
    const active = btn.dataset.seasonMetric === activeSeasonMetric;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  const isGoals = activeSeasonMetric === 'goals';
  const profile = isGoals ? season.goalProfile : season.assistProfile;
  const label = isGoals ? '进球' : '助攻';

  setText('#season-detail-kicker', isGoals ? 'GOAL PROFILE' : 'ASSIST PROFILE');
  setText('#season-detail-title', isGoals ? '进球表现' : '助攻表现');
  stats.hidden = false;
  stats.innerHTML = `
    <div><span>赛季${label}</span><strong>${profile.total}</strong></div>
    <div><span>有${label}场次</span><strong>${profile.matches}</strong></div>
    <div><span>单场最高</span><strong>${profile.max}</strong></div>
    <div><span>最多月份</span><strong class="text-stat">${profile.bestMonth}</strong></div>
  `;

  mini.hidden = false;
  const maxValue = Math.max(1, ...profile.monthly);
  mini.innerHTML = `
    <div class="assist-mini-title">${season.year} 月度${label}</div>
    <div class="assist-mini-bars">
      ${profile.monthly.map((value, i) => `
        <div class="assist-mini-item" title="${i + 1}月：${value} ${label}">
          <span class="assist-mini-value">${value}</span>
          <div class="assist-mini-track"><i style="height:${value === 0 ? 2 : Math.max(8, value / maxValue * 100)}%"></i></div>
          <small>${i + 1}月</small>
        </div>
      `).join('')}
    </div>
  `;

  if (isGoals) {
    mini.innerHTML += `
      <div class="goal-foot-breakdown" aria-label="进球脚法分布">
        <span>脚法：</span>
        <strong>左脚 ${season.foot.left}</strong>
        <strong>右脚 ${season.foot.right}</strong>
        <strong>头球/其他 ${season.foot.other}</strong>
        <strong>待补录 ${season.foot.unknown}</strong>
      </div>
    `;
  }
}

function initSeasonMetricToggle() {
  $('.season-stats').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-season-metric]');
    if (!btn) return;
    activeSeasonMetric = btn.dataset.seasonMetric;
    activeTrendMetric = activeSeasonMetric;
    renderSeason(currentSeasonYear);
    renderTrendCharts();
  });
}

function renderSeason(year) {
  currentSeasonYear = Number(year);
  const season = getSeasonData(year);
  setText('#season-title', season.year);
  setText('#season-status', season.status);
  setText('#season-apps', season.apps);
  setText('#season-goals', season.goals);
  setText('#season-assists', season.assists);
  setText('#season-ga', season.ga);
  renderSeasonMetricDetail(season);
  setText('#season-note', season.note);
}

function renderTrendYearSwitcher() {
  const years = getSeasonYears();
  if (!activeTrendYear) activeTrendYear = years[0];
  $('#trend-year-switcher').innerHTML = years.map(year => `<button class="trend-year-btn ${Number(year) === Number(activeTrendYear) ? 'active' : ''}" data-trend-year="${year}" type="button">${year}</button>`).join('');
}

function renderTrendCharts() {
  const yearsDesc = getSeasonYears();
  const years = [...yearsDesc].reverse();
  if (!activeTrendYear) activeTrendYear = yearsDesc[0];
  const isGoals = activeTrendMetric === 'goals';
  const label = isGoals ? '进球' : '助攻';
  const unit = isGoals ? 'GOALS' : 'ASSISTS';

  const annualValues = years.map(year => getDetailedAnnualValue(year, activeTrendMetric));
  const annualMax = Math.max(1, ...annualValues);
  $('#yearly-chart').innerHTML = years.map((year, i) => {
    const value = annualValues[i];
    const active = Number(year) === Number(activeTrendYear);
    return `
      <button class="year-bar-item ${active ? 'active' : ''}" data-chart-year="${year}" type="button" aria-label="${year} 年逐场合计 ${value} ${label}">
        <strong>${value}</strong>
        <div class="year-bar-track"><i style="height:${Math.max(5, value / annualMax * 100)}%"></i></div>
        <span>${year}</span>
      </button>
    `;
  }).join('');

  setText('#yearly-chart-unit', `${unit} · MATCH SUM`);
  setText('#monthly-chart-kicker', `MONTHLY ${unit}`);
  setText('#monthly-chart-title', `${activeTrendYear} 月度${label}`);

  const monthly = getMonthlyValues(activeTrendYear, activeTrendMetric);
  const monthlyMax = Math.max(1, ...monthly);
  $('#monthly-chart').innerHTML = monthly.map((value, i) => `
    <div class="month-bar-item" title="${activeTrendYear} 年 ${i + 1} 月：${value} ${label}">
      <strong>${value}</strong>
      <div class="month-bar-track"><i style="height:${value === 0 ? 2 : Math.max(6, value / monthlyMax * 100)}%"></i></div>
      <span>${i + 1}月</span>
    </div>
  `).join('');

  renderTrendYearSwitcher();

  const monthlyTotal = numericSum(monthly);
  const summary = getSummary(activeTrendYear);
  let note = `${activeTrendYear} 年逐场比赛相加：${monthlyTotal} ${label}。`;
  if (summary) {
    const official = Number(summary[activeTrendMetric] || 0);
    note += ` 原文年度汇总：${official} ${label}。`;
    if (monthlyTotal !== official) note += ` 图表统一采用逐场相加。`;
  }
  setText('#trend-note', note);

  $$('#trend-metric-toggle .metric-toggle-btn').forEach(btn => {
    const active = btn.dataset.trendMetric === activeTrendMetric;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

function initTrendCharts() {
  activeTrendYear = getSeasonYears()[0];
  $('#trend-metric-toggle').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-trend-metric]');
    if (!btn) return;
    activeTrendMetric = btn.dataset.trendMetric;
    activeSeasonMetric = activeTrendMetric;
    renderTrendCharts();
    renderSeason(currentSeasonYear);
  });
  $('#yearly-chart').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-chart-year]');
    if (!btn) return;
    activeTrendYear = Number(btn.dataset.chartYear);
    renderTrendCharts();
  });
  $('#trend-year-switcher').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-trend-year]');
    if (!btn) return;
    activeTrendYear = Number(btn.dataset.trendYear);
    renderTrendCharts();
  });
  renderTrendCharts();
}

function renderMatchFilters() {
  const years = getSeasonYears();
  if (!activeMatchYear || !years.includes(Number(activeMatchYear))) activeMatchYear = years[0];
  const wrap = $('#match-filters');
  wrap.innerHTML = years.map(year => `<button class="filter-btn ${Number(year) === Number(activeMatchYear) ? 'active' : ''}" data-match-year="${year}">${year}</button>`).join('');
}

function initMatchFilters() {
  const wrap = $('#match-filters');
  wrap.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-match-year]');
    if (!btn) return;
    activeMatchYear = Number(btn.dataset.matchYear);
    $$('#match-filters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMatches(activeMatchYear);
  });
}

function groupMatchesByMonth(matches) {
  const groups = new Map();
  matches.forEach(match => {
    const month = Number(match.date.slice(5,7));
    if (!groups.has(month)) groups.set(month, []);
    groups.get(month).push(match);
  });
  return [...groups.entries()].sort((a,b) => b[0] - a[0]);
}

function renderMatches(year) {
  const grid = $('#match-grid');
  const source = getMatchesForYear(year).sort((a,b) => new Date(b.date) - new Date(a.date));
  if (!source.length) {
    grid.innerHTML = `<div class="empty-state">这个年份还没有比赛记录。</div>`;
    return;
  }

  const yearGoals = numericSum(source.map(m => m.goals));
  const yearAssists = numericSum(source.map(m => m.assists));
  setText('#match-summary-note', `${year} · ${source.length} 场 · 逐场相加 ${yearGoals} 球 ${yearAssists} 助攻`);

  const groups = groupMatchesByMonth(source);
  grid.innerHTML = groups.map(([month, matches], groupIndex) => {
    const goals = numericSum(matches.map(m => m.goals));
    const assists = numericSum(matches.map(m => m.assists));
    return `
      <details class="month-group reveal" ${groupIndex === 0 ? 'open' : ''}>
        <summary class="month-summary">
          <div class="month-name"><strong>${month}月</strong><span>${matches.length} 场</span></div>
          <div class="month-totals">
            <span><small>GOALS</small><strong>${goals}</strong></span>
            <span><small>ASSISTS</small><strong>${assists}</strong></span>
          </div>
          <span class="month-chevron" aria-hidden="true">⌄</span>
        </summary>
        <div class="month-match-list">
          ${matches.map(match => `
            <a class="match-summary-row" href="${matchDetailUrl(match)}" aria-label="查看 ${match.date} 比赛详情">
              <div class="match-summary-date"><small>DATE</small><strong>${match.date}</strong></div>
              <div class="match-summary-location"><small>LOCATION</small><strong>${safeText(match.location, '未单独记录')}</strong></div>
              <div class="match-summary-score"><span><small>G</small><strong>${Number(match.goals || 0)}</strong></span><span><small>A</small><strong>${Number(match.assists || 0)}</strong></span></div>
              <span class="match-detail-cta">查看详情 →</span>
            </a>
          `).join('')}
        </div>
      </details>
    `;
  }).join('');
  initReveal();
}

function renderVideos() {
  const grid = $('#video-grid');
  if (!data.videos.length) {
    grid.innerHTML = `<div class="empty-state">还没有视频。以后只要在 data.js 的 videos 中写入日期、时间和链接，对应比赛二级页面会自动匹配。</div>`;
    return;
  }
  grid.innerHTML = data.videos.map(video => {
    const linked = Boolean(video.url);
    const tag = linked ? 'a' : 'article';
    const href = linked ? `href="${video.url}" target="_blank" rel="noreferrer"` : '';
    return `
      <${tag} class="video-card ${linked ? '' : 'disabled'} reveal" ${href}>
        <div class="video-cover"><div class="play">▶</div><span>${safeText(video.type, 'MATCH VIDEO')}</span></div>
        <div class="video-body"><h3>${safeText(video.title, '比赛视频')}</h3><p>${safeText(video.date, '未记录')} ${video.time ? `· ${video.time}` : ''}${linked ? ' · 点击播放' : ' · 待添加链接'}</p></div>
      </${tag}>
    `;
  }).join('');
}

function updateHeroStats() {
  const years = getSeasonYears();
  const careerGoals = numericSum(years.map(year => getDetailedAnnualValue(year, 'goals')));
  const careerAssists = numericSum(years.map(year => getDetailedAnnualValue(year, 'assists')));
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
  initSeasonMetricToggle();
  renderSeason(getSeasonYears()[0]);
  initTrendCharts();
  activeMatchYear = getSeasonYears()[0];
  renderMatchFilters();
  initMatchFilters();
  renderMatches(activeMatchYear);
  renderVideos();
  updateHeroStats();
  initTheme();
  initReveal();
}

init();
