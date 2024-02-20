// Data Types in Js


// 1. Primitive --> 7
// Number, String, Boolean, Undefined, Null, BigInt,Symbol



// Number

let age = 20;
let price = -99.5;
console.log(age);
console.log(typeof(age));
console.log(typeof(price));

// String

let fullName = "Great India" ;
console.log(fullName);
console.log(typeof(fullName));

// Boolean

let isRight = 5<10;
console.log(isRight);
console.log(typeof(isRight));

// Undefined 

let a;
console.log(a);
console.log(typeof(a));

// null means --> absence of an object

let x = null;
console.log(x);
console.log(typeof(x));


// BigInt

let y = BigInt(123);
console.log(y);
console.log(typeof(y));

// Symbol

let z = Symbol("Hi!");
console.log(z);
console.log(typeof(z));



// 2. Non-primitive --> Objects : is a collection of values
// Objects -->  (Arrays & Functions)
// Objects always store (Key:value) pairs

// objects e.g. --> Students have different values like:-
// name --> string
// age --> number
// marks --> number
// isPass --> boolean

const student = {
    fullName: "Raju Kumar",
    age: 20,
    CPA: 8.5,
    isPass: true

};
console.log(student);
console.log(typeof(student));
// if want to access single value of key.
// 2 methods are to access key values:- 
// i- obj.key -- no ( '' or "" ) quotes use
// ii- obj[key] -- use quotes 

console.log(student["fullName"]);
console.log(student.fullName);

// update value in Object 
// we can't change directly on const, but can change object key's values
student["age"] = student["age"] + 1;
console.log(student.age);

