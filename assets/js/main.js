/* v3 JS (same logic as v2, keeping hover/tilt fix) */
(() => {
  'use strict';
  const qs  = (sel, ctx=document) => ctx.querySelector(sel);
  const qsa = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll progress
  const prog = qs('#progress');
  const onScroll = () => {
    const h = document.documentElement;
    const scrolled = h.scrollHeight > h.clientHeight ? h.scrollTop / (h.scrollHeight - h.clientHeight) : 0;
    if (prog) prog.style.transform = `scaleX(${clamp(scrolled, 0, 1)})`;
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth scroll
  const scrollToId = (id) => qs(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  qs('#btnGetUpdates')?.addEventListener('click', () => scrollToId('#contact'));
  qsa('[data-action="scroll-contact"]').forEach(b => b.addEventListener('click', () => scrollToId('#contact')));
  qsa('[data-action="scroll-origin"]').forEach(b => b.addEventListener('click', () => scrollToId('#origin')));
  qsa('[data-action="press-kit"]').forEach(b => b.addEventListener('click', () => alert('Press kit incoming ✦')));

  // Copy email
  qsa('[data-action="copy-email"]').forEach(b => {
    b.addEventListener('click', async () => {
      const email = b.getAttribute('data-email') || 'hello@nimritagames.com';
      try { await navigator.clipboard.writeText(email); b.textContent = 'Email copied ✔'; setTimeout(()=> b.textContent='Copy Email', 1400); }
      catch { prompt('Copy this address:', email); }
    });
  });

  // Ken Burns
  const heroBg = qs('[data-kenburns]');
  if (heroBg && !prefersReducedMotion) {
    let k = 1, dir = 1, rafId = null;
    const animate = () => { k += 0.0008 * dir; if (k > 1.08 || k < 1.0) dir *= -1; heroBg.style.transform = `scale(${k})`; rafId = requestAnimationFrame(animate); };
    rafId = requestAnimationFrame(animate);
    window.addEventListener('beforeunload', () => rafId && cancelAnimationFrame(rafId));
  }

  // Starfield
  const starCanvas = qs('#stars');
  if (starCanvas) {
    const ctx = starCanvas.getContext('2d');
    let w, h; const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const stars = []; const STAR_COUNT = 220;
    let raf;
    const resize = () => {
      w = starCanvas.width  = Math.floor(innerWidth * DPR);
      h = starCanvas.height = Math.floor(innerHeight * DPR);
      if (stars.length === 0) for (let i=0;i<STAR_COUNT;i++) stars.push({ x:Math.random()*w, y:Math.random()*h, z:Math.random()*1.5+0.2, v:(Math.random()*0.3+0.05)});
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });
    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#fff';
      for (const s of stars) {
        ctx.globalAlpha = 0.2 + 0.8 * s.z;
        ctx.fillRect(s.x, s.y, 1.5 * DPR, 1.5 * DPR);
        if (!prefersReducedMotion) { s.y += s.v; if (s.y > h) { s.y = -5; s.x = Math.random() * w; } }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener('beforeunload', () => raf && cancelAnimationFrame(raf));
  }

  // Count up
  const counters = qsa('.count');
  const io1 = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.target;
      let cur = 0; const dur = 900; const t0 = performance.now();
      const tick = (t) => { const p = Math.max(0, Math.min(1, (t - t0) / dur)); cur = Math.floor(target * p); el.textContent = p < 1 ? cur : target; if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(c => io1.observe(c));

  // Reveal on scroll
  const reveal = qsa('[data-animate]');
  const io2 = new IntersectionObserver((ents, obs) => {
    ents.forEach(e => {
      if (!e.isIntersecting) return;
      const t = e.target;
      t.style.transition = 'transform .8s cubic-bezier(.2,.8,.2,1), opacity .8s';
      t.style.opacity = 1; t.style.transform = 'none';
      obs.unobserve(t);
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
  if (!prefersReducedMotion) reveal.forEach(el => io2.observe(el));
  else reveal.forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });

  // Tilt + Hover lift (first hover up, leave to origin)
  if (!prefersReducedMotion) {
    const LIFT = 6;
    qsa('.tilt').forEach(el => {
      let hasEntered = false;
      const setTransform = (rx=0, ry=0) => { el.style.transform = `translateY(-${LIFT}px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`; };
      const onEnter = () => { hasEntered = true; el.style.transition='transform 180ms ease'; setTransform(0,0); };
      const onMove = (e) => { if (!hasEntered) return; const r = el.getBoundingClientRect(); const x = (e.clientX-r.left)/r.width-0.5; const y=(e.clientY-r.top)/r.height-0.5; el.style.transition=''; setTransform(-y*6, x*8); };
      const onLeave = () => { hasEntered=false; el.style.transition='transform 180ms ease'; el.style.transform='translateY(0)'; setTimeout(()=>{el.style.transition='';},220); };
      el.addEventListener('pointerenter', onEnter);
      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);
    });
  }

  // Email handler
  qs('#signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements['email'];
    const submitBtn = qs('button[type="submit"]', form);
    const status = qs('#formStatus');
    if (submitBtn) submitBtn.textContent = 'Welcome!';
    if (emailInput) emailInput.value = '';
    if (status) status.textContent = 'Welcome to the Founders List!';
    alert('Welcome to the Founders List!');
  });
})();