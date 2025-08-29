import { useState } from 'react'
import './App.css'

function App() {
  const [residencia, setResidencia] = useState("")

  function apartamento(){
    setResidencia("Você selecionou: Apartamento")
  }

  function casa(){
    setResidencia("Você selecionou: Casa")
  }

  return (
    <>
      <h1>Imobiliária Avenida</h1>
      <h2>Qual tipo de imóvel você procura</h2>
      <hr />
      <img src="casa.jpg" alt="casa" onClick={casa}/>
      <img src="apartamento.jpg" alt="apartamento" onClick={apartamento}/>
      <h2>{residencia}</h2>
    </>
  )
}

export default App
