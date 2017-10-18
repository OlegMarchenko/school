$(document).ready(function() {
    $(".navbar-toggler").click(function() {
        $(".navbar").slideToggle(function() {
            "none" === $(this).css("display") && $(this).removeAttr("style");
        });
    }), $(".carousel_slick").slick({
        dots: !0,
        autoplaySpeed: 3e3,
        slidesToShow: 2,
        arrows: !0,
        responsive: [ {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 801,
            settings: {
                slidesToShow: 1,
                arrows: !1
            }
        } ]
    }), $(".slick-news").slick({
        autoplaySpeed: 3e3,
        slidesToShow: 3,
        arrows: !0,
        responsive: [ {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                arrows: !1
            }
        } ]
    }), $(".slick-comment").slick({
        autoplaySpeed: 3e3,
        slidesToShow: 1,
        arrows: !0,
        responsive: [ {
            breakpoint: 800,
            settings: {
                dots: !0,
                arrows: !1
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                arrows: !1
            }
        } ]
    }), $(".slick-partners").slick({
        slidesToShow: 5,
        arrows: !0,
        variableWidth: !0
    });
});