//Methods in js : - methods are also a functions if  we associate a function with any Object or Data Structures it becomes method.

// forEach Loop in Arrays --> To create a Loop
/* Syntax: arr.forEach( callBackFunction) 
CallBack Function --> It is a function to execute for each element in the array */

// A callback is a function passed as an argument to another function.

let arr = [1,3,5,7,9];

arr.forEach(function printVal(val){
    console.log(val);
} );

console.log(arr);

// by using Arrow Function
{
    let arr = [1, 2, 3, 4];
    

    arr.forEach((val)=> {
        console.log(val);
    });
    
}


// example by using  string values

{
    let arr = ["delhi", "mumbai", "noida"];

    arr.forEach((val) => {
        console.log(val.toUpperCase());
    });
}

// CallBack function has 3 parameters:
/* value -> item
    index -> position
    array itself */
    
    {
        let arr = ["delhi", "mumbai", "noida"];
    
        arr.forEach((val, idx, arr) => {
            console.log(val.toUpperCase(), idx, arr);
        });
    }

// forEach method is only use for Array not use for String

/*  What is Higher Order Function or Method ? 
    Higher order functions are those who takes another function as a parameter inside them or they return any function as a output.
    e.g -> forEach(callBackFunction)
 */