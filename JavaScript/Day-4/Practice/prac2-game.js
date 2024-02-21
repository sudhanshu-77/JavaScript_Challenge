// Q.2 Create a game where you start with any random
//  game number. Ask the user to keep guessing the game number until the user enters correct Value.


let gameNum = 35;

let userNum =  prompt("Guess the game number:");

while(userNum != gameNum){
    userNum = prompt("You entered Wrong Number, Guess again");
}
console.log("Congrats You Guessed the right number");

