const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var  engine,world,ground,box1;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  box1=new Box();
}

function draw() {
  background(255, 165, 0);
  Engine.update(engine);
  box1.display();
  drawSprites();
}