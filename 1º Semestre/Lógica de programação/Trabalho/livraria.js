const prompt = require("prompt-sync")()
const fs = require("fs")

const livros = []
const categorias = []
const generos = []
const valores = []
const fotos = []

function titulo(texto){
    console.log()
    console.log(texto.toUpperCase())
    console.log("=".repeat(40))
    console.log()
}

function adicao() {
    titulo("Inclusão na livraria")    
    
    // lê as variáveis
    const livro        = prompt("Nome do livro.: ")
    const categoria    = prompt("Categoria.....: ")
    const genero       = prompt("Gênero........: ")
    const valor = Number(prompt("Valor R$......: "))
    const foto         = prompt("URL da Foto...: ")

    // acrescenta aos vetores
    livros.push(livro)
    categorias.push(categoria)
    generos.push(genero)
    valores.push(valor)
    fotos.push(foto)

    // mensagem
    console.log("Ok! Item cadastrado com sucesso")
}

function listagem() {
    titulo("Lista de livros da livraria")
    
    console.log("Nº Nome...............: Categoria: Gênero......: Preço R$")
    console.log("---------------------------------------------------------")
    
    for (let i = 0; i < livros.length; i++) {
        console.log(`${String(i+1).padStart(2).padEnd(3)}${livros[i].padEnd(20)} ${categorias[i].padEnd(10)} ${generos[i].padEnd(12)} ${valores[i].toFixed(2).padStart(8)}`)
    }

    console.log("---------------------------------------------------------")
}

function pesquisaGenero() {
    titulo("Pesquisa de produtos por Gênero")

    const genero = prompt("Genero: ").toUpperCase()

    console.log("Nome...............: Categoria: Preço R$")
    console.log("----------------------------------------")

    let existe = 0
    
    for (let i = 0; i < livros.length; i++) {
        if (generos[i].toUpperCase() == genero){
            console.log(`${livros[i].padEnd(20)} ${categorias[i].padEnd(5)} ${valores[i].toFixed(2).padStart(11)}`)
            existe = existe + 1
        }
    }

    if(existe == 0){
        console.log("* Obs.:Não há livros desse gênero")
    }

    console.log("----------------------------------------")
}

function pesquisaPreco() {
    titulo("Pesquisa de produtos por intervalo de preço")

    const preco = prompt("preco R$: ").toUpperCase()

    console.log("Nome...............: Categoria: Gênero.....:")
    console.log("--------------------------------------------")

    let existe = 0

    for (let i = 0; i < livros.length; i++) {
        if (valores[i] == preco){
            console.log(`${livros[i].padEnd(20)} ${categorias[i].padEnd(10)} ${generos[i].padEnd(9)}`)
            existe = existe + 1
        }
    }

    if(existe == 0){
        console.log("* Obs.:Não há produtos desta categoria")
    }

    console.log("----------------------------------------")
}

