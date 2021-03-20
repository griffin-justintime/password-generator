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

  var passLength = prompt("Please choose a password length.");
  if (passLength < 8 || passLength > 128) {
    window.alert("Password must be at least 8 characters.");
  }

  var passLower = confirm("Include lowercase characters?");
  if (passLower) {
    userOptions += (passLower);
  }


  var passUpper = confirm("Include uppercase characters?");
if (passUpper)

  var passnumeric = confirm("Include numeric characters?");
  var passspec = confirm("Include special characters?");
  var options = {
    passlower: passlower,
    passlength: passlength,
  };
  

}
for (var i = 0; i < passLength; i++) {
  
  var randomIndex = Math.floor(Math.random() * userOptions.length);
  var value = arr[randomIndex];

}
function generatePassword() {
  // TODO: Write the code that asks the user about the parameters for their password
  var generatedPassword = [];
  var userOptions = userOptions();
  }
  // TODO: use those parameters to generate a new password

  // TODO: return that password
  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
