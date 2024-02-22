/* Q. Prompt the user to enter their full name. Generate a username for them based on Input. 
 Start username with @, followed by their fullname length.
 e.g --> user name = "sudhanshutripathi", username should be "@sudhanshu14" */

let fullName = prompt("Enter your full Name without Space:");

let userName = "@" + fullName + fullName.length;
console.log(userName);