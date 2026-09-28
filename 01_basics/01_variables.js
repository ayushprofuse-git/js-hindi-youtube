const accountId = 144553;
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountcity = "Jaipur"


let accountState;
//When no value is assigned to a variable after usinglet then it shows undefined;//




accountEmail = "jkjjgj@ug.com"
accountPassword =  "12345"
accountCity =  "Kanpur"

//accountId = 2 // This is not allowed
console.log(accountId);

/*
Prefer not to use var because 
of issue in Block Scope and Functional Scope.
*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
