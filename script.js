"use strict";
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let money, // доход за месец,число

    start = function () {
        do {
            money = prompt('Ваш месячный доход?', 50000);
        }
        while (!isNumber(money));
    };
start();

const appData = {
    budget: +money,
    budgetDay: 0,// дневной бюджет
    budgetMonth: 0,//бюджет на месяц
    income: {}, //,//с дополнительными доходом (фрелансер),строка
    addIncome: [],// доп доходы
    expensesMonth: 0,//сумму всех обязательных расходов за месяц
    expenses: {}, //дополнительный расходы
    addExpenses: [],//массив возможными расходы
    deposit: false,// любое булево значение
    mission: 100000,//любое число (Какую сумму хотите накопить)
    period: 6,//число от 1 до 12 (месяцев)
    asking: function () {

        let addExpenses = prompt('Перечилите возможные расходы через запятую!', 'кино, театр');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            let expenses = prompt('Введите обязательную статью расходов');
            let answer;
            do {
                answer = prompt('Во сколько это обойдется?', 1000);
            }
            while (!isNumber(answer));

            appData.expenses[expenses] = +answer;

        }

    },

    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
        return appData.expensesMonth;

    },

    getTargetMonth: function () {
        return Math.ceil(appData.mission / appData.budgetMonth);
    },

    getStatusIncome: function () {
        if (appData.budgetDay > 1200) {
            console.log('У вас высокий уровень дохода');
        } else if (appData.budgetDay > 600 && appData.budgetDay < 1200) {
            console.log('У вас средний уровень дохода');
        } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
            console.log('К сожалению у вас уровень дохода ниже среднего');
        } else if (appData.budgetDay > 0 && appData.budgetDay === 600 && appData.budgetDay < 1200) {
            console.log('К какому уровню не важно');
        }
    },
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log('Расходы на месец: ' + appData.expensesMonth);
if (appData.period > 0) {
    console.log('Цель будет достигнута за ' + Math.floor(appData.period) + ' месяцев(-а)');
} else {
    console.log('Цель не будет достигнута');
}

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
};


