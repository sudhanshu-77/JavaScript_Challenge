/* Q.1 - Create a new button element. Give it a text "click me" , background color of red & text color of white.
Insert the button as the first element inside the body tag. */

let newBtn = document.createElement("button");
newBtn.innerText = "click me";

newBtn.style.color = "White";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);


/*Q.2 - Create a <p> tsg in html, give it a class & some styling.
    Now create a new class in CSS and try to append this class to the <p> element.
    
    Did you  notice, how you overwrite the class name when you add a new one? 
    Solve this problem using classList. */

    //classList -> Collection of the class attributes of the Elements. 

 let para = document.querySelector("p");
para.setAttribute("class", "newClass");
console.log(para);

para.classList.add("newClass");
console.log(para);
