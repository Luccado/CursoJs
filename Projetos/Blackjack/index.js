let firstCard = 10;
let secondCard = 12;

let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Ganhou mané");
} else {
    console.log("Perdeu mané");
}