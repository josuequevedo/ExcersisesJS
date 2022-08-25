//* funcion dificil de js challenger

const arrToObj = (arr) => {
	let arrKey = [...new Set(arr.map((item) => item[0].toLowerCase()))];
	let obj = {};
	for (let props of arrKey) {
		obj[props] = arr.filter((item) => item[0].toLowerCase() === props);
	}
	return obj;
};

console.log(arrToObj(['Alf', 'Alice', 'Ben', 'Cash']));
