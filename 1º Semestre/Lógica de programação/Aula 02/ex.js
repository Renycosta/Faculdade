const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número:"))

if(num == Math.abs(num)){
    console.log("Esse número")
}