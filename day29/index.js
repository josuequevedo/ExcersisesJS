// *Escribir una función que tome una matriz de cadenas como argumento Agrupa esas cadenas por su primera letra Devuelve un objeto que contiene propiedades con claves que representan las primeras letras Los valores deben ser matrices de cadenas que contengan solo las cadenascorrespondientes Por ejemplo, la matriz ['Alf', 'Alice', 'Ben'] debe transformarse en { a: ['Alfa', 'Alicia'], b: ['Ben']}

const mergeArrysInObj = (arr) => {
	const obj = {};
	arr.forEach((item, index) => {
		console.log('iteracion:', index);
		console.log('añadiendo propiedades a mi objeto:', obj);
		return (obj[item[0].toLowerCase()] = arr.filter(
			(ele) => ele[0].toLowerCase() === item[0].toLowerCase()
		));
	});
	return obj;
};

console.log(mergeArrysInObj(['avion', 'beso', 'ala']));
