const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  


  world = engine.world;
  
  var ball_options={
    restitution:1.0  
    }
  
    ball1 = Bodies.circle(200,50,10,ball_options);
    World.add(world,ball1);


    chain1=Matter.Constraint.create({
pointA:{x:200,y:20},
bodyB:ball1,
length:120,
stiffness:0.2,

    })
World.add(world,chain1);

    ball2 = Bodies.circle(350,10,12,ball_options);
    World.add(world,ball2);

    chain2=Matter.Constraint.create({
      bodyA:ball1,
      bodyB:ball2,
      length:120,
      stiffness:0.2,
      
          })
      World.add(world,chain2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background("green");
  Engine.update(engine);

  ellipseMode(RADIUS)
fill("red")
ellipse(ball1.position.x,ball1.position.y,10);
ellipse(ball2.position.x,ball2.position.y,12);
line(chain1.pointA.x,chain1.pointA.y,ball1.position.x,ball1.position.y)
line(ball1.position.x,ball1.position.y,ball2.position.x,ball2.position.y,)
}
function keyPressed(){
  if (keyCode==RIGHT_ARROW){
Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.04,y:0})

  }
}

