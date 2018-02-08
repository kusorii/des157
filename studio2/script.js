"use strict";

console.log("reading");

var mouseTh = document.getElementById('mouseTh');
var bagTh = document.getElementById('bagTh');
var gpenTh = document.getElementById('gpenTh');
var overlay1 = document.getElementById('overlay1');
var overlay2 = document.getElementById('overlay2');
var overlay3 = document.getElementById('overlay3');
var close1 = document.getElementById('close1');
var close2 = document.getElementById('close2');
var close3 = document.getElementById('close3');

//adds an event to allow the overlay to close
close1.addEventListener('click', function() {
  overlay1.style.display = "none";
});
//displays the overlay text
mouseTh.addEventListener('click', function() {
    overlay1.style.display = "block";
});
//adds an event to allow the overlay to close
close2.addEventListener('click', function() {
  overlay2.style.display = "none";
});
//displays the overlay text
bagTh.addEventListener('click', function() {
  overlay2.style.display = "block";
});
//adds an event to allow the overlay to close
close3.addEventListener('click', function() {
  overlay3.style.display = "none";
});
//displays the overlay text
gpenTh.addEventListener('click', function() {
  overlay3.style.display = "block";
});
