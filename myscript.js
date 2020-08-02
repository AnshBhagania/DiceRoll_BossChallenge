function randomnum() {
  var random = Math.random() * 6 + 1;
  random = Math.floor(random);
  return random;
}
function randomImage(random) {
  if (random === 1) {
    return "images/dice1.png";
  } else if (random === 2) {
    return "images/dice2.png";
  } else if (random === 3) {
    return "images/dice3.png";
  } else if (random === 4) {
    return "images/dice4.png";
  } else if (random === 5) {
    return "images/dice5.png";
  } else if (random === 6) {
    return "images/dice6.png";
  }
}

/* var a = document.getElementsByClassName("img.img2") */
var rnum1 = randomnum();
var rnum2 = randomnum();
if (rnum1 > rnum2) {
  document.querySelector(".flag-icon1").style.visibility = "visible";
  document.querySelector(".output").textContent = "Player One Wins";
  document.querySelector(".output").style.visibility = "visible";
} else if (rnum1 < rnum2) {
  document.querySelector(".flag-icon2").style.visibility = "visible";
  document.querySelector(".output").textContent = "Player Two Wins";
  document.querySelector(".output").style.visibility = "visible";
} else {
  document.querySelector(".flag-icon1").style.visibility = "visible";
  document.querySelector(".flag-icon2").style.visibility = "visible";
  document.querySelector(".output").textContent = "Try Again!";
  document.querySelector(".output").style.visibility = "visible";
}
document.querySelector("img.img2").setAttribute("src", randomImage(rnum2));
document.querySelector("img.img1").setAttribute("src", randomImage(rnum1));
