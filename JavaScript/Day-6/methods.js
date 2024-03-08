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


// More Array Methods
// 1. Map -> Create a new array with the results of some operation. The value its callback return are used to form new array.

// Syntax: arr.map(callbackFnx(value, index, array))

{
    let nums = [23,24,25,26];

    nums.map((val) => {
        console.log(val);

    });
    
}

{
    let nums = [23,24,25,26];

  let newArr =  nums.map((val) => {
        return val * val;

    });
    console.log(newArr); 
}


//2.  Filter -> Creates a new array of elements that give true for a condition/filter.
// E.g - all even elements
/* Syntax: let newArr = arr.filter((val) => {
    return val%2 == 0;
})  */


{
    let arr = [1,2,3,4,5,6,7,8,9];

    let evenArr = arr.filter((val) => {
        return val % 2 == 0;
    });
    console.log(evenArr);
    

}



// 3.  Reduce -> Performs some operations & reduces the array to a single value. It returns that single value.

 {
    let arr = [12,13,14];

    const output = arr.reduce((prev, curr) => {
        return prev + curr;
    });
    console.log (output);
 }

//  To find Largest in an Array
{
    let arr = [12,9,14];

    const output = arr.reduce((prev, curr) => {
        return prev > curr ? prev : curr;
    });
    console.log (output);
 }


