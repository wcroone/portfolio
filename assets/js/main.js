const key = 'portfolio-theme';
const root = document.documentElement;
const saved = localStorage.getItem(key);
if (saved) root.setAttribute('data-theme', saved);

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const themeBtn = document.getElementById('themeBtn');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const cur = root.getAttribute('data-theme');
    const next = cur === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem(key, next);
  });
}
