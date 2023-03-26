// Smooth Scrolling
$('nav .container-list a').on('click', function (e) {    
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top,
            },
            800
        );
    }
});

// Smooth Scrolling Mobile
$('#hamburger-icon ul li a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 160,
            },
            800
        );
    }
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container-list ul li");
window.addEventListener('scroll', () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {            
            current = section.getAttribute('id');
        }
    });

    navLi.forEach((li) => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active');
        }
    });

});

const sectionsMobile = document.querySelectorAll("section");
const navLiMobile = document.querySelectorAll("#hamburger-icon ul li");
window.addEventListener('scroll', () => {
    let current = "";

    sectionsMobile.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {            
            current = section.getAttribute('id');
        }
    });

    navLiMobile.forEach((li) => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active');
        }
    });

});

// Open nav menu on mobile devices
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// Get the button
let mybutton = document.getElementById("scrollUpArrow");

// When the user scrolls down 45px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Clear the form
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}