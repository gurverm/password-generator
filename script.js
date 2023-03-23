var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = "";
  var characters = "";

  var passwordLength = prompt("Choose the length of the password (between 8 and 128 characters):");

  if (passwordLength < 8 || password > 128) {
    alert("Try again. Choose a value between 8 and 128:");
    return "";
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
    characters += "!#$%&'()*+,-./:;<=>?@[\]^`{|}~_"; //referenced CSS document of special characters, unsure what classifies a special character
  }

  while (!lowerCase && !upperCase && !numericValue && !specialChar) {
    alert("At least one character type must be selected!");

    lowerCase = confirm("Include lowercase character(s)?");
    upperCase = confirm("Include uppercase character(s)?");
    numericValue = confirm("Include numeric value(s)?");
    specialChar = confirm("Include special character(s)?");

  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  alert("This is your secure password: "+ password);
  return(password);
}

generateBtn.addEventListener("click", writePassword);

