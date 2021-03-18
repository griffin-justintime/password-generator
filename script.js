// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // TODO: Write the code that asks the user about the parameters for their password

  var passlength = prompt("Please choose a password length.");
  var passlower = prompt("Include lowercase characters?");
  var passupper = prompt("Include uppercase characters?");
  var passnumeric = prompt("Include numeric characters?");
  var passspec = prompt("Include special characters?");

  // TODO: use those parameters to generate a new password
  // TODO: return that password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
