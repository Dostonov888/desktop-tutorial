" use strict ";
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let money, // доход за месец,число


    start = function () {
        do {
            money = +prompt('Ваш месячный доход?', 50000);
        }   //модалный окно.по умолч строка сейчас число
        while (isNaN(money) || money === '' || money === null);
        //если money не число или пустой строка или равно нулл
    };
start();

const appData = {
    budget: money,
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

        appData.budgetDay = Math.floor(Number(money / 30));
        appData.budgetMonth = +appData.budgetDay * 30;
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        let addExpenses = prompt('Введите обязательную статью расходов');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.expenses = +prompt('Во сколько это обойдется?', 1000);
        while (isNaN(appData.expenses) || appData.expenses == ' ' || appData.expenses == null) {
            appData.expenses = +prompt('Во сколько это обойдется?', 1000);
        }


    },

    getBudget: function () {
        appData.budgetDay = appData.budgetMonth / 30;
    },// бюджет на день

    getExpensesMonth: function () {

        appData.expensesMonth = appData.expenses;
        // for (let i = 0; i < 2; i++) {
        //     if (i === 0) {
        //         appData.addExpenses = prompt('Введите обязательную статью расходов');
        //     }
        //     do {
        //         question = prompt('Во сколько это обойдется?', 5000);
        //     }
        //     while (isNaN(question) || question === '' || question === null);
        // }
        // appData.expenses = sum;
        // for (let i = 0; i < 2; i++) {
        //     appData.addExpenses[i] = appData.expenses;

        //     if (typeof (appData.addExpenses) != null && typeof (appData.expenses) != null && appData.addExpenses != '' && appData.expenses != '' && appData.addExpenses.length < 50) {

        //     } else {
        //         i--;
        //     }
        // }

    },




    getTargetMonth: function () {
        return appData.mission / appData.budgetMonth;

    },

    getStatusIncome: function () {
        if (appData.budgetDay > 1200) {
            console.log('У вас высокий уровень дохода');
        } else if (appData.budgetDay > 600 && appData.budgetDay < 1200) {
            console.log('У вас средний уровень дохода');
        } else if (appData.budgetDay < 600 && budgetDay > 0) {
            console.log('К сожалению у вас уровень дохода ниже среднего');
        } else if (appData.budgetDay > 0 && appData.budgetDay === 600 && appData.budgetDay < 1200) {
            console.log('К какому уровню не важно');
        }

    },


};
appData.asking();
appData.getBudget();
appData.getExpensesMonth();
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
}
console.log(appData.expenses);


