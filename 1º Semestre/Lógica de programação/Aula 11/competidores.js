const prompt = require("prompt-sync")()

const nomes = []

do{
    const x = prompt("Nome: ")

    if (x.toUpperCase() == "FIM") {
        break
    }
    nomes.push(x)

} while(true)

console.log()
console.log("Lista dos competidores")
console.log("-".repeat(30))

for (let i = nomes.lenght-1; i >= 0; i = i - 1){
    console.log(nomes[i])
}