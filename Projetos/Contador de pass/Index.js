// document.getElementById("count").innerText = 5
//iniciar com 0
//a cada clique aumentar o contador
//aumentar a variável "count" quando o botão é aumentado
//mudar o "count-el" no HTML e refletir no novo valor

// camelCase
let countEl = document.getElementById("count-el"); // pass in arguments

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    
    console.log(count)
}

//saveeeeee eu

//let saveBt = document.getElementById("save-bt");

//let savebnt = 0

//function save(){

    //saveBt = count
    //saveBt.innerText = saveBt

    //console.log(saveBt);

//}

function save(){
    console.log(count)
}