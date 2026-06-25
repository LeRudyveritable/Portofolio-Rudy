const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projectCards.forEach(card => {
      const categories = (card.dataset.category || '').split(/\s+/);
      card.classList.toggle('is-hidden', filter !== 'all' && !categories.includes(filter));
    });
  });
});
const docButtons = document.querySelectorAll('.doc-filter');
const docCards = document.querySelectorAll('.doc-card');
docButtons.forEach(button => {
  button.addEventListener('click', () => {
    docButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.docFilter;
    docCards.forEach(card => {
      const categories = (card.dataset.docCategory || '').split(/\s+/);
      card.classList.toggle('is-hidden', filter !== 'all' && !categories.includes(filter));
    });
  });
});
