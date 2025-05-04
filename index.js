const lengthInput = document.getElementById("lengthInput")
const result = document.getElementById("result")
const submit = document.getElementById("submit")
const num = document.getElementById("num")
const lc = document.getElementById("lc")
const uc = document.getElementById("uc")
const sc = document.getElementById("sc")
const range = document.getElementById("lengthInput");
const rangeValue = document.getElementById("rangeValue");



const numbers = [0,1,2,3,4,5,6,7,8,9]
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z'];
const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')','-', '_', '=', '+', '[', ']', '{', '}', '\\', '|',';', ':', '\'', '"', ',', '.', '<', '>', '/', '?', '`', '~'];




submit.onclick= function(){
    let answer = [];

    const generators = [];
    if (lc.checked) generators.push(randomLowerCaseLetters);
    if (uc.checked) generators.push(randomUpperCaseLetters);
    if (num.checked) generators.push(randomNumber);
    if (sc.checked) generators.push(randomSpecialCharacters);

    for (let i = 0; i < lengthInput.value; i++) {
        answer.push(shuffleEverything(generators));
    }

    result.textContent = answer.join('');
    copy.style.display = "inline-block";
}

range.oninput = function () {
    rangeValue.textContent = this.value;
}

copy.onclick = function () {
    const password = result.textContent;
    if (password.trim() !== "") {
        navigator.clipboard.writeText(password)
            .then(() => alert("Senha copiada!"))
            .catch(err => alert("Erro ao copiar: " + err));
    } else {
        alert("Nenhuma senha para copiar.");
    }
}

function randomNumber(){
    let rand = Math.floor(Math.random() * numbers.length);
    return rand
}

function randomLowerCaseLetters(){
    let rand = Math.floor(Math.random() * lowercaseLetters.length)
    return lowercaseLetters[rand]
}

function randomUpperCaseLetters(){
    let rand = Math.floor(Math.random() * uppercaseLetters.length)
    return uppercaseLetters[rand]
}

function randomSpecialCharacters(){
    let rand = Math.floor(Math.random() * specialCharacters.length)
    return specialCharacters[rand]
}

function shuffleEverything(generators) {
    if (generators.length === 0) return '';
    let rand = Math.floor(Math.random() * generators.length);
    return generators[rand]();
}