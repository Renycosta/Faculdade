const prompt = require("prompt-sync")()

const val1 = Number(prompt("Valor 1:"))
const val2 = Number(prompt("Valor 2:"))

const mul = val1 / val2

if(mul == mul.toFixed(0)){
    console.log("São múltiplos")
}else{
    console.log("Não são múltiplos")
}