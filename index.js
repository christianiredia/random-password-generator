let chars = ["-", "#", "^", "+", "@", "^", "%", "|", "*", "?", "!", "$", "=","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let password3 = document.getElementById("password3");
let password4 = document.getElementById("password4");
let passLength = 12;
let passGroup = [password1, password2, password3, password4];

function generate() {
    for (let i = 0; i < passGroup.length; i++) {
        passGroup[i].textContent = pass();
    }
}

function pass() {
     let pass = "";
    for (let i = 0; i < passLength; i++) {
        pass += chars[Math.floor(Math.random() * chars.length)];
    }
    return pass;
}