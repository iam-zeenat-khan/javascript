/*
javascriptis dynamically type language
primitive type // they make changes in copy
    String,Number, Boolean, null,undefined, Symbol,BigInt

--Referece (Non primitive)
    Array, Object,Functions


*/
const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456789024n


//Non primitive
 
const heros =["shaktiman" , "nagraj", "doga"];// arrays

//object
let myObj = {
    name : "hitesh",
    age: 22,
}

//function
const myFunction= function(){
    console.log("hello worldssssssssss")
}


// stack (primitive type memory used)
//heap(Non primitive)

let MyYou = "Zeechannel"

let anothername = MyYou;

anothername ="chai";
console.log(MyYou)
console.log(anothername);

let user ={
    email : "123@gmail.com",
    upi :"myyouuu",

}
let usertwo = user