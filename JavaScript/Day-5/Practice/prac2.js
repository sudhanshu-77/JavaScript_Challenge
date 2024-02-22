/* Q.2 For a given array with prices of 5 items -> [250,644,300,900,50]
 All items have an offer of 10% OFF on them. Change the array to store final 
price after applying offer. */

// by using for --> more preferred
let items = [250,644,300,900,50];

for(let i = 0; i<items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);


// by using for-of loop
{
    let items = [250,644,300,900,50];

    let idx = 0;

    for(let val of items){
        let offer = val /10;
        items[idx] = items[idx] - offer;
        console.log(`value after offer = ${items[idx]}`);
        idx++;

    } 
    
}



