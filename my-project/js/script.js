// Theme Toggle
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

toggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Keep theme persistent on reload
if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
}

tailwind.config = { darkMode: 'class' }
