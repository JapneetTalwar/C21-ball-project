const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
let tWall,gWall,lWall,rWall
let ball;
let btn1, btn2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  tWall = new Ground(200,10,400,20);
  gWall = new Ground(200,390,400,20);
  lWall = new Ground(10,200,20,400);
  rWall = new Ground(390,200,20,400);

  let ball_options={
    restitution:0.95
    
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  btn1 = createImg('right.png')
  btn1.position(220,30)
  btn1.size(50,50)
  btn1.mouseClicked(hforce)

  btn2 =createImg('up.png')
  btn2.position(20,30)
  btn2.size(50,50)
  btn2.mouseClicked(vforce)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  tWall.show()
  gWall.show()
  lWall.show()
  rWall.show()
  ellipse(ball.position.x,ball.position.y, 20,20)  
}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
