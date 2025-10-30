import { useState } from "react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { FaSearch } from "react-icons/fa";
import Header from './components/Header'
import CardJogos from './components/CardJogos'


function Pesquisa() {
    const { register, handleSubmit, setFocus} = useForm()
    const [jogos, setJogos] = useState([])

    async function pesquisaJogos(data) {
        try {
        const resposta = await fetch("http://localhost:3000/jogos")
        if (!resposta.ok) throw new Error("Erro ao consultar os jogos")
        const dados = await resposta.json()
        const dados2 = dados.filter(jogo => (
            jogo.nome.toUpperCase().includes(data.pesquisa.toUpperCase()) ||
            jogo.genero.toUpperCase().includes(data.pesquisa.toUpperCase())
        ))
        if (dados2.length == 0) {
            alert("Não há jogos com a palavra-chave no título ou gênero")
        } else {
            setJogos(dados2)
        }
        } catch (erro) {
        console.log("Erro: ", erro.message)
        }
    }
    
    const listaJogos = jogos.map(jogo => (
    <CardJogos key={jogo.id} jogo={jogo} />
    ))

    useEffect(() => {
        setFocus("pesquisa")
    }, [])

    return(
        <>
            <Header />
            <section className="bg-gray-900 pt-[5rem]">
                <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-600 flex justify-center py-8">Pesquisa de jogos</h1>
                <form className="max-w-md mx-auto" onSubmit={handleSubmit(pesquisaJogos)}>
                    <label for="pesquisa" className="mb-2 text-sm font-medium sr-only text-white">Pesquisar</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <FaSearch className="w-4 h-4 text-gray-400"/>
                        </div>
                        <input type="text" id="pesquisa" className="block w-full p-4 ps-10 text-sm border rounded-lg focus:border-blue-500 bg-gray-800 border-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Pesquisar..." required {...register("pesquisa")}/>
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 cursor-pointer">Pesquisar</button>
                    </div>
                </form>
            </section>

            <section className='p-[1rem] bg-gray-900 gap-4 grid grid-cols-4'>
                {listaJogos}
            </section>
        </>
    )
}

export default Pesquisa