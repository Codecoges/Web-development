//scopes in javascript
let a = 200;
if (true) {
  let a = 1;
  const b = 2;
  var c = 3;
  console.log("Inner",a);
}
console.log(c);
console.log("Outer side",a);
// console.log(b);
