//Haz el juego de piedra papel o tijera con 3 turnos

//1.- Inicio
//2.- Solo tengo tres turnos
//3.- Hago mi primer turno
//4.- Si sale piedra, y mi compañera saca papel ella gana un punto
//5.- Si mi compañera saca tijeras yo gano punto
//6.- Si saca lo mismo empatamos
//7.- Si saco papel y mi compañera piedra yo gano punto
//8.- Si saca  papel empatamos
//9.- Si saca tijeras ella gana punto
//10.- Si saco tijeras y mi compañera pedra ella gana punto
//11.- Si saca papel yo gano punto
//12.- Si sava tijeras empatamos
//13.- SE hace el segundo turno
//14.- Al termino si alguna gano dos veces, gana la aprtida,
//15.- Si es empate se juega un tercer turno
//16.- Se compararn los puntos, alguna debe de ganar
//17.- Si se empato el turno, el juego se empato
//18.- Fin

var correcto = false;
var puntoUser1 = 0;
var puntoUser2 = 0;
var turnos=0;
var user1,user2;
var ganador=false;

while (turnos<3){
	do {
		var usuario1 = prompt('Jugador1 \n escoge: Piedra, Papel, Tijeras'); 
		user1 = usuario1.toLowerCase();
		if (user1 == 'piedra' || user1 =='papel' || user1 =='tijeras') {
			correcto = true;
			break;
		} else {
			alert ('No es una opcion');
		}//fin if-else
	}while(correcto = true)
	correcto = false;
	do {
		var usuario2 = prompt('Jugador2 \n escoge: Piedra, Papel, Tijeras'); 
		user2 = usuario2.toLowerCase();
		if (user2 == 'piedra' || user2 =='papel' || user2 =='tijeras') {
			correcto = true;
			break;
		} else {
			alert ('No es una opcion');
		}//fin if-else
	}while(correcto = true)

	if (user1 == 'piedra' ) {
		if (user2 == 'piedra') {
			alert('Empate');
		} else if (user2 == 'papel') {
			alert('Gana Jugador2');
			puntoUser2++;
		} else {
			alert ('Gana Jugador1');
			puntoUser1++;
		}
		console.log(puntoUser1,puntoUser2);
	} else if (user1 == 'papel') {
		if (user2 == 'piedra') {
			alert('Gana Jugador1');
			puntoUser1++;
		} else if (user2 == 'papel') {
			alert('Empate');
		} else {
			alert ('Gana Jugador2');
			puntoUser2++;
		}
		console.log(puntoUser1,puntoUser2);
	} else {
		if (user2 == 'piedra') {
			alert('Gana Jugador2');
			puntoUser2++;
		} else if (user2 == 'papel') {
			alert('Gana Jugador1');
			puntoUser1++;
		} else {
			alert ('Empate');
		}
		console.log(puntoUser1,puntoUser2);
	}
	if (puntoUser1 == 2) {
		alert ('Ganador definitivo Jugador1');
		ganador = true;
		break;
	} else if (puntoUser2 == 2) {
		alert ('Ganador definitivo Jugador2');
		ganador = true;
		break;
	}

	turnos++;

}//while

if (puntoUser1 == puntoUser2) {
	alert('Ambos ganaron');
} else if (ganador != true) {
	if (puntoUser1 > puntoUser2) {
		alert ('Ganador definitivo Jugador1');
	} else {
		alert ('Ganador definitivo Jugador2');
	}
}


  

	 