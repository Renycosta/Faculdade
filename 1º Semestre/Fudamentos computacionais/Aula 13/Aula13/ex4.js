const prompt = require('prompt-sync')()

const com = Number(prompt("Quantas compras você fez: "))
const novo = prompt("Você é um cliente novo(S/N): ").toUpperCase
const cupom = prompt("Você tem cupom(S/N): ").toUpperCase

if((com >= 5 && novo == "N") || (novo == "S" && cupom == "S")){
    console.log("Vem que tem!")
}else{
    console.log("Chora, trouxa!")
}