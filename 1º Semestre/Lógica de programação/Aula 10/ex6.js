const prompt = require("prompt-sync")()

const num = []

console.log("Digite 5 números e direi se está em ordem crescente ou não")
console.log("-".repeat(30))

let contador = 0
let crescente = 0
let resultado = 0
do{
    contador = contador + 1
    const x = prompt(`${contador}º número: `)

    num.push(x)

/*  if(num > crescente){
        crescente = num
        resultado = 1
    }else {
        resultado = 2 
    } */

}while(contador < 5)

    let valor = 0
    for(let i = 0; i < num.length; i++){
        valor = num.toString(i)
    }
        console.log(`Números informados: ${valor}`)

    if(num == "1,2,3,4,5"){
        console.log(`A ordem é crescente`)
    }else{
        console.log(`A ordem não é crescente`)
    }
/*     if(resultado == 1){
        console.log(`A ordem é crescente`)
    }else{
        console.log(`A ordem não é crescente`)
    } */