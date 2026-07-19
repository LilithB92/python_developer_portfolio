function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.innerHTML = isDark
      ? '<i class="bi bi-sun-fill"></i>'
      : '<i class="bi bi-moon-fill"></i>';
  }
}

(function() {
  const saved = localStorage.getItem('theme');
  const isDark = saved ? saved === 'dark' : true;

  if (isDark) {
    document.body.classList.add('dark-theme');
  }
  updateThemeIcon(isDark);
})();
