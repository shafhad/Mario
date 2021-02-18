//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var thorn;
var ground;
var wall1;
var bg;
var brick, brick1, brick2, brick3, brick4;
var coin;

function preload() {
    bg = loadImage("./Images/bg.png");
}

function setup() {
    var canvas = createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 650, 1200, 20);

    //for(var x = 1200; x< -7000; x= x +200 ){
    wall1 = new Ground(600, 400, 60, 80);
    //}

    mario = new Mario(200, 400);

    brick = new Brick(100, 300);
    coin = new Coin(200, 300);
    thorn = new Thorn(300, wall1.body.position.x);
   


}

function draw() {
    background(bg);
    Engine.update(engine);

    ground.display();
    wall1.display();

    mario.display();

    brick.display();
    coin.display();
    thorn.display();
    //Matter.Body.applyForce(wall1.body, wall1.body.position, { x: -10, y: 0 });

    spawnThorn();
    spawnWall();

}

function keyPressed() {
    if (keyCode === 32) {
        console.log("jump")
        Matter.Body.applyForce(mario.body, mario.body.position, { x: 0, y: -100 });
    }
    if (keyCode === 37) {
        Matter.Body.setVelocity(mario.body, { x: -6, y: 0 });
    }
    if (keyCode === 39) {
        console.log("right")
        Matter.Body.setVelocity(mario.body, { x: 6, y: 0 });
    }
}

function spawnThorn() {
    if (frameCount % 100 === 0) {
       
        console.log(thorn.body)
       Matter.Body.setVelocity(thorn.body, { x: 10, y: 0 });

    }
}

function spawnWall() {
    if (frameCount % 100 === 0) {
        console.log(wall1.body)
        Matter.Body.applyForce(wall1.body, wall1.body.position, { x: -10, y: 0 });

    }
}




