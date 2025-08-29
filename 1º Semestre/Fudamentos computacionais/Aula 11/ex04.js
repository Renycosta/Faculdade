const prompt = require("prompt-sync")()

const a = Number(prompt("Digite o primeiro número: "))
const b = Number(prompt("Digite o segundo número: "))
const c = Number(prompt("Digite o segundo número: "))

var res1 = 0
var res2 = 0
var res3 = 0

if(a > b || a > c){
    res1 = a
}
if(b > a || b > c){
    res2 = b
}
if(c > a || c > b){
    res3 = c
}

const total = res1 + res2 + res3
console.log(`Soma dos 2 maiores é: ${total}`)