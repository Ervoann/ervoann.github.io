let nb = 20;
let dim = 0;
let margin = 50;
let f = 0.25;
let frequence = -2.0;
let x,y;

function setup() {
  createCanvas(500, 500);
  dim= (width-2*margin)/nb;
  angleMode(DEGREES);
  //createLoop({duration:2,gif:true})
}

function draw() {
  background(0);
  stroke(255);
  fill(255);
  // noFill();
  rectMode(CENTER);
  for (let j=0 ; j<nb ; j+=1) {
  for (let i=0 ; i<nb ; i+=1) {
    x = margin + dim/2+i*dim;
    y = margin + dim/2+j*dim
    f = sin(frequence * /*animLoop.theta*/ frameCount + 0.3*dist(/*mouseX*/width/2, height/2/*mouseY*/,x,y));
    circle(x, y, f * dim /*random(11,10)*/);
    //rect(dim/2+i*dim, dim/2+j*dim, 0.8*dim, 0.8*dim);
  } }
}

