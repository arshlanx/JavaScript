const accountId = "0001"      // can not be change
let accountEmail = "arshlan@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState 
/* Prefer not to use var 
because of issue in block scope and functional scope
*/ 
console.log(accountId);
console.table([accountEmail,accountPassword, accountCity,accountState]);