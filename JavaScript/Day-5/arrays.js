
// Arrays in Js --> linear way to store (Collections of items)
// e.g -> let info = ["ravi",78,"Delhi"]; --> no preferred
// Arrays are mutable in Js
{
    let marks = [80,90,98,97];
    console.log(marks);
    console.log(marks.length);// property --> give some value which is stored
    console.log(typeof(marks));
}
   


// Array is special type of object , which have key value pair but instead of key we use index 
{
    let heroes = ["hulk", "thor", "spiderman"];
    console.log(heroes);
    console.log(typeof(heroes));
}

// Array indices
{
    let num = [1,3,5,7,9];
    console.log(num);
    console.log(num[2],num[4]);
    num[1] = 32;
    console.log(num);
    
}

// Looping Over an Array
// Print all elements of an array
{
    let heroes = ["hulk","thor","batman","spiderman"];
    for(let idx = 0; idx<heroes.length; idx++){
        console.log(heroes[idx]);
    }
}


// for-of loop is more preferable as compare to for-in
{
    let heroes = ["hulk","thor","batman","spiderman"];
    for(let hero of heroes){
        console.log(hero);
    }
}

{
    let cities = ["Delhi","Mumbai","Noida","Gurugram"];
    for(let city of cities){
    console.log(city.toUpperCase());
    }
}


