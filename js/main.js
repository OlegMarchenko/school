$(document).ready(function() {
    $(".navbar-toggler").click(function() {
        $(".navbar").slideToggle(function() {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });

    $(".carousel_slick").slick({
        dots: true,
        // autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        arrows: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }, {
            breakpoint: 801,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }]
    });

    $(".slick-news").slick({
        // autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        arrows: true,
        responsive: [{
            breakpoint: 1120,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }]
    });

    $(".slick-comment").slick({
        // autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        arrows: true,
        responsive: [{
            breakpoint: 800,
            settings: {
                dots: true,
                arrows: false
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots:true
            }
        }]
    });
    $(".slick-partners").slick({
        slidesToShow: 6,
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 5,
                arrows: false,
                dots: true
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                arrows: false,
                dots: true
            }
        }, {
            breakpoint: 1100,
            settings: {
                slidesToShow: 4,
                arrows: false,
                dots: true
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true
            }
        }, {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }]
    });
});