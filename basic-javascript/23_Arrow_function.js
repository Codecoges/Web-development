const user = {
    username : "ankit",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this);

function chai(){
    let username = " hitesh"
    console.log(this.username);
}
chai()

const chai  = function(){
    let username = "ankit"
    console.log(this.username);
}
chai()
const chai  = ()=>{
    let username = "ankit";
    console.log(this);
}
chai()

// const addTwoNumber = (num1,num2)=>{
    // return num1 + num2
// }
console.log(addTwoNumber(23,90));
const addTwoNumber = (num1,num2)=>(num1+num2)

console.log(addTwoNumber(23,34));//no required to write return also known as implisite return

