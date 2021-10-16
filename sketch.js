var garden,rabbit;
var gardenImg,rabbitImg;
var apple,orangeL,redL,orangeImg,redImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));
  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      createApples();
    }
    else{
      createLeaves();
    }
  }

  drawSprites();
}

function createApples() {
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
    
  }


  function createOrange() {
  orange = createSprite(random(20,320),30,15,15);
  orange.addImage(orangeImg);
  orange.scale = 0.07;
  orange.velocityY = 6;
  orange.lifetime = 200;
  }



  function createRed() {
red = createSprite(random(90,390),50,35,35);
red.addImage(redImg);
red.scale = 0.07;
red.velocityY = 10;
red.lifetime = 100;
  }
