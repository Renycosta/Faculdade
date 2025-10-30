/*Contagem de elementos pares 
Crie um vetor com 10 números e exiba quantos deles são pares.*/

let num = [2, 3, 5, 6, 8, 9, 1, 2, 4, 6, 8, 1, 2,]
let total = 0

for(let i = 0; i < num.length; i++){
    let val = num[i] % 2
    if(val == 0){
        total = total + 1
    }
}
console.log(total)