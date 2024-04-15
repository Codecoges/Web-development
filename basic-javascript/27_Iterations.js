// for

for (let i = 1; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best no");
    } 
    console.log(element);
}

//printing table/////////////////////////

for (let i = 2; i <=10; i++) {
    console.log(`outer loop value:${i}`);

    for(let j =2; j<=10; j++){
        console.log(`${i} * ${j}: ${j*i}`);
    } 

}

let myLords = ["Hanuman","Shankar","Vishnu","Ram","Krishna"]

for(let i = 0; i < myLords.length; i++){
    const print = myLords[i];
    console.log(print);
    for(j = 0;j<print.length; j++){
        const print2 = print[j];
        console.log(print2);
    }
}

//break and continue
for (let i = 0; i < 20; i++) {
    if(i==5){
      console.log("Detected 5");
      break
    }
    console.log(`Value of index: ${i}`);  
}

for (let i = 0; i < 20; i++) {
    if(i==5){
      console.log("Detected 5");
      continue //skip one condition
    }
    console.log(`Value of index: ${i}`);  
}