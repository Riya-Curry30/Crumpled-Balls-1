
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var trash1,trash2,trash3;
var ground;


function setup() 
{
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	

	paper1 = new Paper(100,650,15);

	//leftmost box
	trash1 = new Trash(910,615,20,100);


	//bottom box
	trash2 = new Trash(1020,653,200,20);
	

	//rightmost box
	trash3 = new Trash(1130,615,20,100);

	ground = new Ground(650,680,1300,20);
	


  
}


function draw() 
{

	
  background(0);
 
  Engine.update(engine);
  
  paper1.display();

  trash1.display();
  trash2.display();
  trash3.display();

  ground.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:1,y:-1 });
		
	}

	if(keyCode === DOWN_ARROW)
	{
		Matter.Body.applyForce(paper1.body, paper1.body.position, { x: 0, y: 1});
	}

	if(keyCode === LEFT_ARROW)
	{
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x: -1, y: 0});
	}

	if(keyCode === RIGHT_ARROW)
	{
		Matter.Body.applyForce(paper1.body, paper1.body.position, { x: 1, y: 0});
	}
}





