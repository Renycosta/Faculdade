/*Para aprovar um empréstimo, um cliente precisa ter uma renda mensal superior a R$
2500,00 **e** não pode ter o "nome sujo". Peça ao usuário seu salário e que digite "sim" ou
"nao" para a pergunta "Possui restrição no CPF?". Exiba "Empréstimo aprovado" ou
"Empréstimo negado" com base nas condições.*/
const prompt = require('prompt-sync')();

const ren = Number(prompt("Renda mensal: "))
const nome = prompt("Possui restrição no CPF? ")

if(ren > 2500 && nome == "nao"){
    console.log("Empréstimo aprovado")
}else{
    console.log("Empréstimo negado")
}