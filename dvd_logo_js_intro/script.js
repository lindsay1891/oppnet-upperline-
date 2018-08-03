var dvd
var xPos = 50
var yPos = 100 
var xspeed= 3
var yspeed= 3
var bgColor= 'lightblue'

function preload() {
  dvd = loadImage('dvdlogo.jpg')
  xPos = windowWidth / 2
  yPos = windowHeight / 2 
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  
}

function draw() {
  background(bgColor)
  image(dvd, xPos, yPos,100,100);
  xPos = xPos + xspeed
  yPos = yPos - yspeed

  
  if (yPos < 0 ){
  yspeed = yspeed * -1
  bgColor = 'lightpink'
}
  if (yPos >windowHeight-100 ){
  yspeed = yspeed * -1
  bgColor = 'orchid'
}
  if (xPos <0){
    xspeed = xspeed * -1
  bgColor = 'coral'
  }
  if (xPos > windowWidth-100){
  xspeed = xspeed * -1
  bgColor = 'lightblue'
  
  }
  
}
