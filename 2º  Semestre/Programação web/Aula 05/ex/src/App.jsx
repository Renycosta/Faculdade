import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, reset } = useForm()
  const [resposta, setResposta] = useState("")
  const [situacao, setSituacao] = useState("")

  function info(data){
    const nome = data.nome
    const divida = data.divida
    const salario = Number(data.salario)
    const cliente = data.cliente
    const bens1 = data.bens1
    const bens2 = data.bens2

    let calculo = 0
    let acrescimo = 0
    if(divida == "sim" && cliente == "5" && bens1 == false && bens2 == false){
      setResposta(`${nome} seu Empréstimo Não Autorizado`)
      setSituacao("vermelho")
    }else if(divida == "nao" && cliente == "10" && bens1 == true && bens2 == true){
      calculo = salario / 6
      acrescimo = salario * 1.20
      setResposta(`${nome} seu Empréstimo foi Pré-Aprovado de 6x R$${calculo} e parcelamento com 20% de acrescimo R$${acrescimo}`)
      setSituacao("verde")
    }else{
      calculo = salario / 3
      setResposta(`${nome} Venha conversar com nosso gerente! Empréstimo possível de R$${calculo}`)
      setSituacao("amarelo")
    }
  } 

  function limpar() {
    setResposta("")
    setSituacao("")
    reset({
      nome: "",
      divida: false,
      salario: false,
      cliente: "",
      bens1: false,
      bens2: false
    })
  }

  return (
    <>
     <h1>Banco Avenida</h1>
     <h2>App: Controle de Empréstimos</h2>
     <form onSubmit={handleSubmit(info)} onReset={limpar}>
        <p>
          <label htmlFor="nome">Nome do Cliente:</label>
          <input type="text" required className='campos' {...register("nome")}/>
        </p>
        <p>
          <label htmlFor="divida">Possui dívida ativa:</label>
          <input type="radio" id="divida" required {...register("divida")} value="sim"/>Sim
          <input type="radio" id="divida" required {...register("divida")} value="nao"/>Não
        </p>
        <p>
          <label htmlFor="salario">Salário R$:</label>
          <input type="text" required className='campos' {...register("salario")}/>
        </p>
        <p>
          <label htmlFor="cliente">Cliente do Banco:</label>
          <select id="cliente" {...register("cliente")}>
            <option id="5" value="5">Menos de 5 anos</option>
            <option id="10" value="10">Mais de 10 anos</option>
          </select>
        </p>
        <p>
          <label htmlFor="bens">Bens em seu nome:</label>
          <input type="checkbox" id="casa" {...register("bens1")}/> Casa/Apto
          <input type="checkbox" id="veiculo" {...register("bens2")}/> Veículo
        </p>
        <p>
          <input type="submit" value="Verificar Empréstimo" className='btn submit'/>
          <input type="reset" value="Limpar Dados" className='btn reset'/>
        </p>
     </form>
     <h2 className={`${situacao}`}>{resposta}</h2>
    </>
  )
}

export default App
