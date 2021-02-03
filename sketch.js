var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    //create 4 different surfaces
  canvas = createCanvas(504,400);
  
  surface1 = createSprite(60,380,100,20);  
  surface1.shapeColor = "red"
  surface2 = createSprite(185,380,100,20);
  surface2.shapeColor = "yellow"
  surface3 = createSprite(310,380,100,20);
  surface3.shapeColor = "blue"
  surface4 = createSprite(435,380,100,20);
  surface4.shapeColor = "green"

    //create box sprite and give velocity
  box = createSprite(252,200,25,25);
  box.velocityX = -5
  box.velocityY = 5
  
 



}

function draw() {
    background("black");
    
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
    
    if(surface1.isTouching(box)){
      box.shapeColor = "red"
    }
    
    if(surface2.isTouching(box)){
      box.shapeColor = "yellow"
    }

    if(surface3.isTouching(box)){
      box.shapeColor = "blue"
    }

    if(surface4.isTouching(box)){
      box.shapeColor = "green"
    }







    //add condition to check if box touching surface and make it box






    drawSprites();
}
