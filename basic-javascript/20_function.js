function calculateCartPrice(val1,val2,...num1){ //'...' is spread operator
    return num1
}
console.log(calculateCartPrice(200,300,500,700));

const user ={
    username:"ankit",
    price:1345

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.price}`);
}
handleObject(user)
handleObject({
    username:"sam",
    price:2233
})

const myNewArray = [200,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
