const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1,ball2,ball3,ball4,ball5;
 



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

var ball_options={
	restitution:0.8

}

ball1=Bodies.circle(200,50,10,ball_options);
World.add(world,ball1);

ball2=Bodies.circle(250,50,10,ball_options);
World.add(world,ball2);

ball3=Bodies.circle(300,50,10,ball_options);
World.add(world,ball3);

ball4=Bodies.circle(350,50,10,ball_options);
World.add(world,ball4);

ball5=Bodies.circle(400,50,10,ball_options);
World.add(world,ball5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x,ball1.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,12);
  ellipse(ball3.position.x,ball3.position.y,10);
  ellipse(ball4.position.x,ball4.position.y,12);
  ellipse(ball5.position.x,ball5.position.y,12);

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
