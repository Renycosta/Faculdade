const prompt = require("prompt-sync")()

console.log("Informe a disciplina e o conceito do aluno")
console.log("-".repeat(30))

let continua
let Aprovado = 0
let Reprovado = 0
do{
    const dis = prompt("Disciplina: ")
    const nota = prompt("Conceito: ").toUpperCase()

    if(nota == "D"){
        Reprovado = Reprovado + 1
    }else{
        Aprovado = Aprovado + 1
    }

    continua = prompt("Deseja Continuar (S/N): ").toUpperCase()
}while(continua == "S")

console.log("\nResumo do Semestre:")
console.log("-".repeat(30))
console.log(`Aprovado: ${Aprovado} disciplinas`)
console.log(`Reprovado: ${Reprovado} disciplinas`)