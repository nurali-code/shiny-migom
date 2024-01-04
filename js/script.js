$(document).ready(function () {
    // $(window).scroll(function () {
    //     var header = $('header');
    //     if ($(this).scrollTop() > 100) {
    //         header.addClass('fixed');
    //     } else { header.removeClass('fixed'); }
    // });

    if ($('div').hasClass('wk-slider') && $(window).width() >= '999') {
        $('.wk-slider>').getNiceScroll().resize();
        $('.wk-slider').niceScroll({
            touchbehavior: true,
            grabcursorenabled: true,
            autohidemode: "hidden",
            emulatetouch: true,
            touchbehavior: true,
            smoothscroll: true,
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

