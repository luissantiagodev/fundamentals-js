class Punto {
  //Constructor
  constructor(x,y){
    this.x  = x;
    this.y  = y;
  }

  moverEnX(X){
    this.x+=x;
  }

   moverEnY (y) {
    this.y +=y;
  }

   distancia (p){
    const x = this.x - p.x;
    const y = this.y - p.y;

    return Math.sqrt(((x*x) + (y*y)));
  }

  saludar(){
    alert("Holaaa");
  }
 }

 let carl = new Punto (3,9);

 carl.saludar();