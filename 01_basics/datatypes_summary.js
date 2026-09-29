// Primitive Datatype

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, bigInt

const score = 100  //typeof => number
const scoreValue = 100.3  // typeof => Number

const intLoggedIn = false // typeof boolean
const outsideTemp = null  // This will return the typeof as Object.

let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')

console.log(id === anotherId);

const bigNumber = 123456789765434567n  // type of bigint


// Reference  (Non Primitive Datatype)

// Array, Objects, Functions

const heros = ["Shaktiman", "Krish", "Nagraja"]  // typeof => obj
let obj= {
    name: "Ayush",
    age:22,
}

const myFunction = function(){
    console.log("Hello World");  //type of this will result in function but said as Function Object 
}

console.log(typeof outsideTemp);
