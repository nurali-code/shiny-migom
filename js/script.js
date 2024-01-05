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

    $('.dropdown__btn').on('click', function () {
        $('.dropdown__text').slideUp();
        if ($(this).hasClass('active')) {
            $('.dropdown__btn, .dropdown__text').removeClass('active');
        } else {
            $('.dropdown__btn, .dropdown__text').removeClass('active');
            $(this).addClass('active');
            $(this).next('.dropdown__text').slideDown();
        }
    })

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

