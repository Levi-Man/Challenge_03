// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// };

//generate password
let characterAmountRange = document.getElementById('characterAmountRange');
let characterAmountNumber = document.getElementById('characterAmountNumber');

  //link slider to number input field
  characterAmountNumber.addEventListener('input', syncCharacterAmount);
  characterAmountRange.addEventListener('input', syncCharacterAmount);

//assign variables
let includeUppercaseElement = document.getElementById("includeUppercase");
let includeLowercaseElement = document.getElementById("includeLowercase");
let includeNumbersElement = document.getElementById("includeNumbers");
let includeSpecialCharactersElement = document.getElementById("includeSpecialCharacters");
let form =document.getElementById("passwordGenerator");
let passwordDisplay = document.getElementById('passwordDisplay');
let upperCaseCharCodes = arrayFromLowToHigh(65, 90);
let lowerCaseCharCodes = arrayFromLowToHigh(97, 122);
let numberCodes = arrayFromLowToHigh(48, 57);
let specialCharacterCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

//click button
form.addEventListener('submit', e => {
  e.preventDefault()
  let characterAmount = characterAmountNumber.value;
  let includeUppercase = includeUppercaseElement.checked;
  let includeLowercase = includeLowercaseElement.checked;
  let includeNumbers = includeNumbersElement.checked;
  let includeSpecialCharacters = includeSpecialCharactersElement.checked;
  let password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters);
  passwordDisplay.innerText = password;
});

//connect checkboxes character range
function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters) {
  // let charCodes = lowerCaseCharCodes;
  let charCodes = [];
  if (includeLowercase) charCodes = charCodes.concat(lowerCaseCharCodes);
  if (includeUppercase) charCodes = charCodes.concat(upperCaseCharCodes);
  if (includeNumbers) charCodes = charCodes.concat(numberCodes);
  if (includeSpecialCharacters) charCodes = charCodes.concat(specialCharacterCodes);

  //randomize result
  let passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    let characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  };
  return passwordCharacters.join('');
};

//define array
function arrayFromLowToHigh(low, high) {
  let array = []
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};


function syncCharacterAmount(e) {
  let value =e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
};
