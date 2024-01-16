function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;

  if (savedTheme) {
    body.classList.add(savedTheme);
  }
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle && savedTheme === 'dark-mode') {
    themeToggle.checked = true;
  }
});

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');

  if (themeToggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', '');
  }
}



