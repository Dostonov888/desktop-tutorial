" use strict ";
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    income = 'freelance',
    deposit = confirm('Есть ли у вас депозит в банке ?'),
    mission = 500000,
    period = 6;

let showTypeOf = function (item) {
    console.log(typeof item);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);



let start = function () {
    do {
        money = +prompt('Ваш месячный доход?');
    }
    while (!isNumber(money)); {
        console.log(money);
    }
};

start();

let addExpenses = prompt('Перечилите возможные расходы через запятую!');
console.log(addExpenses.toLowerCase().split(','));


// 1-задание
let expenses = [];
let getExpensesMonth = function () {
    let sum = 0;
    do {
        expenses[sum] = prompt('Введите обязательную статью расходов?');
        sum = +prompt('Во сколько это обойдется?', 1000);

        sum++;
    } while (!isNumber(sum), sum < 2);


    console.log(expenses);
    return sum;
};


let expensesAmount = getExpensesMonth();
console.log('Расходы на месец: ' + expensesAmount);

// 2-3-задание

let getAccumulatedMonth = function () {
    return money - getExpensesMonth();
};

let accumulatedMonth = getAccumulatedMonth();

console.log(accumulatedMonth);

// 4-задание

let getTargetMonth = function () {

    return mission / accumulatedMonth;

};

getTargetMonth();

if (getTargetMonth() > 0) {
    console.log('Цель будет достигнута за ' + Math.floor(getTargetMonth()) + ' месяцев(-а)');
} else if (getTargetMonth() <= 0) {
    console.log('Цель не будет достигнута');
} else { console.log('код не работает'); }




// удалил budgetMonth
let budgetDay = accumulatedMonth / 30;

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