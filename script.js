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
                $(h).append("<p id=" + arraySub[c] + " class='qaz ui-button ui-corner-all ui-widget'>" + arraySub[c] + "</p>");
                c++;
            }
        }
        // return arraySub;
    }

    function ret(h) {
        $("p").click(function () {
            $(this).each(function () {
                var va = $(this).attr('id');
                $.ajax(
                    {
                        url: 'fun.php',
                        type:'post',//get
                        data: {"id":va, "ii":h},
                        success:function (d_data,s) {
                            var result = $.parseJSON(d_data);
                            alert(result);
                        }
                    }
                );
            })
        })
    }

// for (var cnt = 0; cnt < yymm.length; cnt++){
//     console.log(arraySub[cnt]);
// }
    function gh(gj) {
        var t = "#tabs-"+gj;
        $(t).empty();
        $(t).append("<h3>Выберите субботу</h3>");
        var h = t;
        var hj = gj - 1;
        sub(mon, hj, h);
    }
    $('a').click(function () {
        $(this).each(function () {
            var number = $(this).attr('href');
            $("t").empty();
            if(number.length == 7){
                var tyu = number.substr(-1);
            }else if(number.length == 8){
                var tyu = number.substr(-2);
            }
            gh(tyu);
        })

    })

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