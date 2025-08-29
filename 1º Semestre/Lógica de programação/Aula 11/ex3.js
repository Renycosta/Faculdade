const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número: "))

let val = 0
let total = 0
for (let i = 1; i <= num; i++){
    val = num / i

    if(val == val.toFixed(0)){
        total = total + i + ", "
    }
}
console.log(`\n${total}`)