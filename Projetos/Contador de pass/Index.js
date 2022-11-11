// document.getElementById("count").innerText = 5
//iniciar com 0
//a cada clique aumentar o contador
//aumentar a variável "count" quando o botão é aumentado
//mudar o "count-el" no HTML e refletir no novo valor

// camelCase
let countEl = document.getElementById("count-el"); // pass in arguments
let saveEl = document.getElementById("save-el");
let reset = document.getElementById("reset-btn");
let count = 0;


function increment() {
    count += 1;
    countEl.textContent = count;
    
    console.log(count);
}




function save(){
    saveText = count + " - ";
    saveEl.textContent += saveText;
    countEl.textContent = 0
    count = 0
}


//saveeeeee eu -------

//let saveBt = document.getElementById("save-bt");

//let savebnt = 0

//function save(){

    //saveBt = count
    //saveBt.innerText = saveBt

    //console.log(saveBt);

//}
