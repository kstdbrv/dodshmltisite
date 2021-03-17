
jQuery(document).ready(function(){
  jQuery('#modal_login').modal();
});


/* jQuery(document).ready(function () {

  jQuery('.icon-menu').click(function (event) {
    jQuery('.icon-menu,.menu-mobile__list,.menu-header').toggleClass('active');
    jQuery('body').toggleClass('lock');
  });
  
}); */


window.addEventListener('DOMContentLoaded', e => {

   //работа c menu_header menu-mobile
  let icon = document.querySelectorAll('.icon-menu');

  icon.forEach(el => el.addEventListener('click', e => {
 
    icon.forEach(el => el.classList.toggle('active'));
    document.querySelector('body').classList.toggle('lock');
   // let arr = [...icon]; // превращаем в настоящий массив

    let active = document.querySelector('.icon-menu')
      .classList.contains('active');
    
    if (active) {

      let menuHeader = document.querySelector('.menu-header');

      menuHeader.classList.add('menu-mobile');
      setTimeout(() => { // нужно для эффекта transision
        menuHeader.classList.add('active');
      }, 50);

      menuHeader.classList.remove('menu-header');
    } else {
   
      let menuMobile = document.querySelector('.menu-mobile');

      setTimeout(() => { // нужно для эффекта transision
        menuMobile.classList.remove('menu-mobile');
        menuMobile.classList.add('menu-header');
      }, 500); 
      
      menuMobile.classList.remove('active');
    }
  }));

});


jQuery(document).ready(function () {
  

  jQuery('.menu-header__item_collapsed').on('click', function (e) {
    e.preventDefault();
    
    jQuery(this).toggleClass('active');
    jQuery(this).find('.submenu').slideToggle(300);
  });

});