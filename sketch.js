var fixedrect, movingrect;

function setup() {
  createCanvas(1600,800);
  fixedrect = createSprite(800, 400, 80, 80);
  movingrect = createSprite(50, 100, 80, 50);
}

function draw() {
  background(255,255,255);  
  mixedrect.x = World.mouseX;
  mixedrect.y = World.mouseY;
  drawSprites();
}