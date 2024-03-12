//  DOM Manipulation Part -2


/*  Attributes : -
 1. getAttribute(attr) //to get attribute value */

let div = document.querySelector("div");

console.log(div);

let id = div.getAttribute("id");
console.log(id);

let parag = document.querySelector("p");
console.log(parag.getAttribute("class"));

/* 2 . setAttribute(attr, value) //to set the attribute val th */

let parag1 = document.querySelector("p");
console.log(parag1.setAttribute("class","123"));

// Style
// node.style

let class1 = document.querySelector(".box");
class1.style.backgroundColor  ="yellow";

class1.style.fontSize = "24px";

class1.innerText = "Hellooo";


/* Insert Elements : 
 new element add is a two step Process 1st create an element & 2nd add an element. */

  let newBtn = document.createElement("button");
  newBtn.innerText = "click me";
  console.log(newBtn);

  let div2 = document.querySelector("#box2");
  div2.append(newBtn);

  div2.prepend(newBtn);

  div2.before(newBtn);

  div2.after(newBtn);

let para = document.querySelector("p");
para.remove();