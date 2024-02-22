/* Q.3 Create an array to store Companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM","Netflix"
a. Remove the first company from the array
b. Remove Uber & Ola in its place
c. Add Amazon at the end
*/

{
    let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM","Netflix"];

    arr.splice(0,1);
    console.log(arr);

    arr.splice(1,2,"OLA");
    console.log(arr);

    arr.splice(5,5,"Amazon");
    console.log(arr);
}

// OR
{
    let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM","Netflix"];

    arr.shift();
    console.log(arr);

    arr.push("Amazon");
    console.log(arr);

}