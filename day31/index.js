//* escriba una funcion que tome dos argumentos (A,B) como argumentos, donde A será un string y B será un valor aleatorio, deberá ingresar en cada 3 elementos de  A el valor contenido en B debe ser de atrás hacia adelante.

const insertElement = (a, b) => {
	let result = [];
	let str = a;
	for (let i = 0; i < a.length / 3; i++) {
		result.push(str.slice(-3));
		str = str.slice(0, -3);
	}
	return result.reverse().join(b);
};

console.log(insertElement('21229276', '.'));
