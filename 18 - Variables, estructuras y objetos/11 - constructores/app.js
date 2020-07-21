const { StrictMode } = require("react");

function Persona(nombre, apellidos){
 this.nombre = nombre;
 this.apellidos = apellidos;
}

var persona = new Persona("Osman", "Jimenez");

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellidos);