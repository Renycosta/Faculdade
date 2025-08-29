import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit } = useForm()
  const [ resposta1, setResposta1 ] = useState("")
  const [ resposta2, setResposta2 ] = useState("")

  function calculaPeso(data){
    const nome = data.nome
    const peso = Number(data.peso)

    const valor = (peso / 1000) * 90

    setResposta1(`Estimado cliente: ${nome} - Peso; ${peso}`)
    setResposta2(`Valor a Pagar R$: ${valor.toLocaleString("pt-br", {minimumFractionDigits: 2})}`)
  }

  return (
    <>
      <img src="./buffet.jpg" alt="Buffet" />
      <h1>Restaurante e Buffet Avenida</h1>
      <h2>Cálculo do Valor das Refeições</h2>
      <hr />
      <form onSubmit={handleSubmit(calculaPeso)}>
        <p>
          <label htmlFor="nome">Nome do cliente: </label>
          <input type="text" required className='campos' {...register("nome")}/>
        </p>
        <p>
          <label htmlFor="peso">Peso do prato (gr): </label>
          <input type="number" required className='campos' {...register("peso")}/>
        </p>
        <p>
          <input type="submit" value="Calcular" className='btn submit'/>
          <input type="reset" value="Limpar" className='btn reset'/>
        </p>
      </form>
      <h2>{resposta1}</h2>
      <h2>{resposta2}</h2>
    </>
  )
}

export default App
