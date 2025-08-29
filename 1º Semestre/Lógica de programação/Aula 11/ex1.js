const prompt = require("prompt-sync")()

const n1 = Number(prompt("Digite a hora inicial: "))
const n2 = Number(prompt("Digite a hora final: "))

let total = 0
if(n1 < n2){
    total = n2 - n1
}else{
    total = (24+n2) - n1
}

console.log(`\nO jogo durou ${total} hora(s)`)