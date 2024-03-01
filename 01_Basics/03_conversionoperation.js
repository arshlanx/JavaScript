let score01 = 33
let score02 = "33"
let score03 = "33abc"

console.log(typeof score01);
console.log(typeof (score02));

let valueInNumber = Number(score03)
console.log(typeof valueInNumber)
console.log(valueInNumber)

/*
"33" => 33
"33abc" => NaN (not a number)
true => 1
false => 0
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

/* 
1 => true ; 0 => false
"" => false
"ARSHLAN" => true
*/

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " ARSHLAN"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(true);
console.log(+true);

let gameCounter = 100
gameCounter++;
console.log(gameCounter);