//Peça três notas e calcule a média
const prompt = require("prompt-sync")();

const n1 = prompt("Nota 1º: ")
const n2 = prompt("Nota 2º: ")
const n3 = prompt("Nota 3º: ")

const total = (n1 + n2 + n3) / 3

console.log(total)