// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123bc";
tinderUser.name = "ankit";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "ankit@codecoge.com",
  fullname: {
    userfullname: {
      firstname: "ankit",
      lastname: "pandit",
    },
  },
};

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2);
const obj3 = {...obj1,...obj2}; //spread operator (...)

console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
