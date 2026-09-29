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

//++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "ayushshukla@gmail.com"

anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {                          // This whole will be inside a aHeap as it is a non primitive data
    email: "ayushshukla5281@mail.com",
    upi: "userxyz@ybl"
}

let userTwo = userOne // userOne's detail has been assigned to the user One.

userTwo.email = "jhgvfasc@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

