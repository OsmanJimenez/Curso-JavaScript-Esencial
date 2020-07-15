"use strict"

//********************************
//*** Uso del operador this

const boton = document.querySelector('.boton');

/*
boton.addEventListener('click', function () {
    console.log(this.innerHTML);
})
*/

/*Con esta propuedad podemos redirigir al usuario cuando hace click sobre el 
boton a otra url */
boton.addEventListener('click', () => {
    console.log(this)
    this.location = "http://www.google.com";

})