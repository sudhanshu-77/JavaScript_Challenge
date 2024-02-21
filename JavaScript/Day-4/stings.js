// Strings --> String is a sequence of characters used to represent text

/* Create String --> let str = "Hello Earth";
String Length --> str.length 
String Indices --> str[0],str[1],str[2] */

 let str = "Hello Earth";
console.log(str.length);
console.log(str[0],str[1]);

/* Template Literals in jS --> A way to have expression in strings
 TL is a special type sting
 e.g --> `this is template literal`*/


// Example TL
let sentence = `This is template literal`;
console.log(typeof(sentence));



/* why use ? 
 String Interpolation --> To create strings by doing substitution of placeholders

e.g -> `string text${expression}string text` */

let obj={
    item: "pen",
    price: 15,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees.`
console.log(output); // Literal e.g

console.log("the cost of",obj.item,"is ",obj.price,"rupees");// normal e.g


let specialString = `This is a template  ${1 + 4 + 5}`;
console.log(specialString);



/* escape characters --> e.g ->
\n -> give next line
\t -> give tap space
*/ 


console.log("Hello\nEarth");
console.log("Hello\tEarth");

let str = "Hello\tEarth"; // both characters count as single e.g HelloEarth count as 1.
console.log(str.length);// 11



// String Methods in Js --> is a block of code to perform some tasks on string
// Strings are Immutable in Js
// Methods can't change on original value they create new value and store value

/* These are built in functions to manipulate a string
1. str.toUpperCase()
2. str.lowerCase()
3. str.trim() // remove whitespaces 
4. str.slice(start, end?) // returns part of string
5. str1.concat(str2) // joins str2 with str1
6. str.replace(searchVal, newVal)
7. str.charAt(idx) */



// str.toUpperCase()
let str = "Hello Earth";
console.log(str);
console.log(str.toUpperCase());


// str.toLowerCase()
let str = "Hello World";
let newStr = str.toLowerCase();
console.log(newStr);


// str.trim() -->  remove whitespaces
// --> remove starting & end spaces of string
let str = "  Hello Earth Js  ";
console.log(str.trim());


// str.slice(start, end?) // returns part of string
let str = "Hello123";
console.log(str.slice(1,6));


// str1.concat(str2) // joins str2 with str1
let str1 = "Hello";
let str2 = "Earth";
{ 
    let res = str1.concat(str2);
console.log(res);
}

let res = "I am learning js "+ str1 + str2;
console.log(res);


// str.replace(searchVal, newVal)
{ 
    let str = "abcdefgh";
let res = str.replace("b","z");
console.log(res);
console.log(str.replaceAll("d","7"));
}


// str.charAt(idx)
{
    let str = "ILoveJs";
    res = str.charAt(4);
    console.log(res);
}

