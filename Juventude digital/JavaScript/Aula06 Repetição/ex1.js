//Digite a senha até acertar
const prompt = require("prompt-sync")()

let senha = ""

while(senha != "1234"){
    console.log("É...")
    senha = prompt("Digite sua senha: ")
}
console.log("Acertou a senha!!!")