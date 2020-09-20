//making the physics engine
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//adding the variables
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var log6;
var chain1;

function preload() {
    //loading the background image
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    //making the canvas
    var canvas = createCanvas(1200,400);
    //creating our engine using the physics engine
    engine = Engine.create();
    //using the engine creating the world
    world = engine.world;

    //adding the bodies in the game
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);
    log6 =  new Log(230,180,80, PI/2);
    
    chain1 = new Chain(bird.body, log6.body);

}

function draw(){
    background(backgroundImg);
    //updating the engine
    Engine.update(engine);
    //checking the position of box2 
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    log6.display();
    chain1.display();
   
    
}
