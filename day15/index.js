// Escribe una función que tome un array con elementos arbitrarios y un número como argumentos  Devuelve una nueva matriz, el primer elemento debe ser el mismo número dado o cero si el número es menor que 6  Los otros elementos deben ser los elementos de la matriz original  Intenta no mutar la matriz original

const conditionalElements = (arr, num) => {
	if (num >= 6) {
		arr.unshift(num);
		return arr;
	} else {
		arr.unshift(0);
		return arr;
	}
};

console.log(conditionalElements([1, 2, 3], 6));
