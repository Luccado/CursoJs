/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

//If pode ser usado sozinho com a condição dele
//O else-if não pode ser execultado sozinho, assim como o Else
//Pode se criar vários Else-ifs na checagem
//Só pode ser um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

const hora = 990;

if(hora <= 0 && hora <= 11) {
    console.log("Bom dia");
} else if(hora >= 12 && hora <= 17) {
    console.log("Boa Tarde")
} else if(hora >= 18 && hora <= 23) {
    console.log("Boa noite")
} else {
    console.log("Bota hora certa ae nmrl")
}


console.log("---------------");

const tenhoGrana = true;

if (tenhoGrana) {
    console.log("Vou sair de casa");
} else {
    console.log("Num vai tá dando")
}