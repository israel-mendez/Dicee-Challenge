// LEFT DICE

//Assigns a pseudo random number to rn1 variable
var firstRoll = Math.floor(Math.random() * 6) + 1;

//Selects an image given a pseudo random number
var imageSelector1 = "images/dice" + firstRoll + ".png";

//Assigns the a variable the element to be changed
var img1 = document.querySelectorAll("img")[0];

//Sets the attribute of the element to the random image selected
img1.setAttribute("src", imageSelector1);

// RIGHT DICE

//Assigns a pseudo random number to rn1 variable
var secondRoll = Math.floor(Math.random() * 6) + 1;

//Selects an image given a pseudo random number
var imageSelector2 = "images/dice" + secondRoll + ".png";

//Assigns the a variable the element to be changed
var img2 = document.querySelectorAll("img")[1];

//Sets the attribute of the element to the random image selected
img2.setAttribute("src", imageSelector2);

// ROLL OUTCOME

if (firstRoll > secondRoll) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  }
  else if (secondRoll > firstRoll) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }