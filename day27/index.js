// * Escribir una función que tome un objeto como argumento Algunos de los valores de propiedad contienen cadenas vacías Reemplazar cadenas vacías y cadenas que contienen solo espacios en blanco con valores nulos Devuelve el objeto resultante

const replaceWithNull = (obj) => {
	for (let key in obj) {
		if (obj[key] === '' || obj[key] === ' ') {
			obj[key] = null;
		}
	}
	return obj;
};
console.log(replaceWithNull({ a: 'a ', b: ' ', c: '', d: 'd' }));
