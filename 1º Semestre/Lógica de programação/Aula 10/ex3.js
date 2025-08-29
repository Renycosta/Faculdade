const prompt = require("prompt-sync")()

console.log("Informe os números ou 0 para sair")
console.log("-".repeat(30))

let digitados = 0
let soma = 0
let maior = 0
do{

    const num = Number(prompt("Digite um número"))

    if(num == 0){
        break
    }

    digitados = digitados + 1
    soma = soma + num

    if(num > maior){
        maior = num
    }

}while (true)

console.log(`Números digitados: ${digitados}`)
console.log(`Soma dos números: ${soma}`)
console.log(`Maior número: ${maior}`)