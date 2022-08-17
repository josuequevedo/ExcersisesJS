// *Escriba una funcion que tome como argumento un string desordenado, debe cambiar la letra a la seiguiente sucesión del abecedario para darle sentido al escrito.

const changeStr = (str) => {
	return str
		.split('')
		.map((item, index) => String.fromCharCode(str.charCodeAt(index) + 1))
		.toString()
		.replace(/\W/g, '');
};

console.log(changeStr('abc'));
