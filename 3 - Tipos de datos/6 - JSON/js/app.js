"use strict"

// JSON => JavaScript Object Notation

var persona = {nombre: 'Osman', twitter: 'osmanjimenezdev'};

var personas = [
    {nombre: 'Hugo', twitter: 'dcHugo'},
    {nombre: 'Paco', twitter: 'dcPaco'},
    {nombre: 'Luis', twitter: 'dcLuis'},
    persona
]

// stringiy convierte el contenido almacenado en una variable en una cadena de texto
var personaJSON = JSON.stringify(persona);

// parse obtiene el contenido estructurado almacenado en una variable 
var nuevaPersona = JSON.parse(personaJSON)
