const prompt = require("prompt-sync")()

console.log("Campanha de vacinação")
console.log("-".repeat(30))

let continuar
let crianças = 0
let gotas1 = 0
let gotas2 = 0
let frascos = 1
do{
    prompt("Nome da criança: ")
    const num = Number(prompt("gotas:"))

    crianças = crianças + 1
    gotas1 = gotas1 + num

    continuar = prompt("Deseja Continuar (S/N): ").toUpperCase()
}while(continuar == "S")

    let total = gotas1/30

    console.log("-".repeat(30))
    console.log(`Crianças vacinadas: ${crianças}`)
    console.log(`Total de gotas: ${gotas1}`)
    console.log(`Total de frascos abertos: ${Math.ceil(total)}`)