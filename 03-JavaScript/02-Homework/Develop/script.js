// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLengthInput = document.querySelector("#password_length");

var passArray = [];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];
var numbChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];


userInput();

function userInput() {
  var length = prompt ("How many characters between 8-128?")
  if (isNaN(length)){
    alert("Password length must be a number");
    return;
  }
  if (length<8 || length>128){
    alert("Length must be between 8 and 128");
    return;
  }
  var userSpecial = confirm ("Do you want special characters?")
  var userNumbers = confirm ("Do you want number characters?")
  var userLower = confirm ("Do you want lower characters?")
  var userUpper = confirm ("Do you want upper characters?")
  if(userSpecial === false && userNumbers === false && userLower === false && userUpper === false) {
    alert ("Password must contain one character type");
    return;
  } 
  var userChoice = {
    length: length,
    userSpecial: userSpecial,
    userNumbers: userNumbers,
    userLower: userLower,
    userUpper: userUpper
  };

  return userChoice;
  
}


// Write password to the #password input
function writePassword() {

  var charNum = document.getElementById("charNum");
  var numBox = document.getElementById("num");
  var symBox = document.getElementById("sym");
  var submit = document.getElementById("submit");
  var yourPw = document.getElementById("yourPw");


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function validatePasswordLength(passwordLength) {

}

function generatePassword() {
  var length = 15,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_+:',./?",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
