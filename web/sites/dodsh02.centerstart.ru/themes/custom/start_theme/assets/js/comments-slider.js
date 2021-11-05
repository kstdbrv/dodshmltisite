$ = jQuery.noConflict();

$(document).ready(function () {
  $('#block-views-block-comments .view-content').slick({
    speed:700,
    infinite: true,
    /* autoplay: true, */
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    prevArrow: '<button class="slick-prev slick-arrow"></button>',
    nextArrow: '<button class="slick-next slick-arrow"></button>',
          responsive: [
           {
             breakpoint: 768,
             settings: {
               arrows: false,
               dots: true,
             }
           },
         ] 
  });

});