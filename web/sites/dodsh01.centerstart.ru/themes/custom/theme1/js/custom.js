$ = jQuery.noConflict();

$('.vs_panel').addClass('bvi-open');
$('.vs_voice').addClass('bvi-voice');

/*Форма поиска во всплывающем окне*/
 $(".oo .search-block-form .form-search").focus(function () {
            $('.key').addClass('big_search');
        }).blur(function () {
            $('.key').removeClass('big_search');
        });
/*Добавление Текста к полю поиска по сайту*/
$('.oo .vs .form-search').attr("placeholder", "Поиск");

$(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });
    
    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
$("table").wrap("<div class='wrap_table'></div>");



