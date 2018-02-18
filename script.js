$(document).ready(function () {
    //add - прибавляем к дате сколько то дней
    moment.locale('ru');

// ФУНКЦИЯ ВОЗВРАЩАЕТ ОБЪЕКТ С ГОДОМ, ДНЕМ И МЕСЯЦЕМ
    function date(d, m) {
        var d = {
            years: 2018,
            days: d,
            months: m // месяц начинаеться с нуля
        };
        return d;
    }

    var format = 'DD.MM.YYYY';
    var m = moment();

    function yM(y, mon) {
        var yearMont = y + "-" + mon;
        return yearMont;
    }

//  колличество ДНЕЙ в месяце
    var mon = moment(yM(2018, 1), "YYYY-MM").daysInMonth();
    var arraySub = {};
    var month = 0;

// субботы месяца
    function sub(mon, month) {
        var c = 0;
        for (var i = 1; i <= mon; i++) {
            if (moment(date(i, month)).format('dddd') == 'суббота') {
                arraySub[c] = moment(date(i, month)).format('DD');
                c++;
            }
        }
        return arraySub;
    }

// for (var cnt = 0; cnt < yymm.length; cnt++){
//     console.log(arraySub[cnt]);
// }
    $('a').click(function () {
        if ($(this).attr('href') == '#tabs-1') {
            var yymm = sub(28, 0);
            var leng = 0;
            for (var s in yymm) {
                leng++;
            }
            $("#tabs-1").empty();
            $("#tabs-1").append("<h3>Выберите субботу</h3>");
            for (var cnt = 0; cnt < leng; cnt++) {
                $("#tabs-1").append("<p class='qaz ui-button ui-corner-all ui-widget'>" + arraySub[cnt] + "</p>");

                // console.log(arraySub[cnt]);
            }
        } else if ($(this).attr('href') == '#tabs-2') {
            var yymm = sub(28, 1);
            var leng = 0;
            for (var s in yymm) {
                leng++;
            }
            $("#tabs-2").empty();
            $("#tabs-2").append("<h3>Выберите субботу</h3>");
            for (var cnt = 0; cnt < leng; cnt++) {
                $("#tabs-2").append("<p class='qaz ui-button ui-corner-all ui-widget'>" + arraySub[cnt] + "</p>");

                // console.log(arraySub[cnt]);
            }
        }
    });

    // jqueryUi
    $(".qaz").button();

    $('.qaz').click(function () {
        if ($(".splin").css('display') == 'none')
            $(".splin").show();
        else
            $(".splin").hide();
    });

    $("#tabs").tabs();
});