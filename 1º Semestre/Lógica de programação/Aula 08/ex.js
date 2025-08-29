const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número: "))

let ant1 = 0
let ant2 = 1
let total = 1

let prox = ant1 + ant2

while(prox <= num){
    total = total + ", " + prox
    ant1 = ant2
    ant2 = prox
    prox = ant1 + ant2
}

console.log(`Sequencia de fibonacci até o número ${num} / 0, ${total}`)