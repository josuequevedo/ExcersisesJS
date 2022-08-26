//* hacer una funcion que reciba un array de string como parametro y que devuelva un array de objeto con las propiedades "palabra" donde se va a colocar el valor de elemento del array otra propiedad que se va a llamar "longitud" donde se va a asginar como valor la longitud del elemento del array y una ultima propiedad que se va llamar "mensaje" va tener como valor "esmuy largo" si la longitud de la palabara es mayor a 10 y sino "tamaño standar"

const arrObject = (arr) => {
	return arr.map((item) => ({
		palabra: item,
		longitud: item.length,
		mensaje: item.length > 10 ? 'es muy largo' : 'standar',
	}));
};

console.log(
	arrObject(['Oliver', 'estructuras', 'algoritmos', 'estamostrabajando'])
);
