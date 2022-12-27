const numero = Number(prompt("Digite um número"));
let result = document.getElementById("numerox");
let text = document.getElementById("text");
console.log(numero);

result.innerHTML = numero;
text.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
text.innerHTML += `<p>O ${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
text.innerHTML += `<p>O ${numero} é NaN: ${Number.isNaN(numero)}</p>`;
text.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
text.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
text.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;