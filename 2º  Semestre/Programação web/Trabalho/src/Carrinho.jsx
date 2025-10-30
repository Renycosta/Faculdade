import { useEffect, useState } from 'react'
import Header from './components/Header'
import CardJogos from './components/CardJogos'
import Swal from 'sweetalert2'

function Carrinho() {
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

    
    const carrinhoCompras = jogos.filter(jogo => {
        const idUnico2 = `carrinho_${jogo.id}`;
        return localStorage.getItem(idUnico2) === "carri_cheio";
    });
    
    const listaJogos = carrinhoCompras.map( jogo => (
        <CardJogos key={jogo.id} jogo={jogo} setJogos={setJogos} />
    ))

    const nomes = carrinhoCompras.map(jogo => jogo.nome).join(', ')
    
    function comprarTudo() {
        Swal.fire({
        title: "Compra realizada com sucesso!",
        html: `Enviaremos para você ${nomes} o mais rápido que conseguirmos`,
        icon: "success",
        background: "#101828",
        confirmButtonColor: "#155dfc",
        color: "#c7c7c7ff"
        });
    }

    return(
        <>
            <Header />
            <h1 className="pt-[5rem] mb-4 text-4xl tracking-tight font-extrabold text-blue-600 flex justify-center py-8">Carrinho de compras</h1>
            <section className='p-[1rem] bg-gray-900 gap-4 grid grid-cols-4'>
                {listaJogos}
            </section>
            <div className='flex justify-center'>
                <button onClick={comprarTudo} className="inline inline-flex px-[7rem] py-2 text-lg font-medium text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 cursor-pointer">Comprar tudo
                </button>
            </div>
        </>
    )
}

export default Carrinho