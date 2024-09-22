const name = "hitesh"
const repoCount =  50

console.log(`Hello my name is  ${name} and my repo count is ${repoCount}`)

const gameName = new String("hiteshcc-zee")



console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);

console.log(newString);

const anotherString = gameName.slice(-4,4);
console.log(anotherString);

const newStringOne ="    hitessshhhh   "
console.log(newStringOne.trim());

const url ="https//zee.com/zeee%20khan"

console.log(url.replace('%20' , '_'));

console.log(url.includes('sunder'))
console.log(gameName.split('-'))