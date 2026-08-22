const data = window.SITE_DATA;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const params = new URLSearchParams(location.search);
const sections = data.games?.sections || [];
const categories = data.games?.categories || [];
let activeGameSection = params.get('section') || sections[0]?.id || 'cs';
if (!sections.some(item => item.id === activeGameSection)) activeGameSection = sections[0]?.id || 'cs';

function firstCategory(sectionId) {
  return categories.find(item => item.section === sectionId)?.id || '';
}

let activeGameCategory = params.get('category') || firstCategory(activeGameSection);
if (!categories.some(item => item.section === activeGameSection && item.id === activeGameCategory)) {
  activeGameCategory = firstCategory(activeGameSection);
}

function initTheme() {
  const saved = localStorage.getItem('site-theme');
  if (saved) document.documentElement.dataset.theme = saved;
  $('#theme-toggle')?.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = current;
    localStorage.setItem('site-theme', current);
  });
}

function syncUrl() {
  const url = new URL(location.href);
  url.searchParams.set('section', activeGameSection);
  if (activeGameCategory) url.searchParams.set('category', activeGameCategory);
  else url.searchParams.delete('category');
  history.replaceState({}, '', url);
}

function renderTabs() {
  $('#game-tabs').innerHTML = sections.map(section => `
    <button type="button" class="game-tab ${section.id === activeGameSection ? 'active' : ''}" data-game-section="${section.id}">${section.title}</button>
  `).join('');

  $('#game-tabs').addEventListener('click', (event) => {
    const button = event.target.closest('[data-game-section]');
    if (!button) return;
    activeGameSection = button.dataset.gameSection;
    activeGameCategory = firstCategory(activeGameSection);
    $$('.game-tab').forEach(item => item.classList.toggle('active', item === button));
    syncUrl();
    renderGameSection();
  });
}

function renderSubtabs() {
  const list = categories.filter(item => item.section === activeGameSection);
  const root = $('#game-subtabs');
  const intro = $('#game-category-intro');
  if (!root || !intro) return;

  if (!list.length) {
    root.innerHTML = '';
    intro.innerHTML = '';
    return;
  }

  root.innerHTML = list.map(category => `
    <a class="game-subtab ${category.id === activeGameCategory ? 'active' : ''}" href="games.html?section=${encodeURIComponent(activeGameSection)}&category=${encodeURIComponent(category.id)}" data-game-category="${category.id}">
      <span>${category.subtitle || ''}</span><strong>${category.title}</strong>
    </a>
  `).join('');

  root.onclick = (event) => {
    const link = event.target.closest('[data-game-category]');
    if (!link) return;
    event.preventDefault();
    activeGameCategory = link.dataset.gameCategory;
    syncUrl();
    renderGameSection();
  };

  const current = list.find(item => item.id === activeGameCategory) || list[0];
  intro.innerHTML = current ? `<span>${current.subtitle || 'VIDEO CATEGORY'}</span><p>${current.description || ''}</p>` : '';
}

function renderGameSection() {
  const section = sections.find(item => item.id === activeGameSection);
  const sectionCategories = categories.filter(item => item.section === activeGameSection);
  if (sectionCategories.length && !sectionCategories.some(item => item.id === activeGameCategory)) {
    activeGameCategory = sectionCategories[0].id;
  }

  const allItems = (data.games?.items || []).filter(item => item.section === activeGameSection);
  const items = sectionCategories.length
    ? allItems.filter(item => item.category === activeGameCategory)
    : allItems;

  $('#game-section-intro').innerHTML = section
    ? `<span>${section.subtitle || ''}</span><h2>${section.title}</h2><p>${section.description || ''}</p>`
    : '';

  renderSubtabs();

  const grid = $('#game-grid');
  if (!items.length) {
    if (sectionCategories.length) {
      const category = sectionCategories.find(item => item.id === activeGameCategory);
      grid.innerHTML = `<article class="game-placeholder-card"><span>${category?.title || 'CATEGORY'}</span><h3>这里还没有视频</h3><p>这个分类已经建好，之后继续把视频或截图加入 data.js 即可。</p></article>`;
    } else {
      grid.innerHTML = `
        <article class="game-placeholder-card"><span>SCREENSHOTS</span><h3>游戏截图</h3><p>之后把截图路径写到 data.js 即可。</p></article>
        <article class="game-placeholder-card"><span>ACHIEVEMENTS</span><h3>成就 / 通关记录</h3><p>可以记录段位、奖杯、全成就或个人里程碑。</p></article>
        <article class="game-placeholder-card"><span>VIDEOS</span><h3>精彩视频</h3><p>支持 Bilibili / YouTube 等外链。</p></article>`;
    }
    return;
  }

  grid.innerHTML = items.map(item => {
    const open = item.videoUrl || item.url;
    const tag = open ? 'a' : 'article';
    const attrs = open ? `href="${open}" target="_blank" rel="noreferrer"` : '';
    const media = item.image
      ? `<img src="${item.image}" alt="${item.title || ''}" />`
      : `<div class="game-card-placeholder"><span class="game-play">▶</span><span>${item.type || 'GAME VIDEO'}</span></div>`;
    return `<${tag} class="game-media-card" ${attrs}>${media}<div class="game-media-copy"><span>${item.section?.toUpperCase() || ''} · ${item.type || '记录'}</span><h3>${item.title || '未命名记录'}</h3><p>${item.note || item.achievement || ''}${open ? ' · 点击播放 ↗' : ''}</p></div></${tag}>`;
  }).join('');
}

function init() {
  $('#year').textContent = new Date().getFullYear();
  initTheme();
  renderTabs();
  syncUrl();
  renderGameSection();
}

init();
