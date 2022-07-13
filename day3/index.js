// escriba una funcion que un array como argumento (a) y un número (n) como argumento deberá devolver los ultimós (n) elementos del array.

const lastElements = (a, n) => {
	return a.slice(-n);
};

console.log(lastElements([1, 2, 3, 4, 5, 'num'], 3));
