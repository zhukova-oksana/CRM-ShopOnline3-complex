'use strict';

const income = +prompt('Введите полученный заработок');

if (income < 15000) {
  const tax = income * 13 / 100;
  console.log(`Налог равен: ${tax}`);
}

if ((income >= 15000) && (income < 50000)) {
  const tax20 = income * 20 / 100;
  console.log(`Налог равен: ${tax20}`);
}

if (income >= 50000) {
  const tax30 = income * 30 / 100;
  console.log(`Налог равен: ${tax30}`);
}
