'use strict';

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = () => window.innerWidth < 768;

/* ============================================================
   Utility
   ============================================================ */
function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
function easeOutElastic(t) {
  const c4 = (2 * Math.PI) / 3;
  return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
}
function lerp(a, b, t) { return a + (b - a) * t; }

/* ============================================================
   1.  Page Loader  (index.html only)
   ============================================================ */
const loader = document.getElementById('loader');
if (loader && !prefersReduced) {
  document.body.style.overflow = 'hidden';
  let prog = 0;
  const fill = document.getElementById('loaderFill');
  const num  = document.getElementById('loaderNum');

  const tick = () => {
    prog += Math.random() * 5 + (prog < 60 ? 3 : 1);
    if (prog > 100) prog = 100;
    fill.style.width = prog + '%';
    num.firstChild.textContent = Math.floor(prog);
    if (prog < 100) { setTimeout(tick, 28); return; }
    setTimeout(() => {
      loader.classList.add('loader--done');
      document.body.style.overflow = '';
      setTimeout(() => { loader.style.display = 'none'; initHeroText(); }, 700);
    }, 350);
  };

  if (document.readyState === 'complete') { setTimeout(tick, 80); }
  else { window.addEventListener('load', () => setTimeout(tick, 80)); }
} else {
  if (loader) loader.style.display = 'none';
  document.body.style.overflow = '';
  setTimeout(initHeroText, 300);
}

/* ============================================================
   2.  Custom Cursor  (desktop only)
   ============================================================ */
const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

if (cursorDot && cursorRing && !isMobile()) {
  document.body.classList.add('has-cursor');
  let mx = -100, my = -100, rx = -100, ry = -100;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  const animCursor = () => {
    cursorDot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    rx = lerp(rx, mx, 0.14);
    ry = lerp(ry, my, 0.14);
    cursorRing.style.transform = `translate(${rx - 22}px, ${ry - 22}px)`;
    requestAnimationFrame(animCursor);
  };
  animCursor();

  const hover    = ['a','button','.srv-card','.work-card','.work-full-card','.btn','.filter-btn','.faq-question'].join(',');
  const bigHover = ['.about-photo-main','.recruit-photo','.page-hero','.strengths-photo'].join(',');

  document.querySelectorAll(hover).forEach(el => {
    el.addEventListener('mouseenter', () => { cursorDot.classList.add('active'); cursorRing.classList.add('active'); });
    el.addEventListener('mouseleave', () => { cursorDot.classList.remove('active'); cursorRing.classList.remove('active'); });
  });
  document.querySelectorAll(bigHover).forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('big'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('big'));
  });
}

/* ============================================================
   3.  Scroll Progress Bar
   ============================================================ */
const progressEl = document.getElementById('scrollProgress');
if (progressEl) {
  window.addEventListener('scroll', () => {
    const total   = document.documentElement.scrollHeight - window.innerHeight;
    const ratio   = window.scrollY / total;
    progressEl.style.transform = `scaleX(${ratio})`;
  }, { passive: true });
}

/* ============================================================
   4.  Header scroll state
   ============================================================ */
const header = document.getElementById('header');
const toTop  = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (header) header.classList.toggle('scrolled', y > 60);
  if (toTop)  toTop.classList.toggle('show', y > 500);
}, { passive: true });

/* ============================================================
   5.  Hamburger menu
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('active');
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

/* ============================================================
   6.  Smooth anchor scroll
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  });
});

/* ============================================================
   7.  Back to top
   ============================================================ */
if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ============================================================
   8.  Hero photo  (scale-in on load)
   ============================================================ */
const heroPhoto = document.getElementById('heroPhoto');
if (heroPhoto) {
  const onLoad = () => heroPhoto.classList.add('loaded');
  heroPhoto.complete ? onLoad() : heroPhoto.addEventListener('load', onLoad);
}

/* ============================================================
   9.  Hero text — character-split animation
   ============================================================ */
