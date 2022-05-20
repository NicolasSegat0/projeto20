
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1, block2, block3
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
  var plane_options={
		isStatic:true
	}
	ground=Bodies.rectangle(600,580,1200,2, plane_options);
	World.add(world,ground);

	var block1_options={
		restitution:0.5,
    friction:0.02,
    frictionAir:0
    
	}
	var block2_options={
		restitution:0.7,
    friction:0.01,
    frictionAir:0.5
    
	}
	var block3_options={
		restitution:0.2,
    friction:1,
    frictionAir:0.4
    
	}

	block1=Bodies.rectangle(110,50,10,10,block1_options);
	World.add(world,block1);

	block2=Bodies.circle(220,10,10,block2_options);
	World.add(world,block2);

	block3=Bodies.rectangle(350,50,10,30,block3_options);
	World.add(world,block3);

	Engine.run(engine);

	//estilizando os corpos aqui 
  fill("brown"); 
	rectMode(CENTER); 
	ellipseMode(RADIUS)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

	rect(ground.position.x,ground.position.y,1200,100);
  ellipse(block2.position.x,block1.position.y,30);
	rect(block1.position.x,block2.position.y,50,50);
	rect(block3.position.x,block3.position.y,100,50);


  drawSprites();
 
}



