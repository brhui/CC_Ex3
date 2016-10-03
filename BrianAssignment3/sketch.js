// Color variables for triShape function
var orange, forestgreen

// Long rectangle Y value
var rectY = 177;

// Long rectangle speed value
var rectSpeed = 1;

// Circle color values
var ellipR = 237;
var ellipG = 28;
var ellipB = 36;

// Middle triangle X values
var mtriX1 = 200;
var mtriX2 = 125;
var mtriX3 = 275;

// Middle triangle Y values
var mtriY1 = 266;
var mtriY2 = 366;
var mtriY3 = 366;

function setup() {
  createCanvas(400, 400)
  orange = color(241, 90, 36);
  forestgreen = color(0, 104, 55);
}

function draw() {
  background(232, 255, 212); // Redraw the background everytime through the sketch.

  // Rectangle will move down at the variable of rectSpeed
  rectY += rectSpeed

  /*
  // If rectY is greater than height OR rectY is less than 177, rectangle will switch directions
  if ((rectY > height) || (rectY < 177)) {
    rectSpeed *= -1;
  } */

  // If rectY is greater than height, rectY will be -50 (Needs to be commented out or direction switch code above won't work)
  if (rectY > height) {
    rectY = -50;
  }
  if (rectY < -50) {
    rectY = 400;
  }

  // If mouse is pressed, direction will change, or else if mouse isn't pressed, rectSpeed is 3 (normal). This doesn't work if used in conjunction with the switching directions code.
  if (mouseIsPressed) {
    rectSpeed = -3;
  } else {
    rectSpeed = 3;
  }

  // Rectangle
  noStroke();
  fill(57, 181, 74);
  rect(0, rectY, 400, 50);

  // Circle
  ellipseMode(CORNER);
  strokeWeight(4);
  stroke(247, 147, 30);
  fill(ellipR, ellipG, ellipB);
  ellipse(150, 45, 100, 100);

  // if any key is pressed, circle RGB values will change
  if (keyIsPressed) {
    ellipR -= 10;
    ellipG += 10;
    ellipB += 5;
  }
  if (ellipR < 0) {
    ellipR = 255;
  }
  if (ellipG > 255) {
    ellipG = 0;
  }
  if (ellipB > 255) {
    ellipB = 0;
  }

  // Star
  noStroke();
  fill(147, 39, 143);
  beginShape();
  vertex(200, 70);
  vertex(207, 86);
  vertex(225, 89);
  vertex(212, 102);
  vertex(215, 120);
  vertex(200, 111);
  vertex(184, 120);
  vertex(187, 102);
  vertex(175, 89);
  vertex(192, 86);
  endShape(CLOSE);

  // Left Arrow
  noStroke();
  fill(140, 98, 57);
  quad(64, 95, 135, 24, 84, 95, 135, 166);

  // Right Arrow
  noStroke();
  fill(140, 98, 57);
  quad(335, 95, 265, 24, 315, 95, 265, 166);

  // Left Triangle as a function of triShape
  triShape(25, 266, orange)

  // Right Triangle as a function of triShape
  triShape(225, 266, forestgreen)

  // Middle Triangle
  noStroke();
  fill(0, 164, 255, 127);
  triangle(mtriX1, mtriY1, mtriX2, mtriY2, mtriX3, mtriY3);

  // This keyIsPressed will make sure that the triangle stops moving when the key is released.
  if (keyIsPressed) {
    // Pressing the "W" key will move the triangle up.
    if (key == 'w' || key == 'W') {
      mtriY1 -= 2;
      mtriY2 -= 2;
      mtriY3 -= 2;
      console.log("Triangle is moving up!")
    }

    // Pressing the "S" key will move the triangle down.
    if (key == 's' || key == 'S') {
      mtriY1 += 2;
      mtriY2 += 2;
      mtriY3 += 2;
      console.log("Triangle is moving down!")
    }

    // Pressing the "A" key will move the triangle left.
    if (key == 'a' || key == 'A') {
      mtriX1 -= 2;
      mtriX2 -= 2;
      mtriX3 -= 2;
      console.log("Triangle is moving left!")
    }

    // Pressing the "D" key will move the triangle right.
    if (key == 'd' || key == 'D') {
      mtriX1 += 2;
      mtriX2 += 2;
      mtriX3 += 2;
      console.log("Triangle is moving right!")
    }

    // Pressing the "Q" key will make the triangle go diagonally to the left and up.
    if (key == 'q' || key == 'Q') {
      mtriX1 -= 2;
      mtriX2 -= 2;
      mtriX3 -= 2;
      mtriY1 -= 2;
      mtriY2 -= 2;
      mtriY3 -= 2;
      console.log("Triangle is moving up and left!")
    }

    // Pressing the "E" key will make the triangle go diagonally to the right and up.
    if (key == 'e' || key == 'E') {
      mtriX1 += 2;
      mtriX2 += 2;
      mtriX3 += 2;
      mtriY1 -= 2;
      mtriY2 -= 2;
      mtriY3 -= 2;
      console.log("Triangle is moving up and right!")
    }

    // Pressing the "C" key will make the triangle go diagonally to the right and down.
    if (key == 'c' || key == 'C') {
      mtriX1 += 2;
      mtriX2 += 2;
      mtriX3 += 2;
      mtriY1 += 2;
      mtriY2 += 2;
      mtriY3 += 2;
      console.log("Triangle is moving down and right!")
    }

    // Pressing the "Z" key will make the triangle go diagonally to the left and down.
    if (key == 'z' || key == 'Z') {
      mtriX1 -= 2;
      mtriX2 -= 2;
      mtriX3 -= 2;
      mtriY1 += 2;
      mtriY2 += 2;
      mtriY3 += 2;
      console.log("Triangle is moving down and left!")
    }

    // Pressing the "R" key will reset the triangle's position.
    if (key == 'r' || key == 'R') {
      mtriX1 = 200;
      mtriX2 = 125;
      mtriX3 = 275;
      mtriY1 = 266;
      mtriY2 = 366;
      mtriY3 = 366;
      console.log("Triangle position reset!")
    }
  }

  // This makes the triangle wrap around back onto the canvas if it leaves the canvas' visible area.
  if (mtriX3 < 0) {
    mtriX1 = 475
    mtriX2 = 400
    mtriX3 = 550
  }
  if (mtriX2 > width) {
    mtriX1 = -75;
    mtriX2 = -150;
    mtriX3 = 0;
  }
  if (mtriY2 < 0) {
    mtriY1 = 400;
    mtriY2 = 500;
    mtriY3 = 500;
  }
  if (mtriY1 > height) {
    mtriY1 = -100;
    mtriY2 = 0;
    mtriY3 = 0;
  }
}

// This function defines the left and right triangle as above.
function triShape(triX, triY, clr) {
  var x = triX;
  var y = triY;
  noStroke();
  fill(clr);
  triangle(x, y, x + 150, y, x + 75, y + 100);
}
