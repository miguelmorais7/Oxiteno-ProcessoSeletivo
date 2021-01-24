window.onload = () =>{
    let label = document.querySelectorAll('label');
    let names = [...label].label.map((element) => element.innerText);

    let ul = document.querySelector('#u_list');
    names.forEach(element => {
        let list = document.createElement('li');
        list.innerText = names;
        ul.appendChild(list)
    });
        
    //console.log(nome);
    /*label.forEach((el) =>{
        console.log(el);
    })*/

    /*const obj = {nome: 'miguel',idade: 21, time: 'SP'}
    function pegaObj(nome, idade, time){
        console.log(nome, idade, time);
    }

    pegaObj({...obj});*/
}