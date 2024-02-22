// Array Methods 
/* 1. Push(): add to end
   2. Pop(): delete from end & return
   3. toString(): converts array to string
   4. Concat: joins multiple arrays & returns result
   5. unshift: add to start
   6. shift: delete from start & return 
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

