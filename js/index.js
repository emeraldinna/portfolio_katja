// Smooth Scrolling
$('#navbar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100,
                // scrollTop: $(hash).offset().top - 260,                
            },
            800
        );
    }
});

// $(".navbar-down a").click(function(){
//     $("body,html").animate({
//      scrollTop:$("#" + $(this).data('value')).offset().top
//     },1000)
    
//    })

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container-list ul li");
window.addEventListener('scroll', () => {
    let current = "";
    // console.log(`scrollY: ${scrollY}`);

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // console.log(sectionTop); // 0 - about, 946 - projects, 2379 - contact;
        const sectionHeight = section.clientHeight;
        // if (pageYOffset >= (sectionTop - sectionHeight / 3)) { - pageYOffset - deprecated
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


function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}