"use strict";

console.log("reading");

// var howToPlay = document.getElementById('how');
// var overlay = document.getElementById('overlay');
// var close = document.getElementById('close');
//
// close.addEventListener('click', function() {
//   overlay.style.display = "none";
// });
//
// howToPlay.addEventListener('click', function() {
//     overlay.style.display = "block";
// });

var text = document.getElementById("text");
var article = document.querySelector("article");
var click = 0;

// document.getElementById("text").addEventListener("click", changeText);

function changeText() {
  click+=1;
  if(click==1){
    document.getElementById("text").innerHTML = "Hey sweetie, it's time to get up. Didn't you say you had a test today in your first class?<br>You don't want to be late for that now. Get up!";
    click=+1;
  }
  else if(click=="2"){
    document.getElementById("text").innerHTML = "...Oh crap! I forgot all about that. I'm so sleepy though... Maybe I should stay in bed<br> some more. Just a few more minutes...";
  }
  else if(click=="3"){
    document.getElementById("text").innerHTML = "**Options are currently under construction and will uavailable until further notice**";
  }
}


var fullS = document.querySelector("#fullScreen");
fullS.addEventListener("click", requestFullScreen);

function requestFullScreen() {
  var body = document.querySelector('body');
  // expand section height
  article.style.height = '70%';
  fullS.style.display = "none";

  // going fullscreen. supports most browsers and their versions
  var requestMethod =
    body.requestFullScreen ||
    body.webkitRequestFullScreen ||
    body.mozRequestFullScreen ||
    body.msRequestFullScreen;

  if (requestMethod) {
    // native full screen
    requestMethod.call(body);
  } else if (typeof window.ActiveXObject !== "undefined") {
    // older IE
    var wscript = new ActiveXObject("WScript.Shell");

    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}

//  bind a listener to the document for fullscreenchange
// to reset section height and to show fullScrren button
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
  console.log('exitHandler');
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {

       fullS.style.display = 'inline';
       article.style.height = '320px';
    }
}
