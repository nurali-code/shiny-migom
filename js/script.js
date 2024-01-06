$(document).ready(function () {
    // $(window).scroll(function () {
    //     var header = $('header');
    //     if ($(this).scrollTop() > 100) {
    //         header.addClass('fixed');
    //     } else { header.removeClass('fixed'); }
    // });

    $('.btnMenu').on('click', () => { $('.btnMenu, .nav').toggleClass('active') });

    $('[data-filter]').on('click', function () {
        var filterValue = $(this).addClass('active').attr('data-filter');
        $('[data-content]').hide().filter(`[data-content="${filterValue}"]`).fadeIn(300);
        $('[data-filter]').not(this).removeClass('active');
    });

    if ($(window).width() >= '999') {
        $('.wk-slider').slick({
            arrows: false,
            dots: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            // mobileFirst: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1080,
                    settings: { slidesToShow: 1, }
                },
                {
                    breakpoint: 999,
                    settings: "unslick",
                },
            ]
        });
    }
    if ($(window).width() <= '700') {
        $('.services-slider').slick({
            arrows: false,
            dots: true,
            infinite: false,
            centerMode: true,
            slidesToShow: 1,
            variableWidth: true,
            slidesToScroll: 1,
            mobileFirst: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 700,
                    settings: "unslick",
                },
            ]
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

