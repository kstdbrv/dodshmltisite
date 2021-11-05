$ = jQuery.noConflict();


window.addEventListener('DOMContentLoaded', e => {

  let body = document.querySelector('body');
  let menu = document.querySelector('.menu-header');
  let burger = document.querySelectorAll('.icon-menu');

   //работа c menu-header / menu-mobile
  burger.forEach(el => el.addEventListener('click', e => {

    /* window.scroll(0, 110); */
 
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
      e.preventDefault();
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
  });

});

 /* accordeon */
$(document).ready(function () {

  if ($(window).width() < 1495) {
  
    $('.menu-header').attr('id', 'menu-mobile');
  }

  $('#menu-mobile li.menu-header__item_collapsed>a').on('click', function () {
     
      $(this).removeAttr('href');
      var element = $(this).parent('li');
      if (element.hasClass('active')) {
        element.removeClass('active');
        element.find('li').removeClass('active');
        element.find('ul').slideUp();
      }
      else {
        element.addClass('active');
        element.children('ul').slideDown();
        element.siblings('li').children('ul').slideUp();
        element.siblings('li').removeClass('active');
        element.siblings('li').find('li').removeClass('active');
        element.siblings('li').find('ul').slideUp();
      }
  });


     /* меняем место при адаптиве */
  if ($(window).width() < 1450) {
    $('.center-header__contacts').appendTo('#menu-mobile');
  }

  if ($(window).width() < 555) {
      $('#block-views-block-social-links').appendTo('#menu-mobile');
  }

});



if ($(window).width() > 1450) {

  $('.menu-header.submenu').mouseover(function () {

    $(this).parent().css('background-color', '#569797');
  
    $(this).parent().children().css('color', '#fff');
  });
  
  $(".menu-header.submenu").mouseout(function () {
  
    $(this).parent().css('background-color', '');
  
    $(this).parent().children().css('color', '');
  });
};




