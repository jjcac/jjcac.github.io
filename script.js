// Grab the toggle button and nav links container
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

// Toggle menu open/closed
navToggle.addEventListener('click', () => {
  // Flip the “open” class
  const isOpen = navLinks.classList.toggle('open');

  // Reflect state in aria-expanded
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close menu when a link is clicked (mobile only)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});
