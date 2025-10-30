//Um sistema usa códigos para categorias de produtos. Peça o código: se for `1`, exiba
//"Alimento não-perecível". Se for `2` ou `3`, exiba "Alimento perecível". Se for `4`, exiba
//"Higiene Pessoal". Para qualquer outro código, exiba "Código inválido".
const prompt = require('prompt-sync')();

const cod = Number(prompt("Digite o código: "))

if(cod == 1){
    console.log("Alimento não-perecível")
}else if(cod == 2 || cod  == 3){
    console.log("Alimento perecível")
}else if(cod == 4){
    console.log("Higiene Pessoal")
}else{
    console.log("Código inválido")
}