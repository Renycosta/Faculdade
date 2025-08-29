import { useState } from 'react'
import './App.css'

function App() {
  const [cor, setCor] = useState("vermelha")
  const [mensa, setMensa] = useState("Sinal Vermelho: Proibido Passar")

  function trocaSinaleira() {
    if (cor == "vermelha"){
      setCor('verde')
      setMensa('Sinal Verde: Pode passar')
    } else if (cor == "verde"){
      setCor('amarela')
      setMensa('Sinal Amarelo: Atenção... Aguarde')
    } else{
      setCor('vermelha')
      setMensa('Sinal Veermelho: Proibido Passar')
    }
  }


  return (
    <>
      <h1>Aula de trânsito - Escola Avenida</h1>
      <h2>Cores da Sinaleira: Significado</h2>
      <hr />
      <img src={`${cor}.png`} alt="Sinaleira" onClick={trocaSinaleira}/>
      <h3 className={`estilo-${cor}`}>{mensa}</h3>
      <p className='obs'>Obs.: Clique sobre a imagem para trocar o sinal</p>
    </>
  )
}

export default App
