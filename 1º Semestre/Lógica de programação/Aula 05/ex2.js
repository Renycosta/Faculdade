const prompt = require("prompt-sync")()

const num = prompt("Digite um número: ")
const raiz = Math.sqrt(num)

if(raiz == raiz.toFixed(1)){
    console.log(`${num} Possui raiz exata, que é ${raiz}`)
} else{
    console.log(`${num} Não possui raiz exata`)
}