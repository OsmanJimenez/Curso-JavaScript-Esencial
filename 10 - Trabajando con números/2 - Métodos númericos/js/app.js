"use strict"

//********************************
//*** Métodos númericos


var numero = "23.32";


console.log('Number: ', typeof numero, typeof Number(numero)); //Muestra el tipo de dato
console.log('parseInt: ',  parseInt(numero)); //Convierte el dato a entero
console.log('parseFloat: ', Number.parseFloat(numero)); //Convierte el dato a flotante
console.log('isNaN: ', isNaN(numero)); //Realiza una comprobación para saber si el dato es un numero o no
console.log('isInteger: ', Number.isInteger(numero)); //Realiza una comprobación para saber si el dato es entero o no