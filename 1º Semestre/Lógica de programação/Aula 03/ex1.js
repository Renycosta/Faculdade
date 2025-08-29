const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const preço = Number(prompt("Preço R$: ")) 

const valor = Math.floor(preço) * 2

console.log(`Promoção de ${produto}, na compra de 2 unidades, o total é R${valor}`)
/*.toFixed(?), diminui a quantidade de casas decimais que vai aparecer.*/