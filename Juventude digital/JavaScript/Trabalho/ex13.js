/*Crie uma variável com uma senha (ex: "1234"). Peça ao usuário para digitar a senha. Se a
senha digitada for igual à senha armazenada, exiba "Acesso permitido". Caso contrário, exiba
"Acesso negado".*/
const prompt = require('prompt-sync')();

const sen = prompt("Digite a senha: ")

if(sen == "1234"){
    console.log("Acesso permitido")
}else{
    console.log("Acesso negado")
}