// Mobile menu toggle + header shadow on scroll
const burger = document.getElementById('hamburger');
const links = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!expanded));
  burger.classList.toggle('active');
  links.classList.toggle('open');
});

// Close menu when clicking a link (mobile)
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('active');
    links.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});
