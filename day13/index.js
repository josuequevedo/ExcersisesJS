// escriba una funcion con un array como argumento, extraiga la mitad de los elementos del array.

const extractHalf = (arr) => {
	let num = arr.length / 2;
	return arr.slice(0, num);
};

console.log(extractHalf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
