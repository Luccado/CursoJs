// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);
// const data = new Date(2022, 3, 20, 15, 14, 27); // ano, mes, dia, hora, minuto, segundo, milésimo de segundo
// const data = new Date('2022-04-20 20:20:59');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay());
// console.log(data.toString());
// console.log(Date.now())

function zeroaAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroaAEsquerda(data.getDate());
    const mes = zeroaAEsquerda(data.getMonth() +1);
    const ano = zeroaAEsquerda(data.getFullYear());
    const hora = zeroaAEsquerda(data.getHours());
    const min = zeroaAEsquerda(data.getMinutes());
    const segundo = zeroaAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano}/${hora}/${min}/${segundo}/`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil) 
