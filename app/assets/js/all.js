$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('open');
    });
    $('.modal').css('overflow-y', 'auto');
    $('.dropdown-toggle').dropdown();
    $('.js-arrow').click(function () {
        $(this).toggleClass('rotatearrow')
    })
    $('.js-carousel').click(function () {
        let src = $(this).attr('src');
        $('.js-carousel').css('cursor', 'pointer')
        $('.js-thumb').attr('src', src);
    })
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    AOS.init({
        once: true,
        duration: 500,
    });
});