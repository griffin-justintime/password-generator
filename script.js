var generateBtn = document.querySelector("#generate");
// Password character arrays
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

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
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

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var userOptions = [];
  var generatedPassword = "";
  // Password Parameters
  var passLength = prompt("Please choose a password length.");

  if (passLength < 8 || passLength > 128) {
    window.alert("Password must be at least 8 characters.");
    return generatePassword();
  }

  var passLower = confirm("Include lowercase characters?");
  if (passLower) {
    userOptions = userOptions.concat(lowerCase);
  }

  var passUpper = confirm("Include uppercase characters?");
  if (passUpper) {
    userOptions = userOptions.concat(upperCase);
  }

  var passNumeric = confirm("Include numeric characters?");
  if (passUpper) {
    userOptions = userOptions.concat(numbers);
  }

  var passSpec = confirm("Include special characters?");
  if (passSpec) {
    userOptions = userOptions.concat(specChar);
  }

  for (var i = 0; i < passLength; i++) {
    var randOptions = Math.floor(Math.random() * userOptions.length);
    var randPass = userOptions[randOptions];
    generatedPassword += randPass;
  }

  return generatedPassword;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);
