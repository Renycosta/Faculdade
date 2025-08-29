const prompt = require("prompt-sync")()

const nome = prompt("Qual seu nome?")
let idade = Number(prompt("Quando você nasceu?"))
let tra = Number(prompt("Quando você começou a trabalhar?"))

idade = 2025 - idade
tra = tra - 2025

if(idade >= 60 || tra >= 25 || idade >= 55 && tra >= 20){
    console.log(`${nome}, você pode requerer aposentadoria`)
}else{
    console.log(`${nome}, você não pode requerer aposentadoria`)
}