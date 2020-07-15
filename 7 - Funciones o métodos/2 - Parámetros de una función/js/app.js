"use strict"


//********************************
//*** Parámetros de una función

function saludar(nombre, edad) {
	console.log('Hola: ', nombre);
	console.log('Edad: ', edad);
	var resultado = nombre + " tiene " + edad + " años";
	return resultado;
}

var mensaje = saludar("Osman", 22);

console.log(mensaje)