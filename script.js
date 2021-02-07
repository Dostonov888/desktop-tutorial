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
    // , , getStatusIncome

    budget: money,
    budgetDay: 0,// дневной бюджет
    budgetMonth: 0,//бюджет на месяц
    expensesMonth: 0,//сумму всех обязательных расходов за месяц
    income: {},// income = 'freelance',с дополнительными доходом (фрелансер),строка
    addIncome: [],
    expenses: {}, //обязательную статья расходов
    addExpenses: [],//с перечислением дополнительных расходов через запятую (например: интернет, такси, коммуналка), строка
    deposit: false,// любое булево значение
    mission: 100000,//любое число (Какую сумму хотите накопить)
    period: 6,//число от 1 до 12 (месяцев)
    asking: function () {
        let addExpenses = prompt('Перечилите возможные расходы через запятую!', 'кино, театр');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        appData.budgetDay = (appData.money / 30);
        alert('Бюджет на день ' + Math.floor(appData.budgetDay) + ' рублей');
        appData.budgetMonth = (appData.budgetDay * 30);
    },

    getExpensesMonth: function () {
        appData.expensesMonth = +prompt('Во сколько это обойдется?', 1000);
        //проверка что введённые данные являются числом
        while (isNaN(expensesMonth) || expensesMonth === '' || expensesMonth === null) {
            addData.expensesMonth = +prompt('Во сколько это обойдется цифрами?', 1000);
        }
    },
    getAccumulatedMonth: function () {
        return appData.money - appData.getExpensesMonth();
    },
    //Накопления за месяц let accumulatedMonth = appData.getAccumulatedMonth();
    //за какой период будет достигнута цель,
    getTargetMonth: function () {

        this.period = appData.mission / getAccumulatedMont();
        if (this.period > 0) {
            console.log('Цель будет достигнута за ' + Math.floor(this.period) + ' месяцев(-а)');
        } else {
            console.log('Цель не будет достигнута');
        }

    },
    getStatusIncome: function () {
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
    },

};

console.log('Расходы на месец: ' + appData.expensesMonth);




let showTypeof = function (item) {
    console.log(typeof item);
};
showTypeof(money);
showTypeof(appData.income);
showTypeof(appData.deposit);







// удалил budgetMonth

