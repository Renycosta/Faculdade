const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número "))

const res = num % 2 

if(res == 0){
    console.log("O número é par")
}else{
    console.log("O número é impar")
}