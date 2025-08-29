const prompt = require("prompt-sync")()

const saque = []

console.log("Informe o valor do saque ou 0 para sair")
console.log("-".repeat(30))

let val = 0
let total = 0
do{
    const x = Number(prompt("Saque R$: "))

    val = x / 10 

        if(x == 0){
        break
    }

    if(val == val.toFixed(0)){
        console.log("Ok, saque válido")
        saque.push(x)
        total = total + x
    }else{
        console.log("Inválido...")
    }
}while(true)
    
    console.log("\nSaques Válidos")
    console.log("-".repeat(30))

    for(let i = 0; i < saque.length; i++){
        console.log(`R$ ${saque[i]}`)
    }
    console.log(`Total R$ ${total}`)