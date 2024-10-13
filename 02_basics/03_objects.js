//declering a object

const { object } = require("yup");

//singleton
//when we make with constructor it make singltone

//object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh",
    "fullname":"hitesh choudary",
    [mySym]:"mykey1",
    age: 18,
    location:"Jaipur",
    email:"aer21@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"])
console.log(JsUser[mySym])

JsUser.email ="hitesh@gpt.com";
//Object.freeze(JsUser)
JsUser.email = "htitrjgjrg@";
console.log(JsUser)

JsUser.greeting= function(){
    console.log("hello Js User");
    
}
JsUser.greeting2= function(){
    console.log(`hello Js User,${this.name}`);
    
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2());
