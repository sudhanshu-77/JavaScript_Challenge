## Window Object
The window object represents an open window in a browser. It is browser's object(not JavaScript's) & automatically create by browser. 

 * It is a global object with lots of properties & methods.

 ## What is DOM ?
When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.

*  we always use console.dir() to print Object.
*  console.log() treat DOM elements specially.
*  DOM helps to do Dynamic Changes in our Webpages.
  
*  Hum HTML ko javaScript ke andar access kr sakte hai , kha kr sakte hai , window object ke andar ek aur Object hoti hai document ke name se , Document is basically a model which is a representation of HTML and we called this DOM.

## DOM Manipulation :- 
1. Selecting with id <br>
   document.getElementById("myId)
2. Selecting with class <br>
   document.getElementsByClassName("myClass") <br> -> return HTML collections, which is similar to array
3. Selecting with tag <br>
   document.getElementsByTagName("p")
4. Query Selector -> returns NodeList
   document.querySelector("myID/myClass/tag") <br>
   -> returns first element

   document.querySelectorAll("myId/myClass/tag") <br>
   -> returns a NodeList

### DOM Properties :-
 * tagName : returns tag for element nodes
 * innerText : returns the text context of the elements and its children
 * inner HTML : returns the plain text or HTML contents in the element
 * textContent : returns textual content even for hidden elements
