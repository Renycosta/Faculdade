const prompt = require("prompt-sync")()

const numeros = []

console.log("Informe os números ou 0 para sair")
console.log("-".repeat(30))
do {
    const x = Number(prompt("Número: "))
    if (x == 0){
        break   //sai da repetição
    }
    numeros.push(x)
} while (true)

console.log()
console.log("Lista números Pares")
console.log("-".repeat(30))

for (let i = 0; i <numeros.length; i++){
    if (numeros[i] % 2 == 0) {
        console.log(numeros[i])
    }
}

console.log()
console.log("Lista números Ímpares")
console.log("-".repeat(30))

for (let i = 0; i <numeros.length; i++){
    if (numeros[i] % 2 != 0) {
        console.log(numeros[i])
    }
}