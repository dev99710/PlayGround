// const Sym=Symbol("Key1")

// const Info={
//     name:"dev",
//     age:30,
//     [Sym]:"Mykey1",
//     location:"Ahmedabad",
//     email:"abc@gmail.com",
//     isLoggedIn:false,
//     lastlogin:["Monday","Saturday"]
// }
// // console.log(Info[Sym]);


// Info.email="dev@gmail.com"
// // Object.freeze(Info)

// Info.email="dev115@gmail.com"

// // console.log(Info);

// Info.greeting=function(){
//     console.log("Hello User" );
// }
// Info.greeting1=function(){
//     console.log(`Hello are you ${this.name}`);
// }

// console.log(Info.greeting1());



// const Tinder=new Object()
const Tinder={}
Tinder.name="Dev"
Tinder.age=30
Tinder.isloggedIn=false
console.log(Tinder);

const User={
    email:"",
    fullname:{
        userfullname:{
            firstname:"Dev",
            lastname:"Chavda"
        }
    }
}
// console.log(User.fullname.userfullname.firstname);

const obj={1:"a",2:"b"}
const obj1={3:"c",4:"d"}
const obj2={...obj,...obj1}
console.log(obj2);