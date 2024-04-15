const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.546;
console.log(otherNumber.toPrecision(4));

const hundred = 1000000;
console.log(hundred.toLocaleString("en-IN"));

//+++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(2.555));
console.log(Math.ceil(2.555));
console.log(Math.floor(2.555));
console.log(Math.max(2,4,5,8,9));
console.log(Math.min(2,4,5,8,9));
const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min + 1)) + min));
console.log(max)
// The End Of this section