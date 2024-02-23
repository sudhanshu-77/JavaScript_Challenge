// Functions in Js --> reduce repetition
// --> Block of code that performs a specific task, can be invoked whenever needed

function myFunction(){
    console.log("Welcome to Earth");
    console.log("We are Learning Js");
}

myFunction();
myFunction();

// parameter & argument
function myFunction(msg){ // (msg) is parameter -> input
    console.log(msg);
}

myFunction("I love Js");//argument

// Function to calculate sum of two numbers.
function sum(a,b){
    console.log(a+b);
}

sum(1,2);


// return Keyword always return only 1 value.
// function parameters --> like local variables ->have block scope of function
function sum(a,b){
    // (a,b)--> are local variables
    console.log("before return");
    s = (a+b);
    return s;
    console.log("after return");// never execute code after return

}
let val = sum(3,4);
console.log(val);
console.log(sum(2,3));



// Arrow Functions --> compact way of writing function

/* Syntax  -> 
const functionName = (param1, param2..) => {
    do some work
}  */

// arrow Sum Function --> Part of Modern Js
// mostly use for small task
const arrowSum = (a,b) => {
console.log(a+b);
}
arrowSum(3,4);

// arrow Multiplication Function
const arrowMulti = (x,y) => {
    let aM = x*y;
    return aM;
}
console.log(arrowMulti(7,3));

// for single line of code
const printHi = () => console.log("hi") 
printHi();

