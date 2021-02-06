function setup() {var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survial Time:"+ survialTime, 100,50);
  
}


function draw() {
   //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x)
  
}

 switch(score){
   case 10: player.scale=0.12;
           break;
   case 20: player.scale=0.14;
           break;
   case 30: player.scale=0.16;
           break;
   case 40: player.scale=0.18;
           break;
           default: break:
     
 }

   if(obstaclesGroup.isTouching(player)){
     player.scale=0.2;
   }



  