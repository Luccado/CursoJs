const pessoa = {
    nome: 'Lucca',
    sobrenome: 'Souza',
    idade: 22,
    endereco: {
        rua: 'Av Brasil',
        numero: 132
    }
};


const { nome, ...resto } = pessoa;
//const {endereco: { rua: r = 12345, numero}, endereco} = pessoa;
//const { nome, sobrenome, endereco } = pessoa;
console.log(nome, resto);