const prompt = require("prompt-sync")()

const n1 = Number(prompt("Número 1:"))
const n2 = Number(prompt("Número 2:"))
const n3 = Number(prompt("Número 3:"))

const val1 = n1 % 2
const val2 = n2 % 2
const val3 = n3 % 2

if((val1 === 0)||(val2 === 0)||(val3 === 0)){
    console.log("Pelo menos um é positivo e par")
}else{
    console.log("Nenhum dos números é positivo e par")
}

if(val1 !== 0 && val2 !== 0 && val3 !== 0){
    console.log("Nenhum dos números é positivo e par")
}else{
    console.log("Pelo menos um é positivo e par")
}