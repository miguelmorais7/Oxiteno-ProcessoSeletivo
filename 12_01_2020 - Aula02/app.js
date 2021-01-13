//If e Else
/*var idade = 18

if(idade >= 18){
    console.log("você é adulto")
}
else{
    console.log("Você não é adulto")
}*/


/*var nome = "Miguel Morais",
    idade = 20,
    arrMsg = ["Se prepare, sua vida começará a passar mais rápido!",
            "Depois dos 20 é um pulo pra chegar nos 30!"];

if(idade <= 20){
    console.log(`${nome}, ${arrMsg[0]}`);
}
else{
    console.log(`${nome}, ${arrMsg[1]}`);
}*/

/*var nome = "Miguel Morais",
    idade = 15,
    arrMsg = ["Se prepare, sua vida começará a passar mais rápido!",
              "Bem vindo ao time, não vai demorar para descermos pela porta da frente!",
              "Temos inveja de você :("];

if(idade > 30){
    console.log(`${nome}, ${arrMsg[1]}`);
}
else if(idade >= 20){
    console.log(`${nome}, ${arrMsg[0]}`);
}
else{
    console.log(`${nome}, ${arrMsg[2]}`);
}*/
/*

//Switch Case
var nome = "Miguel Morais",
    idade = 21,
    arrMsg = ["Bem vindo ao time, não vai demorar para descermos pela porta da frente!",
              "Se prepare, sua vida começará a passar mais rápido!",
              "Temos inveja de você :("];

switch(idade){
    case (idade > 30):
        console.log(`${nome}, ${arrMsg[0]}`);
        break;
    case (idade >= 20):
        console.log(`${nome}, ${arrMsg[1]}`);
        break;
    default:
        console.log(`${nome}, ${arrMsg[2]}`);
}*/
/*if(idade > 30){
    console.log(`${nome}, ${arrMsg[1]}`);
}
else if(idade >= 20){
    console.log(`${nome}, ${arrMsg[0]}`);
}
else{
    console.log(`${nome}, ${arrMsg[2]}`);
}*/

/*
var mes = "março";

switch(mes){
    case "janeiro":
    case "fevereiro":
    case "março":
        console.log("primeiro trimestre");
        break;
    case "abril":
        console.log("Mes de abril");
        break;
    default:
        console.log("outro mes");
}

//If Ternário
var bool = true;
var test;

test = bool == true ? "verdade" : "falso";

console.log(test)

//if (bool) console.log('falso');
*/
/*

//Escopo vs bloco - Let vs var
function test(){
    if(true){
        var nome = "escopo do if";
    }
    console.log(nome);
}
test();*/

/*

function test(){
    let nome = "func test";
}

//Escopo com let
function teste(){
    var nome = "função teste";
    function chamaNome(){
        var idade = 19;
        console.log(nome);
    }
    try{
        console.log(idade);
    }catch(e){
        console.log(e.message);
    }
    return chamaNome();
}
teste();
*/

//Conversores
/*const num1 = "10", num2 = 5;
console.log(parseInt(num1) + num2);*/

/*
const num1 = "10.5", num2 = 5;
console.log(parseFloat(num1) + num2);

//Number vs Parse
Number('0123abc'); // NaN - Se caracter for diferente de numero, estraga a conversão
parseInt('0123abc'); // 123 - Converte os numeros e para nos caracteres
*/

//Atribuição e comparação
/*
const n1 = 3, n2 = 2;
if(n1 == n2){
    console.log("é igual")
}

if(n1 === n2){
    console.log("é igual")
}
else{
    console.log("é diferente")
}

if(n1 !== n2){
    console.log("é diferente")
}
else{
    console.log("é igual")
}

//Operadores lógicos
if(n1 > 1 && typeof n1 == "string"){
    console.log("maior que 1")
}

if(n1 > 1 &&  n1 <= 5){
    console.log("estáentre 1 e 5")
}
*/