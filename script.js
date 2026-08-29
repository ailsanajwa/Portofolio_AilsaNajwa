/**
 * Ailsa Najwa Insyira Putri — Portfolio JavaScript
 * Handles Loading Screen, Smooth Reveal, Mobile Drawer, Project Filtering, and Modal Logic
 */

// Set Current Year in Footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// 1. Initial Loading Screen Animation
document.addEventListener('DOMContentLoaded', () => {
  const loaderScreen = document.getElementById('loaderScreen');
  const loaderFill = document.getElementById('loaderFill');

  if (loaderScreen && loaderFill) {
    loaderFill.style.width = '12%';
    setTimeout(() => {
      loaderFill.style.width = '100%';
    }, 100);

    setTimeout(() => {
      document.body.classList.remove('loading');
      loaderScreen.classList.add('is-hidden');
      setTimeout(() => {
        loaderScreen.style.display = 'none';
      }, 800);
    }, 1500);
  }
});

// 2. Sticky Navigation Header On Scroll
const siteHeader = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    siteHeader?.classList.add('is-scrolled');
  } else {
    siteHeader?.classList.remove('is-scrolled');
  }
});

// 3. Mobile Drawer Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileDrawer = document.getElementById('mobileDrawer');
const toggleIcon = document.getElementById('toggleIcon');

if (mobileToggle && mobileDrawer) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = mobileDrawer.classList.toggle('is-open');
    if (toggleIcon) {
      toggleIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
  });

  // Close drawer when any link is clicked
  const mobileLinks = mobileDrawer.querySelectorAll('.mobile-link');
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('is-open');
      if (toggleIcon) {
        toggleIcon.className = 'fa-solid fa-bars';
      }
    });
  });
}

// 4. Reveal On Scroll Observer
const revealElements = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);
revealElements.forEach((el) => revealObserver.observe(el));

// 5. Interactive Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Update Active Filter Button
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach((card) => {
      const category = card.getAttribute('data-category') || '';
      if (filter === 'all' || category.includes(filter)) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 200);
      }
    });
  });
});

