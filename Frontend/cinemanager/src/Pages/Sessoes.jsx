import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logoCineManager.png"
import Header from '../Components/Header';

function Sessoes() {
    const [sessaoSelecionada, setSessaoSelecionada] = useState(false);
  
    const sessoes = [
      { id: 1, nome: "John Wick", horario: "18:00" },
      { id: 2, nome: "O Retorno", horario: "19:30" },
      { id: 3, nome: "Ad astra", horario: "21:00" },
    ];
  
    const selecionarSessao = (idSessao) => {
      setSessaoSelecionada(idSessao);
    };
    
    return (
        <div className="min-h-screen flex flex-col items-center pt-40">
          <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>

          <div className="max-w-lg w-full p-8 bg-[#270707] rounded-xl shadow-md"> 
            <div className="mb-10 text-center">
                <h3 className="text-4xl font-bold text-[#C0C0C0]">Selecione uma Sessão</h3>
            </div>
            <ul className="space-y-2">
                {sessoes.map((sessao) => (
                <li
                    key={sessao.id}
                    onClick={() => selecionarSessao(sessao.id)}
                    className={`p-4 border rounded-lg cursor-pointer ${
                    sessaoSelecionada === sessao.id
                        ? "bg-blue-500 text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                >
                    <div className="font-semibold">{sessao.nome}</div>
                    <div className="text-sm text-gray-600">{sessao.horario}</div>
                </li>
                ))}
            </ul>
            </div>
          </div>
      );
}

export default Sessoes;