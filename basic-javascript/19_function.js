//functions

function addTwoNumber(n1,n2){
console.log(n1+n2);
}

// addTwoNumber(3,6)

function loginUserMessage(username){
    if(!username){
        console.log("please enter a user");
        return 
    }
 return ` ${username} just logedin `
}
console.log(loginUserMessage())