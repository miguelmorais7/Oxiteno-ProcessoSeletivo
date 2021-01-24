
/*window.onload = ()=>{
  let btn = document.querySelector('#enviar');

  btn.onclick = function(){
	let ul = document.querySelector('#u_list');
	ul.innerHTML = '';

	let labels = document.querySelectorAll('label')    
	let names = [...labels].map((element) => element.innerText)
    
	names.forEach((name, index) =>{
	  const inputName = labels[index].getAttribute('for');
	  let list = document.createElement('li');
	  let input = document.querySelector(`.${inputName}`);
	  let val = input.value;

	  if(input.type == 'checkbox' || input.type == 'radio'){
		val.getValues(inputName);
	  }

	  list.innerHTML = `${name}: <span class="nome">${input.value}</span>`;
	  ul.appendChild(list);
	});

  }

  function getValues(input){
	let elements = document.querySelectorAll(`.${input}:checked`);
	//let values = [...elements].filter(getCheckedVal).map((item) => item.value);
	let values = [...elements].map((item) => item.value);

	return values;
  }
  /*
  function getCheckedVal(el){
	if(el.checked) return el.value;
  }*/



/*
let ul = document.querySelector('#u_list')
names.forEach((name) =>{
  let list = document.createElement('li')
  list.innerText = name
  ul.appendChild(list)
})
 
let name = document.getElementById('name');
let gender = document.getElementById('sexo').value;
let languages = document.getElementById('checkbox').checked;
*/
/*
window.onload = () => {
	let btn = document.querySelector('#enviar')
	btn.onclick = function () {
		let ul = document.querySelector('#u_list')
		ul.innerHTML = ''
		let labels = document.querySelectorAll('label')
		let names = [...labels].map((element) => element.innerText)
		names.forEach((name, index) => {
			const inputElement = labels[index].getAttribute('for')
			let list = document.createElement('li')
			let input = document.querySelector(`.${inputElement}`)
			let val = input.value
			if (input.type == 'checkbox' || input.type == 'radio') {
				val = getValues(inputElement)
			}
			list.innerHTML = `${name}: <span class="nome">${val}</span>`
			ul.appendChild(list)
		})
	}
	function getValues(input) {
		let elements = document.querySelectorAll(`.${input}:checked`)
		let values = [...elements].map((item) => `${item.value}`)
		return values
	}

	let nome = document.querySelector('.nome');
	nome.onkeyup = function(){
		let div = document.querySelector('#name_real_time');
		div.innerText = nome.value;
	}
}*/

window.onload = ()=>{
	class Formulario {
	  constructor(ul, label) {
		this.ul = document.querySelector(ul)
		this.labels = document.querySelectorAll(label)
		this.btnListener()
	  }
	  btnListener() {
		const btnEnviar = document.querySelector('#enviar')    
		btnEnviar.addEventListener('click', ()=>{
		  this.clearUl()
		  this.appendLi()
		})

		const lblNome = document.querySelector('#lbl_nome')
		lblNome.addEventListener('onmouseover', () =>{
			alert('over')
		});
	  }
	  clearUl(){
		this.ul.innerHTML = ''
	  }
	  getNames() {
		return [...this.labels].map((element) => element.innerText)  
	  }
	  prepareValue(inputElement) {
		const input = document.querySelector(`.${inputElement}`)
		let val = input.value
		let list = document.createElement('li')
		if(input.type == 'checkbox' || input.type == 'radio') {
		  val = this.getValues(inputElement)
		}
		return {
		  list,        
		  val
		}
	  }
	  getValues(input) {
		let elements = document.querySelectorAll(`.${input}:checked`)
		let values = [...elements].map((item) => `${item.value}`)
		return values
	  }  
	  appendLi(){
		this.getNames().forEach((name, index) =>{
		  const inputElement = this.labels[index].getAttribute('for')
		  let {list, val} = this.prepareValue(inputElement)
		  list.innerHTML = `${name}: <span class="nome">${val}</span>`
		  this.ul.appendChild(list)
		})    
	  }
	}
	new Formulario('#u_list', 'label')
  }
