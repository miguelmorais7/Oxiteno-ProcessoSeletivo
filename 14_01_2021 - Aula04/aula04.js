//ForEach
//let nomes = ["Miguel", "Jessica", "Raphael"];

//ForEach simples 
/*
nomes.forEach(function(nomes){
    console.log(nomes);
})*/

/* Teste de quebra do foreach - Illegal statement
nomes.forEach(function(nomes){
    if(nomes == "Jessica"){
        break;
    }
    console.log(nomes);
})*/

// Teste com função externa e passar para o foreach
/*
function imprimeNome(nomes){
    console.log(nomes);
}

nomes.forEach(imprimeNome);*/

//Funções

//let num = 10;
/*function metade(num){
    return num / 2;
}

console.log(metade(num));*/
/*
let metade = function(num){return num / 2;}
let x = metade(50);*/
/*
function dobro( array){
    let result = [];
    let i;
    for(i = 0; i != array.length; i++){
        result[i] = dobroAux(array[i]);
        console.log(result)
    }
}

//dobro(function(x){return x * 2}, [1,2,5,10]);
dobro([1,2,5,10]);
function dobroAux(num){
    return num * 2;
}*/

/*let arr = [10,20,30]
let abx =  arr.map(el => el * 3);
console.log(abx)
*/

/*
let arr = [10,20,30]
let abx = arr.map(el => {
    el = el * 3;
    return el += + 100
});
console.log(abx)*/

/*
function arrFn(){
    let self = this
    let arr = [7,8,9]
    let var1 = 10
    let abx = arr.map(function(el){
        self.var1 = 20
        console.log(this.var1)
    })
}*/

/*let qqq
if(qqq == false) console.log('false')

if(qqq)*/

//Exercício func anônima corrigido
function test(arr, fn) {
    for(let i = 0; i < arr.length; i++) {    
      if((fn(arr[i]).length -2) < 3 ) continue;        
      arr[i] = fn(arr[i])
    }
    console.log(arr)
  }
  test(['São Paulo', 'SP', 'Rio de Janeiro', 'RJ'], function(str){
    return `${str} ${str.length}`
  })