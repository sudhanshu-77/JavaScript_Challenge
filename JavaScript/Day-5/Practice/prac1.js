// Q.1 For a given array with marks of students -> [85,98,44,36,61]
// Find the average marks of the entire class

{
    let marks = [85,98,44,36,61];

    let sum = 0;

    for(let val of marks){
        sum += val;
    }
    let avg = sum / marks.length;
    console.log(sum);
    console.log(`avg marks of the class = ${avg}`);
}