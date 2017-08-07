
function fibonacci (numero) {

	if(numero == 1) return 0;
	if(numero == 2) return 1;

	console.log('Numero -1  '+fibonacci(numero-1));
	console.log('Numero -2  '+fibonacci(numero-2));

	return fibonacci(numero-1) + fibonacci(numero-2)
}

fibonacci(2);