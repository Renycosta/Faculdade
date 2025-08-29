const prompt = require('prompt-sync')()

const num = Number(prompt("Digite a número:"))

let cat = 0
if(num < 3){
    cat = "Muito insatisfeito"
}else if(num >= 3 && num < 6){
    cat = "Regular"
}else if(num >= 6 && num < 9){
    cat = "bom"
}else if(num >= 9 && num <= 10){
    cat = "excelente"
}else{
    cat = "Erro: Por favor, digite um número válido entre 0 e 10. "
}

console.log(`Velocidade: ${num} e Categoria ${cat}`)