$ = jQuery.noConflict();

$(document).ready(function () {
  $('#block-views-block-comments .view-content').slick({
    speed: 500,
    infinite: true,
    autoplay: true,
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



