/*Peça os comprimentos dos três lados de um triângulo. Primeiro, verifique se os valores
informados podem formar um triângulo (a soma de quaisquer dois lados deve ser maior que
o terceiro lado). Se puderem, classifique o triângulo como:
- Equilátero: Todos os lados iguais.
- Isósceles: Dois lados iguais.
- Escaleno: Todos os lados diferentes.
Se não puderem formar um triângulo, informe o usuário.*/
const prompt = require('prompt-sync')();

const a = Number(prompt("Digite o 1º Lado: "))
const b = Number(prompt("Digite o 2º Lado: "))
const c = Number(prompt("Digite o 3º Lado: "))

if(a > b && a > c || (b > a && b > c) || (c > a && c > b)){
    console.log("Os valores informados não podem formar um triângulo")
}else if(a == b && b == c && a == c){
    console.log("Equilátero: Todos os lados iguais")
}else if(a == b || b == c || a == c){
    console.log("Isósceles: Dois lados iguais")
}else{
    console.log("Escaleno: Todos os lados diferentes")
}