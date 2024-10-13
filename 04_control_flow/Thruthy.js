const userEmail = []

if(userEmail){
    console.log("got user email");
    
}

else{
    console.log("Dont have");
    

}

//falsey value
  //false , 0 ,-0 ,  bigint 0n, "", null,undefined, NaN
//Truthy value
  //[] , "0" , 'false', " ", {} , function(){}empty function,

 if(user.length === 0) {
    console.log("Array is empty");
    
  }

  const emptyobj = { }

  if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
    
  }

 /* false == 0
true
false == ''
true*/


//Nullish Coalescing operator (??) : null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//var1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1)



//Terniary operator
//condition ? true :false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less then 80") : console.log (" more then 80")
