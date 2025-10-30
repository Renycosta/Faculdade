import { useForm } from "react-hook-form"
import { useEffect } from "react"
import Header from './components/Header'

function Inclusao() {
    const { register, handleSubmit, reset, setFocus} = useForm()

    async function cadastraJogo(data) {
        const nome = data.nome
        const genero = data.genero
        const ano = data.ano
        const sinopse = data.sinopse
        const imagem = data.imagem
        const valor = data.valor
   
        try {
            const resposta = await fetch("http://localhost:3000/jogos", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({
                nome, genero, ano, sinopse, imagem, valor
                })
            })
            if (!resposta.ok) throw new Error("Erro ao incluir o jogo")
            const novoJogo = await resposta.json()
            alert(`Ok! Jogo cadastrado com o código: ${novoJogo.id}`)
        } catch (erro) {
            console.log(`Erro: ${erro.message}`)
        }
        reset()
    }

    useEffect(() => {
        setFocus("nome")
    }, [])

    return(
        <>
            <Header /> 
            {/*<section className="bg-gray-800">
                <form className="mx-auto " onSubmit={handleSubmit(cadastraJogo)}>
                    <div className="px-[59px] grid grid-cols-3 gap-x-[8rem]">
                        <div className="py-4">
                            <label htmlFor="nome" className="mb-2 text-lg font-medium text-gray-900  dark:text-white">Nome:</label>
                            <input type="text" id="nome" className="block w-[448px] p-4 text-sm  border  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Nome..." required {...register("nome")}/>
                        </div>
                        <div className="py-4">
                            <label htmlFor="genero" className="mb-2 text-lg font-medium text-gray-900  dark:text-white">Gênero:</label>
                            <input type="text" id="genero" className="block w-[448px] p-4 text-sm  border  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Gênero..." required {...register("genero")}/>
                        </div>
                        <div className="py-4">
                            <label htmlFor="ano" className="mb-2 text-lg font-medium text-gray-900  dark:text-white">Ano:</label>
                            <input type="text" id="ano" className="block w-[334px] p-4 text-sm  border  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Ano..." required {...register("ano")}/>
                        </div>
                        <div className="py-4">
                            <label htmlFor="sinopse" className="mb-2 text-lg font-medium text-gray-900  dark:text-white">Sinopse:</label>
                            <input type="text" id="sinopse" className="block w-[448px] p-4 text-sm  border  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Sinopse..." required {...register("sinopse")}/>
                        </div>
                        <div className="py-4">
                            <label htmlFor="imagem" className="mb-2 text-lg font-medium text-gray-900  dark:text-white">Imagem:</label>
                            <input type="text" id="imagem" className="block w-[448px] p-4 text-sm  border  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Imagem..." required {...register("imagem")}/>
                        </div>
                        <div className="py-4">
                            <label htmlFor="valor" className="mb-2 text-lg font-medium text-gray-900  dark:text-white">Valor:</label>
                            <input type="text" id="valor" className="block w-[334px] p-4 text-sm  border  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Valor..." required {...register("valor")}/>
                        </div>
                    </div>
                    <div className="pb-8 flex gap-2 justify-center">
                        <input type="submit" value="Cadastrar" className='text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 cursor-pointer' />
                        <input type="reset" value="Limpar" className='text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-4 py-2 bg-red-600 hover:bg-red-700 focus:ring-red-800 pointer cursor-pointer' />
                    </div>
                </form>
            </section>*/}
            <section className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 pt-[5rem]">
                <div className="max-w-4xl mx-auto bg-gray-800 p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-700">
                    <h2 className="text-3xl font-extrabold text-white text-center mb-8 tracking-tight">Incluir um Novo Jogo</h2>
                    <form onSubmit={handleSubmit(cadastraJogo)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <label htmlFor="nome" className="block mb-2 text-sm font-semibold text-gray-300">Nome:</label>
                                <input type="text" id="nome" className="block w-full p-3 text-sm border-2 border-gray-600 rounded-lg bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out" placeholder="Nome do Jogo..." required {...register("nome")}/>
                            </div>
                            <div>
                                <label htmlFor="genero" className="block mb-2 text-sm font-semibold text-gray-300">Gênero:</label>
                                <input type="text" id="genero" className="block w-full p-3 text-sm border-2 border-gray-600 rounded-lg bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out" placeholder="Ação, RPG, Estratégia..." required {...register("genero")}/>
                            </div>
                            <div>
                                <label htmlFor="ano" className="block mb-2 text-sm font-semibold text-gray-300">Ano de Lançamento:</label>
                                <input type="text" id="ano" className="block w-full p-3 text-sm border-2 border-gray-600 rounded-lg bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out" placeholder="Ex: 2023" required {...register("ano")}/>
                            </div>
                            <div className="lg:col-span-3"> 
                                <label htmlFor="sinopse" className="block mb-2 text-sm font-semibold text-gray-300">Sinopse:</label>
                                <textarea id="sinopse" rows="3" className="block w-full p-3 text-sm border-2 border-gray-600 rounded-lg bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out resize-none" placeholder="Uma breve descrição do jogo..." required {...register("sinopse")}></textarea>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="imagem" className="block mb-2 text-sm font-semibold text-gray-300">URL da Imagem:</label>
                                <input type="text" id="imagem" className="block w-full p-3 text-sm border-2 border-gray-600 rounded-lg bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out" placeholder="http://..." required {...register("imagem")}/>
                            </div>
                            <div>
                                <label htmlFor="valor" className="block mb-2 text-sm font-semibold text-gray-300">Valor (R$):</label>
                                <input type="text" id="valor" className="block w-full p-3 text-sm border-2 border-gray-600 rounded-lg bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out" placeholder="Ex: 199.90" required {...register("valor")}/>
                            </div>
                        </div>
                        <div className="pt-6 flex flex-wrap gap-4 justify-center">
                            <input type="submit" value="Cadastrar Jogo" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-bold rounded-lg text-base px-6 py-3 shadow-lg over:shadow-xl transition duration-300 ease-in-out cursor-pointer w-full sm:w-auto"/>
                            <input type="reset" value="Limpar Campos" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-800 font-bold rounded-lg text-base px-6 py-3 shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer w-full sm:w-auto"/>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Inclusao 