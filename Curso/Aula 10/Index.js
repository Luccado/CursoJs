// String, number, undefined, null, boolean, symbol
const nome = 'Lucca'; // String
const nome1 = "Lucca"; // String
const nome2 = `Lucca`; // String
const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // undefined -> não aponta para local nenhum na memória
let sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const boolean = true; // Boolean = true, false (lógico)
const aprovado = false;

console.log(typeof nome, nome);

let a = [1, 2];
let b = a;

console.log(a,b);

b.push(3);

console.log(a, b);