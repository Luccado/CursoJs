const pessoa = {
    nome: 'João',
    sobrenome: 'Carlos',
    idade: 30
};

// const chave = 'nome';
// console.log(pessoa.nome);
// console.log(pessoa['nome'])

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for (let i in frutas) {
//     console.log(frutas[i]);
// }