import './CardFilme.css'

function CardFilme({ filme, setFilmes }) {

  return (
    <div className='cards'>
      <img src={filme.imagem} alt="Capa do Filme" />
      <div>
        <h3>{filme.titulo}</h3>
        <h4>{filme.genero} - {filme.duracao} min.</h4>
        <h4>Ano de Lançamento: {filme.ano}</h4>
        <p className="p-sinopse">{filme.sinopse}</p>
      </div>
    </div>
  )
}

export default CardFilme