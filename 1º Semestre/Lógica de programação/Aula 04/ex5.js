const prompt = require("prompt-sync")()

const saque = Number(prompt("Valor do saque R$: "))

const valor = saque % 10

if(valor == 0){
    const quant = saque / 10
    console.log(`A quantidade de notas de R$10 necessárias para a realização é ${quant} notas de R$10`)
} else{
    console.log(`Não é possível pagar ${saque} com notas de R$10`)
}