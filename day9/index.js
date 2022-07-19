// escriba una funcion que tome un array (a) como argumento y un value (b) como argumento, la funcion deberá remover todos los elementos del array iguales a b.

const arrFilter = (a, b) => {
	return a.filter((item) => item !== b);
};

console.log(arrFilter([1, 2, '2'], '2'));
