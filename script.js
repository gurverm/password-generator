// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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

