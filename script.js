//add - прибавляем к дате сколько то дней
moment.locale('ru');

function date(b, v) {
    var d = {
        years: 2018,
        days: b,
        months: v
    };
    return d;
}

// var date = date(5, 4);
// console.log(moment(date).format('dddd.MMMM.YYYY'));

var format = 'DD.MM.YYYY';

var m = moment();


function cv(a,b) {
    var h = a + "-" + b;
    return h;
}
// получаем колличество месяцев в месяце
var c = moment(cv(2018, 2), "YYYY-MM").daysInMonth();


var vre = [];
for (var i = 1; i <= c; i++){
    if(moment(date(i,0)).format('dddd') == 'суббота'){
        vre.push(moment(date(i,0)).format('DD'));
    }

}

for (var c = 0; c < vre.length; c++){
    console.log(vre[c]);
}