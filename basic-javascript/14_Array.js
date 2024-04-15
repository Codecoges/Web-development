//Array
const myArray = [0,1,2,3,4,5]
const myHero = ["sunney deval","ravi kishan","akshya kumar"]
console.log(myHero)

// Array Methods
console.log(myArray);
myArray.push(100)
myArray.pop()

myArray.unshift(999)
myArray.shift()

console.log(myArray.includes(1));
console.log(myArray.indexOf(1));

const newArray = myArray.join()
console.log(myArray);
console.log(typeof newArray);

//slice,splice
console.log("A",myArray);

const slicedArray = myArray.slice(2,3)
console.log(slicedArray);
console.log("B",myArray);

const slicedArray2 = myArray.splice(2,4) //******** Important
console.log("c",myArray);
console.log(slicedArray2);


