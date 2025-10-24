import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const { register, watch } = useForm({

  })

  const filme = watch("filme")
  const ingresso = watch("ingresso")
  const grande = watch("grande")
  const familia = watch("familia")

  function preco(){
    let preco
    if(ingresso == "1"){
      preco = 5
    }else if(ingresso == "2"){
      preco = 10
    }else if(ingresso == "3"){
      preco = 15
    }else if(ingresso == "4"){
      preco = 20
    }else{
      preco = 25
    }

    if(grande){
      preco = preco + 10
    }

    if(familia){
      preco = preco + 20
    }

    return preco
  }

  return (
    <>
      <header>
        <img src="./rolo_filme.png" alt="" />
        <div>
          <h1>Cine Pipoca: Sua diversão em família</h1>
          <h2>Venda online de ingressos dos filmes em cartaz</h2>
        </div>
      </header>
      <main>
        <h2>Escolha o filme, nº ingressos e pipoca</h2>
        <img src={`./${filme}.jpg`}/>
        <p>
          <label htmlFor="filme">Título do Filme: </label>
          <select id="" {...register("filme")}>
            <option value="vingadores">Vingadores Guerra infinita</option>
            <option value="minecraft">Minecraft</option>
            <option value="chocolate">A fantastica fabrica de chocolate</option>
            <option value="titanic">Titanic</option>
            <option value="batman">The Batman</option>
            <option value="pikachu">Detetive pikachu</option>
          </select>
        </p>
        <p>
          <label htmlFor="ingresso">Nº de Ingressos: </label>
          <select id="" {...register("ingresso")}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </p>
        <p>
          <label htmlFor="pipoca">Pipoca: </label>

          <input type="checkbox" id="grande" {...register("grande")}/>
          <label htmlFor="grande">Grande</label>

          <input type="checkbox" id="familia" {...register("familia")}/>
          <label htmlFor="familia">Família</label>
        </p>
        <h1>Valor Total R${preco().toLocaleString("pt-br", {minimumFractionDigits: 2})}</h1>
      </main>
    </>
  )
}

export default App
