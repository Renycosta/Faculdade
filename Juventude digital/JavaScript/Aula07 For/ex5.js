//Escolher o valor do produto e o número de parcelas, porém cada parcela sera 5% mais cara que anterior, mostrar qual o número da parcela equivalente, e mostrar o valor dela 
const prompt = require("prompt-sync")()

const val = Number(prompt("Produto: "))
const par = Number(prompt("Quantidade de parcelas: "))
let num = val / par

for(let i = 1; i <= par; i++){
    console.log(`Parcela ${i} : R$${(num).toFixed(2)}`)
    num = num * 1.05
}