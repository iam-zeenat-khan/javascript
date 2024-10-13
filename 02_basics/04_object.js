//singletone object
//const tinderUser = new object();

const tinderUser = {}
tinderUser.id ="abc123"
 tinderUser.name="Sam"
 tinderUser.isLoggedin = false

//console.log(tinderUser);

const regularuser = {
    email:"some@gmail.com",
    fullname:{
        firstname:"hitesh",
        lastname:"chcha"
    }
}

//console.log(regularuser.fullname.firstname);

//combine theobject

const obj1 = {1:"a",2: "b"}
const obj2 = {3:"f ",4:"g"}
//const obj3 = {obj1,obj2};
//console.log(obj3);

//const obj4 = Object.assign({},obj1,obj2,); 
//console.log(obj4);

const obj3 ={...obj1,...obj2}
//console.log(obj3);

const users =[

    {

    },
    {

    },
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin'));



//DEstructring of object


const course = {
    coursename:"courseinhindi",
    price: "9999",
    Instructur : "hitesh",
}

//course.Instructur
const {Instructur:Instruct} = course;
console.log(Instruct);






const navbar = (props) =>{
    
}
navbar(company = "zee")


//Array destructuring
//API concept
//json
/*{
    "name":"zee",
    "coursename": "jshindi",
    "price" : "free"
}*/