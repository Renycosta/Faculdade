const prompt = require("prompt-sync")()

const num = Math.floor(Math.random()*10) + 1

let senha = ""
let i = 0
while(senha != num){
    i++
    senha = Number(prompt("Digite a senha: "))
}
console.log(`Você precisou de ${i} tentativas para acertar`)