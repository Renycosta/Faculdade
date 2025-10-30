/*Peça o salário de um funcionário. Com base no valor, informe a alíquota de imposto:
- Salário até R$ 2.000,00: "Isento de imposto".
- Salário de R$ 2.000,01 a R$ 3.500,00: "Alíquota de 15%".
- Salário de R$ 3.500,01 a R$ 5.000,00: "Alíquota de 22%".
- Salário acima de R$ 5.000,00: "Alíquota de 27%".*/

const prompt = require('prompt-sync')();

const sal = Number(prompt("Digite seu salário: "))

if(sal <= 200000){
    console.log("Isento de imposto")
}else if(sal >= 200001 && sal < 350000){
    console.log("Alíquota de 15%")
}else if(sal >= 350001 && sal < 500000){
    console.log("Alíquota de 22%")
}else{
    console.log("Alíquota de 27%")
}