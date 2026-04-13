function setup() {
createCanvas(600, 600);
}
function draw() {
background(204);
strokeJoin(ROUND);
strokeWeight(0);
rect(200,500,200,200); //torso fill
quad(mouseX-100,mouseY+50,mouseX+100,mouseY+50,400,500,200,500); //neck fill
strokeWeight(12);
line(200,500,200,700); //torso left outline
line(400,500,400,700); //torso right outline
line(mouseX-100,mouseY+50,200,500); //neck left outline
line(mouseX+100,mouseY+50,400,500); //neck right outline
arc(mouseX,mouseY+50,200,200,PI,TWO_PI); //head
arc(mouseX,mouseY+30,120,80,TWO_PI,PI); //mouth
ellipse(mouseX+30,mouseY+20,20,20); //right eye
ellipse(mouseX-30,mouseY+20,20,20); //left eye
}
