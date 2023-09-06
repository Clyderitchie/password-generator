// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var userChoice = prompt('Please chose a password length');

  while (userChoice < 8 || userChoice > 128) {
    userChoice = prompt('Invalid selection. Please select a password length between 8 and 128 characters.');
  }

  var includeNum = window.confirm('Would you like to have numbers in your password');
  var includeLower = window.confirm('Would you like any lower case letters in your password?');
  var includeUpper = window.confirm('Would you like any upper case letters in your password?');
  var includeSpeical = window.confirm('Would you like any special characters in your password?');
  var newPassword = [];

  // if (userChoice >= 8 && userChoice <= 128) {

  while (newPassword.length < userChoice) {
    if (includeNum) {
      newPassword += generateRandomNum();
    } else {
      newPassword;
    }
    if (includeLower) {
      newPassword += generateRandomLower();
    } else {
      newPassword;
    }
    if (includeUpper) {
      newPassword += generateRandomUpper();
    } else {
      newPassword;
    }
    if (includeSpeical) {
      newPassword += generateRandomSpeical();
    } else {
      newPassword;
    }
  }
  alert('Your new password is: ' + newPassword);
}

// }


function generateRandomNum() {
  var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return num[Math.floor(Math.random() * num.length)];
}

function generateRandomLower() {
  var low = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return low[Math.floor(Math.random() * low.length)];
}

function generateRandomUpper() {
  var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return upper[Math.floor(Math.random() * upper.length)];
}

function generateRandomSpeical() {
  var speical = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  return speical[Math.floor(Math.random() * speical.length)];
}

// function generateRandomCharacters() {
//   var randomChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
//   return randomChar[Math.floor(Math.random() * randomChar.length)];
// }

generatePassword();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
