"use strict";

console.log("reading");
var alarm;
function preload() {
  alarm = loadSound("alarm.mp3"); //preloads the alarm ringing to be used later
}

/*sets the timing of the text animations as soon as a user opens the window*/
window.onload = function() {
  window.setTimeout(fadein1, 2000); //2 seconds
  window.setTimeout(fadein2, 5000); //5 seconds
  window.setTimeout(fadeout, 8000); //8 seconds
  window.setTimeout(fadein3, 10000); //10 seconds
  window.setTimeout(fadein4, 13000); //13 seconds
}

function setup() {
  alarm.play();
}

function mousePressed() {
  if (alarm.isPlaying() ) { //pauses and plays the alarm ringing when you click on the mouse
    alarm.stop();
  } else {
    alarm.play();
  }
}

/*functions used to fade in and out the paragraphs at separate times*/
function fadein1() {
  document.getElementById('first').style.opacity = '1';
}

function fadein2() {
  document.getElementById('second').style.opacity = '1';
}

function fadeout() {
  document.getElementById('first').style.opacity = '0';
  document.getElementById('second').style.opacity = '0';
}

function fadein3() {
  document.getElementById('third').style.opacity = '1';
}

function fadein4() {
  document.getElementById('fourth').style.opacity = '1';
}
