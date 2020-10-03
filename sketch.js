
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBody;
var ground;
var dustbin1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	paperBody = new Paper(100,200,30);
	ground = new Ground(600,680,1200,20);
	dustbin1 = new Bin (700,650,150,40);	

	





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  ground.display();

  
  dustbin1.display();
  paperBody.display();
  
  
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x: 41, y: -41});
}
}



