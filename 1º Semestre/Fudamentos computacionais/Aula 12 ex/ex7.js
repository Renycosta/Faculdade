const prompt = require("prompt-sync")()

const n1 = Number(prompt("Número 1:"))

let x = n1
x += 10
console.log("some 10 com +=", x)

x = n1
x -= 2
console.log("subtraia 2 com -=", x)

x = n1
x *= 3
console.log("multiplique por 3 com *=", x)

x = n1
x /= 2
console.log("divida por 2 com /=", x)