// Names:
let playerOneName = document.querySelector("#player__one__name");
let playerTwoName = document.querySelector("#player__two__name");
let playerThreeName = document.querySelector("#player__three__name");

// Headings:
let playerOneHeading = document.querySelector("#player__one__heading");
let playerTwoHeading = document.querySelector("#player__two__heading");
let playerThreeHeading = document.querySelector("#player__three__heading");

// Number:
let playerOneNumber = document.querySelector("#player__one__number");
let playerTwoNumber = document.querySelector("#player__two__number");
let playerThreeNumber = document.querySelector("#player__three__number");

// Buttons:
let startGameButton = document.querySelector("#start__game");
let letsPlayButton = document.querySelector("#box__two__lets__play");
let playerTwoNameButton = document.querySelector("#box__three__name__btn");
let playerTwoNumberButton = document.querySelector("#box__four__number__btn");
let playerThreeNameButton = document.querySelector("#player__three__name__btn");
let playerThreeNumberButton = document.querySelector(
  "#player__three__number__btn"
);
let playAgainButton = document.querySelector("#reset__btn");

// Error Message:
let giveNameError = document.querySelector("#give__name__error");
let giveNumberError = document.querySelector("#give__number__error");
let playerTwoNameError = document.querySelector("#player__two__name__error");
let playerTwoNumberError = document.querySelector(
  "#player__two__number__error"
);
let playerThreeNameError = document.querySelector(
  "#player__three__name__error"
);
let playerThreeNumberError = document.querySelector(
  "#player__three__number__error"
);

// Boxes:
let boxOne = document.querySelector("#box__one");
let boxTwo = document.querySelector("#box__two");
let boxThree = document.querySelector("#box__three");
let boxFour = document.querySelector("#box__four");
let playerThreeNameBox = document.querySelector("#player__three__name__box");
let playerThreeNumberBox = document.querySelector(
  "#player__three__number__box"
);
let boxFive = document.querySelector(".box__five");

// Chance & Chance Numbers:
let chancePlayerTwo = document.querySelector(".chance");
let chanceNumberPlayerTwo = document.querySelector(
  "#chance__number__p2__number"
);
let chanceNumberPlayerThree = document.querySelector(
  "#chance__number__p3__number"
);

// final Result:
let result = document.querySelector("#result");

// Auto display none by js:
boxTwo.style.display = "none";
boxThree.style.display = "none";
boxFour.style.display = "none";
playerThreeNameBox.style.display = "none";
playerThreeNumberBox.style.display = "none";
boxFive.style.display = "none";

// All Event Listners:
startGameButton.addEventListener("click", () => {
  if (playerOneName.value == "") {
    giveNameError.style.visibility = "visible";
  } else {
    giveNameError.style.visibility = "hidden";
    boxOne.style.display = "none";
    boxTwo.style.display = "flex";
    playerOneHeading.innerHTML = playerOneName.value;
  }
});

letsPlayButton.addEventListener("click", () => {
  if (playerOneNumber.value == "") {
    giveNumberError.style.visibility = "visible";
    giveNumberError.innerHTML = "Please give a number";
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
    playerTwoHeading.innerHTML = playerTwoName.value;
  }
});

playerTwoNumberButton.addEventListener("click", () => {
  if (playerTwoNumber.value == "") {
    playerTwoNumberError.style.visibility = "visible";
    playerTwoNumberError.innerHTML = "Please gause a number";
  } else {
    playerTwoNumberError.style.visibility = "hidden";
    if (playerTwoNumber.value >= 1 && playerTwoNumber.value <= 10) {
      if (playerOneNumber.value != playerTwoNumber.value) {
        if (chanceNumberPlayerTwo.innerHTML == 1) {
          boxFour.style.display = "none";
          playerThreeNameBox.style.display = "flex";
          // result.innerHTML = playerTwoName.value + " (Player - 1 Win)";
        } else {
          playerTwoNumberError.style.visibility = "visible";
          playerTwoNumberError.innerHTML = "Value is not Equal";
          chanceNumberPlayerTwo.innerHTML--;
        }
      } else {
        boxFour.style.display = "none";
        playerThreeNameBox.style.display = "flex";
        // result.innerHTML = playerOneName.value + " (Player - 2 Win)";
      }
    } else {
      playerTwoNumberError.style.visibility = "visible";
      playerTwoNumberError.innerHTML = "Number between (1 - 10)";
    }
  }
});

