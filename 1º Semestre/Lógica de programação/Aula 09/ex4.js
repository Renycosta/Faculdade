const prompt = require("prompt-sync")()

const clube = []
let contador = 0

do{
    contador = contador + 1
    const x = prompt("Digite o nome de um clube")
    
    clube.push(x)

}while (contador <= 10)

for (let i = 0; i < clube.length; i= i + 2)
    console.log(`${clube[i]} x ${clube[i+1]}`)