//Digitar 2 valores e verificar o maior número, se for igual informe que é igual
const prompt = require("prompt-sync")();

const n1 = Number(prompt("Digite um número: "))
const n2 = Number(prompt("Digite outro número: "))

if(n1 < n2){
    console.log(`O ${n1} é menor que o ${n2}`)
}else if(n1 > n2){
    console.log(`O ${n1} é maior que o ${n2}`)
}else{
    console.log("Os números são iguais")
}