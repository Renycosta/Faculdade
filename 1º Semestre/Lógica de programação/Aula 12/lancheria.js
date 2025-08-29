const prompt = require("prompt-sync")()

const lanches = []
const categorias = []
const ingredientes = []
const precos = []
const fotos = []

function inclusao(){
    console.log("Inclusão cardápio")
    console.log("-".repeat(40))

    //Lê as variáveis
    const lanche = prompt("Nome do lanche: ")
    const categoria = prompt("Categoria: ")
    const ingrediente = prompt("Ingredientes: ")
    const preco = Number(prompt("Preço R$: ")).toFixed(2)
    const foto = prompt("Url da foto: ")

    //Acrescenta aos vetores
    lanches.push(lanche)
    categorias.push(categoria)
    ingredientes.push(ingrediente)
    precos.push(preco)
    fotos.push(foto)

    //mensagem
    console.log("Ok! Item cadastro com sucesso")
}

function listagem(){
    console.log("Lista dos Itens do cardápio")
    console.log("-".repeat(40))

    console.log("Nome....................: Categoria..........: Ingredientes........................................: Preco..........:")
    console.log("-".repeat(90))

    for (let i = 0; i < lanches.length; i++){
        console.log(`${lanches[i].padEnd(20)} ${categorias[i].padEnd(10)} ${ingredientes[i].padEnd(40)} 
        ${precos[i].padStart(2)}`) 
    }
    console.log("-".repeat(90))
}

menuPrincipal:
do{
    console.log("Lancheria da avenida")
    console.log("-".repeat(40))
    console.log("1. Inclusão de cardápio")
    console.log("2. Listagem do cardápio")
    console.log("3. Pesquisa por categoria")
    console.log("4. Pesquisa por Intervalo de preço")
    console.log("5. Cardápio web")
    console.log("6. Cardápio web por Categoria")
    console.log("7. Alterar preço")
    console.log("8. Excluir Item do Cardápio")
    console.log("9. Finalizar")
    const opcao = Number(prompt("Opção: "))

    switch (opcao) {
        case 1: {
            inclusao()
            break
        }
        case 2: {
            listagem()
            break
        }
        case 3: {
            pesquisaCategoria()
            break
        }
        case 4: {
            pesquisaPreco()
            break
        }
        case 5: {
            cardapioweb()
            break
        }
        case 6: {
            cardapiowebCategoria()
            break
        }
        case 7: {
            alteracao()
            break
        }
        case 8: {
            exlusao()
            break
        }
        default: {
            break menuPrincipal
        }
    }
}while(true)

console.log("-".repeat(40))
console.log("Fim do programa...")