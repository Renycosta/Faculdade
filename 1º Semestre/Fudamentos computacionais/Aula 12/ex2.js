const prompt = require("prompt-sync")()

let x = 0;

x = 3;
x = x + 4;
console.log(`Atribuição de Adição: x = 3; x = x + 4; =>`, x)


x = 3;
x += 4;
console.log(`Atribuição de Adição: x = 3; x += 4; =>`, x)
