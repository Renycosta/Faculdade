const prompt = require("prompt-sync")()

const peso = Number(prompt("Qual o seu peso? "))
const alt = Number(prompt("Qual a sua altura? "))

const imc = peso / (alt*alt)

if(imc < 18.5){
    console.log("Abaixo do peso")
}else if(18.5 <= imc && imc < 24.9){
    console.log("Peso normal")
}else if(25 <= imc && imc < 29.9){
    console.log("Acima do peso")
}else{
    console.log("Obesidade")
}