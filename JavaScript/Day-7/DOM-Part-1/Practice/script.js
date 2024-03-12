/* Q.1 - Create a H2 heading element with text - "Hello JavaScript". Append "from Hello Earth"
to this text using JSON. */

// for access any element we have on info from 3 i.e id, class & tag

let h2 = document.querySelector("h2");

console.dir(h2)

h2.innerText = h2.innerText + " Hello Earth "; //concatenate

h2.style.backgroundColor = "red";


/* Q.2 -  Create 3 div with common class - "box". Access them & add some unique
text to each of them. */

var divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";