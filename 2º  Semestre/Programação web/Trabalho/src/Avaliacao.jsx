import { useEffect, useState } from 'react'
import Header from './components/Header'
import DentroJogo from './components/DentroJogo'

function Avaliacao (){
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

    const jogoAvaliacao = jogos.filter(jogo => {
        const idUnico3 = `avaliacao_${jogo.id}`;
        return localStorage.getItem(idUnico3) === "entrar";
    });

    const listaJogos = jogoAvaliacao.map( jogo => (
        <DentroJogo key={jogo.id} jogo={jogo} setJogos={setJogos} />
    ))

    return(
        <>
            <Header />
            <section className='pt-[5rem]'>
                {listaJogos}
            </section>
        </>
    )
}

export default Avaliacao