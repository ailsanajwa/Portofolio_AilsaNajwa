document.getElementById('year').textContent = new Date().getFullYear();

// simulate a polished loader: animate progress then hide
document.addEventListener('DOMContentLoaded', () => {
  const loaderScreen = document.getElementById('loaderScreen');
  const loaderFill = document.getElementById('loaderFill');
  if (loaderScreen && loaderFill) {
    // start small then animate to full
    loaderFill.style.width = '8%';
    setTimeout(() => {
      loaderFill.style.width = '100%';
    }, 80);

    // remove loader after animation completes
    setTimeout(() => {
      document.body.classList.remove('loading');
      loaderScreen.classList.add('is-hidden');
      setTimeout(() => loaderScreen.remove(), 700);
    }, 1700);
  }
});

const revealElements = document.querySelectorAll('[data-reveal]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: '0px 0px -60px 0px',
  }
);

revealElements.forEach((element) => observer.observe(element));
