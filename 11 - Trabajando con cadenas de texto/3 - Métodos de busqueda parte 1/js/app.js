"use strict"

//********************************
//*** Métodos búsqueda | Parte 1

var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";

var resultado;

// indexOf Nos mostrara la posicion en que se encuentra la primera sentencia que estamos buscando desde el inicio
// resultado = mensaje.indexOf("aprendiendo");


// lastIndexOf Nos mostrara la posicion en que se encuentra la ultima sentencia que estamos buscando desde el final
//resultado = mensaje.lastIndexOf("aprendiendo");


// search: Nos mostrara la posicion en que se encuentra la primera sentencia que estamos buscando desde el inicio
//resultado = mensaje.search("aprendiendo");


// search | Expresión regular: Buscara la sentencia sin importar si esta en mayuscula o minuscula
resultado = mensaje.search(/ja/i);


console.log(resultado);