const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  var text = document.getElementById("result").value;
  navigator.clipboard.writeText(text);
});

generateEl.addEventListener("click", () => {
  generatePassword(
    lowercaseEl.checked,
    uppercaseEl.checked,
    numbersEl.checked,
    symbolsEl.checked,
    lengthEl.value
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let password = "";
  let character;
  let methodcallnumber;
  for (let i = 0; i < length; i++) {
    methodcallnumber = Math.floor(Math.random() * 4);
    if (methodcallnumber == 1) character = getRandomLower();
    else if (methodcallnumber == 2) character = getRandomUpper();
    else if (methodcallnumber == 3) character = getRandomNumber();
    else character = getRandomSymbol();
    password = password + character;
  }
  document.getElementById("result").value = password;
}

function getRandomLower() {
  const smallAlphabets = "abcdefghijklmnopqrstuvwxyz";
  let random = smallAlphabets[Math.floor(Math.random() * 26)];
  return random;
}

function getRandomUpper() {
  const bigAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let random = bigAlphabets[Math.floor(Math.random() * 26)];
  return random;
}

function getRandomNumber() {
  let random = Math.floor(Math.random() * 10);
  return random;
}

function getRandomSymbol() {
  let symbols = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";
  let random = symbols[Math.floor(Math.random() * 31)];
  return random;
}
