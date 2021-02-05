" use strict ";

let money,

    start = function () {
        do {
            money = +prompt('Ваш месячный доход?', 50000);
        }
        while (isNaN(money) || money === '' || money === null)
    };
start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 100000,
    period: 6,
    asking: function () {
        let addExpenses = prompt('Перечилите возможные расходы через запятую!'); appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }
};
console.log(appData);

appData.getTargetMonth = function () {

    return mission / appData.accumulatedMonth;

};
let showTypeof = function (item) {
    console.log(typeof item);
};
showTypeof(money);
showTypeof(appData.income);
showTypeof(appData.deposit);



let income = 'freelance',
    mission = 500000,
    period = 6;
// 1-задание
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let expenses = [];
appData.getExpensesMonth = function () {
    let sum = 0;
    do {
        expenses[sum] = prompt('Введите обязательную статью расходов?');
        sum = +prompt('Во сколько это обойдется?', 1000);

        sum++;
    } while (isNumber(sum), sum < 2);
    console.log(expenses);
    return sum;
};


appData.expensesAmount = appData.getExpensesMonth();
console.log('Расходы на месец: ' + appData.expensesAmount);

// 2-3-задание

appData.getAccumulatedMonth = function () {
    return money - appData.getExpensesMonth();
};

appData.accumulatedMonth = appData.getAccumulatedMonth();

console.log(appData.accumulatedMonth);

// 4-задание


appData.getTargetMonth();

if (appData.getTargetMonth() > 0) {
    console.log('Цель будет достигнута за ' + Math.floor(appData.getTargetMonth()) + ' месяцев(-а)');
} else if (appData.getTargetMonth() <= 0) {
    console.log('Цель не будет достигнута');
} else { console.log('код не работает'); }




// удалил budgetMonth
appData.budgetDay = appData.accumulatedMonth / 30;

console.log('Бюджет на день ' + Math.floor(appData.budgetDay) + ' рублей');

let getStatusIncome = function () {
    switch (true) {
        case (appData.budgetDay) > 1200:
            console.log('У вас высокий уровень дохода');
            break;
        case (appData.budgetDay) > 600 && (budgetDay) < 1200:
            console.log('У вас средний уровень дохода');
            break;
        case (appData.budgetDay) < 600 && (budgetDay) > 0:
            console.log('К сожалению у вас уровень дохода ниже среднего');
            break;
        case (appData.budgetDay) > 0 && (appData.budgetDay) === 600 && (appData.budgetDay) < 1200:
            console.log('К какому уровню не важно');
            break;
        default:
            console.log('Что то пошло не так');
            break;
    }
};
getStatusIncome();