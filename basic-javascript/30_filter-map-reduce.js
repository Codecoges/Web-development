const lords = ["ram","hanuman","shiva","ganesh","vishnu"]

const value = lords.forEach((item) => {
    console.log(item);
    
});

console.log(value);

const mynums = [1,2,3,4,5,6,7,8]

const newnums = mynums.filter((num)=>{
return num>3

})
console.log(newnums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let myBooks = books.filter((bk)=>bk.genre === "Science" && bk.publish >=1999)
  console.log(myBooks);

const myNumbers = [1,2,3,4,5,6,7,8,9]

/////chaining
const newNumber = myNumbers
            .map((num)=> num*10)
            .map((num)=>num+5)
            .filter((num)=>num>=40)

console.log(newNumber);

//////reduce//////////////////////////

const myNum = [200,100,500]

const totalNumber = myNum.reduce(function(acc,currval){
  // console.log(`acc:${acc} and currval${currval}`);
  return acc + currval;
},0)

console.log(`Total price is : ${totalNumber}`);

const shoppingCart =[
  {
    courseId:"6357dg3d3",
    courseName:"javascript",
    coursePrice:999
  },
  {
    courseId:"6457dg3d3",
    courseName:"java",
    coursePrice:1999
  },
  {
    courseId:"6357dg129",
    courseName:"python",
    coursePrice:499
  },
  {
    courseId:"6317dg129",
    courseName:"python",
    coursePrice:600
  }
]


const priceToPay = shoppingCart.reduce((acc,item) => acc + item.coursePrice,0)
console.log(priceToPay);