//Declara un arreglo vacío denominado nombres. 
//Pide al usuario tres nombres y almacena esos nombres como elementos arreglo. 
//A continuación muestra el contenido en un mensaje.

//1.-Inicio
//2.-Se crea un arreglo vacio llamado nombres (nombre=[])
//3.-Se crea un ciclo for para guardaar los nombres
//4.-Se le indica que debe tener un contador que empiece en cero
//5.- Llegue a un valor final de menor a 3
//6.- Debe aumentar en uno
//7.- for (i=0;i<3;i++)
//8.- Le debe de pedir un nombre y guardar el la variable nobre
//9.- Hasta que termine de pedir los tres nombre y sale del ciclo
//10.- Debe mostrar los tres nombres guardados en el arreglo
//11.-Fin

var nombre = [];

for (var i = 0; i < 3; i++) {
	nombre[i] = prompt ('Introduca el nombre '+(i+1));
}


alert (nombre);
document.write("ejercicio 2 <br>");
document.write(nombre);
console.log(nombre);
