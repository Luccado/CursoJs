// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = retorna o próprio número
// Checar se o número é realmente um número
// Use a função com número de 0 a 100 - while i <= 100

let x = 3
function FizzBuzz(x) {
    if (x / 3 % 1) {
        console.log('Fizz')
    }
}

console.log(FizzBuzz(3))