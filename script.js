// script.js

// Grab the toggle button and nav links container
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

// 1. Toggle menu open/closed
navToggle.addEventListener('click', () => {
  // flip the “open” class
  const isOpen = navLinks.classList.toggle('open');

  // reflect state in aria-expanded
  navToggle.setAttribute('aria-expanded', isOpen);
});

// 2. Close menu when a link is clicked (mobile only)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});
