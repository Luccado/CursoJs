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

function add3h() {
    placar1 = placar1 + 3;
    console.log(placar1);
    document.getElementById("placar1").textContent = placar1
}

//Guest -----

let placarguest = document.getElementById("placarguest");
console.log(placarguest);
placarguest = 0;

function add1g(){
    placarguest = placarguest + 1;
    document.getElementById("placarguest").textContent = placarguest
}

function add2g(){
    placarguest = placarguest +2
    console.log(placarguest)
    document.getElementById("placarguest").textContent = placarguest
}

function add3g(){
    placarguest = placarguest +3
    document.getElementById("placarguest").textContent = placarguest
}