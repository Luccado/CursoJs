/*
Primitivos (imutáveis) - String, number, boolean, undefined, 
null ( bigint, symbol) - Valores serão copiados
*/
//let nome = `Lucca`;
//nome[0] = `R`;
//console.log(nome[0], nome);

/*let a = `A`;
let b = a; // Cópia
console.log(a, b);

a = `Outra coisa`;

console.log(a,b);*/

//referência (Mutável) - array, object, function - Passados por referência

/*let a = [1, 2, 3];
let b = [...a];
let c = b;

console.log(a,b)

a.push(4);
console.log(a,b);

b.pop();
console.log(a, b);

a.push(`Lucca`)
console.log(c);*/

const a = {
    nome: `Lucca`,
    sobrenome: `Souza`
};

const b = {...a};

a.nome = `João`;
console.log(b);
console.log(a);