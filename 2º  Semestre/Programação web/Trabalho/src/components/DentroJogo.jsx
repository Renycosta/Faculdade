import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import Swal from 'sweetalert2'

function DentroJogo({jogo, setJogos}){
    const idUnico1 = `coracao_${jogo.id}`
    const idUnico2 = `carrinho_${jogo.id}`

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
        <>
            <section className="md:py-10 bg-gray-900 antialiased"> {/*Jogo escolhido*/}
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <img className="w-full flex" src={jogo.imagem}/>
                    <div className="mt-0">
                        <h1 className="text-4xl font-semibold text-white">
                            {jogo.nome}
                        </h1>
                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex pb-[1rem]">
                            <p className="text-2xl font-extrabold sm:text-3xl text-white">R$ {jogo.valor}</p>
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                            <p className="text-sm font-medium leading-none text-gray-400">(5.0)</p>
                            <p className="text-sm font-medium leading-none text-gray-400">345 Reviews</p>
                            </div>
                        </div>

                        <p className="text-m font-medium leading-none text-gray-400 pb-[0.5rem]">Gênero: {jogo.genero}</p>

                        <p className="text-m font-medium leading-none text-gray-400">Ano lançamento: {jogo.ano}</p>

                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            <Link onClick={trocarCoracao} className=" inline-flex px-[1rem] py-2 text-sm font-medium text-gray-600 border-[2px] border border-solid border-gray-600 rounded-lg focus:ring-4 focus:outline-none hover:bg-gray-700 focus:ring-gray-800 hover:text-white gap-3">
                                <div>
                                    {coracao == "cora_vazio" &&
                                        <CiHeart className='text-gray-600 text-[1.3rem] cursor-pointer'/>
                                    }
                                    {coracao == "cora_cheio" &&
                                        <FaHeart className='text-gray-600 text-[1.3rem] cursor-pointer'/>
                                    }
                                </div>
                                <p>Favoritar</p>
                            </Link>
                            <Link onClick={trocarCarrinho} className="inline-flex px-[1rem] py-2 text-sm font-medium text-blue-600 border-[2px] border border-solid border-blue-600 rounded-lg focus:ring-4 focus:outline-none hover:bg-blue-700 focus:ring-blue-800 hover:text-white gap-3">
                                <div>
                                    {carrinho == "carri_vazio" &&
                                        <IoCartOutline className='text-blue-600 text-[1.3rem] cursor-pointer'/>
                                    }
                                    {carrinho == "carri_cheio" &&
                                        <IoCartSharp className='text-blue-600 text-[1.3rem] cursor-pointer'/>
                                    }
                                </div>
                                <p>Carrinho</p>
                            </Link>
                            <Link onClick={comprar} className="inline-flex px-[1rem] inline-flex py-[0.7rem] text-sm font-medium text-white  rounded-lg  focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                <p>Comprar</p>
                            </Link>
                        </div>

                        <hr className="my-6 border-gray-700" />

                        <p className="mb-6 text-gray-400">
                            {jogo.sinopse}
                        </p>
                    </div>
                </div>
                </div>
            </section>
            <form className='flex justify-center'> {/*Publicar comentário*/}
                <label for="chat" className="sr-only">Your message</label>
                <div class="w-[92%] flex items-center justify-center px-3 py-2 rounded-lg bg-gray-800">
                    <select id="nota" className='py-2.5 px-[3px] text-sm rounded-lg border focus:ring-blue-500 focus:border-blue-500 bg-gray-900 border-gray-700 text-gray-400'>
                        <option id="Odiei" value="Odiei">Odiei</option>
                        <option id="Ok" value="Ok">Ok</option>
                        <option id="Gostei" value="Gostei">Gostei</option>
                        <option id="Amei" value="Amei">Amei</option>
                    </select>
                    <textarea id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm rounded-lg border focus:ring-blue-500 focus:border-blue-500 bg-gray-900 border-gray-700 placeholder-gray-400 text-white" placeholder="Seu texto..."></textarea>
                    <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                        <IoMdSend className='text-[1.6rem]'/>
                    </button>
                </div>
            </form>
            <section className='flex justify-center'> {/*Comentários*/}
                <div className='w-[92%] mt-[2rem]'>
                    <div class="flex justify-between items-center mb-2">
                        <div class="flex items-center">
                            <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><img
                                    class="mr-2 w-6 h-6 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                    alt="Michael Gough"/>Michael Gough</p>
                            <p class="text-sm text-gray-600 dark:text-gray-400">Feb. 8, 2022</p>
                        </div>
                    </div>
                    <p class="text-gray-500 dark:text-gray-400">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.</p>
                    <hr class="my-6 border-gray-200 dark:border-gray-700" />
                </div>
            </section>
        </>
    )
}

export default DentroJogo