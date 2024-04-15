const marval_heros = ["ironman","thor","spiderman","caption america"]
const dc_heros = ["superman","batman","flash"]
const indian_super_heros = ["hanuman","shaktiman"]

marval_heros.push(dc_heros);
console.log(marval_heros);

all_heros = marval_heros.concat(dc_heros,indian_super_heros)
console.log(all_heros);

//spread operator 
const all_new_heros = [...marval_heros,...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity);
console.log(another_array);
console.log(real_another_array);

console.log(Array.isArray("ankit"))
console.log(Array.from("ankit"))
console.log(Array.from({name: "ankit"})) //important interview

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));