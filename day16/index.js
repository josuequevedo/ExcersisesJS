// Escribe una función que tome dos arreglos como argumentos Combinar ambas matrices y eliminar valores duplicados Ordenar el resultado de la combinación en orden ascendente  Devuelve la matriz resultante

const margeArr = (arr1, arr2) => {
	let newArr = arr1.concat(arr2);
	let result = [...new Set(newArr)];
	return result.sort((a, b) => a - b);
};

console.log(margeArr([1, 2, 3], [3, 4, 5]));
