var persona = {
	nombre: "Osman",
	email: "osmanjimenez.dev@gmail.com",
	twitter: "osmanjimenezdev",
	saludar: function(){
		return "Hola mundo"
	}
}

var dato = "";

for (dato in persona){
	console.log(dato, persona[dato]);
}