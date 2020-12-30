var canvas;
var playerCount;
var gameState=0;
var PaddleBasedWall,PaddleBasedWallButton1,PaddleBasedWallButton2;
var backgroundIMG;
var WaterCircleDoor,FireCircleDoor;
var greenGoose;
var waterCircle,FireCircle;
var FireImg;
var WaterImg;
var levelCounter =0;
var TimeUsed;
var water;
var water1;
var water2;
function preload(){
backgroundIMG = loadImage("background.jpg");
FireImg=loadImage("FireCircle Image1.png");
WaterImg=loadImage("WaterCircle Image1.png");
}
function setup(){
    canvas = createCanvas(1200,800);
    background(backgroundIMG);
    fill("brown")
  rect(0,770,1200,30)
  rect(1200,570,-1000,30)
  rect(0,370,1000,30)
  rect(1200,170,-1000,30)
  waterCircle=createSprite(1100,770,20,20);
  FireCircle=createSprite(1160,770,20,20);
  FireCircle.addImage(FireImg)
  FireCircle.scale=0.15;
 waterCircle.addImage(WaterImg)
 waterCircle.scale=0.15;
  
  drawObstacles(1000,770,100,10,"red")
 water2 = drawObstacles(500,770,100,10,"blue");
  drawBalancersAndAdaptiviters(200,770,20,10,"orange");
  drawBalancersAndAdaptiviters(50,770,100,10,"orange");
  drawBalancersAndAdaptiviters(250,570,20,10,"orange")
  drawObstacles(500,570,100,10,"green")
  drawBalancersAndAdaptiviters(800,550,50,50,"grey")
  drawObstacles(800,370,150,10,"red")
 water = drawObstacles(500,370,150,10,"blue")
  drawBalancersAndAdaptiviters(50,345,100,120,"brown")
  drawObstacles(300,170,150,10,"red")
 water1 = drawObstacles(675,170,350,10,"blue")
  drawBalancersAndAdaptiviters(800,160,99,10,"red")
  drawGoals(1000,130,88,100,"red")
  drawGoals(1100,130,88,100,"blue")
  drawBalancersAndAdaptiviters(600,790,1200,30,"brown")
  drawBalancersAndAdaptiviters(700,590,-1000,30,"brown")
  drawBalancersAndAdaptiviters(600,390,1000,30,"brown")
  drawBalancersAndAdaptiviters(700,190,-1000,30,"brown")

}
function draw(){
  background(backgroundIMG);
  TimeUsed=Math.round(World.frameCount/60)
  console.log(TimeUsed)
  if(keyDown(LEFT_ARROW)){
    FireCircle.x=FireCircle.x-1
  }
  if(keyDown(RIGHT_ARROW)){
    FireCircle.x=FireCircle.x+1
  }
 if(keyDown("A")||keyDown("a")){
   waterCircle.x=waterCircle.x-1;
 }
 if(keyDown("d")||keyDown("D")){
   waterCircle.x=waterCircle.x+1;
 }
 //if(FireCircle.isTouching(water)||FireCircle.isTouching(water1)||FireCircle.isTouching(water2)){
  // FireCircle.visible = false;
 //}
drawSprites()
}
function drawObstacles(x,y,width,height,shapeColor){
this.obstacle=createSprite(x,y,width,height);
this.obstacle.shapeColor=shapeColor;
}
function drawBalancersAndAdaptiviters(x,y,width,height,shapeColor){
  this.Balancers=createSprite(x,y,width,height);
  this.Balancers.shapeColor=shapeColor;
  }
  function drawDiamonds(x,y,width,height,shapeColor){
    this.diamonds=createSprite(x,y,width,height);
    this.diamonds.shapeColor=shapeColor;
    }
    function drawGoals(x,y,width,height,shapeColor){
      this.obstacle=createSprite(x,y,width,height);
      this.obstacle.shapeColor=shapeColor;
      }