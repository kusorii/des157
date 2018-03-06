"use strict";

console.log("reading");

var howToPlay = document.getElementById('how');
var overlay = document.getElementById('overlay');
var close = document.getElementById('close');

close.addEventListener('click', function() {
  overlay.style.display = "none";
});

howToPlay.addEventListener('click', function() {
    overlay.style.display = "block";
});
