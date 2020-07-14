"use strict"
/*
El modo estricto nos ayuda con factores como:

– Captura algunos errores comunes en nuestro código y nos muestra la excepción.
– Previene (o muestra errores) cuando tomamos algunas acciones consideradas como «inseguras» en nuestro código, como por ejemplo acceder al objeto global (window en el navegador).
– Deshabilita funcionalidades que son confusas o sea, usar use strict es hacer nuestro código mejor y más seguro.
*/

// alert('Hola desde un archivo externo');
// Recuerda no se pueden llamar variables con palabras reservadas como public con el modo estricto
// Este es un mensaje de la consola
console.log('Hola consola');

var x; 

x = "3.1416";

var publicData = "Hola";