// Theme Toggle Script
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
}

toggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  if (html.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
