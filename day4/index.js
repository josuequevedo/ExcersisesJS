//// Escribir una función que tome un objeto con dos propiedades y un string como argumento
// Debe devolver el valor de la propiedad que sea igual al valor de la cadena

const checkObj = (obj, str) => {
	let arrKey = Object.keys(obj);
	for (let i = 0; i < arrKey.length; i++) {
		let value = arrKey[i];
		if (str === value) {
			return `${obj[value]}`;
		}
	}
};

console.log(
	checkObj({ cotinent: 'america', country: 'Venezuela' }, 'country')
);
