var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var ball6;
var ball7;
var ball8;
let bsize=133;
let pg;
var initials ='dpml'; // your initials
var choice = '1'; // starting choice, so it is not empty
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  ball1 = loadImage('https://end3rguy.github.io/images/hdballs4paint/ball_0001.png');
  ball2 = loadImage('https://end3rguy.github.io/images/hdballs4paint/ball_0002.png');
  ball3 = loadImage('https://end3rguy.github.io/images/hdballs4paint/ball_0003.png');
  ball4 = loadImage('https://end3rguy.github.io/images/hdballs4paint/ball_0004.png');
  ball5 = loadImage('https://end3rguy.github.io/images/hdballs4paint/ball_0005.png');
  ball6 = loadImage('https://end3rguy.github.io/images/hdballs4paint/ball_0006.png');
  ball7 = loadImage('https://end3rguy.github.io/images/hdballs4paint/ball_0007.png');
  ball8 = loadImage('https://end3rguy.github.io/images/hdballs4paint/ball_0008.png');
}

function setup() {
createCanvas(1280, 720);  // canvas size
pg = createGraphics (1280, 720);
pg.background(204,153,255);   // use our background screen color
}

function draw() {
  image(pg,0,0);
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if git is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }

  if(choice == '1'){ 
   stroke(255)
   strokeWeight(6)
   fill(0,0)
   ellipse(mouseX,mouseY,bsize);
  }
if(choice == '2'){ 
   stroke(0)
   strokeWeight(6)
   fill(0,0)
   ellipse(mouseX,mouseY,bsize);
  }
  if(choice == '3'){ 
   stroke(255,255,0)
   strokeWeight(6)
   fill(0,0)
   ellipse(mouseX,mouseY,bsize);
  }
  if(choice == '4'){ 
   stroke(0,0,255)
   strokeWeight(6)
   fill(0,0)
   ellipse(mouseX,mouseY,bsize);
  }
  if(choice == '5'){ 
   stroke(255,128,0)
   strokeWeight(6)
   fill(0,0)
   ellipse(mouseX,mouseY,bsize);
  }
  if(choice == '6'){ 
   stroke(0,255,0)
   strokeWeight(6)
   fill(0,0)
   ellipse(mouseX,mouseY,bsize);
  }
  if(choice == '7'){ 
   stroke(0,128,0)
   strokeWeight(6)
   fill(0,0)
   ellipse(mouseX,mouseY,bsize);
  }
  if(choice == '8'){ 
   stroke(0,128,128)
   strokeWeight(6)
   fill(0,0)
   ellipse(mouseX,mouseY,bsize);
  }
  if(choice == '9'){ 
   stroke(255)
   strokeWeight(2)
   fill(0,0)
   ellipse(mouseX,mouseY,12);
  }
  if(choice == '0'){ 
   stroke(0)
   strokeWeight(2)
   fill(0,0)
   ellipse(mouseX,mouseY,12);
  }
}
function mouseWheel(scroll) {
   bsize+=scroll.delta/8;

}
function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   pg.image(ball1, mouseX-(round(bsize/2)), mouseY-(round(bsize/2)),bsize,bsize);
    
  } else if (toolChoice == '2') { // second tool

    pg.image(ball2, mouseX-(round(bsize/2)), mouseY-(round(bsize/2)),bsize,bsize);
  } else if (toolChoice == '3') { // third tool

    pg.image(ball3, mouseX-(round(bsize/2)), mouseY-(round(bsize/2)),bsize,bsize);
  } else if (toolChoice == '4') {

    pg.image(ball4, mouseX-(round(bsize/2)), mouseY-(round(bsize/2)),bsize,bsize);
  } else if (key == '5') { // this tool calls a function
    pg.image(ball5, mouseX-(round(bsize/2)), mouseY-(round(bsize/2)),bsize,bsize);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {
pg.image(ball6, mouseX-(round(bsize/2)), mouseY-(round(bsize/2)),bsize,bsize);
  } else if (toolChoice == '7') {
pg.image(ball7, mouseX-(round(bsize/2)), mouseY-(round(bsize/2)),bsize,bsize);
  } else if (toolChoice == '8') {
pg.image(ball8, mouseX-(round(bsize/2)), mouseY-(round(bsize/2)),bsize,bsize);
  } else if (toolChoice == '9') {
     pg.stroke(255);
    pg.strokeWeight(12);
    pg.line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '0') {
    pg.stroke(0);
    pg.strokeWeight(12);
    pg.line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(ball1, mouseX, mouseY,);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    pg.background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="p";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
