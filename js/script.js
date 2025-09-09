// --- Dominion Nav Fix ---
(function() {
  try {
    // Close mobile nav if open (optional)
    var navbar = document.getElementById('navbar');
    var navToggle = document.getElementById('navToggle');
    if (navToggle && navbar) {
      navToggle.addEventListener('click', function() {
        var ul = navbar.querySelector('ul');
        if (ul) ul.style.display = (ul.style.display === 'flex' ? 'none' : 'flex');
      });
    }

    // Force navigation on header/footer links to avoid preventDefault handlers
    var navLinks = document.querySelectorAll('nav a, .footer a');
    navLinks.forEach(function(a) {
      a.addEventListener('click', function(e) {
        var href = a.getAttribute('href');
        if (!href || href === '#') return;
        // Allow external links and mailto to pass naturally
        if (/^https?:|^mailto:|^tel:/.test(href)) return;
        e.stopPropagation();
        e.preventDefault();
        // Normalize leading slash vs file reference
        if (href === '/') {
          window.location.assign('/');
        } else {
          window.location.assign(href);
        }
      }, { capture: true });
    });
  } catch (err) {
    console && console.warn && console.warn('Nav fix error:', err);
  }
})();
