const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

console.log(`Divisores do ${num}`)
console.log("-".repeat(30))

for(let i = 1; i <= num; i = i + 1){
    if (num % i == 0){
        console.log(num[i])
    }
}