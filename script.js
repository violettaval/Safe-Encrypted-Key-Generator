// Assignment Code
var generateBtn = document.querySelector("#generate");

// asks which stuffins
// function loopPrompt() {
//   for(var i = 0; i < this.length; i++) {
//     this[i] = confirm("Would like to include: " + this[i]);
//     //console on
//     console.log(this[i]);
//   }
// }
// laying down the blocks
var passwordTextOptions = ["upper Case Characters", "lower Case Characters", "special Characters", "number Characters"];
var charLength = 0;
var lowerChar = "qwertyuiopasdfghjklzxcvbnm";
var upperChar = lowerChar.toUpperCase();
// var specialChar = "~!@#$%&-+=_";
var passwordOptions = [];
//checker for char length must be between 8 and 128
function stateLength(){
  do {
    charLength = Math.floor(prompt("Pick a secure password length from 8 to 128 character"));
    // console on
    console.log("your character length is " + charLength);
  }
  while ((charLength < 8) || (charLength > 128) || (charLength = null));
  return parseInt(charLength);
}
// step wan ask which password characteristics wanted loop back here if not enough picked
function validator() {
  do {
    var upperCaseCharacters = confirm("Would you like to include: " + passwordTextOptions[0]);
    var lowerCaseCharacters = confirm("Would you like to include: " + passwordTextOptions[1]);
    var specialCharacters = confirm("Would you like to include: " + passwordTextOptions[2]);
    var numberCharacters = confirm("Would you like to include: " + passwordTextOptions[3]);
    // good guy greg checks if at least one type of character is check and will loop options again if not  
  }
  while ((upperCaseCharacters === false) && (lowerCaseCharacters === false) && (specialCharacters === false) && (numberCharacters == false));
  passwordOptions = [upperCaseCharacters, lowerCaseCharacters, specialCharacters, numberCharacters];
  console.log(passwordOptions);
  return;
}


//We make a password in here
function hotMixr() {
  // big spork holds the flavor
  var spoon;
  // heat switch start cookin
  var coinTosser = Math.floor(Math.random() * 4);
  // console on
  console.log("the coin toss was " + coinTosser);
  //looper that 
  do {
    for (var k = 0; k < passwordOptions.length; k++) {
      // choose a random type of character from that group grab it with spoon
      console.log(passwordOptions[k])
      if ((passwordOptions[k] === true) && (coinTosser === k)) {
        if (k === 0) {
          spoon = upperChar[Math.floor(Math.random() * upperChar.length)]
          //console on 
          console.log("Spoon caught holding " + spoon);
          // //stops the while loop
          // onSwitch = false;
          // stop the for loop incase onswitch keeps runnin
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
        else {
          coinTosser = Math.floor(Math.random() * 4);
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
//da cook ]-
function generatePassword() {
  stateLength(charLength);
  // good guy greg checks if at least one type of character is check
  validator(passwordOptions);
  //spice jar
  var specialSauce = [];
  //make da password with ingredents 
  
  for (var j = 0; j < charLength; j++) {
    //hot kookin
    console.log("start cooking");
    specialSauce.push(hotMixr.toString());
    // specialSauce[j] = hotMixr(charLength,passwordOptions);
  }
  //console on
  console.log("sauce is " + specialSauce);
  return specialSauce.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
