/*Crie um programa que ajude um motorista a decidir se é mais vantajoso abastecer com
álcool ou gasolina. Sabe-se que o álcool é vantajoso somente quando o seu preço por litro é
menor ou igual a 70% do preço do litro da gasolina. Peça ao usuário o preço do litro do
álcool e o preço do litro da gasolina e, com base nisso, exiba a recomendação: "Abasteça com
Álcool" ou "Abasteça com Gasolina".*/
const prompt = require('prompt-sync')();

const alc = Number(prompt("Preço por litro Álcool: "))
const gas = Number(prompt("Preço por litro Gasolina: "))

const total = 0.70 * gas

if(alc <= total){
    console.log("Abasteça com Álcool")
}else{
    console.log("Abasteça com Gasolina")
}