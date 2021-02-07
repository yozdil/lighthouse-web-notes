const array = [1, 2, 3, 4, 5];

let reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array.reduce(reducer));

let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
  { amount: 500 },
];

let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

console.log(totalAmount);
