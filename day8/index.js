// escriba una funcion que tome como argumento un array de números, debe devolver el promedio de los números del array.

const averageArr = (arr) => {
	let sum = 0;
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		result = sum / arr.length;
	}

	return result;
};

console.log(averageArr([10, 100, 40]));