function initHeroText() {
  if (prefersReduced) return;
  document.querySelectorAll('.hero-title-line').forEach((line, li) => {
    const raw = line.textContent;
    line.textContent = '';
    line.style.opacity = '1';
    [...raw].forEach((ch, ci) => {
      const s = document.createElement('span');
      s.className = 'char';
      s.textContent = ch === ' ' ? ' ' : ch;
      const delay = li * 160 + ci * 38;
      s.style.cssText = `
        display:inline-block; opacity:0;
        transform:translateY(36px) skewY(4deg);
        transition: opacity .55s ${delay}ms cubic-bezier(.22,1,.36,1),
                    transform .7s ${delay}ms cubic-bezier(.34,1.56,.64,1);
      `;
      line.appendChild(s);
    });
    requestAnimationFrame(() => requestAnimationFrame(() => {
      line.querySelectorAll('.char').forEach(s => {
        s.style.opacity   = '1';
        s.style.transform = 'translateY(0) skewY(0)';
      });
    }));
  });

  // Hero badge slide in
  const badge = document.querySelector('.hero-badge');
  if (badge && !prefersReduced) {
    badge.style.cssText = `opacity:0;transform:translateY(-16px);transition:opacity .6s .1s ease,transform .6s .1s ease;`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      badge.style.opacity   = '1';
      badge.style.transform = '';
    }));
  }
  // Hero desc + actions
  ['.hero-desc','.hero-actions'].forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.cssText = `opacity:0;transform:translateY(24px);transition:opacity .7s ${700+i*120}ms ease,transform .7s ${700+i*120}ms ease;`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.opacity   = '1';
      el.style.transform = '';
    }));
  });
}

/* ============================================================
   10.  Parallax  – hero image
   ============================================================ */
if (!prefersReduced) {
  const heroImg = document.querySelector('.hero-media img');
  if (heroImg) {
    const maxShift = 50; // px — stays within the image's built-in overscan buffer
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const shift = Math.min(window.scrollY * 0.15, maxShift);
        heroImg.style.transform = `scale(1) translateY(${shift}px)`;
        ticking = false;
      });
    }, { passive: true });
  }
}

/* ============================================================
   11.  Scroll Reveal  (enhanced stagger)
   ============================================================ */
const revealItems = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el    = entry.target;
    const delay = parseFloat(el.style.transitionDelay || '0') * 1000;
    setTimeout(() => el.classList.add('visible'), delay);
    revealObs.unobserve(el);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
revealItems.forEach(el => revealObs.observe(el));

/* ============================================================
   12.  Counter animation
   ============================================================ */
function animCount(el) {
  const target   = parseInt(el.dataset.target, 10);
  const duration = 2200;
  const start    = performance.now();
  const step = now => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(easeOutExpo(p) * target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}
const countObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    animCount(e.target);
    countObs.unobserve(e.target);
  });
}, { threshold: 0.6 });
document.querySelectorAll('.count').forEach(el => countObs.observe(el));

/* ============================================================
   13.  Card Tilt  (desktop only)
   ============================================================ */
if (!isMobile() && !prefersReduced) {
  const tiltEls = document.querySelectorAll(
    '.srv-card, .str-item, .work-full-card, .job-card, .benefit-item, .exec-card'
  );
  tiltEls.forEach(card => {
    let rafTilt;
    card.addEventListener('mousemove', e => {
      cancelAnimationFrame(rafTilt);
      rafTilt = requestAnimationFrame(() => {
        const r  = card.getBoundingClientRect();
        const x  = (e.clientX - r.left) / r.width  - 0.5;
        const y  = (e.clientY - r.top)  / r.height - 0.5;
        card.style.transition = 'transform .08s ease, box-shadow .08s ease';
        card.style.transform  = `perspective(900px) rotateX(${-y*9}deg) rotateY(${x*9}deg) translateY(-8px) scale(1.025)`;
        card.style.boxShadow  = `${-x*12}px ${-y*12}px 40px rgba(29,78,216,.18), 0 20px 40px rgba(0,0,0,.15)`;
      });
    });
    card.addEventListener('mouseleave', () => {
      cancelAnimationFrame(rafTilt);
      card.style.transition = 'transform .55s cubic-bezier(.23,1,.32,1), box-shadow .55s ease';
      card.style.transform  = '';
      card.style.boxShadow  = '';
    });
  });
}

/* ============================================================
   14.  Magnetic Buttons
   ============================================================ */
