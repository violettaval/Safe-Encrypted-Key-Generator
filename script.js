// Assignment Code


var generateBtn = document.querySelector("#generate");
var lowerChar = "qwertyuiopasdfghjklzxcvbnm";
var upperChar = lowerChar.toUpperCase();
var specialChar = "~!@#$%&-+=_";
var charLength = charLengthAsk();

function charLengthAsk() {
    do {
        charLength = Math.floor(prompt("Pick a secure password length from 8 to 128 character"));
        console.log("your character length is " + charLength);
    }
    while (((charLength < 8) || (charLength > 128) || (charLength = null)));
    return parseInt(charLength);
}

var passwordTextOptions = ["upper Case Characters", "lower Case Characters", "special Characters", "number Characters"];
var passwordOptions = validator(passwordTextOptions);

function validator(passwordTextOptions) {
    do {
        alert("At Least One type of Characters must be chosen");
        var upperCaseCharacters = confirm("Would you like to include: " + passwordTextOptions[0]);
        var lowerCaseCharacters = confirm("Would you like to include: " + passwordTextOptions[1]);
        var specialCharacters = confirm("Would you like to include: " + passwordTextOptions[2]);
        var numberCharacters = confirm("Would you like to include: " + passwordTextOptions[3]);
        // good guy greg checks if at least one type of character is check and will loop options again if not  
    }
    while ((upperCaseCharacters === false) && (lowerCaseCharacters === false) && (specialCharacters === false) && (numberCharacters == false));
    return [upperCaseCharacters, lowerCaseCharacters, specialCharacters, numberCharacters];
}

console.log(passwordOptions);
//spice jar
var specialSauce = [];

function rando(k) {
    var text;
    if (k === 0) {
        text = upperChar.charAt(Math.floor(Math.random() * upperChar.length));
        return text;
    }
    if (k === 1) {
        text = lowerChar.charAt(Math.floor(Math.random() * lowerChar.length));
        return text;
    }
    if (k === 2) {
        text = specialChar.charAt(Math.floor(Math.random() * specialChar.length));
        return toString(text);
    }
    if (k === 3) {
        text = charAt(Math.floor(Math.random() * 10));
        return toString(text);
    }
    else {
        return null;
    }
}

//We make a password in here
function hotMixr() {
    // big spork holds the flavor
    var spoon = null;
    // heat switch start cook
    var coinTosser;
    while (spoon === null) {
        // rng internal to each stirr
        coinTosser = Math.floor(Math.random() * 4);
        // console on
        console.log("the coin toss was " + coinTosser);
        //looper that 
        for (var k = 0; k < passwordOptions.length; k++) {
            // choose a random type of character from that group grab it with spoon
            if ((passwordOptions[k] === true) && (coinTosser === k)) {
                spoon = rando(k);
            }
        }
    }
    return spoon;
}

function generatePassword() {
    for (var j = 0; j < charLength; j++) {
        //da cook
        specialSauce.push(hotMixr());
    }
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
