import { useState } from 'react'
import './App.css'

function App() {
  const [figura, setFigura] = useState("")
  const [figuraPC, setFiguraPC] = useState("")
  const [mensa, setMensa] = useState("")

  // function mostraPedra() {
  //   setFigura("pedra")
  // }

  function mostraFigura(aposta) {
    if (figuraPC != "") {
      alert("Erro... Selecione jogar novamente...")
      return
    }
    setFigura(aposta)
  }

  function desafiarPC() {
    if (figura == "") {
      alert("Erro... Você precisa selecionar a figura")
      return
    }
    const num = Math.ceil(Math.random()*3)
    let figuraSorteada

    if (num == 1) {
      figuraSorteada = "pedra"
    } else if (num == 2) {
      figuraSorteada = "papel"
    } else {
      figuraSorteada = "tesoura"
    }
    setFiguraPC(figuraSorteada)

    if (figura == figuraSorteada) {
      setMensa("Ah... Deu Empate! Jogue Novamente!")
    } else if ((figura == "pedra" && figuraSorteada == "tesoura") ||
               (figura == "papel" && figuraSorteada == "pedra") ||
               (figura == "tesoura" && figuraSorteada == "papel")) {
      setMensa("Show! Você Venceu! Parabéns!")
    } else {
      setMensa("Xi... Deu ruim! Você perdeu!")
    }
  }

  return (
    <>
      <h1 className='vermelho'>Jogo: Pedra, Papel ou Tesoura</h1>
      <hr />
      <h2 className='verde'>Clique sobre a imagem para fazer a sua aposta</h2>
      <img src="pedra.png" alt="Pedra" 
           className='img-pequena ponteiro' 
           onClick={() => mostraFigura('pedra')} />
      <img src="papel.png" alt="Papel" 
           className='img-pequena ponteiro' 
           onClick={() => mostraFigura('papel')} />
      <img src="tesoura.png" alt="Tesoura" 
           className='img-pequena ponteiro' 
           onClick={() => mostraFigura('tesoura')} />

      {figura &&
        <>
          <span className='verde texto-grande'>Sua aposta é:</span>
          <img src={`${figura}.png`} alt={`Imagem de ${figura}`} className='img-grande' />
        </>
      }

      <h2 className='azul'>
        Clique em 'Desafiar PC' para gerar a escolha do PC e 
        ver o Resultado 
        <button className='btn' onClick={desafiarPC}>Desafiar PC</button>
      </h2>

      <img src="pedra.png" alt="Pedra" 
           className='img-pequena' />
      <img src="papel.png" alt="Papel" 
           className='img-pequena' />
      <img src="tesoura.png" alt="Tesoura" 
           className='img-pequena' />

      {figuraPC &&
        <>
          <span className='vermelho texto-grande'>Aposta do Computador:</span>
          <img src={`${figuraPC}.png`} 
               alt={`Imagem de ${figuraPC}`} 
               className='img-grande' />
        </>
      }

      <h2 className='azul'>{mensa}</h2>
    </>
  )
}

export default App
