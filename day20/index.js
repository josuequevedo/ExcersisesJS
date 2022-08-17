//* Escribe una función que tome un número mínimo como argumento y un número máximo como arguento devuelva la sucesión del Nummin al Nummax en un arreglo

const incrementNum = (numMin, numMax) => {
	let arr = [];
	for (let i = numMin; i <= numMax; i++) {
		arr.push(i);
	}

	return arr;
};

console.log(incrementNum(-10, 28));
