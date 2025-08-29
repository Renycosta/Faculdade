const prompt = require("prompt-sync")()

const num = prompt("Digite um número: ")

var cal = num % 2

if (cal == 1){
    console.log(`Esse número é impar`)
} else{
    console.log(`Esse número é par`)
}