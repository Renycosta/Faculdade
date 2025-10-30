//Desenvolver um programa que solicite um número inteiro ao usuário e, em seguida, exiba a tabuada desse número, de 1 até 10, utilizando uma estrutura de repetição for
const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número: "))

for(let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${i*num}`)
}