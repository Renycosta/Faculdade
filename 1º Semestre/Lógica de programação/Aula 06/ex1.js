const prompt = require("prompt-sync")()

const mês = prompt("Qual o valor da mensalidade? ")
const pix = prompt("Vai pagar por pix? ")

const valor = mês * 12

if (pix == "sim"){
    const des = valor * 0.20
    const total = valor - des
    console.log(`Total por pix R$${total}`)
} else {
    console.log(`Total por ano R$${valor}`)
}

/*
const prompt = require("prompt-sync")()

const mês = prompt("Qual o valor da mensalidade? ")

const valor = mês * 12

const des = valor * 0.20
const pix = valor - des

console.log(`Total por pix R$${pix}`)
console.log(`Total por ano R$${valor}`) */