/*function saymyName (){
  console.log("hii");
  console.log("hello")
  
}

saymyName()
saymyName()
*/
/*function addno(no1,no2){//parameters
    console.log(no1+ no2);
    

}

const result =addno(1,1)//arguments

console.log("Result");*/

function addtwono(no1,n02){
  //let result = no1 +n02
  //return result

  return no1 + n02
}
 /*console.log(addtwono(1,9));

 function loginUserMessage(username = "sam") {
  //if( username=== undefined){
  if(!username){
    console.log("please enter a username");
    return
    }
  return `${username} just logged in`
 }

//console.log(loginUserMessage())
 //when ever we do not pass any argument we get undefined

*/
//rest operator(...)
function calculateCartPrice(...num1){
    return num1
}

console.log (calculateCartPrice(200,400,600))


const user ={
  name: "hit",
  price: 199
}

function handleoject(anyobject){
  console.log(`Username ${anyobject.name} and price is ${anyobject.price}` );
  
}
handleoject(user)

const myNewArray =[200,400,500]

function returnsecond(getArray){
  return getArray[1]
}

console.log(returnsecond(myNewArray));
