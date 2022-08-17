//*Escribir una función que tome un objeto como argumento que contenga propiedades con información personal  Extraer nombre, apellido, tamaño y peso si está disponible  Si se da tamaño o peso, transforma el valor en una cadena Adjunte la unidad cm al tamaño  Adjunte la unidad kg al peso Devuelve un nuevo objeto con todas las propiedades disponibles que nos interesan

const createObj = (obj) => {
	newObj = {};

	for (let key in obj) {
		if (key === 'size') {
			newObj[key] = obj[key].toString() + 'cm';
		} else if (key === 'fn' || key === 'ln') {
			newObj[key] = obj[key];
		} else if (key === 'weight') {
			newObj[key] = obj[key].toString() + 'kg';
		}
	}
	return newObj;
};
console.log(
	createObj({
		fn: 'Lisa',
		ln: 'Müller',
		age: 17,
		size: 175,
		weight: 67,
		email: 'correo@correo,com',
	})
);