if (!isMobile() && !prefersReduced) {
  document.querySelectorAll('.btn-gold, .btn-primary, .btn-ghost').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r  = btn.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width  / 2)) * 0.38;
      const dy = (e.clientY - (r.top  + r.height / 2)) * 0.38;
      btn.style.transition = 'transform .1s ease';
      btn.style.transform  = `translate(${dx}px, ${dy}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transition = 'transform .55s cubic-bezier(.23,1,.32,1)';
      btn.style.transform  = '';
    });
  });
}

/* ============================================================
   15.  Ripple on buttons
   ============================================================ */
document.querySelectorAll('.btn').forEach(btn => {
  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.addEventListener('click', e => {
    const r    = btn.getBoundingClientRect();
    const size = Math.max(r.width, r.height) * 2.2;
    const rip  = document.createElement('span');
    rip.className = 'btn-ripple';
    rip.style.cssText = `
      width:${size}px;height:${size}px;
      left:${e.clientX - r.left - size/2}px;
      top:${e.clientY  - r.top  - size/2}px;
    `;
    btn.appendChild(rip);
    rip.addEventListener('animationend', () => rip.remove());
  });
});

/* ============================================================
   16.  Floating numbers in hero stats  (entrance)
   ============================================================ */
if (!prefersReduced) {
  document.querySelectorAll('.hero-stat').forEach((stat, i) => {
    stat.style.opacity   = '0';
    stat.style.transform = 'translateY(22px)';
    stat.style.transition = `opacity .65s ${500 + i*90}ms ease, transform .65s ${500 + i*90}ms ease`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      stat.style.opacity   = '1';
      stat.style.transform = '';
    }));
  });
}

/* ============================================================
   17.  Section label pop  (large background text)
   ============================================================ */
if (!prefersReduced) {
  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('section-entered');
        sectionObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('.section, .page-section').forEach(s => sectionObs.observe(s));
}

/* ============================================================
   18.  Contact form
   ============================================================ */
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(f => {
      const ok = f.type === 'checkbox' ? f.checked : f.value.trim() !== '';
      f.style.borderColor = ok ? '' : '#ef4444';
      f.style.boxShadow   = ok ? '' : '0 0 0 3px rgba(239,68,68,.12)';
      if (!ok) valid = false;
    });
    if (!valid) return;
    const btn  = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = `<span>送信中…</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="animation:spin .8s linear infinite">
        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,.3)" stroke-width="3"/>
        <path d="M12 2a10 10 0 0 1 10 10" stroke="white" stroke-width="3" stroke-linecap="round"/>
      </svg>`;
    btn.disabled = true;
    setTimeout(() => {
      form.reset();
      btn.innerHTML = orig;
      btn.disabled  = false;
      if (formSuccess) { formSuccess.classList.add('show'); setTimeout(() => formSuccess.classList.remove('show'), 6e3); }
    }, 1500);
  });
  form.querySelectorAll('[required]').forEach(f => f.addEventListener('input', () => { f.style.borderColor = ''; f.style.boxShadow = ''; }));
}

/* ============================================================
   20.  Subpage hero images load
   ============================================================ */
document.querySelectorAll('.page-hero-media img, #heroImg').forEach(img => {
  const fn = () => img.classList.add('loaded');
  img.complete ? fn() : img.addEventListener('load', fn);
});

/* ============================================================
   21.  FAQ Accordion
   ============================================================ */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.faq-answer').style.maxHeight = '0';
      el.querySelector('.faq-question').setAttribute('aria-expanded','false');
    });
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      btn.setAttribute('aria-expanded','true');
    }
  });
});

/* ============================================================
   22.  Works filter
   ============================================================ */
const filterBtns  = document.querySelectorAll('.filter-btn');
const filterCards = document.querySelectorAll('.work-full-card');
if (filterBtns.length) {
  filterBtns.forEach(btn => btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    filterCards.forEach(c => {
      c.style.display = cat === 'all' || c.dataset.cat === cat ? '' : 'none';
    });
  }));
}

/* ============================================================
   23.  Spin keyframe inject  (for form loading spinner)
   ============================================================ */
(function() {
  const style = document.createElement('style');
  style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
  document.head.appendChild(style);
})();

/* ============================================================
   24.  Floating CTA bubble
   ============================================================ */
const floatCta = document.getElementById('floatCta');
if (floatCta) {
  window.addEventListener('scroll', () => {
    floatCta.classList.toggle('show', window.scrollY > 600);
  }, { passive: true });
}
