
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground, left, right, bridge;
var jointPoint, jointLink;
var stone;
var stones = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(width/2, height-5, width, 10);
  left = new Base(100, height - 600, 200, 200);
  right = new Base(width - 100, height -600, 200, 200);
  bridge = new Bridge(20, {x: left.body.position.x - left.width/2, y: left.body.position.y - left.height/2});
  jointPoint = new Base(right.body.position.x-right.width/2, right.body.position.y - right.height/2, 1, 1);
  Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint.body);

  for (var i = 0; i < 16; i++){
    stone = new Stone(Math.random(bridge.pointA.x + 50, jointPoint.body.position.x), 50);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  bridge.show();
  jointPoint.display();
  left.display();
  right.display();
  for (var x = 0; x < stones.length; x++){
    stones[x].display();
  }

}
