" use strict ";

let money = 100000,
    income = 'freelance',
    addExpenses = 'Taxi, Taxes, Apartment Rentals',
    deposit = true,
    mission = 500000,
    period = 6;

console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месецев');
console.log('Цель заработать ' + mission + ' долларов');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));


let budgetDay = (money /= 30);

console.log(budgetDay);