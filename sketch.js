function setup() {
  createCanvas(400, 400, WEBGL);

  
  
}

function draw() {
  background(220);

  push();
  translate(0, 0, -100);
  rotateWithFrameCount();
  sphere(50);
  pop();
}

// Rotate 1 degree per frame along all three axes
//Source - https://p5js.org/examples/3d-geometries/
function rotateWithFrameCount() {
  rotateZ(frameCount);
  rotateX(frameCount);
  rotateY(frameCount);
}
