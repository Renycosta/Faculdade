//Saudação com base na hora, pedir pa o usuário, informar a hora
const prompt = require("prompt-sync")();

const hora = Number(prompt("Digite a hora: "))

if(hora <= 12){
    console.log("Bom dia")
}else if(hora <= 18){
    console.log("Boa tarde")
}else{
    console.log("Boa noite")
}