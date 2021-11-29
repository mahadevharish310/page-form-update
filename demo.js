const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedChars = productNameInputElement.maxLength;

updateRemainingChars = (event) => {
  const enteredText = event.target.value;
  const eneteredTextLength = enteredText.length();

  const remainingCharacters = maxAllowedChars - eneteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;

  if (remainingCharacters === 0) {
    remainingCharsElement.classList.add("error");
    productNameInputElement.classList.add("error");
  } else if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
  } else {
    remainingCharsElement.classList.remove("error", "warning");
    productNameInputElement.classList.remove("error", "warning");
  }
};

productNameInputElement.addEventListener("input", updateRemainingChars);
