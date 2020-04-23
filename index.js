// LEFT DICE

//Assigns a pseudo random number to rn1 variable
var firstRoll = Math.floor(Math.random() * 6) + 1;

//Selects an image given a pseudo random number
var imageSelector = "dice" + firstRoll + ".png";

//Creates the address of the image to be displayed
var imageAddress = "images/" + imageSelector; 

//Assigns the a variable the element to be changed
var img1 = document.querySelectorAll("img")[0];

//Sets the attribute of the element to the random image selected
img1.setAttribute("src", imageAddress);

// RIGHT DICE

//Assigns a pseudo random number to rn1 variable
var secondRoll = Math.floor(Math.random() * 6) + 1;

//Selects an image given a pseudo random number
var imageSelector = "dice" + secondRoll + ".png";

//Creates the address of the image to be displayed
var imageAddress = "images/" + imageSelector; 

//Assigns the a variable the element to be changed
var img2 = document.querySelectorAll("img")[1];

//Sets the attribute of the element to the random image selected
img2.setAttribute("src", imageAddress);

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