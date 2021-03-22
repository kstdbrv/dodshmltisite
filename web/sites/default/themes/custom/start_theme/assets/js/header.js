$ = jQuery.noConflict();

/*  всплывающее модальное окно Login */
jQuery(document).ready(function () {
  jQuery('#modal_login').modal();
});


window.addEventListener('DOMContentLoaded', e => {

  let body = document.querySelector('body');
  let menu = document.querySelector('.menu-header');
  let burger = document.querySelectorAll('.icon-menu');

   //работа c menu-header / menu-mobile
  burger.forEach(el => el.addEventListener('click', e => {
 
    burger.forEach(el => el.classList.toggle('active'));
    body.classList.toggle('lock');

    let active = document.querySelector('.icon-menu')
      .classList.contains('active');
    
    if (active) {
      menu.classList.add('menu-mobile');
      setTimeout(() => { // нужно для эффекта transision
        menu.classList.add('active');
      }, 50);

      menu.classList.remove('menu-header');
    } else {
      let menuMobile = document.querySelector('.menu-mobile');

      setTimeout(() => { // нужно для эффекта transision
        menuMobile.classList.remove('menu-mobile');
        menuMobile.classList.add('menu-header');
      }, 500); 
      
      menuMobile.classList.remove('active');
    }
  }));
  /* клик по области не меню */
  document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_burger = target == burger.length;
    let menu_is_active = menu.classList.contains('active');
    
    if (!its_menu && !its_burger && menu_is_active) {
    
      burger.forEach(el => el.classList.toggle('active'));
      menu.classList.toggle('active');
      body.classList.toggle('lock');
     /* возвращает исходное меню sesctop */
      let menuMobile = document.querySelector('.menu-mobile');
      setTimeout(() => { 
        menuMobile.classList.remove('menu-mobile');
        menuMobile.classList.add('menu-header');
      }, 500);
    }
  })

});


jQuery(document).ready(function () {
  

  jQuery('.menu-header__item_collapsed').on('click', function (e) {
    e.preventDefault();
    
    jQuery(this).toggleClass('active');
    jQuery(this).find('.submenu').slideToggle(300);
  });

});