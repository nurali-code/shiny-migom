$(document).ready(function () {
    // $(window).scroll(function () {
    //     var header = $('header');
    //     if ($(this).scrollTop() > 100) {
    //         header.addClass('fixed');
    //     } else { header.removeClass('fixed'); }
    // });

    $('.btnMenu').on('click', () => { $('.btnMenu, .nav').toggleClass('active') });

    if ($(window).width() >= '999') {
        $('.wk-slider').slick({
            arrows: false,
            dots: false,
            // autoplay: true,
            // autoplaySpeed: 3000,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
        });
    }

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 300,)
    });

    // $('.slider').slick({
    //     arrows: false,
    //     dots: false,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     infinite: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // });

});

