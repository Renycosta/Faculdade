import { useEffect, useState } from 'react'
import './App.css'
import Titulo from './components/Titulo'
import CardFilme from './components/CardFilme'

function App() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await fetch("http://localhost:3000/filmes")
        if (!resposta.ok) throw new Error("Erro ao consultar os filmes")
        const dados = await resposta.json()
//        console.log(dados)
        setFilmes(dados.reverse()) 
      } catch (erro) {
        console.log("Erro: ", erro.message)
      }
    }
    buscarFilmes()
  }, [])

  const listaFilmes = filmes.map( filme => (
    <CardFilme key={filme.id} filme={filme} setFilmes={setFilmes} />
  ))

  return (
    <>
      <Titulo />
      <h1 style={{'margin-top': 0}}>Lista de Filmes Cadastrados</h1>
      <section className='grid-filmes'>
        {listaFilmes}
      </section>
    </>
  )
}

export default App
