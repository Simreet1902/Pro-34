const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, hero, sky;
var bgImg, heroImg, monsterImg, monster2Img

function preload() {
//preload the images here
bgImg = loadImage("images/GamingBackground.png");
heroImg = loadImage("images/Superhero-01.png");
monsterImg = loadImage("images/Monster-01.png");
monster2Img = loadImage("images/Monster-02.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  ground = new Ground(1500,770,3000,20);
  hero = new Hero(200,200,10);
  fly = new Fly(hero.body, {x:100, y:50},0,0)
}

function draw() {
  background(bgImg);
  
  ground.display();
  hero.display();
  fly.display();
}

