//Escribir una función que tome una matriz de objetos como argumento Ordenar la matriz por propiedad b en orden ascendente Devuelve la matriz ordenada

const sortArr = (arr) => {
	return arr.sort((a, b) => a.b - b.b);
};

console.log(
	sortArr([
		{ a: 1, b: 2 },
		{ a: 5, b: 4 },
	])
);
