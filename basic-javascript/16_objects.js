//objects
const mysym = Symbol("key1")
const jsuser = {
    [mysym] : "mykey1",

    name:"Ankit",
    "full_name":"Ankit kumar pandit",
    age:20,
    location:"koderma",
    email:"akkypandit04@gmail.com",
    isLoggedIn:false,
    latLoginDays:["Monday","Sunday"]
}
// Object.freeze(jsuser)

jsuser.email="hello@gmail.com"

console.log(jsuser.email);

console.log(jsuser);

console.log(jsuser["full_name"]);

jsuser.greeting = function(){
    console.log("hello js user ");
}
jsuser.greetingtwo = function(){
    console.log(`Hello js user ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());