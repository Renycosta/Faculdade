/* Escreva um algoritmo que use uma estrutura de repetição para simular a rega diária por 7 dias. A cada iteração(dia), o programa deve imprimir na tela uma confirmação da tarefa, como por exemplo: A plata foi regada no dia 1*/
const prompt = require("prompt-sync")();

let i = 0

while(i < 7){
    i = i + 1
    console.log(`A plata foi regada no dia ${i}`)
}