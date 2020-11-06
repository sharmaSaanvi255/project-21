var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  
 bullet= createSprite(50, 200, 5, 50);

 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83
  )
 bullet.velocityX = speed;

 bullet.shapeColor="white";

 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor="red";
}

function draw() {
  background(0);

  if (hasCollided(bullet,wall)) {
    
  }
}
  
 function hasCollided(bullet,wall) {
   bulletRightEdge=bullet.x +bullet.width;
   wallLeftEdge=lwall.x;

   if (bulletLeftEdge>=wallLeftEdge) {
     return true;
   } else {
     return false;
   }
 }  
  