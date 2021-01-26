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
			/*if (input.type == 'checkbox' || input.type == 'radio') {
				val = getValues(inputElement)
			}*/
			list.innerHTML = `${name}: <span class="nome">${val}</span>`
			ul.appendChild(list)
		})
    }
    /*
	function getValues(input) {
		let elements = document.querySelectorAll(`.${input}:checked`)
		let values = [...elements].map((item) => `${item.value}`)
		return values
	}*/

    /*
	let nome = document.querySelector('.nome');
	nome.onkeyup = function(){
		let div = document.querySelector('#name_real_time');
		div.innerText = nome.value;
    }*/
}