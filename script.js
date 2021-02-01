" use strict ";

let money = 100000,
    income = 'freelance',
    addExpenses = 'Taxi, Taxes, Apartment Rentals',
    deposit = true,
    mission = 500000,
    period = 6;

// console.log(typeof money, typeof income, typeof deposit);
// console.log(addExpenses.length);
// console.log('Период равен ' + period + ' месецев');
// console.log('Цель заработать ' + mission + ' рублей');
// console.log(addExpenses.toLowerCase());
// console.log(addExpenses.split(', '));


let budgetDay = (money /= 30);


money = Number(prompt('Ваш месячный доход?', 100000));
console.log(money);

// addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Еда, проезд, налоги');
// console.log(addExpenses);


// deposit = confirm('Есть ли у вас депозит в банке ?');
// console.log(typeof Boolean(deposit));

// let expenses1 = prompt('Введите обязательную статью расходов?', 'еда, проезд, налоги');
// console.log(expenses1.split(' '));
let amount1 = Number(prompt('Во сколько это обойдется?', 10000));
console.log(amount1);
// let expenses2 = prompt('Введите ещё какой-нибудь обязательную статью расходов?', 'коммуналка, кредит ');
// console.log(expenses2.split(', '));
let amount2 = prompt('Во сколько это обойдется?', 10000);
console.log(Number(amount2));


let budgetMonth = Number(money) - Number(amount1) - Number(amount2);
console.log('бюджет на месец: ' + budgetMonth);

console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + ' месяцев(-а)');

budgetDay = (budgetMonth /= 30);
console.log('Бюджет на день ' + Math.floor(budgetDay) + ' рублей');

switch (true) {
    case (Number(budgetDay)) > 1200:
        console.log('У вас высокий уровень дохода');
        break;
    case (Number(budgetDay)) > 600 && (Number(budgetDay)) < 1200:
        console.log('У вас средний уровень дохода');
        break;
    case (Number(budgetDay)) < 600 && (Number(budgetDay)) > 0:
        console.log('К сожалению у вас уровень дохода ниже среднего');
        break;

    case (Number(budgetDay)) > 0 && (Number(budgetDay)) === 600 && (Number(budgetDay)) < 1200:
        console.log('К какому уровню не важно');
        break;
    default:
        console.log('Что то пошло не так');
        break;

}