//Revisão Fetch
/*let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos';    
fetch(url).then(function(response) {
    console.log(response)
    if(!response.ok){
        alert(`Ocorreu um erro \n Código: ${response.status}, ${response.statusText}` )
        return
    }
    return response.json().then(function(data){
        let cidades = data;
        for(let i = 0; i < 10; i++){
            console.log(cidades[i])
        }              
    })        
});*/
/*
const pessoa = {
    "Nome": "Miguel",
    "Idade": 21,
    "Sexo": "Masculino",
    "Caracteristicas": {"Olhos": "Castanhos", "Cabelo": "Castanho"}
}

let dadosLocais = localStorage.getItem('dados')

if(dadosLocais){
    console.log(JSON.parse(dadosLocais));
}
else{
    localStorage.setItem('dados', JSON.stringify(pessoa));
    console.log(JSON.parse(dadosLocais));
    
    console.log(`Nome: ${pessoa.Nome}\n
    Idade: ${pessoa.Idade}\n
    Sexo: ${pessoa.Sexo}\n
    Caraceristicas:\n 
    Cabelo: ${pessoa.Caracteristicas.Cabelo}\n
    Olhos: ${pessoa.Caracteristicas.Olhos}`)
}


const pessoa = {
    "Nome": "Miguel",
    "Idade": 21,
    "Sexo": "Masculino",
    "Caracteristicas": {"Olhos": "Castanhos", "Cabelo": "Castanho"}
}


console.log(`Nome: ${pessoa.Nome}\n
Idade: ${pessoa.Idade}\n
Sexo: ${pessoa.Sexo}\n
Caraceristicas:\n 
 Cabelo: ${pessoa.Caracteristicas.Cabelo}\n
 Olhos: ${pessoa.Caracteristicas.Olhos}`)
*/
if(localStorage.getItem('pessoa')){
    let pessoaLS = JSON.parse(localStorage.getItem('pessoa'));
    console.log(`
        Nome: ${pessoaLS.pessoa.nome},
    `)
}
else{
    const pessoa = {
        pessoa: {
            nome: "Miguel",
            idade: 21,
            sexo: "Masculino",
            caracteristicas: {
                Olhos: "Castanhos", 
                Cabelo: "Castanho",
                nariz: "Pequeno"} 
        }
    }
    
    localStorage.setItem('pessoa',JSON.stringify(pessoa));
    //console.log(pessoa);
}

