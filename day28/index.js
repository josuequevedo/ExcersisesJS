// *Escribir una función que tome una matriz (arr) y un valor (num) como argumentos  Guardar cada n-ésimo elemento en una nueva matriz  Devuelve la nueva matriz

function getEveryNthElementOfArray(arr, num) {
	return arr.filter((_, index) => {
		return index % num === num - 1;
	});
}

console.log(getEveryNthElementOfArray([1, 2, 3, 4, 5, 6, 7, 8], 4));
