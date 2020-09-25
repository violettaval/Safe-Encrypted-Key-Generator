 // Assignment Code
var generateBtn = document.querySelector("#generate");

// laying down the blocks
var upperCaseCharacters = true;
var lowerCaseCharacters = true;
var specialCharacters = false;
var numberCharacters = false;
var charLength = function () {
  while ((charLength < 8) || (charLength > 128) || (charLength = null)) {
    charLength = parseInt(Math.floor(prompt("Pick a secure password length from 8 to 128 character")));
    // console on
    console.log("your character length is " + charLength);
  }
  return parseInt(charLength);
}
var lowerChar = "qwertyuiopasdfghjklzxcvbnm";
var upperChar = lowerChar.toUpperCase();
var specialChar = "~!@#$%&-+=_";
// puts in da good stuff 
var passwordOptions = [upperCaseCharacters, lowerCaseCharacters, specialCharacters, numberCharacters];
var passwordTextOptions = ["upper Case Characters", "lower Case Characters", "special Characters", "number Characters"];
//looks for true in an array to check if at least one character is true 
//spice jar
var specialSauce = [];

//We make a password in here

function hotMixr(passwordOptions) {
  // big spork holds the flavor
  var spoon;
  // heat switch start cookin
  var onSwitch = true;
  var coinTosser = 5;
  while (onSwitch === true) {
    // rng internal to each stirr
    coinTosser = Math.floor(Math.random() * 4);
    // console on
    console.log("the coin toss was " + coinTosser);
    //looper that 
    numbers.forEach(function(){
      for (var k = 0; k < passwordOptions.length; k++) {
        // choose a random type of character from that group grab it with spoon
        if ((passwordOptions[k] === true) && (coinTosser === k)) {
          if (k === 0) {
            spoon = upperChar[Math.floor(Math.random() * upperChar.length)]
            //console on 
            console.log("Spoon caught holding " + spoon);
            //stops the while loop
            onSwitch = false;
            // stop the for loop incase onswitch keeps runnin
            break;
          }
          else if (k === 1) {
            spoon = lowerChar[Math.floor(Math.random() * lowerChar.length)]
            //console on 
            console.log("Spoon caught holding " + spoon);
            //stops the while loop
            onSwitch = false;
            // stop the for loop incase onswitch keeps runnin
            break;
          }
          else if (k === 2) {
            spoon = upperChar[Math.floor(Math.random() * upperChar.length)]
            //console on 
            console.log("Spoon caught holding " + spoon);
            //stops the while loop
            onSwitch = false;
            // stop the for loop incase onswitch keeps runnin
            break;
          }
          else{
            spoon = Math.floor(Math.random() * 10);
            console.log("Spoon caught holding " + spoon);
            //stops the while loop
            onSwitch = false;
            // stop the for loop incase onswitch keeps runnin
            break;
          }
        }
        return spoon;
    },k, passwordOptions;
}
function generatePassword() {
  // empty jar
  specialSauce=[];
  // console.log("we made this far");
  for (var j = 0; j < charLength; j++) {
    //da cook
    //hot kookin
    specialSauce.push(hotMixr(charLength,passwordOptions));
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
