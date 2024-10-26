const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers ="0123456789";
const symbols ="!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

const lengthEl =document.getElementById('textLen');
const lowerCaseEl =document.getElementById('lowecase');
const upperCaseEl =document.getElementById('uppercase');
const symbolsEl =document.getElementById('symbols');
const numbersEl =document.getElementById('numbers');
const generateEl =document.getElementById('generate');
const PasswordEl =document.getElementById('passText');

function generatePassword(){

    const length = lengthEl.value;
    let characters  =""
    let password =""

    if (lowerCaseEl.checked){
        characters += lowerCase;
    }

    if (upperCaseEl.checked){
        characters += upperCase;
    }

    if (symbolsEl.checked){
        characters += symbols;
    }

    if (numbersEl.checked){
        characters += numbers;
    }
for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));    
}
PasswordEl.value = password;


}

generateEl.addEventListener("click", generatePassword);