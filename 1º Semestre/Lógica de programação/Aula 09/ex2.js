const prompt = require("prompt-sync")()

const veiculos = []
const preco = []

console.log("Informe o nome dos veiculos e o preço de revenda")

let continua
do{
    const x = prompt ("Nome: ")
    const y = Number(prompt("Preço: "))

    veiculos.push(x)
    preco.push(y)

    continua = prompt("Deseja Continuar (S/N): ").toUpperCase()
} while (continua == "S")

console.log("Lista dos Veículos da Revenda")
console.log("-".repeat(30))

let total = 0

for (let i = 0; i < veiculos.length; i++){
    console.log(`${veiculos[i]} - R$${preco[i]}`)
    total = total + preco[i]
}

const media = total / veiculos.length
console.log("-".repeat(30))
console.log(`Preço Médio dos Veículos: R$${media.toFixed(2)}`)