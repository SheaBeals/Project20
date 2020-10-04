var car, wall;
 var speed,weight;
function setup() { 
  createCanvas(1200,800); 
  car = createSprite(50,200,50,50); 
  car.shapeColor = "green"; 
  wall = createSprite(1180,200,60,height/2);
   wall.shapeColor = "green";
   speed=random(55,90);
   weight=random(400,1500); 
   car.velocityX = speed;
  } 
  function draw() { 
    background(0); 
     console.log(wall.x - car.x); 
     if(wall.x - car.x < car.width/2 + wall.width/2
      && car.x - wall.x < wall.width/2 + car.width/2
      )
      { 
        car.shapeColor = "red";
        wall.shapeColor = "red"; 
        car.velocityX = 0
      } 
      else { 
        car.shapeColor = "green"; 
      wall.shapeColor = "green"; 
    } 
      drawSprites(); 
    }