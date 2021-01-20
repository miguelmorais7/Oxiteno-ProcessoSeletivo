//Revisão - Exercício da aula passada
/*
let indices = [];
let array = ['1', '2', '1', '3', '1', '4', '5', '6', '1'];
let elemento = '1';
let indice = array.indexOf(elemento);
while (indice != -1) {
  indices.push(indice);
  indice = array.indexOf(elemento, indice + 1); //pnto de partida
}
console.log(indices);*/

//Com filter
/*
let array = [1,2,3,4,1,4,5,1,6,1];
let arrAux = [];

array.filter((elemento, index, arr) =>{
    if(elemento == 1){
	   arrAux.push(index);
    }
})/
console.log(arrAux);

//Com map/filter
function encNum (array, num)
{
	let aux = array.map((el, ind) => !(el - num) * (ind + 1));
	aux = aux.filter(e => e);
	aux = aux.map(e => e - 1);
	return aux;
}
console.log(encNum(array, 1));

var array = [1, 2, 3, 1, 4, 5, 1, 6, 1];
var indexes = [];
console.log(
  array.filter(function (value, index) {
    return value == 1 && indexes.push(index);
  })
);
console.log(indexes);

let arr = [1, 2, 3, 1, 4, 5, 1, 6, 1];
let newArr = [];
console.log(arr.indexOf(1))
do {
  newArr.push(arr.indexOf(1))
  arr[arr.indexOf(1)] = 0;
} while (arr.includes(1))
 console.log(newArr)*/


//Exercicio 1
/*
let array = [6,1,3,2,4,7,9,8,0];
let arrP = [], arrI = [], arrConcat = [];

function ordem(arr){
    for(let i = 0; i < arr.length; i++){
	   if(arr[i] % 2 == 0){
		  arrP.push(arr[i]);
	   }
	   else{
		  arrI.push(arr[i]);
	   }
    }
    //arrP.sort();
    arrConcat = arrP.concat(arrI).join('-');
    return arrConcat;
}

array.sort();
console.log(ordem(array))
//console.log(exibeConcat(arrConcat));
console.log(`Pares: ${arrP.join(' ')}\nímpares: ${arrI.join(' ')}`);*/

/*let arr = [6,1,3,2,4,7,9,8,0]
  function imprimeTodos(arr) {
    let meuArr = [...arr];
    meuArr = meuArr.sort((a,b)=>{
	 return a-b
    })    
    const pares = meuArr.filter((val)=>{
	 return val%2 == 0
    })
    const impares = meuArr.filter((val)=>{
	 return val%2 != 0
    })
    console.log(pares.concat(impares).join(' - '))
    console.log(`pares ${pares.join(' ')}`)
    console.log(`impares ${impares.join(' ')}`)
    console.log('objeto originial',arr)
  } 
  imprimeTodos(arr);*/

//Exercício 2
/*
let arr = [10, 1, 5, 3, 4, 7, 9, 2, 8, 6];

function ordena(arr) {
	let aux;
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr.length; j++) {
			if(arr[i] < arr[j]) {
				aux = arr[i];
				arr[i] = arr[j];
				arr[j] = aux;
			}
		}
	}
	return arr;
}
console.log(ordena(arr));*/

/*function ordena(arr){
	let aux;
	arr.forEach(i => {
		for(let j = 0; j < arr.length; j++{
			if(arr[i] < arr[j]) {
				aux = arr[i];
				arr[i] = arr[j];
				arr[j] = aux;
			}
		}
		/*
		arr.forEach(j => {
			if(arr[i] < arr[j]) {
				aux = arr[i];
				arr[i] = arr[j];
				arr[j] = aux;
			}
		});
	});
	return arr;
}*/

//Orientação a Objetos
//Classe - Objeto
/*
class Pessoa{
	constructor(nome, idade){
		this.nome = nome;
		this.idade = idade;
	}
	falar(){
		console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos`);
	}
}

let obj = new Pessoa('Miguel',21);*/

//Herança
class Conta{
	constructor(numero, saldo){
		this.numero = numero;
		//this.saldo = saldo;
		this._saldo = saldo;
	}
	imprimeSaldo(){
		//console.log(`Saldo atual: ${this.saldo}`);
		console.log(`Saldo atual: ${this._saldo - 2}`);
	}
}

class ContaCorrente extends Conta{
	constructor(numero, saldo){
		super(numero, saldo); //Traz da classe pai para a herdada
		this.nome = 'Ricardo';
	}
	static conta(numero){
		console.log('Numero: ' + this.numero);
	}
	/*static conta(numero){
		console.log('Conta indisponivel');
	}*/
	static conta(){
		console.log(`${this.nome}, o num da sua conta está indisponivel`)
	}

	get saldo(){
		return this._saldo + ' abaixo de 1000';
	}
	set saldo(val){
		this._saldo = val;
	}
}

class ContaPoupanca extends Conta{
	constructor(numero, saldo){
		super(numero, saldo);
	}
	imprimeSaldo(){
		//Override
		console.log(`Saldo atual: ${this._saldo}`); //Polimorfismo
		//ContaCorrente.conta();
	}
}
ContaCorrente.conta()

let CC = new ContaCorrente(123, 10);
let CP = new ContaPoupanca(456, 10);
//console.log(CC.saldo)
//console.log(CC.imprimeSaldo())
CC.imprimeSaldo()
CP.imprimeSaldo()
CC.saldo
//CC.conta()