/*Maior e menor valor 
Dado um vetor de números, exiba qual é o maior e o menor número  contido nele. */

const num = [2, 1, 3, 5, 4,]
let maior = 0
let menor = 10

for(let i = 0; i < num.length; i++){
    if(num[i] > maior){
        maior = num[i]
    }
    if(num[i] < menor){
        menor = num[i]
    }
}
console.log("o maior número é: ", maior)
console.log("o menor número é: ", menor)