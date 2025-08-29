const prompt = require("prompt-sync")()

const clubes = []

console.log("Informe o nome de 10 clubes")
console.log("-".repeat(30))

for (let i = 0; i < 10; i++){
    clubes[i] = prompt(`${i+1}º Clube: `)
}

console.log("Lista dos jogos")
console.log("-".repeat(30))

for (let i = 0; i < 10; i = i + 2){
    console.log(`${clubes[i]} x ${clubes[i+1]}`)
}