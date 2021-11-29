// Task 1: sum of numbers

const calculateSumButtonElement = document.querySelector("#calculator button");

calculateSum = () => {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.getElementById("calculated-sum");
  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
};

calculateSumButtonElement.addEventListener("click", calculateSum);

// Task 2: Highlight all links in text

const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

highlightLinks = () => {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
};

highlightLinksButtonElement.addEventListener("click", highlightLinks);

// Task 3: Display User data

const dummyUserData = {
  firstName: "Max",
  lastName: "Scholes",
  age: 33,
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

displayUserData = () => {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = "";

  for (const key in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li");
    const outputText = `${key.toUppercase()} ---> ${dummyUserData[key]} `;
    newUserDataListItemElement.textContent = outputText;
    outputDataElement.append(newUserDataListItemElement);
  }
};

displayUserDataButtonElement.addEventListener("click", displayUserData);

// Task 4: Statistics - Roll the Dice

const rollDiceButtonElement = document.querySelector("#statistics button");

rollDiceForMe = () => {
  return Math.floor(Math.random() * 6) + 1;
};

deriveNumberOfDiceRolls = () => {
  const targetNumberInputElement =
    document.getElementById("user-target-number");
  const diceRollListElement = document.getElementById("dice-rolls");

  const eneteredNumber = targetNumberInputElement.value;

  diceRollListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDiceForMe();
    // if(rolledNumber == eneteredNumber){
    //   hasRolledTargetNumber = true;
    // }
    // numberOfRolls = numberOfRolls + 1;
    numberOfRolls++;

    const newRollListItemElement = document.createElement("li");
    newRollListItemElement.textContent = `Roll ${numberOfRolls} : ${rolledNumber}`;
    diceRollListElement.append(newRollListItemElement);
    hasRolledTargetNumber = rolledNumber == eneteredNumber;
  }

  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumber = document.getElementById("output-target-number");

  outputTargetNumber.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
};

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);
