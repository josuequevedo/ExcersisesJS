//* escriba una funcion que reciba un numero como argumento numero y valide si es primo y si no es primo busque el numero primo mas cercano.

const isPrime = (num) => {
	if (num <= 1) {
		return `el número debe ser mayor a 1`;
	}
	for (let i = 2; i <= num - 1; i++) {
		if (num % i == 0) {
			num++;
		}
	}

	return num;
};

console.log(isPrime(14));
