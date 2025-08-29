const prompt = require("prompt-sync")();

const n1 = Number(prompt("Digite o primeiro número:"))
const n2 = Number(prompt("Digite o segundo número:"))
const n3 = Number(prompt("Digite o terceiro número:"))
const n4 = Number(prompt("Digite o quarto número:"))

//Sem parênteses
if (n1 >= 5 || n2 >= 5 && n3 >= 5 && n4 >= 5) {
console.log("true");
} else{
console.log("false")
}

//Com parênteses
if ((n1 >= 5 || n2 >= 5) && (n3 >= 5 && n4 >= 5)) {
console.log("true");
} else {
console.log("false");
}

console.log("Isso aconteceu porque sem o parenteses o OU não pega apenas uma condição e sim todas que estão na frente dele")