import logo from "../assets/logoCineManager.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import CartIcon from './CartIcon';


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isFuncionarioOpen, setIsFuncionarioOpen] = useState(false);
    const [isClienteOpen, setIsClienteOpen] = useState(false);
    const [isProdutoOpen, setIsProdutoOpen] = useState(false);


    return (
        <div className="w-full absolute z-50">
            <header className="w-full bg-[#270707] drop-shadow-md py-6 px-8 md:px-32">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center text-[#C0C0C0]">
                    
                    {/* Logo do CineManager */}
                    <Link to="/">
                        <img src={logo} alt="CineManager" className="w-52 hover:scale-105 transition-all" />
                    </Link>
                    

                    {/* Navegação */}
                    <div className="flex items-center gap-8">
                        {/* Menu em telas grandes */}
                        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base relative">
                            <li>
                                <Link 
                                  to="/sessoes"
                                  className="p-3 hover:bg-[#3e1e1e] hover:text-white rounded-md transition-all cursor-pointer">
                                    Sessões
                                </Link>
                            </li>
                            <li className="relative">
                                <button
                                    onClick={() => setIsProdutoOpen(prev => !prev)}
                                    className="p-3 hover:bg-[#3e1e1e] hover:text-white rounded-md transition-all cursor-pointer flex items-center gap-1"
                                >
                                    Produtos
                                    <i className={`bx bx-chevron-down transition-transform ${isProdutoOpen ? "rotate-180" : ""}`}></i>
                                </button>

                                {isProdutoOpen && (
                                    <ul className="absolute top-full left-0 mt-2 bg-[#3e1e1e] rounded-md shadow-md w-56 z-40">
                                        <li>
                                            <Link to="/ingressos" className="block px-4 py-2 text-sm text-[#C0C0C0] hover:bg-[#4a2a2a] hover:text-black">
                                            Ingressos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/alimentos" className="block px-4 py-2 text-sm text-[#C0C0C0] hover:bg-[#4a2a2a]
                                            hover:text-black">
                                            Alimentos
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="relative">
                                <button
                                    onClick={() => setIsClienteOpen(prev => !prev)}
                                    className="p-3 hover:bg-[#3e1e1e] hover:text-white rounded-md transition-all cursor-pointer flex items-center gap-1"
                                >
                                    Área do Cliente
                                    <i className={`bx bx-chevron-down transition-transform ${isClienteOpen ? "rotate-180" : ""}`}></i>
                                </button>

                                {isClienteOpen && (
                                    <ul className="absolute top-full left-0 mt-2 bg-[#3e1e1e] rounded-md shadow-md w-56 z-40">
                                        <li>
                                            <Link to="/cliente-cadastro" className="block px-4 py-2 text-sm text-[#C0C0C0] hover:bg-[#4a2a2a] hover:text-black">
                                            Cadastrar novo cliente
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cliente-lista" className="block px-4 py-2 text-sm text-[#C0C0C0] hover:bg-[#4a2a2a]
                                            hover:text-black">
                                            Lista de clientes
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cliente-compras" className="block px-4 py-2 text-sm text-[#C0C0C0] hover:bg-[#4a2a2a]
                                            hover:text-black">
                                            Atendimento ao cliente
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                                <li className="relative">
                                    <button
                                        onClick={() => setIsFuncionarioOpen(prev => !prev)}
                                        className="p-3 hover:bg-[#3e1e1e] hover:text-white rounded-md transition-all cursor-pointer flex items-center gap-1"
                                    >
                                        Funcionários
                                        <i className={`bx bx-chevron-down transition-transform ${isFuncionarioOpen ? "rotate-180" : ""}`}></i>
                                    </button>

                                    {isFuncionarioOpen && (
                                        <ul className="absolute top-full left-0 mt-2 bg-[#3e1e1e] rounded-md shadow-md w-56 z-40">
                                            <li>
                                                <Link to="/funcs-cadastro" className="block px-4 py-2 text-sm text-[#C0C0C0] hover:bg-[#4a2a2a]hover:text-black">
                                                Cadastrar novo funcionário
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/funcs-lista" className="block px-4 py-2 text-sm text-[#C0C0C0] hover:bg-[#4a2a2a]
                                                hover:text-black">
                                                Lista de funcionários
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                    </li>
                        </ul>
                        {/* Ícone do carrinho */}
                        <Link to="/cart">
                            <CartIcon />
                        </Link>
                        {/* Botão Registrar-se */}
                        <Link to="/register">
                            <button 
                            className="ml-6 px-5 py-2 bg-red-950 hover:bg-red-900 text-[#C0C0C0]
                            hover:text-white font-semibold rounded-lg transition-all cursor-pointer">
                                Registrar-se
                            </button>
                        </Link>

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
                        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <ul className="flex flex-col items-center gap-4 font-semibold text-lg bg-[#270707] pt-4 pb-6">
                        <li className="list-none w-full text-[#C0C0C0] text-center p-4 hover:bg-[#3e1e1e] hover:text-white rounded-md transition-all cursor-pointer">
                            <Link to="/sessoes">Sessões</Link>
                        </li>
                        <li className="list-none w-full text-[#C0C0C0] text-center p-4 hover:bg-[#3e1e1e] hover:text-white rounded-md transition-all cursor-pointer">
                            <Link to="/Alimentos">Alimentos</Link>
                        </li>
                        <li className="list-none w-full text-[#C0C0C0] text-center p-4 hover:bg-[#3e1e1e] hover:text-white rounded-md transition-all cursor-pointer">
                            <Link to="/clients">Área do Cliente</Link>
                        </li>
                        <li className="list-none w-full text-[#C0C0C0] text-center p-4 hover:bg-[#3e1e1e] hover:text-white rounded-md transition-all cursor-pointer">
                            <Link to="/funcs">Funcionários</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header
