const prompt = require("prompt-sync")()

const not = []

console.log("Informe as 10 notícias mais recentes")
console.log("-".repeat(30))

contador = 0

do{
    contador = contador + 1
    const x = prompt(`${contador}º notícia: `)

    not.unshift(x)

}while(contador < 10)

console.log("\nÚltimas Notícias")
console.log("-".repeat(30))
for(let i = 0; i < not.length; i++){
    console.log(not[i])
}