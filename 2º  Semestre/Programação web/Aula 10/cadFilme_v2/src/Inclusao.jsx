import { useForm } from "react-hook-form"
import './Inclusao.css'
import Titulo from './components/Titulo'

function Inclusao() {
  const { register, handleSubmit } = useForm()

  async function cadastraFilme(data) {
    const titulo = data.titulo
    const genero = data.genero
    const ano = data.ano
    const plataforma = data.plataforma
    const duracao = data.duracao
    const sinopse = data.sinopse
    const imagem = data.imagem

    try {
      const resposta = await fetch("http://localhost:3000/filmes", {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify({
          titulo, genero, ano, plataforma, duracao, sinopse, imagem
        })
      })
      if (!resposta.ok) throw new Error("Erro ao incluir o filme")
      const novoFilme = await resposta.json()
      alert(`Ok! Filme cadastrado com o código: ${novoFilme.id}`)
    } catch (erro) {
      console.log(`Erro: ${erro.message}`)
    }
  }

  return (
    <>
      <Titulo />
      <div className='margem-esq'>
        <h1 style={{'margin-top': 0}}>Inclusão de Filmes</h1>
        <form onSubmit={handleSubmit(cadastraFilme)}>
          <p>
            <label htmlFor="titulo">Título do Filme:</label>
            <input type="text" id="titulo" required
              className='campos larguraG' 
              {...register("titulo")}/>
          </p>
          <div className='duas-colunas'>
            <p>
              <label htmlFor="genero">Gênero:</label>
              <input type="text" id="genero" required
                className='campos larguraM'
                {...register("genero")} />
            </p>
            <p>
              <label htmlFor="ano" className='margem-esq'>Ano de Lanç.:</label>
              <input type="number" id="ano" required
                className='campos larguraP margem-esq' 
                {...register("ano")}/>
            </p>
          </div>
          <div className='duas-colunas'>
            <p>
              <label htmlFor="plataforma">Plataforma:</label>
              <input type="text" id="plataforma" required
                className='campos larguraM' 
                {...register("plataforma")} />
            </p>
            <p>
              <label htmlFor="duracao" className='margem-esq'>Duração (min):</label>
              <input type="number" id="duracao" required
                className='campos larguraP margem-esq' 
                {...register("duracao")} />
            </p>
          </div>
          <p>
            <label htmlFor="sinopse">Sinopse:</label>
            <textarea id="sinopse" required rows={3}
              className='campos larguraG'
              {...register("sinopse")}></textarea>
          </p>
          <p>
            <label htmlFor="imagem">URL da Capa do Filme:</label>
            <input type="url" id="imagem" required
              className='campos larguraG' 
              {...register("imagem")} />
          </p>
          <input type="submit" value="Cadastrar" className='btn submit' />
          <input type="reset" value="Limpar" className='btn reset margem-esq' />
        </form>
      </div>
    </>
  )
}

export default Inclusao
