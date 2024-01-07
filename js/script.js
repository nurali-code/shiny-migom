$(document).ready(function () {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, { relativeInput: true });

    new Textify();
    const section1 = new Textify({
        selector: ".js-textify",
        once: true,
        scale: .1,
        rotation: 20,
        easing: "ease",
        fade: false,
        duration: 1000
    });

    AOS.init({ duration: 1200, offset: 100, });

    $('.dropdown__btn').on('click', function () {
        $('.dropdown__text').slideUp();
        if ($(this).hasClass('active')) {
            $('.dropdown__btn, .dropdown__text').removeClass('active');
        } else {
            $('.dropdown__btn, .dropdown__text').removeClass('active');
            $(this).addClass('active').next('.dropdown__text').slideDown();
        }
    })

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 300,)
    });


    if ($(window).width() <= '1000') {
        function menuToggle() {
            $('.btnMenu, .nav, body').toggleClass('active')
            $('.btnMenu').hasClass('active') ? $('.header').before('<div class="overlay"></div>') : $('.overlay').remove();
        } $(document).on('click', '.btnMenu, .overlay, .nav a', () => { menuToggle() })
    }

    $('[data-filter]').on('click', function () {
        var filterValue = $(this).addClass('active').attr('data-filter');
        $('[data-content]').hide().filter(`[data-content="${filterValue}"]`).fadeIn(300);
        $('[data-filter]').not(this).removeClass('active');
    });


    if ($(window).width() >= '999') {
        var scene2 = document.getElementById('scene2');
        var parallaxInstance2 = new Parallax(scene2, { relativeInput: true });
        var scene3 = document.getElementById('scene3');
        var parallaxInstance3 = new Parallax(scene3, { relativeInput: true });
        $('.wk-slider').slick({
            arrows: false,
            dots: false,
            infinite: false,
            slidesToShow: 2,
            touchThreshold: 7,
            slidesToScroll: 1,
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

});

