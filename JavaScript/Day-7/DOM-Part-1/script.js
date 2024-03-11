console.log("Hello");

console.log(window);

console.dir(document.body)

// HTML ko javaScript ke andar access krneka tarika hai DOM.
/* 4 Pillars of DOM :- 
1. Selection of an Element
2. Changing HTML
3. Changing Css
4. Event Listener   */


// DOM Manipulation :- 
/*1. Selecting with id <br>
   document.getElementById("myId) */

let heading = document.getElementById("heading"); //h1
console.log(heading);


/*2. Selecting with class 
   document.getElementsByClassName("myClass")  -> return HTML collections, which is similar to array */
let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);

/*3. Selecting with tag 
   document.getElementsByTagName("p") */

let parahs = document.getElementsByTagName("p");
console.dir(parahs);

/*4. Query Selector
   document.querySelector("myID/myClass/tag") 
   -> returns first element

   document.querySelectorAll("myId/myClass/tag") 
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

// Difference between inner HTML and Text Content;

var box = document.querySelector("#box");
box.innerHTML = "<h1> Hello </h1>" ;


var box = document.querySelector("#box");
box.textContent = "<h1> Hello </h1>" ;


// Event Listener

var bulb = document.querySelector(".bulb1");
var btn = document.querySelector("button");

var flag = 0

btn.addEventListener("click",function(){
   if(flag == 0){
      bulb.style.backgroundColor = "red"
      console.log("Cliocked")
      flag = 1
   } else {
      bulb.style.backgroundColor = "transparent"
      console.log("Click Again")
      flag = 0
   }
   
});