// Global Variables
var wins = 0;
var lose = 0;
var ties = 0;

var options = ["R", "P", "S"]

function playGame() {
var userChoice = prompt("Enter r, p, or s to play")    


if (!userChoice){
    return;
}

userChoice = userChoice.toUpperCase();

}

var index = Math.floor(Math.random() * options.length); // 0 - 2
var computerChoice = options[index];


console.log(computerChoice);
alert("the computer choice is " + computerChoice);

if (userChoice === computerChoice) {
 ties = ties + 1; // tie += 1; or tie++;
 alert("It's a tie");
}
else if (userChoice=== "R" && computerChoice=== "S") {
    wins++;
    alert("You win")

}

else if (userChoice=== "P" && computerChoice=== "R") {
    wins+= 1;
    alert("You win")
}

else if (userChoice=== "R" && computerChoice=== "P") {
    wins+= 1;
    alert("You win")
}

else if  {
    losses++;
    alert
    
}

console.log("wins ", wins);
console.log("losses ", losses);
console.log("ties ", ties);

alert ("Stats:\nWins: " + wins + "\nLosses: "+ losses + "\nTies "+ ties)

playGame

