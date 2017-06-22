

let decirNombre = function(obj) {
 obj.hablar = function() {
 console.log("Esto es el this interno" + this);
 console.log(this.nombre);
 };
};

const Mateo = {
 nombre: 'Mateo',
 edad: 22
};
const juan = {
 nombre: 'Juan',
 edad: 25
};
decirNombre(juan);
decirNombre(Mateo);
juan.hablar(); // Juan
Mateo.hablar(); // Mateo