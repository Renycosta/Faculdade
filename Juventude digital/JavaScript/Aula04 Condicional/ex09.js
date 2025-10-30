//Sistema de desconto, se valor do produto for maior que 400 reais, colocar 20% de desconto no valor, se for maior que 300, colocar 10% se for maior que 100 colocar 5%, se for menor informar "Sem desconto"
const prompt = require("prompt-sync")();

const val = Number(prompt("Digite um número: "))

if(val > 400){
    val - (val*0.20)
    console.log(val)
}else if(val > 300){
    val - (val*0.10)
    console.log(val)
}else if(val > 200){
}else if(val < 100){
    console.log("Sem desconto")
}