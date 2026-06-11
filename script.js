// ========================
// HAMBURGER MENU TOGGLE
// ========================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

// Close menu when a mobile link is clicked
const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});

// ========================
// NAVBAR SCROLL EFFECT
// ========================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(8,11,18,0.98)';
  } else {
    navbar.style.background = 'rgba(8,11,18,0.85)';
  }
});

// ========================
// SMOOTH SCROLL FOR ANCHORS
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========================
// CONTACT FORM SUBMIT
// ========================
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button');
  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#00d48a';
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
    form.reset();
  }, 3000);
});