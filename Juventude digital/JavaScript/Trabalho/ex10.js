/*Peça ao usuário para digitar o dia da semana (ex: "segunda", "terca", "sabado"). Se for
"sabado" ou "domingo", exiba "É fim de semana!". Caso contrário, exiba "É dia de semana.".*/
const prompt = require('prompt-sync')();

const dia = prompt("Dia o dia da semana: ")

if(dia == "sabado" || dia == "domingo"){
    console.log("É fim de semana!")
}else{
    console.log("É dia de semana.")
}