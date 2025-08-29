const prompt = require("prompt-sync")()

const nota = Number(prompt("Digite a nota: "))

if(nota >= 90){
    console.log("Conceito A")
}else if(nota >= 80 && nota < 90){
    console.log("Conceito B")
}else if(nota >= 70 && nota < 80){
    console.log("Conceito C")
}else if(nota >= 60 && nota < 70){
    console.log("Conceito D")
}else{
    console.log("Conceito F")
}