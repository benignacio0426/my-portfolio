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

// AOS Animation Initialization
AOS.init({
  duration: 1000, // Animation speed in ms
  once: true // Run animations only per element
});
