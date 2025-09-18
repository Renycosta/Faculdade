import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {register, handleSubmit} = useForm()
  const [emprestimo, setEmprestimo] = useState("")
  const [situacao, setSituacao] = useState("")

  function calcularTotal(data){
    const nome = data.nome
    const notas = (Number(data.nota1) + Number(data.nota2)) / 2

    if(notas < 4){
      setTotal(`A media do ${nome} é ${notas} Reprovado`)
      setSituacao("reprovado")
    }else if(notas >= 4 && notas < 6){
      setTotal(`A media do ${nome} é ${notas} em exame`)
      setSituacao("exame")
    }else{
      setTotal(`A media do ${nome} é ${notas} Aprovado`)
      setSituacao("aprovado")
    }
  }

  function Novo(){
    setTotal("")
  }

  return (
    <>
      <h1>Escola</h1>
      <h2>Media das notas</h2>
      <hr />
      <form onSubmit={handleSubmit(calcularTotal)}>
        <p>
          <label htmlFor="nome">Nome do aluno: </label>
          <input type="text" id="nome" required className='campos' {...register("nome")}/>
        </p>
        <p>
          <label htmlFor="nota1">Primeira nota do aluno: </label>
          <input type="number" name="" id="nota1" className='campos' {...register("nota1")}/>
        </p>
        <p>
          <label htmlFor="nota2">Segunda nota do aluno: </label>
          <input type="number" name="" id="nota2" className='campos' {...register("nota2")}/>
        </p>
        <p>
          <input type="reset" value="Novo Aluno" className='btn reset' onClick={Novo}/>
          <input type="submit" value="Calcular" className='btn submit'/>
        </p>
      </form>
      <h2 className={`${situacao}`}>{total}</h2>
    </>
  )
}

export default App
