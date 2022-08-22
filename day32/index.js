// * cree una funcion que tome como argumentos un array y un número (N) como argumentos, debe extraer los elementos de ése array y convertirlos en sub-arrays con el largo de "N" y en cascada, debe devolver un array que contengan todos los subs-arrays.

const cutArr = (array, n) => {
	let arr = [...array];

	return arr
		.map((_, index) => array.slice(index, index + n))
		.filter((item) => item.length === n);
};

console.log(cutArr([1, 2, 3, 4, 5, 6], 2));
