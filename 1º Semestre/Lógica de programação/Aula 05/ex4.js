const prompt = require("prompt-sync")()

const brasil = Number(prompt("Digite a hora no Brasil: "))

let franca = 5

if(brasil >= 19) {
    franca = 19
    console.log(`São ${brasil-franca} horas na França`)
} else{
    console.log(`São ${brasil+franca} horas na França`)
}