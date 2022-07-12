//escriba una funcion que reciba como parametro un array, extraiga los primero 3 elementos de dicho array y retorne el resultado.

const extraArr = (arr) => {
	return arr.slice(0, 3);
};

console.log(extraArr([1, 2, 3, 4, 5, 6]));
