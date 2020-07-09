
// random1

var randomNumber1 = Math.floor((6 * Math.random()) + 1);

var imageSrc1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , imageSrc1);

// random2

var randomNumber2 = Math.floor((6 * Math.random()) + 1);

var imageSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , imageSrc2);

// if-else

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
