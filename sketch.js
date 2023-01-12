
const collisionGroups = {
  default: 0x0001,
  pelota: 0x0002,
  barrera: 0x0008
};


// Module Aliases
var Engine = Matter.Engine
Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Composites = Matter.Composites;

var engine;
var world;
var sphere;

var pelota;
var sugar;

var barrera1;
var barrera2;

var paredVaso1;
var paredVaso2;
var paredVaso3;

var vaso;

var stack;

var points;
var line;


function setup() {

  height = 800;
  width = 500;

  let canvas = createCanvas(width, height);

  canvas.parent("sketch-holder");
  // Matter.js
  engine = Engine.create();
  world = engine.world;
  Matter.Runner.run(engine);

  pelota = new Pelota(10, 0, 2);

  sugar = [];

  // Barreras del nivel
  barrera1 = new Barrera(250, 150, 200, 20, Math.PI * 0.06);
  barrera2 = new Barrera(400, 500, 300, 20, Math.PI * -0.06);

  vaso = new Vaso(100, 700);


  // Paredes del vaso
  paredVaso1 = new Barrera(100, 700, 100, 10, 90 * Math.PI / 180);
  paredVaso2 = new Barrera(135, 750, 80, 10, Math.PI);
  paredVaso3 = new Barrera(170, 700, 100, 10, 90 * Math.PI / 180);

  // lineas
  lines = [];
  points = [];

  /*
  World.add(world,
    Bodies.rectangle(200, 150, 700, 20, { isStatic: true, angle: Math.PI * 0.06})
  );
  */

  stack = Composites.stack(20, 20, 5, 0, 0, function (x, y) {
    return new Pelota(width / 2, 10, 4);
  });



}

function draw() {
  background(100);
  //this.pelota.mostrar();


  // -- Azucar cae todo el rato
  //if (frameCount < 500) {
  sugar.push(new Pelota(width / 2, 10, 2));
  //}

  //if (mouseIsPressed) {
  //sugar.push(new Pelota(mouseX, mouseY, 2));
  //}

  barrera1.mostrar();
  barrera2.mostrar();

  paredVaso1.mostrar();
  paredVaso2.mostrar();
  paredVaso3.mostrar();

  this.sugar.forEach((i) => i.mostrar());

  // dibujar "lineas"
  if (mouseIsPressed) {
    points.push({ x: mouseX, y: mouseY, px: pmouseX, py: pmouseY });
  }
  this.points.forEach((p) => {
    line = new Barrera(p.x, p.y, p.x - p.px, 10);
    lines.push(line); // añadir linea a array
    line.mostrar();
  })
}
