//Se o usuario digitar qualquer dia de valor que não seja fim de semana, quebrar o loop de repetição
const prompt = require("prompt-sync")()

let dia = "sabado"

while(dia == "sabado" || dia == "domingo"){
    dia = prompt("Digite o dia da semana: ")
}