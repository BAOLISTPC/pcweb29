const data = window.SITE_DATA;
const root = document.querySelector('#detail-root');
const $ = (selector) => document.querySelector(selector);

function safeText(value, fallback = '未记录') {
  if (value === null || value === undefined || value === '') return fallback;
  return String(value);
}

function matchKey(match) {
  return `${match.date}|${match.event}`;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function parseClock(text) {
  const m = String(text || '').match(/(\d{1,2}):(\d{2})/);
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (h > 23 || min > 59) return null;
  return h * 60 + min;
}

function parseTimeRange(text) {
  const raw = String(text || '').trim();
  if (!raw || raw.includes('未记录')) return null;
  const times = [...raw.matchAll(/(\d{1,2}):(\d{2})/g)].map(m => Number(m[1]) * 60 + Number(m[2]));
  if (!times.length) return null;
  if (times.length === 1) return { start:times[0], end:times[0] };
  return { start:times[0], end:times[1] };
}

function rangesOverlap(a, b) {
  if (!a || !b) return true;
  return Math.max(a.start, b.start) <= Math.min(a.end, b.end);
}

function findMatchingVideos(match) {
  const videos = data.videos || [];
  const key = matchKey(match);
  const matchRange = parseTimeRange(match.time);
  return videos.filter(video => {
    if (video.matchKey && video.matchKey === key) return true;
    if (!video.date || video.date !== match.date) return false;
    const videoRange = parseTimeRange(video.time);
    if (!matchRange || !videoRange) return true;
    return rangesOverlap(matchRange, videoRange);
  });
}

function goalCard(goal, index, key) {
  const foot = safeText(goal.foot);
  const minute = safeText(goal.minute);
  const zone = safeText(goal.zone);
  const type = safeText(goal.type, '未单独记录');
  return `
    <article class="goal-detail-card" id="goal-${index + 1}">
      <div class="goal-id">G${String(index + 1).padStart(2, '0')}</div>
      <span class="foot-chip">${escapeHtml(foot)}</span>
      <div class="detail-field"><span>进球时间</span><strong>${escapeHtml(minute)}</strong></div>
      <div class="detail-field"><span>区域 / 方式</span><strong>${escapeHtml(zone)} · ${escapeHtml(type)}</strong></div>
      <a class="goal-anchor" href="match.html?key=${encodeURIComponent(key)}&goal=${index + 1}">定位此球 #</a>
    </article>
  `;
}

function assistCards(match) {
  const count = Number(match.assists || 0);
  if (!count) return `<div class="detail-empty">这场比赛没有记录助攻。</div>`;
  return Array.from({ length:count }, (_, index) => `
    <article class="assist-detail-card">
      <strong>A${String(index + 1).padStart(2, '0')}</strong>
      <span>原始数据记录了本场助攻数量，但没有逐次记录助攻发生时间、脚法或方式；后续可继续补充。</span>
    </article>
  `).join('');
}

function videoCards(videos) {
  if (!videos.length) {
    return `<div class="detail-empty">暂未匹配到这场比赛的视频。以后在 <code>data.js</code> 的 <code>videos</code> 中填写同一天的日期与比赛时间，二级页面会自动按“日期 + 时间重合”匹配；也可以填写 <code>matchKey</code> 精确指定。</div>`;
  }
  return videos.map(video => `
    <a class="detail-video-card" href="${escapeHtml(video.url || '#')}" ${video.url ? 'target="_blank" rel="noreferrer"' : ''}>
      <span class="detail-video-icon">▶</span>
      <div>
        <h3>${escapeHtml(safeText(video.title, '比赛视频'))}</h3>
        <p>${escapeHtml(video.date)}${video.time ? ` · ${escapeHtml(video.time)}` : ''}${video.type ? ` · ${escapeHtml(video.type)}` : ''}</p>
      </div>
      <span class="watch">${video.url ? '播放 ↗' : '待链接'}</span>
    </a>
  `).join('');
}

function render(match) {
  const key = matchKey(match);
  const goals = Number(match.goals || 0);
  const assists = Number(match.assists || 0);
  const goalEvents = match.goalEvents || [];
  const videos = findMatchingVideos(match);

  document.title = `${match.date} ${match.event} — 暴力中锋`;

  root.innerHTML = `
    <section class="detail-hero">
      <div>
        <div class="detail-eyebrow">MATCH DETAIL / SECOND LEVEL</div>
        <h1>${escapeHtml(match.event)}</h1>
        <p class="detail-subtitle">${escapeHtml(match.date)} · ${escapeHtml(safeText(match.location, '未单独记录'))}</p>
      </div>
      <div class="detail-score" aria-label="本场进球助攻">
        <div><span>GOALS</span><strong>${goals}</strong></div>
        <div><span>ASSISTS</span><strong>${assists}</strong></div>
      </div>
    </section>

    <section class="detail-grid" aria-label="比赛信息">
      <div class="detail-meta-card"><span>DATE</span><strong>${escapeHtml(match.date)}</strong></div>
      <div class="detail-meta-card"><span>TIME</span><strong>${escapeHtml(safeText(match.time))}</strong></div>
      <div class="detail-meta-card"><span>LOCATION</span><strong>${escapeHtml(safeText(match.location, '未单独记录'))}</strong></div>
      <div class="detail-meta-card"><span>FORMAT</span><strong>${escapeHtml(safeText(match.format))}</strong></div>
      <div class="detail-meta-card"><span>POSITION</span><strong>${escapeHtml(safeText(match.position))}</strong></div>
      <div class="detail-meta-card"><span>RUNNING</span><strong>${escapeHtml(safeText(match.runDistance))}</strong></div>
      <div class="detail-meta-card"><span>STATUS</span><strong>${escapeHtml(safeText(match.status, '源数据'))}</strong></div>
      <div class="detail-meta-card"><span>VIDEO MATCH</span><strong>${videos.length ? `${videos.length} 条` : '暂无'}</strong></div>
    </section>

    <section class="detail-section">
      <div class="detail-section-head"><div><div class="detail-eyebrow">SOURCE NOTE</div><h2>比赛记录</h2></div></div>
      <div class="detail-note">${escapeHtml(safeText(match.note, match.raw || '暂无备注'))}</div>
    </section>

    <section class="detail-section">
      <div class="detail-section-head">
        <div><div class="detail-eyebrow">GOAL LOG</div><h2>进球明细</h2></div>
        <p>${goals} 粒进球</p>
      </div>
      <div class="goal-detail-list">
        ${goalEvents.length ? goalEvents.map((goal, index) => goalCard(goal, index, key)).join('') : `<div class="detail-empty">这场比赛没有进球，或进球明细尚未录入。</div>`}
      </div>
    </section>

    <section class="detail-section">
      <div class="detail-section-head">
        <div><div class="detail-eyebrow">ASSIST LOG</div><h2>助攻明细</h2></div>
        <p>${assists} 次助攻</p>
      </div>
      <div class="assist-detail-list">${assistCards(match)}</div>
    </section>

    <section class="detail-section">
      <div class="detail-section-head">
        <div><div class="detail-eyebrow">MATCH VIDEO</div><h2>对应比赛视频</h2></div>
        <p>按日期 + 比赛时间自动匹配</p>
      </div>
      <div class="detail-video-list">${videoCards(videos)}</div>
    </section>
  `;

  const params = new URLSearchParams(location.search);
  const goal = Number(params.get('goal'));
  if (goal > 0) {
    requestAnimationFrame(() => {
      const target = document.querySelector(`#goal-${goal}`);
      if (target) target.scrollIntoView({ behavior:'smooth', block:'center' });
    });
  }
}

function initTheme() {
  const saved = localStorage.getItem('site-theme');
  if (saved) document.documentElement.dataset.theme = saved;
  $('#detail-theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = current;
    localStorage.setItem('site-theme', current);
  });
}

function init() {
  initTheme();
  const params = new URLSearchParams(location.search);
  const key = params.get('key');
  const match = (data.matches || []).find(item => matchKey(item) === key);
  if (!match) {
    root.innerHTML = `<div class="detail-empty">没有找到这场比赛。请从比赛记录一级页面重新进入。</div>`;
    return;
  }
  render(match);
}

init();
