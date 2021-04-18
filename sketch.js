const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function setup() {
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  block1 = new Block(500,545,100,90);
  block2 = new Block(500,455,100,90);
  block3 = new Block(500,365,100,90);
  block4 = new Block(500,275,100,90);
  block5 = new Block(600,545,100,90);
  block6 = new Block(600,455,100,90);
  block7 = new Block(600,365,100,90);
  block8 = new Block(600,275,100,90);


  ball = Bodies.circle(300,400,50);
  World.add(world,ball);
  
  slingShot = new Slingshot(ball,{x:300,y:100});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  
  strokeWeight(2);
  stroke(15);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  fill("blue")

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50)

  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}