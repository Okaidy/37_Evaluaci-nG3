 //1.-Pedir una frase
 //2.-Hacer la frase a letras minusculas
 //3.-Eliminar espacios de la frase
 //4.-Compara la primera letra con la ultima, y asi sucesivamente
 //5.-Si todas son iguales es palindromo
 //6.- de lo contrario no es palindromo

 function determinarPalindromo (cadena) {
 	var cadenaMin = cadena.toLowerCase();
 	var cadenaSinEspacio = cadenaMin.replace(/\s/g,"");
 	
 	console.log(cadenaMin);
 	console.log(cadenaSinEspacio);

 	for (var i = 0; i<cadenaSinEspacio.length; i++) {
 		var a = cadenaSinEspacio[i];
 		var z = cadenaSinEspacio[cadenaSinEspacio.length-(i+1)]
 		console.log (a);
 		console.log (z);
 		if (a !== z) {
 			return console.log ('No es palindromo');
 		}
 	}
 	return console.log('Es palindromo');
 }

var frase = prompt('Escribe una frase');
determinarPalindromo(frase);
