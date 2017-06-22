class Persona{
	constructor(nombre, amigos = []){
		this.nombre = nombre;
		this.amigos = amigos;
	}

	listarAmigos(){
		this.amigos.forEach((index) =>{
			console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${index}`);
		});
	}
}


 const sacha = new Persona("Sacha", ["Luis","Carlos","Juan"]);

const  persona = {
  nombre:'juan',
  apellido:'perez',
  saludar : function saludar(){
  	console.log(`Hola${this.nombre}${this.apellido}`);
  } 	
}
  
var saludar = persona.saludar();