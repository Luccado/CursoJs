//                 01234567
let umaString = "Um \"texto\" Um";



console.log(umaString[4]);

console.log(umaString.charAt(8));

console.log(umaString.concat( ' ', 'em', ' ', 'um', ' Lindo dia'));

console.log(umaString + ' em um lindo dia.');

console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('o'));

console.log(umaString.lastIndexOf('m', 3))

console.log(umaString.match(/[a-z]/g));

console.log(umaString.replace('Um', 'Outra'));

console.log(umaString.replace(/Um/g, 'Outra'));

console.log(umaString.length);

console.log(umaString.slice(1,7)); //tem como começar no negativo

console.log(umaString.substring(umaString.length - 5, umaString.length - 1));  //slice é melhor

console.log(umaString.toLocaleUpperCase());

console.log(umaString.toLocaleLowerCase());