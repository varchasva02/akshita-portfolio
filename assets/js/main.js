/* ==============================================
   AKSHITA SOMANI — PORTFOLIO INTERACTIONS
   Premium Editorial Portfolio JavaScript
   ============================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ── Loading Screen ──
  const loader = document.querySelector('.loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 800);
  });
  // Fallback if load already fired
  if (document.readyState === 'complete') {
    setTimeout(() => loader.classList.add('hidden'), 400);
  }

  // ── Custom Cursor ──
  const cursor = document.querySelector('.custom-cursor');
  const cursorText = cursor?.querySelector('.cursor-text');
  
  if (cursor && window.matchMedia('(pointer: fine)').matches) {
    let mx = 0, my = 0, cx = 0, cy = 0;
    
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
    });

    function animateCursor() {
      cx += (mx - cx) * 0.15;
      cy += (my - cy) * 0.15;
      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover targets
    document.querySelectorAll('.project-card__image-wrapper, .image-grid__item, .masonry-item, .process__item, .horizontal-gallery__item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
        if (cursorText) cursorText.textContent = 'VIEW';
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
      });
    });

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
        cursor.style.borderColor = 'transparent';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.borderColor = '';
      });
    });
  } else if (cursor) {
    cursor.style.display = 'none';
  }

  // ── Navbar Scroll Effect ──
  const navbar = document.querySelector('.navbar');
  let lastScrollY = 0;

  function handleNavbar() {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
  }

  // ── Scroll Progress ──
  const progressBar = document.querySelector('.scroll-progress');

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    if (progressBar) progressBar.style.width = progress + '%';
  }

  // ── Back to Top ──
  const backToTop = document.querySelector('.back-to-top');
  
  function handleBackToTop() {
    if (window.scrollY > 600) {
      backToTop?.classList.add('visible');
    } else {
      backToTop?.classList.remove('visible');
    }
  }

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Combine scroll handlers
  window.addEventListener('scroll', () => {
    handleNavbar();
    updateProgress();
    handleBackToTop();
  }, { passive: true });

  // ── Mobile Menu ──
  const menuBtn = document.querySelector('.navbar__menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  menuBtn?.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // ── Scroll Reveal ──
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    revealObserver.observe(el);
  });

  // ── Hero Image Load Effect ──
  const heroImg = document.querySelector('.hero__image');
  if (heroImg) {
    if (heroImg.complete) {
      heroImg.classList.add('loaded');
    } else {
      heroImg.addEventListener('load', () => heroImg.classList.add('loaded'));
    }
  }

  // ── Parallax Effect ──
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  function handleParallax() {
    parallaxElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const speed = parseFloat(el.dataset.parallax) || 0.1;
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const yPos = (rect.top - window.innerHeight / 2) * speed;
        el.style.transform = `translateY(${yPos}px)`;
      }
    });
  }

  window.addEventListener('scroll', handleParallax, { passive: true });

  // ── Project Detail Views ──
  const projectCards = document.querySelectorAll('[data-project]');
  const projectDetails = document.querySelectorAll('.project-detail');

  function openProject(projectId) {
    const detail = document.getElementById('project-' + projectId);
    if (!detail) return;
    
    detail.style.display = 'block';
    requestAnimationFrame(() => {
      detail.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    // Re-observe reveal elements inside project
    detail.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      el.classList.remove('revealed');
      revealObserver.observe(el);
    });
    
    // Scroll to top of detail
    detail.scrollTop = 0;
  }

  function closeProject(detail) {
    detail.classList.remove('active');
    setTimeout(() => {
      detail.style.display = 'none';
      document.body.style.overflow = '';
    }, 500);
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.dataset.project;
      openProject(projectId);
    });
  });

  document.querySelectorAll('.project-detail__close').forEach(btn => {
    btn.addEventListener('click', () => {
      const detail = btn.closest('.project-detail');
      closeProject(detail);
    });
  });

  // Project navigation
  document.querySelectorAll('.project-nav__link[data-goto]').forEach(link => {
    link.addEventListener('click', () => {
      const currentDetail = link.closest('.project-detail');
      const targetId = link.dataset.goto;
      closeProject(currentDetail);
      setTimeout(() => openProject(targetId), 600);
    });
  });

  // ── Lightbox ──
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox?.querySelector('.lightbox__img');
  const lightboxCaption = lightbox?.querySelector('.lightbox__caption');
  const lightboxClose = lightbox?.querySelector('.lightbox__close');
  const lightboxPrev = lightbox?.querySelector('.lightbox__nav--prev');
  const lightboxNext = lightbox?.querySelector('.lightbox__nav--next');
  
  let currentGallery = [];
  let currentIndex = 0;

  function openLightbox(src, caption, gallery, index) {
    if (!lightbox) return;
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || '';
    currentGallery = gallery || [];
    currentIndex = index || 0;
    lightbox.style.display = 'flex';
    requestAnimationFrame(() => lightbox.classList.add('active'));
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    setTimeout(() => {
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    }, 400);
  }

  function navigateLightbox(dir) {
    if (currentGallery.length === 0) return;
    currentIndex = (currentIndex + dir + currentGallery.length) % currentGallery.length;
    const item = currentGallery[currentIndex];
    lightboxImg.src = item.src;
    lightboxCaption.textContent = item.caption || '';
  }

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', () => navigateLightbox(-1));
  lightboxNext?.addEventListener('click', () => navigateLightbox(1));

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  // Make all gallery images clickable
  document.querySelectorAll('.image-grid__item, .full-image, .masonry-item, .horizontal-gallery__item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img') || item;
      const caption = item.querySelector('.image-grid__caption')?.textContent || img.alt || '';
      
      // Build gallery from siblings
      const parent = item.parentElement;
      const siblings = parent.querySelectorAll(item.tagName.toLowerCase());
      const gallery = Array.from(siblings).map(s => {
        const sImg = s.querySelector('img') || s;
        return {
          src: sImg.src,
          caption: s.querySelector('.image-grid__caption')?.textContent || sImg.alt || ''
        };
      });
      const idx = Array.from(siblings).indexOf(item);
      
      openLightbox(img.src, caption, gallery, idx);
    });
  });

  // ── Smooth Scroll for Anchor Links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      // Close any open project detail first
      const openProject = document.querySelector('.project-detail.active');
      if (openProject) {
        closeProject(openProject);
        setTimeout(() => {
          const target = document.querySelector(anchor.getAttribute('href'));
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 550);
      } else {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Logo click — always go home & close any open project
  document.querySelector('.navbar__logo')?.addEventListener('click', (e) => {
    e.preventDefault();
    const openProject = document.querySelector('.project-detail.active');
    if (openProject) closeProject(openProject);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Lazy Loading Images ──
  const lazyImages = document.querySelectorAll('img[data-src]');
  const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        lazyObserver.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  lazyImages.forEach(img => lazyObserver.observe(img));

  // ── Horizontal Gallery Drag Scroll ──
  document.querySelectorAll('.horizontal-gallery').forEach(gallery => {
    let isDown = false, startX, scrollLeft;

    gallery.addEventListener('mousedown', (e) => {
      isDown = true;
      gallery.style.cursor = 'grabbing';
      startX = e.pageX - gallery.offsetLeft;
      scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('mouseleave', () => {
      isDown = false;
      gallery.style.cursor = '';
    });

    gallery.addEventListener('mouseup', () => {
      isDown = false;
      gallery.style.cursor = '';
    });

    gallery.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - gallery.offsetLeft;
      const walk = (x - startX) * 2;
      gallery.scrollLeft = scrollLeft - walk;
    });
  });

  // ── Stagger Children on Reveal ──
  document.querySelectorAll('[data-stagger-children]').forEach(parent => {
    const children = parent.children;
    Array.from(children).forEach((child, i) => {
      child.style.transitionDelay = (i * 0.1) + 's';
    });
  });

  // ── Initial Scroll Trigger ──
  handleNavbar();
  updateProgress();
  handleBackToTop();
});
