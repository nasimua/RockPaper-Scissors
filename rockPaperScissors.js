const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You cheated but you won -.-";
  }

  if (userChoice === computerChoice) {
    return "It's a Tie!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "You Lose!";
    } else {
      return "You Win!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You Lose!";
    } else {
      return "You Win!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You Lose!";
    } else {
      return "You Win!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("You picked " + userChoice);
  console.log("Computer picked " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
