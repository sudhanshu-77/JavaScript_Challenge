// Q.3 We are  given array of marks of students. Filter out the marks of students that scored 90+ .

{
    let marks = [97, 67, 32,58, 99, 87];

    let toppers = marks.filter((val) => {
        return val > 90;
    });
    console.log(toppers);
}



/* Q.4  Take a number n as a input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the Array.
Use the reduce method to calculate product of all numbers in the array. */


    
let n = prompt("enter a number : ");

let arr = [];

for(let i = 1; i<=n; i++) {
    arr[i-1] = i;
}

console.log(arr);

let sum = arr.reduce((re, curr) => {
    return res + curr;
})

console.log(sum);


let factorial = arr.reduce((res, curr ) => {
    return res * curr;
});

console.log("factorial = " , factorial);