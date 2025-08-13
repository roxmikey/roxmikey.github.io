// Mobile nav & year stamp
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const year = document.getElementById('year');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  }
  if (year) year.textContent = new Date().getFullYear();
});
