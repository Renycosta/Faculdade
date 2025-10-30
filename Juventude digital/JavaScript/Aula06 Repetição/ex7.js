//mostrar quantas vezes o usuário tentou para descobrir a senha
const prompt = require("prompt-sync")();

let senha = ""
let i = 0

while(senha != "1234"){
    senha = prompt("Digite a senha: ")
    i = i + 1
}

console.log(`Você tentou ${i} vezes acertar a senha`)