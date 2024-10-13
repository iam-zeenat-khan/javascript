//for of
//["","","",]
//[{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);
    
}

const greeting ="hello world"

for(const greet of greeting){
    if(greet == " "){
        continue
    }
    console.log(`each char is ${greet}`);
    
}
//Maps

const map = new Map()
map.set('IN' , "India")
map.set(2 ,"B")
map.set(3, "C")

console.log(map);

for(const [key,value] of map){
    console.log(key);
    console.log(value);
    
}



