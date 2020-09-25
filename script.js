// Assignment Code
var generateBtn = document.querySelector("#generate");
// laying down the blocks


var lowerChar = "qwertyuiopasdfghjklzxcvbnm";
var upperChar = lowerChar.toUpperCase();
var specialChar = "~!@#$%&-+=_";

//spice jars
var specialSauce = [];
var passwordOptions =[];


//We make a password in here
function hotMixr(passwordOptions) {
  // big spork holds the flavor
  var spoon;
  // rng
  var coinTosser;
  do {
    coinTosser = Math.floor(Math.random() * 4);
    for (var k = 0; k < passwordOptions.length; k++) {
      // choose a random type of character from that group grab it with spoon
      console.log(passwordOptions[k])
      if ((passwordOptions[k] === true) && (coinTosser === k)) {
        if (k === 0) {
          spoon = upperChar[Math.floor(Math.random() * upperChar.length)]
          //console on 
          console.log("Spoon caught holding " + spoon);
          // //stops the while loop
          break;
        }
        else if (k === 1) {
          spoon = lowerChar[Math.floor(Math.random() * lowerChar.length)]
          //console on 
          console.log("Spoon caught holding " + spoon);
          // //stops the while loop
          // onSwitch = false;
          // stop the for loop incase onswitch keeps runnin
          break;
        }
        else if (k === 2) {
          spoon = upperChar[Math.floor(Math.random() * upperChar.length)]
          //console on 
          console.log("Spoon caught holding " + spoon);
          // //stops the while loop
          // onSwitch = false;
          // stop the for loop incase onswitch keeps runnin
          break;
        }
        else if (k === 3) {
          spoon = Math.floor(Math.random() * 10);
          console.log("Spoon caught holding " + spoon);
          //stops the while loop
          onSwitch = false;
          // stop the for loop incase onswitch keeps runnin
          break;
        }
      }
      else {
        coinTosser = Math.floor(Math.random() * 4);
      }
    }

  }
  while (spoon === null);
  console.log("spoon is holding");
  return spoon;
}


function validator(passwordOptions, passwordTextOptions) {
  passwordOptions = {upperCaseCharacters, lowerCaseCharacters, specialCharacters, numberCharacters};

  do {
    alert("Must select at least one type of character.");
    this.upperCaseCharacters = confirm("Would you like to include: " + passwordTextOptions[0] + "?");
    this.lowerCaseCharacters = confirm("Would you like to include: " + passwordTextOptions[1] + "?");
    this.specialCharacters = confirm("Would you like to include: " + passwordTextOptions[2] + "?");
    this.numberCharacters = confirm("Would you like to include: " + passwordTextOptions[3] + "?");
    
    console.log(passwordOptions);
    // good guy greg checks if at least one type of character is check and will loop options again if not  
  }
  while ((this.upperCaseCharacters === false) && (this.lowerCaseCharacters === false) && (this.specialCharacters === false) && (this.numberCharacters === false))
    console.log("You made it this far valid");
  return passwordOptions;
}
function generatePassword() {
  // empty jar
  specialSauce = [];
  console.log("we made this far");
  validator(passwordOptions);

  //checker for char length must be between 8 and 128
  var charLength = (function () {
    do {
      charLength = prompt("Pick a secure password length from 8 to 128 character");
      // console on
      console.log("your character length is " + charLength);
    }
    while ((charLength < 8) || (charLength > 128) || (charLength === null));
    return parseInt(charLength);
  });
  for (var j = 0; j < charLength; j++) {
    //hot kookin
    specialSauce.push(hotMixr(passwordOptions));
  }
  //console on
  console.log("sauce is " + specialSauce);
  return specialSauce.join("");
}
// Write password to the #password input
function writePassword() {
  passwordOptions = validator(passwordOptions);
  var password = generatePassword();
  var passwordText = document.getElementById("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
