let firstCard = 1;
let secondCard = 1;
let hasBlackJack = false
let isAlive = true
let message = "";
let cards = [firstCard, secondCard] // array - lista ordenada de items
let sum = firstCard + secondCard;
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el")
console.log(cardsEl)

/*if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Ganhou mané");
} else {
    console.log("Perdeu mané");
}*/

function startGame(){
    renderGame();
}

function renderGame() {

    sumEl.textContent = "Soma: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }

    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }

    else {
        message = "You're out of the game!"
        isAlive = false
    }
    document.getElementById("message-el").textContent = message //gambiarra - o certo seira "messageEl.textContent = message"

}
// CASH OUT!
//console.log(hasBlackJack);
//console.log(isAlive)

function newCard() {
    console.log("Drawing a new card from the deck!");
    let newCard = 5;
    sum += newCard;
    cards.push(cards)    
    console.log(cards)
    renderGame(); 
}