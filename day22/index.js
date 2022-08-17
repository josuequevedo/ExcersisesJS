//*Dada una matriz bidimensional de enteros, devuelva la versión aplanada de la matriz con todos los enteros en orden ordenado (ascendente).

const sortArrays = (arr) => {
	const result = arr.flat(Infinity);
	return result.sort((a, b) => a - b);
};

console.log(
	sortArrays([
		[3, 2, 1],
		[7, 9, 8],
		[6, 4, 5],
	])
);
