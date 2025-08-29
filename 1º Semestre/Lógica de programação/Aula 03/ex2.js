const prompt = require("prompt-sync")()

const filme = prompt("Filme: ")
const duração = Number(prompt("Duração(min): ")) 

const horas = Math.floor(duração / 60)
const min = duração % 60

console.log(`O filme ${filme}, tem a duração de ${horas} horas e ${min} minutos`)