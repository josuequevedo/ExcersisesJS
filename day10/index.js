// escriba una funcion que reciba un array (a) como argumento y retorne la suma de todos los elementos del array.

const sumOfArr = (a) => {
	let sum = 0;
	a.forEach((item) => (sum += item));

	return sum;
};

console.log(sumOfArr([55, 22, 10, 88]));
