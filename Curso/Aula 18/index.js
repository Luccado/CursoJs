/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> Vai retornar o valor verdadeiro
FALSY

* false
0
" " ' ' ` `
null / undefined
NaN


*/ 
//console.log('Lucca' && "" && 'Luccar');

/*function falaOi () {
    return 'Oi';
}

let vaiExecultar = 'João';

console.log(vaiExecultar && falaOi());
*/
//console.log(0 || false || null || 'luiz' || true) //o OU só precisa de uma verdadeira

//const corUser = "Vermelho";
//const corDef = corUser || 'Preto';
//console.log(corDef);

let a = 0;
let b = null;
let c = 'False';
let d = false;
let e = NaN;

console.log(a || b || c || d ||e);