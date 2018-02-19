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
//     function sub(mon, month) {
//         var c = 0;
//         for (var i = 1; i <= mon; i++) {
//             if (moment(date(i, month)).format('dddd') == 'суббота') {
//                 arraySub[c] = moment(date(i, month)).format('DD');
//                 $("#tabs-1").append("<p class='qaz ui-button ui-corner-all ui-widget'>" + arraySub[c] + "</p>");
//                 c++;
//             }
//         }
//         return arraySub;
//     }
    function sub(mon, month, h) {
        var c = 0;
        for (var i = 1; i <= mon; i++) {
            if (moment(date(i, month)).format('dddd') == 'суббота') {
                arraySub[c] = moment(date(i, month)).format('DD');
                $(h).append("<p class='qaz ui-button ui-corner-all ui-widget'>" + arraySub[c] + "</p>");
                c++;
            }
        }
        // return arraySub;
    }

// for (var cnt = 0; cnt < yymm.length; cnt++){
//     console.log(arraySub[cnt]);
// }
    $('a').click(function () {
        if ($(this).attr('href') == '#tabs-1') {
            $("#tabs-1").empty();
            $("#tabs-1").append("<h3>Выберите субботу</h3>");
            var h = "#tabs-1";
            sub(mon, 0, h);
        } else if ($(this).attr('href') == '#tabs-2') {
            $("#tabs-2").empty();
            $("#tabs-2").append("<h3>Выберите субботу</h3>");
            var h = "#tabs-2";
            sub(mon, 1, h);
        } else if ($(this).attr('href') == '#tabs-3') {
            $("#tabs-3").empty();
            $("#tabs-3").append("<h3>Выберите субботу</h3>");
            var h = "#tabs-3";
            sub(mon, 2, h);
        } else if ($(this).attr('href') == '#tabs-4') {
            $("#tabs-4").empty();
            $("#tabs-4").append("<h3>Выберите субботу</h3>");
            var h = "#tabs-4";
            sub(mon, 3, h);
        } else if ($(this).attr('href') == '#tabs-5') {
            $("#tabs-5").empty();
            $("#tabs-5").append("<h3>Выберите субботу</h3>");
            var h = "#tabs-5";
            sub(mon, 4, h);
        } else if ($(this).attr('href') == '#tabs-6') {
            $("#tabs-6").empty();
            $("#tabs-6").append("<h3>Выберите субботу</h3>");
            var h = "#tabs-6";
            sub(mon, 5, h);
        } else if ($(this).attr('href') == '#tabs-7') {
            $("#tabs-7").empty();
            $("#tabs-7").append("<h3>Выберите субботу</h3>");
            var h = "#tabs-7";
            sub(mon, 6, h);
        } else if ($(this).attr('href') == '#tabs-8') {
            $("#tabs-8").empty();
            $("#tabs-8").append("<h3>Выберите субботу</h3>");
            var h = "#tabs-8";
            sub(mon, 7, h);
        } else if ($(this).attr('href') == '#tabs-9') {
            $("#tabs-9").empty();
            $("#tabs-9").append("<h3>Выберите субботу</h3>");
            var h = "#tabs-9";
            sub(mon, 8, h);
        } else if ($(this).attr('href') == '#tabs-10') {
            $("#tabs-10").empty();
            $("#tabs-10").append("<h3>Выберите субботу</h3>");
            var h = "#tabs-10";
            sub(mon, 9, h);
        } else if ($(this).attr('href') == '#tabs-11') {
            $("#tabs-11").empty();
            $("#tabs-11").append("<h3>Выберите субботу</h3>");
            var h = "#tabs-11";
            sub(mon, 10, h);
        } else if ($(this).attr('href') == '#tabs-12') {
            $("#tabs-12").empty();
            $("#tabs-12").append("<h3>Выберите субботу</h3>");
            var h = "#tabs-12";
            sub(mon, 11, h);
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