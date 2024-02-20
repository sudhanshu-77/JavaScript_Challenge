// Variables are Containers for Data


age = 24;
age = age+1;
console.log(age);

Name = "Sudhanshu";
Name = Name + " " + "Tripathi";
console.log(Name);
console.log(typeof(Name));

price = 99.9;
console.log(price);
typeof(price);
console.log(typeof(price));

a = null;
b = undefined;
console.log(a);

// Js is Dynamically Typed Language

age = "India";
console.log(age);

isRight = 5>3;
console.log(isRight);

// Variables Rules
// 1. Variable names are case sensitive: "a" & "A" is different.
// 2. Only letters, digits, underscore(_), or $ is allowed. (not even Space)
// 3. Only a letter, underscore(_) or $ should be 1st Character.
// 4. Reserved words cannot be variable names.

// Invalid
full Name = "great India";
console.log(full Name)
123fullName = "GREAT COUNTRY";
console.log(123fullName);
console = "Hello World"
console.log(console);
123 = "GREAT COUNTRY";
console.log(123);


// Valid 
fullName = "Great India";
console.log(fullName);
_fullName = "Great India";
console.log(_fullName);
$fullName = "Great Country";
console.log($fullName);


//Name conventions
fullName // CamelCase --> Mostly Used
fullname // not allowed
full_name // snakeCase
full-name // kebabCase
FullName // pascalCase

// let, const & var

let Name = "Sudhanshu";
console.log(Name);

// var --> var can be re-declared & updated. A global scope Variable.
var age = 20; 

var age = 18;

var age = 25;
console.log(age);

// before 2015 only var is used, let and const are not introduced.
// in 2015 ES6 engine is introduced , and declared two new keyword i.e, let & const.


// let --> Variable cannot be re-declared but can be updated. A block scope variable{}.

let age = 25;

age = 20;

console.log(age);

// const --> Variable cannot be re-declared or updated. A block scope variable.
// mostly use caps-letter to declare variable e.g - PI

const PI = 3.14;
console.log(PI);

// byDefault if declare a variable by using let  and not assign any value , that will always undefined.

let a;
console.log(a);

// for const --> not valid

const a;
console.log(a);

// block scope

{
   let a = 10;
   // can't redefine  same variable in block
   //e.g let a = 10;
   console.log(a); 
}
{
    let a = 5;
    console.log(a);
}

