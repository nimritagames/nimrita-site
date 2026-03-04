// Docs: sidebar navigation, scroll spy, mobile drawer
(function() {
  // --- Collapsible sidebar sections ---
  var toggles = document.querySelectorAll('.docs-sidebar__toggle');
  toggles.forEach(function(btn) {
    btn.addEventListener('click', function() {
      btn.classList.toggle('expanded');
      var target = btn.nextElementSibling;
      if (target && target.classList.contains('docs-sidebar__collapsible')) {
        target.classList.toggle('open');
      }
    });
  });

  // --- Scroll spy with IntersectionObserver ---
  var headings = document.querySelectorAll('.docs-content h2[id], .docs-content h3[id]');
  var sidebarLinks = document.querySelectorAll('.docs-sidebar__link[href^="#"]');

  if (headings.length && sidebarLinks.length) {
    var linkMap = {};
    sidebarLinks.forEach(function(link) {
      var hash = link.getAttribute('href');
      if (hash) linkMap[hash.slice(1)] = link;
    });

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          sidebarLinks.forEach(function(l) { l.classList.remove('active'); });
          var link = linkMap[entry.target.id];
          if (link) {
            link.classList.add('active');
            // Expand parent collapsible if needed
            var collapsible = link.closest('.docs-sidebar__collapsible');
            if (collapsible && !collapsible.classList.contains('open')) {
              collapsible.classList.add('open');
              var prevToggle = collapsible.previousElementSibling;
              if (prevToggle) prevToggle.classList.add('expanded');
            }
            // Scroll sidebar to keep active link visible
            link.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          }
        }
      });
    }, {
      rootMargin: '-80px 0px -60% 0px',
      threshold: 0
    });

    headings.forEach(function(h) { observer.observe(h); });
  }

  // --- Mobile sidebar drawer ---
  var sidebar = document.querySelector('.docs-sidebar');
  var mobileToggle = document.querySelector('.docs-mobile-toggle');
  var overlay = document.querySelector('.docs-sidebar__overlay');

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
  }

  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // Close sidebar on link click (mobile)
  if (sidebar) {
    sidebar.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth < 1024) {
          closeSidebar();
        }
      });
    });
  }
})();
