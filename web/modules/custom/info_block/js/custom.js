//75 лет победы
/*function countdown(dateEnd) {
  var timer, days, hours, minutes, seconds;

  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();

  if (isNaN(dateEnd)) {
    return;
  }

  timer = setInterval(calculate, 1000);

  function calculate() {
    var dateStart = new Date();
    var dateStart = new Date(dateStart.getUTCFullYear(),
      dateStart.getUTCMonth(),
      dateStart.getUTCDate(),
      dateStart.getUTCHours(),
      dateStart.getUTCMinutes(),
      dateStart.getUTCSeconds());
    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);


      document.getElementById("days").innerHTML = parseInt(days, 10) + ' :';
      document.getElementById("hours").innerHTML = ("0" + hours).slice(-2) + ' :';
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2) + ' :';
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }

  function display(days, hours, minutes, seconds) {}
}

countdown ('05/08/2020 09:00:00 PM');
*/
let pobeda75 = ( '<div class="wrap_timer">' + '<div class="timer_img"></div>' + '</div>'
    );
$(".oo .right_sidebar").before(pobeda75);



//Национальные проекты
let nacProject = "<div><a href='https://np.krasnodar.ru/' target='_blank' style='border: none !important;'><img id='nacProject' alt='Национальные проекты' data-align='center' data-entity-type='file' data-entity-uuid='a47168eb-26ba-44b9-85b1-16c8cabc7bc8' src='/modules/custom/info_block/images/banNacProjects.png' style='border: 1px solid #DDDDDD; margin-bottom: 30px; width: 100%; max-width: 260px; margin-left:auto; margin-right:auto;' /></a></div>";

//Культурный норматив школьника
let kultNorm = "<div><a href='/kult_normativ' style='border: none !important;'><img id='kultNorm' alt='Культурный норматив школьника' data-align='center' data-entity-type='file' data-entity-uuid='a47168eb-26ba-44b9-85b1-16c8cabc7bc8' src='/modules/custom/info_block/images/kultNorm.png' style='border: 1px solid #DDDDDD; margin-bottom: 30px; width: 100%; max-width: 260px; margin-left:auto; margin-right:auto;' /></a></div>";

//Опрос населения
let oprosNasel = "<div><a href='https://forms.krasnodar.ru/opros-naseleniya/?municipality=2' target='_blank' style='border: none !important;'><img id='oprosNasel' alt='Опрос населения об эффективности деятельности руководителей органов местного самоуправления' data-align='center' src='/modules/custom/info_block/images/oprosNasel.jpg' style='border: 1px solid #DDDDDD; margin-bottom: 30px; width: auto; max-width: 260px; margin-left:auto; margin-right:auto;' /></a></div>";

//Опрос населения
let otzvDist = "<div><a href='https://forms.gle/MJGcVpzpnhetTMea7' target='_blank' style='border: none !important;'><img id='otzvDist' alt='Отзыв по проведению обучения с использованием электронных и дистанционных форм обучения' data-align='center' src='/modules/custom/info_block/images/otzv_obuch.jpeg' style='border: 1px solid #DDDDDD; margin-bottom: 30px; max-width: 260px;' /></a></div>";

//Опрос населения
//let oprosPdd = "<div><a href='https://docs.google.com/forms/d/e/1FAIpQLSdaTDE9dRT1cavKIGBLlqcAqq4LkCpWBQ0je-0zIjMOjaPxKQ/viewform?usp=sf_link' target='_blank' style='border: none !important;'><img id='oprosNasel' alt='Проверка знаний основ Правил дорожного движения' data-align='center' src='/modules/custom/goodbanners/bannersImg/pdd.jpeg' style='border: 1px solid #DDDDDD; margin-bottom: 30px; width: auto; max-width: 260px; margin-left:auto; margin-right:auto;' /></a></div>";

//баннер для перехода на сайт переписи населения www.strana2020.ru
let populationCount = "<div><a href='https://www.strana2020.ru' target='_blank'><img src='/modules/custom/info_block/images/bannerPerep.jpg' alt='баннер для перехода на сайт переписи населения www.strana2020.ru' style='border: 1px solid #DDDDDD; margin-bottom: 30px; width: auto; max-width: 260px; margin-left:auto; margin-right:auto;'></a></div>";

//баннер для перехода на сайт
let good_st = "<div><a href='http://do.krd.ru/content/%D0%B0%D0%BA%D1%86%D0%B8%D1%8F-%C2%AB%D0%B4%D0%BE%D0%B1%D1%80%D0%B0%D1%8F-%D1%81%D1%83%D0%B1%D0%B1%D0%BE%D1%82%D0%B0%C2%BB' target='_blank'><img src='/modules/custom/info_block/images/good_st.jpg' alt='баннер для перехода на сайт' style='border: 1px solid #DDDDDD; margin-bottom: 30px; width: auto; max-width: 260px; margin-left:auto; margin-right:auto;'></a></div>";

let psyConsult = "<div><a href='/psy_consult'><img alt='Консультация психолога' src='/modules/custom/info_block/images/psyConsult.jpg' style='border: 1px solid #DDDDDD; margin-bottom: 30px; width: 100%; max-width: 260px; margin-left:auto; margin-right:auto;' /></a></div>";

let content = psyConsult + good_st + populationCount + otzvDist + kultNorm + nacProject + oprosNasel + pobeda75;


$('.banners-custom').html(content);





