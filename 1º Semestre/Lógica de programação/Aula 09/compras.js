const prompt = require("prompt-sync")()

const produtos = []
const precos = []

let continua
do{
    const x = prompt("Produto: ")
    const y = Number(prompt("Preço R$: "))

    // .push() usado para adicionar um elemento ao final do vetor
    produtos.push(x)
    precos.push(y)

    continua = prompt ("Continuar (S/N): ").toUpperCase()
} while (continuar == S)

console.log()
console.log("Lista de compras")

let total = 0

//produtos.lenght: retorna o tamanho do vetor
for(let i = 0; i < produtos.length; i = i + 1){
    console.log(`${produtos[i]} - R$: ${precos[i].toFixed(2)}`)
    total = total + precos[i]
}