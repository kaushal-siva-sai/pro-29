const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1,base2,Ground;
var box;
var slingShot,polygon

function preload() {
polyImg = loadImage("polygon.png")
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;

  Ground = new ground(600,600,1400,20);
  base1 = new ground(500, 400, 400, 10);
  base2 = new ground(1000, 300, 400, 10);

  box1 = new box1(500,300,40,40);
  box2 = new box1(450,300,40,40);
  box3 = new box1(400,300,40,40);
  box4 = new box1(550,300,40,40);
  box5 = new box1(600,300,40,40);

  box6 = new box2(425,250,40,40);
  box7 = new box2(525,250,40,40);
  box8 = new box2(475,250,40,40);
  box9 = new box2(575,250,40,40);

  box10 = new box3(500,200,40,40);
  box11 = new box3(450,200,40,40);
  box12 = new box3(550,200,40,40);

  box13 = new box4(475,150,40,40);
  box14 = new box4(525,150,40,40);

  box15 = new box5(500,100,40,40);


  box16 = new box1(1000,200,40,40);
  box17 = new box1(950,200,40,40);
  box18 = new box1(900,200,40,40);
  box19 = new box1(1050,200,40,40);
  box20 = new box1(1100,200,40,40);

  box21 = new box2(925,150,40,40);
  box22 = new box2(1025,150,40,40);
  box23 = new box2(975,150,40,40);
  box24 = new box2(1075,150,40,40);

  box25 = new box3(1000,100,40,40);
  box26 = new box3(950,100,40,40);
  box27 = new box3(1050,100,40,40);

  box28 = new box4(975,50,40,40);
  box29 = new box4(1025,50,40,40);

  box30 = new box5(1000,0,40,40);

 
  var options = {
    restitution:0.5,
    friction:0.1,
    density:0.4
}
polygon = Bodies.circle(50,200,20,options);
World.add(world,polygon);

  slingshotObj = new slingshot(this.polygon,{x:100,y:200});

}

function draw() {
  background(0);  
  Engine.update(engine);

  imageMode(CENTER);
  image(polyImg,polygon.position.x,polygon.position.y,50,50);
  
  groundObj.display();
  base1.display();
  base2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  slingShot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY });
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(this.polygon,{x:200,y:220})
    slingShot.attach(this.polygon);
  }
}
