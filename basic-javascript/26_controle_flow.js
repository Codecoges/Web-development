//< , > , <= , >= , != , == , === , !==

const isUserLoggedIn = true;
const temperature = 41;
if(temperature<50){
    console.log("temperature is less than 50");
}
else{

    console.log("temperature is greater than 50");
}

const score = 200

if(score>100){
    let power = "fly"
    console.log(`use power:${power}`);
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
 if(userLoggedIn && debitCard){
    console.log("Allow to Buy Course");
 }

 if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
 }

 //switch case//////////////////////////////////////////////

//  switch (key) {
//     case value:
        
//         break;
 
//     default:
//         break;
//  }

const month = 3

 switch (month) {
    case 1:
        console.log("January");
        break;
 
    case 2:
        console.log("February");
        break;
 
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
 
    default:
        console.log("Default case match");
        break;
 }

 //truthy ////////////////////////////////////////

 const userEmail = "ankit"
if(userEmail){
    console.log("Got use email");

}
else{
    console.log("Don't get user email");
}

// falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN

// except all are truthy value

// truthy value :-- "0", " ",'false' ,[],{},function(){}

//Nullish coalescing Operator (??):null undefined///////////////////////

let val1
// val1 = 5??10
// val1 = null??10
// val1 = undefined??10
val1 = null??10??20

console.log(val1);

//terniary Operator//////////////////////////////////////

//condition ? true:false*********************

const iceTeaPrice =100
iceTeaPrice <= 80? console.log("less than 80"):console.log("more than 80");