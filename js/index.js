// Smooth Scrolling
$('#navbar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100,
            },
            800
        );
    }
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container-list ul li");
window.addEventListener('scroll', () => {
    let current = "";
    // console.log(pageYOffset);

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // console.log(sectionTop); // 0 - about, 831 - projects, 2213 - contact;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
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


function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}