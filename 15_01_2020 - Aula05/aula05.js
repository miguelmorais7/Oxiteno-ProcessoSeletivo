//Revisão função
/*
let numeros = [1,2,3,4,5]

function teste(arr, funcao){
    arr.forEach(el => {
        el = funcao(el);
        console.log(el);
    });
}*/

/*teste(numeros, function(numero){ //Func anonima dentro do bloco
    return numero * 2;
});*/
/*
let array = [1,2,3,4,1,4,5,1,6,1];

arrAux = [];

function encontraUm(arr) {
    let in = arr.indexOf(1);
    
    return arr;
}
console.log(array.filter(encontraUm))
console.log(arrAux)*/

//teste(numeros, dobrar);

//Func anonima fora do bloco
/*
function dobrar(numero) {
    return numero * 2;
}*/

//Array - Métodos modificadores

//Push - add elemento no final do array
//let arr = ['a','b','c'];
/*let arr = [1,2,3,4];
let par = [];

arr.forEach(element =>{
    if(element % 2 == 0){
        par.push(element) //Adiciona el do arr p/ par
    }
})
//arr.push('d');
console.log(par);*/

//pop - remover elemento do fim do array
/*let arr = [1,2,3,4,5,6];
let par = [];

arr.forEach(element =>{
    if(element % 2 == 0){
        par.push(element) //Adiciona el do arr p/ par
    }
})

console.log(par.pop());

//Shift - tira do inicio
par.shift()
*/
//Unshift - add el no inicio do arr
/*
let arr = [1,2,3,4];
let par = [];

arr.forEach(element =>{
    if(element % 2 == 0){
        par.push(element)
    }
})
par.unshift(0);
console.log(par);*/

//Splice - pode deletar e add na mesma iteração
//splice(indice, qtd a deletar, item a ser add)

//Splice - add
/*let arr = ['a', 'c'];
arr.splice(1,0,'b');
console.log(arr);*/

//Splice - edit
/*let arr = ['a','b','c'];
arr.splice(1,1,'bbb');
console.log(arr);*/

//Splice - remove
/*let arr = ['a','b','c'];
arr.splice(1,1);
console.log(arr);

let arr = ['a','b','c'];
arr.splice(1,2);
console.log(arr);

let arr = ['a', 'b','c','d','e'];
arr.splice(3, arr.length);
console.log(arr);

let arr = ['a', 'b','c','d','e'];
arr.splice(3, arr.length, 'w','f','g');
console.log(arr);*/

//Sort - ordena o array de acordo com a tabela unicode
/*let arr = ['c','b','a',10,'@'];
arr.sort();
console.log(arr);

let num = [1,2,3,4,5,6,7,8,9,10];
console.log(num.sort());

let num = [1,2,3,4,5,6,7,8,9,10];
console.log(num.sort(function (a,b) {
    return a - b;
}));

let num = [1,2,3,4,5,6,7,8,9,10]; //Decrescente
console.log(num.sort(function (a,b) {
    return b - a;
}));

let num = [1,2,3,4,5,6,7,8,9,10];

function ordenar(num, ordem){
    let ordenacao = num.sort(function (a,b){
        return ordem == 'asc' ? a-b : b-a;
    })
    return ordenacao;
}

console.log(ordenar(num, 'asc'));*/


//Métodos de acesso

//Concat - faz merge de arrays distintos
/*
let arr1 = [1,2,3,4,5];
let arr2 = [5,6,7,8,9,10]
let arrMerge = arr1.concat(arr2);

console.log(arrMerge);*/

//Includes - verifica se determinado valor existe no array
/*let arr = [1,2,3,4,5];
console.log(arr.includes(11));*/

//IndexOf (encontra o indice do elemento no array)
/*let letras = ['a','b','c'];
console.log(letras.indexOf('a'));*/

/*let arr1 = ['a','b','c'];
console.log(arr1.indexOf('c',2));*/

/*let arr = ['c', 'b', 'a'];
arr.sort();
console.log(arr.indexOf('c'))*/

//Join
/*
let arr1 = ['c','b','a']
console.log(arr1)
console.log(arr1.join("Teste"));*/




let array = [1,2,3,4,1,4,5,1,6,1];
let arrAux = [];

let index = array.indexOf(1); //Inicializa o index com a primeira ocorrência
while(index != -1){ 
  arrAux.push(index);
  index = array.indexOf(1, index + 1); //Incrementa para o próximo índice
}
console.log(arrAux);


/*

for(let i = 0; i < array.length; i++){
    arrAux[i] = array.indexOf(1,array[i])
}
/*array.forEach(el => {
    
    arrAux = el;
});*/

//console.log(arrAux);

/*for(let i = 0; i < array.length; i++){
    let index = array.indexOf(1);
    arrAux[i] = index;
}
console.log(arrAux);*/
/*
function encontraUm(array) {
    return array.indexOf(1);
}*/


//Map - invoca callback 
/*
let arr = [1,2,3,4,5]
//arr.map(element => element * 2);
//console.log(arr.map(element => element * 2)) 
console.log(arr.map(function(numero){ //arrow function
    return numero * 2;
}))*/




