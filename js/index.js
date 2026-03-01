(function () {
    'use strict';

    // Initialize GLightbox
    GLightbox({
        touchNavigation: true,
        loop: false,
        closeOnOutsideClick: true
    });

    var sections = document.querySelectorAll('section');
    var desktopNavItems = document.querySelectorAll('nav .container-list ul li');
    var mobileNavItems = document.querySelectorAll('#hamburger-icon ul li');
    var scrollUpArrow = document.getElementById('scrollUpArrow');
    var scrollUpLink = scrollUpArrow.querySelector('a');
    var hamburger = document.getElementById('hamburger-icon');
    var ticking = false;

    // Smooth scroll for desktop nav
    document.querySelectorAll('nav .container-list a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            if (this.hash) {
                e.preventDefault();
                var target = document.querySelector(this.hash);
                if (target) {
                    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
                }
            }
        });
    });

    // Smooth scroll for mobile nav (160px offset for fixed header)
    document.querySelectorAll('#hamburger-icon ul li a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (this.hash) {
                var target = document.querySelector(this.hash);
                if (target) {
                    window.scrollTo({ top: target.offsetTop - 160, behavior: 'smooth' });
                }
            }
            hamburger.classList.remove('open');
        });
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', function () {
        this.classList.toggle('open');
    });

    // Scroll-to-top button
    scrollUpLink.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Combined scroll handler with requestAnimationFrame throttle
    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(function () {
                var current = '';
                var isMobile = window.innerWidth <= 576;
                var headerOffset = isMobile ? 160 : 0;

                sections.forEach(function (section) {
                    var sectionTop = section.offsetTop;
                    // On mobile, use fixed threshold to avoid giant stacked sections
                    // skewing the calculation (portfolio height >> viewport height)
                    var threshold = isMobile ? headerOffset + 50 : section.clientHeight / 3;
                    if (window.scrollY >= sectionTop - threshold) {
                        current = section.getAttribute('id');
                    }
                });

                // Update desktop nav active state
                desktopNavItems.forEach(function (li) {
                    li.classList.remove('active');
                    if (li.classList.contains(current)) {
                        li.classList.add('active');
                    }
                });

                // Update mobile nav active state
                mobileNavItems.forEach(function (li) {
                    li.classList.remove('active');
                    if (li.classList.contains(current)) {
                        li.classList.add('active');
                    }
                });

                // Scroll-to-top button visibility
                if (document.documentElement.scrollTop > 45) {
                    scrollUpArrow.style.display = 'block';
                } else {
                    scrollUpArrow.style.display = 'none';
                }

                ticking = false;
            });
            ticking = true;
        }
    });

    // Clear form on page unload
    window.addEventListener('beforeunload', function () {
        var forms = document.getElementsByTagName('form');
        for (var i = 0; i < forms.length; i++) {
            forms[i].reset();
        }
    });
})();
