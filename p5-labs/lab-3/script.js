var racerSize;
racerSize= 40; 
var racer1x = 0;
var racer2x = 0;
var racer3x = 0;
var racer4x = 0;
var startY = 100;
var winningSpeed = 3; 
var losingSpeed = 1
var Averagespeed = 2


function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(200, 225, 255);

  strokeWeight(4);
  stroke(0)
  line(580, 0, 580, height);
  
strokeWeight(1)

  ellipse(racer1x, startY, racerSize,racerSize);
  ellipse(racer2x, startY * 2, racerSize,racerSize);
  ellipse(racer3x, startY * 3, racerSize,racerSize);
  ellipse(racer4x, startY * 4, racerSize,racerSize);

    racer1x= racer1x + winningSpeed; 
    racer2x= racer2x +losingSpeed;
    racer3x= racer3x +Averagespeed; 
    racer4x= racer4x +Averagespeed;
}
