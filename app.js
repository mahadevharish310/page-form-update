let paragraphElement = document.querySelector("p");

changeParagraphText = () => {
  paragraphElement.textContent = "CLicked!";
  console.log("Paragraph Clicked!!");
};

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

retrieveUserInput = (event) => {
  //   let enteredText = inputElement.value;
  let enteredText = event.target.value;
  console.log(enteredText);
};

inputElement.addEventListener("input", retrieveUserInput);
