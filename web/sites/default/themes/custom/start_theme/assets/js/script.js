console.log('works')

jQuery(document).ready(function(){
  jQuery('#modal_login').modal();
});



jQuery(document).ready(function(){
  jQuery('.datepicker').datepicker();
});


jQuery(document).ready(function () {

  jQuery('.icon-menu').click(function (event) {
    jQuery('.icon-menu,.menu-mobile__list').toggleClass('active');
    jQuery('body').toggleClass('lock');
  });
  
});
