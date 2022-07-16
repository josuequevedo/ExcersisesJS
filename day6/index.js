//// Escribir una función que tome un objeto (a) y un string (b) como argumento. Devolver verdadero si el objeto tiene una propiedad con la key 'b'. De lo contrario, devolver falso.

const checkObj = (a, b) => {
	return a.hasOwnProperty(b);
};

console.log(checkObj({ x: 'a', y: 'b', z: undefined }, 'z'));
