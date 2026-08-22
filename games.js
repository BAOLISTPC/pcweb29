const data = window.SITE_DATA;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let activeGameSection = (data.games?.sections || [])[0]?.id || 'cs';

function initTheme() {
  const saved = localStorage.getItem('site-theme');
  if (saved) document.documentElement.dataset.theme = saved;
  $('#theme-toggle')?.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = current;
    localStorage.setItem('site-theme', current);
  });
}

function renderTabs() {
  const sections = data.games?.sections || [];
  $('#game-tabs').innerHTML = sections.map((section, index) => `
    <button type="button" class="game-tab ${index === 0 ? 'active' : ''}" data-game-section="${section.id}">${section.title}</button>
  `).join('');
  $('#game-tabs').addEventListener('click', (event) => {
    const button = event.target.closest('[data-game-section]');
    if (!button) return;
    activeGameSection = button.dataset.gameSection;
    $$('.game-tab').forEach(item => item.classList.toggle('active', item === button));
    renderGameSection();
  });
}

function renderGameSection() {
  const section = (data.games?.sections || []).find(item => item.id === activeGameSection);
  const items = (data.games?.items || []).filter(item => item.section === activeGameSection);
  $('#game-section-intro').innerHTML = section ? `<span>${section.subtitle || ''}</span><h2>${section.title}</h2><p>${section.description || ''}</p>` : '';
  const grid = $('#game-grid');
  if (!items.length) {
    grid.innerHTML = `
      <article class="game-placeholder-card"><span>SCREENSHOTS</span><h3>游戏截图</h3><p>之后把截图路径写到 data.js 即可。</p></article>
      <article class="game-placeholder-card"><span>ACHIEVEMENTS</span><h3>成就 / 通关记录</h3><p>可以记录段位、奖杯、全成就或个人里程碑。</p></article>
      <article class="game-placeholder-card"><span>VIDEOS</span><h3>精彩视频</h3><p>支持 Bilibili / YouTube 等外链。</p></article>`;
    return;
  }
  grid.innerHTML = items.map(item => {
    const media = item.image ? `<img src="${item.image}" alt="${item.title || ''}" />` : `<div class="game-card-placeholder">${item.type || 'GAME'}</div>`;
    const open = item.videoUrl || item.url;
    const tag = open ? 'a' : 'article';
    const attrs = open ? `href="${open}" target="_blank" rel="noreferrer"` : '';
    return `<${tag} class="game-media-card" ${attrs}>${media}<div class="game-media-copy"><span>${item.section?.toUpperCase() || ''} · ${item.type || '记录'}</span><h3>${item.title || '未命名记录'}</h3><p>${item.note || item.achievement || ''}</p></div></${tag}>`;
  }).join('');
}

function init() {
  $('#year').textContent = new Date().getFullYear();
  initTheme();
  renderTabs();
  renderGameSection();
}
init();