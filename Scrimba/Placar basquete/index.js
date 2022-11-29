let Placar1 = document.getElementById("placar1");
console.log(Placar1);
let placar1 = 0;

function add1h() {
placar1 = placar1 + 1;
console.log(placar1);
document.getElementById("placar1").textContent = placar1
}

function add2h() {
    placar1 = placar1 + 2;
    console.log(placar1);
    document.getElementById("placar1").textContent = placar1
}
