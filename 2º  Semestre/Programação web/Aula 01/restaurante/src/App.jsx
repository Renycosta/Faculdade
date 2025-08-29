import { useState } from 'react'
import './App.css'

function App() {
  const [mesas, setMesas] = useState(10)

  function entrada(){
    //alert("Cliente Entrou")
    if(mesas == 0){
      alert("Todas as mesas estão cupadas. Por favor, aguarde")
      return
    }
    const num = mesas - 1
    setMesas(num)
  }

  function saida(){
    //alert("Cliente Saiu")
    if(mesas == 10){
      alert("Não há mesas ocupadas...")
      return
    }
    const num = mesas + 1
    setMesas(num)
  }

  return (
    <>
      <h1 className='vermelho'>Resturante Avenida</h1>
      <h2>Controle de Mesas Ocupadas</h2>
      <img src="./images.jpg" alt="" />
      <h2>Mesas Disponíveis: {mesas} - Mesas Ocupadas: {10-mesas}</h2>
      <button onClick={entrada}>Entrada de Cliente</button>
      <button onClick={saida}>Saída de Cliente</button>
    </>
  )
}

export default App
