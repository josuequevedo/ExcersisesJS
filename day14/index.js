// escriba una funcion que tome dos numeros como argumentos (num1 and num2) retorne el procetaje de num2 en num1

const findPercentage = (num1, num2) => {
	let result = (num2 / 100) * num1;

	return result;
};

console.log(findPercentage(100, 50));
