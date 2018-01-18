console.log("this is mysketch.js comment");

function setup(){
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(255);
}

function draw(){

  ellipses(); //draws first set of ellipses

  if (mouseIsPressed && mouseX <= 440 && mouseY <= 200){
    clear();
    stroke(0);
    background(255);
    ellipses2(); //draw ellipses with the left-most ellipse changing positions
  } else if (mouseIsPressed && mouseX > 520 && mouseY <= 200){
    clear();
    ellipses3(); //draw ellipses with the right-most ellipse changing positions
  }else {
    clear();
    ellipses(); //redraw ellipses in regular positions
  }

}

function ellipses(){
  strokeWeight(0.25);
  var space = 20;

  fill(194, 110, 236);
  ellipse(480, 150, 20, 20);

  fill(52, 148, 230);
  ellipse(480-space, 150, 20, 20);
  ellipse(480-space*2, 150, 20, 20);

  fill(236, 110, 173)
  ellipse(480+space, 150, 20, 20);
  ellipse(480+space*2, 150, 20, 20);

  line(420, 70, 540, 70);
  line(480, 70, 480, 140);
  line(480+space, 70, 480+space, 140);
  line(480+space*2, 70, 480+space*2, 140);
  line(480-space, 70, 480-space, 140);
  line(480-space*2, 70, 480-space*2, 140);
}

function ellipses2(){
  var space = 20;

  fill(194, 110, 236);
  ellipse(480, 150, 20, 20);

  fill(52, 148, 230);
  ellipse(480-space, 150, 20, 20);
  ellipse(440-space*2, 135, 20, 20);

  fill(236, 110, 173)
  ellipse(480+space, 150, 20, 20);
  ellipse(480+space*2, 150, 20, 20);

  line(420, 70, 540, 70);
  line(480, 70, 480, 140);
  line(480+space, 70, 480+space, 140);
  line(480+space*2, 70, 480+space*2, 140);
  line(480-space, 70, 480-space, 140);
  line(480-space*2, 70, 445-space*2, 128);
}

function ellipses3(){
  strokeWeight(0.25);
  var space = 20;

  fill(194, 110, 236);
  ellipse(480, 150, 20, 20);

  fill(52, 148, 230);
  ellipse(480-space, 150, 20, 20);
  ellipse(480-space*2, 150, 20, 20);

  fill(236, 110, 173)
  ellipse(480+space, 150, 20, 20);
  ellipse(520+space*2, 135, 20, 20);

  line(420, 70, 540, 70);
  line(480, 70, 480, 140);
  line(480+space, 70, 480+space, 140);
  line(480+space*2, 70, 515+space*2, 128);
  line(480-space, 70, 480-space, 140);
  line(480-space*2, 70, 480-space*2, 140);
}