function siteWeb() {
    titulo("Site web")

    let conteudo = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Livraria-Black-cat</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <style>
        *{
            padding: 0px;
            margin: 0px;
        }
        body{
            background-color: #0E0E0E;
        }
        .livraria{
            font-family: "Roboto", sans-serif;  
            text-align: center;
            font-weight: 900;
            color: white;
            font-size: 45px;
            padding-top: 10px;
            padding-bottom: 35px;
        }
        .div{
            display: flex;
            padding-bottom: 100px;
        }
        .img{
            max-height: 500px;
            min-width: 500px;
            padding: 0px 70px;
        }
        .nome{
            font-family: "Roboto", sans-serif;  
            font-weight: 700;
            color: white;
            font-size: 33px;
            padding-bottom: 5px;
        }
        .lorem{
            font-family: "Roboto", sans-serif;  
            color: #828282;
            font-size: 20px;
            padding-bottom: 20px;
        }
        .Cat-Gen{
            font-family: "Roboto", sans-serif;  
            color: white;
            font-size: 16px;
            font-weight: 500;
            padding-bottom: 5px;
            text-transform: uppercase;
        }
        .estrela{
            max-height: 30px;
            padding: 20px 0px;
        }
        .valor{
            font-family: "Roboto", sans-serif;  
            font-weight: 700;
            color: white;
            font-size: 44px;
        }
        .juros{
            font-family: "Roboto", sans-serif;  
            color: white;
            font-size: 20px;
            padding-bottom: 30px;
        }
        .amarelo{
            color: #F8C146;
        }
        .botao{
            background-color: red;
            border-radius: 5px;
            border: 0px;
            height: 60px;
            width: 450px;
            justify-content: center;
        }
        .botao:hover{
            background-color: darkred;
            cursor: pointer;
        }
        .botao a{
            color: white;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 18px;
        }
        .infos{
            font-family: "Roboto", sans-serif;  
            color: #FFC105;
            font-size: 16px;
            padding-top: 30px;
        }
    </style>
</head>
<body>
    <h1 class="livraria">Livraria - Black cat <br>Lista de produtos</h1>
    `
    let contador = 0
    for (let i = 0; i < livros.length; i++){
        contador = contador + 1
        if (contador % 2 == 1){
            conteudo += `
            <div class="div">
            <img src="${fotos[i]}" alt="" class="img">
            <div class="texto">
            <h2 class="nome">${livros[i]}</h2>
            <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae ut est esse nulla, sed maiores, natus ipsa dignissimos vel at commodi tempore quibusdam veritatis ullam! Voluptatem neque magni ratione.</p>
            <p class="Cat-Gen">${categorias[i]} : ${generos[i]}</p>
            <img src="Estrelas.png" alt="estrelas notas" class="estrela">
            <p class="valor">R$ ${valores[i].toLocaleString("pt-br", {minimumFractionDigits: 2})}</p>
            <p class="juros">ou <span class="amarelo">4x</span> de <span class="amarelo">R$ ${(valores[i]/4).toLocaleString("pt-br", {minimumFractionDigits: 2})}</span> sem juros no PIX</p>
            <button class="botao"><a href="#">comprar</a></button>
            <p class="infos">+ Infos</p>
            </div>
            </div>
            `
        } else{
             conteudo += `
            <div class="div">
            <div class="texto" style="padding-left:70px">
            <h2 class="nome">${livros[i]}</h2>
            <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae ut est esse nulla, sed maiores, natus ipsa dignissimos vel at commodi tempore quibusdam veritatis ullam! Voluptatem neque magni ratione.</p>
            <p class="Cat-Gen">${categorias[i]} : ${generos[i]}</p>
            <img src="Estrelas.png" alt="estrelas notas" class="estrela">
            <p class="valor">R$ ${valores[i].toLocaleString("pt-br", {minimumFractionDigits: 2})}</p>
            <p class="juros">ou <span class="amarelo">4x</span> de <span class="amarelo">R$ ${(valores[i]/4).toLocaleString("pt-br", {minimumFractionDigits: 2})}</span> sem juros no PIX</p>
            <button class="botao"><a href="#">comprar</a></button>
            <p class="infos">+ Infos</p>
            </div>
            <img src="${fotos[i]}" alt="" class="img">
            </div>
            `
        }
    }

    conteudo +=
    `
</body>
</html>
    `

    fs.writeFileSync("cardapio.html", conteudo)
    console.log("Cardápio gerado com sucesso. Acesse: file:///C:/Users/Reny/Desktop/Faculdade/L%C3%B3gica%20de%20programa%C3%A7%C3%A3o/Trabalho/cardapio.html")
}

function siteWebGenero() {
    titulo("Site web Gênero")

    const genero1 = prompt("Genero: ").toUpperCase()

let conteudo = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Livraria-Black-cat</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <style>
        *{
            padding: 0px;
            margin: 0px;
        }
        body{
            background-color: #0E0E0E;
        }
        .livraria{
            font-family: "Roboto", sans-serif;  
            text-align: center;
            font-weight: 900;
            color: white;
            font-size: 45px;
            padding-top: 10px;
            padding-bottom: 35px;
        }
        .destaque{
            color: #FFC105;
            text-transform: uppercase;
        }
        .div{
            display: flex;
            padding-bottom: 100px;
        }
        .img{
            max-height: 500px;
            min-width: 500px;
            padding: 0px 70px;
        }
        .nome{
            font-family: "Roboto", sans-serif;  
            font-weight: 700;
            color: white;
            font-size: 33px;
            padding-bottom: 5px;
        }
        .lorem{
            font-family: "Roboto", sans-serif;  
            color: #828282;
            font-size: 20px;
            padding-bottom: 20px;
        }
        .Cat-Gen{
            font-family: "Roboto", sans-serif;  
            color: white;
            font-size: 16px;
            font-weight: 500;
            padding-bottom: 5px;
            text-transform: uppercase;
        }
        .estrela{
            max-height: 30px;
            padding: 20px 0px;
        }
        .valor{
            font-family: "Roboto", sans-serif;  
            font-weight: 700;
            color: white;
            font-size: 44px;
        }
        .juros{
            font-family: "Roboto", sans-serif;  
            color: white;
            font-size: 20px;
            padding-bottom: 30px;
        }
        .amarelo{
            color: #F8C146;
        }
        .botao{
            background-color: red;
            border-radius: 5px;
            border: 0px;
            height: 60px;
            width: 450px;
            justify-content: center;
        }
        .botao:hover{
            background-color: darkred;
            cursor: pointer;
        }
        .botao a{
            color: white;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 18px;
        }
        .infos{
            font-family: "Roboto", sans-serif;  
            color: #FFC105;
            font-size: 16px;
            padding-top: 30px;
        }
    </style>
</head>
<body>
    <h1 class="livraria">Livraria - Black cat <br><span class="destaque">${genero1}</span></h1>
    `
    let contador = 0
    for (let i = 0; i < livros.length; i++){
        if (generos[i].toUpperCase() == genero1){
        contador = contador + 1
        if (contador % 2 == 1){
            conteudo += `
            <div class="div">
            <img src="${fotos[i]}" alt="" class="img">
            <div class="texto">
            <h2 class="nome">${livros[i]}</h2>
            <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae ut est esse nulla, sed maiores, natus ipsa dignissimos vel at commodi tempore quibusdam veritatis ullam! Voluptatem neque magni ratione.</p>
            <p class="Cat-Gen">${categorias[i]}</p>
            <img src="Estrelas.png" alt="estrelas notas" class="estrela">
            <p class="valor">R$ ${valores[i].toLocaleString("pt-br", {minimumFractionDigits: 2})}</p>
            <p class="juros">ou <span class="amarelo">4x</span> de <span class="amarelo">R$ ${(valores[i]/4).toLocaleString("pt-br", {minimumFractionDigits: 2})}</span> sem juros no PIX</p>
            <button class="botao"><a href="#">comprar</a></button>
            <p class="infos">+ Infos</p>
            </div>
            </div>
            `
        } else{
             conteudo += `
            <div class="div">
            <div class="texto" style="padding-left:70px">
            <h2 class="nome">${livros[i]}</h2>
            <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae ut est esse nulla, sed maiores, natus ipsa dignissimos vel at commodi tempore quibusdam veritatis ullam! Voluptatem neque magni ratione.</p>
            <p class="Cat-Gen">${categorias[i]}</p>
            <img src="Estrelas.png" alt="estrelas notas" class="estrela">
            <p class="valor">R$ ${valores[i].toLocaleString("pt-br", {minimumFractionDigits: 2})}</p>
            <p class="juros">ou <span class="amarelo">4x</span> de <span class="amarelo">R$ ${(valores[i]/4).toLocaleString("pt-br", {minimumFractionDigits: 2})}</span> sem juros no PIX</p>
            <button class="botao"><a href="#">comprar</a></button>
            <p class="infos">+ Infos</p>
            </div>
            <img src="${fotos[i]}" alt="" class="img">
            </div>
            `
        }
        }
    }

    conteudo +=
    `
</body>
</html>
    `
    fs.writeFileSync("cardapioGen.html", conteudo)
    console.log("Cardápio gerado com sucesso. Acesse: file:///C:/Users/Reny/Desktop/Faculdade/L%C3%B3gica%20de%20programa%C3%A7%C3%A3o/Trabalho/cardapioGen.html")
}

