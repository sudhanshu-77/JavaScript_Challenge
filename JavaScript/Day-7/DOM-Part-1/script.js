console.log("Hello");

console.log(window);

console.dir(document.body)

// HTML ko javaScript ke andar access krneka tarika hai DOM.


// DOM Manipulation :- 
/*1. Selecting with id <br>
   document.getElementById("myId) */

let heading = document.getElementById("heading"); //h1
console.log(heading);


/*2. Selecting with class <br>
   document.getElementsByClassName("myClass") <br> -> return HTML collections, which is similar to array */
let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);

/*3. Selecting with tag <br>
   document.getElementsByTagName("p") */

let parahs = document.getElementsByTagName("p");
console.dir(parahs);

/*4. Query Selector
   document.querySelector("myID/myClass/tag") <br>
   -> returns first element

   document.querySelectorAll("myId/myClass/tag") <br>
   -> returns a NodeList */

let firselements = document.querySelector(".myClass");
console.dir(firselements);

let allElements = document.querySelectorAll(".myClass");
console.dir(allElements);

/* ### DOM Properties :-
 * tagName : returns tag for element nodes
 * innerText : returns the text context of the elements and its children
 * inner HTML : returns the plain text or HTML contents in the element
 * textContent : returns textual content even for hidden elements */

