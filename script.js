//Here I am creating an object whose keys/array values can be accessed in later functions.
//arrays: upper case and lower case letters, numbers 0-9, and special characters.

number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
upperCase = [
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
  "Z",
];
lowerCase = [
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
  "z",
];
special = ["~", "!", "@", "#", "$", "%", "^", "&", "*"];

function generatePassword() {
  var randomNumber = Math.floor(Math.random(number) * number.length);
  var randomSpecial = Math.floor(Math.random(special) * special.length);
  var randomUpper = Math.floor(Math.random(upperCase) * upperCase.length);
  var randomLower = Math.floor(Math.random(lowerCase) * lowerCase.length);
}

function generatePassword() {
  var pass = "";
  var characters = number.concat(upperCase, lowerCsase, special);
  var charlength = characters.length;
  for (var i = 0; i < length; i++)
    pass += characters.charAt(Math.floor(Math.random() * charlength));

  return pass;
}

console.log(generatePassword(10));

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function button() {
  generateBtn.addEventListener("click", generatePassword);
  console.log("done");
}
