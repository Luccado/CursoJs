const nome = 'Lucca'
const sobrenome = 'Souza'
const idade = 22
const peso = 64
const altura = 1.82
let imc = peso / (altura * altura)
let anoNascimento = 2022 - idade

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)