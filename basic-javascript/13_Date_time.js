//Date
let myDate = new Date()
// console.log(myDate.getDate());
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
let myCreateDate = new Date(2024,0,4)
// console.log(myCreateDate.toDateString());

let newDate = new Date()
// console.log(newDate.getMonth()+1);

 helloDate = newDate.toLocaleString('default',{
     weekday:"long",
     day:"numeric"

})
console.log(helloDate);