"use strict";

console.log("reading");

var next = document.getElementById("next");
var text = document.getElementById("text");
var ring = document.getElementById("ring");
var article = document.querySelector("article");
var click = 0;
var aboutTip = document.getElementById('aboutTip');
var left1 = document.getElementById('left1');
var moreTip = document.getElementById('moreTip');
var right1 = document.getElementById('right1');
var timerId;

//Tooltips for when the user hovers over the arrows on the title page
left1.addEventListener ('mouseover', function(){
  timerId = setTimeout(showAboutTip, 1000);
});

left1.addEventListener('mouseout', function(){
  clearTimeout(timerId);
  aboutTip.style.opacity = 0;
});

function showAboutTip(){
  aboutTip.style.opacity = 1;
}

right1.addEventListener ('mouseover', function(){
  timerId = setTimeout(showMoreTip, 1000);
});

right1.addEventListener('mouseout', function(){
  clearTimeout(timerId);
  moreTip.style.opacity = 0;
});

function showMoreTip(){
  moreTip.style.opacity = 1;
}

//On every click, the text changes for the game, and an increment of 1 is added to the click variable to move the text forward
function changeText() {
  click += 1;
  if (click == 1) {
    text.innerHTML = "<div><p>&quotHey sweetie, it's time to get up. Didn't you say you had a test today in your first class?<br>You don't want to be late for that now. Get up!&quot</p></div>";
    ring.setAttribute('class', 'hide');
  } else if (click == "2") {
    text.innerHTML = "<div><p>...Oh crap. I forgot all about that. I'm so sleepy though... Maybe I should stay in bed<br> some more. Just a few more minutes...</p></div>";
  } else if (click == "3") {
    text.innerHTML = '<button id="btn" name="btn">Get up out of bed</button>' + '<br><button id="btn2" name="btn">Sleep in a bit longer</button>';
    document.getElementById('btn').onclick = function() {
        text.innerHTML = "<div><p>Ugh, I guess I should get up and get ready. I don't want to make mom mad, even <br>if I'm still tired.</p></div>";
        next.setAttribute('class', 'show');
      };
        document.getElementById('btn2').onclick = function() {
        text.innerHTML = "<div><p>Just a little more... the test can wait... zzz...</p></div>";
        click+=1;
        next.setAttribute('class', 'show');
      };
    next.setAttribute('class', 'hide');
  } else if (click == "4"){
        text.innerHTML = "<div><p>&quotI can take you to school today so you don't have to deal with the crowd. You <br>can study in the car.&quot</p></div>";
        click+=1;
  } else if (click == "5") {
        text.innerHTML = "<div><p>&quotHey! Get up! You're going to be late! You just missed the bus, so I can take you<br> to school.&quot</p></div>";
  } else if (click == "6") {
        text.innerHTML = "<div><p>Well, I guess I have no other choice. If mom wants to drive me, I guess I have<br> to let her take me. It's better to not deal with people in the morning...</p></div>";
  } else if (click == "7") {
        text.innerHTML = "<div><p>Let's see, my test today is on a book we read in class. It's about a girl who<br>...</p></div>";
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
