$ = jQuery.noConflict();
// инициализируем анамацию появления блоков
// https://wowjs.uk/docs.html
new WOW().init();
//https://animate.style/  - эффекты


$(window).scroll(function () {
     // Если отступ сверху больше 50px то показываем кнопку "Наверх"
     if ($(this).scrollTop() > 50) {
         $('.button-up').fadeIn();
     } else {
         $('.button-up').fadeOut();
     }
  
     if ($(this).scrollTop() > 50) {
      $('.button-up').fadeIn();
  } else {
      $('.button-up').fadeOut();
  }
 });
 /** При нажатии на кнопку мы перемещаемся к началу страницы */
 $('.button-up').click(function () {
     $('body,html').animate({
         scrollTop: 0
     }, 500);
     return false;
 });

/*  всплывающее модальное окно Login */

/* позволяет корректно обрабатывать все поведения что могут быть вызваны Drupal API на фронте
Например если разметка слайдера приедет через AJAX, бихейворы это поймают, а обычный JS нет */
(function ($) {
 Drupal.behaviors.modalLogin = {
  attach: function (context, settings) {
    $('#modal_login', context).once('modal-login').modal();
  }
 };
})(jQuery);

/*  https://drupal.ru/docs/videouroki/drupalbookru/88-rabota-s-javascriptjquery-v-drupal-8-chto-takoe-behaviors  */ 
/* https://druki.ru/wiki/drupal-once   c 9.2.0 */
// пример
/*  Drupal.behaviors.syfyGlobalHideMenu = {
    attach: function (context, settings) {
      $('.nav-flyout', context).once('remove-modals', function () {
        $(document).keyup(function (e) {
          if (e.keyCode == 27) {
            $('.nav-flyout', context).removeClass('js-flyout-active');
          }
        });
      });
    }
  }; */



/* accordeon */
//$ = jQuery.noConflict();
 // $(document).ready(function () {
    
        //прикрепляем клик по заголовкам
  //    $('.menu-header__item_collapsed').on('click', function (e) {
  //      e.preventDefault();
    
  //      $(this).toggleClass('active'); /* поворот галочки */
  //      $('.menu-header__item_collapsed').not($(this)).removeClass('active');
       //скрываем все кроме того, что должны открыть
  //     $('.menu-header__item_collapsed').not($(this)).find('.submenu').slideUp(300)//;
       // открываем или скрываем блок под заголовком, по которому кликнули
  //      $(this).find('.submenu').slideToggle(300);
  //    });
       
  //  });


/* toggle */
// $ = jQuery.noConflict();
/*     jQuery('.menu-header__item_collapsed').on('click', function (e) {
      e.preventDefault();
      
      jQuery(this).toggleClass('active');
      jQuery(this).find('.submenu').slideToggle(300);
  
  
    }); */

    (function ($) {
      // при клике удаляет placeholder
      Drupal.behaviors.hidePlaceholder = {
       attach: function (context, settings) {
         $('input, texterea', context).once('hide-placeholder').each(function(){
          
          var _this = $(this);
          $(this).on("click", function(){
            var __this = $(this);
            var placeholder = __this.attr('placeholder');
            __this.attr('placeholder', "");
            _this.attr('data-placeholder', placeholder)
          }).blur(function(){
            var __this = $(this);
            var placeholder = __this.attr('data-placeholder');
            __this.attr('placeholder', placeholder);
          })

         });
       }
      };
     })(jQuery);

 /**
 * @file
 * Mobile menu behaviors.
 */

//(function(Drupal) {
//
//  Drupal.behaviors.dlogMobileMenu = {
//    attach: function(context, settings) {
//      let toggler = context.querySelector('.mobile-menu-toggle:not(.//menu-toggle--processed)');
//      let mobileMenu = context.querySelector('.header-mobile__content');
//
//      if (toggler && mobileMenu) {
//        toggler.addEventListener('click', e => {
//          this.toggle(e, mobileMenu);
//        });
//        toggler.classList.add('menu-toggle--processed');
//      }
//    },
//
//    toggle: function(event, mobileMenu) {
//      event.target.classList.toggle('header-mobile__menu-button--active');
//      mobileMenu.classList.toggle('header-mobile__content--active');
//    },
//  };
//
//})(Drupal);





