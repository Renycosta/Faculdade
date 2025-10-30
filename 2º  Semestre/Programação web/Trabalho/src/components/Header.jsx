import { Link } from 'react-router-dom'
import { IoGameControllerOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Header(){
    return(
        <>
            <nav className="border-gray-200 bg-gray-900 shadow-2xl fixed w-[100%]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <IoGameControllerOutline className='text-4xl text-white'/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Loja de jogos</span>
                    </Link>
                    <div className="hidden w-full md:block md:w-auto">
                    <ul className="font-medium flex p-0 border-gray-100 rounded-lg flex-row space-x-8 mt-0 bg-gray-900">
                        <li>
                            <Link to="/" className="block bg-transparent p-0 text-blue-500 font-semibold">Home</Link>
                        </li>
                        <li>
                            <Link to="/pesquisa" className="block bg-transparent p-0 text-blue-500 font-sembold">Pesquisa</Link>
                        </li>
                        <li>
                            <Link to="/inclusao" className="block bg-transparent p-0 text-blue-500 font-semibold">Inclusão</Link>
                        </li>
                        <li>
                            <Link to="/favoritos"><FaHeart className='text-blue-700 text-2xl cursor-pointer'/></Link>      
                        </li>    
                        <li>
                            <Link to="/carrinho"><IoCartSharp className='text-blue-700 text-2xl cursor-pointer'/></Link>      
                        </li>
                        <li>
                            <Link to="/configs"><IoPersonCircleOutline className='text-blue-700 text-2xl cursor-pointer'/></Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
