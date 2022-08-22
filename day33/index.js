// * Dada una cadena formada por las letras a, b y/o c, cambia la posición de las letras a y b (cambia a por b y viceversa). Deje cualquier incidencia de c Link:  https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript

const changeLetters = (str) => {
	let arr = str.split('').map((item) => {
		if (item === 'a') {
			item = 'b';
		} else if (item === 'b') {
			item = 'a';
		}
		return item;
	});

	return arr.join('');
};

console.log(changeLetters('aaaaabbbbccccaabb'));
