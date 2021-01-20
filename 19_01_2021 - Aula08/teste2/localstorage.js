let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos';    
fetch(url).then(function(response) {
    response.JSON.stringify(retornoDaAPI);
    console.log(response)
    if(!response.ok){
      alert(`Ocorreu um erro \n Código: ${response.status}, ${response.statusText}` )
      return
    }
    response.json().then(function(data){
      let cidades = data;
      for(let i = 0; i < 10; i++){
        console.log(cidades[i])
      }              
    })        
});

console.log(localStorage.getItem('aula'));
localStorage.setItem('aula','novo valor');

localStorage.setItem('nomeDaVariavel', 'valorDaVarialve') //Obs: os valores sempre devem ser salvos em formato string!
localStorage.getItem('nomeDaVariavel')
localStorage.removeItem('nomeDaVariavel')