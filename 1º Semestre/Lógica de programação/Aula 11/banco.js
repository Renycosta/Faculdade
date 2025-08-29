const prompt = require("prompt-sync")()

const saques = []

console.log("Para sair digite 0")
console.log("-".repeat(30))

do{
    const x = Number(prompt("Valor do saque: "))
    if (x == 0){
        break
    }
    if (x % 10 == 0){
        saques.push(x)
        console.log("Ok! Saque realizado com sucesso")
    } else{
        console.log("Saque Invalído. Só dispomos de notas de R$ 10")
    }

} while(true)

console.log()
console.log("Lista dos saques válidos")
console.log("-".repeat(30))

let total = 0

for (let i = 0; i < saques.length; i++){
    console.log(saques[i].toFixed(2))
    total = total + saques[i]
}
console.log("-".repeat(30))
console.log(`Total R$: ${total.toFixed(2)}`)