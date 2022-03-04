$(document).ready(function () {
    // preloader-part
    $('#preloader').delay(2000).fadeOut();

    // slick-part
    $('#banner-part').slick({
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left left-icon"></i>',
        nextArrow:'<i class="fas fa-chevron-right right-icon"></i>',
        dots: true,
    });

    // counter-part
    $('.counter').counterUp({
        delay: 10,
        time: 5000,
    });

    // back-to-top
    $('#back-to-top').on('click', function () {
        $('body,html').animate({
            scrollTop: '0px',
        }, 2000);
    });
});