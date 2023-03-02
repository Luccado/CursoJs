const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {
// for (let i in numeros) {
// for (let i = 0; i < numeros.length; i++) {
let i = 0;
// while (i < numeros.length) {
do {
    let numero = numeros[i];
    
    if (numero === 2) {
        console.log('pulando o 2');
        i++;
        continue; //pula para a próxima iteração
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado saindo...')
        i++;
        break; // encontrou - não será executado mais nada, dependendo de onde colocado nem mesmo o "7"
    }

    // if (numero === 5) {
    //     continue;
    // }

    i++;
} while (i < numeros.length);