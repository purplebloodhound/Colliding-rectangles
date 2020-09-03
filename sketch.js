var fixedrect, movingrect;

function setup() {
  createCanvas(1600,800);
  fixedrect = createSprite(800, 400, 80, 80);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(50,100,80,50);
  movingrect.shapeColor = "green";
  
function draw() {
  background(255,255,255);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if (movingrect.x - fixedrect.x === fixedrect.width/2 + movingrect.width/2 
    && fixedrec.x - movingrect.x === fixedrect.width/2 + movingrect.width/2 
    && movingrect.y - fixedrect.y === fixedrect.heigth/2 + movingrect.height/2
    && fixedrect.y - movingrect.y === fixedrect.height/2 + movingrect.height/2)
    {
      fixedrect.shapeColor = "red";
      movingrect.shapeColor = "red";
    }
    else {fixedrect.shapeColor = "green"; movingrect.shapeColor = "green";}
  drawSprites();
}