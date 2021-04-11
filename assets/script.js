var generateBtn = document.querySelector("#generate");

// soup of valid characters available
var validCharacters = [];
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var lowerCase = "abcdefghiklmnopqrsttuvwxtz" .split("");
var numbers = "0123456789" .split ("");
var symbols = "*&^%$#@!?><{}" .split("");


function generatePassword () {
  // prompt to specify how many characters will the password have
  var passwordLength = prompt("How many characters you would like your password to be? -must be between 8 and 128.");
    
  var lengthConfirm = parseInt(passwordLength);
    console.log(lengthConfirm);
 
      // specify how many characters between 8 and 128
      if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert ("password must be between 8 and 128 characters, please try again.");
        return;
      }

  // confirm if user wants lowercase letters
  var lowerCaseConfirm = confirm("Do you want your password to include lowercase letters?");
      if(lowerCaseConfirm === true) {
        for (var i = 0; i < lowerCase.length; i++) {
            validCharacters.push(lowerCase[i]);
        }
      }
  // confirm if user wants uppercase letters
  var upperCaseConfirm = confirm("Do you want your password to include uppercase letters?");
      if (upperCaseConfirm === true) {
        for (var i = 0; i < upperCase.length; i++) {
            validCharacters.push(upperCase[i]);
        }
      }
  // confirm if user wants numbers 
  var numberConfirm = confirm("Do you want your password to include numbers");
      if (numberConfirm === true) {
        for (var i = 0; i < numbers.length; i++) {
            validCharacters.push(numbers[i]);
        }
      }
  // confirm if user wants symbols 
  var specialConfirm = confirm("Do you want your password to include special characters?");
      if (specialConfirm === true) {
        for (var i = 0; i < symbols.length; i++) {
            validCharacters.push(symbols[i]);
        }
      }

  // create random password with Math.random
  var randomPassword = "";
    for (var i = 0; i < lengthConfirm; i++) {
       validCharacters[
           Math.floor(Math.random() * validCharacters.length)];
       randomPassword +=
          validCharacters[
              Math.floor(Math.random() * validCharacters.length)
          ];
    }
 return randomPassword;
}

// Write password to the #password input
function writePassword() {
  // password generator
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
