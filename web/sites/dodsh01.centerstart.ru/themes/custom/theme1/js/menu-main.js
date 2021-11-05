
$ = jQuery.noConflict();

/* accordeon for main-menu */
$(document).ready(function () {

   $('.main-menu li.main-menu__item_collapsed>a').on('click', function(){
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
/* toggle for main-menu */
$(document).ready(function () {

  if ($(window).width() < 1045) {
    $('#block-menyu-menu').on('click', function () {
      $(this).siblings().slideToggle(400);
     $('#block-tretemenyu-menu-menu').siblings().slideToggle(400);
      $(this).toggleClass('active');
    });
  }

});


/* раскрывает главное меню, если открыты страницы */
const slideDownFirstBar = () => {
  console.log('slideDownFirstBar')
  $('.main-menu').children().first().toggleClass('active');
  $('.main-menu .submenu').first().slideDown(0);
}
const slideDownSecondBar = () => {
  console.log('slideDownSecondBar')
  $('.main-menu').children().eq(1).toggleClass('active');
  $('.main-menu').children().eq(1).find('.main-menu.submenu').slideDown(0);
}
const slideDownTherdBar = () => {
  $('.main-menu').children().eq(7).toggleClass('active');
  $('.main-menu').children().eq(7).find('.main-menu.submenu').slideDown(0);
}

const firstBarLinks = [
  '/sveden/education', '/sveden/common', '/sveden/struct', '/sveden/document', '/sveden/eduStandarts',
  '/sveden/employees', '/sveden/objects', '/sveden/grants', '/sveden/paid_edu', '/sveden/budget',
  '/sveden/vacant', '/sveden/ovz', '/sveden/inter'
]
firstBarLinks.forEach(link => link === window.location.pathname ? slideDownFirstBar() : null)

const secondBarLinks = [
  '/normativnye-dokumenty', '/attestaciya-v-celyakh-podtverzhdeniya-sootvetstviya-zanimaemoy-dolzhnosti',
  '/rezultaty-professionalnoy-deyatelnosti-pedagogicheskikh-rabotnikov-attestuemykh-v-celyakh'
]
secondBarLinks.forEach(link => link === window.location.pathname ? slideDownSecondBar() : null)
  
const therdBarLinks = [
  '/detskie-bezopasnye-sayty',
  '/lokalnye-normativnye-akty-v-sfere-obespecheniya-informacionnoy-bezopasnosti-obuchayuschikhsya',
  '/normativnoe-regulirovanie', '/obuchayuschimsya', '/pedagogicheskim-rabotnikam', '/parents'

]
therdBarLinks.forEach(link => link === window.location.pathname ? slideDownTherdBar() : null)