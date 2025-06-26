// Theme Toggle Script
const themetoggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  htmlElement.classList.add('dark');
} else {
  htmlElement.classList.remove('dark');
}

// Toggle theme on button click
themetoggletoggle.addEventListener('click', () => {
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
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

//Preloader
window.addEventListener("load", function() {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  preloader.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 500);
});

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
