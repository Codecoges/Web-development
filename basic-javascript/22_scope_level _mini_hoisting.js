//nested scope
function one(){
    const username = "ankit"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if(true){
   const username = "ankit"
    if(username === "ankit"){
       const website = " youtube"
    //    console.log(username + website);
    }
    // console.log(website);

}
// console.log(username);

//+++++++++++++++Intresting+++++++++++++++++++

console.log(addone(5));// get no error

function addone(num){
    return num + 1
}
// addone(5);


console.log(addtwo(5));//get error

const addtwo = function(num){
    return num+2
}
// addtwo(5);
