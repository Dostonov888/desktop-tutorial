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
// console.log('Цель заработать ' + mission + ' долларов');
// console.log(addExpenses.toLowerCase());
// console.log(addExpenses.split(', '));


let budgetDay = (money /= 30);

console.log(budgetDay);

money = confirm('Ваш месячный доход 100000?') ? 100000 : 'Что не так';
console.log(money);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses);
deposit = Boolean(confirm('Есть ли у вас депозит в банке ?'));
console.log(deposit);
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
console.log(expenses1, amount1);
let expenses2 = prompt('Введите ещё обязательную статью расходов?');
let amount2 = prompt('Во сколько это обойдется?');
console.log(expenses2, amount2);

let budgetMonth = () => {

}