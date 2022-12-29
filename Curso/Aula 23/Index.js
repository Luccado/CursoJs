//const array = [1, 2, 3];
//array.push(4);
//array[0] = `Luiz`;
//array = `outra`;
//console.log(array);

//const nome01 = `Lucca`;
//const sobrenome01 = `Souza`;
//const idade01 = 22;

//const nome02 = `Luccaa`;
//const sobrenome02 = `Souzaa`;
//const idade02 = 222;

/*const pessoal = {
    nome: `Lucca`,
    sobrenome: `Souza`,
    idade: 22
};

console.log(pessoal.nome)
console.log(pessoal.sobrenome)
*/

/*function criaPessoa (nome, sobrenome, idade){
    return {
        nome, sobrenome, idade};
}

const pessoa1 = criaPessoa(`Lucca`, `Souza`, 22);
const pessoa2 = criaPessoa(`maria`, `Di`, 23);
const pessoa3 = criaPessoa(`João`, `Oliveira`, 24);
const pessoa4 = criaPessoa(`Junior`, `AAAA`, 25);
const pessoa5 = criaPessoa(`Otávio`, `BBBB`, 26);

console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.sobrenome);*/

const pessoa1 = {
    nome: `Lucca`,
    sobrenome: `Souza`,
    idade: `22`,

    fala() {
        console.log(`A minha idade atual é: ${this.idade}`)
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
