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

//Toast Notification After Form Submit
const form = document.querySelector('form');
if (form) {
  const toast = document.elementFromPoint('div');
  toast.className =
    'fixed bottom-8 right-8 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hidden z-50';
  toast.innerText = '✅ Message Sent Successfully!';
  document.body.appendChild(toast);


  form.addEventListener('submit', (e) =>{
    setTimeout(() => {
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 3000);
    }, 500);
  });
}
