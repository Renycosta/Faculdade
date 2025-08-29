const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const valor = Number(prompt("Valor R$: "))

if (valor <= 100){
    console.log(`O ${produto}, só pode ser pago à vista`)
} else{
    const parcela = valor / 3
    console.log(`O ${produto}, pode pagar em 3x de ${parcela}`)
}