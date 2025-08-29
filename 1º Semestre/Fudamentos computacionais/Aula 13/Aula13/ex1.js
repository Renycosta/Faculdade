const prompt = require('prompt-sync')()

const vel = Number(prompt("Digite a velocidade:"))

let cat = 0
if(vel < 20){
    cat = "Muito lento"
}else if(vel >= 20 && vel < 60){
    cat = "Normal"
}else if(vel >= 60 && vel < 100){
    cat = "Rápido"
}else if(vel >= 100){
    cat = "Muito rapido"
}else{
    cat = "Erro: valor inválido."
}   

console.log(`Velocidade: ${vel} e Categoria ${cat}`)