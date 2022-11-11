// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById("welcome-el");

let nome = "Lucca";
let greeting = "Welcome back,  ";

welcomeEl.innerText = greeting + nome + ".";
console.log(welcomeEl.innerText);

welcomeEl.innerText += " 😎";