// Go Baby Go at BU: small enhancements only. The site works without JavaScript.

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Photo gallery arrows
const gallery = document.getElementById('gallery');
document.querySelectorAll('.gallery-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const dir = btn.classList.contains('gallery-btn--next') ? 1 : -1;
    gallery.scrollBy({ left: dir * 340, behavior: 'smooth' });
  });
});
