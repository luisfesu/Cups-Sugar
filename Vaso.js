function Vaso(x,y, angle) {

  let pared1, pared2, pared3;


  pared1 = new Barrera(x, y, 100, 10 , 90 * Math.PI / 180);
  pared2 = new Barrera(x + 35, y + 50, 80, 10, Math.PI);
  pared3 = new Barrera(x + 70, y, 100, 10 , 90 * Math.PI / 180);


  this.mostrar = function() {

    this.pared1.mostrar();
    this.pared2.mostrar();
    this.pared3.mostrar();

  }
}