function exclusao() {
    listagem()

    console.log()
    const num = Number(prompt("Qual Nº do Livro que você quer Excluir? (0, para cancelar) "))

    if (num == 0 || num > livros.length){
        console.log("Nenhum livro foi excluído...")
        return
    }

    //exclui os elementos do vetor
    livros.splice(num-1, 1)
    categorias.splice(num-1, 1)
    generos.splice(num-1, 1)
    valores.splice(num-1, 1)
    fotos.splice(num-1, 1)

    console.log("Ok. Livro removido com sucesso")
}

function alteracao() {
    listagem()

    console.log()
    const num1 = Number(prompt("Qual Nº do Livro que você quer alterar o preço? (0, para cancelar) "))

    if (num1 == 0 || num1 > livros.length){
        console.log("Nenhum livro teve o valor alterado...")
        return
    }

    const novoval = Number(prompt(`Informe o novo valor de ${livros[num1 - 1]}: `))

    if (novoval <= 0){
        console.log("O valor informado é invalido")
        return
    }else{
        valores[num1 - 1] = novoval
        console.log("Ok. valor alterado com sucesso")
    }



}

// Salvar dados em um arquivo
function gravaLivros() {
    const produtos = []

    for (let i = 0; i < livros.length; i++) {
        produtos.push(livros[i]+";"+categorias[i]+";"+generos[i]+";"+valores[i]+";"+fotos[i])
    }

    // salva os dados em um arquivo de texto
    fs.writeFileSync("livros.txt", produtos.join("\n"))
    
    console.log("Ok! Lista de livros salvos com sucesso")
}

