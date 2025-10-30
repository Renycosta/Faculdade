//Peça o usuário uma temperatura em fahrenheit e converte para Celsius
const prompt = require("prompt-sync")();

const fah = prompt("Temperatura em Fahrenheit: ")
const temp = (fah - 32) * 5 / 9

console.log(temp)