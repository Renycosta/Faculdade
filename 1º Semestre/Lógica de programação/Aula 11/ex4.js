const prompt = require("prompt-sync")()

const com = []

console.log("Informe os competidores ou 'Fim' para sair")
console.log("-".repeat(30))

let contador = 0
do{
    contador = contador + 1
    const x = prompt(`${contador}° competidor: `)
        
    com.unshift(x)

    const continua = prompt("Deseja parar? Digite Fim: ")

    if(continua == "Fim"){
        break
    }

}while(true)

    console.log("\nLista dos Competidores:")
    console.log("-".repeat(30))
    for(let i = 0; i < com.length; i++){
        console.log(`${com[i]}`)
    }