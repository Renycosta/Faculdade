const prompt = require("prompt-sync")()

const candidato = []
const acertos = []
const resultado = []

console.log("Informe o nome e os acertos do alunos")

let continua
let z
do {
    const x = prompt("Nome: ")
    const y = Number(prompt("Nota: "))

    candidato.push(x)
    acertos.push(y)

    if (y >= 30) {
        z = "Aprovado"
    } else {
        z = "Reprovado"
    }

    resultado.push(z)

    continua = prompt("Deseja Continuar (S/N): ").toUpperCase()
} while (continua == "S")

console.log("\nResultado do Concurso") // \n = Quebra de linha
console.log("-".repeat(30))

for (let i = 0; i < candidato.length; i++)
    console.log(`${candidato[i]} - ${acertos[i]} acertos - ${resultado[i]}`)