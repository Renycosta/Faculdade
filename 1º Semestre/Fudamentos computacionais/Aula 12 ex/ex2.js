const prompt = require("prompt-sync")()

const n1 = Number(prompt("Valor 1:"))
const n2 = Number(prompt("Valor 2:"))
const n3 = Number(prompt("Valor 3:"))


if(n1 > n2 && n1 > n3){
    val = ((n1*4) + (n2*3) + (n3*3)) / 11
}else if(n2 > n1 && n2 > n3){
    val = ((n2*4) + (n1*3) + (n3*3)) / 11
}else{
    val = ((n3*4) + (n1*3) + (n2*3)) / 11
}

if(val >= 7){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}