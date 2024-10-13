const marvel_heros = ["thor", "ironman", "spiderman"] ;

const Dc_heros =["superman", "flash" , "batman"]

//marvel_heros.push(Dc_heros);
//console.log(marvel_heros[3]);

//const allheros=marvel_heros.concat(Dc_heros);
//console.log(allheros);

const all_new_heros =[...marvel_heros,...Dc_heros]//spreadout value
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_anther_Array = another_array.flat(Infinity)
console.log(real_anther_Array);

//sometime we select the value from any 
//console.log(Array.isArray("Hiteshs"))
//console.log(Array.from("Hiteshs"))
console.log(Array.from({name: "hitesh"})) //interisting fact


let score1 =100
let score2 =200
let score3 = 300

console.log(Array.of(score1,score2,score3))
