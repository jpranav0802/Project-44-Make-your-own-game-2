var PLAY = 1;
var END = 0;
var gameState = PLAY;

var jakePlayer, goldCoinImg, copImg;
var magnetImg, obstacleImg, trophyImg;
var germImg, goldBarImg;
var bg, bgImg;
var ground;

function preload(){
jakePlayer = loadImage("jake main.jpg");
goldCoinImg = loadImage("gold coin.png");
copImg = loadImage("cop.jpg");
magnetImg = loadImage("magnet edited.jpg");
obstacleImg = loadImage("obstacle 1.png");
trophyImg = loadImage("trophy.png");
germImg = loadImage("warning germ.png");
goldBarImg = loadImage("goldbar.png");
bgImg = loadImage("bg img.jpg");
}

function setup(){
createCanvas(1200,650);
bg = createSprite(600,325,1200,600);
bg.addImage("bgImg",bgImg);
bg.scale = 2.5;
ground = createSprite(600,600,1200,20);
ground.shapeColor = "brown";
jake = createSprite(200,500,20,250);
jake.addImage("jakeImg",jakePlayer);
jake.scale = 0.5;
}

function draw(){
background('cyan');
drawSprites();
}