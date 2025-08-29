const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número "))

console.log(`Tabuada do ${num}`)
console.log("======================")

for (let i = 1; i <= 20; i = i + 1) {
    console.log(`${num} x ${i} = ${num * i}`)
    
    if (i % 10 == 0){
        console.log("Ufa... estou cansando...")
    }
}