// Função que carrega a lista de produtos salva no arquivo
function carregaLivros(){
    if (fs.existsSync("livros.txt")) {
        // lê os dados e atribui para um vetor, separado por \n 
        const produtos = fs.readFileSync("livros.txt", "utf-8").split("\n")

        // percorre todas as linhas e divide os elementos para os vetores corretos
        for (let i = 0; i < produtos.length; i++){
            const partes = produtos[i].split(";")

            livros.push(partes[0])
            categorias.push(partes[1])
            generos.push(partes[2])
            valores.push(Number(partes[3]))
            fotos.push(partes[4])
        }
    }

}

// Carrega a lista de livros
carregaLivros()

menuPrincipal:
do {
   titulo("Livraria - Black cat")
   console.log("-".repeat(40))
   console.log("1. Adicionar livro") //Pronto
   console.log("2. Listagem de livros") //Pronto
   console.log("3. Pesquisa por Gênero") //Pronto
   console.log("4. Pesquisa por Intervalo de Preço") //Pronto
   console.log("5. Site Web") //Pronto
   console.log("6. Site Web por Gênero") //Pronto
   console.log("7. Alterar Preço") //Pronto
   console.log("8. Excluir livro da livraria") //Pronto
   console.log("9. Finalizar") //Pronto
   const opcao = Number(prompt("Opção: "))

    switch (opcao) {
        case 1: {
            adicao()
            break
        }    
        case 2: {
            listagem()
            break        
        }    
        case 3: {
            pesquisaGenero()
            break        
        }    
        case 4: {
            pesquisaPreco()
            break        
        }    
        case 5: {
            siteWeb()
            break        
        }    
        case 6: {
            siteWebGenero()
            break        
        }    
        case 7: {
            alteracao()
            break        
        }    
        case 8: {
            exclusao()
            break        
        }    
        default: {
            break menuPrincipal           
        }
    }
} while (true)

gravaLivros()

console.log("-".repeat(40))
console.log("Fim do Programa...")