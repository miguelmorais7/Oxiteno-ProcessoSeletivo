//Int
var idade = 18

if(idade >= 18){
    console.log("adulto")
}

//String
var nome = "joão";

if(true){
    //nome = nome + " da silva"
    nome += " da silva"
}

console.log(nome)

//Array
var arr = ["joão", 20, ["verde", "vermelho"]];

if(true){
    //console.log("nome: " + arr[0] + " idade: " + arr[1]); forma verbosa
    console.log(arr[2][1]); //impressão do subitem do objeto, do indice de segunda posição
    console.log(`nome: ${arr[0]}, idade: ${arr[1]}`);
}

