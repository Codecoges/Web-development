const myArray = [1,2,3,4,5,6]

for (const num of myArray) {
    // console.log(num);
}

const myGreet = "hello world";
for (const greet of myGreet) {
    // console.log(greet);
}

//Maps

const map = new Map()

map.set("h","hello")
map.set("p","pagal")
map.set("t","takla")

// console.log(map);

for(const [key,value] of map){
    // console.log(value);
}

const myobject = {
    ankit:"pandit",
    rahul:"paswan"
}

for(const key in myobject){

    // console.log(key); 

}

const programming = ["js","cpp","py","java"]

for(const key in programming){
    // console.log(programming[key]);
}
////////////////////////////////////////////////////////////

const lords = ["ram","hanuman","shiva","ganesh","vishnu"]

// lords.forEach(function (items){
//     console.log(items);
// })

lords.forEach((items,index,arr)=>{
    // console.log(items,index,arr);
})

const myCoding = [
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }


]

myCoding.forEach((items)=>{

console.log(items.languagename);

})
