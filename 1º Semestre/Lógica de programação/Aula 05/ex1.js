const prompt = require("prompt-sync")()

const nome = prompt("Digite seu nome: ")
const sexo = prompt("Sexo (M/F): ")
const altu = prompt("Digite sua altura: ")

if (sexo.toUpperCase() == "M"){
    peso = (72.7*altu)-58
} else{
    peso = (62.1*altu)-44.7
}

console.log(`Nome: ${nome}`)
console.log(`Sexo: ${sexo}`)
console.log(`Altura: ${altu}`)
console.log(`Peso ideal: ${peso.toFixed(3)}kg`)