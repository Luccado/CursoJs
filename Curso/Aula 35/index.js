const pessoa = {
    nome: 'Lucca',
    sobrenome: 'Souza'
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

//             01
//const nome = 'Lucca';
//const nome = ['Lucca', 'Luiz', 'Otávio']


// //for (let i = 0; i < nome.length; i++) {
// //    console.log(nome[i])
// //}


// // for (let i in nome) {
// //     console.log(nome[i]);
// // }

// for (let valor of nome) {
//     console.log(valor);
// }

// console.log('#####')

// nome.forEach(function(el){
//     console.log(el)
// });