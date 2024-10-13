 //global scope

let a = 300;
if(true){
   //block scope
   let a = 10
   const b = 20
   //var c = 30// avoided
   console.log(a);
}


//console.log(a);
//console.log(b);
//console.log(c);


//nested scope////

function one(){
    const username ="sam"
    console.log("one");
    

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
   // console.log(website);
     two();
}

one();


//******Interesting*******************/
addone(5)
function addone(num){
    return num+1;
}


// hoisting and expreesion
addtwo(5)
const addtwo = function  (num){
    return num +2
}

addtwo(5)