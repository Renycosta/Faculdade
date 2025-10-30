import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import Swal from 'sweetalert2'

function CardJogos({ jogo, setJogos}){
    useEffect(() => {
        localStorage.setItem(idUnico3, "")
    })

    const idUnico1 = `coracao_${jogo.id}`
    const idUnico2 = `carrinho_${jogo.id}`
    const idUnico3 = `avaliacao_${jogo.id}`
    
    const [coracao, setCoracao] = useState(() => {
        const estadoSalvo = localStorage.getItem(idUnico1);
        return estadoSalvo !== null ? estadoSalvo : "cora_vazio";
    })
    const [carrinho, setCarrinho] = useState(() => {
        const estadoSalvo = localStorage.getItem(idUnico2);
        return estadoSalvo !== null ? estadoSalvo : "carri_vazio";
    })

    async function trocarCoracao() {
        if (coracao == "cora_vazio"){
            setCoracao("cora_cheio")
            localStorage.setItem(idUnico1, "cora_cheio")
        }else{
            setCoracao("cora_vazio")
            localStorage.setItem(idUnico1, "cora_vazio")
        }
    }

    function trocarCarrinho() {
        if (carrinho == "carri_vazio"){
            setCarrinho("carri_cheio")
            localStorage.setItem(idUnico2, "carri_cheio")
        }else{
            setCarrinho("carri_vazio")
            localStorage.setItem(idUnico2, "carri_vazio")
        }
    }

    function avaliacao() {
        localStorage.setItem(idUnico3, "entrar")
    }

    function comprar() {
        Swal.fire({
        title: "Compra realizada com sucesso!",
        html: `Enviaremos para você ${jogo.nome} <br> o mais rápido que conseguirmos`,
        icon: "success",
        background: "#101828",
        confirmButtonColor: "#155dfc",
        color: "#c7c7c7ff"
        });
    }

    return(
        <div className="max-w-[20rem] border rounded-lg shadow-sm bg-[#0c121c] border-gray-700">
            <Link>
                <img className="rounded-t-lg w-[315.74px] h-[180.93px]" src={jogo.imagem} alt="" />
            </Link>
            <div className="p-5">
                <div className='flex justify-between'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{jogo.nome}</h5>
                    <div className=''>
                        {coracao == "cora_vazio" &&
                            <CiHeart className='text-gray-400 text-4xl cursor-pointer'onClick={trocarCoracao} />
                        }
                        {coracao == "cora_cheio" &&
                            <FaHeart className='text-gray-400 text-4xl cursor-pointer'onClick={trocarCoracao}/>
                        }
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p className="mb-3 font-normal text-gray-400">{jogo.genero}</p>
                    <div className=''>
                        {carrinho == "carri_vazio" &&
                            <IoCartOutline  className='text-gray-400 text-4xl cursor-pointer'onClick={trocarCarrinho}/>
                        }
                        {carrinho == "carri_cheio" &&
                            <IoCartSharp  className='text-gray-400 text-4xl cursor-pointer'onClick={trocarCarrinho}/>
                        }
                    </div>
                </div>
                <p className="mb-3 font-normal text-gray-400">{jogo.ano}</p>
                <p className="mb-3 font-normal text-gray-400 text-justify">{jogo.sinopse}</p>
                <p className="mb-3 font-normal text-gray-400">R$ {jogo.valor}</p>
                <Link onClick={avaliacao} to="/avaliacao" className="mb-3 w-[100%] inline-flex px-[6.7rem] py-2 text-sm font-medium text-blue-600 border-[2px] border border-solid border-blue-600 rounded-lg  focus:ring-4 focus:outline-none hover:bg-blue-700 focus:ring-blue-800 hover:text-white">
                    <p>Avaliações</p>
                </Link>
                <Link onClick={comprar} className="w-[100%] inline-flex px-[7rem] py-2 text-sm font-medium text-white  rounded-lg  focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                    <p>Comprar</p>
                </Link>
            </div>
        </div>
    )
}

export default CardJogos