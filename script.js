
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = "";
  var characters = "";

  var passwordLength = prompt("Choose the length of the password (between 8 and 128 characters):");

}
//for loop not working
while (passwordLength < 8 || length > 128) {
  passwordLength = prompt("Try again. Choose a value between 8 and 128:")
}

var lowerCase = confirm("Include lowercase character(s)?");
var upperCase = confirm("Include uppercase character(s)?");
var numericValue = confirm("Include numeric value(s)?");
var specialChar = confirm("Include special character(s)?");

if (lowerCase) {
  characters += "abcdefghijklmnopqrstuvwxyz";
}

if (upperCase) {
  characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if (numericValue) {
  characters += "0123456789";
}

if (specialChar) {
  characters += "!#$%&'()*+,-./:;<=>?@[\]^`{|}~_";
}




/* Pseudo Code

- generate password length. length < 8 OR length > 128
    (for loop or while statement)

-create variables for password characteristics
  uppercase, lowercase, numbers, and/or special characters

- create loop for variables (use for or while ?)

- create arrays for each variable password characteristics



- generate password using above function



*/





















// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

