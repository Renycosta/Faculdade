//Informar quantas vezes vai se repetir a palavra banana
const prompt = require("prompt-sync")()

const rep = Number(prompt("Digite quantas vezes vai se repetir a palavra"))

let i  = 0

while(i < rep){
    console.log("Banana")
    i++
}