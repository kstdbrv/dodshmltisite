$ = jQuery.noConflict();
/* slick for banners */
$(document).ready(function () {

  if ($(window).width() > 1045) {
    // если админка, увеличиваем timout 
    if ($('#toolbar-administration').length) { 

      setTimeout(function () {
      
        jQuery('.banners-custom__inner').slick({
          infinite: true,
          autoplay: true,
          slidesToShow: 1,
          arrows: false,
          dots: false,
          centerMode: true,
          variableWidth: true,
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
          infinite: true,
          autoplay: true,
          slidesToShow: 1,
          arrows: false,
          dots: false,
          centerMode: true,
          variableWidth: true,
        });
      }, 500);
    }
  }


  if ($(window).width() < 1045) {
    setTimeout(function () {
      jQuery('.banners-custom__inner').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        variableWidth: true
      });
    }, 500);
  }
});