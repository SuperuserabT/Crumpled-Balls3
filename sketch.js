var bottom, left, right;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	dustbin = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(600,height,1200,20);

	//Create the Bodies Here.
	bottom=new DustbinClass(525, 650, 150, 20);
	right=new DustbinClass(600, 595, 20, 130);
	left=new DustbinClass(450, 595, 20, 130);
	paper=new PaperClass(50,300,50);
	launcher=new Launcher(paper.body,{x:75,y:200})

	ground = Bodies.rectangle(width/2, 664, width, 10 , {isStatic:true,friction:0/5} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  Engine.update(engine)
  rect(ground.position.x,ground.position.y,width,10)
  image(dustbin,450,515,150,150)
  bottom.display();
  right.display();
  left.display();
  paper.display();
  launcher.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher.fly()
}