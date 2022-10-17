// let wanaPlayGame = document.querySelector("#wanna__play__game");

// Names:
let playerOneName = document.querySelector("#player__one__name");
let playerTwoName = document.querySelector("#player__two__name");

// Number:
let playerOneNumber = document.querySelector("#player__one__number");
let playerTwoNumber = document.querySelector("#player__two__number");

// Buttons:
let startGameButton = document.querySelector("#start__game");
let letsPlayButton = document.querySelector("#box__two__lets__play");
let playerTwoNameButton = document.querySelector("#box__three__name__btn");
let playerTwoNumberButton = document.querySelector("#box__four__number__btn");
let playAgainButton = document.querySelector("#reset__btn");

// Error Message:
let giveNameError = document.querySelector("#give__name__error");
let giveNumberError = document.querySelector("#give__number__error");
let playerTwoNameError = document.querySelector("#player__two__name__error");
let playerTwoNumberError = document.querySelector(
  "#player__two__number__error"
);

// Boxes:
let boxOne = document.querySelector("#box__one");
let boxTwo = document.querySelector("#box__two");
let boxThree = document.querySelector("#box__three");
let boxFour = document.querySelector("#box__four");
let boxFive = document.querySelector(".box__five");

let chancePlayerTwo = document.querySelector(".chance");
let chanceNumber = document.querySelector(".chance__number");
let result = document.querySelector("#result");

boxTwo.style.display = "none";
boxThree.style.display = "none";
boxFour.style.display = "none";
boxFive.style.display = "none";

startGameButton.addEventListener("click", () => {
  if (playerOneName.value == "") {
    giveNameError.style.visibility = "visible";
  } else {
    giveNameError.style.visibility = "hidden";
    boxOne.style.display = "none";
    boxTwo.style.display = "flex";
  }
});

letsPlayButton.addEventListener("click", () => {
  if (playerOneNumber.value == "") {
    giveNumberError.style.visibility = "visible";
  } else {
    if (playerOneNumber.value >= 1 && playerOneNumber.value <= 10) {
      giveNumberError.style.visibility = "hidden";
      boxTwo.style.display = "none";
      boxThree.style.display = "flex";
    } else {
      giveNumberError.style.visibility = "visible";
      giveNumberError.innerHTML = "Number between (1 - 10)";
    }
  }
});

playerTwoNameButton.addEventListener("click", () => {
  if (playerTwoName.value == "") {
    playerTwoNameError.style.visibility = "visible";
  } else {
    playerTwoNameError.style.visibility = "hidden";
    boxThree.style.display = "none";
    boxFour.style.display = "flex";
  }
});

playerTwoNumberButton.addEventListener("click", () => {
  if (playerTwoNumber.value == "") {
    playerTwoNumberError.style.visibility = "visible";
  } else {
    playerTwoNumberError.style.visibility = "hidden";
    if (playerTwoNumber.value >= 1 && playerTwoNumber.value <= 10) {
      if (playerOneNumber.value != playerTwoNumber.value) {
        console.log("hi");
        if (chanceNumber.innerHTML == 0) {
          boxFour.style.display = "none";
          boxFive.style.display = "flex";
          result.innerHTML = playerTwoName.value + " (Player - 1 Win)";
        } else {
          console.log("Nothing..!");
          playerTwoNumberError.style.visibility = "visible";
          playerTwoNumberError.innerHTML = "Value is not Equal";
          chanceNumber.innerHTML--;
        }
      } else {
        boxFour.style.display = "none";
        boxFive.style.display = "flex";
        result.innerHTML = playerOneName.value + " (Player - 2 Win)";
      }
    } else {
      playerTwoNumberError.style.visibility = "visible";
      playerTwoNumberError.innerHTML = "Number between (1 - 10)";
    }
  }
});

playAgainButton.addEventListener("click", () => {
  playerOneName.value = "";
  playerOneNumber.value = "";
  playerTwoName.value = "";
  playerTwoNumber.value = "";
  chanceNumber.innerHTML = 5;
  boxFive.style.display = "none";
  boxOne.style.display = "flex";
});
