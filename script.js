// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseVal = "abcdefghijklmnopqrstuvwxyz"
var numbersVal = "1234567890"
var specialCharactersVal = "!@#&*()$%^_+~"

var value = "";

// Write password to the #password input
function writePassword() {
  value = "";
  var passwordValue = prompt("How many characters would you like your password to include?")

  var upperCaseConfirm
  var lowerCaseConfirm
  var numbersConfirm
  var specialCharactersConfirm


  if (passwordValue < 8 || passwordValue > 128) {
    alert("The length of the password must be at least 8 characters and no more than 128 characters!")
    return
  }
  else {
    upperCaseConfirm = confirm("Do you want your password to include uppercase characters?")
    lowerCaseConfirm = confirm("Do you want your password to include lowercase characters?")
    numbersConfirm = confirm("Do you want your password to include numeric characters?")
    specialCharactersConfirm = confirm("Do you want your password to include special characters?")

    if (!upperCaseConfirm && !lowerCaseConfirm && !numbersConfirm && !specialCharactersConfirm) {
      alert("Please, choose at least one character type to generate your password!")
    }


  }

  if (upperCaseConfirm) {
    value += upperCaseVal
  }

  if (lowerCaseConfirm) {
    value += lowerCaseVal
  }

  if (numbersConfirm) {
    value += numbersVal
  }

  if (specialCharactersConfirm) {
    value += specialCharactersVal
  }

  console.log(value)

  var passwordText = document.querySelector("#password");
  var password = "";

  for (i = 0; i < passwordValue; i++) {
    password = password + value.charAt(Math.floor(Math.random() * value.length))
  }

  console.log(password)

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);