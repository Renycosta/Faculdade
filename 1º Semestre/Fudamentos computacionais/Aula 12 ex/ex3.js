const prompt = require("prompt-sync")()

const rad = Number(prompt("Radiação:"))

if(rad < 0.35){
    console.log("Aceitavel")
}else if(rad >= 0.35 && rad < 0.45){
    console.log("O primeiro grupo foi avisado")
}else if(rad >= 0.35 && rad < 0.6){
    console.log("O primeiro e o segundo grupo foram avisados")
}else{
    console.log("O primeiro, o segundo e o terceiro grupo foram avisados")
}