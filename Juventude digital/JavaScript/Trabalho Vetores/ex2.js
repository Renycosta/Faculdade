/*Somando valores de um vetor 
Crie um vetor com 5 números e mostre no console a soma total desses  valores. */

let num = [2, 8, 10, 16, 20]
let acu = 0

for(let i = 0; i < num.length; i++){
    acu = num[i] + acu
}
console.log(acu)