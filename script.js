// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var nuNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specChar = [
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  ":",
  ";",
  "<",
  ">",
  "?",
  ",",
  ".",
  "/",
];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function userOptions() {
  var passlength = parseInt(window.prompt("Please choose a password length."));
  // console.log(typeof passlength);
  if (passlength < 8) {
    window.alert("Password must be at least 8 characters.");
  }

  var passlower = window.confirm("Include lowercase characters?");
  var passupper = window.confirm("Include uppercase characters?");
  var passnumeric = window.confirm("Include numeric characters?");
  var passspec = window.confirm("Include special characters?");
  var options = {
    passlower: passlower,
    passlength: passlength,
  };
  console.log(options.passlength);

  return options;
}
function randomValue(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var value = arr[randomIndex];
  return value;
}
function generatePassword() {
  // TODO: Write the code that asks the user about the parameters for their password
  var generatedPassword = [];
  var userOptions = userOptions();
  if (userOptions.passlower) {
    // I need to use array method concat
    generatedPassword.push(randomValue(lowercaseArray));
  }
  // TODO: use those parameters to generate a new password

  // TODO: return that password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
