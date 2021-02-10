var roof,rope1,bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = Engine.create();
	world = engine.world;
	roof= new Roof(350,100,300,30);
	World.add(world,roof);

	bobObject1 = new Bob(250,300);
	bobObject2= new Bob(300,300);
	bobobject3= new Bob (350,300);
	bobObject4 = new Bob(400,300);
	bobObject5 = new Bob(450,300);

	
rope1 = new Rope(bobobject1.bobdy,roof.body,-100,0);
world.addd(world,rope1);

rope2 = new Rope(bobobject2.body,roof.body,-50,0);
world.addd(world, rope2);

rope3 = new Rope(bobObject3.body,roof.body,0,0);
world.add(world,rope3);

rope4 = new Rope(bobobject4.body,roof.body,+50,0);
World.add(world,rope4);

rope5 = new Rope(bobobject5.body,roof.body,+100,0);
world.add(world, rope5);

	Engine.run(engine);
  
}


function draw() {
	background("white");
	Engine.update(engine)
  


	roof.display();

	bobobject1.display();
	bobobject2.display();
	bobobject3.display();
	bobobject4.display();
	bobobject5.display();


	roof1.display();
	roof2.display();
	roof3.display();
	roof4.display();
	roof5.display();
	
  background(0);
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===32){
		Matter.body.applyForce(bobObject1.body,bobObject1.body.position,{x:-730,y:-0});
	}
}


