//* Escribir una función que tome una matriz de números como argumento Convierte la matriz en un objeto  Debe tener una clave para cada valor único de la matriz El valor del objeto correspondiente debe ser el número de veces la clave ocurre dentro de la matriz

const counterElementArray = (a) => {
	let counter = 1;
	const arrCounter = [];

	a.sort((a, b) => a - b);
	const one = [...new Set(a)];

	for (let i = 0; i < a.length; i++) {
		if (a[i + 1] === a[i]) {
			counter++;
		} else {
			arrCounter.push(counter);
			counter = 1;
		}
	}

	const result = Object.fromEntries(
		one.map((value, index) => [value, arrCounter[index]])
	);

	return result;
};

console.log(counterElementArray([1, 3, 3, 3, 5, 1, 3, 100]));
