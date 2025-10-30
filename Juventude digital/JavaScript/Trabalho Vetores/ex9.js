/*Busca de elemento 
Crie um vetor com nomes de alunos e verifique se um nome específico  existe no vetor (use includes()). */
const prompt = require("prompt-sync")()

let nomes = ["reny", "pedro", "angelo", "alvaro", "felipe"]

const nome = prompt("Digite o nome: ")

if(nomes.includes(nome)){
    console.log(`O nome ${nome} está presente no vetor`)
}else{
    console.log(`O nome ${nome} não está presente no vetor`)
}