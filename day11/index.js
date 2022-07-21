// Escribir una función que tome una matriz de números como argumento  Debería devolver una matriz con los números ordenados en orden descendente.

const checkArr = (arr) => {
	return arr.reduce((a, b) => (a.length <= b.length ? b : a));
};

console.log(checkArr(['I', 'need', 'candy', 'hello-world']));
