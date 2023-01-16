function Barrera(x, y, w, h, angle) {

  let options = {
    friction: 0.3,
    restitution: 0.6, // bouncing
    isStatic: true,
    angle: angle
  };



  this.body = Bodies.rectangle(x, y, w, h, options);


  this.w = w;
  this.h = h;


  World.add(world, this.body);


  this.mostrar = function () {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();

    translate(pos.x, pos.y);

    rotate(angle);

    rectMode(CENTER); // El centro esta  en el medio
    // Si no, estaria en la esquina sup izda.

    noStroke();
    fill(0);

    rect(0, 0, this.w, this.h);

    pop();

  }
}
