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

var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
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

function generatePassword() {
  var generatedPassword = "";
  var userOptions = "";

  var passLength = prompt("Please choose a password length.");
  if (passLength < 8 || passLength > 128) {
    window.alert("Password must be at least 8 characters.");
  }

  var passLower = confirm("Include lowercase characters?");
  if (passLower) {
    userOptions = userOptions.concat(lowerCase);
  }

  //   var passUpper = confirm("Include uppercase characters?");
  // if (passUpper)

  // var passNumeric = confirm("Include numeric characters?");

  //   var passSpec = confirm("Include special characters?");

var writePassword = function () {
  for (var i = 0; i < passLength; i++) {
    generatedPassword = Math.floor(Math.random() * userOptions.length);
  }

  // TODO: Write the code that asks the user about the parameters for their password

  // TODO: use those parameters to generate a new password

  // TODO: return that password
  return generatedPassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
