"use strict";

console.log("reading"); //testing js

//store form fields in variables
var results = document.getElementById("results");
var adventureMsg = document.getElementById("adventureMsg");
var yourPlace = document.f.yourPlace.value;
var yourName = document.f.yourName.value;
var yourRole = document.f.yourRole.value;
var adj1 = document.f.adj1.value;
var adj2 = document.f.adj2.value;
var noun = document.f.noun.value;


//capture submit event for form
document.f.onsubmit = processForm;
//reset the form
document.f.onreset = resetForm;

//processing form function
function processForm(){

  results.setAttribute('class', 'show');
  image.setAttribute('class', 'show');
  var yourPlace = document.f.yourPlace.value;
  var yourName = document.f.yourName.value;
  var yourRole = document.f.yourRole.value;
  var adj1 = document.f.adj1.value;
  var adj2 = document.f.adj2.value;
  var noun = document.f.noun.value;



  //make cases for the four different roles (easter egg)
  document.getElementById("adventureMsg").innerHTML;

  switch(yourRole) {

    //user picks the warrior role, change img
    case "warrior":
    adventureMsg.innerHTML="Welcome to the land of <em>" + yourPlace + "</em>, <strong>" + yourName + "</strong>, which your kingdom is trying to reclaim after having lost due to a silly bet by your king. This is currently the land of <em>" + adj1 + "</em> monsters. As the <em>" + yourRole + "</em> of your party, it is your job to protect your comrades and defeat the monsters with your trusty <em>" + noun + "</em>. This is where your adventure begins! Now onward to your <em>" + adj2 + "</em> journey!";
    image.setAttribute("src", "images/sword.png");
    image.setAttribute("width", "300");
    image.setAttribute("height", "300");
    image.setAttribute("alt", "sword");
    break;

    //user picks the cleric role, change img
    case "cleric":
    adventureMsg.innerHTML="Welcome to the land of <em>" + yourPlace + "</em>, <strong>" + yourName + "</strong>, which your kingdom is trying to reclaim after having lost due to a silly bet by your king. This is currently the land of <em>" + adj1 + "</em> monsters. As the <em>" + yourRole + "</em> of your party, it is your job to protect your comrades and defeat the monsters with your trusty <em>" + noun + "</em>. This is where your adventure begins! Now onward to your <em>" + adj2 + "</em> journey!";
    image.setAttribute("src", "images/rod.png");
    image.setAttribute("width", "300");
    image.setAttribute("height", "300");
    image.setAttribute("alt", "rod");
    break;

    //user picks the sorcerer role, change img
    case "sorcerer":
    adventureMsg.innerHTML="Welcome to the land of <em>" + yourPlace + "</em>, <strong>" + yourName + "</strong>, which your kingdom is trying to reclaim after having lost due to a silly bet by your king. This is currently the land of <em>" + adj1 + "</em> monsters. As the <em>" + yourRole + "</em> of your party, it is your job to protect your comrades and defeat the monsters with your trusty <em>" + noun + "</em>. This is where your adventure begins! Now onward to your <em>" + adj2 + "</em> journey!";
    image.setAttribute("src", "images/tome.png");
    image.setAttribute("width", "300");
    image.setAttribute("height", "200");
    image.setAttribute("alt", "tome");
    break;

    //user picks the rank role, change img
    case "tank":
    adventureMsg.innerHTML="Welcome to the land of <em>" + yourPlace + "</em>, <strong>" + yourName + "</strong>, which your kingdom is trying to reclaim after having lost due to a silly bet by your king. This is currently the land of <em>" + adj1 + "</em> monsters. As the <em>" + yourRole + "</em> of your party, it is your job to protect your comrades and defeat the monsters with your trusty <em>" + noun + "</em>. This is where your adventure begins! Now onward to your <em>" + adj2 + "</em> journey!";
    image.setAttribute("src", "images/shield.png");
    image.setAttribute("width", "300");
    image.setAttribute("height", "300");
    image.setAttribute("alt", "shield");
    break;

  }

  return false;
}

function resetForm() {
  adventureMsg.innerHTML = "";
  //only hide the results when reseting the form, but show the default flag
  results.setAttribute('class', 'hide');
  image.setAttribute("src", "images/flag.png");
  image.setAttribute("width", "200");
  image.setAttribute("height", "300");
  image.setAttribute("alt", "flag");
 }

//hide the results
