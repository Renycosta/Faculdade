import { Link } from 'react-router'
import './Titulo.css'

export default function Titulo() {
  return (
    <>
      <header>
        <img src="./logo.png" alt="Filmes" />
        <div>
          <h1>Controle de Filmes da Família Silva</h1>
          <h2>Sugestões e Avaliações de Filmes da Família Silva</h2>
        </div>
      </header>
      <nav>
        <Link to="/" className='links'>Home</Link>&nbsp;&nbsp;
        <Link to="/inclusao" className='links'>Inclusão</Link>&nbsp;&nbsp;
        <Link to="/pesquisa" className='links'>Pesquisa</Link>&nbsp;&nbsp;
      </nav>
    </>
  )
}