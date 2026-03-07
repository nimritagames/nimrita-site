/* ============================================================
   INFINITE RUNNER TUTORIAL - APP LOGIC
   Theme toggle, sidebar, code copy, progress bar
   ============================================================ */

(function () {
  'use strict';

  // --- Theme Toggle ---
  const THEME_KEY = 'runner-tutorial-theme';

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    const btn = document.querySelector('.theme-toggle');
    if (btn) {
      const icon = btn.querySelector('.theme-icon');
      const label = btn.querySelector('.theme-label');
      if (icon) icon.textContent = theme === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19';
      if (label) label.textContent = theme === 'dark' ? 'Light' : 'Dark';
    }
  }

  // Apply immediately to prevent flash
  setTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    // Re-apply theme after DOM ready (update button state)
    setTheme(getPreferredTheme());

    // Theme toggle button
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    // --- Sidebar Toggle (mobile) ---
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('active');
      });

      if (overlay) {
        overlay.addEventListener('click', function () {
          sidebar.classList.remove('open');
          overlay.classList.remove('active');
        });
      }
    }

    // --- Active Sidebar Link ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href) {
        const linkPage = href.split('/').pop();
        if (linkPage === currentPage) {
          link.classList.add('active');
          // Scroll sidebar to active link
          setTimeout(function () {
            link.scrollIntoView({ block: 'center', behavior: 'smooth' });
          }, 100);
        }
      }
    });

    // --- Code Copy Buttons ---
    document.querySelectorAll('.code-block').forEach(function (block) {
      const pre = block.querySelector('pre');
      if (!pre) return;

      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.innerHTML = '\u2398 Copy';
      btn.addEventListener('click', function () {
        const code = pre.querySelector('code') || pre;
        navigator.clipboard.writeText(code.textContent).then(function () {
          btn.classList.add('copied');
          btn.innerHTML = '\u2713 Copied!';
          setTimeout(function () {
            btn.classList.remove('copied');
            btn.innerHTML = '\u2398 Copy';
          }, 2000);
        });
      });
      block.appendChild(btn);
    });

    // --- Reading Progress Bar ---
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = Math.min(progress, 100) + '%';
      }, { passive: true });
    }

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  });
})();
