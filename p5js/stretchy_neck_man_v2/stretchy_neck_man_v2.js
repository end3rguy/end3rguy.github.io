function setup() {
createCanvas(600, 600);
}
function draw() {
background(204);
noCursor();
strokeJoin(ROUND);
stroke(0);
strokeWeight(212);
line(mouseX,mouseY+50,300,500); //neck outline
strokeWeight(0);
rect(200,500,200,200); //torso fill
strokeWeight(12);
line(200,500,200,700); //torso left outline
line(400,500,400,700); //torso right outline
stroke(255);
strokeWeight(188);
line(mouseX,mouseY+50,300,500); //neck fill
stroke(0);
strokeWeight(12);
arc(mouseX,mouseY+30,120,80,TWO_PI,PI); //mouth
ellipse(mouseX+30,mouseY+20,20,20); //right eye
ellipse(mouseX-30,mouseY+20,20,20); //left eye
}
