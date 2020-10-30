// Assignment Code
var generateBtn = document.querySelector("#generate");



//Declaration of arrays
var lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number=[0,1,2,3,4,5,6,7,8,9];
var upper=["A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","Q","R","S","T","U","V","W","X","Y","Z"];
var special=["#","$","@","^","%","!","~","{","[","}","]","|", "?"];
var password="";
var numberC;
var lowerC;
var upperC;

// Write password to the #password input
function writePassword() {
var password = generatePassword();

var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){

// prompt and asking user to enter in certin range.

var pLength=prompt("How long would you like to have your password,Range is between 8 and 128");
pLength=parseInt(pLength);

if(isNaN(pLength)){                  
  alert("Entry should in numbers only");
  
}


while(pLength < 8 || pLength >128){
  alert("Passward entry range is with in 8 and 128 characters please.");
  var pLength=parseInt(promp("how many characters would like to have in your password "));
}


{
  //confirms 
if(pLength >= 8 || pLength <= 128){
      numberC=confirm("would like to include numbers in password");
      upperC=confirm("would like to include uppercase in password");
      lowerC=confirm("would like to include lowercase in password");
      specialC=confirm("would you like to include special characters")
}
if(!numberC && !upperC && !lowerC && !specialC)
{
  alert("Need atleast one Entry from prompts to continue");
}
}


//checking//condition 
var choicearray = [];         
if(numberC) {
 choicearray= choicearray.concat(number);        
}
if(upperC){
  choicearray=choicearray.concat(upper);
}
if(lowerC){
  choicearray=choicearray.concat(lower);
}
if(specialC){
  choicearray=choicearray.concat(special);
}


//looping for random password based on user choice .
for(var i=0;i<pLength; i++){
  password=password+choicearray[Math.floor(Math.random() * choicearray.length)];
  console.log(password);
  
}

return password;

}             //final bracket to close.



