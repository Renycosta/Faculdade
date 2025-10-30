//Media na escola é 6,5
const prompt = require("prompt-sync")();

const nota = Number(prompt("Digite sua nota: "))

if(nota > 6.5){
    console.log("Nota boa!!!")
}else if(nota == 6.5){
    console.log("é... passou")
}else{
    console.log("é...")
}