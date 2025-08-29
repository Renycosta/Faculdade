const prompt = require("prompt-sync")()

const a = Number(prompt("Digite o primeiro número: "))
const b = Number(prompt("Digite o segundo número: "))
const c = Number(prompt("Digite o terceiro número: "))
const d = Number(prompt("Digite o primeiro número: "))

var res1 = 1
var res2 = 1
var res3 = 1
var res4 = 1

if(a < b && a < c || a < d && a < b || a < d && a < c){
    res1 = a
}
if(b < a && b < c || b < d && b < a || b < d && b < c){
    res2 = b
}
if(c < a && c < b || c < d && c < a || c < d && c < b){
    res3 = c
}
if(d < a && d < b || d < c && d < a || d < c && d < b){
    res4 = d
}

const total = res1 * res2 * res3 * res4
console.log(`A multiplicação dos 2 menores é ${total}`)