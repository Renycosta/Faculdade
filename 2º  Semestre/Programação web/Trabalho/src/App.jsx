import { useEffect, useState } from 'react'
import Header from './components/Header'
import CardJogos from './components/CardJogos'

function App() {
  const [jogos, setJogos] = useState([])
  
  useEffect(() => {
    async function buscarJogos() {
      try {
        const resposta = await fetch("http://localhost:3000/jogos")
        if (!resposta.ok) throw new Error("Erro ao consultar os jogos")
        const dados = await resposta.json()
        setJogos(dados.reverse()) 
      } catch (erro) {
        console.log("Erro: ", erro.message)
      }
    }
    buscarJogos()
  }, [])

  const listaJogos = jogos.map( jogo => (
    <CardJogos key={jogo.id} jogo={jogo} setJogos={setJogos} />
  ))

  return (
    <>
      <Header/>
      <section className='pt-[5rem] p-[1rem] bg-gray-900 gap-4 grid grid-cols-4'>
        {listaJogos}
      </section>
    </>
  )
}

export default App
