// Escribir una función que tome un objeto como argumento
//* De alguna manera, las propiedades y claves del objeto se mezclaron Intercambiar la clave del objeto Javascript con sus valores y devolver el objeto resultante

const changePropertys = (obj) => {
	const newObj = {};
	for (let prop in obj) {
		newObj[obj[prop]] = prop;
	}
	return newObj;
};

console.log(changePropertys({ a: 1, b: 2, c: 3 }));
