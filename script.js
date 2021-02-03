" use strict ";

let money = +prompt('Ваш месячный доход?', 100000),
    income = 'freelance',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Еда, проезд, налоги'),
    deposit = confirm('Есть ли у вас депозит в банке ?'),
    mission = 500000,
    period = 6;

let showTypeOf = function (data) {
    console.log(data, typeof (data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(income.length);





let expenses1 = prompt('Введите обязательную статью расходов?', 'еда, проезд, налоги');
console.log(expenses1.split(' '));
let amount1 = +prompt('Во сколько это обойдется?', 10000);
console.log(amount1);
let expenses2 = prompt('Введите ещё какой-нибудь обязательную статью расходов?', 'коммуналка, кредит ');
console.log(expenses2.split(', '));
let amount2 = +prompt('Во сколько это обойдется?', 10000);
console.log(amount2);








// 1-задание

function getExpensesMonth() {
    return amount1 + amount2;
}
getExpensesMonth();

// 2-3-задание
let accumulatedMonth;
function getAccumulatedMonth() {
    accumulatedMonth = money - amount1 - amount2;
}
getAccumulatedMonth();
console.log(accumulatedMonth);

// 4-задание

function getTargetMonth() {
    result = mission / accumulatedMonth;
}
getTargetMonth();
console.log('Цель будет достигнута за ' + Math.ceil(result) + ' месяцев(-а)');
// удалил budgetMonth
let budgetDay;

const summ = function (a, b) {
    budgetDay = a / b;
}
summ(accumulatedMonth, 30);
console.log('Бюджет на день ' + Math.floor(budgetDay) + ' рублей');

let getStatusIncome = function () {
    switch (true) {
        case (budgetDay) > 1200:
            console.log('У вас высокий уровень дохода');
            break;
        case (budgetDay) > 600 && (budgetDay) < 1200:
            console.log('У вас средний уровень дохода');
            break;
        case (budgetDay) < 600 && (budgetDay) > 0:
            console.log('К сожалению у вас уровень дохода ниже среднего');
            break;
        case (budgetDay) > 0 && (budgetDay) === 600 && (budgetDay) < 1200:
            console.log('К какому уровню не важно');
            break;
        default:
            console.log('Что то пошло не так');
            break;
    }
};
getStatusIncome();