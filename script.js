" use strict ";

let money, // доход за месец,число


    start = function () {
        do {
            money = +prompt('Ваш месячный доход?', 50000);
        }   //модалный окно.по умолч строка сейчас число
        while (isNaN(money) || money === '' || money === null);
        //если money не число или пустой строка или равно нулл
    };
start();

let appData = {
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
        let addExpenses = prompt('Перечилите возможные расходы через запятую!', 'кино, театр');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.budgetDay = Number(appData.money / 30);
        alert('Бюджет на день ' + Math.floor(appData.budgetDay) + ' рублей');
        appData.budgetMonth = +appData.budgetDay * 30;
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        appData.expensesMonth = +prompt('Во сколько это обойдется?', 1000);
        while (isNaN(appData.expensesMonth) || appData.expensesMonth == '' || appData.expensesMonth == null) {
            appData.expensesMonth = +prompt('Во сколько это обойдется цифрами?', 1000);
        }
        appData.expenses[addExpenses] = appData.expensesMonth;


        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
    },

    getBudget: function () {
        appData.budgetMonth = appData.budget + appData.addIncome - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.income[key];
        }
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
//appData.getAccumulatedMont();
appData.getTargetMonth();
appData.getStatusIncome();

console.log('Расходы на месец: ' + appData.expensesMonth);
if (appData.period > 0) {
    console.log('Цель будет достигнута за ' + Math.floor(appData.period) + ' месяцев(-а)');
} else {
    console.log('Цель не будет достигнута');
}



let showTypeof = function (item) {
    console.log(typeof item);
};
showTypeof(money);
showTypeof(appData.income);
showTypeof(appData.deposit);
