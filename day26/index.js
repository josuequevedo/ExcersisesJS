// *Escribe una función que tome dos arreglos (arr1 y arr2) como argumentos Crear un objeto que tenga propiedades con claves 'arr1' y valores correspondientes 'arr2'  Devolver el objeto

const twoArrayInAObject = (arr1, arr2) => {
	return Object.fromEntries(
		arr1.map((value, index) => [value, arr2[index]])
	);
};

console.log(
	twoArrayInAObject(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5])
);
