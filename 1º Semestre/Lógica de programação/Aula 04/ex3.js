const prompt = require("prompt-sync")()

const modelo = prompt("Modelo: ")
const marca = prompt("Marca: ")
const preço = Number(prompt("preço R$: "))

if (marca.toUpperCase == "FIAT"){
    const desconto = (10 / 100) * preço
    const vista = preço - desconto
    console.log(`O ${modelo} da marca ${marca}, terá o preço de R$${preço}, mas à vista será R$${vista}`) 
} else{
    const desconto = (20 / 100) * preço
    const vista = preço - desconto
    console.log(`O ${modelo} da marca ${marca}, terá o preço de R$${preço}, mas à vista será R$${vista}`) 
}