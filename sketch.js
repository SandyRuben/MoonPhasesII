function setup() {
  createCanvas(400, 400);
  silhouetteCanvas = createGraphics(width, height);
  waning = true;
  waxing = false;

  celebrating = false;
  noStroke();
  rightWidth = width *.17;
  leftWidth = width *.17;

  celebrationSound = loadSound("assets/celebrateSound.mp3");

  confetti = loadImage("assets/Confetti.jpg");
}

function draw() {
  silhouette();
  // if (!celebrating) {
  //   silhouette();
  // } else {
  //   celebrate();
  //   if (this.celebrating && !this.celebrationSound.isPlaying()) {
  //     this.celebrating = false;
  //   } 
  // }
  
}

function silhouette() {
  background(220);

  //moon ellipse change to image later
  ellipse(width/2, height/2, 200, 200);

  //moon silhouette

  //logic for waxing or waning

  //limits for widths
  // rightwidth = width *.83;
  // leftWidth = width *.17;
  print(this.celebrationSound.isLoaded());

  if (waning) {
    leftWidth++;
  }
  
  if (leftWidth >= width *.83) {
    waning = false;
    waxing = true;
  }

  if (waxing) {
    rightWidth++;
  }

  if (rightWidth >= width*.83) {
    waxing = false;
  }

  if (!waning && !waxing) {
    rightWidth = width *.17;
    leftWidth = width *.17;
    waning = true;
    celebrate();
  }

  
  push();
  silhouetteCanvas.noStroke();
  silhouetteCanvas.clear();
  silhouetteCanvas.filter(BLUR);
  silhouetteCanvas.fill(0, 0, 0, 200);
  silhouetteCanvas.beginShape();
  silhouetteCanvas.vertex(width*.5, height*.25);
  silhouetteCanvas.bezierVertex(rightWidth, height*.25, rightWidth, height*.75, width*.5, height*.75);
  silhouetteCanvas.bezierVertex(leftWidth, height*.75, leftWidth, height*.25, width*.5, height*.25);
  silhouetteCanvas.endShape();
  image(silhouetteCanvas, 0, 0);
  pop();
  //ellipse(width/2, height/2, 100, 100);
}

function celebrate() {
  if (!this.celbrating && !this.celebrationSound.isPlaying()) {
    this.celebrationSound.play();
    this.celebrating = true;
  }
  image(confetti, 0, 0);
}