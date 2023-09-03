// Assignment Code
var generateBtn = document.querySelector("#generate");
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var low = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var speical = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var newPassword = [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandomNum(){
  var min = Math.floor(8);
  var max = Math.ceil(128);
  return Math.floor(Math.random * (max - min + 1) + min );
}
getRandomNum();

function generatePassword() {
  var userChoice = prompt('Choose a password length between 8 and 128 characters: ');
  
}

generatePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
