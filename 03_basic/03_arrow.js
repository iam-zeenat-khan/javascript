const user ={
    username: "hitesh",
    price:99,
    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);

    }
}
//when we used current context we used this keyword


//user.welcomemessage()
//user.username ="sam"
//user.welcomemessage()

console.log(this);
//browser ka ander jo global object ha window hai

//**************arrow function****************/

/*function chai(){
    let username = "hir"
    console.log(this.username);
    
}
*/

//const addTwo = (num1,num2) =>{
  //  return num1+num2
//}
//Implicite function
//const addTwo = (num1,num2) => num1+num2
const addTwo=(num1 ,num2) => ({username:"hitesh"})

console.log(addTwo(3,4));


