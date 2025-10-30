//Enquanto digitar valores menores que 100 o sistema deve seguir rodando
const prompt = require("prompt-sync")()

let num = 0

while(num > 100 && num < 900){
    num = Number(prompt("Digite um número: "))
}
console.log("Parabéns")