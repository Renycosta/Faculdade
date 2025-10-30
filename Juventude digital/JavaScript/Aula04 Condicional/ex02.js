//Somar 2 números, se a resposta for maior que 10, retorno "Ohhh!", se não retornar "Uhhh!"
const prompt = require("prompt-sync")();

const n1 = Number(prompt("Número 1: "))
const n2 = Number(prompt("Número 2: "))

const total = n1 + n2

if(total > 10){
    console.log("Ohhh!")
}else{
    console.log("Uhhh!")
}