
// function Punto(x,y){
// 	this.x = x;
// 	this.y = y;
// }

// Punto.prototype.moverEnX = function moverEnX (x) {
// 	this.x +=x;
// }

// Punto.prototype.moverEnY = function moverEnY (y) {
// 	this.y +=y;
// }

Punto.prototype.distancia = function distancia (p){
	const x = this.x - p.x;
	const y = this.y - p.y;

     return Math.sqrt(((x*x) + (y*y)));
 }

const Punto = {
	init: function init (x,y){
		this.x = y;
		this.y = y;
	},
	moverEnX: function moverEnX(x){
		this.x+=x;
	},
	moverEnY: function moverEnY(y){
		this.y+=y;
	},
	distancia: function distancia(p){
		const x = this.x - p.x;
		const y = this.y - p.y;
		return Math.sqrt(((x*x) + (y*y)));
	}
}

const p1 = Object.create(Punto);
p1.init(0,4);

const p2 = Object.create(Punto);
p2.init(0,5);

console.log(p1.distancia(p2));
console.log(p2.distancia(p1));
console.log(p1.moverEnX(10));
console.log(p2.moverEnY(-4));