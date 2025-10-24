import { useForm } from 'react-hook-form'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const { register, handleSubmit, reset, setFocus } = useForm()
  const [agenda, setAgenda] = useState([])

  useEffect( () => {
    //se houver dados salvos em local storage
    if (localStorage.getItem("agenda")){
      const agenda2 = JSON.parse(localStorage.getItem("agenda"))
      setAgenda(agenda2)
    }
    setFocus("descricao")
  }, [])

  function cadastraCompromisso(data) {
    const descricao = data.descricao
    const dia = data.dia
    const hora = data.hora

    const agenda2 = [...agenda, {descricao, dia, hora}]
    setAgenda(agenda2)
    alert("Compromisso Cadastrado com Sucesso")
    
    localStorage.setItem("agenda", JSON.stringify(agenda2))
    // reset()
  }

  const listaAgenda = agenda.map( compromisso =>(
    <tr>
      <td>{compromisso.descricao}</td>
      <td>{compromisso.dia}</td>
      <td>{compromisso.hora}</td>
    </tr>
  ))

  function limpar() {
    reset()
    setAgenda([])
    localStorage.removeItem("agenda")
    setFocus("descricao")
  }

  return (
    <>
      <header>
        <img src="./logo.png"/>
        <div>
          <h1>Agenda de Compromissos Pessoais</h1>
          <h2>Cadastros de Compromissos da Semana</h2>
        </div>
      </header>
      <form onSubmit={handleSubmit(cadastraCompromisso)} onReset={limpar}>
        <p>
          <label htmlFor="descricao">Descrição: </label>
          <input type="text" id="descricao" {...register("descricao")} required/>
        </p>
        <p>
          <label htmlFor="data">Data: </label>
          <input type="date" id="dia" {...register("dia")} required/>
        </p>
        <p>
          <label htmlFor="hora">Hora: </label>
          <input type="time" id="hora" {...register("hora")} required/>
        </p>
        <input type="submit" value="Cadastrar" className='btn submit'/>
        <input type="reset" value="Limpar" className='btn reset'/>
      </form>
      <main>
        <h2 className='centro'>Lista dos Compromissos Cadastrados</h2>
        <table>
          <thead>
            <tr>
              <th>Compromisso</th>
              <th>Data</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            {listaAgenda}
          </tbody>
        </table>
      </main>
    </>
  )
}

export default App
