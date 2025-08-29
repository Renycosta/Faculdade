const prompt = require("prompt-sync")()

const carro = []
const valor = []

console.log("Digite o nome do veículo e o preço dele, digite fim para teminar de digitar")
console.log("-".repeat(30))

do{
    const x = prompt("Nome: ")
    const y = Number(prompt("Valor R$: "))
    const z = y + 500 

    carro.push(x)
    valor.push(z)

    const continua = prompt("Deseja parar? Digite Fim: ")

    if(continua == "Fim"){
        break
    }
}while(true)

let total = 500

console.log("\nTabela de preços")
console.log("-".repeat(30))

    for(let i = 0; i < carro.length; i++){
        console.log(`${carro[i]} - R$ ${valor[i]}`)
    }