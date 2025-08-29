const prompt = require('prompt-sync')()

const val = Number(prompt("Qual o valor da compra R$: "))
const premium = prompt("O cliente é Premium (S/N): ")

if(val > 200 || premium == "S"){
    console.log("você tem o direito ao frente gratis")
}else{
    console.log("Você não tem o direito ao frete gratis")
}