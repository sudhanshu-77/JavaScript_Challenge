// Loops in Js
// Loops are used to execute a piece of code again & again

// 1. for Loop

// Print 1 to 5
for(let count = 1; count < 5; count++){
    console.log("Hello World");// 5 execute
}
console.log("loop completed");

// Calculate sum of 1 to 10
let sum = 0;
let n = 10;
for(let i= 1; i <= n; i++){
    sum = sum+i;
}
console.log("Sum = ", sum);// 55

// Infinite Loop --> never ending loops --> not recommended
// for(let i= 1; i >=0; i++){
//     console.log("i=",i);
// }


// 2. while Loop 
let i = 1;
while(i<=5){
    console.log("Hello World!");
    i++;
}

// 3. do-while loop --> always run 1 time and then check conditions
let i = 1;
do{
    console.log("i=",i);
    i++;

} while(i <= 10);

// 4. for-of Loop --> help in iterates in special datatypes
// used for Strings & Arrays
/* syntax --> for(let val of strVar){
     do some work
}*/ 

let str = "Hello Earth";
let size = 0;

for(let val of str){
    console.log("val=",val);
    size++;
}

console.log("size of string is", size);



// 5. for-in Loop --> return keys from key value pairs & access both
// used for objects type
// syntax--> for(let key in objVar){
    // do some work
// }

let student ={
    name: "Ravi Kumar",
    age: 20,
    cgpa: 7.9,
    isPass: true,
};
for(let key in student){
    console.log("key=",key, "value=",student[key]);
}



