//escriba una funcion que tome como argumento un objeto (obj) retorne la suma de todos los values del objeto

const objSum = (obj) => {
	arrOb = Object.keys(obj).map((item) => obj[item]);
	let sum = 0;
	for (let value of arrOb) {
		sum += value;
	}

	return sum;
};

console.log(objSum({ a: 1, b: 2, c: 3 }));
