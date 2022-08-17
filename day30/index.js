//* Escribir una función que tome un objeto como argumento  Debería devolver un objeto con todas las propiedades del objeto original  excepto por la propiedad con clave 'b'

const removeProperty = (obj) => {
	delete obj.b;
	return obj;
};
console.log(removeProperty({ a: 1, b: 7, c: 3 }));
