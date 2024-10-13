const coding = [ "js","ruby", "java" , "python"]


//higher order function
/*coding.forEach( function (item) { 
    console.log(item);
    
})  //callback function*/

// coding.forEach((item) => {
//  console.log(item);
 

// })//call back function



// function printMe (item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

// coding.forEach((item,index , arr)=>{
//       console.log(item,index,arr);
      
// })


const mycoding = [
    {
        languageName : "javascript",
        languagefileName : "JS"
    },
    {
        languageName : "C++",
        languagefileName : "cpp"
    },
    {
        languageName : "java",
        languagefileName : "Java"
    },
]

mycoding.forEach((item ,index)=>{
   console.log(item.languageName );
   
})