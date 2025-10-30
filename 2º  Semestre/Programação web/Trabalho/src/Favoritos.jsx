import { useEffect, useState } from 'react'
import Header from './components/Header'
import CardJogos from './components/CardJogos'

function Favoritos() {
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

    const jogosFavoritos = jogos.filter(jogo => {
        const idUnico1 = `coracao_${jogo.id}`;
        return localStorage.getItem(idUnico1) === "cora_cheio";
    });

    const listaJogos = jogosFavoritos.map( jogo => (
    <CardJogos key={jogo.id} jogo={jogo} setJogos={setJogos} />
    ))

    return(
        <>
            <Header />
            <h1 className="pt-[5rem] mb-4 text-4xl tracking-tight font-extrabold text-blue-600 flex justify-center py-8">Jogos favoritos</h1>
            <section className='p-[1rem] bg-gray-900 gap-4 grid grid-cols-4'>
                {listaJogos}
            </section>
        </>
    )
}

export default Favoritos