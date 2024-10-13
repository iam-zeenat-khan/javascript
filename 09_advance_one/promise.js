//const { log } = require("console");
//const { resolve } = require("url");

/*
 Define What a Promise Is
Start with a simple, real-world analogy to make the concept relatable:

"A Promise in JavaScript is like a real-life promise. Imagine you promise to finish a task, like completing homework, tomorrow. Right now, the task is pending because it hasn’t been done yet. Eventually, either you finish the task (fulfilled) or something goes wrong (rejected)."

2. Describe the Three States of a Promise
Explain the key states of a Promise:

"A Promise can be in three states:

Pending: The task is still in progress.
Fulfilled: The task completed successfully.
Rejected: The task failed."
3. Explain How Promises Are Created and Used
Then explain how Promises are used in code:

"We create a Promise by passing a function to it, which includes two parameters: resolve and reject. resolve is called when the task succeeds, while reject is called when it fails."

Example code (if needed):

javascript
Copy code
let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed successfully!");
  } else {
    reject("Task failed!");
  }
});
4. Describe How to Handle Success and Failure
Explain how to handle the outcomes with .then() and .catch():

"We handle the result using .then() for success and .catch() for failure. This way, we can manage both outcomes without blocking the rest of the code."

Example usage:

javascript
Copy code
myPromise
  .then(result => console.log(result))  // Handles success
  .catch(error => console.log(error));  // Handles failure
5. Wrap It Up
You can conclude with this summary:

"Promises make it easier to handle asynchronous operations like fetching data, making our code cleaner and avoiding what is called 'callback hell'. Instead of dealing with deeply nested callbacks, we can chain Promises and handle success and failure in a more readable way."







*/
// const promiseOne = new Promise(function(resolve,reject)
// {
// //Do asyn task
// //DBCalls,cryptography,network call
// setTimeout(function (){
//   console.log("async task complete");
//   resolve()
// },1000)


// })
// //promise conception
// promiseOne.then(function(){
//   console.log("promise consumed");
  
// })


// // new Promise(function (reslove,reject){
// // setTimeout(function(){
// //   console.log("async task");
// //   resolve()
// // },1000)

// // }).then(function(){
// //   console.log("async 2 resolve");
  
// // })


// const promiseThree = new Promise(function(resolve,reject){
//   setTimeout(function(){
//   resolve({usernamr:"chai", email: "chai@example.com"})
//   },1000)
// })

// promiseThree.then(function(user){
//   console.log(user);
  

// })

// const promiseFour = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     let error= false
//     if(!error){
//       resolve({ username :'hitesh',password:"12345"})
//     }
//     else{
//       reject('ERROR :Something went wrong')
//     }
//   },1000)
// })
//  promiseFour.then((user)=>
// {
//     console.log(user);
//     return user.username
    
// }).then((username)=>{
//   console.log(username);
  

// }).catch(function(error){
//   console.log(error);
  
// }).finally(() => {
//   console.log("Finallly")})



// const promiseFive = new Promise (function(resolve,reject){
//   setTimeout(function(){
//     let error= true
//     if(!error){
//       resolve({ username :'javascript',password:"12345"})
//     }
//     else{
//       reject('ERROR :JS went wrong')
//     }
//   },1000)
// })

// async function ConsumepromiseFive (){
//     try { const response = await promiseFive;
//      console.log(response);
//     }
//     catch (error){
//       console.log(error);
      
//     } 
// }
// ConsumepromiseFive()

// async function getallusers () {
  
//   try{
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data =  await response.json()
//   console.log(data);
//   } catch( error){
//     console.log("E: " , error );
    
//   }

// }
// getallusers()


fetch ('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
  return response.json()
})
.then((data) =>{
  console.log(data);
  
})
.catch((error) => console.log(error)
)