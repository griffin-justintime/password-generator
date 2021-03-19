// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseArray = [];
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

  var passlower = window.prompt("Include lowercase characters?");
  var passupper = window.prompt("Include uppercase characters?");
  var passnumeric = window.prompt("Include numeric characters?");
  var passspec = window.prompt("Include special characters?");
  var options = {
    passlower: passlower,
    passlength: passlength,
  };
  console.log(options.passlength);

  return options;
}
function randomValue(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var value = arr[randomIndex]
  return value;
}
function generatePassword() {
  
  // TODO: Write the code that asks the user about the parameters for their password
  var generatedPassword = []
  var userOptions = userOptions();
if (userOptions.passlower) {
  // I need to use array method concat
  generatedPassword.push(randomValue(lowercaseArray))
}
  // TODO: use those parameters to generate a new password

  // TODO: return that password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