playerThreeNameButton.addEventListener("click", () => {
  if (playerThreeName.value == "") {
    playerThreeNameError.style.visibility = "visible";
    playerThreeNameError.innerHTML = "Give your name";
  } else {
    playerThreeNameError.style.visibility = "hidden";
    playerThreeNameBox.style.display = "none";
    playerThreeNumberBox.style.display = "flex";
    playerThreeHeading.innerHTML = playerThreeName.value;
  }
});

playerThreeNumberButton.addEventListener("click", () => {
  if (playerThreeNumber.value == "") {
    playerThreeNumberError.style.visibility = "visible";
    playerThreeNumberError.innerHTML = "Gause a number bro";
  } else {
    console.log("value dewa hoise");
    if (playerThreeNumber.value >= 1 && playerThreeNumber.value <= 10) {
      console.log("value 1 theke 10 er moddhe ache");

      if (
        playerOneNumber.value != playerThreeNumber.value &&
        playerOneNumber.value != playerTwoNumber.value
      ) {
        console.log("player 1 jitbe");
        if (chanceNumberPlayerThree.innerHTML == 1) {
          playerThreeNumberBox.style.display = "none";
          boxFive.style.display = "flex";
          result.innerHTML = playerOneName.value + " (Player - 1 Win)";
        } else {
          playerThreeNumberError.style.visibility = "visible";
          playerThreeNumberError.innerHTML = "Value is not Equal";
          chanceNumberPlayerThree.innerHTML--;
        }
      } else if (
        playerOneNumber.value != playerThreeNumber.value &&
        playerOneNumber.value == playerTwoNumber.value
      ) {
        console.log("player 2 jitbe");
        if (chanceNumberPlayerThree.innerHTML == 1) {
          playerThreeNumberBox.style.display = "none";
          boxFive.style.display = "flex";
          result.innerHTML = playerOneName.value + " (Player - 2 Win)";
        } else {
          playerThreeNumberError.style.visibility = "visible";
          playerThreeNumberError.innerHTML = "Value is not Equal";
          chanceNumberPlayerThree.innerHTML--;
        }
      } else if (
        playerOneNumber.value == playerThreeNumber.value &&
        playerOneNumber.value == playerTwoNumber.value
      ) {
        console.log("player 2 r player 3 dui jon e jitbe");
        playerThreeNumberBox.style.display = "none";
        boxFive.style.display = "flex";
        result.innerHTML =
          playerTwoName.value +
          " " +
          playerThreeName.value +
          " (Player - 2 & 3 Win)";
      } else {
        console.log("player 3 jitbe");
        playerThreeNumberBox.style.display = "none";
        boxFive.style.display = "flex";
        result.innerHTML = playerThreeName.value + " (Player - 3 Win)";
      }
    } else {
      playerThreeNumberError.style.visibility = "visible";
      playerThreeNumberError.innerHTML = "Number between (1-10)";
    }
  }
});

playAgainButton.addEventListener("click", () => {
  playerOneName.value = "";
  playerOneNumber.value = "";
  playerTwoName.value = "";
  playerTwoNumber.value = "";
  playerThreeName.value = "";
  playerThreeNumber.value = "";
  playerThreeNumberError.style.visibility = "hidden";
  chanceNumberPlayerTwo.innerHTML = 5;
  chanceNumberPlayerThree.innerHTML = 5;
  boxFive.style.display = "none";
  boxOne.style.display = "flex";
});
