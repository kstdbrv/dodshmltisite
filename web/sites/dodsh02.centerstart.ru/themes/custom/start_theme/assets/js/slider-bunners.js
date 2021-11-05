$ = jQuery.noConflict();
/* slick for banners */
$(document).ready(function () {

  if ($(window).width() > 1045) {
    // если админка, увеличиваем timout 
    if ($('#toolbar-administration').length) { 
      setTimeout(function () {
        jQuery('.banners-custom__inner').slick({
          speed: 500,
          infinite: true,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 2000,
          vertical: true,
          slidesToShow: 1,
          arrows: false,
          dots: true,
          verticalSwiping: true
        });
          // mousewheel on   // прокрутка мышкой
         let slider = $(".banners-custom__inner");
  
         slider.on('wheel', (function (e) {
          e.preventDefault();
  
         if (e.originalEvent.deltaY < 0) {
           $(this).slick('slickNext');
         } else {
           $(this).slick('slickPrev');
         }
        }));
      }, 2000);
    } else {
      setTimeout(function () {
        jQuery('.banners-custom__inner').slick({
          speed: 500,
          infinite: true,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 2000,
          vertical: true,
          slidesToShow: 1,
          arrows: false,
          dots: true,
          verticalSwiping: true
        });
      }, 500);
    }
  }

  if ($(window).width() < 1045) {
    setTimeout(function () {
      jQuery('.banners-custom__inner').slick({
        speed: 500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        arrows: false,
        dots: true,
            responsive: [
           {
            breakpoint: 995,
             settings: {
              slidesToShow: 2,
             }
            },
            {
            breakpoint: 700,
             settings: {
              slidesToShow: 1,
              adaptiveHeight: true,
             }
            },
        ]
      });
  
    }, 500);
  }
});