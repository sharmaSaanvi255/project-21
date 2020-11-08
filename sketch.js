var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  
 bullet= createSprite(50, 200, 50, 5);

 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);
 bullet.velocityX = speed;

 bullet.shapeColor="white";

 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor="red";
}

function draw() {
  background(0);

  if (hasCollided(bullet,wall)) {
   bullet.velocityX=0;
   
   var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness of wall/thickness of wall/thickness of wall);

   if (damage>10)  {
     wall.shapeColor="green";
   } else {
     wall.shapeColor="red";
   }
   
  }
  drawSprites();
}
  
 function hasCollided(bullet,wall) {
   bulletRightEdge=bullet.x +bullet.width;
   wallLeftEdge=wall.x;

   if (bulletRightEdge>=wallLeftEdge) {
     return true;
   } else {
     return false;
   }
 }  
  