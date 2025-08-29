const prompt = require("prompt-sync")()

const n1 = Number(prompt("Número 1:"))
const n2 = (prompt("Número 2:"))

console.log("São iguais com ==", n1 == n2)
console.log("São iguais com ===", n1 === n2)
console.log("Isso ocorreu porque o número 2 é uma string por isso o === deu false")