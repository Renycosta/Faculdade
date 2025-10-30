//Pedir para usuário informar o valor total de um produto e o número de parcelas e o programa deve mostrar a saida referente ao número de cada parcela
const prompt = require("prompt-sync")();

const val = Number(prompt("Digite o valor: "))
const par = Number(prompt("Digite a parcela: "))

let i = 0

const total = val/par

while(i < par){
    i = i + 1
    console.log(`Parcela ${i}: R$${total}`)    
}