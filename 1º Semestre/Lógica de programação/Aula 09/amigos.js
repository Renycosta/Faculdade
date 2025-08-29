const prompt = require("prompt-sync")()

console.log("Informe o nome de 5 amigos...")

for (let i = 0; i <= 4; i++){
    amigos[i] = prompt(`${i+1}º amigo: `)
}

console.log(`Seu 1º amigo é ${amigos[0]}`)

console.log("A lista dos seus amigos é:")

for (let i = 0; i <= 4; i++){
    console.log(amigos[i])
}