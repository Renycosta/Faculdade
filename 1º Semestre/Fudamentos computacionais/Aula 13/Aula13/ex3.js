const prompt = require('prompt-sync')()

const ano = Number(prompt("Digite um ano:"))

const quatro = ano % 4
const cem = ano % 100

if(quatro == 0){
    console.log("O ano informado é bissexto")
}else{
    console.log("O ano informado não é bissexto")
}