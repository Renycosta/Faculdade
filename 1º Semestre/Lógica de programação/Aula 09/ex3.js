const prompt = require("prompt-sync")()

const numero = []
const paridade = []

console.log("Informe alguns números, mas se citar o 0 vai acabar o código")

let y
do {
    const x = Number(prompt("Número: "))

    numero.push(x)

    const met = x % 2
    if (met == 0) {
        y = "par"
    } else {
        y = "impar"
    }

    paridade.push(y)
} while (x != 0)

console.log("Pares da lista")
console.log("-".repeat(30))
for (let i = 0; i < numero.length; i++) {
    if (paridade[i] == "par") {
        console.log(numero[i])
    }
}

console.log("Impares da lista")
console.log("-".repeat(30))
for (let i = 0; i < numero.length; i++) {
    if (paridade[i] == "impar") {
        console.log(numero[i])
    }
}
