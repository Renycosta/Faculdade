//Enquanto digitar banana, o sistema segue rodando
const prompt = require("prompt-sync")()

let banana = "banana"

while(banana == "banana"){
    banana = prompt("Digite: ")
}
console.log("Parabéns")