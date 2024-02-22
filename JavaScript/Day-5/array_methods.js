// Array Methods 
/* 1. Push(): add to end
   2. Pop(): delete from end & return
   3. toString(): converts array to string
   4. Concat: joins multiple arrays & returns result
   5. unshift: add to start
   6. shift: delete from start & return 
   7. slice: returns a piece of the array --> doesn't change in Original Array
   Syntax: slice(startIdx, endIdx)
   8. splice(): change original array(add, remove, replace)
 */

//    1. Push(): add to end
{
    let foodItems = ["Mango","Namkeen", "Apple"];

    console.log(foodItems);
    foodItems.push("chips","panner","pizza");
    console.log(foodItems);
}


// 2. Pop(): delete from end & return
{
    let foodItems = ["Mango","Namkeen", "Apple","pizza"];

    console.log(foodItems);
    let deletedItem = foodItems.pop("pizza");
    console.log(foodItems);
    console.log("deleted",deletedItem);
}


// 3. toString(): converts array to string & no bot change in array return new string
{
    let foodItems = ["Mango","Namkeen", "Apple","pizza"];

    console.log(foodItems.toString());
    console.log(foodItems);

    let marks = [100,98,78,56];
    console.log(marks.toString());
    console.log(marks);
}


// 4. Concat: joins multiple arrays & returns result

{
    let marvelHeroes = ["Hulk","Thor","AntMan"];
    let dcHeroes = ["Spiderman","Batman"];
    let indianHeroes = ["Shaktiman"];
    
    let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);
    console.log(heroes);
}


// 5. unshift: add to start --> (equivalent to push method)
let heroes =  ["thor","hulk","Batman"];
let val = heroes.unshift("Shaktiman");

console.log(heroes);



// 6. shift: delete from start & return 
{
    let heroes =  ["thor","hulk","Batman"];
    let val = heroes.shift();

    console.log(heroes);
    console.log("deleted",val)
}


// 7. slice: returns a piece of the array
// sometime use to make copy of an array
// ending index will no include
{
    let heroes = ["thor","hulk","spiderman","captianAmerica","AntMan","Dr. Strange"];

    console.log((heroes));

    console.log(heroes.slice(1,3));

}


// 8. splice(): change original array(add, remove, replace)
// Syntax --> splice(starIdx,delCount,newE(1...))
{


let arr = [1,2,3,4,5,6,7];

console.log(arr);

arr.splice(2,2,1001,1002);

console.log(arr);

}
// Add Element
{
    let arr = [1,2,3,4,5,6,7];

    console.log(arr);

    arr.splice(2,0,1001,1002);

    console.log(arr);
}

// Delete Elements

{
    let arr = [1,2,3,4,5,6,7];

    console.log(arr);

    arr.splice(4,1);

    console.log(arr);
}


// Replace Elements

{
    let arr = [1,2,3,4,5,6,7];

    console.log(arr);

    arr.splice(3,1,1002);

    console.log(arr);
}


