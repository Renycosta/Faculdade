const prompt = require("prompt-sync")()

let criancas = 0
let totalGotas = 0

let continua

console.log("Campanha vacinação")
console.log("-".repeat(30))

do{
    const nome = prompt("Criança:")
    const gotas = Number(prompt("Nº gotas"))
    console.log(`${nome} vacinado com ${gotas} gotas`)

    criancas = criancas + 1             // criancas++ ou criancas += 1
    totalGotas = totalGotas + gotas     // totalGotas += gotas

    continua = prompt("Continuar (S/N): ").toUpperCase()

} while (continua == "S")

console.log("-".repeat(30))
console.log(`Crianças Vacinadas: ${criancas}`)
console.log(`Total de gotas: ${totalGotas}`)

const frascos = Math.ceil(totalGotas / 30)
console.log(`Nº de frascos abertos: ${frascos}`)