import { Link } from "react-router-dom"
import logo from "../assets/logoCineManager.png"
import Header from '../Components/Header';

function ClientCadastro() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
            {/* Header */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>

            {/* Card de Cadastro */}
            <div className="w-full max-w-lg bg-[#270707] rounded-2xl shadow-2xl p-10 mt-15">
                <h3 className="text-3xl font-bold text-center text-[#C0C0C0] mb-8">Cadastrar Cliente</h3>

                <form className="space-y-5">
                    {/* Nome */}
                    <div>
                        <label className="block text-sm font-semibold text-[#C0C0C0] mb-1">Nome completo</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Nome completo"
                                className="w-full p-3 pl-4 pr-10 rounded-lg bg-gray-200 outline-none focus:ring-2 focus:ring-red-900"
                            />
                            <i className="bx bx-user bx-sm absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                        </div>
                    </div>

                    {/* CPF */}
                    <div>
                        <label className="block text-sm font-semibold text-[#C0C0C0] mb-1">CPF</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="CPF"
                                className="w-full p-3 pl-4 pr-10 rounded-lg bg-gray-200 outline-none focus:ring-2 focus:ring-red-900"
                            />
                            <i className="bx bx-id-card bx-sm absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold text-[#C0C0C0] mb-1">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 pl-4 pr-10 rounded-lg bg-gray-200 outline-none focus:ring-2 focus:ring-red-900"
                            />
                            <i className="bx bx-envelope bx-sm absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                        </div>
                    </div>

                    {/* Data de nascimento */}
                    <div>
                        <label className="block text-sm font-semibold text-[#C0C0C0] mb-1">Data de nascimento</label>
                        <input
                            type="date"
                            className="w-full p-3 rounded-lg bg-gray-200 outline-none focus:ring-2 focus:ring-red-900"
                        />
                    </div>

                    {/* Botão */}
                    <button
                        type="submit"
                        className="w-full p-3 mt-5 bg-[#800F0F] hover:bg-red-800 hover:text-black text-white font-semibold rounded-xl transition-all focus:ring-2 focus:ring-gray-600 cursor-pointer"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ClientCadastro;
