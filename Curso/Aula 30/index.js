// // let a = 'A'; // B
// // let b = 'B'; // C
// // let c = 'C'; // A


// // const letras = [b, c, a];
// // [a, b, c] = numeros;

// // console.log(a, b, c);

// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// // const um = numeros[0];

// // console.log(numeros[0]);

// const [um, , tres, , quatro, , sete] = numeros;
// console.log(um, tres, quatro, sete);
// //console.log(resto);

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]

//console.log(numeros[1][2]); 6
//const [,[,,seis]] = numeros; 6 tb
const[lista1, lista2, lista3] = numeros;
console.log(lista3[2]) //9