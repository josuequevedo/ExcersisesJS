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

/* 
   en este ejercicio use el metodo flat() pasando le un valor infinito como argumento para que no importara cuantos sub-arrays contenia el array principal simpre quede 1 y ordene los elemento con el metodo sort() 
   */
