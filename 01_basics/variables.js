const accountID = 123456
let accountEmail = "ahmad@gmail.com"
var accountPassword = "123"
    accountCity = "Lahore"
let accountState;

// accountID  = 2345 // Not allowed

accountEmail = "ali@gamil.com"
accountPassword = "456"
accountCity = "Pattoki" 

/*
Prefer not use a var 
Becasue of Issue in block scope and functional scope. 

*/


console.log(accountID);

console.table([accountID , accountEmail, accountPassword , accountCity , accountState])
