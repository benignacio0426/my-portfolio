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
  const toast = document.createElement('div');
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

// Get the button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show button when scrolling down 300px
window.onscroll = function() {
  if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
};

// Scroll to top when button is clicked
backToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
