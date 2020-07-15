"use strict"

//********************************
//*** Parámetros SPREAD

/* La siguiente sentencia de codigo me permite enviar cierta cantidad de datos
sin necesidad de declararlas en la funcion, recuerda añadir 3 puntos antes del
nombre de la variable */

function cocinar(ingrediente1, ingrediente2, ingrediente3, ...otros) {
    console.log('Ingrediente1: ', ingrediente1);
    console.log('Ingrediente2: ', ingrediente2);
    console.log('Ingrediente3: ', ingrediente3);
    console.log('Otros: ', otros)
}

var ingredientesBase = ["Pollo", "Tomate"];

cocinar(...ingredientesBase, "Arroz", "Pescado", "Chile");