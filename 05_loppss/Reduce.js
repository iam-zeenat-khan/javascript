const myNums = [1,2,3]


// const mytotal=myNums.reduce(function(acc,currval){
//     console.log(`acc : ${acc} and currval: ${currval}`);
    
//    return acc + currval
// },3)


const mytotal =myNums .reduce ((acc,currval)=> acc+ currval ,0)
console.log(mytotal);

const shoppingCart = [
    {
        item:"js course",
        price:299
    },
     {
        item:"java course",
        price:2999
    },
     {
        item:"c++ course",
        price:2990
    },
]
const pay = shoppingCart.reduce((acc,item)=> acc + item.price, 0)
console.log(pay);
