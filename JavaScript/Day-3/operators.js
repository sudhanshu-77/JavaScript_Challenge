// Operators --> used to perform some operation on data

//Arithmetic Operators:- +, -, *, /, modulus (%), exponentiation (a**b),(unary operators works only one operand -->  increment (++), decrement (--) )

let a = 5;
let b = 7;

// let c = a+b;
// console.log(c);
console.log("a =",a, "& b =",b);
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);
console.log("a%b=", a%b);
console.log("a**b=", a**b);



// Unary Operators

let x = 5;
let y = 7;

console.log("x=",x, "& y=",y);

//increment
x = x+1; //6
x++; //7
console.log(x); //7

// decrement
y = y-1; //6
y--; //5
console.log(y); //5

// a++ (post increment) first execute then change value , ++a (pre increment) first change value then execute
// a-- (post decrement) first execute then change value, --a (pre decrement) first change value then execute

console.log("++x",++x); //8
console.log("--y", --y); //4

// Assignment Operators --> to assign values
// =, +=, -=, %=, **=

let p = 5;
let q =2;

p += 4; // p=p+4
q -= 4; // q=q-4
p *= 4;// p=p*4
q /= 4;// q=q/4
p **=4;// p=p**4

console.log("p= ",p);
console.log("q= ",q);

// Comparison Operators --> used to compare to number
// == , ===, !=, !==, >, >=, <, <= 

let a = 5;// number
// let b = 7;
let b = "5";// string -> number

console.log("a == b", a==b);// false (if b is string convert in number and check and return true)
console.log("a!=b", a!=b);// true

// === (Equal to & type) --> Stricter Version
console.log("a === b", a === b);// false
console.log("a !== b", a !== b);// true 



// Logical Operators --> evaluate multiple expression and return boolean values
// Logical AND &&
// Logical OR ||
// Logical NOT !

let x = 7;
let y = 9;

let cond1 = x > y;// false
let cond2 = x < y; // true

//  && if one false --> return false
console.log("cond1 && cond2 = ", cond1 && cond2); // false

//  || --> if one true return true 
console.log("cond1 || cond2 = ", cond1 || cond2); // true

// logical Not ! --> convert true to false & false to true 
console.log("!(7 < 9) = ", !(7 < 9)); // false




// Conditional Statements --> to implement some condition in code

//1. if()
let age = 20;

if (age >= 18){
    console.log("You can vote");
}

let mode = "light";
let color;

if(mode == "dark"){
    color = "black";
}
if (mode == "light"){
    color  = "white";
}
console.log(color);


// 2. if-else()
// we can not write else alone

let mode = "dark";
let color;

if(mode == "dark"){
    color = "black";
} else{
    color = "white";
}

console.log(color);

let age = 12;

if( age >= 18){
    console.log("can vote");
} else{
    console.log("can't vote");
}

// odd or even
let num = 12;

if(num%2 === 0){
    console.log(num, "is even");
} else{
    console.log(num, "is odd");
}

// syntax --> rules

// 3. else-if Statements --> used for multiple conditions

let mode = "green";
let color;

if(mode === "dark"){
    color = "black";
} else if(mode === "blue"){
    color = "blue";
} else if(mode == "red"){
    color = "red";
} else{
    color = "white";
}
console.log(color);



// Ternary Operators --> compact if-else 
// condition ? true output : false output  [a ? b:c ]

let age = 24;

let result = age >= 18 ? "adult" : "not adult";
console.log(result);

// Switch Statements
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

















