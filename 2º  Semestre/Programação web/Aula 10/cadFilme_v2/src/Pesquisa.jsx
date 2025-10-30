import { useForm } from "react-hook-form"
import './Pesquisa.css'
import Titulo from './components/Titulo'
import { useState } from "react"
import CardFilme from "./components/CardFilme"

function Pesquisa() {
  const { register, handleSubmit } = useForm()
  const [filmes, setFilmes] = useState([])

  async function pesquisaFilmes(data) {
    try {
      const resposta = await fetch("http://localhost:3000/filmes")
      if (!resposta.ok) throw new Error("Erro ao consultar os filmes")
      const dados = await resposta.json()
      const dados2 = dados.filter(filme => (
        filme.titulo.toUpperCase().includes(data.pesquisa.toUpperCase()) ||
        filme.genero.toUpperCase().includes(data.pesquisa.toUpperCase())
      ))
      if (dados2.length == 0) {
        alert("Não há filmes com a palavra-chave no título ou gênero")
      } else {
        setFilmes(dados2)
      }
    } catch (erro) {
      console.log("Erro: ", erro.message)
    }
  }

  const listaFilmes = filmes.map(filme => (
    <CardFilme key={filme.id} filme={filme} />
  ))

  return (
    <>
      <Titulo />
      <h1 style={{ 'margin-top': 0 }}>Pesquisa de Filmes</h1>
      <form className='form-pesquisa'
        onSubmit={handleSubmit(pesquisaFilmes)}>
        <input type="text" className='campo-pesquisa' required
          placeholder="Palavra chave do título ou gênero"
          {...register("pesquisa")} />
        <input type="submit" value="Pesquisar"
          className='btn-pesquisa' />
      </form>

      <section className='grid-filmes'>
        {listaFilmes}
      </section>
    </>
  )
}

export default Pesquisa
