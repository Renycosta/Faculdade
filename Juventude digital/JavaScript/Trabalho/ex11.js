/*Para entrar em uma montanha-russa, uma pessoa precisa ter mais de 1.60m de altura **e**
pesar menos de 100kg. Existe uma exceção para quem tem o passe "VIP": essas pessoas
podem entrar se tiverem mais de 1.55m de altura, independentemente do peso. Peça a
altura, o peso e o tipo de passe ("comum" ou "vip") do usuário e diga se o "Acesso liberado"
ou "Acesso negado".*/
const prompt = require('prompt-sync')();

const alt = Number(prompt("Digite a altura(m): "))
const pes = Number(prompt("Digite o peso: "))
const vip = prompt("Você tem vip? ")

if(alt > 1.60 && pes < 100 || (alt > 1.55 && vip == "sim")){
    console.log("Acesso liberado")
}else{
    console.log("Acesso negado")
}