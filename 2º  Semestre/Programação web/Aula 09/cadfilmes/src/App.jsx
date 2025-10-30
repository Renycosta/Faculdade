import { NavLink } from "react-router";
import Titulo from "./components/titulo";
import './App.css'
import { useEffect, useState } from "react";

function App() {
  const [ filmes, setFilmes ] = useState([])

  useEffect(() => {
    async function buscarFilmes() {
      const resposta = await fetch("http://localhost:3000/filmes")
      const dados = await resposta.json()
      setFilmes(dados)
    }
    buscarFilmes()
  }, [])

  const listaFilmes = filmes.map( filme => (
    <div className="cardFilme">
      <img src={filme.imagem} alt="Capa do filme" />
      <div>
        <h2>{filme.titulo}</h2>
        <h3>{filme.genero} - {filme.duracao}</h3>
        <h4>Ano de lançamento: {filme.ano}</h4>
        <p>{filme.sinopse}</p>
      </div>
    </div>
  ))

  return (
    <>
      <Titulo />
      <h1>Lista ds Filme Cadastrados</h1>
      <div className="listaCards">
        {listaFilmes}
      </div>
      <NavLink to="Inclusao">inclusao</NavLink>
    </>
  )
}

export default App
