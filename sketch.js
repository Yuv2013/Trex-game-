var trex,trex_running;
var ground,groundimage
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimage=loadImage("ground2.png")
  
}
 
function setup(){
  createCanvas(600,200)
  trex=createSprite(50,160,50,50)
  trex.addAnimation("trex", trex_running)
trex.scale=0.50
ground=createSprite(300,190,600,20)
ground.addImage("ground", groundimage)
 
}

function draw(){
  background("white")
 trex.collide(ground)
  if(keyDown("space"))  {

trex.velocityY=-4


  }

  trex.velocityY=trex.velocityY+0.2




  drawSprites()
}