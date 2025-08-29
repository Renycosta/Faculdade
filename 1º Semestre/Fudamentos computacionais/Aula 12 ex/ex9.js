const prompt = require("prompt-sync")();

const n1 = Number(prompt("Digite um número:"))

const div = n1 % 5

let total = 0
if(n1 >= 10){
    total = "O número é maior que 10, "
}
if(div == 0){
    total = total + "O número é divisivel por 5, "
}
if(n1 < 0){
    total = total + "O número é negativo"
}

console.log(total)