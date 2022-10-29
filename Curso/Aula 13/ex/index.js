const nome = prompt('Digite seu nome seu nome completo');

//window.document.write('Testeee');

//document.body.innerHTML += ' Qualquer outraz coisa <br />'
//document.body.innerHTML += ' Qualquer outraz coisa <br />'
//document.body.innerHTML += ' Qualquer outraz coisa <br />'

nomelow = nome.toLowerCase();
nomeUpper = nome.toLocaleUpperCase();
nomePosP1 = nome.indexOf("c") + 1;
nomeLasPosP1 = nome.lastIndexOf("c") + 1;
nomeLasThree = nome.slice(-3);


document.body.innerHTML = `O seu nome é: <strong>${nome}</strong> <br />`;
document.body.innerHTML += `Seu nome tem: <strong>${nome.length}</strong> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome.charAt(1)}</strong> <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra "C" no seu nome? <strong>${nomePosP1}</strong> <br />`;
document.body.innerHTML += `Qual o último índice da letra "C" no seu nome: <strong>${nomeLasPosP1}</strong> <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nomeLasThree}</strong> <br />`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nomeUpper}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras munúsculas: <strong>${nomelow}</strong> <br />`;

//Dava de fazer sem declarar funções.