// 6. Project In-Depth Modal Data & Handler
const projectData = {
  mochi3aar: {
    title: 'Mochi3aar Semarang — Dessert & Souvenir Marketplace',
    type: 'Personal Project | 2026',
    category: 'Web Development & E-Commerce',
    image: 'src/assets/images/projects/Mochi3aar.png',
    techStack: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)', 'Local Storage / State Management'],
    description:
      'Developed a modern web-based marketplace platform dedicated to ordering artisanal desserts and culinary souvenirs from local SMEs (UMKM) across Semarang city.',
    bullets: [
      'Developed a responsive, modern web-based marketplace tailored for local culinary and souvenir SMEs in Semarang.',
      'Designed and implemented responsive mobile-first user interfaces using React.js, Vite, and Tailwind CSS.',
      'Built core e-commerce features including dynamic product catalog, multi-category filtering, persistent shopping cart, live order tracking, checkout payment page, and detailed customer order history.',
      'Optimized performance and load times with Vite bundling and clean modular component architecture.',
    ],
  },
  sudoku: {
    title: 'Sudoku Adventure: Smart Quest — Educational Puzzle Adventure Game',
    type: 'Team Project | 2026',
    category: 'Game Development & UI/UX',
    image: 'src/assets/images/projects/Sudoku-Adventure.png',
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Vite', 'Mobile-First Design', 'Game Logic'],
    description:
      'Developed an interactive adventure puzzle web game that seamlessly integrates classic Sudoku number puzzles with world-map quests, mini-games, and companion dino progression.',
    bullets: [
      'Engineered an engaging web-based adventure game combining classic Sudoku mechanics with interactive exploration features.',
      'Designed and implemented responsive mobile-first interfaces using HTML, CSS, JavaScript, and Vite, optimized for desktop, tablet, and smartphone screens.',
      'Constructed core gameplay features including procedural Sudoku boards, world map exploration, challenge mode, mini-games, daily login rewards, in-game shop system, achievements engine, and companion Pet Dino progression.',
      'Refined user engagement through cheerful visual design, dynamic animations, and intuitive touch feedback.',
    ],
  },
  greenjobmap: {
    title: 'GreenJobMap.id — AI-Based Green Jobs Mapping Platform',
    type: 'Personal Project | 2026',
    category: 'AI & Geospatial Analytics',
    image: 'src/assets/images/projects/GreenJobMap.png',
    techStack: ['React.js', 'Laravel', 'MySQL', 'Leaflet.js', 'GeoJSON', 'Chart.js', 'AI Skill Matching'],
    description:
      'Developed a web-based platform to map green job opportunities, renewable energy potential, and sustainable talent distribution across Indonesian provinces.',
    bullets: [
      'Architected a nationwide geospatial analytics platform to visualize green economy potential and sustainable career paths across Indonesia.',
      'Designed and implemented a responsive analytics dashboard using React.js, Laravel, MySQL, Leaflet.js, GeoJSON, and Chart.js to render provincial GIS data and interactive statistical visualizations.',
      'Built core modules including interactive province map overlays, Green Job Index metrics, verified green industry directory, training & certification hub, smart multi-filter search, user profile dashboards, and AI-based skill match recommendations.',
    ],
  },
  tomatodisease: {
    title: 'Tomato Disease AI — Foliar Pathology Recognition System',
    type: 'AI / Machine Learning Project',
    category: 'Computer Vision & Deep Learning',
    image: 'src/assets/images/projects/tomato-disease-ai-main.png',
    techStack: ['Python', 'Computer Vision', 'Deep Learning / CNN', 'OpenCV', 'Image Classification'],
    description:
      'Engineered a computer vision machine learning solution designed to diagnose and classify foliar diseases on tomato crops from leaf photographs in real time.',
    bullets: [
      'Trained convolutional neural network (CNN) architectures on agricultural leaf image datasets to recognize foliar tomato crop pathogens.',
      'Engineered preprocessing pipelines utilizing OpenCV for leaf segmenting, contrast normalization, and data augmentation.',
      'Provided clear diagnostic feedback and actionable treatment recommendations to empower agricultural practitioners and farmers.',
    ],
  },
  sekolahunggul: {
    title: 'Sistem Prediksi Sekolah Unggul — Machine Learning Decision Tree Classifier',
    type: 'Machine Learning & AI Education Project | 2026',
    category: 'AI & Educational Data Analytics',
    image: 'src/assets/images/projects/sekolah-unggul.png',
    techStack: [
      'Python',
      'Machine Learning',
      'Decision Tree Classifier',
      'Scikit-Learn',
      'Streamlit',
      'Data Analytics & Metrics',
      'Interactive UI/UX',
    ],
    description:
      'Developed an intelligent AI-powered evaluation system designed to classify, predict, and benchmark school excellence standards based on multi-dimensional academic performance, educator competencies, facilities, and student graduation outcomes.',
    bullets: [
      'Engineered an automated educational quality classification engine utilizing Machine Learning Decision Tree algorithms trained on comprehensive school standard indicators.',
      'Designed an intuitive web application interface featuring 1-click Quick Simulation Presets (Preset Simulasi Cepat) for instant benchmark testing and seamless parameter adjustment.',
      'Evaluated key performance dimensions: academic achievement, teacher-to-student ratios, accreditation readiness, laboratory & digital infrastructure, and graduation rates.',
      'Generated instant analytical diagnostic summaries, probability metrics, and data-driven recommendations to support strategic institutional quality improvements.',
    ],
  },
};

const projectModal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const modalCloseBtn = document.getElementById('modalCloseBtn');

function openModal(projectId) {
  const data = projectData[projectId];
  if (!data || !modalContent) return;

  const techBadgesHtml = data.techStack
    .map((tech) => `<span class="skill-pill" style="font-size:0.78rem; padding:0.3rem 0.75rem;">${tech}</span>`)
    .join('');

  const bulletsHtml = data.bullets.map((b) => `<li>${b}</li>`).join('');

  modalContent.innerHTML = `
    <img src="${data.image}" alt="${data.title}" class="modal-hero-img" />
    <div class="modal-badge-group">
      <span class="section-badge" style="margin-bottom:0;">${data.type}</span>
      <span class="status-pill">${data.category}</span>
    </div>
    <h3 class="modal-title">${data.title}</h3>
    <p class="modal-lead">${data.description}</p>
    
    <div class="modal-features-box">
      <h4><i class="fa-solid fa-list-check"></i> Key Features & Implementation:</h4>
      <ul class="styled-list">
        ${bulletsHtml}
      </ul>
    </div>

    <div style="margin-top: 1.25rem;">
      <h4 style="font-family: var(--font-heading); font-size: 0.95rem; font-weight: 800; color: var(--text-heading); margin-bottom: 0.65rem; text-transform: uppercase;">
        <i class="fa-solid fa-layer-group" style="color: var(--primary);"></i> Tech Stack & Tools:
      </h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${techBadgesHtml}
      </div>
    </div>
  `;

  projectModal.classList.add('is-active');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (projectModal) {
    projectModal.classList.remove('is-active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// Modal Event Listeners
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('.btn-modal-trigger');
  if (trigger) {
    const target = trigger.getAttribute('data-target');
    if (target) openModal(target);
  }
});

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeModal);
}

if (projectModal) {
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal?.classList.contains('is-active')) {
    closeModal();
  }
});
