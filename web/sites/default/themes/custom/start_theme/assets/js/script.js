$ = jQuery.noConflict();

 /* accordeon */
 $(document).ready(function () {

    $('.menu-main li.menu-main__item_collapsed>a').on('click', function(){
        $(this).removeAttr('href');
        let element = $(this).parent('li');
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



