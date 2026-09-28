let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInnumber = Number(score);
console.log(typeof valueInnumber);
console.log(valueInnumber);


// let score = "33"  This will result in number as the string containg after to a number conversion is still a number inside string.
// let score = "33abc" This will result in NaN and it denotes that it is not a number if str is converted to a num but contains some string values also like alphabets.
// let score = null  This will result in 0 as the numeric value for null is 0 in Javascript (in conversion to nummber)
// let score = undefined this also results stating that it is not a number (NaN)
// let score = true   This will result in 1 for true and 0 for false

let isLoggedIn = "Ayush"

let booleanIsloggedIn = Boolean (isLoggedIn)
console.log(booleanIsloggedIn);

// let isLoggedIn = 1 This will return the value to be true as the boolean of 1 is true
// let isLoggedIn = ""  This will return the value as false as the boolean for empty string is false cause that means 0 inside a string
// let isLoggedIn = "Ayush" This will return to be true as the boolean for not an empty string is true or in number is 1.


let someNumber = 33

let stringNumber = String (someNumber)
console.log(stringNumber);

console.log(typeof (stringNumber));


// let someNumber = 33 This will return to be 33 only as in String conversion the number remains the same.
// FOR THE PART WE WILL LEARN ABOUT STRINNG TO NUMBER CONVERSION