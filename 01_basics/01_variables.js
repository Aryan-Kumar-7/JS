const accountId = 12345
let accountEmail = "raj@google.com"
var accountPassword = "1234567"
accountCity = "kanpur"
let accountState;

// accountId = 2  // not allowed


accountEmail = "raj@google.com"
accountPassword = "1234"
accoouontCity = "Azamgarh"

console.log(accountId);


/* 
    Prefer not to use var 
    because of issue in block scope and functional scope
*/

console.table([accountId,  accountEmail, accountPassword, accoouontCity, accountState]);

