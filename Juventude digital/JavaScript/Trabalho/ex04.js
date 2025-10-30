/*Uma loja oferece um desconto de 10% se o valor da compra for superior a R$ 150,00 **ou**
se o cliente tiver um cupom "DESCONTO10". O desconto só é válido em dias de semana. Peça
o valor da compra, o código do cupom (o usuário pode digitar qualquer coisa) e o dia da
semana. Informe se o cliente tem direito ao desconto ou não.*/ 
const prompt = require('prompt-sync')();

const com = Number(prompt("Qual o valor da compra: "))
const cod = prompt("Código do cupom: ")
const dia = prompt("Hoje é dia de semana? ")

if(com > 150 || (cod == "DESCONTO10" && dia == "Sim")){
    console.log("Você tem direito ao desconto")
}else{
    console.log("Você não tem direito ao desconto")
}