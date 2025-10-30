import { useEffect } from "react"
import { useForm } from "react-hook-form"
import Header from './components/Header'

function Configs() {
    const { register, handleSubmit, setFocus} = useForm()

    async function salvaUsuario(data) {
        const nome = data.nome
        const idade = data.idade
        const imagem = data.imagem

        localStorage.setItem("nomeUsuario", nome)
        localStorage.setItem("idade", idade)
        localStorage.setItem("imagem", imagem)

        alert("Ok! dados salvos em localStorage")
    }

    useEffect(() => {
        setFocus("nome")
    }, [])

    return (
        <>
            <Header />
            <section class="bg-gray-900 pt-[4.5rem]">
                <div class="flex flex-col items-center justify-center px-6 mx-auto h-[35.3rem] ">
                    <div class="w-full rounded-lg shadow border sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="font-bold leading-tight tracking-tight text-3xl text-white text-center">
                                Cadastrar-se
                            </h1>
                            <form onSubmit={handleSubmit(salvaUsuario)} class="space-y-4 md:space-y-6">
                                <div>
                                    <label for="nome" class="block mb-2 text-m font-medium text-gray-900 dark:text-white">Nome do usuário:</label>
                                    <input type="text" id="nome" class="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="nome..." required {...register("nome")}/>
                                </div>
                                <div>
                                    <label for="idade" class="block mb-2 text-m font-medium text-gray-900 dark:text-white">Idade do usuário:</label>
                                    <input type="number" id="idade" class="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="idade..." required {...register("idade")}/>
                                </div>
                                <div>
                                    <label for="imagem" class="block mb-2 text-m font-medium text-gray-900 dark:text-white">Imagem de perfil:</label>
                                    <input type="text" id="nome" class="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="imagem..." required {...register("imagem")}/>
                                </div>
                                <input type="submit" value="Cadastrar-se" className="w-[100%] inline-flex px-[9.1rem] py-2 text-m font-medium text-white  rounded-lg  focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 cursor-pointer"/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Configs