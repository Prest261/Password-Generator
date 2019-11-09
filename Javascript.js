var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~"
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
var password = [];
var totalchar = [];
// create a function that askes the user about the specifics of the password:
// length between 8-128 characters
// lowercase
// uppercase
// numbers
// special characters

function questions(){

// need two functions - 1st function to have user input select the arrays needed
//    - 2nd needs two parameters (length, specified characters) this function needs to be nested in function 1
var passLength = prompt("How many characters would you like? Must be between 8-128 characters.");
// validate
while (passLength < 8 || passLength > 128) {

    alert("Not a valid password length");
    passLength = prompt("How many characters would you like? Must be between 8-128 characters.");
}
    // prompt user: do you want special characters?
var special = confirm("Do you want special characters?");
    // prompt user: do you want uppercase characters?
var uppercase = confirm("Do you want uppercase characters?");
    // prompt user: do you want lowercase characters?
var lowercase = confirm("Do you want lowercase characters?");
    // prompt user: do you want numbers?
var number = confirm("Do you want numeric characters?");
console.log(passLength, special, uppercase, lowercase, number);

// if user input selects special characters
// then randomly pull from special characters array until lenth is met
if (special === true) {
  getChar(specialCharacters);
}
// or if user input selects special characters & numeric characters
// then randomly pull from special characters & numeric array until length is met
if (uppercase === true) {
  getChar(uppercaseCharacters);
}
// or if user input selects special characters & numeric characters & lowercase characters
// then randomly pull from all three arrays until length is met
if (lowercase === true) {
  getChar(lowercaseCharacters);
}
// or if user input selects special characters & numeric & lowercase & uppercase
// then randomly pull from all four arrays until length is met
if (number === true) {
  getChar(numericCharacters);
}

if (totalchar.length === 0){
    alert("not valid selection, please try again")
    questions()

}else{
    for (var i = password.length; i < passLength; i++) {
      var char = totalchar[Math.floor(Math.random() * totalchar.length)];
      password.push(char);
    }
    console.log(password);
    // convert to string:
    var passStr = password.join("");
    console.log(passStr);
    // else if user does not select a valid character type
    // then error message
}

}

function getChar(arr) {
  var char = arr[Math.floor(Math.random() * arr.length)];
  password.push(char);
  totalchar = totalchar.concat(arr);
  console.log(totalchar);
}
// password = ["$", "2", "a"]    passlength=10   7 more

questions();