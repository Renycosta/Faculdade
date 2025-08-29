const prompt = require("prompt-sync")()

let x = 0;

x = 2;
x = x * 3;
console.log(`Atribuição de Multiplicação: x = 2; x = x * 3; =>`, x)

x = 2;
x *= 3;
console.log(`Atribuição de Multiplicação: x = 2; x *= 3; =>`, x)