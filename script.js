$(document).ready(function () {
    //add - прибавляем к дате сколько то дней
    moment.locale('ru');
var lichSostav = [
  "Шишкин Алексей Викторович",
  "Козлов Николай Николаевич",
  "Аникин Михаил Михайлович",
  "Гладышев Руслан Анатольевич",
  "Золотов Денис Юрьевич",
  "Исенко Игорь Владимирович",
  "Шамаков Андрей Леонидович",
  "Архипов Виталий Викторович",
  "Щеголихин Валерий Олегович"
];

// ФУНКЦИЯ ВОЗВРАЩАЕТ ОБЪЕКТ С ГОДОМ, ДНЕМ И МЕСЯЦЕМ
    function date(d, m) {
        var d = {
            years: 2018,
            days: d,
            months: m // месяц начинаеться с нуля(январь это число 0)
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
    var c, cntIdTabs, idTabs, id, aId, ty, aHref, idd;
//
//
    // добавляет даты
    function addDate(date, m, c) {
        $(".accordion").append("<p class='qaz'>" + date +  " " + m + "</p>");
        $(".accordion").append("<div class='bl'></div>");
    }

    //
    function sub(mon, month) {
        c = 0;
        for (var i = 1; i <= mon; i++) {
            if (moment(date(i, month)).format('dddd') == 'суббота') {
              arraySub[c] = moment(date(i, month)).format('DD');
              ty = moment(date(i, month)).format('MMMM');
              addDate(arraySub[c], ty, c);
              instructAdd();
              c++;
            }
        }
    }
    function nazPhd(mon, month) {
        sub(mon, month);
        month++;
    }
    function test(aId) {
        cntIdTabs = aId;
             idTabs = "tabs-"+cntIdTabs;
             id = "#"+idTabs;
            $("#tabs").append("<div id=" + idTabs + "></div>");
            $(id).append("<div class='accordion'></div>");
            var h = aId - 1;
            nazPhd(mon, h);
            cntIdTabs++;
    }

    // добавляет инструктаров в блоки
    function instructAdd() {
        for(var i = 0; i < lichSostav.length; i++){
            if(i == 0)
                $(".bl").html("<p>" + lichSostav[i] + "</p>");
            else{
                $(".bl").append("<p>" + lichSostav[i] + "</p>");
            }
        }
    }


    // function ret(h) {
    //     $("p").click(function () {
    //         $(this).each(function () {
    //             var va = $(this).attr('id');
    //             $.ajax(
    //                 {
    //                     url: 'fun.php',
    //                     type:'post',//get
    //                     data: {"id":va, "ii":h},
    //                     success:function (d_data,s) {
    //                         var result = $.parseJSON(d_data);
    //                         alert(result);
    //                     }
    //                 }
    //             );
    //         })
    //     })
    // }
//

//     // jqueryUi
    $(".qaz").button();


    $("#tabs").tabs();

    $('a').click(function () {
        $(this).each(function () {
            aHref = $(this).attr('href');

            if(aHref.length == 7){
                aId = aHref.substr(-1);
                idd = "#tabs-"+aId;
                $(idd).empty();
            }else if(aHref.length == 8){
                aId = aHref.substr(-2);
                idd = "#tabs-"+aId;
                $(idd).empty();
            }
            test(aId);
        });
        $( ".accordion" ).accordion({
            active: false,
            collapsible: true,
            heightStyle: "content"
        });

        // получаем день, месяц и ФИО
        $('.bl > p').click(function () {
            $(this).each(function () {
                // получаем id блока с названием месяца (например tabs-1)
                var tabs = $(this).closest("[id ^= tabs-]").attr("id");
                // получаем ФИО
                var fio = $(this).text();
                var text = $(this).parent().prev().text();

                $.ajax(
                    {
                        url: 'fun.php',
                        type:'post',//get
                        data: {
                            "tabs":tabs,
                            "fio":fio,
                            "text":text
                        },
                        success:function (d_data,s) {
                            var result = $.parseJSON(d_data);
                            alert(result);
                        }
                    }
                );
            });
        });
    });

});