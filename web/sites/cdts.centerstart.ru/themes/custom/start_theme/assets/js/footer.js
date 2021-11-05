$ = jQuery.noConflict();

/* toggle for menu-footer */
$(document).ready(function () {

  if ($(window).width() < 1275) {
  
    $('#block-contacts-menu').on('click', function () {

      $(this).siblings().slideToggle(400);
      $('.view-head-info').slideToggle(400);
      $(this).toggleClass('active');

    });
  }

});