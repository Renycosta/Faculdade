const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número: "))

const seg = num % 2

if (seg == 1){
    const impar = num + 1
    console.log(`O par seguinte desse número é: ${impar}`)
} else{
    const par = num + 2
    console.log(`O par seguinte desse número é: ${par}`)
}