var b1,b2

function setup() {
  
  createCanvas(400, 400);
 
  textAlign(CENTER);
  textSize(15);
}

function draw() {
  background(200,10,200);

  if(keyIsDown(DOWN_ARROW)){
    background("red");
  }

  if(keyIsDown(UP_ARROW)){
    background("green");
  }

}

