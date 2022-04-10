// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("entering writePassword function");

  drawLengthTextbox()
  drawLowercaseCheckbox()
  drawUppercaseCheckbox()
  drawNumberCheckbox()
  drawSpecialCheckbox()
  drawGoButton()

  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

}

function drawLengthTextbox(){
  var txtLength = document.createElement('input');
  txtLength.type = 'text';
  txtLength.name = "name";
  txtLength.value = "";
  txtLength.id = "txtLength"
  var lblLength = document.createElement('label');
  lblLength.htmlFor = "txtLength";
  lblLength.appendChild(document.createTextNode('Desired length'));
  
  var divLength = document.getElementById("divLength")
  divLength.appendChild(txtLength);
  divLength.appendChild(lblLength);
}

function drawLowercaseCheckbox(){
  var cbLowercase = document.createElement('input');
  cbLowercase.type = 'checkbox';
  cbLowercase.name = "name";
  cbLowercase.value = "X";
  cbLowercase.id = "cbLowercase"
  var lblLowercase = document.createElement('label');
  lblLowercase.htmlFor = "cbLowercase";
  lblLowercase.appendChild(document.createTextNode('Require lowercase'));
  
  var divLowercase = document.getElementById("divLowercase")
  divLowercase.appendChild(cbLowercase);
  divLowercase.appendChild(lblLowercase);
}

function drawUppercaseCheckbox(){
  var cbUppercase = document.createElement('input');
  cbUppercase.type = 'checkbox';
  cbUppercase.name = "name";
  cbUppercase.value = "X";
  cbUppercase.id = "cbUppercase"
  var lblUppercase = document.createElement('label');
  lblUppercase.htmlFor = "cbUppercase";
  lblUppercase.appendChild(document.createTextNode('Require uppercase'));
  
  var divUppercase = document.getElementById("divUppercase")
  divUppercase.appendChild(cbUppercase);
  divUppercase.appendChild(lblUppercase);
}

function drawNumberCheckbox(){
  var cbNumber = document.createElement('input');
  cbNumber.type = 'checkbox';
  cbNumber.name = "name";
  cbNumber.value = "X";
  cbNumber.id = "cbNumber"
  var lblNumber = document.createElement('label');
  lblNumber.htmlFor = "cbNumber";
  lblNumber.appendChild(document.createTextNode('Require Number'));
  
  var divNumber = document.getElementById("divNumber")
  divNumber.appendChild(cbNumber);
  divNumber.appendChild(lblNumber);
}

function drawSpecialCheckbox(){
  var cbSpecial = document.createElement('input');
  cbSpecial.type = 'checkbox';
  cbSpecial.name = "name";
  cbSpecial.value = "X";
  cbSpecial.id = "cbSpecial"
  var lblSpecial = document.createElement('label');
  lblSpecial.htmlFor = "cbSpecial";
  lblSpecial.appendChild(document.createTextNode('Require Special'));
  
  var divSpecial = document.getElementById("divSpecial")
  divSpecial.appendChild(cbSpecial);
  divSpecial.appendChild(lblSpecial);
}

function drawGoButton(){
  var btnGo = document.createElement('button');
  btnGo.innerHTML = "Go!"
  btnGo.addEventListener("click", doIt);
  var divGo = document.getElementById('divGo');
  divGo.appendChild(btnGo);
}

function doIt(){
  console.log("entering doIt function");

  var pwLength  = document.getElementById("txtLength").value
  var lowercase = document.getElementById("cbLowercase").checked;
  var uppercase = document.getElementById("cbUppercase").checked;
  var number    = document.getElementById("cbNumber").checked;
  var special   = document.getElementById("cbSpecial").checked;

  console.log("pwLength  = " + pwLength)
  console.log("lowercase = " + lowercase);
  console.log("uppercase = " + uppercase);
  console.log("number    = " + number);
  console.log("special   = " + special);
  
  pwLength = parseInt(pwLength)
  if (isNaN(pwLength) || pwLength<8 || pwLength>128){
    alert("Length must be a number between 8 and 128")
    return
  }
  console.log("pwLength = " + pwLength)
  
  var pw = ""
  const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const LOWERCASE = "abcdefghijklmnopqrstuvwxyz"
  const NUMBERS   = "0123456789"
  const SPECIAL   = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  while(pw.length <= pwLength){
    //As long as the length of the password is less than the required length
    if (uppercase){
      var i = Math.floor(Math.random()*UPPERCASE.length) //This is a random integar 0-25
      var ltr = UPPERCASE.charAt(i)                      //ith letter from UPPERCASE
      pw += ltr                                          //Append that letter to password
    }

    if (lowercase){
      var i = Math.floor(Math.random()*LOWERCASE.length) //This is a random integar 0-25
      var ltr = LOWERCASE.charAt(i)                      //ith letter from LOWERCASE
      pw += ltr                                          //Append that letter to password
    }

    if (number){
      var i = Math.floor(Math.random()*NUMBERS.length)   //This is a random integar 0-9
      var ltr = NUMBERS.charAt(i)                        //ith number from NUMBERS
      pw += ltr                                          //Append that number to password
    }

    if (special){
      var i = Math.floor(Math.random()*SPECIAL.length)   //This is a random position in SPECIAL string
      var ltr = SPECIAL.charAt(i)                        //ith special from SPECIAL
      pw += ltr                                          //Append that special character to password
    }
  }

                                                         //At this point the string length is always a multiple of 4
  pw = pw.substring(0, pwLength)                         //Truncate to required length
  console.log(pw)

  document.getElementById('password').value = pw
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
