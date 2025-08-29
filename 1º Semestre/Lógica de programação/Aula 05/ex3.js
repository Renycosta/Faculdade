const prompt = require("prompt-sync")()

const l1 = Number(prompt("Digite um número: "))
const l2 = Number(prompt("Digite mais um número: "))
const l3 = Number(prompt("Digite outro número: "))

if (l1 > l2 + l3 || l2 > l1 + l3 || l3 > l1 + l3) {
    console.log("Não é possivel formar um triângulo")
} else {
    console.log("É possivel formar um triângulo")

    if (l1 == l2 && l1 == l3) {
        console.log("Lados podem formar um triângulo tipo: Equilátero")
    } else if (l1 == l2 || l1 == l3 || l2 == l3) {
        console.log("Lados podem formar um triângulo tipo: Isósceles")
    } else {
        console.log(
        "Lados podem formar um triângulo tipo: Escaleno")
    }
}