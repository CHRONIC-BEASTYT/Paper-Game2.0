
var box1,box2,box3;
var paperBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;
	
	
	

	

	//Create a Ground
	ground = new Ground(800,height,1600,20);
	paperBody = new Paper(100,100,50,50);
	box1 = new Ground(1290,640,20,200);
	box2 = new Ground(1380,680,200,20);
	box3 = new Ground(1480,640,20,200);
	

	Engine.run(engine);
  
}


function draw() {
 background(0);
 ground.display();
  paperBody.display();
  
  box2.display();
  
  box3.display();
  
  box1.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on
  Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x:85,y:-85});
	
 }
} 

