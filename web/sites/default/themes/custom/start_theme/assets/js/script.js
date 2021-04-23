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
 });
 /** При нажатии на кнопку мы перемещаемся к началу страницы */
 $('.button-up').click(function () {
     $('body,html').animate({
         scrollTop: 0
     }, 500);
     return false;
 });



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



