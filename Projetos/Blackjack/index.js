let firstCard = 10;
let secondCard = 12;
let hasBlackJack = false
let isAlive = true
let message = "";

let sum = firstCard + secondCard;

/*if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Ganhou mané");
} else {
    console.log("Perdeu mané");
}*/

if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
}

else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
}

else {
    message = "You're out of the game! 😭"
    isAlive = false
}

// CASH OUT!
//console.log(hasBlackJack);
//console.log(isAlive)
//console.log(message);