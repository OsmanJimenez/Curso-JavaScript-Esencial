"use strict"

//********************************
//*** Parámetros REST

/* La siguiente sentencia de codigo me permite recibir cierta cantidad de datos
sin necesidad de declararlas en la funcion, recuerda añadir 3 puntos antes del
nombre de la variable */

function cocinar(...masIngredientes) {
    /*console.log('Ingrediente1: ', ingrediente1);
    console.log('Ingrediente2: ', ingrediente2); */
    console.log("masIngredientes", masIngredientes);
}

cocinar("Pollo", "Tomate", "Arroz", "Frijoles", "Pescado", "Chile");