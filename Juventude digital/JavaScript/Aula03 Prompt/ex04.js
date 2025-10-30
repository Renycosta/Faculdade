const prompt = require("prompt-sync")();

const time = prompt("Digite a hora: ")

console.log("Isso fica", time*3600 ,"em segundos")