//add - прибавляем к дате сколько то дней
moment.locale('ru');

// console.log(moment().format('DD.MMMM.YYYY'));
// console.log(moment([2018, 11, 31]).format('DD.MM.YYYY'));
// console.log(moment('2015/04/16', 'YYYY/MM/DD').format('DD. MMMM .YYYY'));
//
function date(a, b, v) {
    var d = {
        years: a,
        days: b,
        months: v
    };
    return d;
}

var c = date(2003, 15, 4);
console.log(moment(c).format('DD.MMMM.YYYY'));

var format = 'DD.MM.YYYY';

var m = moment();

// console.log(moment(date).add(31, 'days').format(format));
//получить количество дней в месяце
// console.log(moment("2018-02", "YYYY-MM").daysInMonth());
