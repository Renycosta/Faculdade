//Pergunte ao usuário seu cargo, se for admin ou dono entrar a mensagem "Acesso Liberado", se não "Acesso Negado"
const prompt = require("prompt-sync")()

const cargo = prompt("Qual o seu cargo? ")

if(cargo == "admin" || cargo == "dono"){
    console.log("Acesso Liberado")
}else{
    console.log("Acesso Negado")
}