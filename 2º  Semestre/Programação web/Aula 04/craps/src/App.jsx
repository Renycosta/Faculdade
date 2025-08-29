import { useState } from 'react'
import './App.css'

function App() {
  const [dado1, setDado1] = useState("dado")
  const [dado2, setDado2] = useState("dado")
  const [pontos, setPontos] = useState(0)
  const [resultado, setResultado] = useState("")
  const [jogoEncerrado, setJogoEncerrado] = useState(false)
  const [regraVitoria, setRegraVitoria] = useState("7 ou 11 pontos: Você Vence")
  const [regraDerrota, setRegraDerrota] = useState("2, 3 ou 12 pontos: Você Perde")
  const [pontoAlvo, setPontoAlvo] = useState(0)

  function jogar() {
    
    const num1 = Math.ceil(Math.random()*6)
    const num2 = Math.ceil(Math.random()*6)
    const soma = num1 + num2

    setDado1(`dado${num1}`)
    setDado2(`dado${num2}`)

    if (pontos == 0) {
      if (soma == 7 || soma == 11) {
        setResultado("Parabéns! Você Venceu!") 
        setJogoEncerrado(true)       
      } else if (soma == 2 || soma == 3 || soma == 12) {
        setResultado("Que Azar! Você Perdeu!")        
        setJogoEncerrado(true)       
      } else {
        setResultado("Segue o Jogo...")
        setRegraVitoria(`Agora ${soma} pontos: Você Vence`)        
        setRegraDerrota(`7 pontos: Você Perde`)        
        setPontoAlvo(soma)
      }
    } else {
      if (soma == pontoAlvo) {
        setResultado("Parabéns! Você Venceu!")        
        setJogoEncerrado(true)       
      } else if (soma == 7) {
        setResultado("Que Azar! Você Perdeu!")        
        setJogoEncerrado(true)       
      }      
    }

    setPontos(soma)
  }

function novoJogo(){
  setDado1("dado")
  setDado2("dado")
  setPontos(0)
  setResultado("")
  setJogoEncerrado(false)
  setRegraVitoria("7 ou 11 pontos: Você Vence")
  setRegraDerrota("2, 3 ou 12 pontos: Você Perde")
  setPontoAlvo(0) 
}

  return (
    <>
      <div className='colunas'>
        <img src="./craps.png" alt="Logo Craps" className='logo1' />
        <h1 className='txt-titulo'>Craps Game</h1>
        <img src="./craps2.jpg" alt="Foto Jogadores" className='logo2' />
      </div>
      <hr className='linha' />

      <div className='colunas'>
        <img src={`${dado1}.png`} alt="1º Dado" className='img-dado' />

        <img src={`${dado2}.png`} alt="2º Dado" className='img-dado' />

        {pontos > 0 &&
          <span className='txt-pontos'>{pontos} pontos!</span>
        }
      </div>

      <br />
      <div className='colunas'>
        <button className='btn' disabled={jogoEncerrado}
          onClick={jogar}>Jogar os Dados!</button>
        {resultado &&
          <span className='txt-resultado'>{resultado}</span>
        }
        {jogoEncerrado &&
        <button className='btn' style={{backgroundColor: 'rgba(73, 10 ,73)'}} onClick={novoJogo}>Novo Jogo</button>
        }
      </div>

      <h3 className='regras'>Regras:</h3>
      <h4 className='regras-linhas'>{regraVitoria}</h4>
      <h4 className='regras-linhas'>{regraDerrota}</h4>
      <h4 className='regras-linhas'>Outro valor: Jogo Continua</h4>

      {pontoAlvo > 0 &&
        <h2 className='alvo'>------------- Ponto alvo: {pontoAlvo} --------------</h2>
      }
    </>
  )
}

export default App
