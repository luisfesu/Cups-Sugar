let x;
var y;
var radio;



function Pelota(x,y,radio) {

  let options3 = {
    friction: 0.00001,
    restitution: 0.5,
    restitution: 0.6,
    density: 0.0001
  };


  let options2 = {
    inertia: 0,
    friction: 1,
    frictionAir: 0,
    restitution: 1,
    label:"pelota",
  };


  this.x = x;
  this.y = y;
  this.radio = radio;



  this.body = Bodies.circle(x,y,this.radio , options3);
  World.add(world, this.body);



  this.mostrar = function(){

    var pos = this.body.position;
    var angle = this.body.angle;

    push();

    noStroke();

    translate(pos.x, pos.y); // Se desplaza
    rotate(angle); // se rota segun el angulo del cuerpo
    ellipseMode(CENTER); // Centro en el centro

    // Se dibuja la elipse
    ellipse(0,0,this.radio * 2);

    pop();
  }
}
