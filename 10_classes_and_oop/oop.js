//Object Literal

const user = {
    username: "hitesh",
    loginCount:8,
    signedIn : true,
    getUSerDetail: function(){
        console.log("got user details from database");
        
    }
}

console.log(user.loginCount);
console.log(user.getUSerDetail());

