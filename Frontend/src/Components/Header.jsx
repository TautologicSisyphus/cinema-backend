import logo from "../assets/logoCineManager.png"
import { useState } from "react"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="w-full absolute z-50">
            <header className="w-full bg-[#270707] drop-shadow-md py-6 px-8 md:px-32">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center text-[#C0C0C0]">
                    
                    {/* Logo do CineManager */}
                    <a href="#">
                        <img src={logo} alt="CineManager" className="w-52 hover:scale-105 transition-all" />
                    </a>

                    {/* Navegação */}
                    <div className="flex items-center gap-8">
                        {/* Menu em telas grandes */}
                        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                            <li className="p-3 hover:bg-[#3e1e1e] hover:text-white rounded-md transition-all cursor-pointer">
                                Sessões
                            </li>
                            <li className="p-3 hover:bg-[#3e1e1e] hover:text-white rounded-md transition-all cursor-pointer">
                                Alimentos
                            </li>
                            <li className="p-3 hover:bg-[#3e1e1e] hover:text-white rounded-md transition-all cursor-pointer">
                                Área do Cliente
                            </li>
                        </ul>

                        {/* Botão Registrar-se */}
                        <button 
                        className="ml-6 px-5 py-2 bg-red-950 hover:bg-red-900 text-[#C0C0C0] font-semibold rounded-lg transition-all cursor-pointer">
                            Registrar-se
                        </button>

                        {/* Ícone menu hamburguer: só aparece em telas menores */}
                        <button
                            className="xl:hidden block text-5xl cursor-pointer text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className="bx bx-menu text-[#C0C0C0]"></i>
                        </button>
                    </div>
                </div>

                {/* Menu mobile */}
                <div
                    className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                        isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <ul className="flex flex-col items-center gap-4 font-semibold text-lg bg-[#270707] pt-4 pb-6">
                        <li className="list-none w-full text-[#C0C0C0] text-center p-4 hover:bg-[#3e1e1e] hover:text-white rounded-md transition-all cursor-pointer">Sessões</li>
                        <li className="list-none w-full text-[#C0C0C0] text-center p-4 hover:bg-[#3e1e1e] hover:text-white rounded-md transition-all cursor-pointer">Alimentos</li>
                        <li className="list-none w-full text-[#C0C0C0] text-center p-4 hover:bg-[#3e1e1e] hover:text-white rounded-md transition-all cursor-pointer">Área do Cliente</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header
