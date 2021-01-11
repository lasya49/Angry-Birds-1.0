const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,375,50,50);
    box2 = new Box(1000,375,50,50);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig (900,375);
    log1 = new Log (900,340,250,PI/2);
    bird1 = new Bird (200,200);
     
    box3 = new Box (800,305,50,50);
    box4 = new Box (1000,305,50,50);
    pig2 = new Pig (900,305);
    log2 = new Log (900, 270, 250, PI/2);
    

    box5 = new Box (900, 235, 50,50);
    log3 = new Log (840, 220, 125, PI/7);
    log4 = new Log (960, 220, 125, -PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    pig1.display();
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    bird1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}