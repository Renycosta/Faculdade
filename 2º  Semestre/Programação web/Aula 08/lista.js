const carros = [
    {modelo: "Sandero", preco: 72000},
    {modelo: "Gol", preco: 49500},
    {modelo: "Palio", preco: 52400},
    {modelo: "Kicks", preco: 91800},
]

carros.push({modelo: "Nivus", preco: 89200})

const novo = {modelo: "Passat", preco: 32900}

const carros2 = [...carros, novo]

for (const carro of carros){
    console.log(`${carro.modelo} - R$: ${carro.preco}`)
}

// .map: cria um novo vetor a partir do vetor original
const carros3 = carros.map( carro =>(
    {modelo: carro.modelo.toLocaleUpperCase(), preco: carro.preco}
))

console.log("-".repeat(40))

for (const carro of carros){
    console.log(`${carro.modelo} - R$: ${carro.preco}`)
}