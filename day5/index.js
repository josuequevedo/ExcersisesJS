//escriba una funcion que tome un array (a) como argumento, debe remover los primeros 3 elementos de array.

const deleteElemts = (a) => {
	return a.slice(3);
};

console.log(deleteElemts([5, 4, 3, 2, 1, 0]));
