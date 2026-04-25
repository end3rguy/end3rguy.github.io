
var ballx = 300; // width/2 ?
var bally = 300;
var ballSize = 40;
var progress =0;
var topscore1
var topscore2
var img1, img2, beginImg;
var  c; // our text color as a variable, set in setup
var gameState ="begin";
let touchingRed = false;
let touchingGreen = false;
let obstAngle=0
let obstSpeedY=5
let obstSpeedX=5
let obstX=1024
let obstY=0

function preload() {

  imgplayer = loadImage('https://end3rguy.github.io/p5js/nonscarymazegame/images/playerguy.png');
  imgm1 = loadImage('https://end3rguy.github.io/p5js/nonscarymazegame/images/maze1.png');
  imgm2 = loadImage('https://end3rguy.github.io/p5js/nonscarymazegame/images/maze2.png');
  imgm3 = loadImage('https://end3rguy.github.io/p5js/nonscarymazegame/images/maze3.png');
  imglose = loadImage('https://end3rguy.github.io/p5js/nonscarymazegame/images/losescreen.png');
}

function setup() {
  createCanvas(1024, 1024);
  angleMode(DEGREES);
  rectMode(CORNER);
  noCursor();
} // end of setup


function draw() {
  
if(gameState =="begin"){
  background(imglose);
  fill(0);
  strokeWeight(0);
  rect(0,0,1024,512);
  loadPixels();
  loseGame();
}

if(gameState =="lose"){
  background(imglose);
  loadPixels();
  loseGame();
}

if(gameState =="menu"){
  rectMode(CORNER);
  background(255,0,255);
  fill(0,0,255)
  rect(800,800,128,128);
  textSize(40); 
  fill(0,255,0)
  rect(220,220,64,64);
  fill(0,0,255);
  textAlign(CENTER)
  if(progress==0){
  text("welcome to the non-scary maze game!",512,512);
  }
  textAlign(LEFT)
  textSize(20);
  text("level 1", 225, 260);
  if(progress > 0){
    fill(0,255,0)
    rect(480,220,64,64);
    fill(0,0,255);
  text("level 2", 485, 260);
  }
  if(progress > 1){
    fill(0,255,0)
    rect(740,220,64,64);
    fill(0,0,255);
    text("level 3", 745, 260);
  }
    textSize(100);
  if(progress > 2){
  textAlign(CENTER)
  text("You Won!!!", 512,512);
  }
  textSize(40);
  textAlign(LEFT)
  loadPixels();
  mainMenu();
}
  
if(gameState =="L1"){
  background(imgm1);
  loadPixels();
  levelOne();
}
if(gameState =="L2"){
  background(imgm2);
  loadPixels();
  levelTwo();
}
if(gameState =="L3"){
  background(imgm3);
  loadPixels();
  levelThree();
}
if(gameState =="Win"){
    background(0,255,255);
    loadPixels();
  win();
}
  //text(("Score: " + score), width/2, 40);
  checkCollisions();
  image(imgplayer, mouseX-16, mouseY-16,);
} // end of draw

function loseGame(){
  if (touchingGreen==true){
    gameState= "menu";
  }
} // end of beginGame

function mainMenu(){
  if (touchingGreen==true && mouseY < 512){
    if (mouseX < 341){
      gameState= "L1";
    }
    if (mouseX > 683){
      gameState= "L3";
    }
    if(mouseX > 341 && mouseX < 683){
      gameState= "L2";
    }
  }
}

function levelOne(){
  fill(0,0,255);
  textSize(40); 
  text("level 1", width/2, 40);
  if (touchingGreen==true && mouseY > 512){
    if(progress < 1){
      progress= 1;
    }
    gameState= "menu";
  }
  if (touchingRed==true){
  gameState= "lose";
  }
} 


function levelTwo(){
  fill(0,0,255);
  textSize(40); 
  text("level 2", width/2, 40);
  if (touchingGreen==true && mouseY > 512){
    if(progress < 2){
      progress= 2;
    }
    gameState= "menu";
  }
  if (touchingRed==true){
  gameState= "lose";
  }
  rectMode(CENTER);
  fill(255, 0, 0);
  push(); // Start new drawing state
  translate(590, 830); // Move to center of canvas
  rotate(obstAngle); // Rotate by the current angle
  rect(0, 0, 300, 25); // Draw at (0,0)
  pop(); // Restore original state
  obstAngle += 3;
  
  rect(100, obstY, 200, 50);
   obstY += obstSpeedY;
   if (obstY > 1024 || obstY < 0) {
    obstSpeedY *= -1; // Reverse direction
   }
   
  rect(obstX, 283, 55, 55);
   obstX += obstSpeedX;
   if (obstX > 1024 || obstX < 650) {
    obstSpeedX *= -1; // Reverse direction
  }
} // end of level 2

function levelThree(){
  fill(0,0,255);
  textSize(40); 
  text("level 3", width/2, 40);
  if (touchingGreen==true && mouseY > 512){
    if(progress < 3){
      progress= 3;
    }
    gameState= "menu";
  }
  if (touchingRed==true){
  gameState= "lose";
  }
  rectMode(CENTER);
  fill(255, 0, 0);
  push(); 
  translate(440, 580); 
  rotate(obstAngle); 
  rect(0, 0, 500, 25); 
  pop(); 
  
  push(); 
  translate(220, 270); 
  rotate(obstAngle); 
  rect(0, 0, 200, 25); 
  pop(); 
  
  push(); 
  translate(400, 270); 
  rotate(obstAngle); 
  rect(0, 0, 200, 25); 
  pop(); 
  
  push(); 
  translate(820, 560); 
  rotate(obstAngle); 
  rect(0, 0, 200, 25); 
  pop(); 
  
  push();
  translate(282, 915); 
  rotate(obstAngle); 
  rect(0, 0, 200, 25); 
  pop(); 
  
  push(); 
  translate(560, 915); 
  rotate(obstAngle); 
  rect(0, 0, 200, 25); 
  pop(); 
  
  obstAngle -= 2;
  
   rect(400, obstY, 200, 50);
   obstY += obstSpeedY;
   if (obstY > 1024 || obstY < 0) {
    obstSpeedY *= -1; // Reverse direction
   }
   
} // end level 3

/*function win(){
  fill(0)
  textAlign(CENTER)
  text("You Won!!!", width/2, 60);
  fill(0,0,255)
  rect(880,860,80,80)
  
} // end win*/

function checkCollisions() {
  // Grab the 32x32 area where the player is (centered on mouse)
  let area = get(mouseX - 16, mouseY - 16, 32, 32);
  area.loadPixels();

  // Reset variables each frame
  touchingRed = false;
  touchingGreen = false;

  // Check for Red (255, 0, 0)
  if (get(mouseX, mouseY)[0] === 255 && get(mouseX, mouseY)[1] === 0 && get(mouseX, mouseY)[2] === 0) {
    touchingRed = true;
  }
  // Check for Green (0, 255, 0)
  touchingGreen = area.pixels.some((val, i, arr) => 
    i % 4 === 1 && val === 255 && arr[i-1] === 0 && arr[i+1] === 0
  );
}
