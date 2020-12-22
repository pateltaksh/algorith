var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(400, 200, 50, 50);
 movingRect=createSprite(600,200,30,50);
 movingRect.shapeColor="red";
 fixedRect.shapeColor="red";
 fixedRect.velocityX=5;
 movingRect.velocityX=-5;
}


function draw() {
  background(0);
  
  
  console.log(fixedRect.x-movingRect.x);  
  if(movingRect.x-fixedRect.x<=(movingRect.width+fixedRect.width)/2&&fixedRect.x-movingRect.x<=(movingRect.width+fixedRect.width)/2){

    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1);
  }
  else if(movingRect.Y-fixedRect.Y<=(movingRect.height+fixedRect.height)/2&&fixedRect.Y-movingRect.Y<=(movingRect.height+fixedRect.height)/2){
    movingRect.velocityY=movingRect.velocityY*(-1);
    fixedRect.velocityY=fixedRect.velocityY*(-1);
  }

  console.x
  drawSprites();
}