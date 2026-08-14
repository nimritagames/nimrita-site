// Navigation: scroll-based header + mobile menu
(function() {
  var nav = document.getElementById('nav');
  var hamburger = document.getElementById('nav-hamburger');
  var mobileMenu = document.getElementById('nav-mobile');

  // Scroll listener — add background on scroll
  var scrollThreshold = 50;
  function onScroll() {
    if (window.scrollY > scrollThreshold) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile hamburger
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      nav.classList.toggle('nav--open');
    });

    // Close on link click
    if (mobileMenu) {
      mobileMenu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          nav.classList.remove('nav--open');
        });
      });
    }

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target)) {
        nav.classList.remove('nav--open');
      }
    });
  }
})();
