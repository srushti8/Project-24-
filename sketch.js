
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, hammer;
var rubber

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(400,700,800,10);
	hammer = new Hammer(400,400,90,20);
	rubber = new Rubber(610,350);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground.display();
	hammer.display();
	rubber.display();

  drawSprites();
 
}



