var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var divisions = []
var particles = [];
var plinkos = [];
var particle
var divisionHeight=300;
var score =0;
var turn =0
var gameState ="start" 
var bg
function preload(){
bg = loadImage("Gradient.jpg")
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background(bg);
  push()
  stroke("violet")
  strokeWeight(6)
  line(0, 490, 800, 490)
  pop()
  push()
  textSize(25)
  fill("white")
  stroke("black")
  strokeWeight(7)
 text("SCORE : "+score,20,30);
 text("TURN : "+ turn, 680, 30)
 text("500", 20, 540)
 text("500", 100, 540)
 text("500", 185, 540)
 text("500", 265, 540)
 text("100", 345, 540)
 text("100", 420, 540)
 text("100", 500, 540)
 text("200", 580, 540)
 text("200", 660, 540)
 text("200", 740, 540)
 pop()
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle != null){
    particle.display() 
    if(particle.body.position.y > 760 && particle.body.position.y < 770  ){
      if(particle.body.position.x > 0 && particle.body.position.x < 300){
        score = score + 500
        turn += 1
        particle = null
      } else if(particle.body.position.x > 300 && particle.body.position.x < 560){
        score = score + 100
        turn += 1
        particle = null
      
   } else if(particle.body.position.x > 560 && particle.body.position.x < 800){
    score = score + 200
    turn +=1
    particle = null
  
}
   }
}
if(turn === 5){
  gameState = "end"
 push()
  textSize(80)
  stroke("black")
  strokeWeight(10)
  text("GAME OVER!!", 100, 200)
  pop()
}
}
function mousePressed(){
  if(gameState !== "end"){
    particle = new Particle(mouseX, 10, 10)
  }
}