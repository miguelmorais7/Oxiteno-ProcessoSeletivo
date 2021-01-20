const getBtn = document.getElementById('get-btn');

const getData = () => {
    const xhr = new XMLHttpRequest();
    let url = 'http://viacep.com.br/ws/09250760/json/';
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status = 200){
                console.log('xhr: ', xhr);
                var header = xhr.getAllResponseHeaders();
                console.log(header);
                let info = JSON.parse(xhr.responseText);
                console.log(`cep: ${info.cep} 
                            \nlogradouro: ${info.logradouro}
                            \ncomplemento: ${info.complemento}
                            \nbairro: ${info.complemento}
                            \nlocalidade: ${info.localidade}
                            \nuf: ${info.uf}
                            \nunidade: ${info.unidade}
                            \nibge: ${info.ibge}
                            \ngia: ${info.gia}`);
            }
        }
    }
    xhr.send();
};

getBtn.addEventListener('click', getData);


/*const xhr = new XMLHttpRequest();
//const url = 'viacep.com.br/ws/01001000/json/';
const url = 'https://regres.in/api/users'
xhr.open('GET', url, true);
xhr.send();*/

//let url = 'https://reqres.in/api/users';
    //let url = 'viacep.com.br/ws/RS/Porto Alegre/Domingos/json/';
    //let url = 'http://www.buscacep.correios.com.br/sistemas/buscacep/BuscaCepEndereco.cfm';
    