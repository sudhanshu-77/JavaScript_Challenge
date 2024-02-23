/* Q.1 Create a function using the "function" keyword that 
takes a Strings an argument & returns the number of vowels in the string. */

function countVowels(str){
    let count = 0;

    for (const char of str){
        if(
        char === "a" ||
        char === "e" || 
        char === "i" || 
        char === "o" || 
        char === "u" 
        ){
            count ++;
        }
    }
    console.log(count);
}
countVowels("hello earth");




// Q.2 Create an Arrow Function to perform Same Task.

const countVow = (str) => {
    let count = 0;

    for (const char of str){
        if(
        char === "a" ||
        char === "e" || 
        char === "i" || 
        char === "o" || 
        char === "u" 
        ){
            count ++;
        }
    }
    console.log(count);
}
countVow("hello world");


