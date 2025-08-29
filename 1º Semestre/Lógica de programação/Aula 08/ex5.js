const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número: "))

if (num >= 5) {
    console.log(`Múltiplos de 5 até ${num}`)
    
    for (let i = 5; i <= num; i = i + 5) {
        console.log(i)
    }
} else{
    console.log("Erro... Digite um número maior ou igual a 5")
}