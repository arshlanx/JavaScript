/* Primitive (call by value)
  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



/* Non primitive (call by reference)
   3 types: Array, Objects, Functions */

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

/* 
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

/* Also JavaScript is a dynamically typed language. 
   This means that variable types are determined at runtime, 
   and you do not need to explicitly declare the type of a variable before using it.
   You can assign different types of values to a variable during its lifetime.
*/

// ************************************************************************************

// Stack(primitive), Heap(non-primitive)

let myYTname = "arshlanarfin"
let anothername = myYTname
anothername = "chand"

console.log(anothername);
console.log(myYTname);

let userOne = {
    email: "user@google.com" ,
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "arshlan@google.com"

console.log(userOne.email);
console.log(userTwo.email);

