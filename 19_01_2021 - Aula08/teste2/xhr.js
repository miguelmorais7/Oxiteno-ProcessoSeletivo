let url = 'viacep.com.br/ws/09250760/json/';
let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange == function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                console.log('xhr: ', xhr);
                var headers = xhr.getAllResponseHeaders();
                let info = JSON.parse(xhr.responseText);
                console.log(`cep: ${info.cep},
                             logradouro: ${info.logradouro},
                             complemento: ${info.complemento},
                             bairro: ${info.complemento},
                             localidade: ${info.localidade},
                             uf: ${info.uf},
                             unidade: ${info.unidade},
                             ibge: ${info.ibge},
                             gia: ${info.gia}`);
                
            }
        }
    }