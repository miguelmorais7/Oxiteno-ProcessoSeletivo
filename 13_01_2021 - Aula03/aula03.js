//*****While****
/*let cont = 0;

while(cont < 5){
    console.log(cont);
    cont++;
}*/

//*****For*****
/*for(let i = 0; i < 5; i++){
    console.log(i);
}*/


//break - finaliza o loop se a condição for atendida
//continue - pula a iteração assim que a condição é atendida

/*
for(let i = 0; i <= 5; i++){
    if(i % 2 != 0) continue;
    console.log(i);
}

for(let i = 0; i <= 5; i++){
    if(i > 3) break;
    console.log(i);
}*/


//EX01
/*const arr = [0,"Miguel",2,"Jessica",3,"Paulo",4,"Regina",5,"Augusto"];
let cont = 0;

while(cont < 10){
    if(typeof arr[cont] == "string"){
        console.log(arr[cont]);
    }
    cont ++;
}*/
/*
const arr = [0,"Miguel",2,"Jessica",3,"Paulo",4,"Regina",5,"Augusto"];
let cont = 0;

while(cont < arr.length){
    if(typeof arr[cont] != "number"){
        console.log(arr[cont]);
    }
    cont ++;
}*/


//EX02
let numeros = [[1,2,3], [4,5,6], [7,8,9,10], [11,12]];
for(let i = 0; i < numeros.length; i++){
    for(let j = 0; j < numeros[i].length; j++){
        if(numeros[i][j] % 2 == 0){
            console.log(numeros[i][j])
        }
    }
}