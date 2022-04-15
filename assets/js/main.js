// mobile nav Toggle kodları
const mobileNavOpen = (object) => {
    // this code Only change color and icon.  
    $(object).toggleClass("mobile-active").toggleClass("bi-list").toggleClass("bi-x");
    //navbarı sola sağa kaydırma kodu 
    $("#header").toggleClass("active-header");
}

$(".mobile-nav-toggle").click(function(e) {
    e.preventDefault();
    mobileNavOpen(this);
});

$("#navbar li a").click(function(e) {
    mobileNavOpen($(".mobile-nav-toggle"));
});


// aşşa yukarı kaydırırken belli bölgede active olan navbar link kodu

$(window).scroll(function() {
    let current = "";
    $("section").each(function(index, section) {
        // element == this
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = $(section).attr("id");
        }
    });
    $("#navbar li a").each(function(index, element) {
        // element == this
        if ($(element).hasClass(current)) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });


});


// Waypoint ile skills kısmını animasyonlama

$('#skills').waypoint({
    offset: '50%',
    handler: function(direction) {
        $(".bar-inside").each(function(index, element) {
            // element == this
            const value = $(element).attr("aria-valuenow");
            $(element).css("width", value + "%");
        });
    }
})

// İsotope layout kullanarak portfolio kısmı kodları

$('.portfolio-container').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.portfolio-item',
    percentPosition: true,

})

$(".filter-buttons li").click(function(e) {
    e.preventDefault();
    $(".filter-buttons li").removeClass("active");
    $(this).addClass("active");

    var filterValue = $(this).attr('data-filter');
    $('.portfolio-container').isotope({ filter: filterValue });
});


// swipper js kodları

var swiper = new Swiper(".testimonials-swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// Glightbox Setup
const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});

// Typed js kodları
$(document).ready(function() {
    var typed3 = new Typed('#typestats', {
        strings: ['Developer','Photographer', 'Freelancer', 'Designer'],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 2000,
        smartBackspace: true, // this is a default
        loop: true
    });
});

// Aos init

AOS.init({
    duration: 2000,
    once: true,
  });