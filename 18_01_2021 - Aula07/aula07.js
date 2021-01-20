//HTTP

//Web-socket
//JMS
//Micro-service

//MVC - Design Pattern
//XML HTTP Request

let xhr = new XMLHttpRequest();
xhr.open('GET',url,true);

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status = 200){
            console.log('xhr', xhr);
            var headers = xhr.getAllResponseHeaders();
            console.log(headers);
            let select = document.querySelector('#cidades');
            let cidades = JSON.parse(xhr.responseText);

            for(let i = 0; i < 10; i++){
                let option = document.createElement('option');
                option.text = cidades[i].nome;
                option.value = cidades[i].id;
                select.appendChild(option);
            }
        }
    }
    xhr.send();
}

//Headers - configurações

//Async - faz uma req mas não precisa esperar a resp
let url = 'viacep.com.br/ws/01001000/json/';
let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status = 200){
            console.log('xhr: ', xhr);
            var headers = xhr.getAllResponseHeaders();
            console.log(headers);
        }
    }
}





const getBtn = document.getElementById('get-btn');
        const getData = () => {
            let url = 'https://countriesnow.space/api/v0.1/countries/'
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status = 200){
                        console.log('xhr: ', xhr);
                        var header = xhr.getAllResponseHeaders();
                        console.log(header);
                        let info = JSON.parse(xhr.responseText);
                        for(let i = 0; i < 10; i++){
                            console.log(`nomes: ${info.country}`)
                        }
                }
            }
            xhr.send();
            }
        }

        getBtn.addEventListener('click', getData);