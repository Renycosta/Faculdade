const prompt = require("prompt-sync")()

const pro = prompt("Produto: ")
const val = Number(prompt("Valor R$: "))

console.log(`Opções de pagamento do(a) ${pro}`)

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${(val / i).toFixed(2)}`)   
}

// formas de fazer: i = i + 1 (formas abreviadas)
// i++
// i+=1

// formas de fazer: i = i - 1 (formas abreviadas)
// i--
// i-=1