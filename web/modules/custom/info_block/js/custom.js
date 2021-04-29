
//Национальные проекты
let nacProject = "<a 'href=https://np.krasnodar.ru/' target='_blank'><img alt='Национальные проекты' src='/modules/custom/info_block/images/banNacProjects.png'></a>";

//Культурный норматив школьника
let kultNorm = "<a href='/kult_normativ'><img alt='Культурный норматив школьника' src='/modules/custom/info_block/images/kultNorm.png' /></a>";

//Опрос населения
let oprosNasel = "<a href='https://forms.krasnodar.ru/opros-naseleniya/?municipality=2' target='_blank'><img alt='Опрос населения об эффективности деятельности руководителей органов местного самоуправления' src='/modules/custom/info_block/images/oprosNasel.jpg' /></a>";

//Опрос населения
let otzvDist = "<a href='https://forms.gle/MJGcVpzpnhetTMea7' target='_blank'><img alt='Отзыв по проведению обучения с использованием электронных и дистанционных форм обучения' src='/modules/custom/info_block/images/otzv_obuch.jpeg' /></a>";

//Опрос населения
/* let oprosPdd = "<a href='https://docs.google.com/forms/d/e/1FAIpQLSdaTDE9dRT1cavKIGBLlqcAqq4LkCpWBQ0je-0zIjMOjaPxKQ/viewform?usp=sf_link' target='_blank'><img alt='Проверка знаний основ Правил дорожного движения' src='/modules/custom/info_block/images/pdd.jpeg' /></a>"; */

//баннер для перехода на сайт переписи населения www.strana2020.ru
let populationCount = "<a href='https://www.strana2020.ru' target='_blank'><img src='/modules/custom/info_block/images/bannerPerep.jpg' alt='баннер для перехода на сайт переписи населения www.strana2020.ru' /></a>";

//баннер для перехода на сайт
let good_st = "<a href='http://do.krd.ru/content/%D0%B0%D0%BA%D1%86%D0%B8%D1%8F-%C2%AB%D0%B4%D0%BE%D0%B1%D1%80%D0%B0%D1%8F-%D1%81%D1%83%D0%B1%D0%B1%D0%BE%D1%82%D0%B0%C2%BB' target='_blank'><img src='/modules/custom/info_block/images/good_st.jpg' alt='баннер для перехода на сайт'/></a>";

let psyConsult = "<a href='/psy_consult'><img alt='Консультация психолога' src='/modules/custom/info_block/images/psyConsult.jpg'/></a>";

let content = psyConsult + good_st + populationCount + otzvDist + kultNorm + nacProject + oprosNasel;


$('.banners-custom__inner').append(content);





