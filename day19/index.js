//*Escribir una función que tome una matriz de objetos como argumento // Ordenar la matriz por propiedad b en orden ascendente // Devuelve la matriz ordenada

const sortArrObj = (arr) => {
	return arr.sort((a, b) => b.b - a.b);
};

console.log(
	sortArrObj([
		{ a: 1, b: 2 },
		{ a: 5, b: 4 },
	])
);
