function Persona (nombre,edad,genero) {
	this.nombre = nombre;
	this.edad = edad;
	this.genero = genero;
	this.obtDetalles = function () {
		return nombre,edad,genero;
	};
}

function Estudiante (persona) {
	persona.obtDetalles();
	this.registrar = function (curso,grupo) {
		this.curso = curso;
		this. grupo = grupo;
	};
	return;
}
var persona1 = new Persona ('Juana',5,'femenino');
console.log(persona1);

var persona2 = new Persona ('Ana',10,'femenino');
console.log(persona2);

//var estudiante1 = new Estudiante (2,'A');
var estudiante1 = new Estudiante(persona1);
estudiante1.registrar(2,'Q');
console.log(estudiante1);