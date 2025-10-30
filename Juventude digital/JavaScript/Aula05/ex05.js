//Login simples: mostrar acesso liberado se o usuário for "Banana" e a senha for "Tomate"
const prompt = require("prompt-sync")()

const usu = prompt("Usuário: ")
const sen = prompt("Senha: ")

if(usu == "Banana" && sen == "Tomate"){
    console.log("Acesso liberado")
}else{
    console.log("Acesso negado")
}