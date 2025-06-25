import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logoCineManager.png"
import Header from '../Components/Header';


function Register() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return(
        <div className="min-h-screen flex flex-col items-center pt-40">
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>

            <div className="max-w-lg w-full p-8 bg-[#270707] rounded-xl shadow-md"> 
                <div className="mb-10 text-center">
                    <h3 className="text-4xl font-bold text-[#C0C0C0]">Registrar-se</h3>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-semibold text-sm text-[#C0C0C0]">Nome de usuário</label>
                    <div className="relative">
                        <input 
                        type="text" 
                        placeholder="Nome de usuário"
                        className="w-full p-3 pl-4 pr-10 rounded-lg bg-gray-200 outline-none focus:ring-2 focus:ring-gray-600"
                        />
                        <i className='bx bx-user bx-sm absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'></i>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 font-semibold text-sm text-[#C0C0C0]">Senha</label>
                    <div className="relative">
                        <input 
                        type={showPassword ? "text" : "password"}
                        placeholder="Senha"
                        className="w-full p-3 pl-4 pr-10 rounded-lg bg-gray-200 outline-none focus:ring-2 focus:ring-gray-600"
                        />
                        <i 
                        className={`bx ${showPassword ? "bx-show" : "bx-hide"} bx-sm absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer`}
                        onClick={togglePassword}
                        ></i>
                    </div>
                </div>
                <button className="w-full p-3 mt-5 bg-[#800F0F] hover:bg-red-800 hover:text-black text-white font-semibold rounded-xl transition-all focus:ring-2 focus:ring-gray-600 cursor-pointer">
                    Registrar
                </button> 
            </div>
        </div>
    )
}

export default Register;
